import { Layout } from "@/components/Layout";
import { MeshBackground } from "@/components/MeshBackground";
import { Card } from "@/components/ui/card";
import { Brain, Sparkles, Zap, Globe2, MessageSquare, BarChart3 } from "lucide-react";
import { EcoAIChat } from "@/components/EcoAIChat";

const EcoAI = () => {
  return (
    <Layout>
      <MeshBackground />
      <EcoAIChat defaultOpen={false} />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-eco text-primary-foreground text-sm font-medium">
            The Intelligence Core of EcoScope
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Meet <span className="bg-gradient-eco bg-clip-text text-transparent">EcoAI</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Your intelligent companion for sustainability, learning, and eco-smart decisions. 
            EcoAI powers intelligence features across the entire EcoScope platform.
          </p>

          <div className="flex justify-center gap-4 mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-eco opacity-20 blur-xl rounded-full" />
              <div className="relative p-8 rounded-full bg-gradient-eco shadow-glow-eco">
                <Brain className="h-16 w-16 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            What <span className="bg-gradient-cyber bg-clip-text text-transparent">EcoAI</span> Can Do
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated group">
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Chat Assistant</h3>
              <p className="text-sm text-muted-foreground">
                Ask questions about sustainability, get instant answers, and receive personalized guidance 24/7.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-elevated group">
              <div className="p-3 rounded-xl bg-secondary/10 w-fit mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Flashcard Generator</h3>
              <p className="text-sm text-muted-foreground">
                Transform any topic into study-ready flashcards. Perfect for assignments, exams, and learning.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-elevated group">
              <div className="p-3 rounded-xl bg-accent/10 w-fit mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">Smart Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Analyze sustainability metrics, carbon footprints, and environmental impact with AI precision.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated group">
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:scale-110 transition-transform">
                <Globe2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Marketplace Intelligence</h3>
              <p className="text-sm text-muted-foreground">
                Get product recommendations, verify eco-certifications, and discover sustainable alternatives.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-elevated group">
              <div className="p-3 rounded-xl bg-secondary/10 w-fit mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold mb-2">AutoShop Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Optimize inventory, predict demand, and get smart recommendations for eco-friendly operations.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-elevated group">
              <div className="p-3 rounded-xl bg-accent/10 w-fit mb-4 group-hover:scale-110 transition-transform">
                <Brain className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">Learning Support</h3>
              <p className="text-sm text-muted-foreground">
                Personalized tutoring, assignment help, and adaptive learning paths for all sustainability topics.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Integrated Across <span className="bg-gradient-eco bg-clip-text text-transparent">EcoScope</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              EcoAI powers intelligent features throughout the platform, making every interaction smarter and more sustainable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
              <h3 className="text-xl font-bold mb-3">🎓 Learn Hub</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI tutoring, flashcard generation, and personalized study plans help you master sustainability topics faster.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
              <h3 className="text-xl font-bold mb-3">🛒 Marketplace</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Smart product recommendations, eco-certification verification, and sustainable alternative suggestions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
              <h3 className="text-xl font-bold mb-3">🚗 AutoShop</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Inventory optimization, demand forecasting, and automated eco-friendly procurement strategies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
              <h3 className="text-xl font-bold mb-3">📊 Green Metrics</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Advanced analytics, carbon footprint tracking, and actionable insights for environmental impact reduction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-eco text-center shadow-glow-eco">
            <h2 className="text-4xl font-bold mb-4 text-primary-foreground">
              Ready to Experience EcoAI?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Start chatting with EcoAI now! Click the floating assistant in the bottom-right corner 
              or explore our intelligent features across the platform.
            </p>
            <div className="flex justify-center items-center gap-3">
              <div className="px-4 py-2 rounded-lg bg-primary-foreground/20 text-primary-foreground font-medium">
                💡 Click the Brain icon →
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EcoAI;
