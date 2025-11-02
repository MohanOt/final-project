import { useState } from "react";
import { Layout } from "@/components/Layout";
import { MeshBackground } from "@/components/MeshBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { z } from "zod";

const signupSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  role: z.enum(["supplier", "retailer", "customer"]),
});

const MarketplaceSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState<"supplier" | "retailer" | "customer">("customer");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const roleDescriptions = {
    supplier: "Upload and manage products for wholesale distribution",
    retailer: "Resell products from suppliers to end customers",
    customer: "Purchase sustainable products from the marketplace",
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = signupSchema.parse({ email, password, fullName, role });
      setLoading(true);

      const { data, error } = await supabase.auth.signUp({
        email: validatedData.email,
        password: validatedData.password,
        options: {
          data: {
            full_name: validatedData.fullName,
          },
          emailRedirectTo: `${window.location.origin}/`,
        },
      });

      if (error) throw error;

      if (data.user) {
        // Insert user role
        const { error: roleError } = await supabase
          .from("user_roles")
          .insert({ user_id: data.user.id, role: validatedData.role });

        if (roleError) throw roleError;

        toast({
          title: "Account created!",
          description: "Welcome to the EcoScope Marketplace",
        });

        // Redirect based on role
        navigate(`/marketplace/${validatedData.role}-dashboard`);
      }
    } catch (error: any) {
      toast({
        title: "Signup failed",
        description: error.message || "Please try again",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <MeshBackground />
      
      <section className="relative py-20 px-4 min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-lg bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl bg-gradient-eco bg-clip-text text-transparent">
              Join the Marketplace
            </CardTitle>
            <CardDescription>
              Create your account to start trading sustainable products
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-3">
                <Label>Select Your Role</Label>
                <RadioGroup value={role} onValueChange={(value: any) => setRole(value)}>
                  {(["supplier", "retailer", "customer"] as const).map((roleOption) => (
                    <div key={roleOption} className="flex items-start space-x-3 p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all">
                      <RadioGroupItem value={roleOption} id={roleOption} />
                      <div className="flex-1">
                        <Label htmlFor={roleOption} className="cursor-pointer font-semibold capitalize">
                          {roleOption}
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          {roleDescriptions[roleOption]}
                        </p>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default MarketplaceSignup;
