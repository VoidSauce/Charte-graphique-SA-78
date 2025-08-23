import React from 'react';
import { AutoLogoSVG } from './AutoLogoSVG';

interface FullServiceLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'horizontal' | 'stacked';
  className?: string;
}

export function FullServiceLogo({ size = 'md', variant = 'horizontal', className = '' }: FullServiceLogoProps) {
  const sizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  const iconSizes = {
    sm: 32,
    md: 40,
    lg: 48,
    xl: 56
  };

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center gap-4 ${className}`}>
        <div className="relative">
          <div className="absolute inset-0"></div>
          <div className="relative">
            <AutoLogoSVG size={iconSizes[size]} />
          </div>
        </div>
        <div className="text-center">
          <div className={`${sizeClasses[size]} font-bold`}>
            <span className="text-brand-rouge">SERVICES </span>
            <span className="text-brand-bleu">AUTO </span>
            <span className="text-auto-steel">78</span>
          </div>
          <div className="text-auto-steel text-sm mt-1">
            Pièces & Réparation Automobile
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-4 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0"></div>
        <div className="relative">
          <AutoLogoSVG size={iconSizes[size]} />
        </div>
      </div>
      <div>
        <div className={`${sizeClasses[size]} font-bold`}>
          <span className="text-brand-rouge">SERVICES </span>
          <span className="text-brand-bleu">AUTO </span>
          <span className="text-auto-steel">78</span>
        </div>
        <div className="text-auto-steel text-sm">
          Pièces & Réparation Automobile
        </div>
      </div>
    </div>
  );
}
