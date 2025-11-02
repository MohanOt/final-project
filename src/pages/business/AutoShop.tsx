import { Layout } from "@/components/Layout";
import { MeshBackground } from "@/components/MeshBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AutoShop = () => {
  return (
    <Layout>
      <MeshBackground />
      
      <section className="relative py-32 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-eco bg-clip-text text-transparent">
            AutoShop
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            AI-powered dropshipping assistant — automate sourcing, orders, and fulfillment.
          </p>
          <p className="text-teal-500 text-1.5xl">Feature Coming Soon ...</p>
<br></br>
          {/*  Updated link: adds redirect query */}
          <Link to="/auth?redirect=/business/autoshop">
            <Button size="lg" variant="premium">
              Sign in to Start AutoShop
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AutoShop;
