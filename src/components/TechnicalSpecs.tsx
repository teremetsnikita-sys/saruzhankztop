import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { Info, AlertTriangle, ShieldCheck, Thermometer, Settings, Activity, Box, CheckCircle2 } from "lucide-react";
import { ParkerLogo } from "./ParkerLogo";
import { getLocalized } from "../lib/utils";

export const SeriesTable = () => {
  const { t } = useTranslation();
  const data = [
    { series: "LL", name: t('technical.series_table.ll_name'), pressure: `100 ${t('common.bar', 'bar')}`, apps: t('technical.series_table.ll_apps') },
    { series: "L", name: t('technical.series_table.l_name'), pressure: `500 ${t('common.bar', 'bar')}`, apps: t('technical.series_table.l_apps') },
    { series: "S", name: t('technical.series_table.s_name'), pressure: `800 ${t('common.bar', 'bar')}`, apps: t('technical.series_table.s_apps') }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse border border-white/5 bg-white/[0.01]">
        <thead>
          <tr className="bg-white/5 border-b border-white/10 text-[10px] font-mono text-text-tertiary uppercase tracking-widest">
            <th className="p-6">{t('technical.series_table.series')}</th>
            <th className="p-6">{t('technical.series_table.name')}</th>
            <th className="p-6">{t('technical.series_table.pressure')}</th>
            <th className="p-6">{t('technical.series_table.apps')}</th>
          </tr>
        </thead>
        <tbody className="text-[14px] text-text-secondary">
          {data.map((row, i) => (
            <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
              <td className="p-6 font-mono text-brand-yellow/60">{row.series}</td>
              <td className="p-6 text-white font-medium">{row.name}</td>
              <td className="p-6">{row.pressure}</td>
              <td className="p-6 opacity-60">{row.apps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const TemperaturePressureChart = () => {
  const { t } = useTranslation();
  const temps = [
    { temp: "-60°C... +120°C", steel: "0%", stainless: "0%" },
    { temp: "+150°C", steel: "19%", stainless: "21.5%" },
    { temp: "+200°C", steel: "19%", stainless: "21.5%" },
    { temp: "+250°C", steel: "27%", stainless: "29%" },
    { temp: "+300°C", steel: "—", stainless: "29%" },
    { temp: "+400°C", steel: "—", stainless: "34%" }
  ];

  return (
    <div className="space-y-10">
      <div className="p-6 bg-brand-yellow/[0.03] border border-brand-yellow/10 rounded-sm flex gap-4 items-start">
        <AlertTriangle className="w-5 h-5 text-brand-yellow shrink-0 mt-1" />
        <p className="text-[14px] text-brand-yellow/60 leading-relaxed">
          {t('technical.temp_chart.warning')}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-white/5">
          <thead>
            <tr className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">
              <th className="p-4 border-b border-white/10">{t('technical.temp_chart.title')}</th>
              <th className="p-4 border-b border-white/10">{t('technical.temp_chart.steel')}</th>
              <th className="p-4 border-b border-white/10">{t('technical.temp_chart.stainless')}</th>
            </tr>
          </thead>
          <tbody className="text-[13px] text-text-secondary">
            {temps.map((row, i) => (
              <tr key={i} className="border-b border-white/5">
                <td className="p-4 font-mono">{row.temp}</td>
                <td className="p-4">{row.steel}</td>
                <td className="p-4">{row.stainless}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const EO2InteractiveDiagram = () => {
  const { t } = useTranslation();
  const [activePart, setActivePart] = useState<number>(0);

  const components = [
    {
      id: 0,
      title: t('technical.eo2.parts.nut_title'),
      desc: t('technical.eo2.parts.nut_desc'),
      stats: { material: "Steel / Zinc-Nickel", feature: "Integrated" },
      pos: { top: "30%", left: "55%" }
    },
    {
      id: 1,
      title: t('technical.eo2.parts.seal_title'),
      desc: t('technical.eo2.parts.seal_desc'),
      stats: { type: "NBR / FKM", function: "Sealing" },
      pos: { top: "43%", left: "43%" }
    },
    {
      id: 2,
      title: t('technical.eo2.parts.stop_title'),
      desc: t('technical.eo2.parts.stop_desc'),
      stats: { control: "Visual", function: "Retaining" },
      pos: { top: "46%", left: "48%" }
    },
    {
      id: 3,
      title: t('technical.eo2.parts.body_title'),
      desc: t('technical.eo2.parts.body_desc'),
      stats: { angle: "24°", standard: "ISO 8434-1" },
      pos: { top: "55%", left: "30%" }
    }
  ];

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Control Panel */}
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-2">
            <h3 className="text-[28px] font-[510] text-white tracking-tight leading-tight">{t('technical.eo2.title')}</h3>
            <p className="text-[15px] text-[#8A8F98] leading-relaxed font-[300]">{t('technical.eo2.subtitle')}</p>
          </div>

          <div className="space-y-3">
            {components.map((comp) => (
              <button
                key={comp.id}
                onClick={() => setActivePart(comp.id)}
                className={`w-full text-left p-5 rounded-sm border transition-all duration-300 group ${
                  activePart === comp.id 
                    ? 'bg-white/5 border-brand-yellow/50' 
                    : 'bg-transparent border-white/5 hover:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono uppercase tracking-[0.2em] ${activePart === comp.id ? 'text-white' : 'text-white/40'}`}>
                    {t('technical.eo2.layer')}_0{comp.id + 1}
                  </span>
                  <div className={`w-1.5 h-1.5 rounded-full ${activePart === comp.id ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'bg-white/10'}`} />
                </div>
                <div className={`text-[17px] font-medium transition-colors ${activePart === comp.id ? 'text-white' : 'text-white/60'}`}>
                  {comp.title}
                </div>
              </button>
            ))}
          </div>

          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-sm">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
              <span className="text-[14px] font-medium text-white">{t('technical.eo2.function_split')}</span>
            </div>
            <p className="text-[13px] text-[#8A8F98] leading-relaxed">
              {t('technical.eo2.function_split_desc')}
            </p>
          </div>
        </div>

        {/* Center Visual Stage - High-Precision Engineering View */}
        <div className="lg:col-span-5 relative aspect-square bg-[#08090A] rounded-sm border border-white/5 overflow-hidden">
          {/* Subtle Scanline Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49%,rgba(0,186,242,0.05)_50%,transparent_51%)] bg-[size:100%_4px] opacity-20 pointer-events-none" />
          
          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-6">
            <svg viewBox="0 0 400 300" className="w-full h-auto overflow-visible drop-shadow-[0_0_15px_rgba(0,186,242,0.1)]">
              <defs>
                <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Main Axis */}
              <line x1="20" y1="150" x2="380" y2="150" stroke="white" strokeWidth="0.5" strokeDasharray="12 8 2 8" opacity="0.15" />

              {/* 1. Fitting Body (Orange in photo) - Engineering Profile */}
              <g opacity={activePart === 3 ? 1 : 0.3} className="transition-all duration-500">
                <motion.path 
                  d="M 40 100 L 100 100 L 100 105 L 145 105 L 175 122 L 175 178 L 145 195 L 100 195 L 100 200 L 40 200 Z" 
                  fill="none" 
                  stroke={activePart === 3 ? "var(--color-brand-yellow)" : "white"} 
                  strokeWidth={activePart === 3 ? "1.5" : "0.8"}
                  filter={activePart === 3 ? "url(#neon-glow)" : "none"}
                />
                <path d="M 100 105 L 120 105" stroke="white" strokeWidth="0.5" opacity="0.2" />
                <path d="M 100 195 L 120 195" stroke="white" strokeWidth="0.5" opacity="0.2" />
              </g>

              {/* 2. Tube (Yellow in photo) */}
              <g opacity="0.5">
                <path d="M 145 125 L 320 125 L 320 175 L 145 175" fill="none" stroke="white" strokeWidth="0.8" />
                <path d="M 145 125 L 145 175" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
              </g>

              {/* 3. Functional Nut (Grey in photo) - Accurate Chamfered Shape */}
              <g opacity={activePart === 0 ? 1 : 0.2} className="transition-all duration-500">
                <motion.path 
                  d="M 115 70 L 135 60 L 250 60 L 270 70 L 270 230 L 250 240 L 135 240 L 115 230 Z" 
                  fill="none" 
                  stroke={activePart === 0 ? "var(--color-brand-yellow)" : "white"} 
                  strokeWidth={activePart === 0 ? "1.5" : "0.8"}
                  filter={activePart === 0 ? "url(#neon-glow)" : "none"}
                />
                {/* Internal Nut Geometry */}
                <path d="M 135 90 L 250 90 L 250 210 L 135 210 Z" fill="none" stroke="white" strokeWidth="0.5" opacity="0.1" />
              </g>

              {/* 4. Elastomer Seal (Green in photo - Wedged shape) */}
              <g opacity={activePart === 1 ? 1 : 0.4} className="transition-all duration-500">
                <motion.path 
                  d="M 168 125 L 188 125 L 182 138 L 162 138 Z" 
                  fill={activePart === 1 ? "var(--color-brand-yellow)" : "transparent"}
                  stroke={activePart === 1 ? "var(--color-brand-yellow)" : "white"} 
                  strokeWidth="1"
                  opacity={activePart === 1 ? 0.4 : 0.3}
                />
                <motion.path 
                  d="M 168 175 L 188 175 L 182 162 L 162 162 Z" 
                  fill={activePart === 1 ? "var(--color-brand-yellow)" : "transparent"}
                  stroke={activePart === 1 ? "var(--color-brand-yellow)" : "white"} 
                  strokeWidth="1"
                  opacity={activePart === 1 ? 0.4 : 0.3}
                />
              </g>

              {/* 5. Retaining Ring (Pink in photo - Mechanical wedge) */}
              <g opacity={activePart === 2 ? 1 : 0.4} className="transition-all duration-500">
                <motion.path 
                  d="M 188 125 L 220 125 L 212 154 L 180 154 Z" 
                  fill={activePart === 2 ? "var(--color-brand-yellow)" : "transparent"}
                  stroke={activePart === 2 ? "var(--color-brand-yellow)" : "white"} 
                  strokeWidth="1"
                  opacity={activePart === 2 ? 0.6 : 0.3}
                />
                <motion.path 
                  d="M 188 175 L 220 175 L 212 146 L 180 146 Z" 
                  fill={activePart === 2 ? "var(--color-brand-yellow)" : "transparent"}
                  stroke={activePart === 2 ? "var(--color-brand-yellow)" : "white"} 
                  strokeWidth="1"
                  opacity={activePart === 2 ? 0.6 : 0.3}
                />
              </g>

              {/* Engineering Annotations (Callouts) */}
              <g className="font-mono text-[8px] tracking-tighter" opacity="0.3">
                <text x="50" y="90" fill="white">{t('technical.eo2.annotation_cone')}</text>
                <text x="300" y="115" fill="white">{t('technical.eo2.annotation_tube')}</text>
                <text x="180" y="50" fill="white">{t('technical.eo2.annotation_nut')}</text>
              </g>
            </svg>

            {/* Interaction Hotspots - Perfectly aligned with geometry */}
            <div className="absolute inset-0">
              {components.map((comp) => (
                <button 
                  key={comp.id}
                  onClick={() => setActivePart(comp.id)}
                  className="absolute group/hotspot transition-transform duration-300 hover:scale-110"
                  style={{ top: comp.pos.top, left: comp.pos.left }}
                >
                  <div className={`w-6 h-6 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-500 ${
                    activePart === comp.id ? 'bg-brand-yellow/30 scale-150' : 'bg-white/5 hover:bg-white/10'
                  }`}>
                    <div className={`w-1 h-1 rounded-full ${activePart === comp.id ? 'bg-brand-yellow shadow-[0_0_12px_var(--color-brand-yellow)]' : 'bg-white/50'}`} />
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em]">{t('technical.eo2.spec_tag')}</span>
          </div>
        </div>

        {/* Right Detail Card */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePart}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-8 bg-[#0D0F12] rounded-sm border border-white/5 relative overflow-hidden h-full flex flex-col justify-center"
            >
              <div className="absolute top-[-20px] right-[-20px] opacity-[0.02]">
                <Settings className="w-48 h-48" />
              </div>

              <div className="relative z-10 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[9px] font-mono text-white/40 uppercase tracking-widest mb-6">
                    {t('rvd_configurator.tech_spec_label', 'Tech_Spec')}
                  </div>
                  <h4 className="text-[24px] font-[510] text-white leading-tight mb-4">{components[activePart].title}</h4>
                  <p className="text-[15px] text-[#8A8F98] leading-relaxed font-[300]">
                    {components[activePart].desc}
                  </p>
                </div>

                <div className="space-y-4 pt-8 border-t border-white/5">
                  {Object.entries(components[activePart].stats).map(([key, value]) => {
                    const keyMap: Record<string, string> = {
                      material: t('technical.vibration.params.material_short', 'MATERIAL'),
                      feature: t('technical.vibration.params.feature_short', 'FEATURE'),
                      type: t('technical.vibration.params.type_short', 'TYPE'),
                      function: t('technical.vibration.params.function_short', 'FUNCTION'),
                      control: t('technical.vibration.params.control_short', 'CONTROL'),
                      angle: t('technical.vibration.params.angle_short', 'ANGLE'),
                      standard: t('technical.vibration.params.standard_short', 'STANDARD')
                    };
                    return (
                      <div key={key} className="flex items-center justify-between group/stat">
                        <span className="text-[10px] text-[#8A8F98] uppercase font-mono tracking-widest">{t(`technical.vibration.params.${key}_short`, keyMap[key] || key)}</span>
                        <span className="text-[13px] text-white font-medium bg-white/5 px-2 py-0.5 rounded transition-colors group-hover:bg-brand-yellow/20">{value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export const VibrationFormula = () => {
  const { t } = useTranslation();
  const [hoveredVar, setHoveredVar] = React.useState<string | null>(null);

  const params = [
    { id: "Y", label: t('technical.vibration.params.y_label'), desc: t('technical.vibration.params.y_desc') },
    { id: "S", label: t('technical.vibration.params.s_label'), desc: t('technical.vibration.params.s_desc') },
    { id: "L", label: t('technical.vibration.params.l_label'), desc: t('technical.vibration.params.l_desc') },
    { id: "E", label: t('technical.vibration.params.e_label'), desc: t('technical.vibration.params.e_desc') },
    { id: "D", label: t('technical.vibration.params.d_label'), desc: t('technical.vibration.params.d_desc') },
    { id: "P", label: t('technical.vibration.params.p_label'), desc: t('technical.vibration.params.p_desc') }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12">
      {/* Visual Simulation Block */}
      <div className="lg:col-span-7 p-1 bg-[#08090A] rounded-sm border border-white/5 overflow-hidden relative group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,186,242,0.05),transparent_70%)]" />
        
        {/* Oscilloscope Grid */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>

        <div className="relative h-[400px] flex items-center justify-center p-12">
          <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
            {/* Base Support */}
            <rect x="20" y="80" width="40" height="40" fill="white" fillOpacity="0.1" />
            <line x1="60" y1="80" x2="60" y2="120" stroke="white" strokeWidth="2" opacity="0.2" />

            {/* Vibrating Pipe */}
            <motion.path
              d="M 60 100 Q 230 100 400 100"
              fill="none"
              stroke={hoveredVar === "P" ? "var(--color-brand-yellow)" : "white"}
              strokeWidth={hoveredVar === "D" ? 10 : 4}
              animate={{
                d: hoveredVar === "Y" 
                  ? ["M 60 100 Q 230 60 400 100", "M 60 100 Q 230 140 400 100", "M 60 100 Q 230 60 400 100"]
                  : hoveredVar === "E"
                  ? ["M 60 100 Q 145 90 230 100 T 400 100", "M 60 100 Q 145 110 230 100 T 400 100", "M 60 100 Q 145 90 230 100 T 400 100"]
                  : ["M 60 100 Q 230 95 400 100", "M 60 100 Q 230 105 400 100", "M 60 100 Q 230 95 400 100"]
              }}
              transition={{ 
                duration: hoveredVar === "S" ? 0.15 : hoveredVar === "Y" ? 0.4 : 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className={`transition-all duration-500 ${hoveredVar === "P" ? "opacity-100" : "opacity-40"}`}
              style={{ filter: hoveredVar === "P" ? "url(#neon-glow)" : "none" }}
            />
            
            {/* Highlighted Amplitude Y */}
            <motion.g 
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredVar === "Y" ? 1 : 0.1 }}
            >
              <line x1="230" y1="60" x2="230" y2="140" stroke="var(--color-brand-yellow)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="230" cy="100" r="3" fill="var(--color-brand-yellow)" />
              <text x="240" y="105" fill="var(--color-brand-yellow)" className="text-[12px] font-mono font-bold">{t('technical.vibration.params.y_label')}_max</text>
            </motion.g>

            {/* Pressure Glow (Internal) */}
            {hoveredVar === "P" && (
              <motion.path
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                d="M 60 100 Q 230 100 400 100"
                fill="none"
                stroke="var(--color-brand-yellow)"
                strokeWidth="8"
                className="blur-xl"
              />
            )}

            {/* Length Marker L */}
            <motion.g animate={{ opacity: (hoveredVar === "L" || hoveredVar === null) ? 0.2 : 0 }}>
              <line x1="60" y1="160" x2="400" y2="160" stroke="white" strokeWidth="1" />
              <line x1="60" y1="155" x2="60" y2="165" stroke="white" strokeWidth="1" />
              <line x1="400" y1="155" x2="400" y2="165" stroke="white" strokeWidth="1" />
            </motion.g>
            
            {/* Active Length L Highlight */}
            {hoveredVar === "L" && (
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <line x1="60" y1="160" x2="400" y2="160" stroke="var(--color-brand-yellow)" strokeWidth="2" />
                <motion.circle 
                  cx="230" cy="160" r="10" 
                  fill="var(--color-brand-yellow)" 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                />
                <text x="223" y="164" fill="#000" className="text-[10px] font-bold font-mono">L</text>
              </motion.g>
            )}
          </svg>

          {/* Status Overlay */}
          <div className="absolute top-8 left-8 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/20 animate-pulse" />
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{t('technical.vibration.analysis_active')}</span>
            </div>
            <div className="h-4 w-[1px] bg-white/10" />
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{t('technical.vibration.test_cycles')}</span>
          </div>
        </div>
      </div>

      {/* Formula & Parameters Block */}
      <div className="lg:col-span-5 flex flex-col justify-center space-y-12">
        <div className="space-y-2">
          <h3 className="text-[28px] font-[510] text-white tracking-tight leading-tight">{t('technical.vibration.title')}</h3>
          <p className="text-[15px] text-[#8A8F98] leading-relaxed font-[300]">{t('technical.vibration.subtitle')}</p>
        </div>

        {/* Big Interactive Formula */}
        <div className="p-8 bg-white/[0.02] border border-white/5 rounded-sm group/formula">
          <div className="flex items-center justify-center gap-6 text-[32px] md:text-[42px] font-mono text-white">
            <motion.span 
              animate={{ color: hoveredVar === "Y" ? "var(--color-brand-yellow)" : "white" }}
              className="cursor-help"
              onMouseEnter={() => setHoveredVar("Y")}
              onMouseLeave={() => setHoveredVar(null)}
            >Y</motion.span>
            <span className="opacity-20">=</span>
            <div className="flex flex-col items-center">
              <div className="border-b border-white/10 pb-2 px-6 flex items-center gap-3">
                <span className="opacity-40 text-[24px]">2 ×</span>
                <span 
                  className={`transition-colors cursor-help ${hoveredVar === "S" ? "text-brand-yellow" : ""}`}
                  onMouseEnter={() => setHoveredVar("S")}
                  onMouseLeave={() => setHoveredVar(null)}
                >S</span>
                <span className="opacity-40 text-[24px]">×</span>
                <span 
                  className={`transition-colors cursor-help ${hoveredVar === "L" ? "text-brand-yellow" : ""}`}
                  onMouseEnter={() => setHoveredVar("L")}
                  onMouseLeave={() => setHoveredVar(null)}
                >L²</span>
              </div>
              <div className="pt-2 flex items-center gap-3">
                <span className="opacity-40 text-[24px]">3 ×</span>
                <span 
                  className={`transition-colors cursor-help ${hoveredVar === "E" ? "text-brand-yellow" : ""}`}
                  onMouseEnter={() => setHoveredVar("E")}
                  onMouseLeave={() => setHoveredVar(null)}
                >E</span>
                <span className="opacity-40 text-[24px]">×</span>
                <span 
                  className={`transition-colors cursor-help ${hoveredVar === "D" ? "text-brand-yellow" : ""}`}
                  onMouseEnter={() => setHoveredVar("D")}
                  onMouseLeave={() => setHoveredVar(null)}
                >D</span>
              </div>
            </div>
          </div>
        </div>

        {/* Parameters Grid */}
        <div className="grid grid-cols-1 gap-3">
          {params.map((p) => (
            <motion.div 
              key={p.id}
              onMouseEnter={() => setHoveredVar(p.id)}
              onMouseLeave={() => setHoveredVar(null)}
              className={`flex items-center justify-between p-4 rounded-sm border transition-all duration-300 cursor-pointer ${
                hoveredVar === p.id ? 'bg-brand-yellow/10 border-brand-yellow/20 translate-x-2' : 'bg-white/[0.02] border-white/5'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className={`w-8 h-8 flex items-center justify-center rounded-sm font-mono text-[14px] font-bold ${
                  hoveredVar === p.id ? 'bg-brand-yellow text-[#08090A]' : 'bg-white/5 text-white/40'
                }`}>
                  {p.id}
                </span>
                <div className="flex flex-col">
                  <span className="text-[14px] font-medium text-white">{p.label}</span>
                  <span className="text-[12px] text-[#8A8F98] font-[300]">{p.desc}</span>
                </div>
              </div>
              {hoveredVar === p.id && (
                <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow shadow-[0_0_10px_var(--color-brand-yellow)]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CoatingStructure = () => {
  const { t } = useTranslation();
  const layers = [
    { label: t('technical.coating.layers.top'), val: `> 1.0 ${t('common.mkm', 'µm')}`, desc: t('technical.coating.layers.top_desc') },
    { label: t('technical.coating.layers.passivation'), val: `0.2 ${t('common.mkm', 'µm')}`, desc: t('technical.coating.layers.passivation_desc') },
    { label: t('technical.coating.layers.zinc'), val: `12.0 ${t('common.mkm', 'µm')}`, desc: t('technical.coating.layers.zinc_desc') },
    { label: t('technical.coating.layers.base'), val: t('technical.coating.layers.base'), desc: t('technical.coating.layers.base_desc') }
  ];

  return (
    <div className="space-y-12 py-8">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1 space-y-4">
          {layers.map((layer, i) => (
            <div key={i} className="group relative overflow-hidden p-6 border border-white/5 bg-white/[0.01] rounded-sm hover:border-brand-yellow/20 transition-all">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">{layer.label}</span>
                <span className="text-white/60 font-mono text-[12px]">{layer.val}</span>
              </div>
              <p className="text-[13px] text-text-tertiary leading-relaxed">{layer.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="flex-1 p-8 bg-white/[0.02] border border-white/5 rounded-sm">
          <div className="flex items-start gap-4 mb-8">
            <ShieldCheck className="w-6 h-6 text-white/40 shrink-0" />
            <div>
              <h5 className="text-white font-medium mb-2">{t('technical.coating.standard_title')}</h5>
              <p className="text-[13px] text-text-tertiary leading-relaxed">
                {t('technical.coating.standard_desc')}
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest opacity-50">{t('technical.coating.finish_types')}</div>
            <div className="flex flex-wrap gap-3">
              {[t('technical.coating.finishes.glossy'), t('technical.coating.finishes.semi_gloss'), t('technical.coating.finishes.matte')].map((t, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-[11px] text-text-tertiary border border-white/10">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HeritageTimeline = () => {
  const { t } = useTranslation();
  const eras = [
    {
      year: "1930s",
      title: t('technical.heritage.invented_title'),
      desc: t('technical.heritage.invented_desc'),
      tag: t('technical.heritage.invented_tag')
    },
    {
      year: t('technical.heritage.today_label', 'Today'),
      title: <ParkerLogo className="h-[1.2em]" isInline={true} showBox={false} />,
      desc: t('technical.heritage.today_desc'),
      tag: t('technical.heritage.today_tag')
    }
  ];

  return (
    <div className="relative py-24">
      {/* Connecting Line */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "500%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-1/4 h-full bg-gradient-to-r from-transparent via-brand-yellow to-transparent opacity-60"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 relative z-10">
        {eras.map((era, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${i === 1 ? 'md:items-end md:text-right' : 'items-start text-left'} group`}
          >
            <div className="relative mb-8">
              <div className="text-[64px] md:text-[84px] font-[900] text-white/[0.03] leading-none mb-2 group-hover:text-white/[0.08] transition-colors font-mono">
                {era.year}
              </div>
              <div className={`absolute top-1/2 ${i === 0 ? 'left-0' : 'right-0'} -translate-y-1/2 w-4 h-4 bg-[#08090A] border-2 border-white/20 rounded-full z-20`}>
                <div className="absolute inset-0 bg-white/10 rounded-full animate-ping" />
              </div>
            </div>

            <div className="max-w-md space-y-4">
              <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] opacity-50">
                {era.tag}
              </div>
              <h4 className="text-[28px] font-[510] text-white tracking-tight leading-tight">
                {era.title}
              </h4>
              <p className="text-[15px] text-[#8A8F98] leading-relaxed font-[300] opacity-70 group-hover:opacity-100 transition-opacity">
                {era.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const ServiceScopeVisual = () => {
  const { t, i18n } = useTranslation();
  const items = [
    { 
      id: "01", 
      title: t('technical.service_scope.audit_title'), 
      desc: t('technical.service_scope.audit_desc'),
      icon: <Info className="w-5 h-5" />
    },
    { 
      id: "02", 
      title: t('technical.service_scope.bending_title'), 
      desc: t('technical.service_scope.bending_desc'),
      icon: <Thermometer className="w-5 h-5" />
    },
    { 
      id: "03", 
      title: t('technical.service_scope.on_site_title'), 
      desc: t('technical.service_scope.on_site_desc'),
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  return (
    <div className="relative py-20 px-4">
      {/* Central horizontal line (pipeline) */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 hidden md:block overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "600%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="w-1/5 h-full bg-gradient-to-r from-transparent via-brand-yellow to-transparent opacity-50"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative flex flex-col items-center md:items-start text-center md:text-left group"
          >
            {/* Step marker node */}
            <div className="relative mb-12">
              <div className="w-16 h-16 rounded-sm bg-[#08090A] border border-white/10 flex items-center justify-center text-brand-yellow relative z-20 group-hover:border-brand-yellow transition-colors duration-500">
                {item.icon}
                <div className="absolute -inset-2 bg-brand-yellow/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              {/* Vertical technical line */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1px] h-12 bg-white/10" />
              {/* Connecting dot on the main pipeline */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#08090A] border border-brand-yellow rounded-full z-30 hidden md:block">
                 <motion.div 
                   animate={{ scale: [1, 1.5, 1] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="absolute inset-0 bg-brand-yellow/40 rounded-full blur-[2px]" 
                 />
              </div>
            </div>

            <div className="space-y-4 max-w-[300px]">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-[12px] font-mono text-brand-yellow/40">{item.id}</span>
                <div className="h-[1px] w-8 bg-white/5" />
                <span className="text-[10px] font-mono text-[#8A8F98]/40 uppercase tracking-widest">{t('specs.stage_ready', 'Stage Ready')}</span>
              </div>
              
              <h4 className="text-[24px] font-[510] text-white tracking-tight leading-tight">
                {getLocalized(item.title, i18n.language)}
              </h4>
              <p className="text-[14px] text-[#8A8F98] leading-relaxed font-[300] opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                {getLocalized(item.desc, i18n.language)}
              </p>
            </div>

            {/* Background design elements */}
            <div className="absolute -bottom-10 right-0 text-[80px] font-[900] text-white/[0.02] pointer-events-none select-none font-mono leading-none group-hover:text-brand-yellow/[0.03] transition-colors">
              {item.id}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
