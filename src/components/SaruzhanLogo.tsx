import React from 'react';

interface SaruzhanLogoProps {
  className?: string;
  color?: string;
}

export const SaruzhanLogo: React.FC<SaruzhanLogoProps> = ({ 
  className = "w-8 h-8", 
  color = "currentColor" 
}) => {
  return (
    <svg 
      viewBox="0 0 240 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Horizontal Bars - Wing effect */}
      <path d="M20 65H140L135 75H25L20 65Z" fill={color} />
      <path d="M40 85H140L135 95H45L40 85Z" fill={color} />
      <path d="M60 105H140L135 115H65L60 105Z" fill={color} />
      <path d="M80 125H140L135 135H85L80 125Z" fill={color} />
      <path d="M100 145H140L135 155H105L100 145Z" fill={color} />

      {/* Circle Ring */}
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M165 40C131.863 40 105 66.8629 105 100C105 133.137 131.863 160 165 160C198.137 160 225 133.137 225 100C225 66.8629 198.137 40 165 40ZM165 52C138.49 52 117 73.4903 117 100C117 126.51 138.49 148 165 148C191.51 148 213 126.51 213 100C213 73.4903 191.51 52 165 52Z" 
        fill={color} 
      />

      {/* Internal Arrowhead/Triangle */}
      <path d="M165 100L215 75V125L165 100Z" fill={color} />
    </svg>
  );
};
