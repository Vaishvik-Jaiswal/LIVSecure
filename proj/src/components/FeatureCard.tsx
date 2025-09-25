import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  variant?: 'default' | 'featured';
}

export function FeatureCard({
  title,
  description,
  icon,
  href,
  variant = 'default'
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        'glass transition-all duration-500 cursor-pointer group relative overflow-hidden',
        'hover:shadow-glow hover:-translate-y-2 hover:scale-105',
        'border border-primary/10 hover:border-primary/30',
        variant === 'featured' && 'bg-gradient-to-br from-primary/5 to-accent/5 border-primary/30'
      )}
      onClick={() => window.location.href = href}
    >
      {/* Animated background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Floating icon animation */}
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
        <div className="w-8 h-8 border border-primary/20 rounded-full animate-geometric-float"></div>
      </div>

      <CardHeader className="pb-4 relative z-10">
        <div className={cn(
          'w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6',
          variant === 'featured'
            ? 'bg-gradient-primary shadow-glow'
            : 'bg-gradient-to-br from-muted to-muted/50 border border-primary/10'
        )}>
          <div className={cn(
            'text-2xl transition-transform duration-300',
            variant === 'featured' ? 'text-primary-foreground' : 'text-primary'
          )}>
            {icon}
          </div>
        </div>
        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 relative z-10">
        <p className="text-muted-foreground text-base mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </p>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 p-0 h-auto text-primary hover:text-primary font-medium group-hover:gap-4 transition-all duration-300 group-hover:translate-x-1"
        >
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
}