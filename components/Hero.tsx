import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ArrowRight, Play, CheckCircle2, TrendingUp, Mic, Users, ShieldCheck, Star, Sprout } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 overflow-hidden bg-offwhite">
      
      {/* 1. Background Layer: Topographic Map & Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Topographic Lines SVG Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
        />
        
        {/* Animated Glows */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* 2. Left Column: The Pitch */}
          <div className="flex flex-col items-start text-left">
            
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 pl-1 pr-4 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-darkgray font-medium text-xs mb-8 hover:border-primary/50 transition-colors cursor-default"
            >
              <span className="bg-primary text-white px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider">NEW</span>
              <span className="opacity-80">Sahyadri Farms Partnership Live</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-[5rem] leading-[1.05] font-black text-darkgray tracking-tight mb-6"
            >
              The Operating System for <br/>
              <span className="relative whitespace-nowrap text-primary">
                <span className="relative z-10">Indian Farms</span>
                {/* Underline decoration */}
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-500 max-w-lg leading-relaxed mb-10 font-normal"
            >
              Solve labour shortages with a simple voice note. We connect farms with verified crews, automate payments, and guarantee execution.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
            >
              <div className="relative group w-full sm:w-auto">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-200"></div>
                <Button 
                  onClick={() => window.location.hash = 'join'}
                  size="lg" 
                  className="relative w-full sm:w-auto h-14 text-base bg-primary hover:bg-[#184a30] shadow-xl shadow-primary/20 border-0 rounded-xl flex items-center justify-center gap-2"
                >
                   Get Started as Farmer
                </Button>
              </div>
              <Button variant="secondary" size="lg" className="h-14 text-base bg-white border border-gray-200 hover:border-primary/30 shadow-lg shadow-gray-200/50 text-darkgray w-full sm:w-auto rounded-xl flex items-center justify-center gap-2 group">
                <Play size={18} className="fill-current text-gray-400 group-hover:text-primary transition-colors" /> Watch Demo
              </Button>
            </motion.div>

            {/* Credibility Strip */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="w-full border-t border-gray-200 pt-8"
            >
               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Trusted by Industry Leaders</p>
               <div className="flex flex-wrap gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                  {/* Placeholder Logos for credibility */}
                  <div className="h-8 flex items-center font-bold text-xl text-darkgray"><Sprout className="mr-2"/> Sahyadri</div>
                  <div className="h-8 flex items-center font-bold text-xl text-darkgray">AGRI<span className="text-primary">TECH</span></div>
                  <div className="h-8 flex items-center font-bold text-xl text-darkgray">Bharat<span className="font-light">Fund</span></div>
               </div>
            </motion.div>
          </div>

          {/* 3. Right Column: The Visual Story */}
          <div className="relative h-[600px] w-full hidden lg:block perspective-[2000px]">
            
            {/* Main Image Container (The Result) */}
            <motion.div
               initial={{ x: 100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="absolute top-10 right-0 w-[85%] h-[85%] rounded-[3rem] overflow-hidden shadow-2xl border-[6px] border-white z-10"
            >
               <img
                 src="https://static.vecteezy.com/system/resources/thumbnails/038/451/514/small/ai-generated-indian-female-farmer-working-in-her-field-bokeh-style-background-with-generative-ai-photo.jpeg" 
                 alt="Indian Farmer Working"
                 className="w-full h-full object-cover scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-multiply"></div>
            </motion.div>

            {/* Floating Card 1: The INPUT (Voice Note) */}
            <motion.div
              initial={{ x: -50, y: 20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute bottom-20 left-0 z-20 w-72"
            >
               <div className="bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/50 relative overflow-hidden">
                  {/* WhatsApp-style decoration */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                  
                  <div className="flex items-center gap-3 mb-3">
                     <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <Mic size={20} />
                     </div>
                     <div>
                        <p className="text-xs font-bold text-gray-400 uppercase">Incoming Request</p>
                        <p className="text-sm font-bold text-darkgray">Ramesh (Farmer)</p>
                     </div>
                  </div>
                  
                  {/* Waveform Visualization */}
                  <div className="flex items-center justify-center gap-1 h-8 bg-gray-50 rounded-lg mb-2 px-4">
                     {[...Array(12)].map((_, i) => (
                        <motion.div
                           key={i}
                           animate={{ height: [8, 16, 8] }}
                           transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                           className="w-1 bg-green-500 rounded-full"
                        />
                     ))}
                  </div>
                  <p className="text-xs text-gray-500 italic">"Need 10 workers for grape pruning tomorrow..."</p>
               </div>
            </motion.div>

            {/* Floating Card 2: The AI MAGIC (Matching) */}
            <motion.div
               initial={{ x: 50, y: -50, opacity: 0 }}
               animate={{ x: 0, y: 0, opacity: 1 }}
               transition={{ delay: 0.7, type: "spring" }}
               className="absolute top-0 right-10 z-30"
            >
               <div className="bg-darkgray text-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10">
                  <div className="relative">
                     <div className="w-12 h-12 rounded-full border-2 border-secondary overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" className="w-full h-full object-cover" alt="Crew Leader"/>
                     </div>
                     <div className="absolute -bottom-1 -right-1 bg-secondary text-white p-1 rounded-full border border-darkgray">
                        <ShieldCheck size={10} />
                     </div>
                  </div>
                  <div>
                     <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold">Crew Matched</span>
                        <span className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded">98% Match</span>
                     </div>
                     <p className="text-xs text-gray-400">Available in 2h • 5km away</p>
                  </div>
               </div>
            </motion.div>

            {/* Floating Card 3: The RESULT (Scale) */}
            <motion.div
               initial={{ scale: 0, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ delay: 0.9, type: "spring" }}
               className="absolute bottom-40 right-[-20px] z-30"
            >
               <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex flex-col items-center">
                  <div className="text-accent font-black text-2xl">+40%</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Efficiency</div>
               </div>
            </motion.div>

             {/* Connection Lines (SVG) */}
             <svg className="absolute inset-0 pointer-events-none z-0 opacity-40">
                <motion.path 
                  d="M 200 500 Q 300 300 500 100" 
                  fill="none" 
                  stroke="#226644" 
                  strokeWidth="2" 
                  strokeDasharray="10 10"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
             </svg>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;