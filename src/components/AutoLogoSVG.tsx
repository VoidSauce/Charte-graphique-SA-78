import React from 'react';
import logo from './logo.svg';

interface AutoLogoSVGProps {
  size?: number;
  className?: string;
}

export function AutoLogoSVG({ size = 32, className = '' }: AutoLogoSVGProps) {
  return (
    <img
      src={logo}
      alt="Services Auto 78 Logo"
      width={size}
      height={size}
      className={`border-0 ${className}`} // Ajoutez border-0 pour supprimer la bordure
      style={{
  display: 'block',
  objectFit: 'contain',
  border: 'none !important',
  outline: 'none !important',
  boxShadow: 'none !important',
}}
    />
  );
}
