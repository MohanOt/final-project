import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Business from "./pages/Business";
import Climate from "./pages/Climate";
import Learn from "./pages/Learn";
import Health from "./pages/Health";
import Community from "./pages/Community";
import Subscribe from "./pages/Subscribe";
import Auth from "./pages/Auth";
import Tech from  "./pages/Tech";
import EcoAI from "./pages/EcoAI";
import NotFound from "./pages/NotFound";
import Marketplace from "./pages/business/Marketplace";
import AutoShop from "./pages/business/AutoShop";
import MarketplaceSignup from "./pages/MarketplaceSignup";
import MarketplaceDashboard from "./pages/business/MarketplaceDashboard";
import SupplierDashboard from "./pages/marketplace/SupplierDashboard";
import RetailerDashboard from "./pages/marketplace/RetailerDashboard";
import CustomerDashboard from "./pages/marketplace/CustomerDashboard";
import EcoAIDashboard from "./pages/tech/EcoAIDashboard";
import LearnHub from "./pages/learn/LearnHub";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/business" element={<Business />} />
          <Route path="/climate" element={<Climate />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/health" element={<Health />} />
          <Route path="/community" element={<Community />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/ecoai" element={<EcoAI />} />
          <Route path="/business/marketplace" element={<Marketplace />} />
          <Route path="/business/autoshop" element={<AutoShop />} />
          <Route path="/business/marketplace/signup" element={<MarketplaceSignup />} />
          <Route path="/business/marketplace/dashboard" element={<MarketplaceDashboard />} />
          <Route path="/marketplace/supplier-dashboard" element={<SupplierDashboard />} />
          <Route path="/marketplace/retailer-dashboard" element={<RetailerDashboard />} />
          <Route path="/marketplace/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/tech/ecoai" element={<EcoAIDashboard />} />
          <Route path="/learn/hub" element={<LearnHub />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
