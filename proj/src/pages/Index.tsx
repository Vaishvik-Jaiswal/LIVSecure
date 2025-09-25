import { Navigation } from '@/components/Navigation';
import { FeatureCard } from '@/components/FeatureCard';
import { DashboardCard } from '@/components/DashboardCard';
import { StatusIndicator } from '@/components/StatusIndicator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  BarChart3, 
  BookOpen, 
  Bell, 
  MapPin, 
  Users,
  Smartphone,
  Stethoscope,
  FileText,
  TrendingUp,
  AlertTriangle,
  Heart
} from 'lucide-react';
import farmHero from '@/assets/farm-hero.jpg';

const Index = () => {
  const features = [
    {
      title: 'Risk Assessment',
      description: 'Interactive biosecurity evaluation with automated scoring and action plans.',
      icon: <Shield className="h-6 w-6" />,
      href: '/risk-assessment',
      variant: 'featured' as const,
    },
    {
      title: 'Health Monitoring',
      description: 'Track vaccination schedules, mortality rates, and health metrics.',
      icon: <Heart className="h-6 w-6" />,
      href: '/dashboard',
    },
    {
      title: 'Training Center',
      description: 'Educational videos, infographics, and interactive quizzes.',
      icon: <BookOpen className="h-6 w-6" />,
      href: '/training',
    },
    {
      title: 'Disease Alerts',
      description: 'Real-time notifications about local disease outbreaks.',
      icon: <Bell className="h-6 w-6" />,
      href: '/alerts',
    },
    {
      title: 'Veterinary Services',
      description: 'Find nearby veterinary hospitals and book appointments.',
      icon: <MapPin className="h-6 w-6" />,
      href: '/veterinary',
    },
    {
      title: 'Record Keeping',
      description: 'Digital records for compliance and productivity tracking.',
      icon: <FileText className="h-6 w-6" />,
      href: '/records',
    },
  ];

  const quickStats = [
    {
      title: 'Farm Health',
      value: '78/100',
      change: 'Last checked: 3 days ago',
      trend: 'neutral' as const,
      icon: <Shield className="h-4 w-4" />,
    },
    {
      title: 'Total Animals',
      value: '456',
      change: '342 chickens, 114 pigs',
      trend: 'neutral' as const,
      icon: <BarChart3 className="h-4 w-4" />,
    },
    {
      title: 'Current Risk',
      value: 'Low',
      change: 'Next check: Feb 15',
      trend: 'up' as const,
      icon: <AlertTriangle className="h-4 w-4" />,
    },
    {
      title: 'Vaccines Done',
      value: '89%',
      change: '406 of 456 done',
      trend: 'neutral' as const,
      icon: <Stethoscope className="h-4 w-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 gradient-mesh opacity-30 animate-pulse-slow"></div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-primary/40 rounded-full animate-particle-float"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-accent/50 rounded-full animate-particle-float stagger-1"></div>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-warning/30 rounded-full animate-particle-float stagger-2"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/60 rounded-full animate-particle-float stagger-3"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-accent/40 rounded-full animate-particle-float stagger-4"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-primary/20 rotate-45 animate-geometric-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 border border-accent/30 rounded-full animate-geometric-float stagger-2"></div>
        <div className="absolute top-1/2 left-1/6 w-8 h-8 bg-warning/20 transform rotate-12 animate-geometric-float stagger-3"></div>
        <div className="absolute bottom-1/4 right-1/6 w-20 h-20 border-2 border-primary/15 rounded-lg animate-geometric-float stagger-4"></div>
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 animate-float"
          style={{ backgroundImage: `url(${farmHero})` }}
        />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-accent/70 animate-gradient-shift"></div>

        {/* Floating elements in hero */}
        <div className="absolute top-20 left-10 animate-bounce-slow">
          <div className="w-4 h-4 bg-accent/60 rounded-full"></div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce-slow stagger-2">
          <div className="w-6 h-6 border-2 border-accent/40 rounded-full"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce-slow stagger-3">
          <div className="w-3 h-3 bg-warning/50 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-8 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 animate-bounce-in text-lg px-6 py-2 backdrop-blur-sm">
              🚀 Protect Your Livestock
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-slide-up">
              Smart Biosecurity for
              <span className="block text-accent animate-pulse-slow drop-shadow-lg"> Modern Farmers</span>
            </h1>
            <p className="text-2xl text-primary-foreground/90 mb-10 leading-relaxed animate-slide-up stagger-1 max-w-3xl mx-auto">
              Monitor, protect, and optimize your poultry and pig farming with our comprehensive
              biosecurity platform. Simple tools for healthier livestock.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up stagger-2">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-farm-lg hover-lift-advanced hover-glow transition-all duration-500 text-lg px-8 py-4 hover-shine"
                onClick={() => window.location.href = '/dashboard'}
              >
                <Smartphone className="mr-3 h-6 w-6" />
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover-lift-advanced transition-all duration-500 text-lg px-8 py-4 backdrop-blur-sm hover-shine"
                onClick={() => window.location.href = '/training'}
              >
                <BookOpen className="mr-3 h-6 w-6" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Dashboard */}
      <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 animate-float">
          <div className="w-8 h-8 bg-primary/10 rounded-full"></div>
        </div>
        <div className="absolute bottom-10 right-10 animate-float stagger-2">
          <div className="w-6 h-6 border border-accent/20 rounded-lg"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 animate-slide-in-up">Your Farm Overview</h2>
            <p className="text-muted-foreground text-lg animate-slide-in-up stagger-1">Real-time insights into your livestock health</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div
                key={index}
                className="animate-slide-in-up hover-lift-advanced"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <DashboardCard {...stat} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-16 bg-gradient-to-br from-background via-muted/10 to-background relative">
        {/* Background elements */}
        <div className="absolute top-20 right-1/4 animate-geometric-float">
          <div className="w-12 h-12 border-2 border-warning/20 rounded-full"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-geometric-float stagger-2">
          <div className="w-8 h-8 bg-primary/10 transform rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Card className="glass shadow-glass border-warning/20 hover-lift-advanced transition-all duration-500">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <AlertTriangle className="h-6 w-6 text-warning animate-pulse" />
                Current Farm Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-lg bg-gradient-to-br from-success/10 to-success/5 border border-success/20 hover-lift transition-all duration-300">
                  <h4 className="font-semibold mb-4 text-lg text-success">Farm Security</h4>
                  <StatusIndicator status="low" label="Good" showIcon />
                  <p className="text-sm text-muted-foreground mt-3">
                    Check again in 12 days
                  </p>
                </div>
                <div className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover-lift transition-all duration-300">
                  <h4 className="font-semibold mb-4 text-lg text-primary">Animal Health</h4>
                  <StatusIndicator status="low" label="Healthy" showIcon />
                  <p className="text-sm text-muted-foreground mt-3">
                    Checked yesterday morning
                  </p>
                </div>
                <div className="text-center p-6 rounded-lg bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20 hover-lift transition-all duration-300">
                  <h4 className="font-semibold mb-4 text-lg text-warning">Local Alerts</h4>
                  <StatusIndicator status="medium" label="Bird Flu - 15km away" showIcon />
                  <p className="text-sm text-muted-foreground mt-3">
                    Monitor closely this week
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-1/3 animate-particle-float">
          <div className="w-4 h-4 bg-accent/30 rounded-full"></div>
        </div>
        <div className="absolute bottom-10 right-1/3 animate-particle-float stagger-2">
          <div className="w-6 h-6 border border-primary/20 rounded-lg"></div>
        </div>
        <div className="absolute top-1/2 left-10 animate-geometric-float">
          <div className="w-10 h-10 border-2 border-warning/15 rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 animate-slide-in-up">
              Complete Biosecurity Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-up stagger-1">
              Everything you need to protect and monitor your livestock health in one platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-slide-in-up hover-lift-advanced hover-rotate group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-8 h-8 bg-primary-foreground/10 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-20 right-20 w-6 h-6 border border-primary-foreground/20 rounded-lg animate-geometric-float"></div>
          <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-accent/20 rounded-full animate-particle-float"></div>
          <div className="absolute bottom-10 right-1/3 w-10 h-10 border-2 border-primary-foreground/15 rotate-45 animate-geometric-float stagger-2"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6 animate-slide-in-up">
            Ready to Secure Your Farm?
          </h2>
          <p className="text-2xl text-primary-foreground/90 mb-10 animate-slide-in-up stagger-1 max-w-3xl mx-auto">
            Join thousands of farmers already protecting their livestock with smart biosecurity
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-in-up stagger-2">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-farm-lg hover-lift-advanced hover-glow text-lg px-10 py-4 hover-shine"
              onClick={() => window.location.href = '/register'}
            >
              <Users className="mr-3 h-6 w-6" />
              Create Account
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover-lift-advanced text-lg px-10 py-4 backdrop-blur-sm hover-shine"
              onClick={() => window.location.href = '/demo'}
            >
              <TrendingUp className="mr-3 h-6 w-6" />
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-muted via-muted/80 to-muted/60 py-16 relative">
        {/* Background elements */}
        <div className="absolute top-10 left-10 animate-float">
          <div className="w-6 h-6 bg-primary/10 rounded-full"></div>
        </div>
        <div className="absolute bottom-10 right-10 animate-float stagger-2">
          <div className="w-4 h-4 border border-accent/20 rounded-lg"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-gradient-primary p-3 rounded-xl shadow-glow animate-pulse-glow">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Livsecure</h3>
                <p className="text-muted-foreground text-lg">Livestock Health Platform</p>
              </div>
            </div>
            <p className="text-muted-foreground text-lg">
              © 2024 Livsecure. Protecting livestock through technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
