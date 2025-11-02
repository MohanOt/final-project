import { Layout } from "@/components/Layout";
import { MeshBackground } from "@/components/MeshBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Users, MapPin, Trophy, Heart, TrendingUp } from "lucide-react";

const Community = () => {
  return (
    <Layout>
      <MeshBackground />
      
      {/* Hero */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-eco-green/10 border border-eco-green/20 text-sm text-eco-green">
            100% Free • No Subscription Required
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join the <span className="bg-gradient-eco bg-clip-text text-transparent">EcoScope Community</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Connect with thousands of changemakers, share knowledge, and collaborate on projects 
            that make a real difference.
          </p>
          
          <Button variant="hero" size="lg">
            Get Started and Connect
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feedback Loop */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated">
              <div className="p-4 rounded-xl bg-primary/10 w-fit mb-6">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Feedback Loop</h3>
              <p className="text-muted-foreground mb-4">
                Share your ideas, suggest features, report issues, and help shape EcoScope's future direction.
              </p>
              <Button variant="outline" className="w-full">Submit Feedback</Button>
            </Card>

            {/* Knowledge Exchange */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated">
              <div className="p-4 rounded-xl bg-secondary/10 w-fit mb-6">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Knowledge Exchange</h3>
              <p className="text-muted-foreground mb-4">
                Peer-to-peer Q&A, expert forums, and collaborative problem-solving for sustainability challenges.
              </p>
              <Button variant="outline" className="w-full">Browse Forums</Button>
            </Card>

            {/* Local Impact Map */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated">
              <div className="p-4 rounded-xl bg-accent/10 w-fit mb-6">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Local Impact Map</h3>
              <p className="text-muted-foreground mb-4">
                Discover sustainability projects and volunteer opportunities in your area.
              </p>
              <Button variant="outline" className="w-full">Explore Map</Button>
            </Card>

            {/* Eco Action & Rewards */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated">
              <div className="p-4 rounded-xl bg-eco-green/10 w-fit mb-6">
                <Trophy className="h-8 w-8 text-eco-green" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Eco Action & Rewards</h3>
              <p className="text-muted-foreground mb-4">
                Gamified impact tracker with points, levels, and achievements for sustainable actions.
              </p>
              <Button variant="eco" className="w-full">View Achievements</Button>
            </Card>

            {/* Collaboration Hub */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated">
              <div className="p-4 rounded-xl bg-cyber/10 w-fit mb-6">
                <Heart className="h-8 w-8 text-cyber" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Collaboration Hub</h3>
              <p className="text-muted-foreground mb-4">
                Connect globally to start initiatives, research projects, and joint ventures.
              </p>
              <Button variant="outline" className="w-full">Start Collaborating</Button>
            </Card>

            {/* Impact Leaderboard */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated">
              <div className="p-4 rounded-xl bg-ocean/10 w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-ocean" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Impact Leaderboard</h3>
              <p className="text-muted-foreground mb-4">
                See how your contributions compare with other community members worldwide.
              </p>
              <Button variant="outline" className="w-full">View Rankings</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Community <span className="bg-gradient-eco bg-clip-text text-transparent">Impact</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-eco-green mb-2">847K</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">12.4K</div>
              <div className="text-sm text-muted-foreground">Projects Launched</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyber mb-2">195</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ocean mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Community;
