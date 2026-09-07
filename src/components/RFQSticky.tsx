import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useRFQ } from "../context/RFQContext";
import { useTranslation } from "react-i18next";

export const RFQSticky = () => {
  const { items } = useRFQ();
  const { t } = useTranslation();
  const location = useLocation();

  // Don't show on the RFQ page itself
  if (location.pathname === "/rfq") return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-start"
      >
        <Link
          to="/rfq"
          className="bg-brand-yellow hover:bg-white text-background px-5 py-10 rounded-r-2xl shadow-[0_20px_50px_rgba(234,179,8,0.4)] flex flex-col items-center gap-6 group transition-all border-r-4 border-white/30 backdrop-blur-md"
        >
          <div className="relative">
            <ShoppingCart className="w-7 h-7" />
            {items.length > 0 && (
              <span className="absolute -top-4 -left-4 bg-red-600 text-white text-[10px] font-bold min-w-[24px] h-[24px] px-1.5 flex items-center justify-center rounded-full border-2 border-brand-yellow shadow-lg group-hover:scale-110 transition-transform">
                {items.length}
              </span>
            )}
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.4em] [writing-mode:vertical-lr] rotate-180 font-black">
            {t("nav.order_status", "ORDER")}
          </span>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
