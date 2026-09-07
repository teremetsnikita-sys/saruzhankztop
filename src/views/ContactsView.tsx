/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MapPin, Phone, Mail, MessageSquare, Clock, Globe, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ContactsView = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#08090A] pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 mb-20 md:mb-24 items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/10 rounded-sm mb-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-yellow">{t('contacts.badge')}</span>
            </div>
            <h1 className="text-[42px] md:text-[72px] font-[590] text-primary leading-[0.95] tracking-[-0.04em]">
              {t('contacts.title_1')} <br />
              <span className="text-brand-yellow">{t('contacts.title_2')}</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[16px] md:text-[20px] text-text-secondary leading-relaxed font-[300] max-w-xl opacity-60">
              {t('contacts.desc')}
            </p>
          </motion.div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden mb-24">
          
          {/* Support & Sales */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#090A0B] p-10 md:p-14 group hover:bg-brand-yellow/[0.01] border border-transparent hover:border-brand-yellow/10 transition-all flex flex-col justify-between min-h-[500px]"
          >
            <div>
              <div className="text-[10px] font-mono text-brand-yellow/40 uppercase tracking-[0.3em] mb-12">{t('contacts.support_sales_tag')}</div>
              <h2 className="text-[24px] md:text-[28px] font-[510] text-primary tracking-tight mb-8">{t('contacts.support_title')}</h2>
              <div className="space-y-10">
                {[
                  { phone: "+7 708 136 1878", email: "sales_1@saruzhan.kz" },
                  { phone: "+7 708 136 1889", email: "sales_5@saruzhan.kz" },
                  { phone: "+7 707 200 1059", email: "rna@saruzhan.kz" }
                ].map((contact, idx) => (
                  <div key={idx} className="group/item">
                    <p className="text-[10px] font-mono text-brand-yellow/20 uppercase tracking-widest mb-3">{t('contacts.contact_prefix')}_0{idx + 1}</p>
                    <div className="space-y-2">
                      <a 
                        href={`tel:${contact.phone.replace(/\s/g, '')}`} 
                        className="text-[22px] text-primary hover:text-brand-yellow transition-colors flex items-center gap-2 group/link font-[510]"
                      >
                        {contact.phone}
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover/link:opacity-100 transition-all text-brand-yellow" />
                      </a>
                      <a 
                        href={`mailto:${contact.email}`} 
                        className="text-[16px] text-text-secondary hover:text-brand-yellow transition-colors font-[510] block opacity-60 group-hover/item:opacity-100"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-12 mt-12 border-t border-white/5">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-brand-yellow/40" />
                <span className="text-[13px] text-brand-yellow/60 font-mono uppercase tracking-widest text-[10px]">{t('contacts.social_tag')}</span>
              </div>
            </div>
          </motion.div>

          {/* Location & Time */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#090A0B] p-10 md:p-14 group hover:bg-brand-yellow/[0.01] border border-transparent hover:border-brand-yellow/10 transition-all flex flex-col justify-between min-h-[500px]"
          >
            <div>
              <div className="text-[10px] font-mono text-brand-yellow/40 uppercase tracking-[0.3em] mb-12">{t('contacts.office_facility_tag')}</div>
              <h2 className="text-[24px] md:text-[28px] font-[510] text-primary tracking-tight mb-8">{t('contacts.address_title')}</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-mono text-brand-yellow/40 uppercase tracking-widest mb-2">{t('contacts.location_label')}</p>
                  <p className="text-[20px] text-primary font-[510]">{t('contacts.city')}</p>
                  <p className="text-[15px] text-text-secondary mt-1 opacity-50">{t('contacts.street')}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-brand-yellow/40 uppercase tracking-widest mb-2">{t('contacts.working_hours_label')}</p>
                  <p className="text-[18px] text-primary font-[510]">{t('contacts.working_days')}</p>
                  <p className="text-[14px] text-text-secondary mt-1 opacity-50">{t('contacts.saturday')}</p>
                </div>
              </div>
            </div>
            <div className="pt-12 mt-12 border-t border-white/5">
              <div className="flex items-center gap-3 text-brand-yellow/40">
                <Clock className="w-4 h-4" />
                <span className="text-[13px] text-brand-yellow/60 font-mono uppercase tracking-widest text-[10px]">{t('contacts.sunday')}</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Map Section */}
        <section className="relative">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full h-[600px] bg-[#090A0B] border border-white/5 rounded-sm overflow-hidden relative group"
          >
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.654767232231!2d63.63!3d53.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDEyJzM2LjAiTiA2M8KwMzcnNDguMCJF!5e0!3m2!1sru!2skz!4v1620000000000!5m2!1sru!2skz" 
               className="w-full h-full border-0" 
               loading="lazy"
               title="Saruzhan Office Map"
             ></iframe>
          </motion.div>
          
          <div className="mt-8 flex justify-center">
             <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
                   <span className="text-[10px] font-mono text-brand-yellow/60 uppercase tracking-widest">{t('contacts.op_center')}</span>
                </div>
                <div className="w-8 h-px bg-brand-yellow/10" />
                <div className="text-[10px] font-mono text-brand-yellow/40 uppercase tracking-widest">{t('contacts.kostanay_branch')}</div>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
};

