import React from 'react';
import { MessageCircle, Cpu, Handshake, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-32 bg-offwhite relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full max-w-7xl mx-auto opacity-5 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-secondary rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary font-mono text-xs tracking-widest uppercase mb-4 border border-secondary/20">The Process</span>
          <h2 className="text-5xl md:text-[64px] font-bold text-darkgray mb-6 leading-[1.1] tracking-tight">
            Labour OS in Action
          </h2>
          <p className="text-xl text-mediumgray max-w-2xl mx-auto font-light leading-relaxed">
            Complex logistics handled by simple chat. No apps to learn. No forms to fill.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[100px] left-[16%] right-[16%] h-[2px] z-0">
             <div className="w-full h-full bg-gradient-to-r from-primary/20 via-secondary/40 to-accent/20"></div>
             {/* Animated pulsing dot traveling the line */}
             <motion.div 
               animate={{ x: ['0%', '100%'], opacity: [0, 1, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px]"
             />
          </div>

          <StepCard 
            number="01"
            icon={<MessageCircle size={32} />}
            title="Signal Need"
            desc="Farmer sends a voice note or text on WhatsApp. 'Need 10 people for grapes tomorrow'."
            color="bg-primary"
            textColor="text-primary"
          />
          
          <StepCard 
            number="02"
            icon={<Cpu size={32} />}
            title="AI Matching"
            desc="Our engine analyzes 50+ data points: location, skill, reliability, and weather patterns."
            color="bg-secondary"
            textColor="text-secondary"
            delay={0.2}
            isCenter={true}
          />
          
          <StepCard 
            number="03"
            icon={<Handshake size={32} />}
            title="Execution"
            desc="Crew arrives. Work is tracked via geolocation. Payment releases instantly upon completion."
            color="bg-accent"
            textColor="text-accent"
            delay={0.4}
          />
          
        </div>
        
        <div className="mt-16 text-center">
             <a href="#join" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300">
                Start your first job <ArrowRight size={18} />
             </a>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ number, icon, title, desc, color, textColor, delay = 0, isCenter = false }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    viewport={{ once: true }}
    className={`relative z-10 ${isCenter ? 'md:-mt-8' : ''}`}
  >
    <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/40 border border-white/60 h-full flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 backdrop-blur-sm">
      <div className={`w-20 h-20 rounded-2xl ${color} flex items-center justify-center text-white mb-8 shadow-lg shadow-${color}/30 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
        {icon}
      </div>
      <div className={`text-6xl font-black ${textColor} opacity-10 absolute top-6 right-8 select-none font-mono`}>
        {number}
      </div>
      <h3 className="text-2xl font-bold text-darkgray mb-4 tracking-tight">{title}</h3>
      <p className="text-gray-500 text-lg leading-relaxed font-light">
        {desc}
      </p>
    </div>
  </motion.div>
);

export default HowItWorks;