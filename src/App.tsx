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
import NotFound from "./pages/NotFound";
import Marketplace from "./pages/business/Marketplace";
import AutoShop from "./pages/business/AutoShop";

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
          <Route path="*" element={<NotFound />} />
          <Route path="/business/marketplace" element={<Marketplace />} />
          <Route path="/business/autoshop" element={<AutoShop />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
