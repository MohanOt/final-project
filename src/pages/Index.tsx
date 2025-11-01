import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { MeshBackground } from "@/components/MeshBackground";
import { StatCard } from "@/components/StatCard";
import { Droplets, Wind, Zap, Users, TrendingDown, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <MeshBackground />
      
      {/* Hero Section */}
      <section className="relative py-32 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
            The Global AI Sustainability Grid
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Empowering a{" "}
            <span className="bg-gradient-eco bg-clip-text text-transparent">
              Greener Tomorrow
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Through Intelligence and Innovation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Link to="/community">
              <Button variant="hero" size="lg">
                Join the Grid
              </Button>
            </Link>
            <Link to="/climate">
              <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary">
                Explore Platform
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">🎯</span> Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower communities, businesses, and individuals worldwide to make smarter, greener decisions 
                through accessible AI-driven insights and connected sustainability tools.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">🔮</span> Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where technology and humanity collaborate in harmony with nature — where every action, 
                big or small, contributes to global ecological balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Global Stats */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Live Global <span className="bg-gradient-eco bg-clip-text text-transparent">Metrics</span>
            </h2>
            <p className="text-muted-foreground">Real-time environmental and social insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <StatCard
              icon={Wind}
              label="Global CO₂ Level"
              value="421 ppm"
              trend="+0.8%"
              trendUp={false}
            />
            <StatCard
              icon={Droplets}
              label="Water Quality Index"
              value="72.4/100"
              trend="+2.1%"
              trendUp={true}
            />
            <StatCard
              icon={Zap}
              label="Renewable Energy Share"
              value="29.3%"
              trend="+5.4%"
              trendUp={true}
            />
            <StatCard
              icon={TrendingDown}
              label="Carbon Offset This Month"
              value="2.4M tons"
              trend="+12%"
              trendUp={true}
            />
            <StatCard
              icon={Users}
              label="Active Community Members"
              value="847K"
              trend="+8.2%"
              trendUp={true}
            />
            <StatCard
              icon={Globe2}
              label="Regions Monitored"
              value="195"
              trend="Complete"
              trendUp={true}
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">
            Built on <span className="bg-gradient-cyber bg-clip-text text-transparent">Shared Values</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {[
              { emoji: "🌱", label: "Innovation" },
              { emoji: "🌍", label: "Collaboration" },
              { emoji: "🔗", label: "Transparency" },
              { emoji: "📘", label: "Education" },
              { emoji: "💚", label: "Health" },
              { emoji: "💥", label: "Impact" },
            ].map((value) => (
              <div
                key={value.label}
                className="px-6 py-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-glow-eco transition-all duration-300 cursor-default group"
              >
                <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">
                  {value.emoji}
                </span>
                <span className="font-semibold">{value.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-eco text-center shadow-glow-eco">
            <h2 className="text-4xl font-bold mb-4 text-primary-foreground">
              Unlock Advanced Insights
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Access AI-powered tools, advanced analytics, early warning systems, and exclusive features 
              to maximize your sustainability impact.
            </p>
            <Link to="/subscribe">
              <Button variant="premium" size="lg" className="bg-background text-foreground hover:bg-background/90">
                Upgrade to Premium
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
