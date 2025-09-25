import { cn } from '@/lib/utils';

interface StatusIndicatorProps {
  status: 'low' | 'medium' | 'high';
  label: string;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

const statusConfig = {
  low: {
    color: 'bg-risk-low',
    textColor: 'text-risk-low',
    label: 'Low Risk',
    icon: '✓',
  },
  medium: {
    color: 'bg-risk-medium',
    textColor: 'text-risk-medium',
    label: 'Medium Risk',
    icon: '⚠',
  },
  high: {
    color: 'bg-risk-high',
    textColor: 'text-risk-high',
    label: 'High Risk',
    icon: '⚠',
  },
};

const sizeConfig = {
  sm: 'h-2 w-2',
  md: 'h-3 w-3',
  lg: 'h-4 w-4',
};

export function StatusIndicator({ 
  status, 
  label, 
  size = 'md', 
  showIcon = false 
}: StatusIndicatorProps) {
  const config = statusConfig[status];
  
  return (
    <div className="flex items-center gap-2">
      <div 
        className={cn(
          'rounded-full flex-shrink-0',
          config.color,
          sizeConfig[size]
        )}
      />
      {showIcon && (
        <span className="text-sm">{config.icon}</span>
      )}
      <span className={cn('text-sm font-medium', config.textColor)}>
        {label || config.label}
      </span>
    </div>
  );
}