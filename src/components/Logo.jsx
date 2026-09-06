import React from 'react';

const Logo = ({ size = 'md', variant = 'full', className = '' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-5xl lg:text-6xl',
  };

  const iconSizes = {
    sm: 'h-6 w-8',
    md: 'h-9 w-12',
    lg: 'h-12 w-16',
    xl: 'h-16 w-20',
  };

  return (
    <div className={`flex items-center gap-2 lg:gap-3 group select-none ${className}`}>
      {/* High-Tech Interlocking ANB Logo Icon */}
      <div className={`relative flex items-center justify-center ${iconSizes[size] || iconSizes.md} transition-transform duration-300 group-hover:scale-105`}>
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 blur-md opacity-40 group-hover:opacity-70 transition-opacity rounded-xl"></div>
        
        <svg
          viewBox="0 0 160 100"
          className="w-full h-full relative z-10 drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Badge */}
          <rect width="160" height="100" rx="20" fill="url(#bg-gradient)" />
          
          {/* Stylized Interlocking lowercase 'anb' text */}
          <text
            x="22"
            y="70"
            fontFamily="'Outfit', 'Inter', sans-serif"
            fontWeight="900"
            fontSize="78"
            letterSpacing="-4"
            fill="#ffffff"
          >
            anb
          </text>
          
          {/* Interlocking Puzzle Accent Overlay */}
          <path
            d="M 52 24 C 60 14, 76 14, 84 24 C 90 32, 85 45, 75 48 C 65 52, 60 68, 70 76"
            stroke="#ff6b00"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />

          <defs>
            <linearGradient id="bg-gradient" x1="0" y1="0" x2="160" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E60000" />
              <stop offset="1" stopColor="#FF4500" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {variant !== 'icon' && (
        <div className="flex flex-col">
          <div className={`font-black tracking-tight flex items-baseline gap-1 font-heading ${sizeClasses[size] || sizeClasses.md}`}>
            <span className="text-[#E60000] dark:text-[#ff3b3b] font-black lowercase tracking-tighter">anb</span>
            <span className="italic uppercase text-[#ff6b00] tracking-wider font-extrabold drop-shadow-sm">MOBILE</span>
          </div>
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-slate-500 dark:text-slate-400 uppercase -mt-1 font-sans">
            & Computer Accessories
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
