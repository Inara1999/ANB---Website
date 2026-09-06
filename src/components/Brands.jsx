import React from 'react';
import { Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';
import { brandsData } from '../data/products';

const availableProductsList = [
  "Data Cables", "Fast Chargers", "Adapter Chargers", "Laptop Chargers", 
  "Power Banks", "Handsfree", "Earbuds", "Bluetooth Headphones", 
  "Wireless Chargers", "Car Chargers", "Smart Watches", "Keyboards", 
  "Mouse", "Gaming Accessories", "Webcams", "Speakers", 
  "Networking Products", "Routers", "WiFi Extenders", "Computer Accessories"
];

const Brands = ({ onSelectBrand, selectedBrand }) => {
  return (
    <section id="brands" className="py-20 relative bg-slate-950 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff6b00]/15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b00]/20 text-[#ff6b00] border border-[#ff6b00]/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Official &amp; Authorized Brands
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
            Brands We Deal In
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We partner with world-renowned technology brands to bring you 100% original gadgets with official warranty and guaranteed quality.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-6 mb-16">
          {brandsData.map((brand, idx) => {
            const isSelected = selectedBrand === brand.name;
            return (
              <div
                key={idx}
                onClick={() => {
                  onSelectBrand(isSelected ? null : brand.name);
                  const el = document.getElementById('products');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 transform hover:-translate-y-1 text-center flex flex-col justify-between items-center relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#ff6b00]/20 border-[#ff6b00] shadow-lg shadow-[#ff6b00]/30'
                    : 'bg-slate-900/80 border-slate-800 hover:border-[#ff6b00]/60 hover:bg-slate-800'
                }`}
              >
                {/* Brand Logo Display Badge */}
                <div className={`w-full py-4 rounded-xl font-heading font-black text-xl tracking-wider uppercase mb-3 bg-gradient-to-r ${brand.color} text-white shadow-md transition-transform group-hover:scale-105`}>
                  {brand.logoText}
                </div>

                <div>
                  <h4 className="font-bold text-sm text-slate-200 group-hover:text-[#ff6b00] transition-colors">
                    {brand.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                    {brand.category}
                  </p>
                </div>

                {isSelected && (
                  <div className="absolute top-2 right-2">
                    <CheckCircle className="w-4 h-4 text-[#ff6b00]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Available Products Across These Brands Box */}
        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div>
              <h3 className="text-xl font-extrabold font-heading text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#ff6b00]" />
                Available Products Across These Brands
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Full stock availability at ANB Mobile &amp; Computer Accessories
              </p>
            </div>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20">
              100% Original Guarantee
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {availableProductsList.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs font-medium text-slate-300 hover:text-white hover:border-[#ff6b00] transition-colors cursor-default"
              >
                ⚡ {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Brands;
