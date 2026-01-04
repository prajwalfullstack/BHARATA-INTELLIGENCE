import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 mb-40 border-b border-gray-100 pb-20">
          <MetricItem endValue={22500} suffix="+" label="Active Farmers" color="text-primary" />
          <MetricItem endValue={7} prefix="₹" suffix=" Cr" label="Funds Raised" color="text-secondary" />
          <MetricItem endValue={60} prefix="< " suffix="s" label="Match Speed" color="text-accent" />
          <MetricItem endValue={99.2} suffix="%" decimals={1} label="Fulfillment" color="text-primary" />
        </div>

        {/* Featured Testimonial */}
        <div className="relative group cursor-default">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-20 blur-3xl rounded-[3rem] group-hover:opacity-30 transition-opacity duration-500"></div>
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative bg-darkgray rounded-[2.5rem] p-10 md:p-20 text-center md:text-left overflow-hidden shadow-2xl"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="relative shrink-0">
                 <div className="w-32 h-32 md:w-56 md:h-56 rounded-full border-4 border-white/10 shrink-0 overflow-hidden shadow-2xl relative z-10">
                    <img 
                      src="https://www.mckinsey.com/~/media/mckinsey/industries/agriculture/our%20insights/indian%20farmers%20optimism%20is%20driving%20interest%20in%20new%20products/mck248245-1536x1536.jpg?mw=677&car=42:25" 
                      alt="Farmer Rajesh Gaikwad" 
                      className="w-full h-full object-cover"
                    />
                 </div>
                 {/* Decorative Circle */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/20 rounded-full animate-spin-slow"></div>
              </div>
              
              <div className="flex-1">
                <div className="text-secondary text-6xl mb-6 opacity-40 font-serif leading-none">"</div>
                <h3 className="text-2xl md:text-[32px] lg:text-[40px] text-white font-medium leading-[1.3] mb-10 tracking-tight">
                  For 30 years I've been farming grapes. Never thought technology would understand my world. But Labour OS gets it. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x font-semibold">It's not just an app, it's a lifeline.</span>
                </h3>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                  <div className="w-10 h-0.5 bg-secondary/50 hidden md:block mt-3"></div>
                  <div>
                    <p className="text-white font-bold text-lg tracking-wide">RAJESH GAIKWAD</p>
                    <p className="text-gray-400 font-mono text-xs uppercase tracking-widest mt-1">Grape Farmer, Nashik • 30y Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

const MetricItem = ({ endValue, label, color, prefix = "", suffix = "", decimals = 0 }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const duration = 2000; // 2 seconds

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing function for smooth counting
        const easeOutQuart = (x: number) => 1 - Math.pow(1 - x, 4);
        
        const currentVal = progress * endValue;
        setDisplayValue(easeOutQuart(progress) * endValue);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, endValue]);

  return (
    <div className="text-center md:text-left" ref={ref}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-5xl lg:text-7xl font-black mb-4 tracking-tighter leading-none ${color}`}
      >
        {prefix}{displayValue.toFixed(decimals)}{suffix}
      </motion.div>
      <div className="text-darkgray font-bold uppercase tracking-widest text-xs border-t-2 border-gray-100 inline-block pt-4">{label}</div>
    </div>
  );
};

export default Impact;