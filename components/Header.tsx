import React, { useState, useEffect } from 'react';
import { Menu, X, Sprout, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Impact', href: '#impact' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Philosophy', href: '#philosophy' },
  ];

  return (
    <>
      <header className="fixed top-0 md:top-6 left-0 right-0 z-50 flex justify-center px-4 md:pointer-events-none w-full">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className={`
            pointer-events-auto
            flex items-center justify-between 
            w-full max-w-5xl 
            backdrop-blur-xl transition-all duration-500
            ${isScrolled 
              ? 'bg-white/90 border-b md:border border-gray-200/50 shadow-sm md:shadow-xl md:shadow-black/5 md:rounded-full py-3 px-6' 
              : 'bg-transparent py-4 px-4 md:px-0'
            }
          `}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-[#1B5235] rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300 transform group-hover:rotate-6">
              <Sprout size={20} />
            </div>
            <div className={`transition-opacity duration-300`}>
              <h1 className="text-lg font-bold text-darkgray tracking-tight leading-none">Bharat<span className="text-primary block text-xs font-medium tracking-widest uppercase">Intelligence</span></h1>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className={`hidden md:flex items-center gap-1 bg-white/50 p-1.5 rounded-full border border-white/40 backdrop-blur-md shadow-inner ${!isScrolled && 'bg-white/30'}`}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="px-5 py-2 text-sm font-medium text-darkgray hover:text-primary rounded-full hover:bg-white transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => window.location.hash = 'join'}
              className="hidden md:flex items-center gap-2 bg-darkgray text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary transition-all duration-300 shadow-lg shadow-darkgray/20 hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Get Started <ArrowRight size={14} />
            </button>
            
            <button 
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-md border border-gray-200 text-darkgray active:scale-95 transition-transform"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-offwhite pt-24 px-6 md:hidden"
          >
             {/* Background Blobs for Mobile Menu */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[80px]"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/30 rounded-full blur-[80px]"></div>
            </div>

            <div className="flex flex-col gap-6 text-center relative z-10 h-full max-h-[80vh] overflow-y-auto">
              {navLinks.map((link, idx) => (
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name} 
                  href={link.href}
                  className="text-3xl font-bold text-darkgray hover:text-primary tracking-tight"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <hr className="border-gray-200 my-4" />
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => {
                  window.location.hash = 'join';
                  setMobileMenuOpen(false);
                }}
                className="bg-primary text-white py-4 rounded-2xl text-lg font-bold shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
              >
                Get Started Now <ArrowRight size={20} />
              </motion.button>
              
              <div className="mt-auto pb-8 text-sm text-gray-400">
                 © 2026 Bharat Intelligence
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;