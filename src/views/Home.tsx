/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { LocalizedString } from "../types";
import { 
  Search, 
  ArrowRight, 
  Shield, 
  Settings, 
  Settings2,
  Droplets, 
  Zap, 
  Box, 
  Activity, 
  Wrench, 
  ShieldCheck, 
  FileText,
  Mountain, 
  Sprout, 
  RefreshCw,
  Terminal,
  Command,
  ChevronRight,
  LayoutGrid,
  Layers,
  Globe,
  MessageSquare,
  ArrowUpRight,
  ShoppingCart,
  Clock,
  FileCheck,
  ChevronDown,
  X,
  Download,
  Factory,
  Plus,
  Check
} from "lucide-react";
import { WireframeRVD, WireframeFittings, WireframeDiagnostic } from '@/components/ServiceWireframes';
import { ParkerLogo } from '@/components/ParkerLogo';
import { FAMILIES, BRANDS, INDUSTRIES, SERIES, PRODUCT_TYPES } from "../data/mockData";
import { CATALOG_SKUS } from "../data/catalogItems";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { getLocalized } from "@/lib/utils";
import { useRFQ } from "@/context/RFQContext";

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { addItem } = useRFQ();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const dynamicCategories = FAMILIES;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSuggestions(true);
    }
  };

  const suggestions = React.useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (query.length < 2) return [];
    
    return CATALOG_SKUS.filter(item => 
      item.articleCode.toLowerCase().includes(query) || 
      getLocalized(item.description, i18n.language).toLowerCase().includes(query)
    ).slice(0, 8).map(sku => {
      const series = SERIES.find(s => s.id === sku.seriesId);
      return { ...sku, seriesName: getLocalized(series?.name, i18n.language) || t('common.other') };
    });
  }, [searchQuery, i18n.language]);

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

  return (
    <div className="relative pt-32 pb-20 bg-background overflow-hidden selection:bg-brand-yellow/30 selection:text-primary">
      <Helmet>
        <title>Saruzhan Engineering | Official Parker Distributor</title>
        <meta name="description" content="Authorized Parker distributor in Kazakhstan. Expert engineering, 10,000+ SKUs of hydraulic pumps, valves, filters, and hoses." />
      </Helmet>
      {/* Background radial highlight */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_10%_20%,_rgba(234,179,8,0.03)_0%,_transparent_25%)] pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-6 mb-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-12"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
              <div className="max-w-4xl">
                <h1 className="mb-8 text-[42px] md:text-[110px] font-[590] tracking-[-0.05em] leading-[1.1] md:leading-[0.9] text-primary">
                  {t('home.hero_title')}
                </h1>
                <p className="text-[16px] md:text-[22px] text-text-secondary leading-relaxed md:leading-tight font-normal max-w-2xl mb-10 opacity-80">
                  {t('home.hero_subtitle')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/catalog"
                    className="h-14 px-10 bg-brand-yellow text-background font-bold rounded-sm hover:bg-brand-yellow-hover transition-all flex items-center justify-center gap-3 group text-[15px] uppercase tracking-wider"
                  >
                    {t('home.open_catalog')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/rfq"
                    className="h-14 px-10 bg-white/5 border border-white/10 text-white font-bold rounded-sm hover:bg-white/10 transition-all flex items-center justify-center text-[15px] uppercase tracking-wider"
                  >
                    {t('home.request_quote')}
                  </Link>
                </div>
              </div>
              {/* Product Visual - Replaced technical status text */}
              <div className="hidden md:block relative group">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-[620px] h-[620px] flex items-center justify-center -mr-24 relative z-10"
                >
                  <img 
                    src="/hero/Industrial_hydraulic_pump_studio…_2K_202607171154.jpeg_2K_202607171247.jpeg" 
                    alt="Parker Precision Component"
                    className="max-w-full max-h-full object-contain scale-125"
                    onError={(e) => (e.currentTarget.style.opacity = "0")} // Hidden until file is uploaded
                  />
                </motion.div>
              </div>
            </div>

            {/* Search Section - Refined Integrated Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-24 relative"
            >
              <div className="relative overflow-hidden rounded-[24px] border border-white/5 bg-[#050505] p-10 md:p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
                {/* Abstract background elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                
                <div className="relative z-10 max-w-4xl mx-auto">
                  <div className="mb-12 text-center md:text-left">
                    <h2 className="text-[32px] md:text-[48px] font-[590] text-primary tracking-tight leading-[1.1] mb-6">
                      {t('home.search_title')}
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-text-secondary leading-relaxed opacity-60 max-w-xl">
                      {t('home.search_subtitle')}
                    </p>
                  </div>

                  {/* Search Input Container - Refined Scale */}
                  <form onSubmit={handleSearch} className="relative group/input mb-16">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-yellow/10 to-transparent blur opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-700" />
                    <div className="relative flex items-center bg-white/[0.02] border border-white/10 rounded-sm group-focus-within/input:border-brand-yellow/40 group-focus-within/input:bg-white/[0.04] transition-all duration-500 overflow-hidden">
                      <Search className="w-6 h-6 text-text-tertiary ml-6 group-focus-within/input:text-brand-yellow transition-colors" />
                      <input 
                        type="text" 
                        placeholder={t('home.search_placeholder')}
                        className="w-full bg-transparent border-none text-primary py-8 px-6 text-[18px] md:text-[20px] focus:ring-0 placeholder:text-text-tertiary/20 outline-none font-light"
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          setShowSuggestions(true);
                        }}
                        onFocus={() => setShowSuggestions(true)}
                      />
                      <button 
                        type="submit"
                        className="mr-4 px-10 py-4 bg-brand-yellow text-black text-[13px] font-[510] rounded-sm hover:bg-brand-yellow-hover transition-all uppercase tracking-[0.15em] hidden md:block"
                      >
                        {t('home.search_button')}
                      </button>
                    </div>

                    {/* Live Suggestions Dropdown */}
                    <AnimatePresence>
                      {showSuggestions && suggestions.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-[#0A0A0A] border border-white/10 rounded-sm shadow-2xl z-[100] overflow-hidden"
                        >
                          <div className="max-h-[400px] overflow-y-auto">
                            {suggestions.map((item, idx) => (
                              <div
                                key={item.id}
                                className="w-full px-8 py-4 flex items-center justify-between hover:bg-white/[0.05] border-b border-white/5 last:border-0 transition-colors text-left group/suggestion"
                              >
                                <button
                                  type="button"
                                  onClick={() => {
                                    const series = SERIES.find(s => s.id === item.seriesId);
                                    if (series) {
                                      const pt = PRODUCT_TYPES.find(p => p.id === series.productTypeId);
                                      const family = FAMILIES.find(f => f.id === pt?.familyId);
                                      const slugify = (text: any) => {
                                        if (typeof text !== 'string') return '';
                                        return text.toLowerCase().replace(/[^a-z0-9а-яё]/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
                                      };
                                      navigate(`/catalog/${slugify(getLocalized(family?.name, 'ru') || "other")}/${slugify(getLocalized(pt?.name, 'ru') || "other")}/${series.slug}`);
                                    }
                                    setShowSuggestions(false);
                                  }}
                                  className="flex-1 flex flex-col text-left"
                                >
                                  <span className="text-primary font-mono text-sm group-hover/suggestion:text-brand-yellow transition-colors">{item.articleCode}</span>
                                  <span className="text-[10px] text-text-tertiary uppercase tracking-widest mt-1 line-clamp-1">{getLocalized(item.description, i18n.language)}</span>
                                </button>
                                
                                <div className="flex items-center gap-4">
                                  <div className="hidden sm:block text-[10px] font-mono text-accent/60 uppercase tracking-widest bg-accent/5 px-3 py-1 rounded-sm">
                                    {item.seriesName}
                                  </div>
                                  
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      addItem({
                                        skuId: item.id,
                                        articleCode: item.articleCode,
                                        description: item.description,
                                        seriesName: item.seriesName
                                      });
                                      setAddedItems(prev => ({ ...prev, [item.id]: true }));
                                      setTimeout(() => {
                                        setAddedItems(prev => ({ ...prev, [item.id]: false }));
                                      }, 2000);
                                    }}
                                    className={`h-8 px-4 rounded-sm flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider transition-all ${
                                      addedItems[item.id] 
                                        ? "bg-green-500/20 text-green-500" 
                                        : "bg-brand-yellow/10 text-brand-yellow hover:bg-brand-yellow hover:text-black border border-brand-yellow/20"
                                    }`}
                                  >
                                    {addedItems[item.id] ? (
                                      <>
                                        <Check className="w-3 h-3" />
                                        <span>{t('common.added', 'Добавлено')}</span>
                                      </>
                                    ) : (
                                      <>
                                        <Plus className="w-3 h-3" />
                                        <span>{t('search.add_to_rfq', 'В корзину')}</span>
                                      </>
                                    )}
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>

                  {/* Quick Filter Grid - Smaller Scale */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { label: t('home.quick_filters.pumps'), sub: t('home.quick_filters.pumps_sub'), path: "/catalog/насос-гидравлический/лопастные-насосы/t6-t67-t7-series" },
                      { label: t('home.quick_filters.valves'), sub: t('home.quick_filters.valves_sub'), path: "/catalog/hydraulic-valves/hydraulic-valves-type/d1vw-d3w-series" },
                      { label: t('home.quick_filters.fittings'), sub: t('home.quick_filters.fittings_sub'), path: "/catalog/hydraulic-hose/hydraulic-din-fittings/ermeto-din" }
                    ].map((cat) => (
                      <Link 
                        to={cat.path}
                        key={cat.label} 
                        className="p-6 bg-white/[0.02] border border-white/5 rounded-sm hover:border-brand-yellow/20 hover:bg-white/[0.04] transition-all group cursor-pointer"
                      >
                        <div className="text-[16px] font-[510] text-primary group-hover:text-brand-yellow transition-colors mb-2">{cat.label}</div>
                        <div className="text-[11px] text-text-tertiary opacity-60 font-mono uppercase tracking-[0.15em]">{cat.sub}</div>
                      </Link>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Catalog Bento Grid */}
      <section id="catalog" className="max-w-[1440px] mx-auto px-6 mb-40 relative z-10">
        <div className="inline-flex items-center gap-3 px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/20 rounded-sm mb-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-yellow">{t('home.catalog_section_badge')}</span>
        </div>
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-12 border-b border-white/5 pb-16">
          <div className="max-w-xl">
            <h2 className="text-[32px] md:text-[48px] font-[590] tracking-[-0.03em] leading-[1.1] text-primary mb-8">
              {t('home.catalog_section_title')} <ParkerLogo className="h-[0.8em] ml-2" isInline={true} showBox={false} />.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[18px] text-text-secondary leading-relaxed mb-6">
              {t('home.catalog_section_subtitle')}
            </p>
            <Link to="/catalog" className="text-[14px] font-[510] text-brand-yellow flex items-center gap-2 hover:brightness-110 transition-all">
              {t('home.go_to_catalog')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dynamicCategories.map((family, idx) => {
            const familyName = getLocalized(family.name, i18n.language);
            return (
              <Link 
                key={family.slug}
                to={`/catalog/${family.slug}`}
                className="group relative flex flex-col h-[600px] bg-white/[0.01] border border-white/5 rounded-sm overflow-hidden transition-all duration-700 hover:border-brand-yellow/30 hover:bg-white/[0.02] hover:shadow-[0_20px_50px_-20px_rgba(234,179,8,0.1)]"
              >
                {/* Product Stage - Optimized for high-end studio shots */}
                <div className="relative h-[400px] w-full bg-black flex items-center justify-center overflow-hidden shrink-0">
                  {/* Minimalist Ambient Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.03)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.06)_0%,transparent_60%)] transition-all duration-1000" />
                  
                  {/* Background Index Number - Large and Subtle */}
                  <div className="absolute -right-4 -bottom-8 text-[120px] font-mono font-bold text-white/[0.02] select-none group-hover:text-white/[0.04] transition-colors duration-700">
                    0{idx + 1}
                  </div>

                  {/* Product Image Placeholder Logic */}
                  <div className={`relative z-10 w-full h-full flex items-center justify-center transition-transform duration-1000 group-hover:scale-105 p-0`}>
                    {/* Image rendering logic */}
                    {family.image ? (
                      <img 
                        src={family.image}
                        alt={familyName}
                        className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                      />
                    ) : family.slug === "насос-гидравлический" ? (
                      <img 
                        src="/assets/images/home/Parker_black_hydraulic_pump_phot…_202608241728.jpeg"
                        alt={familyName}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : family.slug === "hydraulic-valves" ? (
                      <img 
                        src="/assets/images/home/Industrial_hydraulic_valve_mecha…_202608241728.jpeg"
                        alt={familyName}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : family.slug === "фильтрация" ? (
                      <img 
                        src="/assets/images/home/Industrial_filters_and_replaceme…_202608241738.jpeg"
                        alt={familyName}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : family.slug === "hydraulic-hose" ? (
                      <img 
                        src="/assets/images/home/Hydraulic_hoses_and_metallic_fit…_202608241744.jpeg"
                        alt={familyName}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <>
                        <img 
                          src={`/hero/cat_${family.slug}.png`}
                          alt={familyName}
                          className="max-w-full max-h-full object-contain filter drop-shadow-[0_15px_40px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                            if (sibling) sibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback Icon while images are missing */}
                        <div className="flex flex-col items-center gap-4 text-text-tertiary/20 group-hover:text-accent/30 transition-all duration-500">
                          {familyIcons[family.slug] || <Box className="w-20 h-20 stroke-[0.5]" />}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Information Area */}
                <div className="p-10 flex-1 flex flex-col justify-between border-t border-white/5">
                  <div>
                    <div className="flex items-baseline justify-between mb-4">
                      <h3 className="text-[22px] font-[510] tracking-tight text-primary group-hover:text-brand-yellow transition-colors duration-300">
                        {familyName}
                      </h3>
                    </div>
                    <p className="text-[14px] text-text-secondary leading-relaxed font-normal line-clamp-3 opacity-80 group-hover:opacity-100 transition-opacity">
                      {getLocalized(family.description, i18n.language)}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 text-[12px] font-mono text-text-tertiary group-hover:text-primary transition-all duration-300 mt-6 pt-6 border-t border-white/[0.03]">
                    <span className="uppercase tracking-[0.2em]">{t('home.view_catalog_action')}</span>
                    <div className="h-px flex-1 bg-white/5 group-hover:bg-brand-yellow/20 transition-colors" />
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-[1440px] mx-auto px-6 mb-40 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="px-3 py-1 bg-brand-yellow/5 border border-brand-yellow/20 text-brand-yellow text-[10px] font-mono uppercase tracking-[0.3em] rounded-sm">
            {t('home.service_badge')}
          </div>
          <div className="h-3 w-px bg-white/10" />
          <span className="text-[12px] text-text-tertiary uppercase tracking-wider font-mono opacity-40">{t('home.service_tagline')}</span>
        </div>
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-12">
          <h2 className="text-[32px] md:text-[48px] font-[590] leading-[1.1] tracking-[-0.03em] text-primary max-w-4xl">
            {t('home.service_title')} <span className="text-text-tertiary">{t('home.service_subtitle')}</span>
          </h2>
          <button 
            onClick={() => navigate("/request?type=service")}
            className="inline-flex items-center justify-center px-10 py-5 bg-brand-yellow text-black font-[510] rounded-sm hover:bg-brand-yellow-hover transition-all gap-3 text-[14px] uppercase tracking-widest whitespace-nowrap"
          >
            {t('home.call_service')} <Wrench className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 relative z-10 border-t border-white/5 pt-12">
          {[
            { 
              id: "rvd", 
              fig: "FIG 0.2",
              title: t('home.services.rvd_title'), 
              desc: t('home.services.rvd_desc'), 
              visual: <WireframeRVD />
            },
            { 
              id: "fittings", 
              fig: "FIG 0.3",
              title: t('home.services.fittings_title'), 
              desc: t('home.services.fittings_desc'), 
              visual: <WireframeFittings />
            },
            { 
              id: "diagnostics", 
              fig: "FIG 0.4",
              title: t('home.services.diagnostics_title'), 
              desc: t('home.services.diagnostics_desc'), 
              visual: <WireframeDiagnostic />
            }
          ].map((service, idx) => (
            <div 
              key={service.id}
              className={`group p-8 min-h-[500px] flex flex-col cursor-pointer overflow-hidden relative ${
                idx !== 2 ? "md:border-r border-white/5" : ""
              }`}
            >
              <Link to={`/service/${service.id}`} className="absolute inset-0 z-10" />
              
              <div className="text-[10px] font-mono text-text-tertiary/40 uppercase tracking-widest mb-8">
                {service.fig}
              </div>

              <div className="flex-1 flex items-center justify-center mb-12">
                <div className="w-full aspect-square max-w-[320px] group-hover:scale-110 transition-transform duration-700">
                  {service.visual}
                </div>
              </div>

              <div className="mt-auto">
                <h4 className="text-[16px] font-[510] mb-2 text-primary tracking-tight">
                  {service.title}
                </h4>
                <p className="text-[14px] text-text-secondary leading-relaxed font-normal">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-width Parallax 1 */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden mb-40">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url("/assets/images/home/Экскаватор_и_карьерные_самосвалы_202608251231.jpeg")' }}
        />
        <div className="absolute inset-0 bg-black/0" />
      </section>

      {/* Industry Solutions - Editorial List */}
      <section className="max-w-[1440px] mx-auto px-6 mb-40 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="px-3 py-1 bg-brand-yellow/5 border border-brand-yellow/20 text-brand-yellow text-[10px] font-mono uppercase tracking-[0.3em] rounded-sm">
            {t('home.industry_badge')}
          </div>
          <div className="h-3 w-px bg-white/10" />
          <span className="text-[12px] text-text-tertiary uppercase tracking-wider font-mono opacity-40">{t('home.industry_tagline')}</span>
        </div>
        <div className="border-t border-white/5 pt-16">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-12 border-b border-white/5 pb-16">
            <h2 className="text-[32px] md:text-[48px] font-[590] tracking-[-0.03em] leading-[1.1] text-primary max-w-xl">
              {t('home.industry_title')}
            </h2>
            <p className="text-[18px] text-text-secondary leading-relaxed max-w-md">
              {t('home.industry_subtitle')}
            </p>
          </div>

          <div className="space-y-4">
            {INDUSTRIES.map((ind, idx) => {
              const Icon = ind.slug === 'mining' ? Mountain : ind.slug === 'agriculture' ? Sprout : Factory;
              return (
                <Link 
                  key={ind.id}
                  to={`/industries/${ind.slug}`}
                  className="group flex flex-col md:flex-row items-start md:items-center justify-between p-10 bg-background hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex items-center gap-12 relative z-10">
                    <span className="text-[14px] font-mono text-text-tertiary group-hover:text-brand-yellow transition-colors">0{idx + 1}</span>
                    <div>
                      <h4 className="text-[16px] font-[510] text-primary tracking-tight group-hover:translate-x-2 transition-transform duration-300">{getLocalized(ind.title, i18n.language)}</h4>
                      <p className="text-[14px] text-text-secondary max-w-md mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {getLocalized(ind.description, i18n.language)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 md:mt-0 flex items-center gap-8 relative z-10">
                    <div className="w-12 h-12 rounded-sm border border-white/5 flex items-center justify-center text-text-tertiary group-hover:text-primary transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowRight className="w-6 h-6 text-text-tertiary group-hover:text-brand-yellow group-hover:translate-x-2 transition-all" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof - Clients & Industry Leaders */}
      <section className="max-w-[1440px] mx-auto px-6 mb-40 relative">
        <div className="flex items-center gap-4 mb-8">
          <div className="px-3 py-1 bg-brand-yellow/5 border border-brand-yellow/20 text-brand-yellow text-[10px] font-mono uppercase tracking-[0.3em] rounded-sm">
            {t('home.distributor_badge')}
          </div>
          <div className="h-3 w-px bg-white/10" />
          <span className="text-[12px] text-brand-yellow uppercase tracking-wider font-mono opacity-40">{t('home.brands_tagline')}</span>
        </div>
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-12 border-b border-white/5 pb-16">
          <h2 className="text-[32px] md:text-[48px] font-[590] tracking-[-0.03em] leading-[1.1] text-primary max-w-xl">
            {t('home.brands_title')}
          </h2>
          <p className="text-[18px] text-text-secondary leading-relaxed max-w-md">
            {t('home.brands_subtitle')}
          </p>
        </div>

        <div className="relative flex overflow-hidden py-10">
          <motion.div 
            className="flex gap-8 px-4"
            animate={{ x: [0, -2500] }}
            transition={{ 
              duration: 50, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...Array(2)].map((_, setIdx) => (
              <React.Fragment key={setIdx}>
                {[
                  { name: "Kaz Minerals", sector: t('home.clients.mining'), logo: "/assets/images/home/Kaz_Minerals_202608251148.jpeg" },
                  { name: "ERG Group", sector: t('home.clients.metallurgy'), logo: "/assets/images/home/ERG_Group_202608251151.jpeg" },
                  { name: "Kazzinc", sector: t('home.clients.industry'), logo: "/assets/images/home/Kazzinc_202608251152.jpeg" },
                  { name: "Kazakhmys", sector: t('home.clients.energy'), logo: "/assets/images/home/Kazakhmys_202608251152 (1).jpeg" },
                  { name: "Altyntau", sector: t('home.clients.extraction'), logo: "/assets/images/home/Altyntau_лого_202608241840.jpeg" },
                  { name: "EuroChem", sector: t('home.clients.chemical'), logo: "/assets/images/home/EuroChem_202608251151.jpeg" },
                  { name: "KazAtomProm", sector: t('home.clients.high_tech'), logo: "/assets/images/home/KazAtomProm_202608251151.jpeg" },
                  { name: "TengizChevroil", sector: t('home.clients.heavy_industry'), logo: "/assets/images/home/TengizChevroil_202608251151.jpeg" }
                ].map((client, idx) => (
                  <div 
                    key={`${setIdx}-${idx}`} 
                    className={`flex-shrink-0 rounded-sm border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-brand-yellow/30 transition-all duration-500 cursor-default group flex items-center justify-center ${client.logo ? 'w-[280px] h-[140px] p-2' : 'px-12 py-8 gap-8'}`}
                  >
                    {client.logo ? (
                      <div className="w-full h-full relative overflow-hidden rounded-[2px] bg-white/[0.02] flex items-center justify-center">
                        <img 
                          src={client.logo} 
                          alt={client.name}
                          className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                        />
                        {/* Ultra-thin inner frame */}
                        <div className="absolute inset-0 border border-white/10 pointer-events-none" />
                      </div>
                    ) : (
                      <>
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow/20 group-hover:bg-brand-yellow group-hover:scale-125 transition-all" />
                        <div>
                          <div className="text-[22px] md:text-[28px] font-[510] text-primary tracking-tight whitespace-nowrap">{client.name}</div>
                          <div className="text-[11px] font-mono text-text-tertiary uppercase tracking-widest mt-1 whitespace-nowrap opacity-60">{client.sector}</div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
          
          {/* Gradient Overlays for smooth fade */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </section>

      {/* Full-width Parallax 2 */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden mb-40">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url("/assets/images/home/Steel_mill_pouring_molten_metal_202608251241.jpeg")' }}
        />
        <div className="absolute inset-0 bg-black/0" />
      </section>

      {/* Standards & Qualifications Section - Premium Grid */}
      <section className="max-w-[1440px] mx-auto px-6 mb-40">
        <div className="max-w-4xl mx-auto text-center mb-24 px-6">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="px-3 py-1 bg-brand-yellow/5 border border-brand-yellow/20 text-brand-yellow text-[10px] font-mono uppercase tracking-[0.3em] rounded-sm">
              {t('home.quality_badge')}
            </div>
            <div className="h-3 w-px bg-white/10" />
            <span className="text-[12px] text-text-tertiary uppercase tracking-wider font-mono opacity-40">{t('home.standards_tagline')}</span>
          </div>
          <h2 className="text-[36px] md:text-[56px] font-[590] text-primary tracking-tight leading-[1.1] mb-8">
            {t('home.standards_title')}
          </h2>
          <p className="text-[18px] md:text-[20px] text-text-secondary leading-relaxed opacity-60">
            {t('home.standards_subtitle')}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-12 max-w-6xl mx-auto">
          {[
            {
              title: t('home.certs.leduc_title'),
              img: "/assets/images/home/LEDUC - LETTRE AGREMENT - SARUZHAN KZ 2026_page-0001.jpg",
              desc: t('home.certs.leduc_desc')
            },
            {
              title: t('home.certs.fy27_title'),
              img: "/assets/images/home/Saruzhan - letter FY27_page-0001.jpg",
              desc: t('home.certs.fy27_desc')
            }
          ].map((cert, i) => (
            <div 
              key={i} 
              className="flex-1 group cursor-zoom-in"
              onClick={() => setSelectedImage(cert.img)}
            >
              <div className="relative aspect-[1/1.414] bg-white/[0.03] border border-white/5 rounded-sm overflow-hidden transition-all duration-500 group-hover:border-brand-yellow/30 group-hover:shadow-[0_0_50px_rgba(255,204,0,0.05)]">
                <img 
                  src={cert.img} 
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-[18px] font-[510] text-white mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-[12px] text-white/60 line-clamp-1">
                    {cert.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox for Certificates */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-background/95 backdrop-blur-md cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-full max-h-full z-10 overflow-hidden"
            >
              <img 
                src={selectedImage} 
                alt="Certificate Full View"
                className="max-w-full max-h-[90vh] rounded-sm shadow-2xl border border-white/10"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FAQ Section - Clean Accordion */}
      <section className="max-w-[1440px] mx-auto px-6 mb-40">
        <div className="inline-flex items-center gap-3 px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/20 rounded-sm mb-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-yellow">{t('home.faq_badge')}</span>
        </div>
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="text-[32px] md:text-[48px] font-[590] tracking-[-0.03em] leading-[1.1] text-primary mb-6">
              {t('home.faq_title')}
            </h2>
            <p className="text-[16px] text-text-secondary leading-relaxed max-w-xs">
              {t('home.faq_subtitle')}
            </p>
          </div>
          
          <div className="md:w-2/3 space-y-4">
            {[
              { q: t('home.faqs.q1'), a: t('home.faqs.a1') },
              { q: t('home.faqs.q2'), a: t('home.faqs.a2') },
              { q: t('home.faqs.q3'), a: t('home.faqs.a3') },
              { q: t('home.faqs.q4'), a: t('home.faqs.a4') }
            ].map((item, i) => (
              <div key={i} className="border-b border-white/5 pb-6">
                <button 
                  className="w-full flex items-center justify-between text-left group"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className={`text-[18px] font-[510] transition-colors pr-8 ${activeFaq === i ? 'text-brand-yellow' : 'text-primary group-hover:text-brand-yellow'}`}>
                    {item.q}
                  </span>
                  <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${activeFaq === i ? 'rotate-180 border-brand-yellow/40 bg-brand-yellow/5' : ''}`}>
                    <ChevronDown className={`w-4 h-4 transition-colors ${activeFaq === i ? 'text-brand-yellow' : 'text-text-tertiary'}`} />
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
                  <div className="pt-6 text-[15px] text-text-secondary leading-relaxed max-w-2xl">
                    {item.a}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section - Impactful Finish */}
      <section className="max-w-[1440px] mx-auto px-6 mb-40">
        <div className="relative overflow-hidden rounded-[24px] border border-white/5 bg-[#050505] p-10 md:p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
          {/* Badge */}
          <div className="relative z-10 inline-flex items-center gap-3 px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/20 rounded-sm mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-yellow">{t('home.cta.final_badge')}</span>
          </div>
          
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-[32px] md:text-[56px] font-[590] text-primary tracking-tight leading-[1.05] mb-8">
              {t('home.cta.final_title')}
            </h2>
            <p className="text-[18px] md:text-[20px] text-text-secondary leading-relaxed max-w-lg mb-12">
              {t('home.cta.final_subtitle')}
            </p>
            <button 
              onClick={() => navigate('/request')}
              className="h-16 px-12 bg-brand-yellow text-black font-bold rounded-sm hover:bg-brand-yellow-hover transition-all flex items-center justify-center gap-4 text-[16px] uppercase tracking-widest group"
            >
              {t('home.cta.final_button')} <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

