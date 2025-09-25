import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface DashboardCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon: ReactNode;
  className?: string;
}

export function DashboardCard({
  title,
  value,
  change,
  trend = 'neutral',
  icon,
  className
}: DashboardCardProps) {
  const trendConfig = {
    up: 'text-success',
    down: 'text-destructive',
    neutral: 'text-muted-foreground',
  };

  const trendIcons = {
    up: '↗',
    down: '↘',
    neutral: '→'
  };

  return (
    <Card className={cn(
      'glass hover-lift-advanced hover-scale cursor-pointer transition-all duration-500 group relative overflow-hidden',
      'border border-primary/10 hover:border-primary/30 shadow-glass hover:shadow-glow',
      'bg-gradient-to-br from-card/80 to-muted/20 backdrop-blur-sm',
      className
    )}>
      {/* Animated background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Floating decoration */}
      <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
        <div className="w-6 h-6 border border-primary/20 rounded-full animate-geometric-float"></div>
      </div>

      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 relative z-10">
        <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {title}
        </CardTitle>
        <div className="text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20">
          {icon}
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {value}
        </div>
        {change && (
          <p className={cn(
            'text-sm transition-all duration-300 flex items-center gap-1',
            trendConfig[trend],
            'group-hover:translate-x-1 group-hover:scale-105'
          )}>
            <span className="animate-pulse">{trendIcons[trend]}</span>
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  );
}