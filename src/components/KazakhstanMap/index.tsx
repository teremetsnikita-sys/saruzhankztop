import React, { useState } from 'react';
import { kazakhRegions, KazakhRegion } from './kazakh_paths_index';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { getLocalized } from '../../lib/utils';

export const KazakhstanMap = () => {
  const { t, i18n } = useTranslation();
  const [hoveredRegion, setHoveredRegion] = useState<KazakhRegion | null>(null);

  return (
    <div className="w-full py-12 relative">
      <div className="max-w-6xl mx-auto relative">
        <svg
          viewBox="0 0 900 500"
          className="w-full h-auto drop-shadow-[0_0_50px_rgba(229,225,230,0.03)]"
          style={{ filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.1))' }}
        >
          {kazakhRegions.map((region) => (
            <motion.path
              key={region.id}
              d={region.d}
              fill={hoveredRegion?.id === region.id ? "rgba(229,229,230,0.12)" : "rgba(229,229,230,0.02)"}
              stroke={hoveredRegion?.id === region.id ? "#E5E5E6" : "rgba(229,229,230,0.15)"}
              strokeWidth={hoveredRegion?.id === region.id ? "1.2" : "0.5"}
              initial={false}
              animate={{
                fill: hoveredRegion?.id === region.id ? "rgba(229,229,230,0.1)" : "rgba(229,229,230,0.02)",
                stroke: hoveredRegion?.id === region.id ? "#E5E5E6" : "rgba(229,229,230,0.15)",
              }}
              onMouseEnter={() => setHoveredRegion(region)}
              onMouseLeave={() => setHoveredRegion(null)}
              className="transition-all duration-300 cursor-crosshair"
            />
          ))}
        </svg>

        {/* Tooltip / Info Overlay - Positioned more strategically for large map */}
        <AnimatePresence>
          {hoveredRegion && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              className="absolute top-10 right-0 pointer-events-none z-20"
            >
              <div className="bg-[#090A0B] border border-white/10 p-6 rounded-sm shadow-2xl backdrop-blur-md min-w-[240px]">
                <div className="text-[10px] font-mono text-[#8A8F98] uppercase tracking-[0.3em] mb-3">{t('map.region_data', 'REGION_DATA')}</div>
                <div className="text-[18px] font-[510] text-[#E5E5E6] mb-1">
                  {t('map.regions.' + hoveredRegion.id)}
                </div>
                <div className="text-[12px] text-[#8A8F98] mb-6 font-mono opacity-60 uppercase">{hoveredRegion.id}_{t('map.sector', 'Sector')}</div>
                
                <div className="space-y-4 pt-4 border-t border-white/5">
                   <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono text-[#8A8F98] uppercase tracking-widest">{t('map.center', 'Region Center')}</span>
                      <span className="text-[13px] text-[#E5E5E6]">
                        {t('map.centers.' + hoveredRegion.id)}
                      </span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono text-[#8A8F98] uppercase tracking-widest">{t('map.logistics', 'Logistics')}</span>
                      <span className="text-[13px] text-[#E5E5E6]">{t(`map.shipping.${hoveredRegion.days_key}`)}</span>
                   </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Legend */}
        <div className="mt-12 flex items-center justify-center gap-12">
           <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E5E5E6] animate-pulse" />
              <span className="text-[10px] font-mono text-[#8A8F98] uppercase tracking-widest">{t('map.legend_nodes', 'Active Logistics Nodes')}</span>
           </div>
           <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-white/10" />
              <span className="text-[10px] font-mono text-[#8A8F98] uppercase tracking-widest">{t('map.legend_network', 'Interregional Network')}</span>
           </div>
        </div>
      </div>
    </div>
  );
};
