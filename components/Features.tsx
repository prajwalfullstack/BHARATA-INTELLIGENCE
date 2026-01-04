import React from 'react';
import { AlertCircle, CheckCircle2, XCircle, TrendingUp, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <section className="py-32 bg-charcoal text-white relative overflow-hidden">
      {/* Background Animated Blobs for Dark Mode */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[150px] opacity-30 mix-blend-screen animate-pulse duration-[10s]"></div>
         <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-secondary/10 rounded-full blur-[120px] opacity-20 mix-blend-screen animate-pulse delay-700 duration-[12s]"></div>
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-[64px] font-bold mb-8 tracking-tight leading-[1.1]">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Broken System</span><br/> 
              vs Our Solution.
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Farmers face unprecedented labour challenges while workers struggle for income security. 
              Traditional hiring networks collapse at scale.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Left: The Problem */}
          <div className="space-y-6">
            <div className="px-4 py-2 bg-red-500/10 border border-red-500/20 text-red-400 rounded-full inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-4 w-fit">
              <AlertCircle size={14} /> The Challenge
            </div>
            
            <div className="grid gap-6">
              <ProblemCard 
                icon={<Clock />} 
                title="Labour Shortage" 
                desc="Peak season arrives, crews disappear. 40% of harvest value is at risk due to delays."
              />
              <ProblemCard 
                icon={<XCircle />} 
                title="Wage Chaos" 
                desc="Unpredictable costs make budgeting impossible. Farmers overpay, workers under-earn."
              />
              <ProblemCard 
                icon={<AlertCircle />} 
                title="Zero Reliability" 
                desc="No accountability. Workers ghost farmers. Farmers ghost payments. Trust is broken."
              />
            </div>
          </div>

          {/* Right: The Solution */}
          <div className="space-y-6 lg:mt-0 mt-12">
             <div className="px-4 py-2 bg-primary/20 border border-primary/30 text-primary rounded-full inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-4 w-fit">
              <CheckCircle2 size={14} /> The Bharat Intelligence Way
            </div>

            <div className="grid gap-6">
              <SolutionCard 
                icon={<CheckCircle2 />} 
                title="AI-Matched Crews" 
                desc="We predict demand and lock in crews 48 hours in advance. 99.2% fulfillment rate."
              />
              <SolutionCard 
                icon={<TrendingUp />} 
                title="Transparent Pay" 
                desc="Standardized rates based on skill and region. Direct payments. No middlemen cuts."
              />
              <SolutionCard 
                icon={<ShieldCheck />} 
                title="Guaranteed Work" 
                desc="If a crew cancels, our algorithm instantly reroutes backup teams. Zero downtime."
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ProblemCard = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 0.98, backgroundColor: "rgba(239, 68, 68, 0.05)" }}
    className="p-8 rounded-[24px] bg-white/5 border border-white/5 hover:border-red-500/20 transition-all duration-300 group backdrop-blur-sm"
  >
    <div className="flex items-start gap-6">
      <div className="p-4 rounded-2xl bg-red-500/10 text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-red-200 transition-colors">{title}</h3>
        <p className="text-gray-400 text-base leading-relaxed font-light">{desc}</p>
      </div>
    </div>
  </motion.div>
);

const SolutionCard = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02, y: -5 }}
    className="p-8 rounded-[24px] bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/20 relative overflow-hidden group backdrop-blur-md shadow-lg shadow-transparent hover:shadow-primary/20 transition-all duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative flex items-start gap-6">
      <div className="p-4 rounded-2xl bg-primary text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{title}</h3>
        <p className="text-gray-300 text-base leading-relaxed font-light">{desc}</p>
      </div>
    </div>
  </motion.div>
);

export default Features;