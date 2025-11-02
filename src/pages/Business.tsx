import { Layout } from "@/components/Layout";
import { MeshBackground } from "@/components/MeshBackground";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Business = () => {
return ( <Layout> <MeshBackground />

```
  <section className="relative py-32 px-4">
    <div className="container mx-auto text-center max-w-3xl">
      {/* Premium Tag */}
      <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-cyber/10 border border-cyber/20">
        <Lock className="h-4 w-4 text-cyber" />
        <span className="text-sm text-cyber font-medium">Premium Feature</span>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold mb-6">
        Business <span className="bg-gradient-eco bg-clip-text text-transparent">Sustainability Suite</span>
      </h1>

      {/* Description */}
      <p className="text-xl text-muted-foreground mb-12">
        AutoShop • Green Metrics • Marketplace • ChainTree • Certify
      </p>

      {/* Unlock Button */}
      <Link to="/subscribe">
        <Button variant="premium" size="lg">
          Unlock Business Tools
        </Button>
      </Link>

      {/* Existing Feature Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
        <Link to="/business/marketplace">
          <Button
            size="lg"
            className="bg-gradient-eco text-primary-foreground text-lg font-semibold hover:scale-105 transition-transform"
          >
            Explore Marketplace
          </Button>
        </Link>

        <Link to="/business/autoshop">
          <Button
            size="lg"
            className="bg-gradient-cyber text-primary-foreground text-lg font-semibold hover:scale-105 transition-transform"
          >
             AutoShop
          </Button>
        </Link>

        {/* New Feature Buttons */}
        <Link to="/business/chaintrace">
          <Button
            size="lg"
            className="bg-gradient-eco text-primary-foreground text-lg font-semibold hover:scale-105 transition-transform"
          >
            ChainTrace
          </Button>
        </Link>

        <Link to="/business/capital">
          <Button
            size="lg"
            className="bg-gradient-cyber text-primary-foreground text-lg font-semibold hover:scale-105 transition-transform"
          >
           Source Capital
          </Button>
        </Link>

        <Link to="/business/certify">
          <Button
            size="lg"
            className="bg-gradient-eco text-primary-foreground text-lg font-semibold hover:scale-105 transition-transform"
          >
           Get Certified
          </Button>
        </Link>

        <Link to="/business/green-metrics">
          <Button
            size="lg"
            className="bg-gradient-cyber text-primary-foreground text-lg font-semibold hover:scale-105 transition-transform"
          >
            Green Metrics
          </Button>
        </Link>
      </div>
    </div>
  </section>
</Layout>
);
};

export default Business;
