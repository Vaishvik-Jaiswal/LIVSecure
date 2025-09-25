import React from 'react';

interface AnimatedBackgroundProps {
  variant?: 'farm' | 'nature' | 'minimal';
  children: React.ReactNode;
}

export function AnimatedBackground({ variant = 'farm', children }: AnimatedBackgroundProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

        {/* Animated Shapes */}
        {variant === 'farm' && (
          <>
            {/* Floating leaves */}
            <div className="absolute top-20 left-10 animate-leaf-sway opacity-20">
              <div className="w-8 h-12 bg-green-400 rounded-full transform rotate-45" />
            </div>
            <div className="absolute top-40 right-20 animate-leaf-sway opacity-15" style={{ animationDelay: '2s' }}>
              <div className="w-6 h-10 bg-green-500 rounded-full transform rotate-12" />
            </div>
            <div className="absolute bottom-40 left-20 animate-leaf-sway opacity-10" style={{ animationDelay: '4s' }}>
              <div className="w-10 h-14 bg-green-300 rounded-full transform -rotate-30" />
            </div>

            {/* Floating particles */}
            <div className="absolute top-1/4 left-1/4 animate-farm-particle opacity-10" style={{ animationDelay: '1s' }}>
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
            </div>
            <div className="absolute top-1/3 right-1/3 animate-farm-particle opacity-15" style={{ animationDelay: '3s' }}>
              <div className="w-1 h-1 bg-orange-400 rounded-full" />
            </div>
            <div className="absolute bottom-1/3 left-1/2 animate-farm-particle opacity-12" style={{ animationDelay: '5s' }}>
              <div className="w-3 h-3 bg-green-400 rounded-full" />
            </div>

            {/* Background geometric shapes */}
            <div className="absolute top-1/2 right-10 animate-geometric-float opacity-5">
              <div className="w-20 h-20 border-2 border-primary/20 rounded-lg transform rotate-45" />
            </div>
            <div className="absolute bottom-1/4 left-10 animate-geometric-float opacity-8" style={{ animationDelay: '3s' }}>
              <div className="w-16 h-16 border border-accent/30 rounded-full" />
            </div>
          </>
        )}

        {variant === 'nature' && (
          <>
            {/* Water ripples */}
            <div className="absolute top-1/3 left-1/2 animate-water-ripple opacity-20">
              <div className="w-32 h-32 border-2 border-blue-300 rounded-full" />
            </div>
            <div className="absolute bottom-1/3 right-1/3 animate-water-ripple opacity-15" style={{ animationDelay: '2s' }}>
              <div className="w-24 h-24 border border-blue-400 rounded-full" />
            </div>

            {/* Floating nature elements */}
            <div className="absolute top-20 left-20 animate-background-float opacity-10">
              <div className="w-4 h-4 bg-green-400 rounded-full" />
            </div>
            <div className="absolute top-60 right-32 animate-background-float opacity-12" style={{ animationDelay: '1s' }}>
              <div className="w-6 h-6 bg-blue-400 rounded-full" />
            </div>
            <div className="absolute bottom-32 left-1/4 animate-background-float opacity-8" style={{ animationDelay: '2s' }}>
              <div className="w-8 h-8 bg-green-500 rounded-full" />
            </div>
          </>
        )}

        {variant === 'minimal' && (
          <>
            {/* Subtle gradient animation */}
            <div className="absolute inset-0 animate-gradient-flow opacity-30 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

            {/* Minimal floating dots */}
            <div className="absolute top-1/4 left-1/4 animate-background-pulse opacity-20">
              <div className="w-2 h-2 bg-primary rounded-full" />
            </div>
            <div className="absolute top-3/4 right-1/4 animate-background-pulse opacity-15" style={{ animationDelay: '2s' }}>
              <div className="w-1 h-1 bg-accent rounded-full" />
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}