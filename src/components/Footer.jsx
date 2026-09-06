import React from 'react';
import { Phone, MapPin, Mail, ArrowUp, Facebook, Instagram, Youtube, MessageSquare } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Description (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="lg" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              ANB Mobile &amp; Computer Accessories — Your trusted one-stop tech store in Pakistan. Managed by <strong className="text-slate-200">Ali Ammar</strong>, dealing in official smartphones, high-speed fast chargers, gaming gear, laptop accessories, and networking solutions.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a href="https://wa.me/923024007420" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 hover:bg-[#ff6b00] text-slate-300 hover:text-white transition-colors border border-slate-800">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="tel:03024007420" className="p-2.5 rounded-xl bg-slate-900 hover:bg-[#ff6b00] text-slate-300 hover:text-white transition-colors border border-slate-800">
                <Phone className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-slate-900 hover:bg-[#ff6b00] text-slate-300 hover:text-white transition-colors border border-slate-800">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-slate-900 hover:bg-[#ff6b00] text-slate-300 hover:text-white transition-colors border border-slate-800">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white font-heading uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#home" className="hover:text-[#ff6b00] transition-colors">Home Overview</a></li>
              <li><a href="#products" className="hover:text-[#ff6b00] transition-colors">Featured Accessories</a></li>
              <li><a href="#brands" className="hover:text-[#ff6b00] transition-colors">Authorized Brands</a></li>
              <li><a href="#services" className="hover:text-[#ff6b00] transition-colors">Repairing &amp; Sales Services</a></li>
              <li><a href="#about" className="hover:text-[#ff6b00] transition-colors">About ANB Mobile</a></li>
              <li><a href="#contact" className="hover:text-[#ff6b00] transition-colors">Contact Owner</a></li>
            </ul>
          </div>

          {/* Category Shortcuts (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold text-white font-heading uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#products" className="hover:text-[#ff6b00] transition-colors">Fast Chargers</a></li>
              <li><a href="#products" className="hover:text-[#ff6b00] transition-colors">Earbuds &amp; Audio</a></li>
              <li><a href="#products" className="hover:text-[#ff6b00] transition-colors">Laptop Power Adapters</a></li>
              <li><a href="#products" className="hover:text-[#ff6b00] transition-colors">Keyboards &amp; Mouse</a></li>
              <li><a href="#products" className="hover:text-[#ff6b00] transition-colors">WiFi 6 Routers</a></li>
              <li><a href="#products" className="hover:text-[#ff6b00] transition-colors">TV &amp; AC Remotes</a></li>
            </ul>
          </div>

          {/* Contact Details (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white font-heading uppercase tracking-wider">
              Store Contact
            </h4>
            <div className="space-y-3 text-xs">
              <p className="text-white font-bold">Owner: Ali Ammar</p>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ff6b00]" />
                <a href="tel:03024007420" className="hover:text-white transition-colors">0302-4007420</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0066ff]" />
                <a href="tel:03324934330" className="hover:text-white transition-colors">0332-4934330</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Electronics Market, Lahore / Shipping Across Pakistan</span>
              </div>
              <div className="pt-2">
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/60">
                  💳 JazzCash &amp; Easypaisa Accepted
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2025 ANB Mobile &amp; Computer Accessories. All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-[#ff6b00] transition-colors"
          >
            <span>Back to top</span>
            <div className="p-2 rounded-full bg-slate-900 border border-slate-800">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
