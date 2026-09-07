/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRFQ } from "../context/RFQContext";
import { 
  Trash2, 
  Send, 
  ChevronRight, 
  PackageCheck, 
  ArrowRight, 
  Plus, 
  Wrench, 
  Zap, 
  Activity, 
  Settings2,
  Box,
  Image as ImageIcon
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const RFQView = () => {
  const { t } = useTranslation();
  const { items, addItem, removeItem, updateQuantity, clear } = useRFQ();
  const [submitted, setSubmitted] = useState(false);
  const [quickOrderText, setQuickOrderText] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [isSending, setIsSending] = useState(false);

  const handleQuickOrder = () => {
    const codes = quickOrderText.split(/[\n,;]+/).map(c => c.trim()).filter(c => c);
    const timestamp = Date.now();
    codes.forEach((code, index) => {
      addItem({
        skuId: `bulk-${code}-${timestamp}-${index}-${Math.random().toString(36).slice(2, 7)}`,
        articleCode: code,
        seriesName: t("rfq.quick_order_name"),
        category: "product"
      });
    });
    setQuickOrderText("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          items: items,
          source: t('rfq.source_rfq'),
          type: t('rfq.type_quote')
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          clear();
        }, 3000);
      } else {
        throw new Error('Failed to send RFQ');
      }
    } catch (error) {
      console.error('Error:', error);
      alert(t('rfq.error_sending'));
    } finally {
      setIsSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#08090A] pt-40 pb-20 text-center px-4">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-xl mx-auto"
        >
          <div className="w-20 h-20 bg-brand-yellow/[0.03] border border-brand-yellow/20 text-brand-yellow rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_40px_-10px_rgba(var(--color-brand-yellow),0.2)]">
            <PackageCheck className="w-10 h-10" />
          </div>
          <h1 className="text-[36px] md:text-[56px] font-[590] text-primary leading-[1.05] tracking-tight mb-6">{t("rfq.submitted_title")}</h1>
          <p className="text-[16px] md:text-[18px] text-text-secondary font-[300] leading-relaxed mb-12 opacity-60">
            {t("rfq.submitted_desc")}
          </p>
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-yellow/[0.03] border border-brand-yellow/10 rounded-sm">
            <span className="text-[10px] font-mono text-brand-yellow uppercase tracking-[0.3em]">{t("rfq.request_id_label")}: #SRZ-2026-0421</span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#08090A] pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/10 text-brand-yellow text-[10px] font-mono uppercase tracking-[0.3em] rounded-sm">
                {t("rfq.badge")}
              </div>
              <div className="h-3 w-px bg-white/10" />
              <span className="text-[12px] text-text-secondary uppercase tracking-wider font-mono opacity-40">RFQ_Management_v2.5</span>
            </div>
            <h1 className="text-[42px] md:text-[72px] font-[590] text-primary leading-[0.95] tracking-[-0.04em] mb-12 uppercase">
              {t("rfq.title_1")} <br />
              <span className="text-brand-yellow">{t("rfq.title_2")}</span>
            </h1>
          </motion.div>
        </header>

        {/* Quick Order Section */}
        <div className="mb-20 bg-[#090A0B] border border-white/5 rounded-sm p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/[0.01] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-sm border border-brand-yellow/20 flex items-center justify-center bg-brand-yellow/[0.02]">
                <Send className="w-4 h-4 text-brand-yellow" />
              </div>
              <h2 className="text-[20px] md:text-[24px] font-[510] text-primary tracking-tight uppercase">{t("rfq.quick_order_title")}</h2>
            </div>
            
            <p className="text-[14px] text-text-secondary mb-8 font-[300] opacity-50 max-w-xl">
              {t("rfq.quick_order_desc")}
            </p>
            
            <div className="flex flex-col md:flex-row gap-6">
              <textarea 
                value={quickOrderText}
                onChange={(e) => setQuickOrderText(e.target.value)}
                placeholder={t("rfq.quick_order_placeholder")}
                className="flex-1 bg-white/[0.02] border border-white/10 rounded-sm p-5 min-h-[120px] focus:outline-none focus:border-brand-yellow/30 transition-all font-mono text-[13px] text-primary placeholder:text-text-secondary/30"
              />
              <button 
                onClick={handleQuickOrder}
                disabled={!quickOrderText.trim()}
                className="h-fit px-10 py-5 bg-brand-yellow text-[#08090A] rounded-sm font-[600] uppercase tracking-wider text-[12px] hover:bg-white transition-all disabled:opacity-20 disabled:cursor-not-allowed md:w-64"
              >
                {t("rfq.add_btn")}
              </button>
            </div>
          </div>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-8">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[11px] font-mono text-brand-yellow uppercase tracking-[0.4em]">{t("rfq.products_label")}</span>
                  <div className="flex-1 h-px bg-white/5" />
                </div>
                
                <div className="space-y-12">
                  {Object.entries(
                    items.reduce((acc, item) => {
                      const cat = item.category || t("common.other");
                      if (!acc[cat]) acc[cat] = [];
                      acc[cat].push(item);
                      return acc;
                    }, {} as Record<string, typeof items>)
                  ).map(([category, catItems]: [string, any]) => (
                    <div key={category} className="space-y-4">
                      <div className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest px-1">{category}</div>
                      <div className="space-y-4">
                        {(catItems as any[]).map((item) => (
                          <motion.div 
                            layout
                            key={item.skuId} 
                            className="bg-[#090A0B] p-6 border border-white/5 rounded-sm group hover:border-brand-yellow/20 transition-all"
                          >
                            <div className="flex items-start gap-5 mb-6">
                              <div className="w-14 h-14 bg-white/[0.02] border border-white/10 rounded-sm flex items-center justify-center shrink-0 overflow-hidden group-hover:border-brand-yellow/30 transition-all">
                                {item.image ? (
                                  <img src={item.image} alt={item.articleCode} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                                ) : (
                                  <Box className="w-5 h-5 text-white/10" />
                                )}
                              </div>
                              <div className="min-w-0">
                                <div className="text-[9px] font-mono text-brand-yellow/40 uppercase tracking-widest mb-1">{t("rfq.item_badge")}</div>
                                <h3 className="text-[16px] font-[510] text-primary tracking-tight mb-1 truncate group-hover:text-brand-yellow transition-colors">{item.articleCode}</h3>
                                <p className="text-[11px] text-text-secondary font-[300] opacity-40 truncate">{item.seriesName}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/5">
                              <div className="flex items-center border border-white/10 rounded-sm bg-white/[0.02] overflow-hidden h-9">
                                <button 
                                  onClick={() => updateQuantity(item.skuId, item.quantity - 1)}
                                  className="w-8 flex items-center justify-center hover:bg-brand-yellow/10 transition-colors text-text-secondary hover:text-brand-yellow text-xs"
                                >
                                  -
                                </button>
                                <span className="w-10 text-center text-[12px] font-mono text-primary border-x border-white/10 leading-none">
                                  {item.quantity}
                                </span>
                                <button 
                                  onClick={() => updateQuantity(item.skuId, item.quantity + 1)}
                                  className="w-8 flex items-center justify-center hover:bg-brand-yellow/10 transition-colors text-text-secondary hover:text-brand-yellow text-xs"
                                >
                                  +
                                </button>
                              </div>
                              
                              <button 
                                onClick={() => removeItem(item.skuId)}
                                className="p-2 text-text-secondary/30 hover:text-red-400/50 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={clear}
                  className="mt-8 inline-flex items-center gap-3 text-[11px] font-mono text-brand-yellow/40 hover:text-brand-yellow uppercase tracking-[0.2em] transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                  {t("rfq.clear_btn")}
                </button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-[#090A0B] border border-white/5 p-8 md:p-10 rounded-sm sticky top-32 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="px-3 py-1 bg-brand-yellow/[0.03] border border-brand-yellow/10 text-brand-yellow text-[10px] font-mono uppercase tracking-[0.3em] rounded-sm">
                    {t("rfq.summary_badge")}
                  </div>
                  <div className="h-3 w-px bg-white/10" />
                  <span className="text-[12px] text-text-secondary uppercase tracking-wider font-mono opacity-40">Summary</span>
                </div>
                <h2 className="text-[24px] md:text-[28px] font-[510] text-primary tracking-tight mb-10 uppercase">{t("rfq.summary_title")}</h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-4">
                    <div>
                      <label className="text-[10px] font-mono text-brand-yellow/40 uppercase tracking-[0.2em] mb-3 block">{t("rfq.name_label")}</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder={t("rfq.name_placeholder")}
                        className="w-full bg-white/[0.02] border border-white/10 rounded-sm py-4 px-5 focus:outline-none focus:border-brand-yellow/30 transition-all text-[14px] text-primary placeholder:text-text-secondary/20"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-mono text-brand-yellow/40 uppercase tracking-[0.2em] mb-3 block">{t("request_form.phone_label")}</label>
                        <input 
                          required
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+7 (___) ___ __ __"
                          className="w-full bg-white/[0.02] border border-white/10 rounded-sm py-4 px-5 focus:outline-none focus:border-brand-yellow/30 transition-all text-[14px] text-primary placeholder:text-text-secondary/20"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-mono text-brand-yellow/40 uppercase tracking-[0.2em] mb-3 block">{t("request_form.email_label")}</label>
                        <input 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="mail@example.com"
                          className="w-full bg-white/[0.02] border border-white/10 rounded-sm py-4 px-5 focus:outline-none focus:border-brand-yellow/30 transition-all text-[14px] text-primary placeholder:text-text-secondary/20"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/5">
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center justify-between text-[11px] font-mono text-text-secondary uppercase tracking-widest">
                        <span>Items_Count</span>
                        <span className="text-primary">{items.length}</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-text-secondary uppercase tracking-widest pt-4 border-t border-white/5">
                        <span>Total_Volume</span>
                        <span className="text-brand-yellow">{items.reduce((acc, item) => acc + item.quantity, 0)} {t("common.pcs")}</span>
                      </div>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSending}
                      className="w-full h-16 bg-brand-yellow text-[#08090A] rounded-full font-[600] uppercase tracking-widest text-[12px] flex items-center justify-center gap-3 hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                    >
                      {isSending ? t('rfq.sending_status') : t("rfq.submit_btn")} <ArrowRight className="w-4 h-4" />
                    </button>
                    <Link to="/catalog" className="w-full h-14 mt-4 border border-white/5 text-text-secondary rounded-full font-[510] uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-white/[0.03] transition-all">
                      {t("rfq.back_btn")}
                    </Link>
                    <p className="mt-6 text-[10px] text-text-secondary/30 text-center font-[300] leading-relaxed">
                      {t("rfq.terms")}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-32 px-10 text-center border border-white/5 rounded-sm bg-[#090A0B] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-yellow/[0.01] to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-brand-yellow/[0.02] border border-brand-yellow/10 text-brand-yellow/20 rounded-full flex items-center justify-center mx-auto mb-10">
                <PackageCheck className="w-8 h-8" />
              </div>
              <h3 className="text-[24px] md:text-[32px] font-[510] text-primary tracking-tight mb-4 uppercase">{t("rfq.empty_title")}</h3>
              <p className="text-[15px] md:text-[16px] text-text-secondary mb-12 font-[300] max-w-md mx-auto opacity-50">
                {t("rfq.empty_desc")}
              </p>
              <Link to="/catalog" className="inline-flex items-center gap-4 px-10 py-5 border border-brand-yellow/20 text-brand-yellow rounded-full font-[600] uppercase tracking-wider text-[11px] hover:bg-brand-yellow/10 transition-all">
                {t("rfq.go_catalog")} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

