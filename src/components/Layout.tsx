/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Phone, MessageSquare, Globe, Search, ShoppingCart, ChevronDown, Menu, X } from "lucide-react";
import { SaruzhanFullLogo } from "./SaruzhanFullLogo";
import { useRFQ } from "../context/RFQContext";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { items } = useRFQ();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const changeLanguage = (lang: string) => {
    const code = lang === 'KZ' ? 'kk' : lang.toLowerCase();
    i18n.changeLanguage(code);
    setLangOpen(false);
    setMenuOpen(false);
  };

  const currentLanguage = i18n.language.toUpperCase() === 'KK' ? 'KZ' : i18n.language.toUpperCase().split('-')[0];

  const navLinks = [
    { name: t('nav.catalog'), path: '/catalog' },
    { name: t('nav.service'), path: '/service' },
    { name: t('nav.distributor'), path: '/partners' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contacts'), path: '/contacts' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] backdrop-blur-[30px] bg-background/70 border-b border-white/5 h-20 transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-full flex items-center justify-between relative">
          {/* Logo Section */}
          <div className="flex items-center gap-6 relative z-[110]">
            <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 group">
              <SaruzhanFullLogo className="text-[18px] md:text-[22px]" />
            </Link>
          </div>
          
          {/* Centered Navigation (Desktop) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="hidden lg:flex items-center gap-10 text-[13px] font-[510] tracking-[0.05em] text-text-secondary uppercase pointer-events-auto">
              {navLinks.map(link => (
                <Link key={link.path} to={link.path} className="hover:text-brand-yellow transition-all hover:tracking-[0.1em] duration-300">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 md:gap-8 relative z-[110]">
            {/* Desktop Language Switcher */}
            <div className="hidden xl:flex items-center">
              <div className="relative">
                <button 
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-2.5 px-3 py-2 bg-white/[0.03] border border-white/5 rounded-sm hover:border-white/10 transition-all group"
                >
                  <Globe className="w-3.5 h-3.5 text-[#8A8F98] group-hover:text-[#E5E5E6] transition-colors" />
                  <span className="text-[11px] font-mono text-[#E5E5E6]">{currentLanguage}</span>
                  <ChevronDown className={`w-3 h-3 text-[#8A8F98] transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
                </button>

                {langOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                    <div className="absolute top-full right-0 mt-2 w-24 bg-[#090A0B] border border-white/10 rounded-sm shadow-2xl py-1 z-50 overflow-hidden">
                      {['RU', 'KZ', 'EN'].map((lang) => (
                        <button 
                          key={lang}
                          onClick={() => changeLanguage(lang)}
                          className={`w-full text-left px-4 py-2.5 text-[11px] font-mono transition-all ${currentLanguage === lang ? 'text-primary bg-white/[0.02]' : 'text-[#8A8F98] hover:text-[#E5E5E6] hover:bg-white/5'}`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <Link to="/rfq" onClick={() => setMenuOpen(false)} className="relative flex items-center gap-2.5 text-[13px] font-[510] text-text-secondary hover:text-brand-yellow transition-colors">
              <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-brand-yellow text-background text-[9px] md:text-[10px] font-bold min-w-[16px] md:min-w-[18px] h-[16px] md:h-[18px] px-1 flex items-center justify-center rounded-full border-2 border-background">
                  {items.length}
                </span>
              )}
            </Link>

            <button 
              onClick={() => {
                navigate('/request');
                setMenuOpen(false);
              }} 
              className="hidden md:flex items-center justify-center h-10 px-6 bg-brand-yellow text-background font-[600] rounded-sm text-[12px] uppercase tracking-wider hover:bg-brand-yellow-hover transition-all shadow-[0_4px_20px_rgba(234,179,8,0.1)] active:scale-95"
            >
              {t('button.order')}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-primary hover:text-brand-yellow transition-colors relative z-[120]"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - "BLACK SCARF" MODE */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] bg-[#08090A] lg:hidden flex flex-col pt-24"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/[0.05] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="flex flex-col h-full px-8 pb-12 overflow-y-auto relative z-10">
              <div className="flex flex-col gap-4 py-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link 
                      to={link.path} 
                      onClick={() => setMenuOpen(false)}
                      className="text-[36px] font-[600] text-white hover:text-brand-yellow transition-all flex items-center justify-between group py-3"
                    >
                      {link.name}
                      <ChevronDown className="w-6 h-6 -rotate-90 opacity-20 group-hover:opacity-100 group-hover:text-brand-yellow transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-auto pt-10 border-t border-white/5 space-y-12">
                <div className="flex flex-col gap-6">
                  <span className="text-[11px] font-mono text-[#8A8F98] uppercase tracking-[0.3em] font-medium">{t('common.language')}</span>
                  <div className="flex gap-10">
                    {['RU', 'KZ', 'EN'].map(lang => (
                      <button 
                        key={lang} 
                        onClick={() => changeLanguage(lang)}
                        className={`text-[16px] font-mono tracking-widest transition-all ${currentLanguage === lang ? 'text-brand-yellow font-bold border-b-2 border-brand-yellow pb-1' : 'text-[#8A8F98]/40 hover:text-[#E5E5E6]'}`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => {
                    navigate('/request');
                    setMenuOpen(false);
                  }}
                  className="w-full py-5 bg-brand-yellow text-black font-bold uppercase tracking-[0.2em] text-[14px] rounded-sm shadow-[0_10px_40px_-10px_rgba(234,179,8,0.4)] active:scale-[0.98] transition-all"
                >
                  {t('button.order')}
                </button>

                <div className="flex justify-between items-end opacity-20 pt-8">
                   <SaruzhanFullLogo className="text-[14px]" />
                   <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-right text-white/40 leading-loose">
                     Engineering <br /> Solutions // 2026
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="py-20 bg-background border-t border-white/5 mt-auto relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <SaruzhanFullLogo className="text-[18px]" />
            </div>
            <p className="text-[14px] text-text-tertiary leading-relaxed font-normal">
              {t('footer.description')}
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-[12px] font-[510] mb-6 text-text-secondary uppercase tracking-tight">{t('footer.nav_title')}</h4>
            <ul className="space-y-3 text-[14px] text-text-tertiary">
              <li><Link to="/catalog" className="hover:text-primary transition-colors">{t('nav.catalog')}</Link></li>
              <li><Link to="/service" className="hover:text-primary transition-colors">{t('nav.service')}</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contacts" className="hover:text-primary transition-colors">{t('nav.contacts')}</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-[12px] font-[510] mb-6 text-text-secondary uppercase tracking-tight">{t('footer.contacts_title')}</h4>
            <ul className="space-y-3 text-[14px] text-text-tertiary">
              <li className="flex flex-col">
                <span className="text-primary font-[510]">+7 708 136 1878</span>
                <span className="text-[13px]">{t('footer.call_free')}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-primary">{t('footer.city')}</span>
                <span className="text-[13px]">{t('footer.address')}</span>
              </li>
            </ul>
          </div>

          <div className="col-span-1 flex flex-col items-start md:items-end">
             <div className="text-[12px] text-text-tertiary md:text-right mb-6">
                {t('footer.developed_by')}: saruzhan.kz <br />
                {t('footer.rights_reserved')} // 2026
             </div>
             <div className="md:text-right">
                <a 
                  href="https://adbit.kz/ru" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[18px] font-bold text-[#FF0000] hover:opacity-80 transition-opacity flex items-center gap-2"
                >
                  {t('footer.made_in', 'Made in')} Adb
                </a>
             </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex justify-between items-center text-[11px] text-text-tertiary/40 font-mono tracking-tight">
          <div className="flex items-center gap-6">
            <span>{t('footer.motto')}</span>
          </div>
          <span>{t('footer.encryption')}: AES-256</span>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: any }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);
