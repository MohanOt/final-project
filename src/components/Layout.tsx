import { Link, useLocation } from "react-router-dom";
import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Business", path: "/business" },
  { name: "Climate", path: "/climate" },
  { name: "Learn Hub", path: "/learn" },
  { name: "Health", path: "/health" },
  { name: "Community", path: "/community" },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-lg bg-gradient-eco shadow-glow-eco group-hover:scale-110 transition-transform">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-eco bg-clip-text text-transparent">
                EcoScope
              </span>
            </Link>

            {/* Nav Items */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground shadow-glow-eco"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/subscribe"
              className="px-4 py-2 rounded-lg bg-gradient-cyber text-primary-foreground text-sm font-semibold hover:shadow-glow-cyan transition-all duration-300 hover:scale-105"
            >
              Go Premium
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-gradient-eco shadow-glow-eco">
                  <Leaf className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-bold">EcoScope</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering a Greener Tomorrow Through Intelligence and Innovation
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/business" className="hover:text-primary transition-colors">Business</Link></li>
                <li><Link to="/climate" className="hover:text-primary transition-colors">Climate</Link></li>
                <li><Link to="/learn" className="hover:text-primary transition-colors">Learn Hub</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/health" className="hover:text-primary transition-colors">Health</Link></li>
                <li><Link to="/community" className="hover:text-primary transition-colors">Community</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Values</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-muted text-xs">Innovation 🌱</span>
                <span className="px-3 py-1 rounded-full bg-muted text-xs">Collaboration 🌍</span>
                <span className="px-3 py-1 rounded-full bg-muted text-xs">Transparency 🔗</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>© 2025 EcoScope. Building a sustainable future together.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
