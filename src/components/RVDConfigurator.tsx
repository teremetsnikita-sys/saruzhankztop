import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { 
  ChevronRight, 
  ArrowLeft, 
  Ruler, 
  Settings, 
  Box, 
  CheckCircle2, 
  RefreshCw,
  Hash,
  Activity,
  Layers,
  Cpu
} from "lucide-react";

const STEPS = (t: any) => [
  { id: "hose", title: t('rvd_configurator.step_hose'), code: t('rvd_configurator.code_hose'), icon: <Layers className="w-4 h-4" /> },
  { id: "size", title: t('rvd_configurator.step_size'), code: t('rvd_configurator.code_size'), icon: <Activity className="w-4 h-4" /> },
  { id: "fittings", title: t('rvd_configurator.step_fittings'), code: t('rvd_configurator.code_fittings'), icon: <Settings className="w-4 h-4" /> },
  { id: "params", title: t('rvd_configurator.step_params'), code: t('rvd_configurator.code_params'), icon: <Ruler className="w-4 h-4" /> },
  { id: "result", title: t('rvd_configurator.step_result'), code: t('rvd_configurator.code_result'), icon: <CheckCircle2 className="w-4 h-4" /> },
];

const OPTIONS = (t: any) => ({
  hose: [
    { id: "1sn", name: "1SN EN 853", desc: t('rvd_configurator.hoses.1sn_desc'), pressure: `${t('rvd_configurator.hoses.pressure_prefix')}225 bar` },
    { id: "2sn", name: "2SN EN 853", desc: t('rvd_configurator.hoses.2sn_desc'), pressure: `${t('rvd_configurator.hoses.pressure_prefix')}415 bar` },
    { id: "4sp", name: "4SP EN 856", desc: t('rvd_configurator.hoses.4sp_desc'), pressure: `${t('rvd_configurator.hoses.pressure_prefix')}450 bar` },
    { id: "4sh", name: "4SH EN 856", desc: t('rvd_configurator.hoses.4sh_desc'), pressure: `${t('rvd_configurator.hoses.pressure_prefix')}500 bar` },
    { id: "rvd_rvd", name: "RVD R15", desc: t('rvd_configurator.hoses.r15_desc'), pressure: `${t('rvd_configurator.hoses.pressure_prefix')}700 bar` },
  ],
  size: [
    { id: "dn6", name: "DN 06", label: "1/4\"", dash: "-04" },
    { id: "dn10", name: "DN 10", label: "3/8\"", dash: "-06" },
    { id: "dn12", name: "DN 12", label: "1/2\"", dash: "-08" },
    { id: "dn16", name: "DN 16", label: "5/8\"", dash: "-10" },
    { id: "dn19", name: "DN 19", label: "3/4\"", dash: "-12" },
    { id: "dn25", name: "DN 25", label: "1\"", dash: "-16" },
    { id: "dn31", name: "DN 31", label: "1.1/4\"", dash: "-20" },
    { id: "dn38", name: "DN 38", label: "1.1/2\"", dash: "-24" },
    { id: "dn51", name: "DN 51", label: "2\"", dash: "-32" },
  ],
  fittings: [
    { id: "dkol", name: "DKOL (Metric)", desc: t('rvd_configurator.fittings_desc.dkol') },
    { id: "dkos", name: "DKOS (Metric)", desc: t('rvd_configurator.fittings_desc.dkos') },
    { id: "bsp", name: "BSP (British)", desc: t('rvd_configurator.fittings_desc.bsp') },
    { id: "jic", name: "JIC (SAE)", desc: t('rvd_configurator.fittings_desc.jic') },
    { id: "jis", name: "JIS (Japanese)", desc: t('rvd_configurator.fittings_desc.jis') },
    { id: "flange_3k", name: "SFL 3000 PSI", desc: t('rvd_configurator.fittings_desc.flange_3k') },
    { id: "flange_6k", name: "SFS 6000 PSI", desc: t('rvd_configurator.fittings_desc.flange_6k') },
  ],
});

export const RVDConfigurator = () => {
  const { t } = useTranslation();
  const steps = STEPS(t);
  const options = OPTIONS(t);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selections, setSelections] = useState<any>({
    hose: null,
    size: null,
    fitting1: null,
    fitting2: null,
    length: "1000",
    quantity: "1"
  });

  const nextStep = () => setCurrentStep(s => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setCurrentStep(s => Math.max(s - 1, 0));

  const selectOption = (key: string, value: any) => {
    setSelections(prev => ({ ...prev, [key]: value }));
    if (key === 'hose' || key === 'size') {
        setTimeout(nextStep, 400);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="p-20 text-center space-y-8 bg-[#0C0D0F]">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 rounded-full bg-brand-yellow/20 border border-brand-yellow/40 flex items-center justify-center mx-auto mb-10"
        >
          <CheckCircle2 className="w-12 h-12 text-brand-yellow" />
        </motion.div>
        <h2 className="text-[32px] md:text-[42px] font-[590] text-white tracking-tight">{t('rvd_configurator.success_title')}</h2>
        <p className="text-[#8A8F98] max-w-md mx-auto font-[300]">{t('rvd_configurator.success_desc')}</p>
        <button 
          onClick={() => { setIsSuccess(false); setCurrentStep(0); setSelections({hose:null, size:null, fitting1:null, fitting2:null, length:"1000", quantity:"1"}); }}
          className="px-10 py-4 bg-white/5 border border-white/10 text-white rounded-sm text-[12px] uppercase tracking-widest hover:bg-white/10 transition-all"
        >
          {t('rvd_configurator.success_action')}
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/5 overflow-hidden">
      {/* Left Side: Controls */}
      <div className="lg:col-span-7 bg-[#0C0D0F] p-8 md:p-12">
        {/* Progress Header */}
        <div className="flex items-center gap-4 mb-16 overflow-x-auto pb-4 no-scrollbar">
          {steps.map((step, i) => (
            <div key={step.id} className="flex items-center gap-4 shrink-0">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${i <= currentStep ? 'bg-brand-yellow border-brand-yellow text-black' : 'border-white/10 text-white/20'}`}>
                    {i < currentStep ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-[9px] font-mono uppercase tracking-[0.2em] ${i <= currentStep ? 'text-brand-yellow/40' : 'text-white/10'}`}>{step.code}</span>
                    <span className={`text-[12px] font-[590] uppercase tracking-wider ${i <= currentStep ? 'text-white' : 'text-white/20'}`}>{step.title}</span>
                  </div>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className={`w-8 h-px transition-colors duration-500 ${i < currentStep ? 'bg-brand-yellow/20' : 'bg-white/5'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div 
                key="step_hose"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 mb-12">
                   <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center">
                      <Layers className="w-6 h-6 text-brand-yellow" />
                   </div>
                   <div>
                      <h2 className="text-[24px] font-[590] text-white tracking-tight">{t('rvd_configurator.hose_selection_title')}</h2>
                      <p className="text-[14px] text-[#8A8F98] font-[300]">{t('rvd_configurator.hose_selection_desc')}</p>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {options.hose.map(opt => (
                    <button 
                      key={opt.id}
                      onClick={() => selectOption('hose', opt)}
                      className={`group p-6 text-left border rounded-sm transition-all duration-300 relative overflow-hidden ${selections.hose?.id === opt.id ? 'bg-white/[0.05] border-white/40' : 'bg-white/[0.01] border-white/5 hover:border-white/20'}`}
                    >
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                           <span className="text-[16px] font-[590] text-white">{opt.name}</span>
                           <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{opt.pressure}</span>
                        </div>
                        <p className="text-[13px] text-[#8A8F98] font-[300] leading-relaxed mb-4">{opt.desc}</p>
                        <div className="h-px w-0 group-hover:w-full bg-brand-yellow/40 transition-all duration-500" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div 
                key="step_size"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 mb-12">
                   <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center">
                      <Activity className="w-6 h-6 text-brand-yellow" />
                   </div>
                   <div>
                      <h2 className="text-[24px] font-[590] text-white tracking-tight">{t('rvd_configurator.size_selection_title')}</h2>
                      <p className="text-[14px] text-[#8A8F98] font-[300]">{t('rvd_configurator.size_selection_desc')}</p>
                   </div>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
                  {options.size.map(opt => (
                    <button 
                      key={opt.id}
                      onClick={() => selectOption('size', opt)}
                      className={`p-6 border rounded-sm transition-all text-center flex flex-col gap-2 ${selections.size?.id === opt.id ? 'bg-brand-yellow text-black border-brand-yellow' : 'bg-white/[0.02] border-white/5 text-[#8A8F98] hover:border-white/20'}`}
                    >
                      <span className="text-[18px] font-mono font-bold">{opt.name}</span>
                      <span className={`text-[10px] font-mono uppercase tracking-widest ${selections.size?.id === opt.id ? 'text-black/60' : 'text-white/20'}`}>{opt.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div 
                key="step_fittings"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-12"
              >
                <div>
                   <h3 className="text-[11px] font-mono text-[#8A8F98] uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                     <div className="w-1 h-1 bg-brand-yellow rounded-full" /> {t('rvd_configurator.fitting_a_label')}
                   </h3>
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {options.fittings.map(opt => (
                      <button 
                        key={opt.id}
                        onClick={() => selectOption('fitting1', opt)}
                        className={`py-4 px-3 text-center border rounded-sm transition-all text-[12px] font-[590] uppercase tracking-wider ${selections.fitting1?.id === opt.id ? 'bg-brand-yellow text-black border-brand-yellow' : 'bg-white/[0.02] border-white/5 text-[#8A8F98] hover:border-white/20'}`}
                      >
                        {opt.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                   <h3 className="text-[11px] font-mono text-[#8A8F98] uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                     <div className="w-1 h-1 bg-brand-yellow rounded-full" /> {t('rvd_configurator.fitting_b_label')}
                   </h3>
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {options.fittings.map(opt => (
                      <button 
                        key={opt.id}
                        onClick={() => selectOption('fitting2', opt)}
                        className={`py-4 px-3 text-center border rounded-sm transition-all text-[12px] font-[590] uppercase tracking-wider ${selections.fitting2?.id === opt.id ? 'bg-brand-yellow text-black border-brand-yellow' : 'bg-white/[0.02] border-white/5 text-[#8A8F98] hover:border-white/20'}`}
                      >
                        {opt.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex justify-end">
                   <button 
                     onClick={nextStep}
                     disabled={!selections.fitting1 || !selections.fitting2}
                     className="h-14 px-10 bg-brand-yellow text-black font-[600] rounded-sm text-[12px] uppercase tracking-wider hover:brightness-110 disabled:opacity-20 transition-all flex items-center gap-3"
                   >
                     {t('rvd_configurator.action_continue')} <ChevronRight className="w-4 h-4" />
                   </button>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div 
                key="step_params"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-12 max-w-md mx-auto py-8"
              >
                <div className="space-y-8">
                  <div>
                    <label className="text-[10px] font-mono text-[#8A8F98] uppercase tracking-[0.3em] block mb-4">{t('rvd_configurator.length_label')}</label>
                    <div className="relative">
                      <input 
                        type="number"
                        value={selections.length}
                        onChange={(e) => selectOption('length', e.target.value)}
                        className="w-full bg-white/[0.02] border-b border-white/10 p-6 text-[42px] font-[590] text-white focus:outline-none focus:border-brand-yellow/40 transition-colors text-center font-mono"
                      />
                      <Ruler className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-white/10" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-[#8A8F98] uppercase tracking-[0.3em] block mb-4">{t('rvd_configurator.quantity_label')}</label>
                    <div className="flex items-center justify-center gap-8">
                       <button 
                        onClick={() => selectOption('quantity', Math.max(1, parseInt(selections.quantity) - 1).toString())}
                        className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[24px] text-white/40 hover:bg-white/[0.05] hover:text-white transition-all"
                       >-</button>
                       <span className="text-[42px] font-[590] text-white min-w-[80px] text-center font-mono">{selections.quantity}</span>
                       <button 
                        onClick={() => selectOption('quantity', (parseInt(selections.quantity) + 1).toString())}
                        className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[24px] text-white/40 hover:bg-white/[0.05] hover:text-white transition-all"
                       >+</button>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={nextStep}
                  className="w-full h-16 bg-brand-yellow text-black font-[600] rounded-sm text-[14px] uppercase tracking-wider hover:brightness-110 transition-all mt-8"
                >
                  {t('rvd_configurator.action_form_spec')}
                </button>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div 
                key="step_result"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <div className="p-8 bg-white/[0.02] border border-white/5 rounded-sm space-y-8">
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-full bg-brand-yellow/10 flex items-center justify-center">
                         <CheckCircle2 className="w-8 h-8 text-brand-yellow" />
                      </div>
                      <div>
                         <h3 className="text-[20px] font-[590] text-white">{t('rvd_configurator.confirm_title')}</h3>
                         <p className="text-[14px] text-[#8A8F98] font-[300]">{t('rvd_configurator.confirm_desc')}</p>
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
                      {[
                        { l: t('rvd_configurator.summary_hose'), v: selections.hose?.name },
                        { l: t('rvd_configurator.summary_size'), v: selections.size?.name },
                        { l: t('rvd_configurator.summary_fitting_a'), v: selections.fitting1?.name },
                        { l: t('rvd_configurator.summary_fitting_b'), v: selections.fitting2?.name },
                        { l: t('rvd_configurator.summary_length'), v: `${selections.length} mm` },
                        { l: t('rvd_configurator.summary_quantity'), v: `${selections.quantity} ${t('common.pcs')}` },
                      ].map((item, i) => (
                        <div key={i} className="bg-[#0C0D0F] p-4 flex flex-col gap-1">
                           <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">{item.l}</span>
                           <span className="text-[13px] font-mono text-white font-medium">{item.v}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button 
                    onClick={() => setCurrentStep(0)}
                    disabled={isSubmitting}
                    className="h-16 border border-white/10 rounded-sm text-white font-[600] text-[12px] uppercase tracking-wider hover:bg-white/[0.05] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    <RefreshCw className="w-4 h-4" /> {t('rvd_configurator.action_change')}
                  </button>
                  <button 
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="h-16 bg-brand-yellow text-black font-[600] rounded-sm text-[14px] uppercase tracking-wider hover:brightness-110 transition-all shadow-xl shadow-brand-yellow/20 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? <RefreshCw className="w-5 h-5 animate-spin" /> : t('rvd_configurator.action_submit')}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {currentStep > 0 && currentStep < 4 && (
          <button 
            onClick={prevStep}
            className="mt-12 text-[#8A8F98] hover:text-white text-[11px] font-mono uppercase tracking-[0.2em] flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> {t('rvd_configurator.back_action')}
          </button>
        )}
      </div>

      {/* Right Side: Blueprint Preview */}
      <div className="lg:col-span-5 bg-[#08090A] p-12 relative flex flex-col justify-center border-l border-white/5">
         {/* Background Grid */}
         <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
         
         <div className="relative z-10">
            <div className="text-[10px] font-mono text-[#8A8F98] uppercase tracking-widest mb-12 flex items-center gap-2">
               <Cpu className="w-3 h-3" /> {t('rvd_configurator.blueprint_tag')}
            </div>
            
            {/* Visual Hose Representation */}
            <div className="mb-20 flex items-center justify-center h-40 relative">
               <div className="absolute inset-0 flex items-center justify-center">
                  {/* Fitting Left */}
                  <motion.div 
                    animate={{ 
                       opacity: selections.fitting1 ? 1 : 0.1,
                       scale: selections.fitting1 ? 1 : 0.9
                    }}
                    className="w-16 h-12 bg-white/10 border border-white/20 rounded-l-md relative"
                  >
                    <div className="absolute -top-8 left-0 text-[9px] font-mono text-white/20 uppercase tracking-widest">{t('rvd_configurator.side_a')}</div>
                  </motion.div>
                  
                  {/* Hose Body */}
                  <motion.div 
                    animate={{ 
                      width: selections.hose ? '200px' : '60px',
                      height: selections.size ? `${20 + parseInt(selections.size.dash.replace('-',''))}px` : '30px'
                    }}
                    className="bg-gradient-to-r from-white/20 via-white/10 to-white/20 border-y border-white/20 flex items-center justify-center overflow-hidden transition-all duration-500"
                  >
                     <div className="flex gap-2 opacity-20">
                        {[...Array(10)].map((_, i) => <div key={i} className="w-2 h-20 border-r border-white/20 -rotate-12 shrink-0" />)}
                     </div>
                  </motion.div>

                  {/* Fitting Right */}
                  <motion.div 
                    animate={{ 
                       opacity: selections.fitting2 ? 1 : 0.1,
                       scale: selections.fitting2 ? 1 : 0.9
                    }}
                    className="w-16 h-12 bg-white/10 border border-white/20 rounded-r-md relative"
                  >
                    <div className="absolute -top-8 right-0 text-[9px] font-mono text-white/20 uppercase text-right tracking-widest">{t('rvd_configurator.side_b')}</div>
                  </motion.div>
               </div>
            </div>

            {/* Technical Specs List */}
            <div className="space-y-6">
               <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                     <span className="text-[10px] font-mono text-[#8A8F98] uppercase tracking-widest">{t('rvd_configurator.base_series')}</span>
                     <span className={`text-[15px] font-[590] transition-colors ${selections.hose ? 'text-white' : 'text-white/10'}`}>
                        {selections.hose?.name || t('rvd_configurator.pending')}
                     </span>
                  </div>
                  <div className="flex flex-col gap-2">
                     <span className="text-[10px] font-mono text-[#8A8F98] uppercase tracking-widest">{t('rvd_configurator.size_dn')}</span>
                     <span className={`text-[15px] font-[590] transition-colors ${selections.size ? 'text-white' : 'text-white/10'}`}>
                        {selections.size ? `${selections.size.name} (${selections.size.label})` : t('rvd_configurator.pending')}
                     </span>
                  </div>
               </div>
               
               <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-mono text-[#8A8F98] uppercase tracking-widest">{t('rvd_configurator.point_a')}</span>
                    <span className={`text-[14px] font-[500] transition-colors ${selections.fitting1 ? 'text-white' : 'text-white/10'}`}>
                      {selections.fitting1?.name || t('rvd_configurator.not_set')}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-mono text-[#8A8F98] uppercase tracking-widest">{t('rvd_configurator.point_b')}</span>
                    <span className={`text-[14px] font-[500] transition-colors ${selections.fitting2 ? 'text-white' : 'text-white/10'}`}>
                      {selections.fitting2?.name || t('rvd_configurator.not_set')}
                    </span>
                  </div>
               </div>
               <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-mono text-[#8A8F98] uppercase tracking-widest">{t('rvd_configurator.length_spec')}</span>
                    <span className="text-[20px] font-mono font-[500] text-white">{selections.length}mm</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-mono text-[#8A8F98] uppercase tracking-widest">{t('rvd_configurator.quantity_spec')}</span>
                    <span className="text-[20px] font-mono font-[500] text-white">{selections.quantity}x</span>
                  </div>
               </div>
            </div>

            {/* System Status */}
            <div className="mt-20 pt-8 border-t border-white/5 flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white/20 rounded-full animate-pulse" />
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]">{t('rvd_configurator.config_active')}</span>
               </div>
               <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]">{t('rvd_configurator.stable_version')}</span>
            </div>
         </div>
      </div>
    </div>
  );
};

