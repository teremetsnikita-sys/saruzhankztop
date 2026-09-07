/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ArrowRight, CheckCircle2, AlertCircle, RefreshCw, Box } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CROSS_REF_DATA = [
  { otherBrand: "Bosch Rexroth", otherPart: "R900561278", parkerPart: "D1VW001CNJW", name: "Направленный клапан D1VW", status: "match" },
  { otherBrand: "Eaton Vickers", otherPart: "DG4V-3-2A-M-U-C6-60", parkerPart: "D1VW020BNJW", name: "Направленный клапан D1VW", status: "match" },
  { otherBrand: "Hydac", otherPart: "0160D010BN4HC", parkerPart: "PR3081Q", name: "Фильтроэлемент", status: "match" },
  { otherBrand: "Danfoss", otherPart: "151G0035", parkerPart: "TE0130MW110AAAA", name: "Гидромотор серии TE", status: "match" },
];

export const CrossReferenceView = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [searching, setSearching] = useState(false);

  const { t } = useTranslation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setSearching(true);
    // Имитация поиска
    setTimeout(() => {
      const found = CROSS_REF_DATA.filter(item => 
        item.otherPart.toLowerCase().includes(query.toLowerCase()) ||
        item.otherBrand.toLowerCase().includes(query.toLowerCase())
      );
      setResults(found);
      setSearching(false);
    }, 800);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{t("cross_ref.title")}</h1>
          <p className="text-lg text-muted-foreground">
            {t("cross_ref.subtitle")}
          </p>
        </div>

        <div className="bg-surface border border-border-accent rounded-[40px] p-8 md:p-12 stripe-shadow mb-16">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground w-6 h-6" />
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("cross_ref.input_placeholder")}
                className="w-full bg-background border border-border-accent rounded-2xl py-6 pl-16 pr-6 text-xl focus:outline-none focus:border-primary transition-all"
              />
            </div>
            <button 
              type="submit" 
              disabled={searching}
              className="bg-primary text-primary-foreground px-12 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {searching ? <RefreshCw className="w-6 h-6 animate-spin" /> : t("cross_ref.search_button")}
            </button>
          </form>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <span className="text-sm text-muted-foreground font-mono uppercase tracking-widest">{t("cross_ref.popular_brands")}</span>
            {["Rexroth", "Vickers", "Hydac", "Danfoss", "Pall"].map(brand => (
              <button key={brand} onClick={() => setQuery(brand)} className="px-4 py-2 bg-background border border-border-accent rounded-xl text-sm font-medium hover:border-primary transition-colors">
                {brand}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {results.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 gap-6"
            >
              <h2 className="text-2xl font-bold mb-4">{t("cross_ref.results_found")} {results.length}</h2>
              {results.map((res, i) => (
                <div key={i} className="bg-surface border border-border-accent rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-primary transition-all">
                  <div className="flex items-center gap-8 w-full md:w-auto">
                    <div className="text-center">
                      <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">{res.otherBrand}</div>
                      <div className="text-xl font-bold text-muted-foreground">{res.otherPart}</div>
                    </div>
                    <div className="text-primary">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-primary uppercase tracking-widest mb-1">Parker Equivalent</div>
                      <div className="text-2xl font-black">{res.parkerPart}</div>
                      <div className="text-sm text-muted-foreground">{res.name}</div>
                    </div>
                  </div>
                  <div className="flex gap-4 w-full md:w-auto">
                    <Link to="/catalog" className="flex-1 md:flex-none px-6 py-4 border border-border-accent rounded-xl font-bold hover:bg-background transition-colors flex items-center justify-center gap-2">
                      <Box className="w-4 h-4" /> {t("catalog.catalog")}
                    </Link>
                    <Link to={`/request?type=quote&sku=${res.parkerPart}`} className="flex-1 md:flex-none px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:scale-105 transition-all text-center">
                      {t("cross_ref.request_quote")}
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : query && !searching && results.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-surface border border-dashed border-border-accent rounded-3xl"
            >
              <AlertCircle className="w-16 h-16 text-muted-foreground/30 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">{t("cross_ref.no_results")}</h3>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                {t("cross_ref.contact_specialist")}
              </p>
              <Link to="/contacts" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
                {t("common.contact_us")}
              </Link>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};
