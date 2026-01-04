import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, Send, User, Phone, MapPin, Sprout, Hammer, Building2, ArrowRight } from 'lucide-react';
import Button from './Button';

const GetStarted: React.FC = () => {
  const [userType, setUserType] = useState<'farmer' | 'worker' | 'partner'>('farmer');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen bg-offwhite pt-24 pb-12 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Navigation */}
        <button 
          onClick={() => window.location.hash = ''} 
          className="group flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 font-medium"
        >
          <div className="p-2 rounded-full bg-white border border-gray-200 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
            <ArrowLeft size={18} />
          </div>
          Back to Home
        </button>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Context & Inspiration */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-32">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-bold text-darkgray mb-6 tracking-tight leading-tight"
              >
                Let's Grow <br/>
                <span className="text-primary">Together.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-500 font-light leading-relaxed"
              >
                Join the network of 22,500+ farmers and workers transforming Indian agriculture through intelligence.
              </motion.p>
            </div>

            {/* Stats / Trust */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-primary mb-1">2min</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest font-mono">Onboarding Time</div>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-secondary mb-1">100%</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest font-mono">Support</div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-4 pt-8 border-t border-gray-200"
            >
              <p className="text-sm font-bold text-darkgray uppercase tracking-widest mb-4">Or contact us directly</p>
              <a href="tel:+919876543210" className="flex items-center gap-4 text-gray-600 hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <span className="text-lg font-medium">+91 98765 43210</span>
              </a>
              <a href="mailto:hello@bharatintelligence.ai" className="flex items-center gap-4 text-gray-600 hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Send size={18} />
                </div>
                <span className="text-lg font-medium">hello@bharatintelligence.ai</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2rem] shadow-2xl shadow-gray-200/50 border border-white/50 p-8 md:p-12 relative overflow-hidden backdrop-blur-xl">
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Check size={40} strokeWidth={4} />
                  </div>
                  <h3 className="text-3xl font-bold text-darkgray mb-4">Request Received!</h3>
                  <p className="text-gray-500 max-w-md mx-auto mb-8">
                    Thank you for joining Bharat Intelligence. Our local field officer will contact you on WhatsApp within 2 hours to verify your details.
                  </p>
                  <Button onClick={() => window.location.hash = ''} variant="outline">
                    Return Home
                  </Button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-10">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">I am a...</p>
                    <div className="grid grid-cols-3 gap-4">
                      <TypeSelector 
                        active={userType === 'farmer'} 
                        onClick={() => setUserType('farmer')}
                        icon={<Sprout size={20} />}
                        label="Farmer"
                      />
                      <TypeSelector 
                        active={userType === 'worker'} 
                        onClick={() => setUserType('worker')}
                        icon={<Hammer size={20} />}
                        label="Worker"
                      />
                      <TypeSelector 
                        active={userType === 'partner'} 
                        onClick={() => setUserType('partner')}
                        icon={<Building2 size={20} />}
                        label="Partner"
                      />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={userType}
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="space-y-6"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <InputField label="Full Name" icon={<User size={18} />} placeholder="e.g. Rajesh Gaikwad" required />
                          <InputField label="Phone Number" icon={<Phone size={18} />} placeholder="+91 00000 00000" type="tel" required />
                        </div>
                        
                        <InputField label="Location (District, State)" icon={<MapPin size={18} />} placeholder="e.g. Nashik, Maharashtra" required />
                        
                        {userType === 'farmer' && (
                          <div className="space-y-6">
                            <InputField label="Primary Crops" icon={<Sprout size={18} />} placeholder="e.g. Grapes, Pomegranate" />
                            <InputField label="Approx. Farm Size (Acres)" icon={<MapPin size={18} />} placeholder="e.g. 5 Acres" type="number" />
                          </div>
                        )}

                        {userType === 'worker' && (
                          <div className="space-y-6">
                            <InputField label="Crew Size (If Leader)" icon={<User size={18} />} placeholder="e.g. 10 people" type="number" />
                            <InputField label="Key Skills" icon={<Hammer size={18} />} placeholder="e.g. Pruning, Harvesting, Spraying" />
                          </div>
                        )}

                        {userType === 'partner' && (
                          <div className="space-y-6">
                            <InputField label="Organization Name" icon={<Building2 size={18} />} placeholder="Company / NGO Name" />
                            <div className="relative">
                               <label className="block text-sm font-medium text-gray-700 mb-2 pl-1">Message</label>
                               <textarea 
                                 className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none h-32"
                                 placeholder="How would you like to collaborate?"
                               ></textarea>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>

                    <div className="pt-4">
                      <Button fullWidth size="lg" disabled={isLoading} className="h-16 text-lg relative overflow-hidden">
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Processing...
                          </div>
                        ) : (
                          <span className="flex items-center gap-2">
                            {userType === 'partner' ? 'Send Message' : 'Request Callback'} <ArrowRight size={20} />
                          </span>
                        )}
                      </Button>
                      <p className="text-center text-xs text-gray-400 mt-4">
                        By submitting, you agree to receive WhatsApp notifications from Bharat Intelligence.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TypeSelector = ({ active, onClick, icon, label }: any) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex flex-col items-center justify-center gap-3 p-4 rounded-xl border transition-all duration-300 ${
      active 
        ? 'bg-darkgray text-white border-darkgray shadow-lg scale-105' 
        : 'bg-white text-gray-500 border-gray-200 hover:border-primary/30 hover:bg-gray-50'
    }`}
  >
    <div className={active ? 'text-secondary' : 'text-gray-400'}>{icon}</div>
    <span className="font-semibold text-sm">{label}</span>
  </button>
);

const InputField = ({ label, icon, type = "text", placeholder, required }: any) => (
  <div className="relative group">
    <label className="block text-sm font-medium text-gray-700 mb-2 pl-1 group-focus-within:text-primary transition-colors">
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
        {icon}
      </div>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 text-darkgray placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
      />
    </div>
  </div>
);

export default GetStarted;