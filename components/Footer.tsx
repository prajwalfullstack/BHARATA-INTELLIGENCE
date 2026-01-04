import React from 'react';
import { Twitter, Linkedin, Mail, Smartphone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-8 inline-block">
               <img 
                  src="https://bharatintelligence.ai/static/imagelib/company.jpeg" 
                  alt="Bharat Intelligence" 
                  className="h-14 w-auto object-contain rounded-lg"
                />
            </div>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Creating technology that respects farmer dignity and rural reality. 
              Building the operating system for India's agriculture.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Labour OS</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Philosophy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

           {/* Contact */}
           <div>
            <h4 className="font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-secondary" />
                hello@bharatintelligence.ai
              </li>
              <li className="flex items-center gap-2">
                <Smartphone size={16} className="text-secondary" />
                +91 98765 43210
              </li>
              <li className="text-xs pt-2 text-gray-500">
                Mumbai, Maharashtra, India
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Bharat Intelligence Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p>Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;