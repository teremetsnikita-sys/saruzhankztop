import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Phone, Globe, Zap } from "lucide-react";
import { ParkerLogo } from "../components/ParkerLogo";
import { BRANDS } from "../data/mockData";
import { useTranslation } from "react-i18next";
import { getLocalized } from "../lib/utils";

export const PartnersView = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'ru' | 'en' | 'kk';

  const advItems = [
    { id: "01", label: t("partners.adv.guarantee"), title: t("partners.adv.guarantee_desc") },
    { id: "02", label: t("partners.adv.logistics"), title: t("partners.adv.logistics_desc") },
    { id: "03", label: t("partners.adv.engineering"), title: t("partners.adv.engineering_desc") },
    { id: "04", label: t("partners.adv.service"), title: t("partners.adv.service_desc") }
  ];

  return (
    <div className="min-h-screen bg-[#08090A] pt-24 pb-32 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section - Consistent Majestic Layout */}
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-12"
          >
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/10 rounded-sm mb-8">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-yellow">{t("partners.badge")}</span>
              </div>
              <h1 className="text-[64px] md:text-[110px] font-[590] text-primary leading-[0.9] tracking-[-0.05em] mb-12">
                {t("partners.title_1")} <br />
                <span className="text-brand-yellow">{t("partners.title_2")}</span>
              </h1>
              <p className="text-[18px] md:text-[22px] text-text-secondary leading-relaxed font-[300] max-w-2xl opacity-80">
                {t("partners.subtitle")}
              </p>
            </div>
          </motion.div>
        </header>

        {/* Partners Grid - Focused on Parker Hannifin */}
        <div className="mb-32">
          {BRANDS.map((brand) => (
            <motion.div 
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#090A0B] border border-white/5 rounded-sm overflow-hidden flex flex-col lg:flex-row group hover:bg-white/[0.01] transition-all"
            >
              {/* Partner Visual Area - Strategic Image & Branding */}
              <div className="lg:w-2/5 relative aspect-video lg:aspect-auto overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5 bg-black">
                <img 
                  src={brand.image} 
                  alt={brand.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow text-background text-[10px] font-bold uppercase tracking-wider rounded-xs mb-4">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {t("partners.distributor_badge")}
                   </div>
                   <h3 className="text-[32px] md:text-[48px] font-[590] text-white tracking-tight leading-none">
                     {brand.slug === 'parker' ? (
                       <ParkerLogo className="h-12 md:h-20" showBox={false} />
                     ) : (
                       brand.name
                     )}
                   </h3>
                </div>
              </div>

              {/* Text Content - Organized for high-level info */}
              <div className="lg:w-3/5 p-10 md:p-16 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-x-12 gap-y-4 mb-10 opacity-40">
                     <div className="flex items-center gap-3">
                        <Globe className="w-4 h-4 text-brand-yellow" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em]">{getLocalized(brand.headquarters, currentLang)}</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <Zap className="w-4 h-4 text-brand-yellow" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em]">{t("partners.founded_at")}{brand.founded}</span>
                     </div>
                  </div>
                  
                  <p className="text-[17px] md:text-[19px] text-[#8A8F98] leading-relaxed font-[300] max-w-2xl mb-12 opacity-90">
                    {brand.slug === 'parker' ? (
                      <>
                        <ParkerLogo className="h-[0.8em]" isInline={true} showBox={false} /> {t("partners.parker_desc")}
                      </>
                    ) : (
                      getLocalized(brand.fullDescription, currentLang)
                    )}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden mb-12">
                    {brand.specialization.map((spec, si) => (
                      <div key={si} className="bg-background/40 p-6 flex items-center justify-center group/spec hover:bg-brand-yellow/[0.02] transition-all">
                        <span className="text-[12px] font-[510] text-primary tracking-tight uppercase tracking-widest text-center">{getLocalized(spec, currentLang)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t border-white/5">
                  <Link 
                    to={`/partners/${brand.slug}`}
                    className="h-14 px-10 bg-brand-yellow text-background font-[600] rounded-sm text-[12px] uppercase tracking-wider hover:bg-brand-yellow-hover transition-all flex items-center justify-center gap-3 group/cta"
                  >
                    {t("partners.more_about")}{brand.name}
                    <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Advantages Section */}
        <section className="mb-32 border-t border-white/5">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {advItems.map((item, i) => (
                <div key={i} className={`p-10 flex flex-col justify-between min-h-[280px] border-white/5 ${i !== 0 ? 'lg:border-l' : ''} ${i >= 2 ? 'md:border-t lg:border-t-0' : ''} ${i % 2 !== 0 ? 'md:border-l lg:border-l' : ''}`}>
                   <div className="text-[10px] font-mono text-brand-yellow uppercase tracking-widest">{item.id} // {item.label}</div>
                   <h3 className="text-[22px] font-[510] text-primary tracking-tight leading-[1.2] mt-auto">
                      {item.title}
                   </h3>
                </div>
              ))}
           </div>
        </section>

        {/* Final CTA Accent Block */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-10 md:p-20 bg-[#050505] border border-white/5 rounded-sm overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="max-w-2xl text-left">
                <div className="inline-flex items-center gap-3 px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/20 rounded-sm mb-8">
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-yellow">{t("partners.cta_badge")}</span>
                </div>
                <h2 className="text-[36px] md:text-[56px] font-[590] text-primary tracking-tight leading-[1.05] mb-8">
                  {t("partners.cta_title_1")} <br />
                  <span className="text-brand-yellow">{t("partners.cta_title_2")}</span>
                </h2>
                <p className="text-[16px] md:text-[18px] text-text-secondary leading-relaxed mb-12 font-[300]">
                  {t("partners.cta_desc")}
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link 
                    to="/rfq" 
                    className="h-14 px-10 bg-brand-yellow text-background font-[600] rounded-sm text-[12px] uppercase tracking-wider hover:bg-brand-yellow-hover transition-all flex items-center justify-center gap-3 group"
                  >
                    {t("rfq.submit_btn")}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a 
                    href="tel:+77072001059" 
                    className="h-14 px-10 border border-white/10 text-primary font-[600] rounded-sm text-[12px] uppercase tracking-wider hover:bg-white/5 transition-all flex items-center justify-center gap-3"
                  >
                    <Phone className="w-4 h-4" />
                    +7 (707) 200 10 59
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
};
