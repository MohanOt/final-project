import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { MeshBackground } from "@/components/MeshBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Loader2, Zap, Trophy, TrendingUp, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LearnHub = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [topic, setTopic] = useState("");
  const [flashcards, setFlashcards] = useState<any[]>([]);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [userProgress, setUserProgress] = useState<any>(null);
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [dailyChallenge, setDailyChallenge] = useState("");

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      loadProgress();
      loadLeaderboard();
      loadDailyChallenge();
    }
  }, [user]);

  const loadProgress = async () => {
    const { data } = await supabase
      .from("progress")
      .select("*")
      .eq("user_id", user?.id)
      .single();

    if (data) {
      setUserProgress(data);
    }
  };

  const loadLeaderboard = async () => {
    const { data } = await supabase
      .from("leaderboard")
      .select("*, profiles(full_name)")
      .order("score", { ascending: false })
      .limit(10);

    if (data) {
      setLeaderboard(data);
    }
  };

  const loadDailyChallenge = () => {
    const challenges = [
      "Build a landing page using Tailwind CSS",
      "Create a responsive navigation component",
      "Implement form validation with React Hook Form",
      "Build a data dashboard with charts",
      "Create an animated hero section"
    ];
    const today = new Date().getDate();
    setDailyChallenge(challenges[today % challenges.length]);
  };

  const handleGenerateFlashcards = async () => {
    if (!topic.trim()) {
      toast({
        title: "Topic required",
        description: "Please enter a topic to generate flashcards",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-flashcards", {
        body: { topic },
      });

      if (error) throw error;

      // Save flashcards
      const flashcardsToSave = data.flashcards.map((fc: any) => ({
        user_id: user?.id,
        topic,
        question: fc.question,
        answer: fc.answer,
      }));

      const { error: saveError } = await supabase
        .from("flashcards")
        .insert(flashcardsToSave);

      if (saveError) throw saveError;

      setFlashcards(data.flashcards);
      
      // Award points
      await awardPoints(data.flashcards.length * 10);

      toast({
        title: "Flashcards generated!",
        description: `Created ${data.flashcards.length} flashcards. +${data.flashcards.length * 10} XP`,
      });
    } catch (error: any) {
      console.error("Error generating flashcards:", error);
      toast({
        title: "Generation failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const awardPoints = async (points: number) => {
    // Update or insert progress
    const { data: existing } = await supabase
      .from("progress")
      .select("*")
      .eq("user_id", user?.id)
      .eq("skill", "General Learning")
      .single();

    if (existing) {
      await supabase
        .from("progress")
        .update({ 
          score: existing.score + points,
          level: Math.floor((existing.score + points) / 100) + 1,
          last_active: new Date().toISOString()
        })
        .eq("id", existing.id);
    } else {
      await supabase.from("progress").insert({
        user_id: user?.id,
        skill: "General Learning",
        score: points,
        level: 1,
      });
    }

    // Update leaderboard
    const { data: leaderboardEntry } = await supabase
      .from("leaderboard")
      .select("*")
      .eq("user_id", user?.id)
      .single();

    if (leaderboardEntry) {
      await supabase
        .from("leaderboard")
        .update({ score: leaderboardEntry.score + points })
        .eq("id", leaderboardEntry.id);
    } else {
      await supabase.from("leaderboard").insert({
        user_id: user?.id,
        score: points,
      });
    }

    loadProgress();
    loadLeaderboard();
  };

  const completeChallenge = async () => {
    await awardPoints(50);
    toast({
      title: "Challenge completed!",
      description: "+50 XP awarded",
    });
  };

  const toggleFlip = (index: number) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(index)) {
      newFlipped.delete(index);
    } else {
      newFlipped.add(index);
    }
    setFlippedCards(newFlipped);
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
            Skill-to-Income LearnHub
          </h1>
          <p className="text-muted-foreground">
            Learn, earn XP, and compete with others
          </p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Total XP
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userProgress?.score || 0}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userProgress?.level || 1}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                Rank
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                #{leaderboard.findIndex(entry => entry.user_id === user?.id) + 1 || "-"}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Target className="h-4 w-4" />
                Skill
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm font-bold">{userProgress?.skill || "Start Learning"}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Flashcard Generator */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>AI Flashcard Generator</CardTitle>
              <CardDescription>Generate study cards and earn 10 XP per card</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Textarea
                  placeholder="Enter a topic or paste text to generate flashcards..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  rows={3}
                />
              </div>
              <Button onClick={handleGenerateFlashcards} disabled={loading} className="w-full">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Generate Flashcards"
                )}
              </Button>

              {flashcards.length > 0 && (
                <div className="grid gap-4 mt-6">
                  {flashcards.map((card, index) => (
                    <Card
                      key={index}
                      className="cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => toggleFlip(index)}
                    >
                      <CardContent className="p-6">
                        <div className="text-sm font-semibold text-muted-foreground mb-2">
                          {flippedCards.has(index) ? "Answer" : "Question"}
                        </div>
                        <p className="font-medium">
                          {flippedCards.has(index) ? card.answer : card.question}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Click to flip
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Daily Challenge */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Challenge of the Day</CardTitle>
                <CardDescription>Complete for +50 XP</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">{dailyChallenge}</p>
                <Button onClick={completeChallenge} className="w-full">
                  Mark Complete
                </Button>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Leaderboard</CardTitle>
                <CardDescription>Top learners this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {leaderboard.map((entry, index) => (
                    <div
                      key={entry.id}
                      className={`flex items-center justify-between p-2 rounded ${
                        entry.user_id === user?.id ? "bg-primary/10" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm">#{index + 1}</span>
                        <span className="text-sm">
                          {entry.profiles?.full_name || "Anonymous"}
                        </span>
                      </div>
                      <span className="text-sm font-semibold">{entry.score} XP</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LearnHub;