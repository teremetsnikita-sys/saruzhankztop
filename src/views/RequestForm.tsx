import React, { useState, useEffect, useMemo } from "react";
import { motion } from "motion/react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Settings, 
  FileText,
  ChevronDown,
  Box,
  ShieldCheck
} from "lucide-react";

import { FAMILIES, PRODUCT_TYPES, SERIES, SERVICES } from "../data/mockData";
import { Search, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getLocalized } from "@/lib/utils";

type RequestType = "request" | "service" | "quote";

export const RequestForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const typeParam = searchParams.get("type") as RequestType;
  const categoryParam = searchParams.get("category");
  const skuParam = searchParams.get("sku");
  
  const [requestType, setRequestType] = useState<RequestType>(typeParam || "request");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    equipment: categoryParam || "",
    service: "",
    message: skuParam ? `${t('request_form.sku_request')} ${skuParam}\n\n` : ""
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState<false | 'equipment' | 'service'>(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEquipment = useMemo(() => {
    if (!searchQuery) return SERIES;
    const query = searchQuery.toLowerCase();
    return SERIES.filter(s => 
      getLocalized(s.name, i18n.language).toLowerCase().includes(query) ||
      getLocalized(s.descriptionHtml, i18n.language).toLowerCase().includes(query)
    );
  }, [searchQuery, i18n.language]);

  const filteredServices = useMemo(() => {
    if (!searchQuery) return SERVICES;
    const query = searchQuery.toLowerCase();
    return SERVICES.filter(s => 
      getLocalized(s.title, i18n.language).toLowerCase().includes(query) ||
      getLocalized(s.description, i18n.language).toLowerCase().includes(query)
    );
  }, [searchQuery, i18n.language]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    try {
      // Combine equipment and service for the backend or send separately
      const categoryText = [
        formData.equipment ? `${t('request_form.equipment_prefix')} ${formData.equipment}` : null,
        formData.service ? `${t('request_form.service_prefix')} ${formData.service}` : null
      ].filter(Boolean).join(' | ');

      const response = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          category: categoryText,
          message: formData.message,
          source: `${t('request_form.portal_name')} (/request)`,
          type: requestType === 'service' ? t('request_form.type_service') : t('request_form.type_selection')
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to send request');
      }
    } catch (error) {
      console.error('Error:', error);
      alert(t('rfq.error_sending'));
    } finally {
      setIsSending(false);
    }
  };

  const getTitle = () => {
    switch (requestType) {
      case "service": return t('request_form.title_service');
      case "quote": return t('request_form.title_quote');
      default: return t('request_form.title_request');
    }
  };

  const getIcon = () => {
    switch (requestType) {
      case "service": return <Settings className="w-5 h-5 text-brand-yellow" />;
      case "quote": return <FileText className="w-5 h-5 text-brand-yellow" />;
      default: return <MessageSquare className="w-5 h-5 text-brand-yellow" />;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-yellow/20 shadow-[0_0_40px_-10px_rgba(var(--color-brand-yellow),0.3)]">
            <CheckCircle2 className="w-8 h-8 text-brand-yellow" />
          </div>
          <h2 className="text-[28px] font-[590] text-primary tracking-tight mb-4">{t('request_form.success_title')}</h2>
          <p className="text-[15px] text-text-secondary leading-relaxed mb-10 opacity-60">
            {t('request_form.success_desc')}
          </p>
          <button 
            onClick={() => navigate("/")}
            className="w-full py-4 bg-brand-yellow text-black font-[510] rounded-sm hover:brightness-110 transition-all uppercase tracking-widest text-[12px]"
          >
            {t('industry.back_home')}
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-brand-yellow/20">
      {/* Navigation - Refined scale */}
      <nav className="h-20 border-b border-white/5 flex items-center px-6 md:px-12 justify-between sticky top-0 bg-background/80 backdrop-blur-xl z-50">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-text-secondary hover:text-brand-yellow transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[11px] font-mono uppercase tracking-widest">{t('request_form.back')}</span>
        </button>
        <div className="w-20" /> {/* Spacer */}
      </nav>

      <main className="max-w-[1440px] mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-start">
          {/* Content side - Optimized Typography */}
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/10 rounded-sm mb-6">
              {getIcon()}
              <span className="text-[9px] font-mono text-brand-yellow uppercase tracking-[0.3em]">
                {requestType === 'service' ? t('common.service') : requestType === 'quote' ? t('request_form.title_quote') : t('request_form.title_request')}
              </span>
            </div>
            <h1 className="text-[36px] md:text-[64px] font-[590] tracking-tight leading-[1.05] mb-8">
              {getTitle()}.
            </h1>
            <p className="text-[17px] md:text-[19px] text-text-secondary leading-relaxed opacity-70 mb-12 max-w-lg font-[300]">
              {t('request_form.fill_form')}
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div>
                  <div className="text-[16px] font-[510] text-primary mb-1">{t('industry.solutions_title_1')} {t('industry.solutions_title_2')}</div>
                  <div className="text-[14px] text-text-secondary opacity-50">{t('brand_detail.parker.hub_design_desc')}</div>
                </div>
              </div>
              <div className="flex gap-6 items-start group">
                <div>
                  <div className="text-[16px] font-[510] text-primary mb-1">{t('brand_detail.parker.adv_consult_title')}</div>
                  <div className="text-[14px] text-text-secondary opacity-50">{t('brand_detail.parker.adv_consult_desc')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form side - Refined Look */}
          <div className="bg-[#070809] border border-white/5 p-8 md:p-14 rounded-sm relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/[0.02] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              <div className="space-y-8">
                <div className="grid grid-cols-1 gap-8">
                  <div className="space-y-4">
                    <label className="block text-[10px] font-mono text-brand-yellow/50 uppercase tracking-[0.2em]">{t('request_form.name_label')}</label>
                    <input 
                      required
                      type="text" 
                      placeholder={t('request_form.name_placeholder')}
                      className="w-full bg-white/[0.01] border border-white/10 rounded-sm py-4 px-5 text-[16px] text-primary focus:border-brand-yellow/50 focus:bg-white/[0.03] outline-none transition-all placeholder:text-white/10"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="block text-[10px] font-mono text-brand-yellow/50 uppercase tracking-[0.2em]">{t('request_form.phone_label')}</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="+7 (___) ___-__-__"
                        className="w-full bg-white/[0.01] border border-white/10 rounded-sm py-4 px-5 text-[16px] text-primary focus:border-brand-yellow/50 focus:bg-white/[0.03] outline-none transition-all placeholder:text-white/10"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-[10px] font-mono text-brand-yellow/50 uppercase tracking-[0.2em]">{t('request_form.email_label')}</label>
                      <input 
                        type="email" 
                        placeholder="example@mail.com"
                        className="w-full bg-white/[0.01] border border-white/10 rounded-sm py-4 px-5 text-[16px] text-primary focus:border-brand-yellow/50 focus:bg-white/[0.03] outline-none transition-all placeholder:text-white/10"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                {/* Separated Selection Inputs */}
                <div className="space-y-6 pt-4">
                  {/* Equipment Selection */}
                  <div className="space-y-3">
                    <label className="block text-[10px] font-mono text-brand-yellow/50 uppercase tracking-[0.2em]">{t('nav.catalog')}</label>
                    <div 
                      onClick={() => setIsDropdownOpen(isDropdownOpen === 'equipment' ? false : 'equipment')}
                      className={`w-full bg-white/[0.01] border ${isDropdownOpen === 'equipment' ? 'border-brand-yellow/50' : 'border-white/10'} rounded-sm py-4 px-5 text-[14px] text-primary cursor-pointer flex items-center justify-between transition-all hover:bg-white/[0.03]`}
                    >
                      <span className={formData.equipment ? "text-primary" : "text-white/20"}>
                        {formData.equipment ? formData.equipment : t('request_form.industry_placeholder')}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-brand-yellow/60 transition-transform duration-300 ${isDropdownOpen === 'equipment' ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
 
                  {/* Services Selection */}
                  <div className="space-y-3">
                    <label className="block text-[10px] font-mono text-brand-yellow/50 uppercase tracking-[0.2em]">{t('rfq.services_label')}</label>
                    <div 
                      onClick={() => setIsDropdownOpen(isDropdownOpen === 'service' ? false : 'service')}
                      className={`w-full bg-white/[0.01] border ${isDropdownOpen === 'service' ? 'border-brand-yellow/50' : 'border-white/10'} rounded-sm py-4 px-5 text-[14px] text-primary cursor-pointer flex items-center justify-between transition-all hover:bg-white/[0.03]`}
                    >
                      <span className={formData.service ? "text-primary" : "text-white/20"}>
                        {formData.service ? formData.service : t('request_form.industry_placeholder')}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-brand-yellow/60 transition-transform duration-300 ${isDropdownOpen === 'service' ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-[10px] font-mono text-brand-yellow/50 uppercase tracking-[0.2em]">{t('request_form.message_label')}</label>
                  <textarea 
                    rows={4}
                    placeholder={t('request_form.message_placeholder')}
                    className="w-full bg-white/[0.01] border border-white/10 rounded-sm py-4 px-5 text-[16px] text-primary focus:border-brand-yellow/50 focus:bg-white/[0.03] outline-none transition-all placeholder:text-white/10 resize-none min-h-[120px]"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSending}
                className="w-full py-6 bg-brand-yellow text-black font-[700] rounded-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-[14px] mt-6 shadow-[0_20px_40px_-10px_rgba(234,179,8,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? t('request_form.sending') : t('request_form.submit_button')}
                <Send className="w-5 h-5" />
              </button>

              <div className="pt-6 border-t border-white/5 flex items-center justify-center gap-4 opacity-40">
                 <ShieldCheck className="w-4 h-4 text-brand-yellow" />
                 <span className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">{t('footer.rights_reserved')} Parker</span>
              </div>
            </form>

            {/* Surface Selection UI - Large Informative Panels */}
            {isDropdownOpen && (
              <div className="absolute inset-0 z-[100] bg-[#070809] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
                   <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                      <span className="text-[11px] font-mono uppercase tracking-widest text-brand-yellow">
                        {isDropdownOpen === 'equipment' ? t('request_form.select_equipment') : t('request_form.select_service')}
                      </span>
                   </div>
                   <button 
                     onClick={() => setIsDropdownOpen(false)}
                     className="p-2 hover:bg-white/5 rounded-full transition-colors"
                   >
                      <X className="w-5 h-5 text-white/40" />
                   </button>
                </div>

                {isDropdownOpen === 'equipment' && (
                  <div className="flex-1 flex flex-col overflow-hidden">
                    <div className="p-6 bg-white/[0.02] border-b border-white/5">
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                        <input 
                          type="text"
                          placeholder={t('request_form.search_placeholder')}
                          className="w-full bg-black/40 border border-white/10 rounded-sm py-3 pl-12 pr-4 text-[14px] text-primary focus:border-brand-yellow/30 outline-none"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          autoFocus
                        />
                      </div>
                    </div>
                    <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
                       <div className="space-y-6 p-4">
                         {FAMILIES.filter(f => {
                           if (!searchQuery) return true;
                           const q = searchQuery.toLowerCase();
                           return getLocalized(f.name, i18n.language).toLowerCase().includes(q);
                         }).map(family => (
                           <div key={family.id} className="space-y-3">
                              <div className="flex items-center gap-3 px-2">
                                <div className="w-1 h-4 bg-brand-yellow rounded-full" />
                                <span className="text-[12px] font-mono uppercase tracking-[0.2em] text-brand-yellow/60">{getLocalized(family.name, i18n.language)}</span>
                              </div>
                              <div className="grid grid-cols-1 gap-1">
                                {PRODUCT_TYPES.filter(pt => pt.familyId === family.id).map(pt => (
                                  <div key={pt.id} className="space-y-1">
                                    <div className="px-4 py-2 text-[11px] font-mono text-white/20 uppercase tracking-widest bg-white/[0.02] rounded-sm">
                                      {getLocalized(pt.name, i18n.language)}
                                    </div>
                                    <div className="grid grid-cols-1 gap-1 pl-4">
                                      {SERIES.filter(s => s.productTypeId === pt.id).filter(s => {
                                        if (!searchQuery) return true;
                                        const q = searchQuery.toLowerCase();
                                        return getLocalized(s.name, i18n.language).toLowerCase().includes(q) ||
                                               getLocalized(s.descriptionHtml, i18n.language).toLowerCase().includes(q);
                                      }).map(series => (
                                        <div 
                                          key={series.id}
                                          onClick={() => {
                                            setFormData({...formData, equipment: getLocalized(series.name, i18n.language)});
                                            setIsDropdownOpen(false);
                                          }}
                                          className="p-3 hover:bg-brand-yellow/[0.05] border border-transparent hover:border-brand-yellow/10 cursor-pointer group transition-all flex items-center gap-4 rounded-sm"
                                        >
                                          <div className="w-10 h-10 bg-black border border-white/5 rounded-sm shrink-0 overflow-hidden flex items-center justify-center">
                                             {series.images?.[0] ? (
                                               <img src={series.images[0]} alt="" className="w-full h-full object-cover opacity-60 group-hover:opacity-100" />
                                             ) : (
                                               <Box className="w-4 h-4 text-white/10" />
                                             )}
                                          </div>
                                          <div>
                                            <div className="text-[13px] text-primary group-hover:text-brand-yellow font-[510] leading-snug">{getLocalized(series.name, i18n.language)}</div>
                                            <div className="text-[10px] text-text-secondary/40 line-clamp-1" dangerouslySetInnerHTML={{ __html: getLocalized(series.descriptionHtml, i18n.language) }} />
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                           </div>
                         ))}
                       </div>
                    </div>
                  </div>
                )}

                {isDropdownOpen === 'service' && (
                  <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
                    <div className="grid grid-cols-1 gap-2">
                      {filteredServices.map(service => (
                        <div 
                          key={service.id}
                          onClick={() => {
                            setFormData({...formData, service: getLocalized(service.title, i18n.language)});
                            setIsDropdownOpen(false);
                          }}
                          className="p-6 hover:bg-brand-yellow/[0.05] border border-transparent hover:border-brand-yellow/10 cursor-pointer group transition-all flex items-start gap-6 rounded-sm"
                        >
                          <div className="w-20 h-20 bg-black border border-white/5 rounded-sm shrink-0 overflow-hidden">
                             {service.image ? (
                               <img src={service.image} alt="" className="w-full h-full object-cover opacity-60 group-hover:opacity-100" />
                             ) : (
                               <Settings className="w-6 h-6 m-7 text-white/10" />
                             )}
                          </div>
                          <div>
                            <div className="text-[16px] text-primary group-hover:text-brand-yellow font-[510] mb-2">{getLocalized(service.title, i18n.language)}</div>
                            <div className="text-[13px] text-text-secondary/40 leading-relaxed line-clamp-3">{getLocalized(service.description, i18n.language)}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
