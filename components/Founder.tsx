import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Founder: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 bg-primary text-white relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      {/* Background Blobs for depth */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary opacity-10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent opacity-10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-secondary/20">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                alt="Azhaan Merchant" 
                className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-bold text-2xl tracking-tight">Azhaan Merchant</p>
                <p className="text-secondary font-mono text-sm uppercase tracking-widest mt-1">Founder & CEO</p>
              </div>
            </div>
            {/* Decorative Element behind image */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-white/10 rounded-[2rem]"></div>
          </motion.div>

          {/* Text */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Quote className="text-secondary w-20 h-20 mb-8 opacity-30" />
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-[56px] font-bold leading-[1.1] mb-10 tracking-tight text-white"
            >
              "India's economy is agrarian, deeply physical, and cannot be understood from the cloud alone."
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8 text-white/80 text-xl leading-relaxed font-light border-l-2 border-white/20 pl-8"
            >
              <p>
                To build AI for India, it must be embedded in rural life—attuned to the nuance of a handshake in a village market and the trust networks that quietly govern transactions.
              </p>
              <p>
                We started Bharat Intelligence because we believed no one would ever solve this problem from a startup incubator in Bangalore. The AI had to be trained in the fields.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-wrap gap-6 items-center"
            >
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" className="h-16 opacity-60 invert" alt="Signature" />
               <div className="h-12 w-px bg-white/20"></div>
               <div className="text-sm font-mono text-white/50 uppercase tracking-widest">
                  Founded 2024<br/>Farmer-First Philosophy
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;