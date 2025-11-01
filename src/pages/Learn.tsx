import { Layout } from "@/components/Layout";
import { MeshBackground } from "@/components/MeshBackground";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <Layout>
      <MeshBackground />
      
      <section className="relative py-32 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-cyber/10 border border-cyber/20">
            <Lock className="h-4 w-4 text-cyber" />
            <span className="text-sm text-cyber font-medium">Premium Feature</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-6">
            Learn <span className="bg-gradient-eco bg-clip-text text-transparent">Hub</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Multilingual Content • Smart Tutor AI • Skills Lab • Insights Dashboard • Student Connect
          </p>
          
          <Link to="/subscribe">
            <Button variant="premium" size="lg">
              Start Learning
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Learn;
