import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { 
  Settings2, 
  Layers, 
  Zap, 
  Droplets, 
  Activity, 
  Shield, 
  ChevronRight, 
  Package, 
  Globe, 
  History,
  Scale,
  Microscope,
  Gauge,
  Timer,
  Factory,
  Award,
  Truck,
  Plane,
  ShieldCheck
} from "lucide-react";
import { SaruzhanFullLogo } from "./SaruzhanFullLogo";

const SectionHeader = ({ tag, title, subtitle, light = false, fullWidth = false }: { tag: string; title: React.ReactNode; subtitle?: string; light?: boolean; fullWidth?: boolean }) => (
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

// Block 1: Leduc Hero Section
const LeducHero = () => {
  const { t } = useTranslation();
  return (
  <section className="relative pt-24 text-center overflow-hidden mb-0">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/[0.03] rounded-full blur-[140px] pointer-events-none" />
    
    <div className="max-w-4xl mx-auto px-6 relative z-10 mb-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-8"
      >
        <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] md:text-[12px] font-[510] text-primary uppercase tracking-[0.1em]">
          {t('brand_detail.leduc.hero_rep_tag')}
        </span>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[42px] md:text-[72px] font-[590] text-primary leading-[0.95] tracking-[-0.05em] mb-10 uppercase"
      >
        {t('brand_detail.leduc.hero_title_1')} <br />
        <span className="text-text-secondary/20">{t('brand_detail.leduc.hero_title_2')}</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-[16px] md:text-[20px] font-[300] leading-relaxed text-text-secondary max-w-2xl mx-auto mb-16 opacity-80"
      >
        {t('brand_detail.leduc.hero_desc')}
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-3xl mx-auto border-t border-white/5 pt-12"
      >
        {[
          { label: t('brand_detail.leduc.founded_label'), val: t('brand_detail.leduc.founded_val') },
          { label: t('brand_detail.leduc.patents_label'), val: t('brand_detail.leduc.patents_val') },
          { label: t('brand_detail.leduc.warranty_label'), val: t('brand_detail.leduc.warranty_val') },
          { label: t('brand_detail.leduc.region_label'), val: t('brand_detail.leduc.region_val') }
        ].map((spec, i) => (
          <div key={i} className="text-left">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-secondary/50 mb-3">{spec.label}</div>
            <div className="text-[20px] md:text-[24px] font-[590] text-primary tracking-tight">{spec.val}</div>
          </div>
        ))}
      </motion.div>
    </div>

    <div className="w-full h-[65vh] md:h-[80vh] overflow-hidden relative border-y border-white/5 bg-[#050505]">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10 opacity-60" />
        <img 
          src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2000" 
          alt="Hydro Leduc Manufacturing"
          className="w-full h-full object-cover grayscale opacity-40 contrast-125"
        />
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
      </motion.div>
    </div>
  </section>
  );
};

// Block 2: Timeline
const HistoryTimeline = () => {
  const { t } = useTranslation();
  const events = t('brand_detail.leduc.history_events', { returnObjects: true }) as any[];

  return (
    <section className="py-40 relative">
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 pointer-events-none hidden lg:block" />
      
      <SectionHeader 
        tag={t('brand_detail.leduc.history_tag')}
        title={<>{t('brand_detail.leduc.history_title_1')} <br /><span className="text-text-secondary/20">{t('brand_detail.leduc.history_title_2')}</span></>}
        subtitle={t('brand_detail.leduc.history_subtitle')}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
        {events.map((ev, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="relative group"
          >
            {/* Year Indicator */}
            <div className="mb-10 flex items-center gap-4">
              <span className="text-[10px] font-mono text-primary/40 group-hover:text-primary transition-colors">0{i + 1}</span>
              <div className="h-px w-8 bg-white/10 group-hover:bg-primary/30 transition-all group-hover:w-12" />
            </div>

            <div className="relative z-10">
              <div className="text-[42px] md:text-[56px] font-[590] text-primary tracking-tighter leading-none mb-6 group-hover:text-primary group-hover:scale-105 origin-left transition-all duration-700">
                {ev.year}
              </div>
              <h4 className="text-[13px] font-mono uppercase tracking-[0.2em] text-primary/60 mb-6 group-hover:text-primary transition-colors">
                {ev.title}
              </h4>
              <p className="text-[14px] text-text-secondary leading-relaxed font-light opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                {ev.desc}
              </p>
            </div>

            {/* Decorative background number */}
            <div className="absolute -bottom-10 -right-4 text-[100px] font-mono font-bold text-white/[0.02] select-none group-hover:text-white/[0.05] transition-colors pointer-events-none">
              {ev.year.slice(-2)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Block 3: Micro-hydraulics
const MicroHydraulics = () => {
  const { t } = useTranslation();
  const specs = t('brand_detail.leduc.micro_specs', { returnObjects: true }) as any[];
  const components = t('brand_detail.leduc.micro_components', { returnObjects: true }) as any[];

  return (
    <section className="mb-48 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left Column: Context & Stats */}
        <div className="lg:col-span-5 sticky top-32">
          <SectionHeader 
            tag={t('brand_detail.leduc.micro_tag')}
            title={<>{t('brand_detail.leduc.micro_title_1')} <br /><span className="text-text-secondary/20">{t('brand_detail.leduc.micro_title_2')}</span></>}
            subtitle={t('brand_detail.leduc.micro_subtitle')}
          />
          
          <div className="mt-16 space-y-px bg-white/5 border border-white/5">
            {specs.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 flex flex-col gap-4 group hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[10px] font-mono text-primary/40 uppercase tracking-[0.2em] mb-1">{s.detail}</div>
                    <div className="text-[14px] text-text-secondary/60 group-hover:text-text-secondary transition-colors">{s.label}</div>
                  </div>
                  <div className="text-[28px] md:text-[32px] font-[590] text-primary tracking-tighter">{s.val}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Component Modules */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {components.map((comp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-10 group relative overflow-hidden"
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 p-8 text-[40px] font-mono font-bold text-white/[0.01] group-hover:text-white/[0.03] transition-colors select-none">
                  {comp.id}
                </div>
                
                <div className="relative z-10">
                  <div className="w-8 h-px bg-primary/20 mb-8 group-hover:w-12 group-hover:bg-primary/50 transition-all" />
                  <h4 className="text-[18px] font-[590] text-primary mb-6 uppercase tracking-tight">{comp.title}</h4>
                  <p className="text-[14px] text-text-secondary leading-relaxed font-light opacity-60 group-hover:opacity-100 transition-opacity">
                    {comp.desc}
                  </p>
                  
                  <div className="mt-10 flex items-center gap-2 text-[10px] font-mono text-primary/40 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <span>{t('brand_detail.leduc.view_tech_data')}</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-10 bg-[#090A0B] border border-white/5 rounded-sm relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-md">
                <div className="text-[10px] font-mono text-primary/40 uppercase tracking-[0.4em] mb-4">{t('brand_detail.leduc.micro_banner_tag')}</div>
                <h5 className="text-[16px] font-[590] text-primary mb-2 uppercase">{t('brand_detail.leduc.micro_banner_title')}</h5>
                <p className="text-[13px] text-text-secondary font-light opacity-60">
                  {t('brand_detail.leduc.micro_banner_desc')}
                </p>
              </div>
              <button className="whitespace-nowrap h-12 px-6 border border-white/10 text-[11px] font-mono uppercase tracking-widest text-primary hover:bg-primary hover:text-background transition-all">
                {t('brand_detail.leduc.micro_banner_button')}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Block 4: Product Matrix
const ProductShowcase = () => {
  const { t } = useTranslation();
  const categories = (t('brand_detail.leduc.catalog_categories', { returnObjects: true }) as any[]).map((cat, i) => {
    const icons = [
      <Settings2 key="0" className="w-5 h-5" />,
      <Droplets key="1" className="w-5 h-5" />,
      <Gauge key="2" className="w-5 h-5" />,
      <Timer key="3" className="w-5 h-5" />,
      <Shield key="4" className="w-5 h-5" />,
      <Zap key="5" className="w-5 h-5" />
    ];
    return { ...cat, icon: icons[i] || icons[0] };
  });

  return (
    <section className="mb-48">
      <SectionHeader 
        tag={t('brand_detail.leduc.catalog_tag')}
        title={<>{t('brand_detail.leduc.catalog_title_1')} <br /><span className="text-text-secondary/20">{t('brand_detail.leduc.catalog_title_2')}</span></>}
        subtitle={t('brand_detail.leduc.catalog_subtitle')}
        fullWidth
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background p-12 group hover:bg-white/[0.01] transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-12">
                <div className="w-10 h-10 rounded-sm bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                  {cat.icon}
                </div>
                <div className="text-[9px] font-mono text-primary/30 uppercase tracking-[0.2em] group-hover:text-primary/60 transition-colors">
                  {t('brand_detail.leduc.category_prefix', 'Category')}_0{i + 1}
                </div>
              </div>
              
              <h4 className="text-[20px] font-[590] text-primary mb-6 uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                {cat.title}
              </h4>
              
              <p className="text-[14px] text-text-secondary leading-relaxed font-light opacity-60 group-hover:opacity-100 transition-opacity mb-10">
                {cat.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5">
              {(cat.specs as string[]).map((spec, si) => (
                <span key={si} className="px-2 py-1 bg-white/[0.03] text-[9px] font-mono text-primary/50 uppercase tracking-wider rounded-sm group-hover:text-primary/80 group-hover:bg-primary/5 transition-all">
                  {spec}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Block 5: Industry Application
const IndustryContext = () => {
  const { t } = useTranslation();
  const industries = (t('brand_detail.leduc.industry_list', { returnObjects: true }) as any[]).map((ind, i) => {
    const icons = [
      <Factory key="0" className="w-8 h-8" />,
      <Droplets key="1" className="w-8 h-8" />,
      <Truck key="2" className="w-8 h-8" />,
      <Plane key="3" className="w-8 h-8" />
    ];
    const images = [
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1586864387917-f5814902fb35?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1559297434-2d8a37aee977?auto=format&fit=crop&q=80&w=800"
    ];
    return { ...ind, icon: icons[i] || icons[0], image: images[i] || images[0] };
  });

  return (
    <section className="mb-48">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
        <SectionHeader 
          tag={t('brand_detail.leduc.industry_tag')}
          title={<>{t('brand_detail.leduc.industry_title_1')} <br /><span className="text-text-secondary/20">{t('brand_detail.leduc.industry_title_2')}</span></>}
          subtitle={t('brand_detail.leduc.industry_subtitle')}
        />
        <div className="hidden lg:block h-px flex-1 bg-white/5 mx-12 mb-12" />
        <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-primary/30 mb-12">
          {t('brand_detail.leduc.sector_dist')}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {industries.map((ind, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-sm border border-white/5 bg-[#050505]"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src={ind.image} 
                alt={ind.sector}
                className="w-full h-full object-cover grayscale opacity-20 group-hover:scale-110 group-hover:opacity-30 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full p-10 md:p-14 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-primary/40 group-hover:text-primary group-hover:border-primary/30 transition-all duration-500">
                  {ind.icon}
                </div>
                <div className="text-right">
                  <div className="text-[9px] font-mono text-primary/20 uppercase tracking-[0.4em] mb-2">{t('brand_detail.leduc.sector_uid')}</div>
                  <div className="text-[14px] font-mono text-primary/40">00{i + 1}</div>
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] mb-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  {ind.tag}
                </div>
                <h4 className="text-[32px] md:text-[42px] font-[590] text-primary leading-[1] uppercase tracking-tight mb-10">
                  {ind.sector}
                </h4>
                
                <div className="flex flex-wrap gap-x-8 gap-y-4 pt-10 border-t border-white/5 translate-y-10 group-hover:translate-y-0 transition-transform duration-700">
                  {(ind.apps as string[]).map((app, ai) => (
                    <div key={ai} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-primary/30" />
                      <span className="text-[13px] text-text-secondary/60 group-hover:text-text-secondary transition-colors font-light">
                        {app}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none overflow-hidden">
              <div className="absolute top-0 right-0 w-[141%] h-px bg-white/10 rotate-45 translate-x-1/2 -translate-y-1/2" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Block 6: Unique Solutions
const UniqueSolutions = () => {
  const { t } = useTranslation();
  return (
  <section className="mb-48 relative overflow-hidden">
    <SectionHeader 
      tag={t('brand_detail.leduc.unique_tag')}
      title={<>{t('brand_detail.leduc.unique_title_1')} <br /><span className="text-text-secondary/30">{t('brand_detail.leduc.unique_title_2')}</span></>}
      subtitle={t('brand_detail.leduc.unique_subtitle')}
    />
    
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      {/* Solution 1 */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-7 group relative"
      >
        <div className="absolute inset-0 bg-primary/[0.02] border border-white/5 rounded-sm group-hover:bg-primary/[0.04] transition-all duration-700" />
        <div className="relative p-12 md:p-16">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 mb-16">
            <div className="max-w-md">
              <div className="w-12 h-12 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-10 group-hover:scale-110 transition-transform duration-700">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-[28px] md:text-[36px] font-[590] text-primary mb-6 leading-tight uppercase tracking-tight">
                {t('brand_detail.leduc.unique_sol1_title')}
              </h4>
              <p className="text-[15px] text-text-secondary leading-relaxed font-light opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                {t('brand_detail.leduc.unique_sol1_desc')}
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              {[
                { label: t('brand_detail.leduc.label_safety'), val: t('brand_detail.leduc.status_lock') },
                { label: t('brand_detail.leduc.label_sealing'), val: t('brand_detail.leduc.status_hermetic') },
                { label: t('brand_detail.leduc.label_load'), val: t('brand_detail.leduc.status_any_pos') }
              ].map((item, i) => (
                <div key={i} className="text-right">
                  <div className="text-[9px] font-mono text-primary/30 uppercase tracking-[0.2em]">{item.label}</div>
                  <div className="text-[13px] text-primary font-[510] tracking-tight">{item.val}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-12 border-t border-white/5">
            {(t('brand_detail.leduc.unique_sol1_apps', { returnObjects: true }) as string[]).map((app, i) => (
              <span key={i} className="px-3 py-1 bg-white/[0.03] text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest rounded-sm border border-white/5 group-hover:text-primary/60 transition-colors">
                {app}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Solution 2 */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="lg:col-span-5 group relative"
      >
        <div className="absolute inset-0 bg-white/[0.01] border border-white/5 rounded-sm group-hover:bg-primary/[0.03] transition-all duration-700" />
        <div className="relative p-12 md:p-16 h-full flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-10 group-hover:rotate-12 transition-transform duration-700">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-[28px] font-[590] text-primary mb-6 leading-tight uppercase tracking-tight">
              {t('brand_detail.leduc.unique_sol2_title')}
            </h4>
            <p className="text-[14px] text-text-secondary leading-relaxed font-light opacity-60 group-hover:opacity-100 transition-opacity duration-500 mb-12">
              {t('brand_detail.leduc.unique_sol2_desc')}
            </p>
          </div>

          <div className="space-y-8">
            <div className="p-6 bg-background/50 border border-white/5 rounded-sm group-hover:border-primary/20 transition-colors">
              <div className="text-[9px] font-mono text-primary/40 uppercase tracking-[0.3em] mb-3">{t('brand_detail.leduc.efficiency_metric')}</div>
              <div className="text-[14px] text-primary font-[510]">{t('brand_detail.leduc.zero_energy')}</div>
            </div>
            
            <div className="flex items-center gap-4 text-primary group-hover:translate-x-2 transition-transform cursor-pointer">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em]">{t('brand_detail.leduc.view_tech_data')}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  );
};

// Block 7: Integration Services
const IntegrationHub = () => {
  const { t } = useTranslation();
  return (
    <section className="mb-48">
      {/* Title section with a wide technical header */}
      <div className="mb-20 flex flex-col lg:flex-row items-end justify-between gap-12 border-l-2 border-primary pl-8 py-4">
        <div className="max-w-2xl">
          <div className="text-[11px] font-mono text-primary/40 uppercase tracking-[0.5em] mb-4">{t('brand_detail.leduc.eng_header_tag')}</div>
          <h3 className="text-[42px] md:text-[68px] font-[590] leading-[0.9] uppercase tracking-tighter text-primary">
            {t('brand_detail.leduc.eng_title_1')} <br />
            {t('brand_detail.leduc.eng_title_2')}
          </h3>
        </div>
        <div className="max-w-md text-left lg:text-right">
          <p className="text-[15px] font-light text-text-secondary opacity-60 leading-relaxed">
            {t('brand_detail.leduc.eng_subtitle')}
          </p>
        </div>
      </div>

      {/* The Modular Engineering Bento */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">
        
        {/* Module 01: Hero / Design (Large) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-8 bg-white/[0.02] border border-white/10 rounded-sm p-12 relative overflow-hidden group flex flex-col justify-between"
        >
          {/* Scanning Laser Animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <motion.div 
              animate={{ y: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-full h-px bg-primary/40 shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"
            />
          </div>

          <div className="absolute top-0 right-0 p-12 text-[140px] font-[900] text-white/[0.02] leading-none select-none group-hover:text-primary/[0.03] transition-colors duration-700">01</div>
          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center text-primary group-hover:rotate-90 transition-transform duration-700">
                <Settings2 size={20} strokeWidth={1.5} />
              </div>
              <div className="text-[12px] font-mono text-primary uppercase tracking-widest">{t('brand_detail.leduc.eng_mod1_tag')}</div>
            </div>
            <h4 className="text-[32px] md:text-[44px] font-[590] text-primary mb-6 uppercase tracking-tight max-w-lg">
              {t('brand_detail.leduc.eng_mod1_title_1')} <br /><span className="text-white/20 group-hover:text-white/40 transition-colors">{t('brand_detail.leduc.eng_mod1_title_2')}</span>
            </h4>
            <p className="text-[16px] font-light text-text-secondary opacity-60 max-w-md leading-relaxed">
              {t('brand_detail.leduc.eng_mod1_desc')}
            </p>
          </div>
            <div className="mt-12 flex gap-12 items-center">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-mono text-primary/40 uppercase">{t('brand_detail.leduc.diag_tolerance')}</span>
                <span className="text-[14px] font-mono text-primary">±0.005mm</span>
              </div>
              <div className="w-px h-8 bg-white/5" />
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-mono text-primary/40 uppercase">{t('brand_detail.leduc.diag_mapping')}</span>
                <span className="text-[14px] font-mono text-primary">{t('brand_detail.leduc.diag_lidar')}</span>
              </div>
            </div>
        </motion.div>

        {/* Module 02: Vertical Spec / Fluid (Tall) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-4 bg-[#080808] border border-white/5 rounded-sm p-10 flex flex-col justify-between group hover:border-primary/20 transition-all duration-500"
        >
          <div>
            <div className="text-[130px] font-[900] text-white/[0.02] absolute -right-4 top-0 select-none">02</div>
            <Droplets className="text-primary mb-12 group-hover:scale-110 transition-transform duration-700" size={32} strokeWidth={1} />
            <h5 className="text-[22px] font-[590] text-primary uppercase mb-6 tracking-tight">{t('brand_detail.leduc.eng_mod2_title').split(' ').join(' \n')}</h5>
            <p className="text-[14px] font-light text-text-secondary/60 leading-relaxed mb-10">
              {t('brand_detail.leduc.eng_mod2_desc')}
            </p>
            <div className="space-y-4">
              {[t('brand_detail.leduc.diag_label_press'), t('brand_detail.leduc.diag_label_flow'), "Oil_ISO_32"].map((s, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-[10px] font-mono text-text-secondary/30 uppercase">{s}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 h-20 bg-primary/5 rounded-sm border border-primary/10 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-20 flex items-center gap-1 px-4">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i} className="w-0.5 bg-primary" style={{ height: `${Math.random() * 80}%` }} />
                ))}
             </div>
             <span className="relative z-10 text-[9px] font-mono text-primary uppercase tracking-[0.2em]">{t('brand_detail.leduc.flow_stability')}</span>
          </div>
        </motion.div>

        {/* Module 03: Horizontal / Control (Medium) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-5 bg-white/[0.01] border border-white/5 rounded-sm p-10 relative group"
        >
          <div className="flex items-center gap-6 mb-8">
            <Zap className="text-primary opacity-30 group-hover:opacity-100 transition-opacity" size={24} />
            <div className="h-px flex-1 bg-white/5" />
            <span className="text-[12px] font-mono text-primary/40">PHASE_03</span>
          </div>
          <h5 className="text-[24px] font-[590] text-primary uppercase mb-6 tracking-tight">{t('brand_detail.leduc.eng_mod3_title')}</h5>
          <p className="text-[14px] font-light text-text-secondary/60 leading-relaxed mb-8">
            {t('brand_detail.leduc.eng_mod3_desc')}
          </p>
          <div className="flex flex-wrap gap-3">
             {[t('brand_detail.leduc.ctrl_logic'), "CAN_J1939", t('brand_detail.leduc.sensor_grid')].map((t, i) => (
               <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-sm text-[9px] font-mono text-text-secondary/40 uppercase">
                 {t}
               </span>
             ))}
          </div>
        </motion.div>

        {/* Module 04: Testing / CTA (Highlight) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-7 bg-primary/[0.03] border border-primary/20 rounded-sm p-12 relative overflow-hidden group"
        >
          <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000 rotate-12">
            <Shield size={256} />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 h-full">
            <div className="flex-1">
              <div className="text-[110px] font-[900] text-primary/[0.05] absolute -left-4 top-0 select-none">04</div>
              <h5 className="text-[26px] font-[590] text-primary uppercase mb-6 tracking-tight relative z-10">{t('brand_detail.leduc.eng_mod4_title').split(' ').join(' \n')}</h5>
              <p className="text-[15px] font-light text-text-secondary/70 leading-relaxed relative z-10">
                {t('brand_detail.leduc.eng_mod4_desc')}
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
               <button className="w-full h-16 px-10 bg-primary text-background font-[510] text-[12px] uppercase tracking-[0.3em] rounded-sm hover:brightness-110 transition-all shadow-[0_0_40px_rgba(var(--primary-rgb),0.1)]">
                 {t('brand_detail.leduc.eng_mod4_button')}
               </button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* R&D Global Link Banner */}
      <div className="mt-12 p-8 bg-white/[0.01] border border-white/5 rounded-sm flex flex-col lg:flex-row items-center justify-between gap-12 group">
        <div className="flex items-center gap-8">
           <div className="p-4 bg-primary/5 rounded-full border border-primary/10">
              <Award className="w-8 h-8 text-primary opacity-40" />
           </div>
           <div>
              <div className="text-[11px] font-mono text-primary/40 uppercase tracking-[0.4em] mb-2">{t('brand_detail.leduc.eng_rd_banner_tag')}</div>
              <p className="text-[14px] text-text-secondary/60 font-light max-w-lg">
                 {t('brand_detail.leduc.eng_rd_banner_desc')}
              </p>
           </div>
        </div>
        <div className="flex items-center gap-4 text-[11px] font-mono text-primary/30 uppercase tracking-[0.3em]">
           <span>Azerailles [FR]</span>
           <div className="w-12 h-px bg-white/10" />
           <span className="text-primary animate-pulse">{t('common.almaty')} [KZ]</span>
        </div>
      </div>
    </section>
  );
};

// Block 8: Quality & Certification
const Certification = () => {
  const { t } = useTranslation();
  const certs = t('brand_detail.leduc.quality_certs', { returnObjects: true }) as any[];

  return (
    <section className="mb-48">
      <SectionHeader 
        tag={t('brand_detail.leduc.quality_tag')}
        title={<>{t('brand_detail.leduc.quality_title_1')} <br /><span className="text-text-secondary/20">{t('brand_detail.leduc.quality_title_2')}</span></>}
        subtitle={t('brand_detail.leduc.quality_subtitle')}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Warranty Card */}
        <div className="p-12 bg-primary/5 border border-primary/20 rounded-sm relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000">
            <Award size={192} />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono text-primary/40 uppercase tracking-[0.4em] mb-12">{t('brand_detail.leduc.quality_warranty_tag')}</div>
              <h4 className="text-[32px] font-[590] text-primary mb-6 leading-[1.1] uppercase tracking-tight">
                {t('brand_detail.leduc.quality_warranty_title').split(' ').slice(0, 2).join(' ')} <br />{t('brand_detail.leduc.quality_warranty_title').split(' ').slice(2).join(' ')}
              </h4>
              <p className="text-[14px] text-text-secondary leading-relaxed opacity-60">
                {t('brand_detail.leduc.quality_warranty_desc')}
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-primary/60">{t('brand_detail.leduc.quality_warranty_badge')}</span>
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {certs.map((c, i) => (
            <div key={i} className="p-8 border border-white/5 bg-white/[0.01] hover:border-white/10 transition-colors flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="text-[18px] font-[590] text-primary group-hover:translate-x-1 transition-transform">{c.label}</div>
                  <span className="px-2 py-0.5 bg-primary/5 text-[9px] font-mono text-primary uppercase tracking-widest rounded-sm border border-primary/10">
                    {c.status}
                  </span>
                </div>
                <p className="text-[13px] text-text-secondary font-light opacity-50 mb-4">{c.desc}</p>
              </div>
              <div className="text-[10px] font-mono text-text-secondary/30 uppercase tracking-widest">{c.loc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const LeducDetail = () => {
  const containerClass = "max-w-[1440px] mx-auto px-6 md:px-12";
  const { t } = useTranslation();
  
  return (
    <div className="selection:bg-primary/20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <LeducHero />
        
        <div className={containerClass}>
          <HistoryTimeline />
          <MicroHydraulics />
          <ProductShowcase />
          <UniqueSolutions />
          <IndustryContext />
          <IntegrationHub />
          <Certification />
          
          {/* Contact CTA */}
          <section className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-sm border border-white/5 bg-[#050505] p-12 md:p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] group"
            >
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[140px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />
              
              <div className="relative z-10 max-w-4xl">
                <div className="inline-flex items-center gap-3 px-2 py-1 bg-primary/[0.03] border border-primary/10 rounded-sm mb-8">
                  <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-primary">{t('brand_detail.leduc.cta_tag')}</span>
                </div>
                
                <h2 className="text-[32px] md:text-[56px] font-[590] leading-[1] tracking-[-0.04em] mb-10 text-primary uppercase">
                  {t('brand_detail.leduc.cta_title_1')} <br />
                  <span className="text-text-secondary/20">{t('brand_detail.leduc.cta_title_2')}</span>
                </h2>
                
                <p className="text-[16px] md:text-[18px] font-[300] mb-12 text-text-secondary max-w-2xl leading-relaxed opacity-60">
                  {t('brand_detail.leduc.cta_desc')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="h-14 px-10 bg-primary text-background font-[510] text-[12px] uppercase tracking-widest rounded-sm hover:brightness-110 transition-all flex items-center justify-center gap-4">
                    {t('brand_detail.leduc.cta_button_1')} <ChevronRight className="w-4 h-4" />
                  </button>
                  <button className="h-14 px-10 bg-white/[0.03] text-primary border border-white/10 font-[510] text-[12px] uppercase tracking-widest rounded-sm hover:bg-white/[0.08] transition-all">
                    {t('brand_detail.leduc.cta_button_2')}
                  </button>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 p-12 opacity-[0.02] text-primary pointer-events-none group-hover:scale-105 transition-transform duration-[3s]">
                <Globe size={300} />
              </div>
            </motion.div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};
