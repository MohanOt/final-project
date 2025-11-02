import { Layout } from "@/components/Layout";
import { MeshBackground } from "@/components/MeshBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Users, BarChart3 } from "lucide-react";

const RetailerDashboard = () => {
  return (
    <Layout>
      <MeshBackground />
      
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-eco bg-clip-text text-transparent">
            Retailer Dashboard
          </h1>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card/60 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                <ShoppingCart className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">No pending orders</p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Customers</CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">Build your customer base</p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <BarChart3 className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$0</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Welcome to Your Retailer Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Manage your inventory, track customer orders, and analyze sales performance.
                Retail management features will be available soon!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default RetailerDashboard;
