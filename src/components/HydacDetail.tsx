import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Droplets, 
  Activity, 
  Cpu, 
  Thermometer, 
  Database,
  Layers,
  Package,
  Wrench,
  Settings,
  Globe,
  ExternalLink,
  CircleDot,
  LayoutGrid,
  ChevronRight
} from "lucide-react";

// Section Header Helper
const SectionHeader = ({ tag, title, subtitle, light = false, fullWidth = true }: { tag: string; title: string | React.ReactNode; subtitle?: string; light?: boolean; fullWidth?: boolean }) => (
  <div className="mb-16">
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-3 px-2 py-0.5 bg-primary/[0.03] border border-primary/10 rounded-sm mb-6"
    >
      <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-primary">{tag}</span>
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

// Block 1: Hydac Hero Section
const HydacHero = () => {
  const { t } = useTranslation();
  return (
  <section className="relative pt-24 text-center overflow-hidden mb-0">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/[0.03] rounded-full blur-[140px] pointer-events-none" />
    
    <div className="max-w-4xl mx-auto px-6 relative z-10 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-3 px-2 py-0.5 bg-primary/[0.03] border border-primary/10 rounded-sm mb-10"
      >
        <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-primary">{t('brand_detail.hydac.hero_tag')}</span>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-[42px] md:text-[64px] font-[590] text-primary leading-[1] tracking-[-0.05em] mb-10 uppercase"
      >
        {t('brand_detail.hydac.hero_title_1')} <br />
        <span className="text-text-secondary/20">{t('brand_detail.hydac.hero_title_2')}</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[16px] md:text-[18px] font-[300] leading-relaxed text-text-secondary max-w-xl mx-auto mb-16 opacity-80"
      >
        {t('brand_detail.hydac.hero_desc')}
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-x-12 gap-y-8 border-t border-white/5 pt-12"
      >
        {[
          { label: t('brand_detail.hydac.founded_label'), val: "1963" },
          { label: t('brand_detail.hydac.employees_label'), val: "9,500+" },
          { label: t('brand_detail.hydac.offices_label'), val: "50+" },
          { label: t('brand_detail.hydac.cert_label'), val: "ISO 9001" }
        ].map((spec, i) => (
          <div key={i} className="text-left">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-secondary/50 mb-3">{spec.label}</div>
            <div className="text-[20px] md:text-[24px] font-[590] text-primary tracking-tight">{spec.val}</div>
          </div>
        ))}
      </motion.div>
    </div>

    {/* Hero Background Image / Visual - EDGE TO EDGE */}
    <div className="w-full h-[60vh] md:h-[70vh] overflow-hidden relative border-y border-white/5 bg-[#050505]">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10 opacity-60" />
        <img 
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000" 
          alt="Hydac Industry"
          className="w-full h-full object-cover grayscale opacity-50 contrast-125"
        />
      </motion.div>
    </div>
  </section>
  );
};

// Block 2: Hydac Vision Section
const HydacVision = () => {
  const { t } = useTranslation();
  return (
  <section className="py-32">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-[32px] md:text-[56px] font-[590] text-primary leading-[1] tracking-[-0.04em] uppercase"
      >
        {t('brand_detail.hydac.vision_title_1')} <br />
        <span className="text-text-secondary/20">{t('brand_detail.hydac.vision_title_2')}</span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-[15px] md:text-[18px] font-[300] text-text-secondary leading-[1.6] opacity-60 lg:pt-2"
      >
        {t('brand_detail.hydac.vision_desc')}
      </motion.p>
    </div>
  </section>
  );
};

// Block 3: Core Systems Matrix
const SystemsMatrix = () => {
  const { t } = useTranslation();
  return (
  <section className="mb-32">
    <SectionHeader 
      tag={t('brand_detail.hydac.systems_tag')}
      title={t('brand_detail.hydac.systems_title')}
      subtitle={t('brand_detail.hydac.systems_desc')}
    />
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
      {[
        { 
          title: t('brand_detail.hydac.sys_hydraulics_title'), 
          icon: <Droplets className="w-5 h-5" />, 
          desc: t('brand_detail.hydac.sys_hydraulics_desc'),
        },
        { 
          title: t('brand_detail.hydac.sys_electronics_title'), 
          icon: <Cpu className="w-5 h-5" />, 
          desc: t('brand_detail.hydac.sys_electronics_desc'),
        },
        { 
          title: t('brand_detail.hydac.sys_cooling_title'), 
          icon: <Thermometer className="w-5 h-5" />, 
          desc: t('brand_detail.hydac.sys_cooling_desc'),
        }
      ].map((system, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-background p-10 group hover:bg-white/[0.02] transition-all duration-500"
        >
          <div className="w-10 h-10 rounded-sm bg-white/[0.03] border border-white/5 flex items-center justify-center mb-8 group-hover:border-primary/30 transition-all text-text-secondary group-hover:text-primary">
            {system.icon}
          </div>
          <h4 className="text-[16px] font-[510] text-primary mb-4 uppercase tracking-tight">{system.title}</h4>
          <p className="text-[14px] text-text-secondary leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">{system.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
  );
};

// Block 3: Product Universe
const ProductUniverse = () => {
  const { t } = useTranslation();
  const products = [
    t('brand_detail.hydac.products.accumulators'),
    t('brand_detail.hydac.products.filters'),
    t('brand_detail.hydac.products.process_filters'),
    t('brand_detail.hydac.products.coolers'),
    t('brand_detail.hydac.products.valves'),
    t('brand_detail.hydac.products.pressure_sensors'),
    t('brand_detail.hydac.products.position_sensors'),
    t('brand_detail.hydac.products.magnet_tech'),
    t('brand_detail.hydac.products.cylinders'),
    t('brand_detail.hydac.products.pumps'),
    t('brand_detail.hydac.products.fittings'),
    t('brand_detail.hydac.products.valves_armature'),
    t('brand_detail.hydac.products.auto_filters'),
    t('brand_detail.hydac.products.spiral_filters'),
    t('brand_detail.hydac.products.gas_filters')
  ];

  return (
    <section className="mb-32 p-12 md:p-24 rounded-sm bg-[#090A0B] border border-white/5 overflow-hidden relative group">
      <div className="absolute top-0 right-0 p-24 opacity-[0.02] text-primary group-hover:opacity-[0.05] transition-opacity duration-1000">
        <Package className="w-64 h-64" />
      </div>
      
      <div className="relative z-10">
        <SectionHeader 
          tag={t('brand_detail.hydac.product_universe_tag')}
          title={<>{t('brand_detail.hydac.product_universe_title_1')} <br /><span className="text-text-secondary/30">{t('brand_detail.hydac.product_universe_title_2')}</span></>}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-6">
          {products.map((product, i) => (
            <div key={i} className="flex items-center gap-4 group cursor-default">
              <div className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-primary transition-colors" />
              <span className="text-[15px] text-text-secondary font-[300] group-hover:text-primary transition-colors">{product}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Block 4: Accumulator Technology Showcase
const AccumulatorShowcase = () => {
  const { t } = useTranslation();
  return (
  <section className="mb-32">
    <SectionHeader 
      tag={t('brand_detail.hydac.acc_tag')}
      title={<>{t('brand_detail.hydac.acc_title_1')} <br /><span className="text-[#8A8F98]/30">{t('brand_detail.hydac.acc_title_2')}</span></>}
      subtitle={t('brand_detail.hydac.acc_subtitle')}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
      {[
        { title: t('brand_detail.hydac.acc_bladder'), desc: t('brand_detail.hydac.acc_bladder_desc'), icon: <Database className="w-5 h-5" /> },
        { title: t('brand_detail.hydac.acc_piston'), desc: t('brand_detail.hydac.acc_piston_desc'), icon: <Layers className="w-5 h-5" /> },
        { title: t('brand_detail.hydac.acc_diaphragm'), desc: t('brand_detail.hydac.acc_diaphragm_desc'), icon: <CircleDot className="w-5 h-5" /> },
        { title: t('brand_detail.hydac.acc_dampers'), desc: t('brand_detail.hydac.acc_dampers_desc'), icon: <Activity className="w-5 h-5" /> },
        { title: t('brand_detail.hydac.acc_bellows'), desc: t('brand_detail.hydac.acc_bellows_desc'), icon: <ShieldCheck className="w-5 h-5" /> },
        { title: t('brand_detail.hydac.acc_safety'), desc: t('brand_detail.hydac.acc_safety_desc'), icon: <Settings className="w-5 h-5" /> },
        { title: t('brand_detail.hydac.acc_nitrogen'), desc: t('brand_detail.hydac.acc_nitrogen_desc'), icon: <Zap className="w-5 h-5" /> },
        { title: t('brand_detail.hydac.acc_stations'), desc: t('brand_detail.hydac.acc_stations_desc'), icon: <LayoutGrid className="w-5 h-5" /> },
        { title: t('brand_detail.hydac.acc_accs'), desc: t('brand_detail.hydac.acc_accs_desc'), icon: <Wrench className="w-5 h-5" /> }
      ].map((item, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="bg-[#08090A] p-10 group hover:bg-white/[0.02] transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-sm bg-white/[0.03] border border-white/5 flex items-center justify-center text-[#8A8F98] mb-8 group-hover:border-[#E5E5E6]/30 group-hover:text-[#E5E5E6] transition-all">
            {item.icon}
          </div>
          <h4 className="text-[18px] font-[510] text-[#E5E5E6] mb-3 tracking-tight">{item.title}</h4>
          <p className="text-[14px] text-[#8A8F98] leading-relaxed opacity-50 group-hover:opacity-100 transition-opacity">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
  );
};

// Block 5: Filtration & Fluid Care
const FiltrationSection = () => {
  const { t } = useTranslation();
  return (
  <section className="mb-32">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
      <div className="lg:col-span-7">
        <SectionHeader 
          tag={t('brand_detail.hydac.fluid_tag')}
          title={<>{t('brand_detail.hydac.fluid_title_1')} <br /><span className="text-text-secondary/30">{t('brand_detail.hydac.fluid_title_2')}</span></>}
        />
        <div className="grid grid-cols-1 gap-6">
          {[
            { label: t('brand_detail.hydac.fluid_cat_types'), items: t('brand_detail.hydac.fluid_cat_types_items', { returnObjects: true }) as string[] },
            { label: t('brand_detail.hydac.fluid_cat_cleaning'), items: t('brand_detail.hydac.fluid_cat_cleaning_items', { returnObjects: true }) as string[] },
            { label: t('brand_detail.hydac.fluid_cat_auto'), items: t('brand_detail.hydac.fluid_cat_auto_items', { returnObjects: true }) as string[] }
          ].map((category, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-sm bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors group"
            >
              <div className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-[0.2em] mb-6 group-hover:text-primary/40 transition-colors">{category.label}</div>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, j) => (
                  <span key={j} className="px-4 py-2 rounded-sm bg-white/[0.03] border border-white/5 text-[13px] text-[#D0D6E0] font-[300]">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="lg:col-span-5"
      >
        <div className="relative aspect-[4/5] bg-background rounded-sm overflow-hidden border border-white/5">
           <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
            alt="Hydac Filtration"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute bottom-12 left-12 right-12">
            <div className="text-[10px] font-mono text-primary/40 uppercase tracking-[0.3em] mb-6">{t('brand_detail.insight_analysis')}</div>
            <p className="text-[16px] text-[#D0D6E0] leading-relaxed italic font-[300] opacity-80">
              "{t('brand_detail.hydac.fluid_quote')}"
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  );
};

// Block 6: Interactive Diagnostic Suite
const DiagnosticSuite = () => {
  const { t } = useTranslation();
  return (
  <section className="mb-32">
    <SectionHeader 
      tag={t('brand_detail.hydac.diag_tag')}
      title={<>{t('brand_detail.hydac.diag_title_1')} <br /><span className="text-text-secondary/30">{t('brand_detail.hydac.diag_title_2')}</span></>}
      subtitle={t('brand_detail.hydac.diag_subtitle')}
    />
    
    <div className="p-12 md:p-24 rounded-sm bg-[#090A0B] border border-white/5 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-24 opacity-[0.01] text-primary group-hover:opacity-[0.03] transition-opacity duration-1000">
        <Activity className="w-48 h-48" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: t('brand_detail.hydac.diag_particle'), desc: t('brand_detail.hydac.diag_particle_desc'), icon: <Layers className="w-5 h-5" /> },
            { label: t('brand_detail.hydac.diag_water'), desc: t('brand_detail.hydac.diag_water_desc'), icon: <Droplets className="w-5 h-5" /> },
            { label: t('brand_detail.hydac.diag_express'), desc: t('brand_detail.hydac.diag_express_desc'), icon: <Zap className="w-5 h-5" /> },
            { label: t('brand_detail.hydac.diag_cabinet'), desc: t('brand_detail.hydac.diag_cabinet_desc'), icon: <ShieldCheck className="w-5 h-5" /> }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-sm bg-white/[0.01] border border-white/5 hover:border-primary/20 transition-all group/card"
            >
              <div className="text-text-secondary group-hover/card:text-primary transition-colors mb-6">{item.icon}</div>
              <div className="text-[16px] text-primary font-[510] mb-2">{item.label}</div>
              <div className="text-[13px] text-text-secondary opacity-50">{item.desc}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-background rounded-sm p-12 border border-white/5 font-mono text-[11px] text-text-secondary/60 space-y-4">
          <div className="text-[9px] text-text-secondary/40 uppercase tracking-[0.4em] mb-8">{t('brand_detail.live_data')}</div>
          {[
            { label: t('brand_detail.hydac.diag_label_partic'), val: "ISO 14/12/9", status: t('brand_detail.hydac.diag_status_ok') },
            { label: t('brand_detail.hydac.diag_label_water'), val: "12%", status: t('brand_detail.hydac.diag_status_optimal') },
            { label: t('brand_detail.hydac.diag_label_temp'), val: "+52.4 C", status: t('brand_detail.hydac.diag_status_stable') },
            { label: t('brand_detail.hydac.diag_label_press'), val: "245.8 BAR", status: t('brand_detail.hydac.diag_status_active') },
            { label: t('brand_detail.hydac.diag_label_flow'), val: "120 L/MIN", status: t('brand_detail.hydac.diag_status_constant') },
            { label: t('brand_detail.hydac.diag_label_sensor'), val: "HYD-CS1000", status: t('brand_detail.hydac.diag_status_online') }
          ].map((data, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex justify-between py-4 border-b border-white/5 last:border-0"
            >
              <span className="text-text-secondary/40">{">"} {data.label}:</span>
              <div className="flex gap-6">
                <span className="text-[#D0D6E0]">{data.val}</span>
                <span className="text-primary/20">[{data.status}]</span>
              </div>
            </motion.div>
          ))}
          <div className="pt-8 text-primary/10 animate-pulse uppercase tracking-[0.2em] text-[9px]">{t('brand_detail.monitoring_active')}</div>
        </div>
      </div>
    </div>
  </section>
  );
};

// Block 7: Engineering Hub
const EngineeringHub = () => {
  const { t } = useTranslation();
  return (
  <section className="mb-32">
    <SectionHeader 
      tag={t('brand_detail.hydac.eng_tag')}
      title={<>{t('brand_detail.hydac.eng_title_1')} <br /><span className="text-[#8A8F98]/30">{t('brand_detail.hydac.eng_title_2')}</span></>}
      subtitle={t('brand_detail.hydac.eng_subtitle')}
    />
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
      <div className="p-12 md:p-20 bg-[#08090A]">
        <div className="space-y-6">
          {(t('brand_detail.hydac.eng_list', { returnObjects: true }) as string[]).map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 group"
            >
              <CheckCircle2 className="w-5 h-5 text-[#E5E5E6]/20 group-hover:text-[#E5E5E6] transition-colors" />
              <span className="text-[15px] text-[#D0D6E0] font-[300] opacity-80 group-hover:opacity-100 transition-opacity">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-12 bg-[#08090A] flex flex-col justify-between hover:bg-white/[0.02] transition-all duration-700 group"
        >
          <Layers className="w-10 h-10 text-[#8A8F98]/20 mb-16 group-hover:text-[#E5E5E6]/20 transition-all" />
          <div>
            <h4 className="text-[24px] font-[510] text-[#E5E5E6] mb-4 tracking-tight">{t('brand_detail.hydac.eng_stations_title')}</h4>
            <p className="text-[11px] text-[#8A8F98]/40 leading-relaxed uppercase tracking-[0.2em] font-mono">
              {t('brand_detail.hydac.eng_stations_desc')}
            </p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-12 bg-[#08090A] flex flex-col justify-between hover:bg-white/[0.02] transition-all duration-700 group"
        >
          <Wrench className="w-10 h-10 text-[#E5E5E6]/20 mb-16 group-hover:text-[#E5E5E6]/40 transition-all" />
          <div>
            <h4 className="text-[24px] font-[510] text-[#E5E5E6] mb-4 tracking-tight">{t('brand_detail.hydac.eng_service_title')}</h4>
            <p className="text-[11px] text-[#E5E5E6]/40 leading-relaxed uppercase tracking-[0.2em] font-mono">
              {t('brand_detail.hydac.eng_service_desc')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export const HydacDetail = () => {
  const containerClass = "max-w-[1440px] mx-auto px-6 md:px-12";
  const { t } = useTranslation();
  
  return (
    <div className="selection:bg-primary/20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HydacHero />
        
        <div className={containerClass}>
          <HydacVision />
          <SystemsMatrix />
          <ProductUniverse />
          <AccumulatorShowcase />
          <FiltrationSection />
          <DiagnosticSuite />
          <EngineeringHub />
          
          {/* Contact CTA - Matching ServiceDetailView Style */}
          <section className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-sm border border-white/5 bg-[#050505] p-12 md:p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] group"
            >
              {/* Background elements */}
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[140px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />
              
              <div className="relative z-10 max-w-4xl">
                <div className="inline-flex items-center gap-3 px-2 py-1 bg-primary/[0.03] border border-primary/10 rounded-sm mb-8">
                  <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-primary">{t('brand_detail.contact_expertise')}</span>
                </div>
                
                <h2 className="text-[32px] md:text-[56px] font-[590] leading-[1] tracking-[-0.04em] mb-10 text-primary uppercase">
                  {t('brand_detail.hydac.cta_need_solution')} <br />
                  <span className="text-text-secondary/20">{t('brand_detail.hydac.cta_from_hydac')}</span>
                </h2>
                
                <p className="text-[16px] md:text-[18px] font-[300] mb-12 text-text-secondary max-w-2xl leading-relaxed opacity-60">
                  {t('brand_detail.hydac.cta_desc_full')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="h-14 px-10 bg-primary text-background font-[510] text-[12px] uppercase tracking-widest rounded-sm hover:brightness-110 transition-all flex items-center justify-center gap-4">
                    {t('brand_detail.hydac.cta_contact_engineer')} <ChevronRight className="w-4 h-4" />
                  </button>
                  <button className="h-14 px-10 bg-white/[0.03] text-primary border border-white/10 font-[510] text-[12px] uppercase tracking-widest rounded-sm hover:bg-white/[0.08] transition-all">
                    {t('brand_detail.hydac.cta_download_catalog')}
                  </button>
                </div>
              </div>

              {/* Large Decorative Icon in Background */}
              <div className="absolute bottom-0 right-0 p-12 opacity-[0.02] text-primary pointer-events-none group-hover:scale-105 transition-transform duration-[3s]">
                <Globe className="w-[300px] h-[300px]" />
              </div>
            </motion.div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};
