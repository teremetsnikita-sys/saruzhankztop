/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ParkerLogo } from '@/components/ParkerLogo';
import { SaruzhanFullLogo } from '@/components/SaruzhanFullLogo';
import { Shield, Target, Factory, Cpu, Globe, Users } from "lucide-react";
import { KazakhstanMap } from "../components/KazakhstanMap";
import { useTranslation } from "react-i18next";

export const AboutView = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="pt-24 pb-32 bg-background min-h-screen text-foreground selection:bg-brand-yellow/20">
      {/* Background Decorative Element */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-12"
          >
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/10 rounded-sm mb-8">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-yellow">{t('about.badge')}</span>
              </div>
              <h1 className="text-[64px] md:text-[110px] font-[590] text-primary leading-[0.9] tracking-[-0.05em] mb-12">
                {t('about.hero_title_1')} <br />
                <span className="text-brand-yellow">{t('about.hero_title_2')}</span>
              </h1>
              <p className="text-[16px] md:text-[20px] font-[300] leading-relaxed opacity-60 max-w-2xl text-text-secondary">
                <SaruzhanFullLogo isInline={true} className="text-[1.1em]" /> {t('about.hero_desc')}
              </p>
            </div>
            
            <div className="hidden lg:block pb-4">
               <div className="flex flex-col gap-2 border-l border-brand-yellow/30 pl-8 py-2">
                  <span className="text-[10px] font-mono text-brand-yellow uppercase tracking-widest opacity-40">{t('about.founding_year_label')}</span>
                  <span className="text-[32px] font-[510] text-primary">2014</span>
               </div>
            </div>
          </motion.div>
        </header>
      </div>

      {/* Cinematic Full-Bleed Image Section */}
      <section className="h-[70vh] md:h-[90vh] w-full relative overflow-hidden bg-[#050505] border-y border-white/5 mb-32">
         <img 
           src="/assets/images/about/Цех_202608251820.jpeg" 
           alt="Industrial Engineering Environment" 
           className="w-full h-full object-cover hover:scale-105 transition-transform duration-[10s] ease-out"
         />

      </section>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        {/* Philosophy Section - Two Column Layout */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[36px] md:text-[56px] font-[590] text-primary leading-[1.05] tracking-tight">
                {t('about.philosophy_title')} <br /><span className="text-brand-yellow">{t('about.philosophy_subtitle')}</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <p className="text-[18px] md:text-[24px] font-[300] text-primary leading-[1.4] opacity-80">
                  {t('about.philosophy_mission')}
                </p>
              </div>
              <div className="space-y-6 text-[14px] md:text-[15px] text-text-secondary leading-relaxed max-w-xl opacity-60">
                <p>
                  {t('about.philosophy_text_1')}
                </p>
                <p>
                  {i18n.language === 'ru' 
                    ? t('about.philosophy_text_2').replace('инновации', '') 
                    : t('about.philosophy_text_2').replace('innovations', '')} 
                  <ParkerLogo className="h-[0.8em] mx-2" isInline={true} showBox={false} /> 
                  {t('about.philosophy_text_2')}
                </p>
                <p>
                  {t('about.philosophy_text_3')}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* History / Milestones Section */}
        <section className="mb-48 border-t border-white/5 pt-12">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { year: "2014", event: t('about.milestone_1_event'), desc: t('about.milestone_1_desc') },
                { year: "2017", event: t('about.milestone_2_event'), desc: <>{t('about.milestone_2_desc').replace('Parker', '')} <ParkerLogo className="h-[0.75em] ml-1" isInline={true} showBox={false} />.</> },
                { year: "2021", event: t('about.milestone_3_event'), desc: t('about.milestone_3_desc') }
              ].map((milestone, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative pl-8 border-l border-brand-yellow/10 group hover:border-brand-yellow/40 transition-colors"
                >
                   <div className="absolute top-0 left-[-4.5px] w-2 h-2 rounded-full bg-background border border-brand-yellow/20 group-hover:bg-brand-yellow transition-all shadow-[0_0_10px_rgba(var(--color-brand-yellow),0.5)]" />
                   <div className="text-[10px] font-mono text-brand-yellow/40 uppercase tracking-[0.2em] mb-4">{milestone.year}</div>
                   <h3 className="text-[18px] font-[510] text-primary mb-3 group-hover:text-brand-yellow transition-colors">{milestone.event}</h3>
                   <p className="text-[14px] text-text-secondary leading-relaxed opacity-60">{milestone.desc}</p>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Unified Geography & Industrial Reach Section */}
        <section className="mb-32 relative py-24">
          {/* Studio Light Effects */}
          <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-brand-yellow/[0.05] rounded-[100%] blur-[160px] pointer-events-none -z-10" />
          <div className="absolute bottom-[-250px] left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-brand-yellow/[0.05] rounded-[100%] blur-[160px] pointer-events-none -z-10" />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Header Content */}
            <div className="max-w-4xl w-full text-center mb-20 px-6">
               <div className="inline-flex items-center gap-3 px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/10 rounded-sm mb-10">
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-yellow">{t('about.reach_badge')}</span>
               </div>
               
               <h2 className="text-[36px] md:text-[56px] font-[590] text-primary tracking-tight leading-[1.05] mb-10">
                 {t('about.reach_title_1')} <br />
                 <span className="text-brand-yellow">{t('about.reach_title_2')}</span>
               </h2>
               
               <p className="text-[16px] md:text-[18px] text-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto font-[300] opacity-50">
                 {t('about.reach_desc')}
               </p>

               <div className="flex flex-wrap justify-center gap-3">
                  {[
                    t('about.industries.mining'), 
                    t('about.industries.metallurgy'), 
                    t('about.industries.agri'), 
                    t('about.industries.special'), 
                    t('about.industries.energy')
                  ].map(tag => (
                    <div key={tag} className="px-5 py-1.5 bg-brand-yellow/[0.03] border border-brand-yellow/10 rounded-full text-[10px] font-mono text-brand-yellow/40 uppercase tracking-widest hover:border-brand-yellow/40 hover:text-brand-yellow transition-all cursor-default">
                      {tag}
                    </div>
                  ))}
               </div>
            </div>

            {/* Interactive Map */}
            <div className="w-full">
              <KazakhstanMap />
            </div>
          </motion.div>
        </section>

        <section className="mb-48 border-y border-white/5">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {[
                { label: t('about.stats.market_presence'), value: "10+", unit: t('about.stats.years') },
                { label: t('about.stats.support'), value: "24/7", unit: t('about.stats.status') },
                { label: t('about.stats.catalog'), value: "10k+", unit: t('about.stats.units') },
                { label: t('about.stats.success'), value: "500+", unit: t('about.stats.enterprises') }
              ].map((stat, i) => (
                <div key={i} className={`p-10 flex flex-col justify-between min-h-[200px] border-white/5 ${i !== 0 ? 'lg:border-l' : ''} ${i >= 2 ? 'md:border-t lg:border-t-0' : ''} ${i % 2 !== 0 ? 'md:border-l lg:border-l' : ''}`}>
                   <div className="text-[10px] font-mono text-brand-yellow/40 uppercase tracking-widest">{stat.label}</div>
                   <div className="flex items-baseline gap-2 mt-auto">
                      <span className="text-[48px] md:text-[54px] font-[590] text-primary tracking-tighter leading-none">{stat.value}</span>
                      <span className="text-[11px] font-mono text-brand-yellow/40 uppercase tracking-widest mb-2">{stat.unit}</span>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* Technical Hub Section */}
        <section className="mb-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-end mb-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                 <div className="inline-flex items-center gap-3 px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/10 rounded-sm mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-yellow">{t('about.hub_badge')}</span>
                 </div>
                 <h2 className="text-[36px] md:text-[56px] font-[590] text-primary tracking-tight leading-[1.05]">
                    {t('about.hub_title')} <br /><SaruzhanFullLogo isInline={true} className="text-[1.2em]" />.
                 </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                 <p className="text-[16px] md:text-[18px] text-text-secondary leading-relaxed mb-10 font-[300] opacity-70">
                    {t('about.hub_desc')}
                 </p>
                 <div className="grid grid-cols-2 gap-12 pt-10 border-t border-white/5">
                    <div>
                       <div className="text-[10px] font-mono text-brand-yellow/40 uppercase tracking-widest mb-3">{t('about.hub_area_label')}</div>
                       <div className="text-[24px] font-[510] text-primary">{t('about.hub_area_value')}</div>
                    </div>
                    <div>
                       <div className="text-[10px] font-mono text-brand-yellow/40 uppercase tracking-widest mb-3">{t('about.hub_depth_label')}</div>
                       <div className="text-[24px] font-[510] text-primary">{t('about.hub_depth_value')}</div>
                    </div>
                 </div>
              </motion.div>
           </div>
        </section>

        {/* Cinematic Hub Image - Full Width */}
        <div className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] mb-48 overflow-hidden border-y border-white/5 bg-[#050505]">
           <img 
             src="/assets/images/about/Второй_раздел_202608251838.jpeg" 
             alt="Saruzhan Technical Hub Kostanay" 
             className="w-full h-[60vh] md:h-[80vh] object-cover hover:scale-105 transition-transform duration-[10s] ease-out opacity-90"
           />
        </div>

        {/* Expertise Section */}
        <section className="mb-48">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 mb-20 items-end">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                 <h2 className="text-[36px] md:text-[56px] font-[590] text-primary tracking-tight leading-[1.05]">
                    {t('about.competencies_title_1')} <br />{t('about.competencies_title_2')}
                 </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                 <p className="text-[16px] md:text-[18px] text-text-secondary leading-relaxed font-[300] opacity-60">
                    {t('about.competencies_desc')}
                 </p>
              </motion.div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
              {[
                { 
                  title: t('about.comp_quality_title'), 
                  desc: t('about.comp_quality_desc'),
                  tag: t('about.comp_quality_tag'),
                  image: "/assets/images/about/Качество_202608251858.jpeg"
                },
                { 
                  title: t('about.comp_engineering_title'), 
                  desc: t('about.comp_engineering_desc'),
                  tag: t('about.comp_engineering_tag'),
                  image: "/assets/images/about/Инженерия_202608261137.jpeg"
                },
                { 
                  title: t('about.comp_logistics_title'), 
                  desc: t('about.comp_logistics_desc'),
                  tag: t('about.comp_logistics_tag'),
                  image: "/assets/images/about/Логистика_202608261140.jpeg"
                },
                { 
                  title: t('about.comp_service_title'), 
                  desc: t('about.comp_service_desc'),
                  tag: t('about.comp_service_tag'),
                  image: "/assets/images/about/Сервис_202608251849.jpeg"
                }
              ].map((item: any, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#08090A] p-10 md:p-14 flex flex-col group min-h-[480px]"
                >
                   <div className="w-full aspect-[16/10] bg-white/[0.02] border border-white/5 rounded-sm mb-10 relative overflow-hidden flex items-center justify-center">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      )}
                   </div>

                   <div className="space-y-4">
                      <div className="text-[10px] font-mono text-brand-yellow uppercase tracking-widest">{item.tag}</div>
                      <h3 className="text-[28px] font-[510] text-primary tracking-tight group-hover:text-brand-yellow transition-colors">{item.title}</h3>
                      <p className="text-[14px] md:text-[15px] text-text-secondary leading-relaxed max-w-sm opacity-50 group-hover:opacity-80 transition-opacity">
                         {item.desc}
                      </p>
                   </div>
                </motion.div>
              ))}
           </div>

           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
             className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
           >
              <div className="flex items-center gap-3">
                 <div className="w-1 h-1 rounded-full bg-brand-yellow/20" />
                 <span className="text-[11px] font-mono text-brand-yellow/60 uppercase tracking-[0.2em] flex items-center gap-2">
                   <ParkerLogo className="h-[0.8em]" isInline={true} showBox={false} /> {t('about.distributor_badge')}
                 </span>
              </div>
           </motion.div>
        </section>


        {/* Testimonials Section */}
        <section className="mb-48 overflow-hidden">
           <div className="max-w-4xl mx-auto text-center mb-20 px-6">
              <div className="text-[11px] font-mono text-brand-yellow/40 uppercase tracking-[0.4em] mb-4">{t('about.testimonials_badge')}</div>
              <h2 className="text-[36px] md:text-[42px] font-[590] text-primary tracking-tight">{t('about.testimonials_title')}</h2>
           </div>

           <div className="relative flex overflow-hidden">
              <motion.div 
                className="flex gap-8 px-4"
                animate={{ x: [0, -1920] }}
                transition={{ 
                  duration: 40, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                 {[...Array(2)].map((_, setIdx) => (
                    <React.Fragment key={setIdx}>
                      {[
                        { name: t('about.testimonial_1_name'), company: t('about.testimonial_1_company'), text: t('about.testimonial_1_text') },
                        { name: t('about.testimonial_2_name'), company: t('about.testimonial_2_company'), text: t('about.testimonial_2_text') },
                        { name: t('about.testimonial_3_name'), company: t('about.testimonial_3_company'), text: t('about.testimonial_3_text') },
                        { name: t('about.testimonial_4_name'), company: t('about.testimonial_4_company'), text: t('about.testimonial_4_text') }
                      ].map((item, i) => (
                        <div key={i} className="w-[450px] flex-shrink-0 bg-[#090A0B] border border-white/5 p-10 md:p-12 rounded-sm group hover:border-brand-yellow/20 transition-all">
                           <div className="text-text-secondary italic text-[15px] md:text-[16px] leading-relaxed mb-10 opacity-50 group-hover:opacity-80 transition-opacity">
                              «{item.text}»
                           </div>
                           <div className="pt-8 border-t border-white/5">
                              <div className="text-[14px] font-[510] text-primary mb-1">{item.name}</div>
                              <div className="text-[10px] font-mono text-brand-yellow/40 uppercase tracking-widest">{item.company}</div>
                           </div>
                        </div>
                      ))}
                    </React.Fragment>
                 ))}
              </motion.div>
           </div>
        </section>

      </div>
    </div>
  );
};
