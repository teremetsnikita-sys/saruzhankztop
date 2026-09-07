
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from "react-helmet-async";
import { Search, Filter, ArrowRight, Package, Shield, Zap, ChevronRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getLocalized } from '@/lib/utils';

export const CatalogView = () => {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [expandedSeries, setExpandedSeries] = useState<string | null>(null);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // We are no longer using external catalog data, but we can keep the component
  // or redirect users to the main Catalog.tsx. For now, we'll just empty the dynamic list.
  const catalog: any[] = [];

  // Grouping by Series
  const seriesGroups = useMemo(() => {
    const groups: Record<string, { 
      name: string, 
      mainCategory: string, 
      subCategory: string, 
      items: any[] 
    }> = {};

    catalog.forEach(item => {
      if (!groups[item.series]) {
        groups[item.series] = {
          name: item.series,
          mainCategory: item.mainCategory,
          subCategory: item.subCategory,
          items: []
        };
      }
      groups[item.series].items.push(item);
    });

    return Object.values(groups);
  }, [catalog]);

  const categoryTranslations: Record<string, string> = {
    "Насосы": 'common.categories.pumps',
    "Filters": 'common.categories.filters',
    "Фильтры": 'common.categories.filters',
    "Valves": 'common.categories.valves',
    "Клапаны": 'common.categories.valves',
    "Hoses": 'common.categories.hoses',
    "Рукава": 'common.categories.hoses',
    "Fittings": 'common.categories.fittings',
    "Фитинги": 'common.categories.fittings',
    "Diagnostics": 'common.categories.diagnostics',
    "Диагностика": 'common.categories.diagnostics',
    "Seals": 'common.categories.seals',
    "Уплотнения": 'common.categories.seals',
    "Motors": 'common.categories.motors',
    "Двигатели": 'common.categories.motors',
    "Hydromotors": 'common.categories.hydromotors',
    "Гидромоторы": 'common.categories.hydromotors',
    "Pneumatics": 'common.categories.pneumatics',
    "Пневматика": 'common.categories.pneumatics'
  };

  const categories = useMemo(() => {
    const cats = new Set(catalog.map(item => item.mainCategory));
    return ['all', ...Array.from(cats)];
  }, [catalog]);

  const getCategoryName = (cat: string) => {
    if (cat === 'all') return t('common.all');
    const translationKey = categoryTranslations[cat];
    return translationKey ? t(translationKey) : cat;
  };

  const filteredGroups = useMemo(() => {
    return seriesGroups.filter(group => {
      const matchesCategory = selectedCategory === 'all' || group.mainCategory === selectedCategory;
      const matchesSearch = 
        group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.items.some(item => item.sku.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [seriesGroups, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-[#050505]">
      <Helmet>
        <title>{`${t('catalog.main_catalog_title')} | Saruzhan Engineering`}</title>
        <meta name="description" content="Full catalog of Parker hydraulic components. Pumps, valves, filtration, and diagnostic equipment available for order." />
      </Helmet>
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="px-3 py-1 bg-brand-yellow/5 border border-brand-yellow/20 text-brand-yellow text-[10px] font-mono uppercase tracking-[0.3em] rounded-sm">
              {t('catalog.breadcrumb_catalog')}
            </div>
            <div className="h-3 w-px bg-white/10" />
            <span className="text-[12px] text-brand-yellow uppercase tracking-wider font-mono opacity-40">{t('catalog.inventory_management_system')}</span>
          </div>
          <h1 className="text-[64px] md:text-[110px] font-[590] text-primary uppercase tracking-[-0.05em] leading-[0.9] mb-8">
            {t('catalog.main_catalog_title')}
          </h1>
          <p className="text-text-secondary/60 font-light text-xl max-w-2xl leading-relaxed">
            {t('catalog.main_desc')}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="sticky top-24 z-30 mb-12">
          <div className="bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-sm p-4 md:p-6 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={20} />
              <input 
                type="text" 
                placeholder={t('catalog.search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 bg-white/[0.03] border border-white/5 rounded-sm pl-12 pr-4 text-primary placeholder:text-text-secondary/20 focus:border-brand-yellow/30 outline-none transition-all"
              />
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="h-14 bg-white/[0.03] border border-white/5 rounded-sm px-4 flex items-center gap-3 min-w-[240px]">
                <Filter size={18} className="text-primary/40" />
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-transparent text-primary outline-none text-[10px] uppercase tracking-[0.2em] w-full cursor-pointer font-mono"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat} className="bg-[#0A0A0A]">{getCategoryName(cat)}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Catalog Series List */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredGroups.map((group, index) => (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white/[0.02] border border-white/10 rounded-sm overflow-hidden transition-all ${expandedSeries === group.name ? 'border-brand-yellow/40 bg-white/[0.04]' : 'hover:border-white/20'}`}
              >
                <div 
                  onClick={() => setExpandedSeries(expandedSeries === group.name ? null : group.name)}
                  className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[9px] font-mono text-brand-yellow px-2 py-0.5 bg-brand-yellow/10 border border-brand-yellow/20 uppercase tracking-widest rounded-sm">
                        {getCategoryName(group.mainCategory)}
                      </span>
                      {group.subCategory && (
                        <span className="text-[9px] font-mono text-text-secondary/40 uppercase tracking-widest">
                          / {getCategoryName(group.subCategory)}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-[510] text-primary group-hover:text-white transition-colors">{group.name}</h3>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <div className="text-xl font-[590] text-brand-yellow/80">{group.items.length}</div>
                      <div className="text-[9px] font-mono text-text-secondary/30 uppercase tracking-widest">{t('catalog.items_count_suffix')}</div>
                    </div>
                    <div className={`w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center transition-all ${expandedSeries === group.name ? 'rotate-90 bg-brand-yellow border-brand-yellow text-background' : 'text-primary/40 group-hover:border-brand-yellow/40'}`}>
                      <ChevronRight size={20} />
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedSeries === group.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-black/40 border-t border-white/10"
                    >
                      <div className="p-8">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="border-b border-white/5">
                                <th className="pb-4 px-4 text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest">{t('catalog.table_sku')}</th>
                                <th className="pb-4 px-4 text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest">{t('catalog.table_description')}</th>
                                <th className="pb-4 px-4 text-right text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest">{t('catalog.table_action')}</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                              {group.items.map((item) => (
                                <tr key={item.sku} className="hover:bg-white/[0.02] transition-colors group/row">
                                  <td className="py-4 px-4 font-mono text-sm text-primary group-hover/row:text-white transition-colors">{item.sku}</td>
                                  <td className="py-4 px-4 text-sm text-text-secondary/60 font-light max-w-xl">{item.description || t('catalog.default_item_desc')}</td>
                                  <td className="py-4 px-4 text-right">
                                    <Link 
                                      to={`/request?sku=${item.sku}`}
                                      className="inline-flex items-center gap-2 text-[10px] font-mono text-brand-yellow hover:text-brand-yellow/80 uppercase tracking-widest transition-colors"
                                    >
                                      {t('catalog.order_action')} <Zap size={10} />
                                    </Link>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredGroups.length === 0 && (
          <div className="py-32 text-center">
            <div className="w-20 h-20 bg-white/[0.02] rounded-sm flex items-center justify-center mx-auto mb-8 border border-white/5">
              <Search size={32} className="text-primary/20" />
            </div>
            <h3 className="text-2xl font-[510] text-primary mb-4 uppercase">{t('catalog.no_results')}</h3>
            <p className="text-text-secondary/40 max-w-sm mx-auto">
              {t('catalog.no_results_desc')}
            </p>
          </div>
        )}

        {filteredGroups.length > 48 && (
          <div className="mt-20 text-center">
            <p className="text-[11px] font-mono text-text-secondary/30 uppercase tracking-[0.3em] mb-8">
              {t('catalog.results_shown_prefix')} {filteredGroups.length}
            </p>
            <button className="px-12 h-14 border border-primary/20 text-primary font-[510] text-xs uppercase tracking-widest rounded-sm hover:bg-primary/5 transition-all">
              {t('catalog.load_more')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
