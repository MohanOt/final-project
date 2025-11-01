import { Layout } from "@/components/Layout";
import { MeshBackground } from "@/components/MeshBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Subscribe = () => {
  return (
    <Layout>
      <MeshBackground />
      
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Choose Your <span className="bg-gradient-eco bg-clip-text text-transparent">Plan</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Unlock the full power of EcoScope with advanced AI tools, analytics, and exclusive features
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Community</h3>
                <div className="text-4xl font-bold mb-6">
                  Free
                  <span className="text-lg text-muted-foreground font-normal ml-2">forever</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-eco-green shrink-0 mt-0.5" />
                    <span>Full access to Community features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-eco-green shrink-0 mt-0.5" />
                    <span>Feedback & Knowledge Exchange</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-eco-green shrink-0 mt-0.5" />
                    <span>Local Impact Map</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-eco-green shrink-0 mt-0.5" />
                    <span>Eco Action & Rewards</span>
                  </li>
                </ul>
                
                <Button variant="outline" className="w-full">Current Plan</Button>
              </div>
            </Card>

            {/* Premium Plan */}
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-cyber/10 border-primary/50 relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-eco text-xs font-semibold text-primary-foreground">
                POPULAR
              </div>
              
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <div className="text-4xl font-bold mb-6">
                  $29
                  <span className="text-lg text-muted-foreground font-normal ml-2">/month</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-eco-green shrink-0 mt-0.5" />
                    <span className="font-semibold">Everything in Community, plus:</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-eco-green shrink-0 mt-0.5" />
                    <span>Business Sustainability Suite</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-eco-green shrink-0 mt-0.5" />
                    <span>Climate Intelligence & Analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-eco-green shrink-0 mt-0.5" />
                    <span>Learn Hub with AI Smart Tutor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-eco-green shrink-0 mt-0.5" />
                    <span>Health Predictions & Real-Time Data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-eco-green shrink-0 mt-0.5" />
                    <span>ChainTree & Certify Access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-eco-green shrink-0 mt-0.5" />
                    <span>Early Warning System</span>
                  </li>
                </ul>
                
                <Button variant="premium" className="w-full">
                  Upgrade to Premium
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Subscribe;
