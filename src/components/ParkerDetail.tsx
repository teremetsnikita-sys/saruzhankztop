import React from "react";
import { motion } from "motion/react";
import { ParkerLogo } from '@/components/ParkerLogo';
import { 
  Settings2, 
  Layers, 
  Wind, 
  Zap, 
  Droplets, 
  Activity, 
  Shield, 
  ChevronRight, 
  Globe, 
  Warehouse,
  Truck,
  Wrench,
  Lightbulb,
  Factory,
  Mountain,
  Plane,
  Cpu,
  ArrowLeft
} from "lucide-react";

import { useTranslation } from "react-i18next";

const SectionHeader = ({ tag, title, subtitle, light = false, fullWidth = false }: { tag: string; title: React.ReactNode; subtitle?: string; light?: boolean; fullWidth?: boolean }) => (
  <div className="mb-16">
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-3 px-2 py-0.5 bg-brand-yellow/[0.03] border border-brand-yellow/10 rounded-sm mb-6"
    >
      <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-brand-yellow">{tag}</span>
    </motion.div>
    <div className={`flex flex-col ${fullWidth ? 'lg:flex-row lg:items-end lg:justify-between' : ''} gap-8`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-[32px] md:text-[42px] font-[590] leading-[1.15] tracking-[-0.04em] uppercase ${light ? 'text-background' : 'text-primary'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-[15px] ${fullWidth ? 'max-w-md' : ''} font-[300] leading-relaxed opacity-60 ${light ? 'text-background' : 'text-text-secondary'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </div>
);

// Block 1: Parker Hero Section
const ParkerHero = () => {
  const { t } = useTranslation();
  return (
  <section className="relative pt-24 text-center overflow-hidden mb-0">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-yellow/[0.03] rounded-full blur-[140px] pointer-events-none" />
    
    <div className="max-w-4xl mx-auto px-6 relative z-10 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-3 px-2 py-0.5 bg-brand-yellow/[0.03] border border-brand-yellow/10 rounded-sm mb-6"
      >
        <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-brand-yellow">{t('brand_detail.parker.hero_tag')}</span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-10"
      >
        <span className="px-4 py-1.5 rounded-sm border border-brand-yellow/20 bg-brand-yellow/5 text-[10px] md:text-[12px] font-[510] text-brand-yellow uppercase tracking-[0.1em]">
          {t('brand_detail.parker.distributor_label')}
        </span>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[42px] md:text-[72px] font-[590] text-primary leading-[0.95] tracking-[-0.05em] mb-10 uppercase"
      >
        {t('brand_detail.parker.hero_title_1')} <br />
        <span className="text-brand-yellow">{t('brand_detail.parker.hero_title_2')}</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-[16px] md:text-[20px] font-[300] leading-relaxed text-text-secondary max-w-2xl mx-auto mb-16 opacity-80"
      >
        <ParkerLogo className="h-[0.8em] mr-2" isInline={true} showBox={false} /> — {t('brand_detail.parker.hero_desc')}
      </motion.p>
    </div>

    <div className="w-full h-[80vh] md:h-[95vh] overflow-hidden relative border-y border-white/5 bg-[#050505]">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10 opacity-60" />
        <img 
          src="/assets/images/distributor/Hydraulic_pump_close-up_202608251635 (1).jpeg" 
          alt="Parker Hydraulic Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
      </motion.div>
    </div>
  </section>
  );
};

// Block 2: Distributor Advantages
const DistributorAdvantages = () => {
  const { t } = useTranslation();
  const advantages = [
    { 
      title: t('brand_detail.parker.adv_stock_title'), 
      icon: <Warehouse className="w-6 h-6" />, 
      desc: t('brand_detail.parker.adv_stock_desc') 
    },
    { 
      title: t('brand_detail.parker.adv_service_title'), 
      icon: <Wrench className="w-6 h-6" />, 
      desc: t('brand_detail.parker.adv_service_desc') 
    },
    { 
      title: t('brand_detail.parker.adv_direct_title'), 
      icon: <Truck className="w-6 h-6" />, 
      desc: t('brand_detail.parker.adv_direct_desc') 
    },
    { 
      title: t('brand_detail.parker.adv_consult_title'), 
      icon: <Lightbulb className="w-6 h-6" />, 
      desc: t('brand_detail.parker.adv_consult_desc') 
    }
  ];

  return (
    <section className="py-32">
      <SectionHeader 
        tag={t('brand_detail.parker.adv_tag')}
        title={<>{t('brand_detail.parker.adv_title_1')} <br /><span className="text-brand-yellow">{t('brand_detail.parker.adv_title_2')}</span></>}
      />
      <div className="grid grid-cols-12 gap-6">
        {advantages.map((adv, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`
              relative p-10 rounded-sm overflow-hidden border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] 
              transition-all duration-700 group
              ${i === 0 || i === 3 ? 'col-span-12 lg:col-span-7' : 'col-span-12 lg:col-span-5'}
              ${i === 0 ? 'bg-gradient-to-br from-brand-yellow/[0.03] to-transparent' : ''}
            `}
          >
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-sm bg-white/[0.03] border border-white/5 flex items-center justify-center mb-10 text-brand-yellow group-hover:bg-brand-yellow group-hover:text-black transition-all duration-500 transform group-hover:rotate-[360deg]">
                {adv.icon}
              </div>
              
              <h4 className={`
                font-[590] text-primary mb-6 tracking-tight transition-colors duration-500 group-hover:text-brand-yellow
                ${i === 0 || i === 3 ? 'text-3xl' : 'text-xl'}
              `}>
                {adv.title}
              </h4>
              
              <p className={`
                text-text-secondary leading-relaxed opacity-50 group-hover:opacity-100 transition-all duration-500
                ${i === 0 || i === 3 ? 'text-lg max-w-md' : 'text-[15px]'}
              `}>
                {adv.desc}
              </p>
              
              <div className="mt-12 flex items-center gap-2 text-brand-yellow/0 group-hover:text-brand-yellow transition-all duration-700 translate-x-[-20px] group-hover:translate-x-0">
                <div className="w-8 h-[1px] bg-brand-yellow" />
                <span className="text-[12px] uppercase tracking-widest font-[590]">{t('brand_detail.parker.tagline')}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Block 3: Technology Groups
const TechGroups = () => {
  const { t } = useTranslation();
  const groups = [
    { title: t('brand_detail.parker.group_hydraulics'), icon: <Droplets className="w-5 h-5" />, desc: t('brand_detail.parker.group_hydraulics_desc') },
    { title: t('brand_detail.parker.group_pneumatics'), icon: <Wind className="w-5 h-5" />, desc: t('brand_detail.parker.group_pneumatics_desc') },
    { title: t('brand_detail.parker.group_fluid'), icon: <Layers className="w-5 h-5" />, desc: t('brand_detail.parker.group_fluid_desc') },
    { title: t('brand_detail.parker.group_filtration'), icon: <Activity className="w-5 h-5" />, desc: t('brand_detail.parker.group_filtration_desc') },
    { title: t('brand_detail.parker.group_sealing'), icon: <Shield className="w-5 h-5" />, desc: t('brand_detail.parker.group_sealing_desc') },
    { title: t('brand_detail.parker.group_electromechanical'), icon: <Zap className="w-5 h-5" />, desc: t('brand_detail.parker.group_electromechanical_desc') },
    { title: t('brand_detail.parker.group_aerospace'), icon: <Plane className="w-5 h-5" />, desc: t('brand_detail.parker.group_aerospace_desc') }
  ];

  return (
    <section className="mb-32">
      <SectionHeader 
        tag={t('brand_detail.parker.groups_portfolio_tag')}
        title={<>{t('brand_detail.parker.groups_portfolio_title_1')} <br /><span className="text-brand-yellow">{t('brand_detail.parker.groups_portfolio_title_2')}</span></>}
      />
      <div className="border-t border-white/10">
        {groups.map((group, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center justify-between py-8 border-b border-white/5 group hover:bg-white/[0.01] transition-all cursor-default px-4"
          >
            <div className="flex items-center gap-8">
              <span className="text-[12px] font-mono text-white/20 group-hover:text-brand-yellow/40 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h4 className="text-[19px] font-[500] text-primary group-hover:text-brand-yellow transition-colors tracking-tight">
                {group.title}
              </h4>
            </div>
            
            <div className="flex items-center gap-12">
              <span className="hidden lg:block text-[14px] text-text-secondary opacity-30 group-hover:opacity-100 transition-all max-w-[400px] text-right font-[300]">
                {group.desc}
              </span>
              <div className="text-white/10 group-hover:text-brand-yellow transition-colors">
                {React.cloneElement(group.icon as React.ReactElement, { className: "w-4 h-4" })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const VisualBreak = ({ src }: { src: string }) => (
  <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden relative my-48 border-y border-white/5 bg-[#050505]">
    <motion.div
      initial={{ scale: 1.1, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="w-full h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10 opacity-60" />
      <img 
        src={src} 
        alt="Parker Engineering Excellence"
        className="w-full h-full object-cover"
      />
    </motion.div>
  </div>
);

// Block 4: Product Matrix
const ProductMatrix = () => {
  const { t } = useTranslation();
  const categories = [
    {
      title: t('brand_detail.parker.matrix_cat_hydraulics'),
      items: [
        t('brand_detail.parker.items.hose'),
        t('brand_detail.parker.items.pumps'),
        t('brand_detail.parker.items.valves'),
        t('brand_detail.parker.items.accumulators'),
        t('brand_detail.parker.items.sensors')
      ]
    },
    {
      title: t('brand_detail.parker.matrix_cat_connectors'),
      items: [
        t('brand_detail.parker.items.brs'),
        t('brand_detail.parker.items.fittings'),
        t('brand_detail.parker.items.quick_connect'),
        t('brand_detail.parker.items.high_pressure_fittings'),
        t('brand_detail.parker.items.tube_connect')
      ]
    },
    {
      title: t('brand_detail.parker.matrix_cat_filtration'),
      items: [
        t('brand_detail.parker.items.racor'),
        t('brand_detail.parker.items.fuel_systems'),
        t('brand_detail.parker.items.oil_sensors'),
        t('brand_detail.parker.items.orings'),
        t('brand_detail.parker.items.spares')
      ]
    },
    {
      title: t('brand_detail.parker.matrix_cat_automation'),
      items: [
        t('brand_detail.parker.items.iqan'),
        t('brand_detail.parker.items.eth'),
        t('brand_detail.parker.items.phs'),
        t('brand_detail.parker.items.cylinders'),
        t('brand_detail.parker.items.pneumatics')
      ]
    }
  ];

  return (
    <section className="mb-32">
      <SectionHeader 
        tag={t('brand_detail.parker.matrix_tag')}
        title={<>{t('brand_detail.parker.matrix_title_1')} <br /><span className="text-brand-yellow">{t('brand_detail.parker.matrix_title_2')}</span></>}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-1.5 bg-brand-yellow" />
              <h4 className="text-[14px] font-mono uppercase tracking-[0.2em] text-primary/40">
                {cat.title}
              </h4>
            </div>
            
            <div className="space-y-0 border-t border-white/5">
              {cat.items.map((item, j) => (
                <div 
                  key={j} 
                  className="py-4 border-b border-white/5 group flex items-center justify-between hover:bg-white/[0.01] transition-all px-2"
                >
                  <span className="text-[14px] text-text-secondary group-hover:text-primary transition-colors font-[300]">
                    {item}
                  </span>
                  <div className="w-1 h-1 bg-white/10 group-hover:bg-brand-yellow transition-colors rounded-full" />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Block 5: Engineering Hub
const EngineeringHub = () => {
  const { t } = useTranslation();
  return (
  <section className="mb-32">
    <SectionHeader 
      tag={t('brand_detail.parker.hub_tag')}
      title={<>{t('brand_detail.parker.hub_title_1')} <br /><span className="text-text-secondary/30">{t('brand_detail.parker.hub_title_2')}</span></>}
      subtitle={t('brand_detail.parker.hub_subtitle')}
    />
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <div className="lg:col-span-8 p-12 bg-white/[0.01] border border-white/5 rounded-sm flex flex-col justify-between">
        <div>
          <div className="text-[9px] font-mono text-primary/40 uppercase tracking-[0.4em] mb-8">{t('brand_detail.parker.hub_lifecycle_tag')}</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: t('brand_detail.parker.hub_audit_label'), desc: t('brand_detail.parker.hub_audit_desc') },
              { label: t('brand_detail.parker.hub_design_label'), desc: t('brand_detail.parker.hub_design_desc') },
              { label: t('brand_detail.parker.hub_assembly_label'), desc: t('brand_detail.parker.hub_assembly_desc') }
            ].map((step, i) => (
              <div key={i}>
                <div className="text-[16px] text-primary font-[510] mb-4">{step.label}</div>
                <div className="text-[13px] text-text-secondary leading-relaxed opacity-60">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex items-center gap-4 text-primary group cursor-pointer">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em]">{t('brand_detail.parker.hub_discuss_project')}</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
      <div className="lg:col-span-4 bg-primary p-12 rounded-sm flex flex-col justify-between text-background">
        <Cpu className="w-12 h-12 mb-12 opacity-50" />
        <div>
          <h3 className="text-[24px] font-[590] leading-[1.2] mb-6 uppercase tracking-tight">{t('brand_detail.parker.parker_store_service')}</h3>
          <p className="text-[14px] leading-relaxed opacity-80 mb-8">
            {t('brand_detail.parker.parker_store_desc')}
          </p>
          <div className="w-full h-px bg-background/20 mb-8" />
          <div className="flex justify-between items-center text-[11px] font-mono uppercase">
            <span>{t('brand_detail.parker.stock_status')}</span>
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-background animate-pulse" />
              {t('brand_detail.parker.in_store')}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export const ParkerDetail = () => {
  const containerClass = "max-w-[1440px] mx-auto px-6 md:px-12";
  const { t } = useTranslation();
  
  return (
    <div className="selection:bg-primary/20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ParkerHero />
        
        <div className={containerClass}>
          <DistributorAdvantages />
          <TechGroups />
        </div>

        <VisualBreak src="/assets/images/distributor/Silver_metallic_pipe_fitting_thr…_202608251721.jpeg" />
        
        <div className={containerClass}>
          <ProductMatrix />
        </div>

        <VisualBreak src="/assets/images/distributor/Red_industrial_mechanical_gear_pump_202608251738.jpeg" />

        <div className={containerClass}>
          <EngineeringHub />
          
          {/* Contact CTA */}
          <section className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-sm border border-white/5 bg-[#050505] p-12 md:p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
            >
              {/* Background elements */}
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
              
              <div className="relative z-10 max-w-4xl">
                <div className="inline-flex items-center gap-3 px-2 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/10 rounded-sm mb-8">
                  <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-brand-yellow">{t('brand_detail.parker.cta_expertise_tag')}</span>
                </div>
                
                <h2 className="text-[32px] md:text-[56px] font-[590] leading-[1] tracking-[-0.04em] mb-10 text-primary uppercase">
                  {t('brand_detail.parker.cta_need_components')} <br />
                  <ParkerLogo className="h-16 md:h-24" showBox={false} />?
                </h2>
                
                <p className="text-[16px] md:text-[18px] font-[300] mb-12 text-text-secondary max-w-2xl leading-relaxed">
                  {t('brand_detail.parker.cta_warehouse_desc')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="h-14 px-10 bg-brand-yellow text-background font-[510] text-[12px] uppercase tracking-widest rounded-sm hover:bg-brand-yellow-hover transition-all flex items-center justify-center gap-4 shadow-lg shadow-brand-yellow/10">
                    {t('brand_detail.parker.cta_request_quote')} <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};
