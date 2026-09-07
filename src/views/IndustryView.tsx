/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ChevronRight, Factory } from "lucide-react";
import { INDUSTRIES } from "../data/mockData";
import { useTranslation } from "react-i18next";
import { getLocalized } from "../lib/utils";

export const IndustryView = () => {
  const { t, i18n } = useTranslation();
  const { industrySlug } = useParams<{ industrySlug: string }>();
  const industry = INDUSTRIES.find(i => i.slug === industrySlug);

  if (!industry) return <div className="pt-32 text-center text-white/50 font-mono">{t("industry.not_found")}</div>;

  const currentLang = i18n.language as 'ru' | 'en' | 'kk';
  const title = getLocalized(industry.title, currentLang);
  const description = getLocalized(industry.description, currentLang);

  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <Helmet>
        <title>{`${title} Solutions | Saruzhan Engineering`}</title>
        <meta name="description" content={`${title} industrial solutions. ${description.substring(0, 150)}`} />
      </Helmet>
      {/* Navigation */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-32">
        <nav className="mb-16">
          <Link 
            to="/" 
            className="group inline-flex items-center gap-3 text-[10px] font-mono text-white/30 uppercase tracking-[0.4em] hover:text-brand-yellow transition-all"
          >
            <div className="w-8 h-[1px] bg-white/10 group-hover:bg-brand-yellow/50 group-hover:w-12 transition-all" />
            <ArrowLeft className="w-3 h-3" /> 
            {t("industry.back_home")}
          </Link>
        </nav>

        {/* Section 1: Industry Hero */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-[10px] font-mono uppercase tracking-[0.4em] rounded-sm">
                 {t("industry.badge")}
               </div>
               <div className="h-3 w-px bg-white/10" />
               <span className="text-[10px] text-white/50 uppercase tracking-[0.3em] font-mono">[ {title.toUpperCase().replace(/\s+/g, '_')} ]</span>
            </div>
            
            <h1 className="text-[64px] md:text-[110px] font-[590] mb-8 tracking-[-0.06em] text-white leading-[0.85]">
              {title}
            </h1>
            
            <div className="flex items-center gap-6 text-white/70 font-mono text-[11px] uppercase tracking-[0.4em]">
              <Factory className="w-4 h-4 text-brand-yellow" />
              {t("industry.tagline")}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section: Full-width Panoramic Visualization */}
      <section className="w-full mb-48 relative group overflow-hidden border-y border-white/5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative h-[60vh] md:h-[80vh] w-full bg-[#08090A]"
        >
          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,184,0,0.05),transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '120px 120px' }} 
          />
          
          <img 
            src={industry.image} 
            alt={title} 
            className="w-full h-full object-cover transition-all duration-[3s] ease-out scale-105 group-hover:scale-100"
          />
          
          {/* Panoramic HUD Elements */}
          <div className="absolute top-12 left-6 md:left-12">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-2 h-2 bg-brand-yellow animate-pulse" />
            </div>
            <div className="h-[1px] w-64 bg-brand-yellow/20" />
          </div>

          <div className="absolute bottom-12 right-6 md:right-12 text-right">
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] mb-3">{t("industry.module_active")}</p>
            <div className="flex gap-1 justify-end">
              {[...Array(20)].map((_, i) => (
                <div key={i} className={`w-[2px] h-4 ${i % 5 === 0 ? 'bg-brand-yellow/40' : 'bg-white/5'}`} />
              ))}
            </div>
          </div>
          
          {/* Ambient Gradients */}
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#050505] to-transparent opacity-100" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent opacity-100" />
        </motion.div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section 2: Technological Matrix */}
        <section className="mb-48 relative pt-32">
          <div className="flex flex-col lg:flex-row gap-24">
            {/* Left: Strategic Context */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px] bg-brand-yellow" />
                  <span className="text-[10px] font-mono text-brand-yellow uppercase tracking-[0.4em]">{t("industry.apps_label")}</span>
                </div>
                <h2 className="text-[42px] md:text-[56px] font-[590] text-white tracking-[-0.04em] leading-[0.95] mb-12 uppercase">
                  {t("industry.solutions_title_1")} <br />
                  {t("industry.solutions_title_2")}
                </h2>
                <p className="text-[16px] text-white/40 leading-relaxed font-[300] tracking-tight max-w-xs mb-12">
                  {description} {t("industry.desc_suffix")}
                </p>
                
                {/* Дополнительный блок преимуществ */}
                <div className="space-y-8 pt-12 border-t border-white/5">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-mono text-brand-yellow/60 uppercase tracking-widest">{t("industry.env_resistance")}</span>
                    <p className="text-sm text-white/70">{t("industry.env_resistance_desc")}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-mono text-brand-yellow/60 uppercase tracking-widest">{t("industry.load_opt")}</span>
                    <p className="text-sm text-white/70">{t("industry.load_opt_desc")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Node Matrix */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                {industry.equipment.map((item, i) => (
                  <div key={i} className="group relative">
                    {/* Index & Line */}
                    <div className="flex items-end justify-between mb-6">
                      <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">{t("industry.app_prefix")}{i + 1}</span>
                      <div className="h-[1px] flex-grow mx-4 bg-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-brand-yellow/30 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-medium text-white/90 mb-4 group-hover:text-brand-yellow transition-colors">
                      {getLocalized(item, currentLang)}
                    </h3>
                    
                    {/* Measurement Scale Effect */}
                    <div className="flex justify-between">
                      {[...Array(12)].map((_, j) => (
                        <div 
                          key={j} 
                          className={`w-[1px] h-2 transition-colors duration-500 ${
                            j % 4 === 0 ? 'bg-white/20' : 'bg-white/5'
                          } group-hover:bg-brand-yellow/40`} 
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Minimalist Catalog Link */}
              <div className="mt-32 pt-12 border-t border-white/5">
                <Link 
                  to="/catalog"
                  className="group inline-flex items-center gap-6 text-[11px] font-mono text-white/30 uppercase tracking-[0.4em] hover:text-white transition-all"
                >
                  <span>{t("industry.view_series")}</span>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-yellow transition-all">
                    <ChevronRight className="w-4 h-4 group-hover:text-brand-yellow transition-colors" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

