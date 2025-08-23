import React from 'react';

interface AutoLogoSVGProps {
  size?: number;
  className?: string;
}

export function AutoLogoSVG({ size = 32, className = '' }: AutoLogoSVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Car body - Blue */}
      <path
        d="M15 45 C15 40, 20 35, 30 35 L70 35 C80 35, 85 40, 85 45 L85 65 C85 70, 80 75, 75 75 L25 75 C20 75, 15 70, 15 65 Z"
        fill="var(--brand-bleu)"
      />
      
      {/* Car windshield */}
      <path
        d="M25 45 C25 42, 27 40, 30 40 L70 40 C73 40, 75 42, 75 45 L75 55 C75 58, 73 60, 70 60 L30 60 C27 60, 25 58, 25 55 Z"
        fill="var(--brand-bleu-light)"
        opacity="0.3"
      />
      
      {/* Red accent swoosh */}
      <path
        d="M10 50 Q20 30, 45 35 Q60 38, 75 45 Q85 50, 90 65 Q85 55, 70 50 Q50 45, 30 48 Q15 50, 10 50 Z"
        fill="var(--brand-rouge)"
      />
      
      {/* Front wheel */}
      <circle
        cx="30"
        cy="70"
        r="8"
        fill="var(--auto-oil)"
        stroke="var(--auto-steel)"
        strokeWidth="1"
      />
      
      {/* Rear wheel */}
      <circle
        cx="70"
        cy="70"
        r="8"
        fill="var(--auto-oil)"
        stroke="var(--auto-steel)"
        strokeWidth="1"
      />
      
      {/* Wheel rims */}
      <circle
        cx="30"
        cy="70"
        r="4"
        fill="var(--auto-steel)"
      />
      <circle
        cx="70"
        cy="70"
        r="4"
        fill="var(--auto-steel)"
      />
      
      {/* Car details */}
      <rect
        x="35"
        y="45"
        width="6"
        height="4"
        rx="1"
        fill="var(--brand-blanc)"
        opacity="0.8"
      />
      <rect
        x="59"
        y="45"
        width="6"
        height="4"
        rx="1"
        fill="var(--brand-blanc)"
        opacity="0.8"
      />
      
      {/* Front grille lines */}
      <line x1="22" y1="52" x2="28" y2="52" stroke="var(--brand-blanc)" strokeWidth="1" opacity="0.6"/>
      <line x1="22" y1="55" x2="28" y2="55" stroke="var(--brand-blanc)" strokeWidth="1" opacity="0.6"/>
      <line x1="22" y1="58" x2="28" y2="58" stroke="var(--brand-blanc)" strokeWidth="1" opacity="0.6"/>
    </svg>
  );
}