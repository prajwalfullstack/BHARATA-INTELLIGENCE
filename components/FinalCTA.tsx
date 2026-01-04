import React from 'react';
import { ArrowRight, Check, Tractor, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  return (
    <section id="join" className="py-32 relative bg-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-[64px] font-bold text-darkgray mb-6 tracking-tight">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Whether you're a farmer seeking reliable crews or a worker looking for steady income, we have a pathway designed for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Farmer Card */}
          <PathwayCard 
            type="farmer"
            icon={<Tractor size={48} />}
            title="For Farmers"
            subtitle="Get Reliable Crews on Demand"
            desc="Solve your seasonal labour challenges. Find verified crews in hours, not days."
            benefits={[
              "Crews available in 2-3 hours",
              "Transparent pricing, no surprises",
              "99.2% completion rate",
              "Direct communication via WhatsApp"
            ]}
            cta="Get Started as a Farmer"
            color="primary"
          />

          {/* Worker Card */}
          <PathwayCard 
            type="worker"
            icon={<Users size={48} />}
            title="For Workers"
            subtitle="Earn Steady Income Year-Round"
            desc="Stop struggling with seasonal unemployment. Access work opportunities throughout the year."
            benefits={[
              "Work 10+ months per year",
              "Fair wages guaranteed (25-40% higher)",
              "Direct payments, no middlemen",
              "Skill training included"
            ]}
            cta="Join Our Crew"
            color="accent"
          />

        </div>

        <p className="mt-16 text-center text-sm text-gray-400 font-mono tracking-widest uppercase">
          No credit card required • Free to join • Trusted by 22,500+
        </p>
      </div>
    </section>
  );
};

const PathwayCard = ({ type, icon, title, subtitle, desc, benefits, cta, color }: any) => {
  const isPrimary = color === 'primary';
  const borderColor = isPrimary ? 'border-primary' : 'border-accent';
  const iconColor = isPrimary ? 'text-primary' : 'text-accent';
  const btnBg = isPrimary ? 'bg-primary hover:bg-[#184a30]' : 'bg-white border-2 border-accent text-accent hover:bg-accent hover:text-white';
  const btnText = isPrimary ? 'text-white' : '';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`bg-white rounded-[2rem] p-8 md:p-12 border-2 ${borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
    >
      <div className={`w-20 h-20 rounded-2xl ${isPrimary ? 'bg-primary/10' : 'bg-accent/10'} ${iconColor} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>

      <h3 className="text-3xl font-bold text-darkgray mb-2">{title}</h3>
      <p className={`text-xl font-bold ${iconColor} mb-6`}>{subtitle}</p>
      <p className="text-gray-500 mb-8 leading-relaxed font-light">{desc}</p>

      <ul className="space-y-4 mb-10">
        {benefits.map((benefit: string, idx: number) => (
          <li key={idx} className="flex items-start gap-3 text-darkgray/80">
            <div className={`mt-1 p-0.5 rounded-full ${isPrimary ? 'bg-primary' : 'bg-accent'} text-white`}>
               <Check size={12} strokeWidth={3} />
            </div>
            {benefit}
          </li>
        ))}
      </ul>

      <button 
        onClick={() => window.location.hash = 'join'}
        className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg ${btnBg} ${btnText}`}
      >
        {cta} <ArrowRight size={20} />
      </button>
    </motion.div>
  );
}

export default FinalCTA;