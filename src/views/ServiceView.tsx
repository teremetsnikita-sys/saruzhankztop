/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Wrench, Settings, Search, ArrowRight, ShieldCheck, Zap, Phone, Check, Layers } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ServiceView = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: "rvd",
      title: t('service.items.rvd.title'),
      tag: t('service.items.rvd.tag'),
      code: t('service.items.rvd.code'),
      description: t('service.items.rvd.desc'),
      image: "/assets/images/services/rvd/Hydraulic_hoses_and_metallic_fit…_202608251532.jpeg",
      features: [
        t('service.items.rvd.f1'),
        t('service.items.rvd.f2'),
        t('service.items.rvd.f3'),
        t('service.items.rvd.f4')
      ],
      icon: <Wrench className="w-5 h-5" />
    },
    {
      id: "fittings",
      title: t('service.items.fittings.title'),
      tag: t('service.items.fittings.tag'),
      code: t('service.items.fittings.code'),
      description: t('service.items.fittings.desc'),
      image: "/assets/images/services/fittings/Metallic_pipe_fittings_on_black_202608251540.jpeg",
      features: [
        t('service.items.fittings.f1'),
        t('service.items.fittings.f2'),
        t('service.items.fittings.f3'),
        t('service.items.fittings.f4')
      ],
      icon: <Layers className="w-5 h-5" />
    },
    {
      id: "diagnostics",
      title: t('service.items.diagnostics.title'),
      tag: t('service.items.diagnostics.tag'),
      code: t('service.items.diagnostics.code'),
      description: t('service.items.diagnostics.desc'),
      image: "/assets/images/services/diagnostics/Diagnostic_device_on_black_backg…_202608251546.jpeg",
      features: [
        t('service.items.diagnostics.f1'),
        t('service.items.diagnostics.f2'),
        t('service.items.diagnostics.f3'),
        t('service.items.diagnostics.f4')
      ],
      icon: <Zap className="w-5 h-5" />
    }
  ];

  const comparisonData = [
    {
      category: t('service.comparison.cat_op'),
      features: [
        { name: t('service.comparison.f_urgent'), p: true, a: true, d: true },
        { name: t('service.comparison.f_warranty'), p: true, a: true, d: true },
        { name: t('service.comparison.f_parker'), p: true, a: true, d: true },
        { name: t('service.comparison.f_mobile'), p: true, a: false, d: true }
      ]
    },
    {
      category: t('service.comparison.cat_tech'),
      features: [
        { name: t('service.comparison.f_test_bench'), p: true, a: false, d: false },
        { name: t('service.comparison.f_ultrasonic'), p: true, a: true, d: false },
        { name: t('service.comparison.f_laser'), p: false, a: true, d: true },
        { name: t('service.comparison.f_video'), p: false, a: false, d: true }
      ]
    },
    {
      category: t('service.comparison.cat_doc'),
      features: [
        { name: t('service.comparison.f_passport'), p: true, a: true, d: false },
        { name: t('service.comparison.f_protocol'), p: true, a: false, d: true },
        { name: t('service.comparison.f_defect'), p: false, a: false, d: true },
        { name: t('service.comparison.f_cert'), p: true, a: true, d: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Main Hero Header */}
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-12"
          >
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/10 rounded-sm mb-8">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-yellow">{t('service.badge')}</span>
              </div>
              <h1 className="text-[64px] md:text-[110px] font-[590] text-primary leading-[0.9] tracking-[-0.05em] mb-12">
                {t('service.title_1')} <br />
                <span className="text-brand-yellow">{t('service.title_2')}</span>
              </h1>
            </div>
            
            <div className="hidden lg:block pb-4">
               <div className="flex flex-col gap-2 border-l border-brand-yellow/30 pl-8 py-2">
                  <span className="text-[10px] font-mono text-brand-yellow uppercase tracking-widest opacity-40">{t('service.standard_label')}</span>
                  <span className="text-[32px] font-[510] text-brand-yellow">ISO_9001</span>
               </div>
            </div>
          </motion.div>
        </header>

        {/* Featured Services - Integrated CTA Style */}
        <div className="grid grid-cols-1 gap-12 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative group overflow-hidden bg-[#000000] border border-white/5 rounded-[32px] p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] hover:border-brand-yellow/20 transition-all duration-500`}
            >
              {/* Abstract background elements like Home CTA */}
              <div className="absolute top-0 left-0 -translate-x-1/3 w-[500px] h-[500px] bg-brand-yellow/[0.02] rounded-full blur-[100px] -translate-y-1/2 pointer-events-none group-hover:bg-brand-yellow/[0.05] transition-colors duration-700" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/[0.01] rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                {/* Content Side */}
                <div className="flex-1 max-w-2xl">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="inline-flex items-center gap-3 px-3 py-1 bg-brand-yellow/[0.05] border border-brand-yellow/20 rounded-full">
                      <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-yellow">{service.tag}</span>
                    </div>
                    <span className="text-[10px] font-mono text-brand-yellow/40 uppercase tracking-widest">{service.code}</span>
                  </div>
  
                  <h3 className="text-[36px] md:text-[56px] font-[590] text-primary leading-[1.05] tracking-tight mb-10 group-hover:text-brand-yellow transition-colors duration-300">
                    {service.title}
                  </h3>
  
                  <p className="text-[16px] md:text-[18px] text-text-secondary leading-relaxed mb-12 font-[300] max-w-xl opacity-60">
                    {service.description}
                  </p>
  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10 mb-14">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-4 group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow/40 group-hover/item:bg-brand-yellow transition-colors" />
                        <span className="text-[15px] text-foreground/70 font-mono uppercase tracking-widest group-hover/item:text-brand-yellow transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
  
                  <div className="flex flex-col sm:flex-row gap-6">
                    <Link 
                      to={`/service/${service.id}`}
                      className="inline-flex h-16 px-12 bg-brand-yellow text-background font-[600] rounded-full text-[14px] uppercase tracking-wider hover:bg-brand-yellow-hover transition-all items-center justify-center gap-3 group/btn shadow-xl shadow-brand-yellow/10"
                    >
                      <span>{t('service.details_btn')}</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
  
                {/* Photo / Visual Area - Free Space */}
                <div className={`w-full ${service.id === 'fittings' ? 'lg:w-[45%]' : 'lg:w-[38%]' } aspect-[4/3] relative overflow-hidden transition-all duration-500`}>
                   {/* Placeholder for Photo */}
                   <div className="absolute inset-0 flex items-center justify-center">
                    {service.image ? (
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-contain transition-transform duration-1000"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-6 opacity-30 group-hover:opacity-100 transition-all duration-500">
                         <div className="w-20 h-20 rounded-full border border-brand-yellow/20 flex items-center justify-center bg-brand-yellow/[0.02] text-brand-yellow">
                            {service.icon}
                         </div>
                         <div className="text-center">
                           <span className="block text-[11px] font-mono uppercase tracking-[0.5em] text-brand-yellow mb-2">ТЕХ_РЕСУРС_УЗЛА</span>
                           <span className="block text-[9px] font-mono text-brand-yellow/60 uppercase tracking-[0.2em]">{service.id}_visual_spec.jpg</span>
                         </div>
                      </div>
                    )}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Comparison Table - Direct unit-like continuation */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/10 rounded-full mb-6">
               <span className="text-[10px] font-mono text-brand-yellow uppercase tracking-[0.3em]">{t('service.matrix_badge')}</span>
            </div>
            <h2 className="text-[36px] md:text-[56px] font-[590] text-primary tracking-tight leading-[1.05] mb-6">{t('service.matrix_title')}</h2>
            <p className="text-text-secondary text-[16px] md:text-[18px] max-w-2xl mx-auto font-[300] opacity-50">
              {t('service.matrix_desc')}
            </p>
          </motion.div>

          <div className="relative overflow-visible">
            <div className="overflow-visible">
              <div className="min-w-full relative">
                {/* Sticky Table Header - Exact Navbar Glassmorphism */}
                <div className="sticky top-[80px] z-30 grid grid-cols-4 py-10 backdrop-blur-[30px] bg-background/70 border-y border-white/5 items-center px-10 shadow-2xl">
                  <div className="text-[16px] font-[590] text-primary tracking-tight uppercase tracking-[0.2em] text-[11px]">{t('service.params_label')}</div>
                  <div className="text-center text-[16px] font-[590] text-primary tracking-tight">{t('service.items.rvd.title')}</div>
                  <div className="text-center text-[16px] font-[590] text-primary tracking-tight">{t('service.items.fittings.title')}</div>
                  <div className="text-center text-[16px] font-[590] text-primary tracking-tight">{t('service.items.diagnostics.title')}</div>
                </div>

                {comparisonData.map((group, gIndex) => (
                  <div key={gIndex} className="mb-12 px-10">
                    <div className="py-8 text-[20px] font-[590] text-primary border-b border-brand-yellow/10 mb-4 tracking-tight">
                      {group.category}
                    </div>
                    <div className="space-y-0">
                      {group.features.map((feature, fIndex) => (
                        <div 
                          key={fIndex} 
                          className="grid grid-cols-4 py-5 border-b border-white/[0.03] items-center group/row"
                        >
                          <div className="text-[15px] text-text-secondary group-hover/row:text-brand-yellow transition-colors pr-8 font-[300]">
                            {feature.name}
                          </div>
                          <div className="flex justify-center">
                            {feature.p ? <Check className="w-5 h-5 text-brand-yellow" /> : <span className="text-white/10">—</span>}
                          </div>
                          <div className="flex justify-center">
                            {feature.a ? <Check className="w-5 h-5 text-brand-yellow" /> : <span className="text-white/10">—</span>}
                          </div>
                          <div className="flex justify-center">
                            {feature.d ? <Check className="w-5 h-5 text-brand-yellow" /> : <span className="text-white/10">—</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Mobile Service */}
        <section className="relative overflow-hidden rounded-[24px] border border-white/5 bg-[#050505] p-10 md:p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
          {/* Badge */}
          <div className="relative z-10 inline-flex items-center gap-3 px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/20 rounded-sm mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-yellow">{t('service.emergency_badge')}</span>
          </div>

          {/* Abstract background elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-[36px] md:text-[60px] font-[590] tracking-[-0.04em] leading-[1.05] text-primary mb-8">
              {t('service.emergency_title_1')} <br /> {t('service.emergency_title_2')}
            </h2>
            <p className="text-[18px] md:text-[20px] text-text-secondary leading-relaxed mb-12 max-w-xl">
              {t('service.emergency_desc')}
            </p>
            
            <div className="flex flex-wrap gap-6 items-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-brand-yellow text-black font-[510] rounded-sm hover:bg-brand-yellow-hover transition-all gap-3 text-[13px] uppercase tracking-widest">
                {t('service.emergency_btn')}
              </button>
              <a href="tel:+77072001059" className="text-[20px] font-[510] text-primary hover:text-brand-yellow transition-colors">
                +7 (707) 200 10 59
              </a>
            </div>
          </div>

          {/* Technical detail in the corner */}
          <div className="absolute bottom-12 right-12 hidden lg:block opacity-20">
            <div className="text-right">
              <div className="text-[10px] font-mono text-text-tertiary uppercase tracking-[0.3em] mb-2">{t('service.hub_label')}</div>
              <div className="text-[14px] font-mono text-primary">{t('service.hub_value')}</div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
