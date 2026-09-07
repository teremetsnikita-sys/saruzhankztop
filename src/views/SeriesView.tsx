import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { FileText, Download, ShoppingCart, CheckCircle2, ArrowLeft, Filter, ChevronRight, Cpu, Settings, Activity, ArrowRight } from "lucide-react";
import { ParkerLogo } from "../components/ParkerLogo";
import { SERIES, SKUS, BRANDS, PRODUCT_TYPES, FAMILIES } from "../data/mockData";
import { CATALOG_SKUS } from "../data/catalogItems";
import { useRFQ } from "../context/RFQContext";
import { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getLocalized } from "@/lib/utils";

export const SeriesView = () => {
  const { seriesSlug, familySlug, typeSlug } = useParams();
  const { t, i18n } = useTranslation();
  const [isLoading] = useState(false);

  const specKeyMapping: Record<string, string> = {
    "Pressure": "specs.pressure",
    "Давление": "specs.pressure",
    "Flow": "specs.flow",
    "Расход": "specs.flow",
    "Size": "specs.size",
    "Типоразмер": "specs.size",
    "Rotation": "specs.rotation",
    "Вращение": "specs.rotation",
    "Display": "specs.display",
    "Дисплей": "specs.display",
    "Channels": "specs.channels",
    "Каналы": "specs.channels",
    "Scan Frequency": "specs.scan_frequency",
    "Частота сканирования": "specs.scan_frequency",
    "Communication": "specs.communication",
    "Связь": "specs.communication",
    "Modularity": "specs.modularity",
    "Модульность": "specs.modularity",
    "Torque": "specs.torque",
    "Крутящий момент": "specs.torque",
    "Mounting": "specs.mounting",
    "Монтаж": "specs.mounting",
    "Gear Ratio": "specs.gear_ratio",
    "Передаточное число": "specs.gear_ratio",
    "Weight": "specs.weight",
    "Вес": "specs.weight",
    "Type": "specs.type",
    "Тип": "specs.type",
    "Power": "specs.power",
    "Мощность": "specs.power",
    "Speed": "specs.speed",
    "Скорость": "specs.speed",
    "Material": "specs.material",
    "Материал": "specs.material",
    "Thread": "specs.thread",
    "Резьба": "specs.thread",
    "Brand": "specs.brand",
    "Бренд": "specs.brand",
    "Category": "specs.category",
    "Категория": "specs.category",
    "Kind": "specs.type",
    "Вид": "specs.type"
  };

  // Helper to slugify names for URLs
  const slugify = (text: any) => {
    if (typeof text !== 'string') return '';
    return text.toLowerCase().replace(/[^a-z0-9а-яё]/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  };

  const series = useMemo(() => {
    const mockSeries = SERIES.find((s) => s.slug === seriesSlug);
    if (mockSeries) {
      const brand = BRANDS.find(b => b.id === mockSeries.brandId);
      return {
        ...mockSeries,
        specRange: {
          [t('specs.brand')]: brand?.id === 'b1' ? (
            <ParkerLogo className="h-[1.2em]" isInline={true} showBox={false} />
          ) : (
            <span className="font-bold text-brand-yellow">{brand?.name}</span>
          ),
          ...(mockSeries.specRange || {})
        }
      };
    }
    return undefined;
  }, [seriesSlug, t]);

  const { addItem, items } = useRFQ();
  const [filter, setFilter] = useState("");
  const [visibleCount, setVisibleCount] = useState(20);
  const navigate = useNavigate();

  const family = useMemo(() => FAMILIES.find(f => f.slug === familySlug), [familySlug]);
  const productType = useMemo(() => PRODUCT_TYPES.find(pt => pt.slug === typeSlug), [typeSlug]);

  if (!series) {
    if (isLoading) return (
      <div className="pt-40 px-4 text-center">
        <div className="inline-block w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin mb-6" />
        <div className="font-mono text-[11px] text-primary tracking-[0.3em] uppercase">{t('series.syncing')}</div>
      </div>
    );
    return <div className="pt-40 px-4 text-center font-mono text-text-tertiary">{t('series.not_found')}</div>;
  }

  const brand = useMemo(() => 
    BRANDS.find(b => b.id === (series as any)?.brandId) || 
    BRANDS.find(b => b.id === "b1") || 
    { name: "Parker", id: "b1" }, 
  [series]);
  
  const seriesSkus = useMemo(() => {
    // 1. Try to find in our "Iron Base" (catalogItems.ts)
    const localItems = CATALOG_SKUS.filter(item => item.seriesId === (series as any).id);
    
    // 2. Fallback to mock data if not in Iron Base yet
    const baseSkus = localItems.length > 0 ? localItems : SKUS.filter(sku => sku.seriesId === (series as any).id);
    
    // 3. Apply search filter
    return baseSkus.filter(sku => 
      sku.articleCode.toLowerCase().includes(filter.toLowerCase()) || 
      getLocalized(sku.description, i18n.language).toLowerCase().includes(filter.toLowerCase())
    );
  }, [series, filter, i18n.language]);

  const displayedSkus = useMemo(() => {
    return seriesSkus.slice(0, visibleCount);
  }, [seriesSkus, visibleCount]);

  const hasMore = seriesSkus.length > visibleCount;

  return (
    <div className="pt-32 pb-24 bg-[#050505] min-h-screen selection:bg-brand-yellow/30">
      <Helmet>
        <title>{`${t(getLocalized(series.name, i18n.language))} | Saruzhan Engineering`}</title>
        <meta name="description" content={`${t(getLocalized(series.name, i18n.language))} - ${getLocalized(series.descriptionHtml, i18n.language).substring(0, 160)}`} />
        <meta property="og:title" content={`${t(getLocalized(series.name, i18n.language))} | Parker Distributor`} />
        <meta property="og:description" content={getLocalized(series.descriptionHtml, i18n.language).substring(0, 160)} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] font-mono text-white/30 mb-16 uppercase tracking-[0.3em]">
          <Link to="/catalog" className="hover:text-brand-yellow transition-colors">{t('catalog.breadcrumb_catalog')}</Link>
          <ChevronRight className="w-3 h-3 opacity-20" />
          {familySlug && (
            <>
              <Link to={`/catalog/${familySlug}`} className="hover:text-brand-yellow transition-colors">
                {family ? t(getLocalized(family.name, i18n.language)).toUpperCase() : familySlug.replace(/-/g, '_').toUpperCase()}
              </Link>
              <ChevronRight className="w-3 h-3 opacity-20" />
            </>
          )}
          {typeSlug && (
            <>
              <Link to={`/catalog/${familySlug}/${typeSlug}`} className="hover:text-brand-yellow transition-colors">
                {productType ? t(getLocalized(productType.name, i18n.language)).toUpperCase() : typeSlug.replace(/-/g, '_').toUpperCase()}
              </Link>
              <ChevronRight className="w-3 h-3 opacity-20" />
            </>
          )}
          <span className="text-brand-yellow/60 truncate max-w-[200px] md:max-w-none">{t(getLocalized(series.name, i18n.language)).toUpperCase()}</span>
        </nav>

        {/* Section 1: Product Hero */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-[10px] font-mono uppercase tracking-[0.4em] rounded-sm">
                 {brand?.name}
               </div>
               <div className="h-3 w-px bg-white/10" />
               <span className="text-[10px] text-white/50 uppercase tracking-[0.3em] font-mono">{t('series.overview')}</span>
            </div>
            
            <h1 className="text-[64px] md:text-[110px] font-[590] mb-8 tracking-[-0.06em] text-white leading-[0.85]">
              {t(getLocalized(series.name, i18n.language))}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mt-12 mb-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/rfq')}
                className="px-10 py-5 bg-brand-yellow text-black font-bold uppercase text-[12px] tracking-[0.2em] flex items-center gap-3 hover:bg-white transition-colors"
              >
                {t('series.order_project')}
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => addItem({ 
                  skuId: (series as any).id, 
                  articleCode: getLocalized(series.name, 'ru'), 
                  seriesName: getLocalized(series.name, i18n.language)
                }, 1)}
                className="px-10 py-5 bg-transparent border border-white/10 text-white font-bold uppercase text-[12px] tracking-[0.2em] flex items-center gap-3 transition-all"
              >
                <ShoppingCart className="w-4 h-4 text-brand-yellow" />
                {t('series.add_to_cart')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section: Full-width Panoramic Visualization (Outside main container) */}
      <section className="w-full relative group overflow-hidden border-y border-white/5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative h-[50vh] md:h-[80vh] w-full bg-[#08090A]"
        >
          <img 
            src={series.images[0] && series.images[0] !== "/placeholder.png" ? series.images[0] : "/assets/images/products/pumps/vane/Series_T6_,_T67__&_T7__202608271453 (1).jpeg"} 
            alt={getLocalized(series.name, i18n.language)} 
            className="w-full h-full object-cover transition-all duration-[2.5s] ease-out scale-105 group-hover:scale-100"
          />
          
          {/* Subtle Ambient Gradients for Depth without text */}
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#050505] via-[#050505]/40 to-transparent opacity-80" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-80" />
        </motion.div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section 2: Technical Description & Specs */}
        <section className="mb-48 relative pt-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Technical Brief - Left Side */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-brand-yellow/20" />
                <div className="pl-8">
                  <h2 className="text-[42px] md:text-[56px] font-[590] text-white tracking-[-0.04em] leading-[0.95] mb-12 uppercase">
                    {t('series.description_and_specs')}
                  </h2>
                  <p className="text-[18px] text-white/50 leading-relaxed font-[300] tracking-tight max-w-lg mb-12">
                    {getLocalized(series.descriptionHtml, i18n.language)}
                  </p>

                  {/* Market Badges */}
                  {series.markets && (
                    <div className="flex flex-wrap gap-3">
                      {series.markets.map(market => (
                        <span key={getLocalized(market, 'ru')} className="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-sm text-[10px] font-mono text-white/40 uppercase tracking-widest">
                          {getLocalized(market, i18n.language)}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Precision Data Matrix - Right Side */}
            <div className="lg:col-span-7">
              <div className="space-y-12">
                {series.specRange && Object.entries(series.specRange).map(([key, value], index) => (
                  <motion.div 
                    key={key}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group"
                  >
                    <div className="flex items-end justify-between mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="text-brand-yellow/40 font-mono text-[10px]">0{index + 1}</span>
                          <span className="text-white/30 text-[11px] font-mono uppercase tracking-[0.2em]">
                            {specKeyMapping[key] ? t(specKeyMapping[key]) : key}
                          </span>
                        </div>
                        <p className="text-[38px] md:text-[52px] font-[590] text-white tracking-tighter leading-none">
                          {typeof value === 'string' || typeof value === 'number' 
                            ? t(value.toString()) 
                            : (value as any).$$typeof 
                              ? (value as any) 
                              : getLocalized(value as any, i18n.language)}
                        </p>
                      </div>
                    </div>
                    
                    {/* Measurement Line */}
                    <div className="relative h-[1px] w-full bg-white/5">
                      {/* Scale Ticks */}
                      <div className="absolute inset-0 flex justify-between">
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className="w-[1px] h-1 bg-white/10" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Features & Benefits - Architectural Layout */}
        {(series.features || series.benefits) && (
          <section className="mb-48 border-t border-white/5 pt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-32">
              
              {/* Technical Features Column */}
              {series.features && (
                <div className="space-y-16">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-[2px] bg-brand-yellow" />
                    <h3 className="text-[11px] font-mono text-brand-yellow uppercase tracking-[0.5em] font-bold">{t('series.tech_features')}</h3>
                    <p className="text-[14px] text-white/30 font-mono uppercase tracking-widest mt-2">{t('series.eng_specs')}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-px bg-white/5 border border-white/5 overflow-hidden">
                    {series.features.map((feature, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-[#050505] p-8 relative group hover:bg-white/[0.02] transition-colors"
                      >
                        {/* Technical Accent - Top Left Crosshair */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/10 group-hover:border-brand-yellow/30 transition-colors" />
                        
                        <div className="flex items-start gap-8">
                          <div className="flex flex-col items-center gap-2">
                             <span className="text-[10px] font-mono text-white/10 group-hover:text-brand-yellow/40 transition-colors">F_{i+1}</span>
                             <div className="w-[1px] h-8 bg-white/5 group-hover:bg-brand-yellow/20 transition-colors" />
                          </div>
                          <p className="text-[20px] font-[450] text-white/80 group-hover:text-white transition-colors leading-tight tracking-tight">
                            {getLocalized(feature, i18n.language)}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Operational Benefits Column */}
              {series.benefits && (
                <div className="space-y-16 lg:mt-32">
                  <div className="flex flex-col gap-4 items-end text-right">
                    <div className="w-12 h-[2px] bg-brand-yellow" />
                    <h3 className="text-[11px] font-mono text-brand-yellow uppercase tracking-[0.5em] font-bold">{t('series.ops_benefits')}</h3>
                    <p className="text-[14px] text-white/30 font-mono uppercase tracking-widest mt-2">{t('series.ops_excellence')}</p>
                  </div>

                  <div className="space-y-4">
                    {series.benefits.map((benefit, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 border border-white/5 rounded-sm hover:border-brand-yellow/20 transition-all group relative overflow-hidden"
                      >
                        {/* Background Slide Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow/[0.02] to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                        
                        <div className="flex items-center gap-8 relative z-10">
                          <div className="w-2 h-2 bg-brand-yellow/20 group-hover:bg-brand-yellow group-hover:scale-125 transition-all rounded-full" />
                          <p className="text-[18px] text-white/60 group-hover:text-white transition-colors leading-relaxed font-[300]">
                            {getLocalized(benefit, i18n.language)}
                          </p>
                        </div>

                        {/* Right Decorative Element */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                           <div className="w-8 h-[1px] bg-brand-yellow/30" />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Operational Summary Badge */}
                  <div className="mt-12 p-8 bg-brand-yellow/[0.02] border border-brand-yellow/10 rounded-sm">
                    <p className="text-[12px] text-brand-yellow/60 leading-relaxed font-mono uppercase tracking-wider">
                      {t('series.ops_summary')}
                    </p>
                  </div>
                </div>
              )}

            </div>
          </section>
        )}

        {/* Section: Applications - Visual Grid */}
        {series.applications && (
          <section className="mb-48 border-t border-white/5 pt-24">
            <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/3">
                <h3 className="text-[32px] md:text-[42px] font-[590] text-white tracking-tight leading-none mb-8">
                  {t('series.applications_title').split(' ').map((word, i) => <span key={i}>{word}{i === 0 && <br />}</span>)}
                </h3>
                <p className="text-[16px] text-white/40 leading-relaxed max-w-xs">
                  {t('series.applications_desc')}
                </p>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                {series.applications.map((app, i) => (
                  <div 
                    key={i}
                    className="p-8 bg-white/[0.02] border border-white/5 rounded-sm hover:border-brand-yellow/20 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono text-brand-yellow/40 group-hover:text-brand-yellow transition-colors">APP_{i+1}</span>
                      <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-brand-yellow transition-all" />
                    </div>
                    <p className="text-[20px] font-[510] text-white/80 group-hover:text-white transition-colors">{getLocalized(app, i18n.language)}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}


        {/* Section 3: Selection Matrix */}
        <section id="selection-matrix" className="mb-48">
           <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20">
              <div className="max-w-2xl">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-[10px] font-mono uppercase tracking-[0.4em] rounded-sm">
                      {t('series.selection_matrix_badge')}
                    </div>
                    <div className="h-3 w-px bg-white/10" />
                    <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-mono">{t('series.config_base')}</span>
                 </div>
                 <h2 className="text-[42px] md:text-[56px] font-[590] tracking-tight text-white leading-[1.05]">{t('series.tech_mods')}</h2>
                 <p className="text-[18px] text-white/50 mt-6 leading-relaxed font-[300] tracking-tight">
                    {t('series.selection_desc_prefix')} <span className="text-brand-yellow font-medium">{seriesSkus.length} {t('series.selection_desc_suffix')}</span>
                 </p>
              </div>
              <div className="relative w-full lg:max-w-md">
                 <Filter className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-yellow/70" />
                 <input 
                   type="text" 
                   placeholder={t('series.search_placeholder')}
                   value={filter}
                   onChange={(e) => {
                     setFilter(e.target.value);
                     setVisibleCount(20);
                   }}
                   className="w-full bg-[#08090A] border border-white/10 rounded-sm py-6 pl-16 pr-6 text-[12px] font-mono tracking-[0.2em] text-white focus:outline-none focus:border-brand-yellow/40 transition-all placeholder:text-white/40"
                 />
              </div>
           </div>

           <div className="relative">
             <div className="bg-[#08090A] border border-white/5 rounded-sm overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-white/[0.02] text-[10px] font-mono text-white/30 uppercase tracking-[0.4em] border-b border-white/5">
                        <th className="px-12 py-8">{t('series.table_sku')}</th>
                        <th className="px-12 py-8">{t('series.table_desc')}</th>
                        <th className="px-12 py-8">{t('series.table_status')}</th>
                        <th className="px-12 py-8 text-right">{t('series.table_config')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {displayedSkus.map((sku) => {
                        const isInCart = items.some(i => i.skuId === sku.id);
                        return (
                          <tr key={sku.id} className="group hover:bg-white/[0.01] transition-all duration-300">
                            <td className="px-12 py-12">
                              <span className="text-[18px] font-mono font-bold text-white tracking-tighter group-hover:text-brand-yellow transition-colors block mb-1">
                                {sku.articleCode}
                              </span>
                              <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">{t('common.type_id')}: {sku.id.substring(0, 8)}</span>
                            </td>
                            <td className="px-12 py-12">
                              <p className="text-[16px] text-white/70 mb-8 font-[300] leading-relaxed max-w-md tracking-tight group-hover:text-white transition-colors">{t(getLocalized(sku.description, i18n.language))}</p>
                              <div className="flex flex-wrap gap-x-12 gap-y-6">
                                {sku.attributes && Object.entries(sku.attributes).map(([k, v]) => {
                                  const attributeKeyMap: Record<string, string> = {
                                    "Типоразмер": "specs.size",
                                    "Вращение": "specs.rotation",
                                    "Крутящий момент": "specs.torque",
                                    "Монтаж": "specs.mounting",
                                    "Передаточное число": "specs.ratio",
                                    "Вес": "specs.weight",
                                    "Тип": "specs.type",
                                    "Масса": "specs.weight",
                                    "Бренд": "specs.brand",
                                    "Категория": "specs.category"
                                  };
                                  
                                  const valueKeyMap: Record<string, string> = {
                                    "Правое": "specs.right",
                                    "Левое": "specs.left",
                                    "Различные варианты": "specs.various_options",
                                    "8 болтов": "specs.bolts_8"
                                  };

                                  const label = attributeKeyMap[k] ? t(attributeKeyMap[k]) : k;
                                  const val = typeof v === 'string' && valueKeyMap[v] ? t(valueKeyMap[v]) : v as string;

                                  return (
                                    <div key={k} className="flex flex-col gap-1.5">
                                      <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]">{label}</span>
                                      <span className="text-[13px] font-mono text-white group-hover:text-brand-yellow transition-colors">{val}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </td>
                            <td className="px-12 py-12">
                              {sku.availability === "in_stock" ? (
                                <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-yellow/5 border border-brand-yellow/10 rounded-sm">
                                  <div className="w-1.5 h-1.5 rounded-sm bg-brand-yellow animate-pulse shadow-[0_0_8px_rgba(255,184,0,0.4)]" />
                                  <span className="text-[10px] font-mono font-bold text-brand-yellow uppercase tracking-[0.2em]">{t('series.in_stock')}</span>
                                </div>
                              ) : (
                                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/[0.02] border border-white/5 rounded-sm">
                                  <div className="w-1.5 h-1.5 rounded-sm bg-white/10" />
                                  <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-[0.2em]">{t('series.on_order')}</span>
                                </div>
                              )}
                            </td>
                            <td className="px-12 py-12 text-right">
                              <div className="flex items-center justify-end gap-6">
                                <div className="flex items-center border border-white/10 rounded-sm bg-white/[0.02] h-12">
                                  <button 
                                    onClick={() => {
                                      const el = document.getElementById(`qty-${sku.id}`) as HTMLInputElement;
                                      if (el) el.value = Math.max(1, parseInt(el.value) - 1).toString();
                                    }}
                                    className="w-10 h-full flex items-center justify-center hover:bg-brand-yellow/10 transition-colors text-text-secondary hover:text-brand-yellow"
                                  >
                                    -
                                  </button>
                                  <input 
                                    id={`qty-${sku.id}`}
                                    type="number" 
                                    defaultValue="1"
                                    min="1"
                                    className="w-12 h-full bg-transparent text-center text-[14px] font-mono text-primary border-x border-white/10 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                  />
                                  <button 
                                    onClick={() => {
                                      const el = document.getElementById(`qty-${sku.id}`) as HTMLInputElement;
                                      if (el) el.value = (parseInt(el.value) + 1).toString();
                                    }}
                                    className="w-10 h-full flex items-center justify-center hover:bg-brand-yellow/10 transition-colors text-text-secondary hover:text-brand-yellow"
                                  >
                                    +
                                  </button>
                                </div>
                                <button 
                                  onClick={() => {
                                    const el = document.getElementById(`qty-${sku.id}`) as HTMLInputElement;
                                    const qty = el ? parseInt(el.value) : 1;
                                    addItem({ skuId: sku.id, articleCode: sku.articleCode, seriesName: getLocalized(series.name, i18n.language) }, qty);
                                  }}
                                  className="inline-flex items-center justify-center gap-4 h-12 px-8 bg-white text-black hover:bg-brand-yellow active:scale-[0.98] transition-all font-bold text-[11px] font-mono uppercase tracking-[0.2em] rounded-sm group/btn"
                                >
                                  <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                  <span>{isInCart ? t('series.add_more') : t('series.add_to_cart')}</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
             </div>

             {hasMore && (
               <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent flex items-end justify-center pb-12 pointer-events-none">
                 <div className="flex gap-6 pointer-events-auto">
                   <button 
                     onClick={() => setVisibleCount(prev => prev + 50)}
                     className="h-14 px-10 bg-[#0A0B0C] border border-white/5 rounded-sm text-[11px] font-mono uppercase tracking-[0.3em] text-white/40 hover:text-white hover:border-white/20 transition-all shadow-2xl"
                   >
                     {t('series.show_more')}
                   </button>
                   <button 
                     onClick={() => setVisibleCount(seriesSkus.length)}
                     className="h-14 px-10 bg-brand-yellow/5 border border-brand-yellow/20 rounded-sm text-[11px] font-mono uppercase tracking-[0.3em] text-brand-yellow hover:bg-brand-yellow hover:text-black transition-all shadow-2xl"
                   >
                     {t('series.expand_all')}
                   </button>
                 </div>
               </div>
             )}

             {!hasMore && seriesSkus.length > 20 && (
               <div className="mt-12 flex justify-center">
                 <button 
                   onClick={() => {
                     setVisibleCount(20);
                     const element = document.getElementById('selection-matrix');
                     element?.scrollIntoView({ behavior: 'smooth' });
                   }}
                   className="h-14 px-10 bg-white/[0.02] border border-white/5 rounded-sm text-[11px] font-mono uppercase tracking-[0.3em] text-white/20 hover:text-white transition-all"
                 >
                   {t('series.collapse')}
                 </button>
               </div>
             )}
           </div>
        </section>

        {/* Global CTA */}
        <section className="mb-20">
          <div className="relative overflow-hidden rounded-sm border border-white/5 bg-[#050505] p-12 md:p-24 shadow-[0_48px_96px_-12px_rgba(0,0,0,0.8)] group">
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-yellow/[0.02] rounded-full blur-[200px] -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:bg-brand-yellow/[0.04] transition-colors duration-700" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-brand-yellow/40" />
            
            <div className="relative z-10 max-w-5xl text-left">
              <div className="flex items-center gap-4 mb-12">
                <div className="px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-[10px] font-mono uppercase tracking-[0.4em] rounded-sm">
                  {t('series.cta_badge')}
                </div>
                <div className="h-3 w-px bg-white/10" />
                <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-mono">{t('series.cta_consulting')}</span>
              </div>

              <h2 className="text-[48px] md:text-[96px] font-[590] tracking-[-0.05em] leading-[0.92] text-white mb-16">
                {t('series.cta_title_1')} <br /><span className="text-white/10">{t('series.cta_title_2')}</span>
              </h2>
              
              <p className="text-[20px] md:text-[24px] text-white/50 mb-20 max-w-3xl leading-relaxed font-[300] tracking-tight">
                {t('series.cta_desc')} 
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-12">
                <button 
                  onClick={() => navigate("/request")}
                  className="h-20 px-16 bg-white text-black font-bold rounded-sm text-[14px] uppercase tracking-[0.2em] hover:bg-brand-yellow transition-all flex items-center justify-center gap-6 group shadow-2xl shadow-brand-yellow/10"
                >
                  {t('series.cta_button')}
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex flex-col">
                   <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] mb-2">{t('series.cta_hotline')}</span>
                   <a href="tel:+77072001059" className="text-[28px] font-bold text-white hover:text-brand-yellow transition-colors leading-none tracking-tighter">
                     +7 707 200 10 59
                   </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

};
