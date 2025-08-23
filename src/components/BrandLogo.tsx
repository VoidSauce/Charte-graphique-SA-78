import React from 'react';
import { AutoLogoSVG } from './AutoLogoSVG';

interface BrandLogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function BrandLogo({ variant = 'horizontal', size = 'md', className = '' }: BrandLogoProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const iconSizes = {
    sm: 24,
    md: 32,
    lg: 40,
    xl: 48
  };

  const LogoIcon = () => (
    <div className="relative">
      <div className="absolute inset-0 bg-brand-rouge xl rounded-full opacity-20"></div>
      <div className="relative p-2">
        <AutoLogoSVG size={iconSizes[size]} className="drop-shadow-sm" />
      </div>
    </div>
  );

  const LogoText = ({ stacked = false }: { stacked?: boolean }) => (
    <div className={`${stacked ? 'text-center' : ''}`}>
      <div className={`${sizeClasses[size]} font-bold`}>
        <span className="text-brand-rouge">SERVICES </span>
        <span className="text-brand-bleu">AUTO 78</span>
      </div>
      <div className="text-auto-steel text-sm">
        {stacked ? (
          <div>
            <div>Pièces & Réparation</div>
            <div>Automobile</div>
          </div>
        ) : (
          'Pièces & Réparation Automobile'
        )}
      </div>
    </div>
  );

  if (variant === 'icon') {
    return (
      <div className={`inline-flex ${className}`}>
        <LogoIcon />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center gap-3 ${className}`}>
        <LogoIcon />
        <LogoText stacked />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <LogoIcon />
      <LogoText />
    </div>
  );
}
