import React from 'react';

// Crisp SVG Pixel Art Components with crispEdges rendering
export const PixelHeart: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    style={{ shapeRendering: 'crispEdges' }}
  >
    {/* Outline */}
    <rect x="2" y="3" width="4" height="1" fill="#FF8A5C" />
    <rect x="10" y="3" width="4" height="1" fill="#FF8A5C" />
    <rect x="1" y="4" width="6" height="4" fill="#FFA07A" />
    <rect x="9" y="4" width="6" height="4" fill="#FFA07A" />
    <rect x="2" y="8" width="12" height="2" fill="#FF8A5C" />
    <rect x="3" y="10" width="10" height="2" fill="#BB98E5" />
    <rect x="5" y="12" width="6" height="2" fill="#BB98E5" />
    <rect x="7" y="14" width="2" height="1" fill="#A779E0" />
    {/* Highlight shine */}
    <rect x="3" y="5" width="2" height="2" fill="#FFFFFF" />
  </svg>
);

export const PixelStar: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    style={{ shapeRendering: 'crispEdges' }}
  >
    <rect x="7" y="1" width="2" height="3" fill="#FDE047" />
    <rect x="6" y="4" width="4" height="2" fill="#FACC15" />
    <rect x="1" y="6" width="14" height="4" fill="#FBBF24" />
    <rect x="3" y="10" width="10" height="2" fill="#F59E0B" />
    <rect x="2" y="12" width="4" height="3" fill="#D97706" />
    <rect x="10" y="12" width="4" height="3" fill="#D97706" />
    <rect x="7" y="6" width="2" height="2" fill="#FFFFFF" />
  </svg>
);

export const PixelComputer: React.FC<{ size?: number; className?: string }> = ({ size = 32, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    style={{ shapeRendering: 'crispEdges' }}
  >
    {/* Monitor bezel */}
    <rect x="2" y="2" width="16" height="12" fill="#E2E8F0" />
    <rect x="1" y="2" width="1" height="12" fill="#CBD5E1" />
    <rect x="18" y="2" width="1" height="12" fill="#94A3B8" />
    <rect x="2" y="1" width="16" height="1" fill="#F8FAFC" />
    <rect x="2" y="14" width="16" height="1" fill="#94A3B8" />
    {/* Screen */}
    <rect x="4" y="4" width="12" height="8" fill="#1E1B4B" />
    {/* Screen Code */}
    <rect x="5" y="6" width="4" height="1" fill="#BB98E5" />
    <rect x="5" y="8" width="6" height="1" fill="#6EE7B7" />
    <rect x="5" y="10" width="3" height="1" fill="#FFA07A" />
    {/* Stand */}
    <rect x="8" y="15" width="4" height="2" fill="#94A3B8" />
    <rect x="6" y="17" width="8" height="2" fill="#64748B" />
  </svg>
);

export const PixelFlower: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    style={{ shapeRendering: 'crispEdges' }}
  >
    {/* Petals */}
    <rect x="6" y="1" width="4" height="3" fill="#BB98E5" />
    <rect x="6" y="12" width="4" height="3" fill="#BB98E5" />
    <rect x="1" y="6" width="3" height="4" fill="#BB98E5" />
    <rect x="12" y="6" width="3" height="4" fill="#BB98E5" />
    <rect x="3" y="3" width="3" height="3" fill="#D8B4FE" />
    <rect x="10" y="3" width="3" height="3" fill="#D8B4FE" />
    <rect x="3" y="10" width="3" height="3" fill="#D8B4FE" />
    <rect x="10" y="10" width="3" height="3" fill="#D8B4FE" />
    {/* Center */}
    <rect x="5" y="5" width="6" height="6" fill="#FDE047" />
    <rect x="6" y="7" width="1" height="1" fill="#1E1B4B" />
    <rect x="9" y="7" width="1" height="1" fill="#1E1B4B" />
    <rect x="7" y="9" width="2" height="1" fill="#F97316" />
  </svg>
);

export const PixelDisk: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    style={{ shapeRendering: 'crispEdges' }}
  >
    <rect x="2" y="2" width="12" height="12" fill="#6EE7B7" />
    <rect x="3" y="2" width="7" height="4" fill="#E2E8F0" />
    <rect x="5" y="3" width="2" height="3" fill="#3B82F6" />
    <rect x="4" y="9" width="8" height="5" fill="#FFFFFF" />
    <rect x="5" y="10" width="6" height="1" fill="#94A3B8" />
    <rect x="5" y="12" width="4" height="1" fill="#94A3B8" />
  </svg>
);

export const PixelSparkle: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    style={{ shapeRendering: 'crispEdges' }}
  >
    <rect x="5" y="1" width="2" height="10" fill="#FFA07A" />
    <rect x="1" y="5" width="10" height="2" fill="#FFA07A" />
    <rect x="4" y="4" width="4" height="4" fill="#FFF1EB" />
  </svg>
);
