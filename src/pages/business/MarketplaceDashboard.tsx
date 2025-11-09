import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { MeshBackground } from "@/components/MeshBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Loader2, Sparkles, TrendingUp, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MarketplaceDashboard = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [businessProfile, setBusinessProfile] = useState<any>(null);
  const [stats, setStats] = useState({ adsCreated: 0, leads: 0 });
  
  // Ad Generator Form
  const [product, setProduct] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [tone, setTone] = useState("professional");
  const [platform, setPlatform] = useState("general");
  const [generatedAd, setGeneratedAd] = useState<any>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      loadBusinessProfile();
      loadStats();
    }
  }, [user]);

  const loadBusinessProfile = async () => {
    const { data, error } = await supabase
      .from("business_profiles")
      .select("*")
      .eq("user_id", user?.id)
      .single();

    if (error) {
      console.error("Error loading business profile:", error);
      toast({
        title: "Profile not found",
        description: "Please complete your business profile first.",
        variant: "destructive",
      });
      navigate("/business/marketplace/signup");
    } else {
      setBusinessProfile(data);
    }
  };

  const loadStats = async () => {
    const { data: adsData } = await supabase
      .from("ads")
      .select("id", { count: "exact" })
      .eq("user_id", user?.id);

    const { data: businessData } = await supabase
      .from("business_profiles")
      .select("id")
      .eq("user_id", user?.id)
      .single();

    if (businessData) {
      const { data: leadsData } = await supabase
        .from("leads")
        .select("id", { count: "exact" })
        .eq("business_id", businessData.id);

      setStats({
        adsCreated: adsData?.length || 0,
        leads: leadsData?.length || 0,
      });
    }
  };

  const handleGenerateAd = async () => {
    if (!product.trim()) {
      toast({
        title: "Missing information",
        description: "Please describe your product or service",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-ad", {
        body: { product, targetAudience, tone, platform },
      });

      if (error) throw error;

      setGeneratedAd(data);
      toast({
        title: "Ad generated!",
        description: "Your marketing copy is ready",
      });
    } catch (error: any) {
      console.error("Error generating ad:", error);
      toast({
        title: "Generation failed",
        description: error.message || "Failed to generate ad",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveAd = async () => {
    if (!generatedAd || !businessProfile) return;

    try {
      const { error } = await supabase.from("ads").insert({
        business_id: businessProfile.id,
        user_id: user?.id,
        headline: generatedAd.headline,
        body: generatedAd.body,
        cta: generatedAd.cta,
        platform,
      });

      if (error) throw error;

      toast({
        title: "Ad saved!",
        description: "Your ad has been saved successfully",
      });
      setGeneratedAd(null);
      setProduct("");
      setTargetAudience("");
      loadStats();
    } catch (error: any) {
      console.error("Error saving ad:", error);
      toast({
        title: "Save failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (authLoading) {
    return (
      <Layout>
        <MeshBackground />
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="w-8 h-8 animate-spin" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <MeshBackground />
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-eco bg-clip-text text-transparent">
            Business Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome back, {businessProfile?.business_name}
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Ads Created</CardTitle>
              <Sparkles className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.adsCreated}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.leads}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Performance</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Growing</div>
            </CardContent>
          </Card>
        </div>

        {/* AI Ad Generator */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              AI Ad Generator
            </CardTitle>
            <CardDescription>
              Generate compelling marketing copy powered by AI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="product">Product/Service *</Label>
                <Textarea
                  id="product"
                  placeholder="Describe your product or service..."
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="audience">Target Audience</Label>
                <Input
                  id="audience"
                  placeholder="e.g., Small business owners, millennials..."
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                />
                <Label htmlFor="tone">Tone</Label>
                <Select value={tone} onValueChange={setTone}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="friendly">Friendly</SelectItem>
                  </SelectContent>
                </Select>
                <Label htmlFor="platform">Platform</Label>
                <Select value={platform} onValueChange={setPlatform}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="google">Google Ads</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={handleGenerateAd}
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Ad
                </>
              )}
            </Button>

            {generatedAd && (
              <Card className="mt-4 border-primary/50">
                <CardHeader>
                  <CardTitle className="text-lg">Generated Ad</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <Label className="text-xs text-muted-foreground">Headline</Label>
                    <p className="font-bold text-lg">{generatedAd.headline}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Body</Label>
                    <p className="text-sm">{generatedAd.body}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Call to Action</Label>
                    <p className="font-semibold">{generatedAd.cta}</p>
                  </div>
                  <Button onClick={handleSaveAd} className="w-full">
                    Save Ad
                  </Button>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default MarketplaceDashboard;