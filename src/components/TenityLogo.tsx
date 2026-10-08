import React from 'react';

interface TenityLogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const TenityLogo: React.FC<TenityLogoProps> = ({ 
  className = '', 
  theme = 'light',
  size = 'md' 
}) => {
  const isLightText = theme === 'dark'; // on dark background, text is white
  const textColor = isLightText ? 'text-white' : 'text-black';
  const iconColor = isLightText ? '#FFFFFF' : '#000000';

  const sizeClasses = {
    sm: 'text-base gap-2',
    md: 'text-xl gap-2.5',
    lg: 'text-3xl gap-3',
  };

  const iconSizes = {
    sm: 18,
    md: 22,
    lg: 32,
  };

  const dim = iconSizes[size];

  return (
    <div className={`inline-flex items-center font-bold tracking-tight select-none ${sizeClasses[size]} ${textColor} ${className}`}>
      {/* Tenity distinctive modern triangle icon */}
      <svg 
        width={dim} 
        height={dim} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform hover:scale-105"
      >
        <path 
          d="M12 2.5L22 20.5H2L12 2.5Z" 
          stroke={iconColor} 
          strokeWidth="3.2" 
          strokeLinejoin="round" 
        />
        <circle 
          cx="12" 
          cy="14" 
          r="2.2" 
          fill={iconColor} 
        />
      </svg>
      <span className="font-extrabold tracking-tight">Tenity</span>
    </div>
  );
};

export const InlinePill: React.FC<{ 
  theme?: 'white' | 'black'; 
  className?: string 
}> = ({ theme = 'white', className = '' }) => {
  const bg = theme === 'white' 
    ? 'bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]' 
    : 'bg-black shadow-[inset_0_2px_4px_rgba(255,255,255,0.15)]';
  
  return (
    <span 
      className={`inline-block rounded-full align-middle transition-transform hover:scale-105 ${bg} ${className}`}
      style={{
        width: '4.5rem',
        height: '2rem',
        marginRight: '0.45rem',
        marginLeft: '0.1rem',
      }}
      aria-hidden="true"
    />
  );
};
