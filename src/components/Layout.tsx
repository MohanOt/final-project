import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Brain, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme/ThemeToggle";

export const Layout = ({ children }: { children: React.ReactNode }) => {
const location = useLocation();
const [mobileOpen, setMobileOpen] = useState(false);

return ( <div className="min-h-screen bg-background">
{/* Navigation */} <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"> <div className="container mx-auto px-4"> <div className="flex h-16 items-center justify-between">
{/* Logo */} <Link to="/" className="flex items-center gap-2 group"> <div className="relative p-2 rounded-lg bg-gradient-eco shadow-glow-eco group-hover:scale-110 transition-transform"> <Brain className="h-5 w-5 text-primary-foreground" /> <div className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-accent rounded-full animate-pulse" /> </div> <span className="text-xl font-bold bg-gradient-eco bg-clip-text text-transparent">
EcoScope </span> </Link>

```
        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          {/* Business Dropdown */}
          <div className="relative group">
            <Link
              to="/business"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between text-muted-foreground hover:text-foreground hover:bg-muted",
                location.pathname.startsWith("/business")
                  ? "bg-primary text-primary-foreground shadow-glow-eco"
                  : ""
              )}
            >
              Business
            </Link>
            <div className="absolute hidden group-hover:block bg-popover border border-border rounded-lg mt-1 shadow-lg min-w-[180px] z-50">
              <Link
                to="/business/marketplace"
                className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground rounded-t-lg"
              >
                Marketplace
              </Link>
              <Link
                to="/business/autoshop"
                className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                AutoShop
              </Link>
              <Link
                to="/business/chaintrace"
                className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                ChainTrace
              </Link>
              <Link
                to="/business/capital"
                className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                Capital
              </Link>
              <Link
                to="/business/certify"
                className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                Certify
              </Link>
              <Link
                to="/business/green-metrics"
                className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground rounded-b-lg"
              >
                Green Metrics
              </Link>
            </div>
          </div>

          {/* Other Desktop Links */}
          <Link
            to="/climate"
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              location.pathname === "/climate"
                ? "bg-primary text-primary-foreground shadow-glow-eco"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            Climate
          </Link>
          <Link
            to="/learn/hub"
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              location.pathname.startsWith("/learn")
                ? "bg-primary text-primary-foreground shadow-glow-eco"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            Learn Hub
          </Link>
          <Link
            to="/health"
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              location.pathname === "/health"
                ? "bg-primary text-primary-foreground shadow-glow-eco"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            Health
          </Link>
          <Link
            to="/community"
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              location.pathname === "/community"
                ? "bg-primary text-primary-foreground shadow-glow-eco"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            Community
          </Link>
          {/* Tech Dropdown */}
          <div className="relative group">
            <Link
              to="/tech"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between text-muted-foreground hover:text-foreground hover:bg-muted",
                location.pathname.startsWith("/tech")
                  ? "bg-primary text-primary-foreground shadow-glow-eco"
                  : ""
              )}
            >
              Tech
            </Link>
            <div className="absolute hidden group-hover:block bg-popover border border-border rounded-lg mt-1 shadow-lg min-w-[180px] z-50">
              <Link
                to="/tech/ecoai"
                className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg"
              >
                EcoAI Dashboard
              </Link>
            </div>
          </div>
          <Link
            to="/ecoai"
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5",
              location.pathname === "/ecoai"
                ? "bg-gradient-eco text-primary-foreground shadow-glow-eco"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            <Brain className="h-4 w-4" />
            EcoAI
          </Link>
        </div>

        {/* Right-side actions: Theme toggle + CTA */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/subscribe"
            className="px-4 py-2 rounded-lg bg-gradient-cyber text-primary-foreground text-sm font-semibold hover:shadow-glow-cyan transition-all duration-300 hover:scale-105"
          >
            Go Premium
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted/20"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    {mobileOpen && (
      <div className="md:hidden bg-popover border-t border-border shadow-lg">
        <Link
          to="/business"
          className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          Business
        </Link>
        {/* Business subpages for mobile */}
        <div className="pl-4">
          <Link
            to="/business/marketplace"
            className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            Marketplace
          </Link>
          <Link
            to="/business/autoshop"
            className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            AutoShop
          </Link>
          <Link
            to="/business/chaintrace"
            className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            ChainTrace
          </Link>
          <Link
            to="/business/capital"
            className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            Capital
          </Link>
          <Link
            to="/business/certify"
            className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            Certify
          </Link>
          <Link
            to="/business/green-metrics"
            className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            Green Metrics
          </Link>
        </div>

        {/* Other mobile links */}
        <Link
          to="/climate"
          className="block px-4 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          Climate
        </Link>
        <Link
          to="/learn/hub"
          className="block px-4 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          Learn Hub
        </Link>
        <Link
          to="/health"
          className="block px-4 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          Health
        </Link>
        <Link
          to="/community"
          className="block px-4 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          Community
        </Link>
        <Link
          to="/tech"
          className="block px-4 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          Tech
        </Link>
        <div className="pl-4">
          <Link
            to="/tech/ecoai"
            className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            EcoAI Dashboard
          </Link>
        </div>
        <Link
          to="/ecoai"
          className="block px-4 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground flex items-center gap-2"
        >
          <Brain className="h-4 w-4" />
          EcoAI
        </Link>
      </div>
    )}
  </nav>

  {/* Main Content */}
  <main className="pt-16">{children}</main>
</div>
);
};
