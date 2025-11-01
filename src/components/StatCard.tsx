import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
}

export const StatCard = ({ icon: Icon, label, value, trend, trendUp }: StatCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border/50 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        {trend && (
          <span className={`text-xs font-medium ${trendUp ? 'text-eco-green' : 'text-destructive'}`}>
            {trend}
          </span>
        )}
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-eco transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </div>
  );
};
