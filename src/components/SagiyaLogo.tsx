import React from 'react';

interface SagiyaLogoProps {
  variant?: 'full' | 'icon' | 'lockup-light' | 'lockup-dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SagiyaLogo: React.FC<SagiyaLogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md',
}) => {
  if (variant === 'icon') {
    const dim = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : size === 'xl' ? 'w-16 h-16' : 'w-10 h-10';
    return (
      <div className={`relative flex items-center justify-center rounded-full bg-[#006400] text-[#86df72] shadow-xs ${dim} ${className}`}>
        <svg viewBox="0 0 100 100" className="w-4/5 h-4/5" fill="none">
          {/* Leaf with yellow border, green fill, purple accent */}
          <path
            d="M8 50 C 15 15, 60 10, 92 48 C 65 85, 20 85, 8 50 Z"
            fill="#005a18"
            stroke="#FFD700"
            strokeWidth="5"
          />
          {/* Purple inner petal */}
          <path
            d="M12 48 C 22 24, 48 24, 66 38 C 50 56, 25 56, 12 48 Z"
            fill="#54118a"
            stroke="#FFD700"
            strokeWidth="3"
          />
        </svg>
      </div>
    );
  }

  // Full brand representation resembling Image 1
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 200 150" className="w-full h-full drop-shadow-xs" fill="none">
          {/* Outer Gold Border Leaf */}
          <path
            d="M 20,70 C 35,15 130,5 185,68 C 135,130 45,125 20,70 Z"
            fill="#015214"
            stroke="#F5CB18"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          {/* Inner Purple Petal */}
          <path
            d="M 26,68 C 42,32 90,30 128,52 C 98,78 50,80 26,68 Z"
            fill="#4a1575"
            stroke="#F5CB18"
            strokeWidth="5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className="font-serif font-bold text-2xl tracking-tight text-[#5D4037]">S</span>
          <span className="font-serif font-semibold text-lg tracking-widest text-[#5D4037] ml-0.5" style={{ fontFamily: "'Cinzel', Georgia, serif" }}>
            AGIYA
          </span>
          <span className="font-display text-sm font-bold text-[#006400] ml-2 tracking-wide uppercase">
            Ventures
          </span>
        </div>
      </div>
    </div>
  );
};
