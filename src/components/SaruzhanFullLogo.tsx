import React from 'react';
import { SaruzhanLogo } from './SaruzhanLogo';

interface SaruzhanFullLogoProps {
  className?: string;
  isInline?: boolean;
}

export const SaruzhanFullLogo: React.FC<SaruzhanFullLogoProps> = ({ 
  className = "", 
  isInline = false 
}) => {
  return (
    <span 
      className={`
        inline-flex items-center gap-2 select-none font-[600] tracking-tight text-primary
        ${isInline ? 'align-baseline' : ''} 
        ${className}
      `}
      style={isInline ? { verticalAlign: '-0.125em' } : {}}
    >
      <SaruzhanLogo 
        className={isInline ? "h-[1.1em] w-auto text-brand-yellow" : "h-[1.2em] w-auto text-brand-yellow"} 
      />
      <span className={isInline ? "text-[0.95em] leading-none flex items-center gap-1" : "text-inherit flex items-center gap-1"}>
        saruzhan<span className="bg-brand-yellow text-black px-1 rounded-[1px] text-[0.55em] font-bold h-[1.4em] flex items-center uppercase leading-none">kz</span>
      </span>
    </span>
  );
};
