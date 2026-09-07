import React from 'react';

interface ParkerLogoProps {
  className?: string;
  showBox?: boolean;
  /** If true, applies specific alignment and scaling for insertion into text blocks */
  isInline?: boolean;
}

export const ParkerLogo: React.FC<ParkerLogoProps> = ({ 
  className = "h-12", 
  showBox = true,
  isInline = false
}) => {
  // Tight ViewBox: removed top/bottom whitespace. 
  // Original content was roughly from y=30.8 to y=80.7
  const viewBox = "0 30.5 245 51";
  
  return (
    <span 
      className={`
        inline-flex items-center select-none 
        ${showBox ? 'bg-black px-6 py-2' : ''} 
        ${isInline ? 'align-baseline' : ''} 
        ${className}
      `}
      style={isInline ? { verticalAlign: '-0.15em' } : {}}
    >
      <svg 
        viewBox={viewBox}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        preserveAspectRatio="xMinYMid meet"
      >
        <g fill="#FFCC00">
          {/* Official Parker Logo Bar */}
          <rect x="0" y="45.9" width="73.5" height="11.4" />
          
          {/* Official Parker Logo Typography Paths */}
          <path d="M219.317,66.948v-9.605c0,0,1.991-12.894-15.61-11.99c-17.246-0.53-16.716,8.716-16.891,18.139c0,10.36,1.812,17.616,15.609,17.06c14.52,0,16.892,0,16.892,0V69.138h-16.892V56.443h2.365v10.506H219.317z" />
          <path d="M154.314,30.838v49.89h14.168V68.406l6.176,12.146h15.789l-10.54-17.959l9.804-16.862h-15.053l-6.352,11.963V30.838H154.314z" />
          <path d="M244.556,45.731v11.795h-8.167v23.025h-14.348V55.337c0,0,0.176-9.606,10.716-9.606H244.556z" />
          <path d="M152.318,45.731v11.795h-8.167v23.025h-14.345V55.337c0,0,0.175-9.606,10.713-9.606H152.318z" />
          <path d="M97.68,45.731h18.154c0,0,11.421-0.732,11.421,9.606c0,10.703,0,25.215,0,25.215H105.85c0,0-12.883,1.641-12.883-10.712c0-11.055,10.336-9.772,12.883-9.772h4.54v10.33h2.724V57.527H97.68V45.731z" />
          <path d="M52.824,59.868v20.684h19.618v-9.071h4.713c0,0,18.709,0.907,18.709-20.134c0-21.417-14.698-21.035-19.063-21.035c-4.36,0-23.978,0-23.978,0v13.05h23.245v16.506H52.824z" />
        </g>
      </svg>
    </span>
  );
};
