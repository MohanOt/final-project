import { Layout } from "@/components/Layout";
import { MeshBackground } from "@/components/MeshBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, TrendingUp, DollarSign } from "lucide-react";

const SupplierDashboard = () => {
  return (
    <Layout>
      <MeshBackground />
      
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-eco bg-clip-text text-transparent">
            Supplier Dashboard
          </h1>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card/60 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                <Package className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">Ready to upload your first product</p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                <DollarSign className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$0</div>
                <p className="text-xs text-muted-foreground">Start selling to earn revenue</p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Growth</CardTitle>
                <TrendingUp className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+0%</div>
                <p className="text-xs text-muted-foreground">Monthly growth rate</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Welcome to Your Supplier Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This is your central hub for managing products, tracking sales, and growing your sustainable business.
                Product management features will be available soon!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default SupplierDashboard;
