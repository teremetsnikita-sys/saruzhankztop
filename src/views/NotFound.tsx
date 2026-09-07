import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Home, ArrowLeft, Search } from "lucide-react";
import { useTranslation } from "react-i18next";

export const NotFound = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
      <Helmet>
        <title>404 - Страница не найдена | Saruzhan Engineering</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <div className="max-w-xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="text-[120px] font-mono font-bold text-white/5 leading-none mb-4 select-none">404</div>
          <h1 className="text-[32px] md:text-[48px] font-[590] text-primary tracking-tight leading-none mb-6">
            СТРАНИЦА НЕ НАЙДЕНА
          </h1>
          <p className="text-[16px] text-text-secondary leading-relaxed opacity-60">
            Запрашиваемый ресурс перемещен или временно недоступен. Воспользуйтесь навигацией или поиском для продолжения.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto h-14 px-10 bg-brand-yellow text-black font-bold rounded-sm flex items-center justify-center gap-3 uppercase tracking-widest text-[13px] hover:brightness-110 transition-all"
          >
            <Home className="w-4 h-4" />
            На главную
          </Link>
          <Link
            to="/catalog"
            className="w-full sm:w-auto h-14 px-10 bg-white/5 border border-white/10 text-white font-bold rounded-sm flex items-center justify-center gap-3 uppercase tracking-widest text-[13px] hover:bg-white/10 transition-all"
          >
            <Search className="w-4 h-4" />
            В каталог
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-12 border-t border-white/5"
        >
          <Link 
            to="/contacts" 
            className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] hover:text-brand-yellow transition-all"
          >
            Связаться с техподдержкой —{">"}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
