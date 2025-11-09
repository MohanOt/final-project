import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { MeshBackground } from "@/components/MeshBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Loader2, Mail, FileText, Bell, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EcoAIDashboard = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState<any[]>([]);

  // Email Generator
  const [emailTemplate, setEmailTemplate] = useState("cold_outreach");
  const [emailContext, setEmailContext] = useState("");
  const [generatedEmail, setGeneratedEmail] = useState("");

  // Document Summarizer
  const [documentText, setDocumentText] = useState("");
  const [documentSummary, setDocumentSummary] = useState("");

  // Reminder Creator
  const [reminderContent, setReminderContent] = useState("");
  const [reminderDate, setReminderDate] = useState("");

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      loadTasks();
    }
  }, [user]);

  const loadTasks = async () => {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("user_id", user?.id)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setTasks(data);
    }
  };

  const handleGenerateEmail = async () => {
    if (!emailContext.trim()) {
      toast({
        title: "Missing context",
        description: "Please provide context for the email",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const templates = {
        cold_outreach: "Write a professional cold outreach email",
        investor_update: "Write an investor update email",
        newsletter: "Write a newsletter email",
        follow_up: "Write a follow-up email"
      };

      const { data, error } = await supabase.functions.invoke("sustainability-chat", {
        body: {
          messages: [
            {
              role: "user",
              content: `${templates[emailTemplate as keyof typeof templates]} based on this context: ${emailContext}`
            }
          ]
        }
      });

      if (error) throw error;

      setGeneratedEmail(data.message);
      
      // Save as task
      await supabase.from("tasks").insert({
        user_id: user?.id,
        type: "email",
        content: data.message,
      });

      toast({
        title: "Email generated!",
        description: "Your email is ready",
      });
      loadTasks();
    } catch (error: any) {
      console.error("Error generating email:", error);
      toast({
        title: "Generation failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSummarizeDocument = async () => {
    if (!documentText.trim()) {
      toast({
        title: "Missing document",
        description: "Please paste your document text",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("summarize-doc", {
        body: { documentText, documentType: "text" },
      });

      if (error) throw error;

      setDocumentSummary(data.summary);
      
      // Save as task
      await supabase.from("tasks").insert({
        user_id: user?.id,
        type: "summary",
        content: data.summary,
      });

      toast({
        title: "Document summarized!",
        description: "Summary generated successfully",
      });
      loadTasks();
    } catch (error: any) {
      console.error("Error summarizing document:", error);
      toast({
        title: "Summarization failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCreateReminder = async () => {
    if (!reminderContent.trim() || !reminderDate) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase.from("tasks").insert({
        user_id: user?.id,
        type: "reminder",
        content: reminderContent,
        due_date: new Date(reminderDate).toISOString(),
      });

      if (error) throw error;

      toast({
        title: "Reminder created!",
        description: "Your reminder has been saved",
      });
      setReminderContent("");
      setReminderDate("");
      loadTasks();
    } catch (error: any) {
      console.error("Error creating reminder:", error);
      toast({
        title: "Creation failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const toggleTaskComplete = async (taskId: string, completed: boolean) => {
    const { error } = await supabase
      .from("tasks")
      .update({ completed: !completed })
      .eq("id", taskId);

    if (!error) {
      loadTasks();
    }
  };

  if (authLoading) {
    return (
      <Layout>
        <MeshBackground />
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="w-8 h-8 animate-spin" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <MeshBackground />
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-eco bg-clip-text text-transparent">
            EcoAI Assistant Dashboard
          </h1>
          <p className="text-muted-foreground">
            Automate your startup tasks with AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Email Generator */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Generator
              </CardTitle>
              <CardDescription>Generate professional emails instantly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Template Type</Label>
                <Select value={emailTemplate} onValueChange={setEmailTemplate}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cold_outreach">Cold Outreach</SelectItem>
                    <SelectItem value="investor_update">Investor Update</SelectItem>
                    <SelectItem value="newsletter">Newsletter</SelectItem>
                    <SelectItem value="follow_up">Follow-up</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Context</Label>
                <Textarea
                  placeholder="Provide context for the email..."
                  value={emailContext}
                  onChange={(e) => setEmailContext(e.target.value)}
                  rows={4}
                />
              </div>
              <Button onClick={handleGenerateEmail} disabled={loading} className="w-full">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Generate Email
              </Button>
              {generatedEmail && (
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-sm whitespace-pre-wrap">{generatedEmail}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Document Summarizer */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Document Summarizer
              </CardTitle>
              <CardDescription>Get AI-powered summaries</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Document Text</Label>
                <Textarea
                  placeholder="Paste your document text here..."
                  value={documentText}
                  onChange={(e) => setDocumentText(e.target.value)}
                  rows={6}
                />
              </div>
              <Button onClick={handleSummarizeDocument} disabled={loading} className="w-full">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Summarize
              </Button>
              {documentSummary && (
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-sm whitespace-pre-wrap">{documentSummary}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Reminder Creator */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Create Reminder
              </CardTitle>
              <CardDescription>Never miss important tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Reminder</Label>
                <Input
                  placeholder="What do you need to remember?"
                  value={reminderContent}
                  onChange={(e) => setReminderContent(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Due Date</Label>
                <Input
                  type="datetime-local"
                  value={reminderDate}
                  onChange={(e) => setReminderDate(e.target.value)}
                />
              </div>
              <Button onClick={handleCreateReminder} className="w-full">
                Create Reminder
              </Button>
            </CardContent>
          </Card>

          {/* Recent Tasks */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Tasks</CardTitle>
              <CardDescription>Your latest AI-assisted tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-[300px] overflow-y-auto">
                {tasks.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No tasks yet</p>
                ) : (
                  tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-start gap-2 p-2 rounded hover:bg-muted cursor-pointer"
                      onClick={() => toggleTaskComplete(task.id, task.completed)}
                    >
                      <CheckCircle2
                        className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                          task.completed ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                          {task.content.substring(0, 100)}...
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {task.type} • {new Date(task.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default EcoAIDashboard;