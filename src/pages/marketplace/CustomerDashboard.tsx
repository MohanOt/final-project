import { Layout } from "@/components/Layout";
import { MeshBackground } from "@/components/MeshBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ShoppingBag, Star } from "lucide-react";

const CustomerDashboard = () => {
  return (
    <Layout>
      <MeshBackground />
      
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-eco bg-clip-text text-transparent">
            Customer Dashboard
          </h1>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card/60 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Orders</CardTitle>
                <ShoppingBag className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">Total purchases</p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Favorites</CardTitle>
                <Heart className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">Saved items</p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Impact Score</CardTitle>
                <Star className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">Sustainability points</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Welcome to Your Shopping Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Track your orders, manage favorites, and see the environmental impact of your purchases.
                Start shopping to build your sustainable lifestyle!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default CustomerDashboard;
