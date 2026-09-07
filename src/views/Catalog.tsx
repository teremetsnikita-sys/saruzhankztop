import React, { useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Helmet } from "react-helmet-async";
import { ChevronRight, LayoutGrid, List, FileText, ArrowRight, Settings2, Box, Zap, Droplets, Settings, Activity } from "lucide-react";
import { FAMILIES, PRODUCT_TYPES, SERIES, BRANDS } from "../data/mockData";
import { useTranslation } from "react-i18next";
import { getLocalized } from "@/lib/utils";

export const Catalog: React.FC = () => {
  const { familySlug, typeSlug } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

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
    "Резьба": "specs.thread"
  };

  const currentFamily = useMemo(() => 
    FAMILIES.find(f => f.slug === familySlug),
    [familySlug]
  );

  const productTypes = useMemo(() => 
    currentFamily 
      ? PRODUCT_TYPES.filter(pt => pt.familyId === currentFamily.id)
      : [],
    [currentFamily]
  );

  const currentType = useMemo(() => 
    PRODUCT_TYPES.find(pt => pt.slug === typeSlug),
    [typeSlug]
  );

  const seriesToDisplay = useMemo(() => {
    if (currentType) {
      return SERIES.filter(s => s.productTypeId === currentType.id);
    }
    return [];
  }, [currentType]);

  const familyIcons: Record<string, any> = {
    "насос-гидравлический": <Droplets className="w-5 h-5" />,
    "hydraulic-valves": <Zap className="w-5 h-5" />,
    "фильтрация": <Settings className="w-5 h-5" />,
    "hydraulic-hose": <Box className="w-5 h-5" />,
    "leduc-accumulators": <Activity className="w-5 h-5" />,
    "leduc-motors": <Settings2 className="w-5 h-5" />,
    "leduc-micropumps": <Zap className="w-5 h-5" />,
    "leduc-pumps": <Droplets className="w-5 h-5" />,
  };

  // Хлебные крошки
  const Breadcrumbs = () => (
    <nav className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-600 mb-12">
      <Link to="/catalog" className="hover:text-white transition-colors whitespace-nowrap">{t('catalog.breadcrumb_catalog')}</Link>
      {currentFamily && (
        <>
          <ChevronRight className="w-3 h-3 text-neutral-800" />
          <Link 
            to={`/catalog/${familySlug}`} 
            className={`hover:text-white transition-colors whitespace-nowrap ${!typeSlug ? "text-brand-yellow" : ""}`}
          >
            {getLocalized(currentFamily.name, i18n.language)}
          </Link>
        </>
      )}
      {currentType && (
        <>
          <ChevronRight className="w-3 h-3 text-neutral-800" />
          <span className="text-brand-yellow whitespace-nowrap">{getLocalized(currentType.name, i18n.language)}</span>
        </>
      )}
    </nav>
  );

  // ВИД 1: ГЛАВНЫЙ КАТАЛОГ (Копии карточек с Главной страницы)
  if (!familySlug) {
    return (
      <div className="min-h-screen bg-background text-white pt-32 pb-24">
        <Helmet>
          <title>{`${t('catalog.main_catalog_title')} | Parker Distributor`}</title>
          <meta name="description" content="Explore Saruzhan Engineering's comprehensive catalog of industrial hydraulic components and engineering solutions." />
        </Helmet>
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="inline-flex items-center gap-3 px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/20 rounded-sm mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-yellow">{t('catalog.equipment_badge')}</span>
          </div>
          <h1 className="text-[42px] md:text-[110px] font-[590] tracking-[-0.05em] leading-[0.9] mb-24 uppercase">
            {t('catalog.main_catalog_title')}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FAMILIES.map((family, idx) => {
              const familyName = getLocalized(family.name, i18n.language);
              return (
                <Link 
                  key={family.slug}
                  to={`/catalog/${family.slug}`}
                  className="group relative flex flex-col h-[600px] bg-white/[0.01] border border-white/5 rounded-sm overflow-hidden transition-all duration-700 hover:border-brand-yellow/30 hover:bg-white/[0.02] hover:shadow-[0_20px_50px_-20px_rgba(234,179,8,0.1)]"
                >
                  <div className="relative h-[400px] w-full bg-black flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.03)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.06)_0%,transparent_60%)] transition-all duration-1000" />
                    <div className="absolute -right-4 -bottom-8 text-[120px] font-mono font-bold text-white/[0.02] select-none group-hover:text-white/[0.04] transition-colors duration-700">
                      0{idx + 1}
                    </div>
                    <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-1000 group-hover:scale-105">
                      <img 
                        src={family.image} 
                        alt={familyName}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  <div className="p-10 flex-1 flex flex-col justify-between border-t border-white/5">
                    <div>
                      <h3 className="text-[22px] font-[510] tracking-tight text-primary group-hover:text-brand-yellow transition-colors duration-300">
                        {familyName}
                      </h3>
                      <p className="text-[14px] text-text-secondary leading-relaxed font-normal line-clamp-3 opacity-80 group-hover:opacity-100 transition-opacity mt-4">
                        {getLocalized(family.description, i18n.language)}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-[12px] font-mono text-text-tertiary group-hover:text-primary transition-all duration-300 mt-6 pt-6 border-t border-white/[0.03]">
                      <span className="uppercase tracking-[0.2em]">{t('catalog.view_section')}</span>
                      <div className="h-px flex-1 bg-white/5 group-hover:bg-brand-yellow/20 transition-colors" />
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white pt-32 pb-20">
      <Helmet>
        <title>{`${currentType ? getLocalized(currentType.name, i18n.language) : getLocalized(currentFamily?.name, i18n.language)} | Saruzhan Engineering`}</title>
        <meta name="description" content={getLocalized(currentType?.description || currentFamily?.description, i18n.language).substring(0, 160)} />
      </Helmet>
      <div className="max-w-[1440px] mx-auto px-6">
        <Breadcrumbs />

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-24">
          <div className="max-w-4xl">
            <h1 className="text-[42px] md:text-[96px] font-[590] tracking-tighter leading-[0.9] mb-8 text-primary uppercase">
              {currentType ? getLocalized(currentType.name, i18n.language) : getLocalized(currentFamily?.name, i18n.language)}
            </h1>
            <p className="text-[18px] text-text-secondary leading-relaxed max-w-2xl font-normal opacity-80">
              {getLocalized(currentType?.description || currentFamily?.description, i18n.language)}
            </p>
          </div>
          {typeSlug && (
              <button className="flex items-center gap-3 px-8 py-5 border border-white/5 rounded-sm hover:bg-white/5 transition-all group shrink-0">
                <Settings2 className="w-5 h-5 text-neutral-600 group-hover:text-brand-yellow" />
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-neutral-400 group-hover:text-white">{t('catalog.tech_params')}</span>
              </button>
          )}
        </div>

        {/* УРОВЕНЬ 1: Карточки подкатегорий */}
        {!typeSlug ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productTypes.map((type, idx) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/[0.01] border border-white/5 group relative rounded-sm overflow-hidden flex flex-col h-[520px] transition-all duration-500 hover:border-brand-yellow/30"
              >
                <Link to={`/catalog/${familySlug}/${type.slug}`} className="flex flex-col h-full">
                  <div className="relative h-[300px] w-full bg-black flex items-center justify-center overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.02)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.04)_0%,transparent_60%)] transition-all duration-1000" />
                    {type.image ? (
                      <img
                        src={type.image}
                        alt={getLocalized(type.name, i18n.language)}
                        className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-4 text-text-tertiary/20 group-hover:text-accent/30 transition-all duration-500">
                        {familyIcons[familySlug || ""] || <Box className="w-16 h-16 stroke-[0.5]" />}
                      </div>
                    )}
                  </div>
                  <div className="p-10 flex-1 flex flex-col justify-between border-t border-white/5">
                    <div>
                      <h3 className="text-[20px] font-[510] tracking-tight text-primary group-hover:text-brand-yellow transition-colors duration-300">
                        {getLocalized(type.name, i18n.language)}
                      </h3>
                      <p className="text-[14px] text-text-secondary leading-relaxed mt-4 line-clamp-2 opacity-80">
                        {getLocalized(type.description, i18n.language)}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] font-mono text-text-tertiary group-hover:text-primary transition-all duration-300 mt-6 pt-6 border-t border-white/[0.03]">
                      <span className="uppercase tracking-[0.2em]">{t('catalog.show_series')}</span>
                      <div className="h-px flex-1 bg-white/5 group-hover:bg-brand-yellow/20 transition-colors" />
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          /* УРОВЕНЬ 2: Список серий */
          <div className="space-y-4">
            {seriesToDisplay.map((series) => (
              <motion.div
                key={series.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all group rounded-sm"
              >
                <Link 
                  to={`/catalog/${familySlug}/${typeSlug}/${series.slug}`}
                  className="flex flex-col md:flex-row items-center p-6 md:p-8 gap-10"
                >
                  <div className="w-full md:w-[280px] aspect-[16/10] bg-black shrink-0 flex items-center justify-center rounded-sm overflow-hidden border border-white/5">
                    {series.images && series.images.length > 0 ? (
                      <img
                        src={series.images[0]}
                        alt={getLocalized(series.name, i18n.language)}
                        className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-neutral-300">
                        {familyIcons[familySlug || ""] || <Box className="w-12 h-12 stroke-[1]" />}
                        <span className="text-[9px] uppercase tracking-widest font-bold opacity-30">No Image</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-grow flex items-center justify-between gap-12 w-full">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-brand-yellow/80 bg-brand-yellow/5 px-2 py-0.5 rounded-full border border-brand-yellow/10">
                          {BRANDS.find(b => b.id === series.brandId)?.name || "Parker"}
                        </span>
                      </div>
                      <h3 className="text-[20px] md:text-[28px] font-[510] mb-6 text-primary group-hover:text-brand-yellow transition-colors leading-tight tracking-tight">
                        {getLocalized(series.name, i18n.language)}
                      </h3>
                      <div className="flex flex-col gap-3">
                        {series.specRange && Object.entries(series.specRange).slice(0, 2).map(([key, val]) => (
                          <div key={key} className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-text-tertiary font-bold">
                              {specKeyMapping[key] ? t(specKeyMapping[key]) : key}
                            </span>
                            <span className="text-[15px] text-text-secondary font-medium">{getLocalized(val as any, i18n.language)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="shrink-0 hidden md:block">
                      <div className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center group-hover:border-brand-yellow/30 group-hover:bg-brand-yellow/10 transition-all">
                        <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-brand-yellow transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
