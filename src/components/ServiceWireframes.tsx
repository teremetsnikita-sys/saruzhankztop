import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export const WireframeRVD = () => {
  const { t } = useTranslation();
  return (
    <svg viewBox="0 0 240 240" fill="none" className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700">
    <defs>
      <linearGradient id="grad-rvd" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    
    <g stroke="currentColor" strokeWidth="0.5">
      {/* Background circular technical grid */}
      <circle cx="120" cy="120" r="100" strokeDasharray="1 10" opacity="0.1" />
      <circle cx="120" cy="120" r="70" strokeDasharray="1 15" opacity="0.05" />
      
      {/* Main Fitting Body - More Massive Isometric Hexagon */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Main Body */}
        <path d="M120 60 L180 90 L180 150 L120 180 L60 150 L60 90 Z" fill="url(#grad-rvd)" />
        <path d="M120 60 L120 120 M60 90 L120 120 L180 90" opacity="0.4" />
        <path d="M120 180 L120 120" opacity="0.2" strokeDasharray="2 2" />
        
        {/* Internal Thread Detail */}
        {[...Array(8)].map((_, i) => (
          <motion.path
            key={`thread-${i}`}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 + i * 0.1 }}
            d={`M${90 + i * 2} ${105 + i} L${150 - i * 2} ${135 - i}`}
            opacity="0.4"
            className="text-brand-yellow"
            strokeWidth="0.4"
          />
        ))}
      </motion.g>

      {/* Hose Section - Thicker and more complex */}
      <g>
        {[...Array(20)].map((_, i) => (
          <motion.path
            key={`spiral-${i}`}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ 
              duration: 1.5, 
              delay: 0.2 + i * 0.03,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 3
            }}
            d={`M${60 - i * 1.5} ${90 - i * 3} Q${80 - i * 2} ${70 - i * 4} ${50 - i * 2} ${50 - i * 4}`}
            strokeWidth={0.8 - (i * 0.03)}
            opacity={0.3 - (i * 0.01)}
          />
        ))}
      </g>

      {/* Floating UI Elements / Metadata */}
      <motion.g
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <path d="M180 90 L210 70 L230 70" strokeWidth="0.3" strokeDasharray="2 2" />
        <text x="210" y="65" className="text-[5px] font-mono fill-brand-yellow tracking-tighter uppercase">{t('technical.vibration.params.p_label', 'P')}_MAX: 720_BAR</text>
        <text x="210" y="78" className="text-[4px] font-mono fill-text-tertiary uppercase">{t('technical.vibration.params.material_short', 'Material')}: 1.4404</text>
      </motion.g>

      {/* Coordinate Cross */}
      <g opacity="0.2">
        <path d="M120 20 L120 40 M120 200 L120 220" />
        <path d="M20 120 L40 120 M200 120 L220 120" />
      </g>
    </g>
  </svg>
  );
};

export const WireframeFittings = () => (
  <svg viewBox="0 0 200 200" fill="none" className="w-full h-full opacity-40 group-hover:opacity-100 transition-opacity duration-700">
    <g stroke="currentColor" strokeWidth="0.4">
      {/* Layered Isometric Base (like the reference image) */}
      {[...Array(6)].map((_, i) => (
        <motion.path
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 - i * 0.15 }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          d={`M40 ${140 - i * 6} L100 ${170 - i * 6} L160 ${140 - i * 6} L100 ${110 - i * 6} Z`}
        />
      ))}
      
      {/* Top Graphic Element (Circle with lines) */}
      <motion.g
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        style={{ transformOrigin: '100px 104px' }}
      >
        <circle cx="100" cy="104" r="25" strokeWidth="0.8" className="text-brand-yellow" />
        <path d="M80 104 L120 104 M100 84 L100 124" strokeWidth="0.2" opacity="0.4" />
        {[...Array(4)].map((_, i) => (
          <path key={i} d={`M85 ${96 + i * 5} L115 ${96 + i * 5}`} strokeWidth="0.2" opacity="0.3" />
        ))}
      </motion.g>

      {/* Connecting dashed lines */}
      <path d="M40 140 L40 104 M160 140 L160 104 M100 170 L100 134" strokeDasharray="1 3" opacity="0.2" />
    </g>
  </svg>
);

export const WireframeDiagnostic = () => {
  const { t } = useTranslation();
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full opacity-40 group-hover:opacity-100 transition-opacity duration-700">
    <g stroke="currentColor" strokeWidth="0.4">
      {/* Isometric Grid Base */}
      <path d="M30 130 L100 170 L170 130 L100 90 Z" opacity="0.2" />
      
      {/* Wave Sensors/Bars (Isometric) */}
      {[...Array(12)].map((_, i) => {
        const x = 50 + i * 10;
        const yBase = 140 - i * 4.3;
        const height = 20 + Math.sin(i * 0.8) * 15;
        
        return (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>
            <path d={`M${x} ${yBase} L${x + 5} ${yBase - 3} L${x + 5} ${yBase - 3 - height} L${x} ${yBase - height} Z`} fill="currentColor" fillOpacity={i === 7 ? "0.2" : "0.05"} className={i === 7 ? "text-brand-yellow" : ""} />
            <path d={`M${x} ${yBase - height} L${x + 5} ${yBase - 3 - height} L${x + 10} ${yBase - height} L${x + 5} ${yBase + 3 - height} Z`} strokeWidth={i === 7 ? "0.4" : "0.2"} className={i === 7 ? "text-brand-yellow" : ""} />
          </motion.g>
        );
      })}

      {/* Floating Meta Box */}
      <motion.rect
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        x="130" y="40" width="40" height="25"
        strokeDasharray="2 1"
      />
      <text x="135" y="55" className="text-[5px] font-mono fill-brand-yellow">{t('technical.vibration.analysis_active', 'ANALYSIS_ACTIVE')}</text>
    </g>
  </svg>
  );
};
