import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { 
  Wrench, 
  Settings, 
  Zap, 
  ArrowLeft, 
  CheckCircle2, 
  Phone,
  ShieldCheck,
  Clock,
  Truck,
  ArrowRight,
  Database,
  Award,
  Activity,
  Cpu,
  Layers,
  Play,
  ChevronDown,
  Thermometer,
  AlertTriangle,
  XCircle,
  Gauge,
  Package,
  Timer,
  Maximize,
  TrendingUp,
  Settings2,
  Target,
  History,
  Box,
  Flame,
  Waves,
  ClipboardCheck,
  BarChart3,
  Search,
  BarChart4,
  Briefcase,
  Monitor,
  Network,
  Check,
  Verified,
  HardDrive,
  Radio,
  Signal
} from "lucide-react";
import { ParkerLogo } from '../components/ParkerLogo';
import { RVDConfigurator } from "../components/RVDConfigurator";
import { 
  SeriesTable, 
  TemperaturePressureChart, 
  EO2InteractiveDiagram,
  CoatingStructure,
  ServiceScopeVisual,
  HeritageTimeline
} from "../components/TechnicalSpecs";
import { getLocalized } from "../lib/utils";

const DiagnosticsVersusVisual = () => {
  const { t, i18n } = useTranslation();
  
  const items = [
    { 
      label: t("service_detail.diagnostics.pressure"), 
      legacy: t("service_detail.diagnostics.legacy_system"), 
      parker: t("service_detail.diagnostics.parker_tech_label"),
      icon: <Timer className="w-5 h-5" />
    },
    { 
      label: t("service_detail.diagnostics.range"), 
      legacy: t("service_detail.diagnostics.range_legacy"), 
      parker: t("service_detail.diagnostics.range_parker"),
      icon: <Maximize className="w-5 h-5" />
    },
    { 
      label: t("service_detail.diagnostics.pressure_peaks"), 
      legacy: t("service_detail.diagnostics.peaks_legacy"), 
      parker: t("service_detail.diagnostics.peaks_parker"),
      icon: <TrendingUp className="w-5 h-5" />
    },
    { 
      label: t("service_detail.diagnostics.technology"), 
      legacy: t("service_detail.diagnostics.tech_legacy"), 
      parker: t("service_detail.diagnostics.tech_parker"),
      icon: <Settings2 className="w-5 h-5" />
    }
  ];

  return (
  <div className="mt-32 space-y-24">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-white/10 border-t border-white/10">
      {items.map((item, i) => (
        <div key={i} className="pt-16 pb-20 px-10 border-r border-b border-white/10 flex flex-col min-h-[400px] group hover:bg-white/[0.01] transition-all relative overflow-hidden">
          {/* Subtle background index */}
          <div className="absolute top-[-10%] right-[-5%] text-[120px] font-bold text-white/[0.02] select-none font-mono leading-none tracking-tighter group-hover:text-brand-yellow/[0.03] transition-colors">
            0{i + 1}
          </div>

          <div className="relative z-10 space-y-16 h-full flex flex-col">
            <div className="space-y-4">
              <div className="text-[10px] font-mono text-brand-yellow/60 uppercase tracking-[0.4em]">{item.label}</div>
              <div className="h-[1px] w-8 bg-brand-yellow/20" />
            </div>
            
            <div className="space-y-12 mt-auto">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{t("service_detail.diagnostics.legacy_system")}</span>
                </div>
                <div className="text-[15px] text-white/30 font-[300] tracking-tight leading-relaxed">{item.legacy}</div>
              </div>

              <div className="space-y-4 pt-8 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow/60" />
                  <span className="text-[10px] font-mono text-brand-yellow/60 uppercase tracking-widest">{t("service_detail.diagnostics.parker_tech_label")}</span>
                </div>
                
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full border border-brand-yellow/10 flex items-center justify-center text-brand-yellow/40 group-hover:text-brand-yellow transition-all duration-500 bg-white/[0.02]">
                    {item.icon}
                  </div>
                  <h3 className="text-[24px] md:text-[28px] font-[510] text-white tracking-tight leading-[1.1] group-hover:text-brand-yellow transition-colors duration-500">
                    {item.parker}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Quote - Minimalist Footer */}
    <div className="relative py-12 md:py-14 px-10 md:px-20 rounded-sm bg-[#0A0B0C] border border-white/5 overflow-hidden group">
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-yellow/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <p className="text-[18px] md:text-[22px] text-white/70 font-[300] leading-relaxed tracking-tight max-w-4xl text-center md:text-left">
          {t("service_detail.diagnostics.versus_quote")}
        </p>
      </div>
    </div>
  </div>
  );
};

const DiagnosticsAuditVisual = () => {
  const { t } = useTranslation();
  
  const items = [
    { 
      code: "P", 
      label: t("service_detail.diagnostics.pressure"), 
      val: "1000", 
      unit: "bar", 
      target: t("service_detail.diagnostics.peak_detection"), 
      insight: t("service_detail.diagnostics.insight_pressure") 
    },
    { 
      code: "T", 
      label: t("service_detail.diagnostics.temp"), 
      val: "125", 
      unit: "°C", 
      target: t("service_detail.diagnostics.thermal_mapping"), 
      insight: t("service_detail.diagnostics.insight_temp") 
    },
    { 
      code: "Q", 
      label: t("service_detail.diagnostics.flow"), 
      val: "750", 
      unit: "l/min", 
      target: t("service_detail.diagnostics.volumetric_efficiency"), 
      insight: t("service_detail.diagnostics.insight_flow") 
    },
    { 
      code: "N", 
      label: t("service_detail.diagnostics.speed"), 
      val: "10 000", 
      unit: "RPM", 
      target: t("service_detail.diagnostics.rotation_dynamics"), 
      insight: t("service_detail.diagnostics.insight_speed") 
    }
  ];

  return (
  <div className="mt-16 space-y-10">
    <div className="relative p-px rounded-sm bg-white/5 border border-white/5 overflow-hidden">
      <div className="bg-[#050505] p-8 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <div>
            <h3 className="text-[32px] font-[590] text-primary tracking-tight">{t("service_detail.diagnostics.audit_title")}</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
          {items.map((item, i) => (
            <div key={i} className="p-8 bg-[#050505] hover:bg-white/[0.02] transition-colors group">
              <div className="flex justify-between items-start mb-8">
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 font-mono text-[16px] text-brand-yellow">
                  {item.code}
                </div>
                <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest">0{i+1}</div>
              </div>
              
              <div className="mb-8">
                <div className="text-[11px] text-brand-yellow uppercase tracking-widest mb-2">{item.label}</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-[32px] font-[590] text-primary">{item.val}</span>
                  <span className="text-[12px] text-text-tertiary font-mono opacity-50">{item.unit}</span>
                </div>
              </div>

              <div className="space-y-4 pt-8 border-t border-white/5">
                <div>
                  <div className="text-[9px] font-mono text-white/20 uppercase tracking-[0.1em] mb-1">{t("service_detail.diagnostics.audit_goal")}</div>
                  <div className="text-[12px] text-primary/70 font-[300]">{item.target}</div>
                </div>
                <div className="p-3 bg-white/[0.02] border-l-2 border-brand-yellow/30">
                  <div className="text-[10px] text-brand-yellow/60 font-medium leading-snug">{item.insight}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-sm bg-brand-yellow/[0.02] border border-brand-yellow/10 flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 rounded-sm">
            <Radio className="w-3 h-3 text-brand-yellow" />
            <span className="text-[9px] font-mono text-brand-yellow uppercase tracking-widest">{t("service_detail.diagnostics.correlation_matrix")}</span>
          </div>
          <p className="text-[16px] text-text-tertiary/60 leading-relaxed font-[300]">
            {t("service_detail.diagnostics.correlation_desc")}
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

const DiagnosticsPlugWorkVisual = () => {
  const { t, i18n } = useTranslation();
  
  return (
  <div className="relative mt-12 p-8 md:p-12 bg-white/[0.02] border border-white/10 rounded-sm overflow-hidden">
    <div className="absolute top-0 right-0 p-12 opacity-5">
      <div className="text-[120px] font-mono font-bold">1989</div>
    </div>
    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/20 rounded-sm text-[10px] font-mono text-brand-yellow uppercase tracking-widest mb-6">
          {t("service_detail.diagnostics.founded_1989")}
        </div>
        <h3 className="text-[32px] font-medium text-white mb-6">{t("service_detail.diagnostics.plug_work_title")}</h3>
        <p className="text-white/60 leading-relaxed mb-8">
          {t("service_detail.diagnostics.plug_work_desc")}
        </p>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-brand-yellow/10 flex items-center justify-center shrink-0">
              <Check className="w-5 h-5 text-brand-yellow" />
            </div>
            <div>
              <div className="text-white font-medium mb-1">{t("service_detail.diagnostics.readiness_title")}</div>
              <div className="text-sm text-white/40">{t("service_detail.diagnostics.readiness_desc")}</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-brand-yellow/10 flex items-center justify-center shrink-0">
              <Verified className="w-5 h-5 text-brand-yellow" />
            </div>
            <div>
              <div className="text-white font-medium mb-1">{t("service_detail.diagnostics.error_protection_title")}</div>
              <div className="text-sm text-white/40">{t("service_detail.diagnostics.error_protection_desc")}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/40 rounded-sm p-6 border border-white/5 font-mono text-[11px] text-brand-yellow/80 space-y-2">
        <div className="flex justify-between border-b border-white/5 pb-2">
          <span>{">"} {t("service_detail.diagnostics.sensor_detected")}:</span>
          <span className="text-white">PRP-400-CAN</span>
        </div>
        <div className="flex justify-between border-b border-white/5 pb-2">
          <span>{">"} {t("service_detail.diagnostics.range_label")}:</span>
          <span className="text-white">0-400 {t("service_detail.diagnostics.bar_unit")}</span>
        </div>
        <div className="flex justify-between border-b border-white/5 pb-2">
          <span>{">"} {t("service_detail.diagnostics.sampling_label")}:</span>
          <span className="text-white">1000 {t("service_detail.diagnostics.meas_sec_unit")}</span>
        </div>
        <div className="flex justify-between border-b border-white/5 pb-2">
          <span>{">"} {t("service_detail.diagnostics.calib_data_label")}:</span>
          <span className="text-white">{t("service_detail.diagnostics.load_success")}</span>
        </div>
        <div className="pt-4 text-white/40 animate-pulse">{t('service_detail.diagnostics.system_ready_msg')}</div>
      </div>
    </div>
  </div>
  );
};

const DiagnosticsProcessVisual = () => {
  const { t } = useTranslation();
  
  const items = [
    {
      step: "01",
      title: t("service_detail.diagnostics.process_title_01"),
      subtitle: t("service_detail.diagnostics.process_subtitle_01"),
      desc: t("service_detail.diagnostics.process_desc_01"),
      coords: t("service_detail.diagnostics.process_coords_01"),
      status: t("service_detail.diagnostics.process_status_01")
    },
    {
      step: "02",
      title: t("service_detail.diagnostics.process_title_02"),
      subtitle: t("service_detail.diagnostics.process_subtitle_02"),
      desc: t("service_detail.diagnostics.process_desc_02"),
      coords: t("service_detail.diagnostics.process_coords_02"),
      status: t("service_detail.diagnostics.process_status_02")
    },
    {
      step: "03",
      title: t("service_detail.diagnostics.process_title_03"),
      subtitle: t("service_detail.diagnostics.process_subtitle_03"),
      desc: t("service_detail.diagnostics.process_desc_03"),
      coords: t("service_detail.diagnostics.process_coords_03"),
      status: t("service_detail.diagnostics.process_status_03")
    },
    {
      step: "04",
      title: t("service_detail.diagnostics.process_title_04"),
      subtitle: t("service_detail.diagnostics.process_subtitle_04"),
      desc: t("service_detail.diagnostics.process_desc_04"),
      coords: t("service_detail.diagnostics.process_coords_04"),
      status: t("service_detail.diagnostics.process_status_04")
    }
  ];

  return (
  <div className="mt-24 space-y-24">
    {/* Modern Staggered Timeline */}
    <div className="relative">
      {/* Background Vertical Line with Animated Wave */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden lg:block overflow-hidden">
        <motion.div 
          animate={{ 
            top: ["-100%", "100%"] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-brand-yellow/30 to-transparent"
        />
      </div>
      
      <div className="space-y-12 lg:space-y-0">
        {items.map((item, i) => (
          <div key={i} className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            {/* Step Content */}
            <div className="flex-1 w-full lg:w-auto">
              <div className={`p-10 md:p-14 bg-[#050505] border border-white/5 rounded-sm relative group hover:border-brand-yellow/20 transition-all ${i % 2 === 1 ? 'lg:text-right' : ''}`}>
                <div className={`absolute top-0 ${i % 2 === 1 ? 'right-0' : 'left-0'} w-1 h-0 bg-brand-yellow group-hover:h-full transition-all duration-700`} />
                
                <div className={`flex items-center gap-4 mb-8 ${i % 2 === 1 ? 'lg:justify-end' : ''}`}>
                  <span className="text-[10px] font-mono text-brand-yellow uppercase tracking-[0.3em]">{item.title}</span>
                  <div className="h-px w-8 bg-white/10" />
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">{item.status}</span>
                </div>
                
                <h4 className="text-[32px] md:text-[44px] font-[590] text-primary leading-tight tracking-tighter mb-6 uppercase">
                  {item.subtitle}
                </h4>
                
                <p className={`text-[16px] text-text-secondary leading-relaxed font-[300] mb-10 opacity-70 max-w-md ${i % 2 === 1 ? 'lg:ml-auto' : ''}`}>
                  {item.desc}
                </p>
                
                <div className={`pt-8 border-t border-white/5 flex items-center gap-4 ${i % 2 === 1 ? 'lg:justify-end' : ''}`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow/40" />
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">{item.coords}</span>
                </div>

                {/* Mobile Step Number */}
                <div className="absolute top-6 right-6 text-[14px] font-mono text-white/10 lg:hidden">{item.step}</div>
              </div>
            </div>

            {/* Center Marker (Desktop) */}
            <div className="hidden lg:flex items-center justify-center relative z-20">
              <div className="w-12 h-12 bg-black border border-white/10 rounded-sm flex items-center justify-center group-hover:border-brand-yellow transition-colors">
                <div className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse" />
              </div>
              <div className={`absolute top-1/2 -translate-y-1/2 font-mono text-[64px] text-white/[0.03] pointer-events-none select-none ${i % 2 === 1 ? '-right-32' : '-left-32'}`}>
                {item.step}
              </div>
            </div>

            <div className="flex-1 hidden lg:block" />
          </div>
        ))}
      </div>
    </div>

    {/* Precision Results Matrix */}
    <div className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 md:mb-40">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-2 py-0.5 bg-brand-yellow/[0.03] border border-brand-yellow/10 rounded-sm">
              <span className="text-[9px] font-mono text-brand-yellow uppercase tracking-[0.4em]">{t("service_detail.diagnostics.results_matrix_badge")}</span>
            </div>
            <h2 className="text-[42px] md:text-[64px] font-[590] tracking-[-0.04em] leading-[1.05] text-primary uppercase max-w-2xl">
              {t("service_detail.diagnostics.results_title")}
            </h2>
          </div>
          <div className="space-y-4 max-w-md">
            <p className="text-[17px] text-text-secondary leading-relaxed font-[300] opacity-80">
              {t("service_detail.diagnostics.results_subtitle")}
            </p>
            <p className="text-[15px] text-text-secondary leading-relaxed font-[300] opacity-50">
              {t("service_detail.diagnostics.results_desc")}
            </p>
          </div>
        </div>

        <div className="relative min-h-[400px] md:min-h-[520px] flex items-center justify-center">
          {/* The Precision Crosshair */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
            
            {/* Center Focus Point */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 hidden md:flex items-center justify-center">
              <div className="w-1 h-1 bg-brand-yellow rounded-full shadow-[0_0_10px_rgba(255,184,28,0.5)]" />
              <div className="absolute inset-0 border border-brand-yellow/20 rounded-full animate-ping" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-0 w-full relative z-10">
            {/* Top Left */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:p-12 flex flex-col md:items-end md:text-right group cursor-default"
            >
              <div className="text-[9px] font-mono text-white/20 mb-3 tracking-[0.3em] uppercase group-hover:text-brand-yellow/40 transition-colors">[{t("service_detail.diagnostics.result_01_label")}]</div>
              <h4 className="text-[20px] md:text-[26px] font-[590] text-primary/80 group-hover:text-primary transition-all duration-500 uppercase leading-[0.95] tracking-tighter">
                {t("service_detail.diagnostics.result_01_title")}
              </h4>
              <div className="h-px w-0 group-hover:w-20 bg-brand-yellow/30 mt-5 transition-all duration-700 hidden md:block" />
            </motion.div>

            {/* Top Right */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:p-12 flex flex-col group cursor-default"
            >
              <div className="text-[9px] font-mono text-white/20 mb-3 tracking-[0.3em] uppercase group-hover:text-brand-yellow/40 transition-colors">[{t("service_detail.diagnostics.result_02_label")}]</div>
              <h4 className="text-[20px] md:text-[26px] font-[590] text-primary/80 group-hover:text-primary transition-all duration-500 uppercase leading-[0.95] tracking-tighter">
                {t("service_detail.diagnostics.result_02_title")}
              </h4>
              <div className="h-px w-0 group-hover:w-20 bg-brand-yellow/30 mt-5 transition-all duration-700 hidden md:block" />
            </motion.div>

            {/* Bottom Left */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:p-12 flex flex-col md:items-end md:text-right group cursor-default"
            >
              <div className="h-px w-0 group-hover:w-20 bg-brand-yellow/30 mb-5 transition-all duration-700 hidden md:block" />
              <div className="text-[9px] font-mono text-white/20 mb-3 tracking-[0.3em] uppercase group-hover:text-brand-yellow/40 transition-colors">[{t("service_detail.diagnostics.result_03_label")}]</div>
              <h4 className="text-[20px] md:text-[26px] font-[590] text-primary/80 group-hover:text-primary transition-all duration-500 uppercase leading-[0.95] tracking-tighter">
                {t("service_detail.diagnostics.result_03_title")}
              </h4>
            </motion.div>

            {/* Bottom Right */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:p-12 flex flex-col group cursor-default"
            >
              <div className="h-px w-0 group-hover:w-20 bg-brand-yellow/30 mb-5 transition-all duration-700 hidden md:block" />
              <div className="text-[9px] font-mono text-white/20 mb-3 tracking-[0.3em] uppercase group-hover:text-brand-yellow/40 transition-colors">[{t("service_detail.diagnostics.result_04_label")}]</div>
              <h4 className="text-[20px] md:text-[26px] font-[590] text-primary/80 group-hover:text-primary transition-all duration-500 uppercase leading-[0.95] tracking-tighter">
                {t("service_detail.diagnostics.result_04_title")}
              </h4>
            </motion.div>
          </div>

          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10 hidden md:block" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 hidden md:block" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10 hidden md:block" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10 hidden md:block" />
        </div>
      </div>
    </div>
  </div>
  );
};

const DiagnosticsPainScenarios = () => {
  const { t } = useTranslation();
  
  const items = [
    {
      title: t("service_detail.diagnostics.pain_01_title"),
      desc: t("service_detail.diagnostics.pain_01_desc"),
      label: t("service_detail.diagnostics.pain_01_label"),
      icon: <Waves className="w-5 h-5" />,
      code: t("service_detail.diagnostics.pain_01_code")
    },
    {
      title: t("service_detail.diagnostics.pain_02_title"),
      desc: t("service_detail.diagnostics.pain_02_desc"),
      label: t("service_detail.diagnostics.pain_02_label"),
      icon: <Flame className="w-5 h-5" />,
      code: t("service_detail.diagnostics.pain_02_code")
    },
    {
      title: t("service_detail.diagnostics.pain_03_title"),
      desc: t("service_detail.diagnostics.pain_03_desc"),
      label: t("service_detail.diagnostics.pain_03_label"),
      icon: <Search className="w-5 h-5" />,
      code: t("service_detail.diagnostics.pain_03_code")
    },
    {
      title: t("service_detail.diagnostics.pain_04_title"),
      desc: t("service_detail.diagnostics.pain_04_desc"),
      label: t("service_detail.diagnostics.pain_04_label"),
      icon: <AlertTriangle className="w-5 h-5" />,
      code: t("service_detail.diagnostics.pain_04_code")
    }
  ];

  return (
  <div className="mt-24 space-y-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2">
      {items.map((item, i) => (
        <div key={i} className="p-10 md:p-16 bg-[#050505] hover:bg-white/[0.02] transition-all group relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-brand-yellow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="flex justify-between items-start mb-12">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center border border-white/10 text-brand-yellow group-hover:border-brand-yellow/40 transition-colors">
                {item.icon}
              </div>
              <div className="text-[10px] font-mono text-brand-yellow uppercase tracking-[0.2em]">{item.label}</div>
            </div>
            <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{item.code}</div>
          </div>

          <h4 className="text-[28px] md:text-[32px] font-[590] text-primary leading-[1.1] tracking-tighter mb-8">
            {item.title}
          </h4>
          
          <p className="text-[15px] text-text-secondary leading-relaxed font-[400] opacity-80 max-w-sm">
            {item.desc}
          </p>

          <div className="mt-12 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow/40 animate-pulse" />
            <span className="text-[9px] font-mono text-white/15 uppercase tracking-wider">{t("service_detail.diagnostics.scenarios_title")}</span>
          </div>
        </div>
      ))}
    </div>
    
    {/* Bottom Status Bar */}
    <div className="p-6 bg-[#080808] border-t border-white/5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Signal className="w-3 h-3 text-brand-yellow" />
        <span className="text-[9px] font-mono text-white/40 uppercase tracking-[0.3em]">{t("service_detail.diagnostics.pain_status_bar_signal")}</span>
      </div>
      <div className="text-[9px] font-mono text-white/10 uppercase tracking-[0.3em] hidden sm:block">
        {t("service_detail.diagnostics.pain_status_bar_complex")}
      </div>
    </div>
  </div>
  );
};

const DiagnosticsEconomics = () => {
  const { t } = useTranslation();
  
  const leftItems = [
    { label: t("service_detail.diagnostics.economics_inv_label_1"), tag: t("service_detail.diagnostics.economics_inv_tag_1") },
    { label: t("service_detail.diagnostics.economics_inv_label_2"), tag: t("service_detail.diagnostics.economics_inv_tag_2") },
    { label: <>{t("service_detail.diagnostics.economics_inv_label_3")} <ParkerLogo className="h-[0.9em]" isInline={true} showBox={false} /></>, tag: t("service_detail.diagnostics.economics_inv_tag_3") },
    { label: t("service_detail.diagnostics.economics_inv_label_4"), tag: t("service_detail.diagnostics.economics_inv_tag_4") },
    { label: t("service_detail.diagnostics.economics_inv_label_5"), tag: t("service_detail.diagnostics.economics_inv_tag_5") },
  ];

  const rightItems = [
    { label: t("service_detail.diagnostics.economics_risk_label_1"), tag: t("service_detail.diagnostics.economics_risk_tag_1") },
    { label: t("service_detail.diagnostics.economics_risk_label_2"), tag: t("service_detail.diagnostics.economics_risk_tag_2") },
    { label: t("service_detail.diagnostics.economics_risk_label_3"), tag: t("service_detail.diagnostics.economics_risk_tag_3") },
    { label: t("service_detail.diagnostics.economics_risk_label_4"), tag: t("service_detail.diagnostics.economics_risk_tag_4") },
    { label: t("service_detail.diagnostics.economics_risk_label_5"), tag: t("service_detail.diagnostics.economics_risk_tag_5") },
  ];

  return (
    <div className="relative py-32 md:py-56 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-yellow/[0.02] rounded-full blur-[160px] pointer-events-none" />

      {/* Central Axis */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 md:gap-48 items-start">
          
          {/* Left Side: Investment */}
          <div className="space-y-24 md:space-y-40 md:text-right relative">
            <div className="space-y-8 mb-16 md:mb-32">
              <div className="flex md:justify-end items-center gap-4">
                <div className="inline-flex items-center gap-3 px-2 py-0.5 bg-brand-yellow/[0.03] border border-brand-yellow/10 rounded-sm">
                  <span className="text-[9px] font-mono text-brand-yellow uppercase tracking-[0.4em]">{t("service_detail.diagnostics.economics_inv_badge")}</span>
                </div>
                <div className="h-px w-8 bg-brand-yellow/20 hidden md:block" />
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">{t("service_detail.diagnostics.economics_inv_tagline")}</span>
              </div>
              <h2 className="text-[42px] md:text-[64px] font-[590] tracking-[-0.04em] leading-[1.05] text-primary uppercase">
                {t("service_detail.diagnostics.economics_inv_title_1")} <br />
                <span className="text-brand-yellow">{t("service_detail.diagnostics.economics_inv_title_2")}</span>
              </h2>
            </div>

            <div className="space-y-16 md:space-y-20">
              {leftItems.map((item, idx) => (
                <motion.div 
                   key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="text-[10px] font-mono text-brand-yellow/40 mb-3 tracking-[0.2em] uppercase">{item.tag}</div>
                  <div className="text-[18px] md:text-[22px] text-primary/80 font-[300] leading-tight group-hover:text-primary transition-all duration-500 max-w-sm ml-auto">
                    {item.label}
                  </div>
                  {/* Connector line to axis */}
                  <div className="absolute -right-24 top-1/2 w-16 h-px bg-white/5 group-hover:bg-brand-yellow/40 transition-colors duration-700 hidden md:block" />
                </motion.div>
              ))}
            </div>

            <div className="pt-24 border-t border-white/5 md:inline-block">
              <div className="flex items-center gap-4 md:justify-end">
                <div className="w-2 h-2 rounded-full bg-brand-yellow/60" />
                <span className="text-[11px] font-mono text-brand-yellow tracking-[0.5em] uppercase">{t("service_detail.diagnostics.economics_inv_footer_main")}</span>
                <div className="flex-1 h-px bg-white/5 mx-4 hidden md:block w-12" />
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">{t("service_detail.diagnostics.economics_inv_footer_status")}</span>
              </div>
            </div>
          </div>

          {/* Right Side: Risk */}
          <div className="space-y-24 md:space-y-40 relative md:pt-48">
            <div className="space-y-8 mb-16 md:mb-32">
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-mono text-white/40 uppercase tracking-[0.4em]">{t("service_detail.diagnostics.economics_risk_badge")}</span>
                <div className="h-px w-8 bg-white/10 hidden md:block" />
                <span className="text-[9px] font-mono text-white/10 uppercase tracking-[0.4em]">{t("service_detail.diagnostics.economics_risk_tagline")}</span>
              </div>
              <h2 className="text-[42px] md:text-[64px] font-[590] tracking-[-0.04em] leading-[1.05] text-primary/20 uppercase">
                {t("service_detail.diagnostics.economics_risk_title_1")} <br />
                <span className="text-white/5">{t("service_detail.diagnostics.economics_risk_title_2")}</span>
              </h2>
            </div>

            <div className="space-y-16 md:space-y-20">
              {rightItems.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="text-[10px] font-mono text-white/10 mb-3 tracking-[0.2em] uppercase">{item.tag}</div>
                  <div className="text-[18px] md:text-[22px] text-white/20 font-[300] leading-tight group-hover:text-white/50 transition-all duration-500 max-w-sm">
                    {item.label}
                  </div>
                  {/* Connector line to axis */}
                  <div className="absolute -left-24 top-1/2 w-16 h-px bg-white/5 group-hover:bg-white/20 transition-colors duration-700 hidden md:block" />
                </motion.div>
              ))}
            </div>

            <div className="pt-24 border-t border-white/5 inline-block">
              <div className="flex items-center gap-4">
                <span className="text-[11px] font-mono text-white/20 tracking-[0.5em] uppercase group-hover:text-white/40 transition-colors">{t("service_detail.diagnostics.economics_risk_footer")}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const DiagnosticsReportSample = () => {
  const { t } = useTranslation();
  
  return (
  <div className="mt-24">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
      {/* Content Side */}
      <div className="lg:col-span-5">
        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-brand-yellow uppercase tracking-[0.4em]">{t("service_detail.diagnostics.report_badge")}</span>
            <div className="h-px w-12 bg-brand-yellow/20" />
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">{t("service_detail.diagnostics.report_fig")}</span>
          </div>

          <h3 className="text-[42px] md:text-[64px] font-[590] text-primary leading-[1.05] tracking-[-0.04em] uppercase max-w-md">
            {t("service_detail.diagnostics.report_title_1")} <br /> 
            <span className="text-white/20">{t("service_detail.diagnostics.report_title_2")}</span>
          </h3>
          
          <p className="text-[17px] text-text-secondary leading-relaxed font-[300] opacity-60 max-w-sm">
            {t("service_detail.diagnostics.report_desc")}
          </p>

          <div className="pt-12 space-y-5">
            <div className="flex items-center gap-4 group">
              <div className="w-1 h-1 rounded-full bg-green-500" />
              <div className="text-[11px] font-mono text-white/40 uppercase tracking-[0.3em]">{t("service_detail.diagnostics.report_zone_green")}</div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
              <div className="text-[11px] font-mono text-white/40 uppercase tracking-[0.3em]">{t("service_detail.diagnostics.report_zone_red")}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Side (Minimalist Report) */}
      <div className="lg:col-span-7">
        <div className="space-y-16">
          {/* Report Header */}
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-6 border-b border-white/5 pb-12">
            <div className="space-y-2">
              <div className="text-[10px] font-mono text-brand-yellow uppercase tracking-[0.4em]">{t("service_detail.diagnostics.report_header_title")}</div>
              <div className="text-[28px] md:text-[36px] text-primary font-[590] tracking-[-0.04em] uppercase leading-none">ID: #4012-X</div>
            </div>
            <div className="flex gap-12 font-mono text-[9px] text-white/20 uppercase tracking-[0.3em]">
              <div>{t("service_detail.diagnostics.report_header_status_label")}: <span className="text-white/60">{t("service_detail.diagnostics.report_header_status_val")}</span></div>
              <div>{t("service_detail.diagnostics.report_header_date_label")}: <span className="text-white/60">2024.07.19</span></div>
            </div>
          </div>

          {/* Report Items List - No Cards, just rows */}
          <div className="space-y-20">
            {[
              {
                label: t("service_detail.diagnostics.report_item_01_label"),
                status: t("service_detail.diagnostics.report_item_01_status"),
                val: 88,
                color: "bg-red-500",
                textColor: "text-red-500",
                desc: t("service_detail.diagnostics.report_item_01_desc"),
                id: t("service_detail.diagnostics.report_item_01_id"),
                indexLabel: t("service_detail.diagnostics.report_item_01_index_label")
              },
              {
                label: t("service_detail.diagnostics.report_item_02_label"),
                status: t("service_detail.diagnostics.report_item_02_status"),
                val: 18,
                color: "bg-green-500",
                textColor: "text-green-500",
                desc: t("service_detail.diagnostics.report_item_02_desc"),
                id: t("service_detail.diagnostics.report_item_02_id"),
                indexLabel: t("service_detail.diagnostics.report_item_02_index_label")
              }
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
                  <div className="space-y-3">
                    <div className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">{t('service_detail.diagnostics.component_id_label')}: {item.id}</div>
                    <h4 className="text-[24px] md:text-[30px] font-[590] text-primary uppercase leading-[0.95] tracking-[-0.04em]">{item.label}</h4>
                  </div>
                  <div className={`text-[11px] font-mono ${item.textColor} uppercase tracking-[0.4em] font-medium`}>
                    {item.status}
                  </div>
                </div>
                
                <div className="space-y-5">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">{item.indexLabel}</span>
                    <span className={`text-[18px] font-mono ${item.textColor}`}>{item.val}%</span>
                  </div>
                  
                  {/* Progress Line */}
                  <div className="h-[1px] w-full bg-white/5 relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.val}%` }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                      className={`absolute top-0 left-0 h-full ${item.color}`} 
                    />
                  </div>
                  
                  <div className="flex items-start gap-3 pt-4">
                    <div className={`w-1 h-1 mt-1.5 shrink-0 ${item.color}`} />
                    <p className="text-[14px] text-text-secondary/60 font-[300] leading-relaxed max-w-lg">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

const DiagnosticsKitsVisual = () => {
  const { t } = useTranslation();
  
  const items = [
    { label: t("service_detail.diagnostics.kits_item_01_label"), desc: t("service_detail.diagnostics.kits_item_01_desc"), spec: t("service_detail.diagnostics.kits_item_01_spec"), icon: <Briefcase className="w-5 h-5" /> },
    { label: t("service_detail.diagnostics.kits_item_02_label"), desc: t("service_detail.diagnostics.kits_item_02_desc"), spec: t("service_detail.diagnostics.kits_item_02_spec"), icon: <HardDrive className="w-5 h-5" /> },
    { label: t("service_detail.diagnostics.kits_item_03_label"), desc: t("service_detail.diagnostics.kits_item_03_desc"), spec: t("service_detail.diagnostics.kits_item_03_spec"), icon: <Monitor className="w-5 h-5" /> },
    { label: t("service_detail.diagnostics.kits_item_04_label"), desc: t("service_detail.diagnostics.kits_item_04_desc"), spec: t("service_detail.diagnostics.kits_item_04_spec"), icon: <Network className="w-5 h-5" /> }
  ];

  return (
  <div className="mt-24 space-y-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-12">
      {/* Technical Spec Side */}
      <div className="lg:col-span-7 p-10 md:p-16 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-yellow/20 opacity-30" />
        
        <div className="relative z-10">
          <div className="text-[10px] font-mono text-text-tertiary/40 uppercase tracking-[0.3em] mb-12">
            {t("service_detail.diagnostics.kits_fig")} — {t("service_detail.diagnostics.kits_header_title")}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item, i) => (
              <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-sm group hover:bg-white/[0.04] transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-brand-yellow">{item.icon}</div>
                  <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest">{item.spec}</div>
                </div>
                <div className="text-[16px] text-primary font-medium mb-1">{item.label}</div>
                <div className="text-[12px] text-text-tertiary/60 font-[300]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Editorial Content Side */}
      <div className="lg:col-span-5 p-10 md:p-16 bg-[#080808] border-l border-white/5 flex flex-col justify-center">
        <div className="space-y-8">
          <h3 className="text-[42px] md:text-[56px] font-[590] text-primary leading-[0.95] tracking-tighter uppercase">
            {t("service_detail.diagnostics.kits_title_1")} <br /> 
            <span className="text-white/20">{t("service_detail.diagnostics.kits_title_2")}</span>
          </h3>
          
          <p className="text-[17px] text-text-secondary leading-relaxed font-[300] opacity-80">
            {t("service_detail.diagnostics.kits_editorial_desc")}
          </p>

          <div className="pt-10 border-t border-white/5">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-sm bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center">
                <Package className="w-8 h-8 text-brand-yellow" />
              </div>
              <div>
                <div className="text-[18px] text-primary font-medium tracking-tight">SCKIT-155-2-00</div>
                <div className="text-[11px] text-brand-yellow font-mono uppercase tracking-[0.2em] mt-1">{t("service_detail.diagnostics.kits_config_label")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

const DiagnosticsInstrumentsVisual = () => {
  const { t } = useTranslation();
  
  return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-sm mt-12 overflow-hidden">
    {/* ServiceJunior */}
    <div className="group relative p-10 bg-[#050505] flex flex-col h-full transition-all duration-500 hover:bg-white/[0.02]">
      <div className="text-[10px] font-mono text-text-tertiary/40 uppercase tracking-[0.3em] mb-12">
        {t("service_detail.diagnostics.instruments_01_badge")}
      </div>

      <div className="flex-1">
        <h4 className="text-[28px] font-[590] text-primary mb-6 tracking-tight">ServiceJunior</h4>
        <p className="text-[15px] text-text-secondary leading-relaxed font-normal mb-10 opacity-70">
          {t("service_detail.diagnostics.instruments_01_desc")}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-sm">
            <div className="text-[10px] font-mono text-text-tertiary/40 uppercase tracking-widest mb-2">{t("service_detail.diagnostics.sampling_label")}</div>
            <div className="text-[24px] text-primary font-[590]">100 <span className="text-[12px] text-text-tertiary font-mono uppercase tracking-normal">{t("service_detail.diagnostics.meas_sec_unit")}</span></div>
          </div>
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-sm">
            <div className="text-[10px] font-mono text-text-tertiary/40 uppercase tracking-widest mb-2">{t("service_detail.diagnostics.pressure_range_label")}</div>
            <div className="text-[24px] text-primary font-[590]">1000 <span className="text-[12px] text-text-tertiary font-mono uppercase tracking-normal">{t("service_detail.diagnostics.bar_unit")}</span></div>
          </div>
        </div>

        <div className="space-y-3">
          {[
            t("service_detail.diagnostics.instruments_01_feature_1"),
            t("service_detail.diagnostics.instruments_01_feature_2"),
            t("service_detail.diagnostics.instruments_01_feature_3")
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-[12px] text-text-tertiary font-normal">
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-0 right-0 p-10 opacity-[0.02] text-white pointer-events-none group-hover:opacity-[0.04] transition-opacity">
        <Gauge className="w-32 h-32" />
      </div>
    </div>

    {/* Serviceman Plus */}
    <div className="group relative p-10 bg-[#050505] flex flex-col h-full transition-all duration-500 hover:bg-white/[0.02]">
      <div className="text-[10px] font-mono text-brand-yellow uppercase tracking-[0.3em] mb-12">
        {t("service_detail.diagnostics.instruments_02_badge")}
      </div>

      <div className="flex-1">
        <h4 className="text-[28px] font-[590] text-primary mb-6 tracking-tight">Serviceman Plus</h4>
        <p className="text-[15px] text-text-secondary leading-relaxed font-normal mb-10 opacity-70">
          {t("service_detail.diagnostics.instruments_02_desc")}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="p-6 bg-brand-yellow/[0.03] border border-brand-yellow/10 rounded-sm">
            <div className="text-[10px] font-mono text-brand-yellow/40 uppercase tracking-widest mb-2">{t("service_detail.diagnostics.ultra_sampling_label")}</div>
            <div className="text-[24px] text-brand-yellow font-[590]">1000</div>
            <div className="text-[10px] text-brand-yellow/30 font-mono uppercase tracking-widest">{t("service_detail.diagnostics.signals_sec_label")}</div>
          </div>
          <div className="p-6 bg-brand-yellow/[0.03] border border-brand-yellow/10 rounded-sm">
            <div className="text-[10px] font-mono text-brand-yellow/40 uppercase tracking-widest mb-2">{t("service_detail.diagnostics.instruments_02_interface_label")}</div>
            <div className="text-[24px] text-brand-yellow font-[590]">CAN Bus</div>
            <div className="text-[10px] text-brand-yellow/30 font-mono uppercase tracking-widest">{t("service_detail.diagnostics.instruments_02_interface_desc")}</div>
          </div>
        </div>

        <div className="space-y-4 mb-10">
          {[
            t("service_detail.diagnostics.instruments_02_feature_1"),
            t("service_detail.diagnostics.instruments_02_feature_2"),
            t("service_detail.diagnostics.instruments_02_feature_3")
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-[12px] text-text-secondary">
              <CheckCircle2 className="w-4 h-4 text-brand-yellow" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-sm bg-white/[0.02] border border-white/5 mt-auto">
          <div className="text-[10px] font-mono text-text-tertiary/30 uppercase tracking-widest mb-4">{t("service_detail.diagnostics.system_status_label")}</div>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-text-tertiary">{t("service_detail.diagnostics.protection_ip_label")}</span>
              <span className="text-brand-yellow font-mono uppercase">{t("service_detail.diagnostics.protection_ip_val")}</span>
            </div>
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-text-tertiary">{t("service_detail.diagnostics.data_flow_label")}</span>
              <span className="text-brand-yellow font-mono uppercase">{t("service_detail.diagnostics.data_flow_val")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 p-10 opacity-[0.03] text-brand-yellow pointer-events-none group-hover:opacity-[0.05] transition-opacity">
        <BarChart4 className="w-32 h-32" />
      </div>
    </div>
  </div>
  );
};



const DiagnosticsAnalysisVisual = () => {
  const { t } = useTranslation();
  
  return (
  <div className="mt-32 relative px-4 md:px-0">
    {/* Background Decorative Element */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-square bg-brand-yellow/[0.015] blur-[160px] rounded-full pointer-events-none" />
    
    <div className="relative max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        {/* Editorial Content Side */}
        <div className="lg:col-span-5 relative z-10">
          <h3 className="text-[40px] md:text-[64px] font-[590] text-primary leading-[1.05] tracking-tighter mb-12 uppercase">
            {t("service_detail.diagnostics.analysis_title_1")} <br /> 
            <span className="text-white/10">{t("service_detail.diagnostics.analysis_title_2")}</span>
          </h3>
          
          <p className="text-[18px] text-text-secondary leading-relaxed font-[300] mb-16 max-w-md opacity-80">
            {t("service_detail.diagnostics.analysis_desc")}
          </p>

          <div className="flex gap-16">
            <div className="group">
              <div className="text-[9px] font-mono text-brand-yellow uppercase tracking-[0.2em] mb-4">{t("service_detail.diagnostics.sampling_label")}</div>
              <div className="flex items-baseline gap-2">
                <span className="text-[32px] text-primary font-medium tracking-tight">1</span>
                <span className="text-[12px] text-text-tertiary font-mono uppercase tracking-widest opacity-40">{t("service_detail.diagnostics.ms_peaks_label")}</span>
              </div>
            </div>
            <div className="group">
              <div className="text-[9px] font-mono text-brand-yellow uppercase tracking-[0.2em] mb-4">{t("service_detail.diagnostics.buffer_label")}</div>
              <div className="flex items-baseline gap-2">
                <span className="text-[32px] text-primary font-medium tracking-tight">15k</span>
                <span className="text-[12px] text-text-tertiary font-mono uppercase tracking-widest opacity-40">{t("service_detail.diagnostics.records_unit")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* High-Tech Visualization Side */}
        <div className="lg:col-span-7 relative">
          <div className="relative aspect-[16/10] w-full flex items-end justify-between gap-1.5 px-4 md:px-0">
            {/* Grid lines behind graph */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-px w-full bg-white" />
              ))}
            </div>
            
            {/* Bars */}
            {[65, 45, 80, 55, 95, 40, 70, 85, 30, 60, 45, 100, 50, 75, 40, 65, 90, 35, 60, 45, 80, 55].map((h, i) => (
              <motion.div 
                key={i} 
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                animate={{ 
                  height: [`${h}%`, `${Math.max(15, h - 10)}%`, `${Math.min(100, h + 8)}%`, `${h}%`] 
                }}
                transition={{ 
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`flex-1 rounded-t-[1px] transition-colors duration-700 ${h > 90 ? 'bg-brand-yellow shadow-[0_0_30px_rgba(255,204,0,0.15)]' : 'bg-white/10 hover:bg-white/20'}`}
              />
            ))}

            {/* Peak Label */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="absolute top-[10%] right-0 flex items-center gap-4"
            >
              <div className="h-px w-16 bg-brand-yellow/50" />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-brand-yellow uppercase tracking-widest mb-1">{t("service_detail.diagnostics.peak_detected_label")}</span>
                <span className="text-[24px] text-white font-[590] tracking-tighter">412 {t("service_detail.diagnostics.bar_unit_caps")}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Technical Ribbon */}
      <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap gap-y-8 justify-between items-center">
        <div className="flex gap-12 md:gap-24">
          <div className="flex flex-col gap-2">
            <span className="text-[9px] font-mono text-text-tertiary/40 uppercase tracking-[0.2em]">{t("service_detail.diagnostics.system_status_label_small")}</span>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
              <span className="text-[13px] text-white font-medium uppercase tracking-wider">{t("service_detail.diagnostics.active_status")}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[9px] font-mono text-text-tertiary/40 uppercase tracking-[0.2em]">{t("service_detail.diagnostics.average_load_label")}</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-[20px] text-white font-medium">210</span>
              <span className="text-[10px] text-text-tertiary font-mono uppercase">{t("service_detail.diagnostics.bar_unit")}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[9px] font-mono text-text-tertiary/40 uppercase tracking-[0.2em]">{t("service_detail.diagnostics.efficiency_label")}</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-[20px] text-brand-yellow font-medium">94.2</span>
              <span className="text-[10px] text-brand-yellow/50 font-mono uppercase">%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};



interface ServiceItem {
  title: string;
  desc: string;
  bgImage?: string;
}

interface ServiceSection {
  tag: string;
  title: string;
  desc: string;
  layout?: "grid-2" | "grid-3" | "custom";
  items: ServiceItem[];
}

interface ServiceData {
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  aboutHeading: string;
  aboutDesc: string;
  advantages: { id: string; label: string; value: string; desc: string; icon: React.ReactNode }[];
  techSpecs: { label: string; value: string }[];
  sections?: ServiceSection[];
  heroImage?: string;
  cta?: {
    title: string;
    primaryBtn: string;
    secondaryBtn: string;
  };
  faqs?: { q: string; a: string }[];
}

const BusinessValueStack = ({ items }: { items: any[] }) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-[10vh] pb-[20vh] mt-20">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="sticky top-[20vh]"
        >
          <div className="relative bg-[#0A0B0C] border border-white/5 rounded-sm p-10 md:p-16 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] group">
            {/* Background Image Layer */}
            {item.bgImage && (
              <>
                <img 
                  src={item.bgImage} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 z-0" />
              </>
            )}

            {/* Background Layer Index */}
            {!item.bgImage && (
              <div className="absolute top-[-10%] right-[-5%] text-[25vw] font-bold text-white/[0.02] select-none font-mono leading-none tracking-tighter">
                0{i + 1}
              </div>
            )}

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/20 rounded-sm">
                  <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-brand-yellow">{t('common.values')} 0{i + 1}</span>
                </div>
                
                <h3 className="text-[36px] md:text-[56px] font-[590] text-white tracking-tighter leading-[1.0] mb-6">
                  {item.title}
                </h3>
                
                <p className="text-[16px] md:text-[20px] text-[#E5E5E6] leading-relaxed font-[300] max-w-xl opacity-80">
                  {item.desc}
                </p>

                <div className="pt-8 flex items-center gap-8 border-t border-white/10">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">{t('common.efficiency')}</span>
                    <span className="text-[11px] text-white/60 font-mono">{t('common.standardization')}</span>
                  </div>
                  <div className="w-[1px] h-8 bg-white/10" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">{t('common.reliability')}</span>
                    <span className="text-[11px] text-white/60 font-mono">{t('common.certification')}</span>
                  </div>
                </div>
              </div>

              {!item.bgImage && (
                <div className="relative aspect-video rounded-sm overflow-hidden bg-white/[0.01] border border-white/5 group hover:border-brand-yellow/20 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {i === 0 ? (
                      <ShieldCheck className="w-24 h-24 text-brand-yellow/10 group-hover:text-brand-yellow/30 transition-all duration-700 scale-90 group-hover:scale-110" strokeWidth={1} />
                    ) : (
                      <Zap className="w-24 h-24 text-brand-yellow/10 group-hover:text-brand-yellow/30 transition-all duration-700 scale-90 group-hover:scale-110" strokeWidth={1} />
                    )}
                  </div>
                  
                  {/* Visual Depth Grid */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};





export const ServiceDetailView = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const translateTag = (tag: string) => {
    const tags: Record<string, string> = {
      "Сценарии_Боли": t("service_detail.diagnostics.scenarios_tag"),
      "Проблема_vs_Решение": t("service_detail.diagnostics.versus_tag"),
      "Экономика_Решения": t("service_detail.diagnostics.economics_tag"),
      "Разделитель_Фото_Процесс": t("service_detail.diagnostics.photo_divider_tag"),
      "Алгоритм_Работы": t("service_detail.diagnostics.process_tag"),
      "Подключи_и_Работай": t("service_detail.diagnostics.plug_work_tag"),
      "Технологическое_Ядро": t("service_detail.diagnostics.tech_core_tag"),
      "Комплексный_Аудит": t("service_detail.diagnostics.audit_tag"),
      "Детектив_Неисправностей": t("service_detail.diagnostics.analysis_tag"),
      "Диагностические_Наборы": t("service_detail.diagnostics.kits_tag"),
      "Бизнес_Ценность": t("service_detail.diagnostics.business_value_tag"),
      "Прозрачность_Отчета": t("service_detail.diagnostics.report_tag"),
      "Объем_Услуг": t("service_detail.rvd.section_range_tag"),
      "Цикл_Работ": t("service_detail.fittings.section_cycle_tag"),
      "Наследие_и_Авторитет": t("service_detail.fittings.section_heritage_tag"),
      "Этапы_Реализации": t("service_detail.fittings.section_stages_tag"),
      "Техническое_Ядро": t("service_detail.fittings.section_core_tag"),
      "Выбор_Серии": t("service_detail.fittings.section_series_tag"),
      "Безопасность_Монтажа": t("service_detail.fittings.section_safety_tag"),
      "Мастерство_Монтажа": t("service_detail.fittings.section_mastery_tag"),
      "Физика_и_Стойкость": t("service_detail.fittings.section_physics_tag"),
      "Технология_Покрытия": t("service_detail.fittings.section_coating_tag"),
      "Труба_—_залог_успеха": t("service_detail.fittings.section_pipes_tag"),
      "Ценность_Услуги": t("service_detail.fittings.section_value_tag"),
      "Проверка_Оригинальности": t("service_detail.fittings.section_orig_tag")
    };
    return tags[tag] || tag;
  };

  const EQUIPMENT_DATA = [
    {
      name: t("service_detail.equipment.item_01_name"),
      brand: t("service_detail.equipment.item_01_brand"),
      desc: t("service_detail.equipment.item_01_desc"),
      specs: [
        t("service_detail.equipment.item_01_spec_01"),
        t("service_detail.equipment.item_01_spec_02"),
        t("service_detail.equipment.item_01_spec_03")
      ],
      image: "/assets/images/services/rvd/Отрезной_станок_TF2_202608261306.jpeg"
    },
    {
      name: t("service_detail.equipment.item_02_name"),
      brand: t("service_detail.equipment.item_02_brand"),
      desc: t("service_detail.equipment.item_02_desc"),
      specs: [
        t("service_detail.equipment.item_02_spec_01"),
        t("service_detail.equipment.item_02_spec_02")
      ],
      image: "/assets/images/services/rvd/Окорочный_станок_USM_10_202608261306.jpeg"
    },
    {
      name: t("service_detail.equipment.item_03_name"),
      brand: t("service_detail.equipment.item_03_brand"),
      desc: t("service_detail.equipment.item_03_desc"),
      specs: [
        t("service_detail.equipment.item_03_spec_01"),
        t("service_detail.equipment.item_03_spec_02")
      ],
      image: "/assets/images/services/rvd/Толкатель_INSERT_02_P_202608261306.jpeg"
    },
    {
      name: t("service_detail.equipment.item_04_name"),
      brand: t("service_detail.equipment.item_04_brand"),
      desc: t("service_detail.equipment.item_04_desc"),
      specs: [
        t("service_detail.equipment.item_04_spec_01"),
        t("service_detail.equipment.item_04_spec_02")
      ],
      image: "/assets/images/services/rvd/пресс_S10_UNIFLEX_202608261305.jpeg"
    },
    {
      name: t("service_detail.equipment.item_05_name"),
      brand: t("service_detail.equipment.item_05_brand"),
      desc: t("service_detail.equipment.item_05_desc"),
      specs: [
        t("service_detail.equipment.item_05_spec_01"),
        t("service_detail.equipment.item_05_spec_02")
      ],
      image: "/assets/images/services/rvd/P_160.2_UNIFLEX__202608261305.jpeg"
    }
  ];

  const SERVICES_DATA: Record<string, ServiceData> = {
    rvd: {
      title: t("service_detail.rvd.title"),
      subtitle: t("service_detail.rvd.subtitle"),
      tag: t("service_detail.rvd.tag"),
      heroImage: "/assets/images/services/rvd/Рвд_1_202608261224.jpeg",
      description: t("service_detail.rvd.description"),
      aboutHeading: t("service_detail.rvd.aboutHeading"),
      aboutDesc: t("service_detail.rvd.aboutDesc"),
      advantages: [
        { id: 'speed', label: t("service_detail.rvd.adv_speed_label"), value: t("service_detail.rvd.adv_speed_val"), desc: t("service_detail.rvd.adv_speed_desc"), icon: <Clock className="w-5 h-5" /> },
        { id: 'warranty', label: t("service_detail.rvd.adv_warranty_label"), value: t("service_detail.rvd.adv_warranty_val"), desc: t("service_detail.rvd.adv_warranty_desc"), icon: <ShieldCheck className="w-5 h-5" /> },
        { id: 'stock', label: t("service_detail.rvd.adv_stock_label"), value: t("service_detail.rvd.adv_stock_val"), desc: t("service_detail.rvd.adv_stock_desc"), icon: <Database className="w-5 h-5" /> },
        { id: 'cert', label: t("service_detail.rvd.adv_cert_label"), value: t("service_detail.rvd.adv_cert_val"), desc: t("service_detail.rvd.adv_cert_desc"), icon: <Award className="w-5 h-5" /> }
      ],
      techSpecs: [
        { label: t("service_detail.rvd.spec_types_label"), value: t("service_detail.rvd.spec_types_val") },
        { label: t("service_detail.rvd.spec_tests_label"), value: t("service_detail.rvd.spec_tests_val") },
        { label: t("service_detail.rvd.spec_equip_label"), value: t("service_detail.rvd.spec_equip_val") },
        { label: t("service_detail.rvd.spec_diams_label"), value: t("service_detail.rvd.spec_diams_val") }
      ],
      cta: {
        title: t("service_detail.rvd.cta_title"),
        primaryBtn: t("service_detail.rvd.cta_primary"),
        secondaryBtn: t("service_detail.rvd.cta_secondary")
      },
      faqs: [
        { q: t("service_detail.rvd.faq_q1"), a: t("service_detail.rvd.faq_a1") },
        { q: t("service_detail.rvd.faq_q2"), a: t("service_detail.rvd.faq_a2") },
        { q: t("service_detail.rvd.faq_q3"), a: <>{t("service_detail.rvd.faq_q3_a_part1")} <ParkerLogo className="h-[0.8em] mx-1" isInline={true} showBox={false} />{t("service_detail.rvd.faq_q3_a_part2")}</> },
        { q: t("service_detail.rvd.faq_q4"), a: t("service_detail.rvd.faq_a4") }
      ],
      sections: [
        {
          tag: "Объем_Услуг",
          title: t("service_detail.rvd.section_range_title"),
          desc: t("service_detail.rvd.section_range_desc"),
          layout: "grid-2",
          items: [
            { title: t("service_detail.rvd.section_item_01_title"), desc: t("service_detail.rvd.section_item_01_desc") },
            { title: t("service_detail.rvd.section_item_02_title"), desc: t("service_detail.rvd.section_item_02_desc") }
          ]
        }
      ]
    },
    fittings: {
      title: t("service_detail.fittings.title"),
      subtitle: t("service_detail.fittings.subtitle"),
      tag: t("service_detail.fittings.tag"),
      description: t("service_detail.fittings.description"),
      aboutHeading: t("service_detail.fittings.aboutHeading"),
      aboutDesc: t("service_detail.fittings.aboutDesc"),
      advantages: [
        { id: 'seal', label: t("service_detail.fittings.adv_seal_label"), value: t("service_detail.fittings.adv_seal_val"), desc: t("service_detail.fittings.adv_seal_desc"), icon: <ShieldCheck className="w-5 h-5" /> },
        { id: 'vibration', label: t("service_detail.fittings.adv_vibration_label"), value: t("service_detail.fittings.adv_vibration_val"), desc: t("service_detail.fittings.adv_vibration_desc"), icon: <Activity className="w-5 h-5" /> },
        { id: 'safety', label: t("service_detail.fittings.adv_safety_label"), value: t("service_detail.fittings.adv_safety_val"), desc: t("service_detail.fittings.adv_safety_desc"), icon: <Zap className="w-5 h-5" /> },
        { id: 'corrosion', label: t("service_detail.fittings.adv_corrosion_label"), value: t("service_detail.fittings.adv_corrosion_val"), desc: t("service_detail.fittings.adv_corrosion_desc"), icon: <ShieldCheck className="w-5 h-5" /> }
      ],
      techSpecs: [
        { label: t("service_detail.fittings.spec_std_label"), value: t("service_detail.fittings.spec_std_val") },
        { label: t("service_detail.fittings.spec_pressure_label"), value: t("service_detail.fittings.spec_pressure_val") },
        { label: t("service_detail.fittings.spec_temp_label"), value: t("service_detail.fittings.spec_temp_val") },
        { label: t("service_detail.fittings.spec_coating_label"), value: t("service_detail.fittings.spec_coating_val") }
      ],
      sections: [
        {
          tag: "Цикл_Работ",
          title: t("service_detail.fittings.section_cycle_title"),
          desc: t("service_detail.fittings.section_cycle_desc"),
          layout: "custom",
          items: []
        },
        {
          tag: "Наследие_и_Авторитет",
          title: t("service_detail.fittings.section_heritage_title"),
          desc: <>{t("service_detail.fittings.section_heritage_desc")} <ParkerLogo className="h-[0.8em] ml-1" isInline={true} showBox={false} /> {t("service_detail.fittings.section_heritage_desc_part2")}</>,
          layout: "custom",
          items: []
        },
        {
          tag: "Этапы_Реализации",
          title: t("service_detail.fittings.section_stages_title"),
          desc: <>{t("service_detail.fittings.section_stages_desc")} <ParkerLogo className="h-[0.8em] ml-1" isInline={true} showBox={false} /> {t("service_detail.fittings.section_stages_desc_part2")}</>,
          layout: "grid-3",
          items: [
            { title: t("service_detail.fittings.section_stage_01_title"), desc: t("service_detail.fittings.section_stage_01_desc") },
            { title: t("service_detail.fittings.section_stage_02_title"), desc: t("service_detail.fittings.section_stage_02_desc") },
            { title: t("service_detail.fittings.section_stage_03_title"), desc: t("service_detail.fittings.section_stage_03_desc") }
          ]
        },
        {
          tag: "Техническое_Ядро",
          title: t("service_detail.fittings.section_core_title"),
          desc: t("service_detail.fittings.section_core_desc"),
          layout: "custom",
          items: []
        },
        {
          tag: "Выбор_Серии",
          title: t("service_detail.fittings.section_series_title"),
          desc: t("service_detail.fittings.section_series_desc"),
          layout: "custom",
          items: []
        },
        {
          tag: "Безопасность_Монтажа",
          title: t("service_detail.fittings.section_safety_title"),
          desc: t("service_detail.fittings.section_safety_desc"),
          layout: "grid-2",
          items: [
            { title: t("service_detail.fittings.section_safety_item_01_title"), desc: t("service_detail.fittings.section_safety_item_01_desc") },
            { title: t("service_detail.fittings.section_safety_item_02_title"), desc: t("service_detail.fittings.section_safety_item_02_desc") }
          ]
        },
        {
          tag: "Мастерство_Монтажа",
          title: t("service_detail.fittings.section_mastery_title"),
          desc: t("service_detail.fittings.section_mastery_desc"),
          layout: "grid-2",
          items: [
            { title: t("service_detail.fittings.section_mastery_item_01_title"), desc: t("service_detail.fittings.section_mastery_item_01_desc") },
            { title: t("service_detail.fittings.section_mastery_item_02_title"), desc: t("service_detail.fittings.section_mastery_item_02_desc") }
          ]
        },
        {
          tag: "Физика_и_Стойкость",
          title: t("service_detail.fittings.section_physics_title"),
          desc: t("service_detail.fittings.section_physics_desc"),
          layout: "custom",
          items: []
        },
        {
          tag: "Технология_Покрытия",
          title: t("service_detail.fittings.section_coating_title"),
          desc: t("service_detail.fittings.section_coating_desc"),
          layout: "custom",
          items: []
        },
        {
          tag: "Труба_—_залог_успеха",
          title: t("service_detail.fittings.section_pipes_title"),
          desc: t("service_detail.fittings.section_pipes_desc"),
          layout: "grid-3",
          items: [
            { title: t("service_detail.fittings.section_pipe_01_title"), desc: t("service_detail.fittings.section_pipe_01_desc") },
            { title: t("service_detail.fittings.section_pipe_02_title"), desc: t("service_detail.fittings.section_pipe_02_desc") },
            { title: t("service_detail.fittings.section_pipe_03_title"), desc: t("service_detail.fittings.section_pipe_03_desc") }
          ]
        },
        {
          tag: "Ценность_Услуги",
          title: t("service_detail.fittings.section_value_title"),
          desc: t("service_detail.fittings.section_value_desc"),
          layout: "custom",
          items: [
            { 
              title: t("service_detail.fittings.section_value_item_01_title"), 
              desc: t("service_detail.fittings.section_value_item_01_desc"),
              bgImage: "/assets/images/services/fittings/Man_pointing_at_document_202608261739.jpeg"
            },
            { 
              title: t("service_detail.fittings.section_value_item_02_title"), 
              desc: t("service_detail.fittings.section_value_item_02_desc"),
              bgImage: "/assets/images/services/fittings/Blue_industrial_workshop_and_equ…_202608261746.jpeg"
            }
          ]
        },
        {
          tag: "Проверка_Оригинальности",
          title: t("service_detail.fittings.section_orig_title"),
          desc: t("service_detail.fittings.section_orig_desc"),
          layout: "grid-3",
          items: [
            { title: t("service_detail.fittings.section_orig_item_01_title"), desc: t("service_detail.fittings.section_orig_item_01_desc") },
            { title: t("service_detail.fittings.section_orig_item_02_title"), desc: t("service_detail.fittings.section_orig_item_02_desc") },
            { title: t("service_detail.fittings.section_orig_item_03_title"), desc: t("service_detail.fittings.section_orig_item_03_desc") }
          ]
        }
      ],
      cta: {
        title: t("service_detail.fittings.cta_title"),
        primaryBtn: t("service_detail.fittings.cta_primary"),
        secondaryBtn: t("service_detail.fittings.cta_secondary")
      },
      heroImage: "/assets/images/services/fittings/eo2_plus_parker_202608261533.jpeg",
      faqs: [
        { q: t("service_detail.fittings.faq_q1"), a: t("service_detail.fittings.faq_a1") },
        { q: t("service_detail.fittings.faq_q2"), a: t("service_detail.fittings.faq_a2") },
        { q: t("service_detail.fittings.faq_q3"), a: <>Монтаж производится с использованием профессионального оборудования <ParkerLogo className="h-[0.8em] mx-1" isInline={true} showBox={false} />: станков для предварительной сборки и прецизионных труборезов. Это гарантирует идеальную геометрию врезки.</> },
        { q: t("service_detail.fittings.faq_q4"), a: t("service_detail.fittings.faq_a4") }
      ]
    },
    diagnostics: {
      title: t("service_detail.diagnostics.title_1") + " " + t("service_detail.diagnostics.title_2"),
      subtitle: t("service_detail.diagnostics.subtitle"),
      tag: t("service_detail.diagnostics.badge"),
      description: t("service_detail.diagnostics.description"),
      aboutHeading: t("service_detail.diagnostics.audit_title"),
      aboutDesc: t("service_detail.diagnostics.aboutDesc"),
      advantages: [
        { id: 'speed', label: t("service_detail.diagnostics.speed"), value: "1000 Hz", desc: t("service_detail.diagnostics.peak_detection"), icon: <Zap className="w-5 h-5" /> },
        { id: 'precision', label: t("service_detail.diagnostics.process_subtitle_03"), value: "±0.1%", desc: t("service_detail.diagnostics.readiness_desc"), icon: <Target className="w-5 h-5" /> },
        { id: 'duration', label: t("service_detail.diagnostics.reliability_plus_title"), value: t("common.24_hours"), desc: t("service_detail.diagnostics.process_desc_02"), icon: <History className="w-5 h-5" /> },
        { id: 'versatility', label: t("service_detail.diagnostics.audit_goal"), value: "P/T/Q/N", desc: t("service_detail.diagnostics.correlation_desc"), icon: <Box className="w-5 h-5" /> }
      ],
      techSpecs: [
        { label: t("service_detail.diagnostics.sampling_label"), value: t("service_detail.diagnostics.instrument_02_spec_val") },
        { label: t("service_detail.diagnostics.pressure"), value: t("service_detail.diagnostics.range_parker") },
        { label: t("common.interfaces"), value: "CAN Bus, USB, SensoWin 7" },
        { label: t("service_detail.diagnostics.protection_ip_label"), value: t("service_detail.diagnostics.protection_ip_val") }
      ],
      sections: [
        {
          tag: "Сценарии_Боли",
          title: t("service_detail.diagnostics.scenarios_title"),
          desc: t("service_detail.diagnostics.process_results_desc"),
          layout: "custom",
          items: []
        },
        {
          tag: "Проблема_vs_Решение",
          title: t("service_detail.diagnostics.report_title_1") + " vs " + t("service_detail.diagnostics.legacy_system"),
          desc: t("service_detail.diagnostics.versus_quote"),
          layout: "custom",
          items: []
        },
        {
          tag: "Экономика_Решения",
          title: t("service_detail.diagnostics.economics_inv_title_1") + " " + t("service_detail.diagnostics.economics_inv_title_2"),
          desc: t("service_detail.diagnostics.economics_inv_tagline"),
          layout: "custom",
          items: []
        },
        {
          tag: "Разделитель_Фото_Процесс",
          title: t("service_detail.diagnostics.photo_title"),
          desc: t("service_detail.diagnostics.photo_desc"),
          layout: "custom",
          items: []
        },
        {
          tag: "Алгоритм_Работы",
          title: t("service_detail.diagnostics.process_results_title"),
          desc: t("service_detail.diagnostics.process_results_desc"),
          layout: "custom",
          items: []
        },
        {
          tag: "Подключи_и_Работай",
          title: t("service_detail.diagnostics.plug_work_title"),
          desc: t("service_detail.diagnostics.plug_work_desc"),
          layout: "custom",
          items: []
        },
        {
          tag: "Технологическое_Ядро",
          title: t("service_detail.diagnostics.instruments_title_1") + " " + t("service_detail.diagnostics.instruments_title_2"),
          desc: t("service_detail.diagnostics.instruments_desc"),
          layout: "custom",
          items: []
        },
        {
          tag: "Комплексный_Аудит",
          title: t("service_detail.diagnostics.audit_title"),
          desc: t("service_detail.diagnostics.correlation_desc"),
          layout: "custom",
          items: []
        },
        {
          tag: "Детектив_Неисправностей",
          title: t("service_detail.diagnostics.analysis_title_1") + " " + t("service_detail.diagnostics.analysis_title_2"),
          desc: t("service_detail.diagnostics.analysis_desc"),
          layout: "custom",
          items: []
        },
        {
          tag: "Диагностические_Наборы",
          title: t("service_detail.diagnostics.results_matrix_badge"),
          desc: t("service_detail.diagnostics.kits_footer_desc"),
          layout: "custom",
          items: []
        },
        {
          tag: "Бизнес_Ценность",
          title: t("service_detail.diagnostics.process_results_title"),
          desc: t("service_detail.diagnostics.process_results_desc"),
          layout: "custom",
          items: [
            { 
              title: t("service_detail.diagnostics.reliability_plus_title"), 
              desc: t("service_detail.diagnostics.reliability_plus_desc"),
              bgImage: "/assets/images/services/diagnostics/Industrial_pressure_measurement_…_202608271307.jpeg"
            },
            { 
              title: t("service_detail.diagnostics.cert_report_title"), 
              desc: t("service_detail.diagnostics.cert_report_desc"),
              bgImage: "/assets/images/services/diagnostics/Diagnostic_equipment_kit_arranged_202608271308.jpeg"
            },
            { 
              title: t("service_detail.diagnostics.opt_procurement_title"), 
              desc: t("service_detail.diagnostics.opt_procurement_desc"),
              bgImage: "/assets/images/services/diagnostics/Industrial_pressure_gauges_in_case_202608271308.jpeg"
            },
            { 
              title: t("service_detail.diagnostics.zero_downtime_title"), 
              desc: t("service_detail.diagnostics.zero_downtime_desc"),
              bgImage: "/assets/images/services/diagnostics/Industrial_diagnostic_equipment_…_202608271240.jpeg"
            }
          ]
        },
        {
          tag: "Прозрачность_Отчета",
          title: t("service_detail.diagnostics.report_badge"),
          desc: t("service_detail.diagnostics.report_desc"),
          layout: "custom",
          items: []
        }
      ],
      cta: {
        title: t("service_detail.diagnostics.cta_title"),
        primaryBtn: t("service_detail.diagnostics.cta_primary"),
        secondaryBtn: t("service_detail.diagnostics.cta_secondary")
      },
      heroImage: "/assets/images/services/diagnostics/Industrial_diagnostic_tools_arra…_202608261753.jpeg",
      faqs: [
        { q: t("service_detail.diagnostics.faq_q1"), a: t("service_detail.diagnostics.faq_a1") },
        { q: t("service_detail.diagnostics.faq_q2"), a: t("service_detail.diagnostics.faq_a2") },
        { q: t("service_detail.diagnostics.faq_q3"), a: t("service_detail.diagnostics.faq_a3") },
        { q: t("service_detail.diagnostics.faq_q4"), a: t("service_detail.diagnostics.faq_a4") }
      ]
    }
  };

  const FAQ_DATA = [
    { q: t("service_detail.rvd.faq_q1"), a: t("service_detail.rvd.faq_a1") },
    { q: t("service_detail.rvd.faq_q2"), a: t("service_detail.rvd.faq_a2") },
    { q: t("service_detail.rvd.faq_q3"), a: <>{t("service_detail.rvd.faq_q3_a_part1")} <ParkerLogo className="h-[0.8em] mx-1" isInline={true} showBox={false} /> {t("service_detail.rvd.faq_q3_a_part2")}</> },
    { q: t("service_detail.rvd.faq_q4"), a: t("service_detail.rvd.faq_a4") },
    { q: t("rfq.quick_order_title"), a: t("rfq.quick_order_desc") }
  ];

  const service = SERVICES_DATA[serviceId as keyof typeof SERVICES_DATA] || SERVICES_DATA.rvd;
  const isRVD = serviceId === "rvd";
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const renderTitle = (title: string) => {
    const words = title.split(" ");
    if (words.length <= 1) return title;
    const lastWord = words.pop();
    return (
      <>
        {words.join(" ")} <span className="text-brand-yellow">{lastWord}{lastWord?.endsWith('.') ? '' : '.'}</span>
      </>
    );
  };

  return (
    <div className="bg-[#08090A] min-h-screen">
      {/* Screen 1: Hero Section Style */}
      <section className="relative pt-48 pb-32 text-center overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/20 rounded-sm mb-8"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-yellow">{service.tag}</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[42px] md:text-[72px] font-[590] text-[#E5E5E6] leading-[0.95] tracking-[-0.04em] mb-12"
          >
            {renderTitle(service.title)}
          </motion.h1>

          {service.subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-[18px] md:text-[28px] font-[400] text-white/80 tracking-tight mb-8"
            >
              {service.subtitle}
            </motion.p>
          )}

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[16px] md:text-[20px] font-[300] leading-relaxed opacity-60 text-[#8A8F98] max-w-2xl mx-auto mb-16"
          >
            {service.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-x-12 gap-y-8"
          >
            {service.techSpecs.map((spec, i) => (
              <div key={i} className="text-left">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8A8F98]/40 mb-2">{spec.label}</div>
                <div className="text-[18px] font-medium text-[#E5E5E6]">{spec.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {service.heroImage && (
        <section className="w-full aspect-video overflow-hidden relative border-y border-white/5">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#08090A] via-transparent to-[#08090A] z-10 opacity-40" />
            <img 
              src={service.heroImage} 
              alt={service.title}
              className="w-full h-full object-cover transition-all duration-1000"
            />
          </motion.div>
        </section>
      )}

      {/* Screen 3: "About" Section Style */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[36px] md:text-[56px] font-[590] text-[#E5E5E6] leading-[1.05] tracking-tight"
            >
              {renderTitle(service.aboutHeading)}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[18px] md:text-[24px] font-[300] text-[#E5E5E6] leading-[1.5] opacity-80 lg:pt-4"
            >
              {service.aboutDesc}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Screen 5/6: Advantages Horizontal List Style */}
      <section className="py-0 border-t border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-white/10">
            {service.advantages.map((adv, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`pt-16 pb-20 px-10 border-r border-b lg:border-b-0 border-white/10 flex flex-col min-h-[380px] group hover:bg-white/[0.01] transition-all ${
                  i % 4 === 3 ? 'lg:border-r-0' : ''
                } ${i % 2 === 1 ? 'md:border-r-0 lg:border-r' : ''}`}
              >
                <div className="text-[10px] font-mono text-brand-yellow/80 uppercase tracking-[0.4em] mb-16">{t("common.metric")}: {adv.label}</div>
                
                <div className="mt-auto space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-brand-yellow/60 group-hover:text-brand-yellow transition-colors">
                      {adv.icon}
                    </div>
                    <div className="h-[1px] flex-grow bg-white/5" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-[28px] md:text-[36px] font-[590] text-[#E5E5E6] tracking-tight leading-[1.1]">
                      {adv.value}
                    </h3>
                    <p className="text-[15px] text-[#8A8F98] leading-relaxed font-[300] opacity-60 pr-4">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showcase: Minimalist Cinematic List */}
      {isRVD ? (
        <section className="py-40 border-t border-white/5 bg-[#050505] overflow-hidden">
          <div className="max-w-7xl mx-auto px-10 mb-24">
             <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                <div className="max-w-2xl">
                   <div className="inline-flex items-center gap-3 px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/20 rounded-sm mb-10">
                      <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-yellow">Технологический_Арсенал</span>
                   </div>
                   <h2 className="text-[48px] md:text-[72px] font-[590] text-[#E5E5E6] tracking-tight leading-[0.95] mb-10">
                     Оснащение <br /> <span className="text-brand-yellow">мастерской.</span>
                   </h2>
                </div>
                <p className="text-[16px] md:text-[18px] text-[#8A8F98] max-w-xs font-[300] opacity-40 leading-relaxed mb-4">
                  Золотой стандарт индустрии. Только оригинальное оборудование от мировых лидеров Uniflex и O+P S.r.l.
                </p>
             </div>
          </div>

          <div className="border-t border-white/10">
            {EQUIPMENT_DATA.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative border-b border-white/5 overflow-hidden w-full aspect-video"
              >
                {/* Always Visible Background Image - Full Width */}
                <div className="absolute inset-0 z-10 transition-transform duration-1000 group-hover:scale-105">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Strategic overlay for text readability - Clears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-30 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                </div>

                {/* Content Overlay - Centered Container */}
                <div className="max-w-7xl mx-auto px-10 h-full flex flex-col justify-end pb-20 relative z-20">
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                    <div className="flex items-start gap-12 lg:w-3/5">
                      <span className="text-[20px] font-mono text-brand-yellow/60">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <div className="text-[10px] font-mono text-brand-yellow/80 uppercase tracking-[0.4em] mb-4">{item.brand}</div>
                        <h3 className="text-[42px] md:text-[56px] font-[590] text-white tracking-tight leading-none group-hover:translate-x-3 transition-transform duration-500">{item.name}</h3>
                        <p className="mt-8 text-[16px] md:text-[18px] text-white/70 max-w-md font-[300] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    
                    <div className="lg:w-1/4 flex flex-col gap-4 mb-2">
                      {item.specs.map((spec, si) => (
                        <div key={si} className="flex items-center gap-4 group/spec">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                          <span className="text-[12px] font-mono text-white/90 uppercase tracking-[0.2em] whitespace-nowrap">
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ) : (
        /* Fittings Technical Sections */
        service.sections && (
          <section className="py-32 border-t border-white/5 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-10">
              {service.sections.map((section: any, i: number) => (
                <div key={i} className="mb-40 last:mb-0">
                  {section.tag === "Техническое_Ядро" && (
                    <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw] mb-40 aspect-video overflow-hidden border-y border-white/5 group">
                      <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full h-full"
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
                        <img 
                          src="/assets/images/services/fittings/Disassembled_stainless_steel_com…_202608261542.jpeg" 
                          alt="Parker Ermeto Precision"
                          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                        />
                      </motion.div>
                    </div>
                  )}

                  {section.tag === "Экономика_Решения" && (
                    <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw] mb-40 aspect-video overflow-hidden border-y border-white/5 group">
                      <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full h-full"
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
                        <img 
                          src="/assets/images/services/diagnostics/Electronic_diagnostic_device_stu…_202608261829.jpeg" 
                          alt="Parker Diagnostic Expertise"
                          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                        />
                      </motion.div>
                    </div>
                  )}

                  {section.tag === "Детектив_Неисправностей" && (
                    <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw] mb-40 aspect-video overflow-hidden border-y border-white/5 group">
                      <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full h-full"
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
                        <img 
                          src="/assets/images/services/diagnostics/Industrial_diagnostic_tool_kit_d…_202608271316.jpeg" 
                          alt="Parker Diagnostic Analytics"
                          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                        />
                      </motion.div>
                    </div>
                  )}

                  {section.tag === "Разделитель_Фото_Процесс" && (
                    <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw] mb-40 aspect-[21/9] md:aspect-video overflow-hidden border-y border-white/5 group bg-white/[0.02]">
                      <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full h-full"
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10 opacity-40 group-hover:opacity-20 transition-opacity duration-700" />
                        <img 
                          src="/assets/images/services/diagnostics/Measuring_tools_in_studio_202608261938 (1).jpeg" 
                          alt="Parker Measuring Tools"
                          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                        />
                      </motion.div>
                    </div>
                  )}

                  {section.tag === "Подключи_и_Работай" && (
                    <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw] mb-40 aspect-video overflow-hidden border-y border-white/5 group">
                      <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full h-full"
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
                        <img 
                          src="/assets/images/services/diagnostics/Industrial_diagnostic_equipment_…_202608271240.jpeg" 
                          alt="Parker Field Trials"
                          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                        />
                      </motion.div>
                    </div>
                  )}

                  {section.tag === "Бизнес_Ценность" && (
                    <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw] mb-40 aspect-video overflow-hidden border-y border-white/5 group">
                      <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full h-full"
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
                        <img 
                          src="/assets/images/services/diagnostics/Industrial_diagnostic_equipment_…_202608271257.jpeg" 
                          alt="Parker Business Value"
                          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                        />
                      </motion.div>
                    </div>
                  )}

                  {section.tag === "Мастерство_Монтажа" && (
                    <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw] mb-40 aspect-video overflow-hidden border-y border-white/5 group">
                      <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full h-full"
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
                        <img 
                          src="/assets/images/services/fittings/Metal_pipe_fittings_arranged_pre…_202608261601.jpeg" 
                          alt="Service Mobility"
                          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                        />
                      </motion.div>
                    </div>
                  )}

                  {section.tag === "Ценность_Услуги" && (
                    <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw] mb-40 aspect-video overflow-hidden border-y border-white/5 group">
                      <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full h-full"
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
                        <img 
                          src="/assets/images/services/fittings/Industrial_metal_fittings_cross_…_202608261730.jpeg" 
                          alt="Business Value"
                          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                        />
                      </motion.div>
                    </div>
                  )}

                  {section.tag !== "Разделитель_Фото_Процесс" && (
                    <div className="mb-24">
                      <div className="inline-flex items-center gap-3 px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/20 rounded-sm mb-10">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-yellow">{translateTag(section.tag)}</span>
                      </div>
                      
                      <div className={section.tag === "Наследие_и_Авторитет" ? "max-w-4xl" : "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start"}>
                        <h2 className="text-[36px] md:text-[56px] font-[590] text-[#E5E5E6] tracking-tight leading-[1.05]">
                          {renderTitle(section.title)}
                        </h2>
                        <p className={`text-[18px] md:text-[22px] text-[#8A8F98] leading-relaxed font-[300] opacity-60 ${section.tag === "Наследие_и_Авторитет" ? "mt-8" : "lg:pt-4"}`}>
                          {section.desc}
                        </p>
                      </div>
                    </div>
                  )}

                  {section.tag !== "Разделитель_Фото_Процесс" && (
                    section.layout === "custom" ? (
                      <div className="py-10">
                        {section.tag === "Объем_Услуг" && <ServiceScopeVisual />}
                        {section.tag === "Проблема_vs_Решение" && <DiagnosticsVersusVisual />}
                        {section.tag === "Технологическое_Ядро" && <DiagnosticsInstrumentsVisual />}
                        {section.tag === "Комплексный_Аудит" && <DiagnosticsAuditVisual />}
                        {section.tag === "Детектив_Неисправностей" && <DiagnosticsAnalysisVisual />}
                        {section.tag === "Подключи_и_Работай" && <DiagnosticsPlugWorkVisual />}
                        {section.tag === "Диагностические_Наборы" && <DiagnosticsKitsVisual />}
                        {section.tag === "Алгоритм_Работы" && <DiagnosticsProcessVisual />}
                        {section.tag === "Сценарии_Боли" && <DiagnosticsPainScenarios />}
                        {section.tag === "Экономика_Решения" && <DiagnosticsEconomics />}
                        {section.tag === "Прозрачность_Отчета" && <DiagnosticsReportSample />}
                        {section.tag === "Бизнес_Ценность" && <BusinessValueStack items={section.items} />}
                        {section.tag === "Наследие_и_Авторитет" && <HeritageTimeline />}
                        {section.tag === "Техническое_Ядро" && <EO2InteractiveDiagram />}
                        {section.tag === "Выбор_Серии" && <SeriesTable />}
                        {section.tag === "Физика_и_Стойкость" && <TemperaturePressureChart />}
                        {section.tag === "Технология_Покрытия" && <CoatingStructure />}
                        {section.tag === "Ценность_Услуги" && <BusinessValueStack items={section.items} />}
                      </div>
                    ) : (
                      <div className={`grid grid-cols-1 ${section.layout === 'grid-2' ? 'md:grid-cols-2' : 'md:grid-cols-3'} border-t border-white/10`}>
                        {section.items.map((item: any, j: number) => (
                          <motion.div 
                            key={j}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: j * 0.1 }}
                            className={`pt-12 pb-16 px-10 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between min-h-[320px] ${
                              section.layout === 'grid-2' 
                                ? (j % 2 === 1 ? 'md:border-r-0' : '') 
                                : (j % 3 === 2 ? 'md:border-r-0' : '')
                            } group hover:bg-white/[0.01] transition-all`}
                          >
                            <div className="text-[11px] font-mono text-[#8A8F98]/40 uppercase tracking-[0.2em]">{t('service_detail.section_prefix')}_0{j + 1}</div>
                            <div className="space-y-6">
                              <h3 className="text-[22px] md:text-[26px] font-[510] text-[#E5E5E6] leading-[1.1] tracking-tight">{item.title}</h3>
                              <p className="text-[14px] text-[#8A8F98] font-[300] leading-relaxed opacity-50">{item.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          </section>
        )
      )}

      {isRVD && (
        <>
          {/* Mobile Workshop: Horizontal List Style */}
          <section className="py-32 border-t border-white/5 bg-[#050505]">
             <div className="max-w-7xl mx-auto px-10">
                <div className="max-w-3xl mb-24">
                   <div className="inline-flex items-center gap-3 px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/20 rounded-sm mb-10">
                      <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-yellow">{t('service_detail.deployment.badge')}</span>
                   </div>
                   <h2 className="text-[36px] md:text-[56px] font-[590] text-[#E5E5E6] tracking-tight leading-[1.05] mb-10">
                     {t('service_detail.deployment.title')}
                   </h2>
                   <p className="text-[18px] md:text-[22px] text-[#8A8F98] leading-relaxed font-[300] opacity-60">
                     {t('service_detail.deployment.desc')}
                   </p>
                </div>
 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
                   {[
                     { index: t('service_detail.deployment.step_1_idx'), title: t('service_detail.deployment.step_1_title'), desc: t('service_detail.deployment.step_1_desc') },
                     { index: t('service_detail.deployment.step_2_idx'), title: t('service_detail.deployment.step_2_title'), desc: t('service_detail.deployment.step_2_desc') },
                     { index: t('service_detail.deployment.step_3_idx'), title: t('service_detail.deployment.step_3_title'), desc: t('service_detail.deployment.step_3_desc') },
                     { index: t('service_detail.deployment.step_4_idx'), title: t('service_detail.deployment.step_4_title'), desc: t('service_detail.deployment.step_4_desc') }
                   ].map((item, i) => (
                     <div key={i} className="pt-10 pb-16 px-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between min-h-[400px] last:border-r-0 hover:bg-white/[0.01] transition-all">
                        <div className="text-[11px] font-mono text-[#8A8F98]/40 uppercase tracking-[0.2em]">{item.index}</div>
                        <div className="space-y-6">
                           <h3 className="text-[24px] md:text-[28px] font-[510] text-[#E5E5E6] leading-[1.1] tracking-tight">{item.title}</h3>
                           <p className="text-[14px] text-[#8A8F98] font-[300] leading-relaxed opacity-50">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </section>
 
          {/* Cinematic Full-Bleed Image Section */}
          <section className="w-full aspect-video relative overflow-hidden bg-[#050505] border-t border-white/5">
             <img 
               src="/assets/images/services/rvd/Technicians_operating_industrial…_202608261335.jpeg" 
               alt="Mobile Workshop Production" 
               className="w-full h-full object-cover hover:scale-105 transition-transform duration-[10s] ease-out"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-40" />
          </section>
        </>
      )}
 
      {/* Online Configurator (RVD only) */}
      {isRVD && (
        <section className="py-32 border-t border-white/5 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-10">
            <div className="text-center mb-24">
              <div className="inline-flex items-center gap-3 px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/20 rounded-sm mb-10">
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-yellow">{t('service_detail.rvd.config_tag')}</span>
              </div>
              <h2 className="text-[36px] md:text-[56px] font-[590] text-[#E5E5E6] tracking-tight leading-[1.05] mb-10">{t('service_detail.rvd.config_title')}</h2>
              <p className="text-[#8A8F98] text-[16px] md:text-[18px] max-w-2xl mx-auto font-[300] opacity-50">{t('service_detail.rvd.config_desc')}</p>
            </div>
            <div className="bg-[#08090A] rounded-sm border border-white/5 shadow-3xl overflow-hidden relative">
               <RVDConfigurator />
            </div>
          </div>
        </section>
      )}
 
      {/* FAQ Section */}
      <section className="py-32 border-t border-white/5 bg-[#08090A]">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3">
              <div className="inline-flex items-center gap-3 px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/20 rounded-sm mb-10">
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-yellow">{t('service_detail.faq_badge')}</span>
              </div>
              <h2 className="text-[36px] md:text-[56px] font-[590] tracking-tight leading-[1.05] text-[#E5E5E6] mb-8">
                {t('service_detail.faq_title')}
              </h2>
              <p className="text-[16px] text-[#8A8F98] leading-relaxed max-w-xs font-[300] opacity-50">
                {t('service_detail.faq_desc')}
              </p>
            </div>
            
            <div className="md:w-2/3 space-y-4">
              {(service.faqs || FAQ_DATA).map((item, i) => (
                <div key={i} className="border-b border-white/5 pb-8">
                  <button 
                    className="w-full flex items-center justify-between text-left group"
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  >
                    <span className={`text-[18px] md:text-[22px] font-[510] transition-colors pr-12 tracking-tight ${activeFaq === i ? 'text-brand-yellow' : 'text-[#E5E5E6]/40 group-hover:text-[#E5E5E6]'}`}>
                      {item.q}
                    </span>
                    <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 flex-shrink-0 ${activeFaq === i ? 'rotate-180 border-white/40 bg-white/5' : ''}`}>
                      <ChevronDown className={`w-4 h-4 transition-colors ${activeFaq === i ? 'text-white' : 'text-[#8A8F98]'}`} />
                    </div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: activeFaq === i ? "auto" : 0,
                      opacity: activeFaq === i ? 1 : 0
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8 text-[15px] md:text-[17px] text-[#8A8F98] leading-relaxed max-w-2xl font-[300] opacity-60">
                      {item.a}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      {/* CTA Section - Unified scale */}
      <section className="max-w-[1440px] mx-auto px-6 mb-40">
        <div className="relative overflow-hidden rounded-sm border border-white/5 bg-[#050505] p-10 md:p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-[36px] md:text-[60px] font-[590] tracking-[-0.04em] leading-[1.05] text-[#E5E5E6] mb-10">
              {renderTitle(service.cta?.title || t("service_detail.rvd.cta_title"))}
            </h2>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:+77072001059" 
                className="inline-flex items-center justify-center px-10 py-5 bg-brand-yellow text-black font-[510] rounded-sm hover:brightness-110 transition-all gap-3 text-[13px] uppercase tracking-widest"
              >
                {service.cta?.primaryBtn || t("service_detail.rvd.cta_primary")} <Phone className="w-4 h-4" />
              </a>
              <button 
                onClick={() => navigate("/request")}
                className="inline-flex items-center justify-center px-10 py-5 border border-white/10 bg-white/[0.03] text-brand-yellow font-[510] rounded-sm hover:bg-white/[0.08] transition-all text-[13px] uppercase tracking-widest"
              >
                {service.cta?.secondaryBtn || t("service_detail.rvd.cta_secondary")}
              </button>
            </div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
            <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-brand-yellow/20 rounded-full blur-[160px]" />
            <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-[140px]" />
          </div>
        </div>
      </section>
    </div>
  );
};
