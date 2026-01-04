import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Zap, Globe } from 'lucide-react';

const Roadmap: React.FC = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0);

  const phases = [
    {
      year: "2024",
      title: "The Network",
      subtitle: "Laying the foundation",
      icon: <Check size={20} />,
      items: [
        "WhatsApp Integration for ease of access",
        "Marathi LLM Training for vernacular support",
        "22,500 Farmers Onboarded successfully",
        "Initial Crew Matching Algorithms deployed"
      ],
      active: true,
      color: "bg-primary"
    },
    {
      year: "2025-26",
      title: "Intelligence Layer",
      subtitle: "Data-driven decisions",
      icon: <Zap size={20} />,
      items: [
        "Soil Health AI Analysis from photos",
        "Predictive Irrigation Scheduling",
        "Hyper-local Advisory Services",
        "Weather-based Labour Forecasting"
      ],
      active: false,
      color: "bg-secondary"
    },
    {
      year: "2027+",
      title: "Ecosystem",
      subtitle: "Full-stack agriculture",
      icon: <Globe size={20} />,
      items: [
        "Market Integration for Direct Sales",
        "Fintech Layer for Credit & Insurance",
        "Autonomous Logistics Network",
        "Global Export Connections"
      ],
      active: false,
      color: "bg-accent"
    }
  ];

  return (
    <section id="roadmap" className="py-32 bg-charcoal text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary opacity-5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-12">
          <div>
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">The Master Plan</span>
            <h2 className="text-5xl md:text-[64px] font-bold leading-tight">Building the <br/>Farm OS</h2>
          </div>
          <p className="text-gray-400 max-w-sm mt-8 md:mt-0 text-lg font-light leading-relaxed">
            We are moving from connecting labour to organizing the entire agricultural supply chain.
          </p>
        </div>

        <div className="relative">
           {/* Vertical Timeline Line */}
           <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 md:-ml-px w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent opacity-30"></div>

           <div className="space-y-12">
             {phases.map((phase, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: idx * 0.1 }}
                 viewport={{ once: true }}
                 className={`relative flex flex-col md:flex-row gap-8 md:gap-24 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
               >
                 
                 {/* Timeline Marker */}
                 <div className="absolute left-[14px] md:left-1/2 md:-ml-[16px] z-10">
                   <motion.button 
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.95 }}
                     onClick={() => setExpandedPhase(expandedPhase === idx ? null : idx)}
                     className={`w-8 h-8 rounded-full border-4 border-charcoal flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-colors duration-300 ${phase.active ? 'bg-primary text-white' : 'bg-gray-800 text-gray-400 hover:bg-white hover:text-charcoal'}`}
                   >
                     {expandedPhase === idx ? <ChevronDown size={14} /> : <div className="w-2 h-2 rounded-full bg-current" />}
                   </motion.button>
                 </div>

                 {/* Content Card */}
                 <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div 
                      className={`cursor-pointer group ${expandedPhase === idx ? 'bg-white/10' : 'bg-transparent'} p-6 rounded-2xl transition-all duration-300 hover:bg-white/5`}
                      onClick={() => setExpandedPhase(expandedPhase === idx ? null : idx)}
                    >
                      <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                         <span className={`text-6xl font-black text-white/10 mb-2 font-mono ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{phase.year}</span>
                         <h3 className={`text-3xl font-bold mb-1 flex items-center gap-3 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {phase.title}
                            {phase.active && <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>}
                         </h3>
                         <p className="text-gray-400 font-mono text-sm uppercase tracking-wider mb-4">{phase.subtitle}</p>
                      </div>

                      <AnimatePresence>
                        {expandedPhase === idx && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                             <div className={`h-px w-full bg-white/10 my-4 ${idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}></div>
                             <ul className={`space-y-3 ${idx % 2 === 0 ? 'flex flex-col md:items-end' : ''}`}>
                               {phase.items.map((item, i) => (
                                 <motion.li 
                                   key={i}
                                   initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ delay: i * 0.1 }}
                                   className="flex items-center gap-3 text-base text-gray-300 font-light"
                                 >
                                    {idx % 2 !== 0 && <span className={`w-1.5 h-1.5 rounded-full ${phase.active ? 'bg-secondary' : 'bg-gray-600'}`}></span>}
                                    {item}
                                    {idx % 2 === 0 && <span className={`w-1.5 h-1.5 rounded-full ${phase.active ? 'bg-secondary' : 'bg-gray-600'}`}></span>}
                                 </motion.li>
                               ))}
                             </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                 </div>
                 
                 {/* Empty half for spacing */}
                 <div className="md:w-1/2"></div>
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;