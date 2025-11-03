import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { MeshBackground } from "@/components/MeshBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { BookOpen, Brain, TrendingUp, Users, Loader2 } from "lucide-react";
import { AIAssistant } from "@/components/learn/AIAssistant";
import { FlashcardGenerator } from "@/components/learn/FlashcardGenerator";
import { EcoAIChat } from "@/components/EcoAIChat";

const Learn = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <Layout>
        <MeshBackground />
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <Layout>
      <MeshBackground />
      <EcoAIChat />
      
      {/* Hero */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-start mb-8">
            <div>
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                Premium Feature • Learn Hub
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Learn <span className="bg-gradient-eco bg-clip-text text-transparent">Hub</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mb-4">
                Welcome back! Access multilingual content, AI tutoring, and interactive learning experiences.
              </p>
            </div>

            <Button variant="outline" onClick={signOut}>
              Sign Out
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated">
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Content Library</h3>
              <p className="text-sm text-muted-foreground">
                Access courses and articles in multiple languages
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated">
              <div className="p-3 rounded-xl bg-secondary/10 w-fit mb-4">
                <Brain className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold mb-2">AI Smart Tutor</h3>
              <p className="text-sm text-muted-foreground">
                Get personalized help and custom flashcards
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated">
              <div className="p-3 rounded-xl bg-accent/10 w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">Skills Lab</h3>
              <p className="text-sm text-muted-foreground">
                Interactive challenges and simulations
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated">
              <div className="p-3 rounded-xl bg-ocean/10 w-fit mb-4">
                <Users className="h-6 w-6 text-ocean" />
              </div>
              <h3 className="text-lg font-bold mb-2">Student Connect</h3>
              <p className="text-sm text-muted-foreground">
                Collaborate with learners worldwide
              </p>
            </Card>
          </div>

          {/* AI Features */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <AIAssistant />
            <FlashcardGenerator />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Learn;
