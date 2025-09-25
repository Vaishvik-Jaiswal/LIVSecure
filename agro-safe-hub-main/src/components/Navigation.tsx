import { useState } from 'react';
import { Menu, X, Shield, Users, BookOpen, Bell, MapPin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from './LanguageSelector';
import { cn } from '@/lib/utils';

const navigationItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Shield },
  { name: 'Risk Assessment', href: '/risk-assessment', icon: FileText },
  { name: 'Training', href: '/training', icon: BookOpen },
  { name: 'Alerts', href: '/alerts', icon: Bell },
  { name: 'Veterinary', href: '/veterinary', icon: MapPin },
  { name: 'Community', href: '/community', icon: Users },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="flex-shrink-0 bg-gradient-primary p-2 rounded-lg hover-glow transition-all duration-300">
              <Shield className="h-6 w-6 text-primary-foreground animate-pulse-slow" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-300">Livsecure</h1>
              <p className="text-xs text-muted-foreground">Livestock Health Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <Button
                key={item.name}
                variant="ghost"
                className="gap-2 hover-lift transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.location.href = item.href}
              >
                <item.icon className="h-4 w-4" />
                <span className="hidden lg:inline">{item.name}</span>
              </Button>
            ))}
          </div>

          {/* Language and Mobile Menu */}
          <div className="flex items-center gap-2 animate-fade-in stagger-6">
            <LanguageSelector />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="hover-scale transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden border-t border-border transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item, index) => (
              <Button
                key={item.name}
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 py-3 px-3 transition-all duration-300",
                  "hover:bg-muted hover-lift",
                  isOpen ? "animate-slide-in-left" : ""
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {
                  window.location.href = item.href;
                  setIsOpen(false);
                }}
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span>{item.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}