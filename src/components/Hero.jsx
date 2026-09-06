import React from 'react';
import { ShoppingBag, ArrowRight, ShieldCheck, Zap, Award, Sparkles, PhoneCall, Cpu, Wifi } from 'lucide-react';
import Logo from './Logo';

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Dynamic Animated Background Mesh */}
      <div className="absolute inset-0 bg-cyber-grid-light dark:bg-cyber-grid opacity-60 pointer-events-none"></div>

      {/* Floating Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-[#ff6b00]/20 via-[#0066ff]/15 to-red-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-inner backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#ff6b00] animate-ping"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-800 dark:text-slate-200">
                Original Products • Trusted Brands • Best Prices
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-heading tracking-tight leading-[1.1]">
              <span className="text-slate-900 dark:text-white">ANB Mobile &amp;</span> <br />
              <span className="bg-gradient-to-r from-[#ff6b00] via-orange-500 to-[#e60000] bg-clip-text text-transparent drop-shadow-sm">
                Computer Accessories
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Your One-Stop Shop For Mobile, Laptop, Computer &amp; Networking Accessories in Pakistan. High-speed chargers, gaming peripherals, routers, and genuine smartphones.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#ff6b00] via-orange-600 to-[#e60000] hover:from-orange-600 hover:to-red-700 shadow-lg shadow-[#ff6b00]/30 hover:shadow-xl hover:shadow-[#ff6b00]/40 transition-all transform hover:-translate-y-1 group"
              >
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/923024007420?text=Hello%20ANB%20Mobile!%20I%20want%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20 hover:bg-emerald-500/20 dark:hover:bg-emerald-500/30 border border-emerald-500/30 transition-all transform hover:-translate-y-1"
              >
                <PhoneCall className="w-5 h-5 text-emerald-500" />
                <span>WhatsApp Order</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 grid grid-cols-3 gap-3 border-t border-slate-200/80 dark:border-slate-800/80 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 text-[#ff6b00]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">Fast Shipping</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">All Over Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-[#0066ff]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">100% Genuine</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Official Brands</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">Easy Payment</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">JazzCash &amp; Easypaisa</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual Element (Prominent ANB Mobile Logo Showcase & Tech Floating Cards) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Glowing Tech Circuit Card */}
            <div className="relative w-full max-w-md p-8 rounded-3xl bg-slate-900/90 dark:bg-slate-900/80 border border-slate-700/80 shadow-2xl backdrop-blur-2xl text-white group overflow-hidden">
              {/* Internal Accent Glow */}
              <div className="absolute -right-20 -top-20 w-56 h-56 bg-[#ff6b00]/30 rounded-full blur-3xl group-hover:bg-[#ff6b00]/50 transition-all duration-500"></div>
              <div className="absolute -left-20 -bottom-20 w-56 h-56 bg-[#0066ff]/30 rounded-full blur-3xl group-hover:bg-[#0066ff]/50 transition-all duration-500"></div>

              {/* Logo Banner Container */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-6 py-4">
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 shadow-inner w-full flex justify-center">
                  <Logo size="xl" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
                    <span>Premium Tech Store</span>
                    <Sparkles className="w-5 h-5 text-[#ff6b00] animate-spin" style={{ animationDuration: '6s' }} />
                  </h3>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto">
                    Mobiles • Laptops • Gaming Gear • WiFi Routers • Remotes
                  </p>
                </div>

                {/* Quick Spec Pills */}
                <div className="grid grid-cols-2 gap-3 w-full text-xs font-semibold text-slate-300">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/70">
                    <Cpu className="w-4 h-4 text-[#ff6b00]" />
                    <span>Original Peripherals</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/70">
                    <Wifi className="w-4 h-4 text-[#0066ff]" />
                    <span>Networking Hub</span>
                  </div>
                </div>

                <div className="pt-2 w-full">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-red-600/20 to-orange-500/20 border border-orange-500/30 flex items-center justify-between text-xs font-bold text-orange-400">
                    <span>Owner: Ali Ammar</span>
                    <span className="bg-[#ff6b00] text-white px-2 py-0.5 rounded-md text-[10px]">Verified Shop</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Floating Element 1 (Fast Charger Card) */}
            <div className="absolute -top-6 -left-6 sm:-left-10 p-3.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-xl backdrop-blur-lg flex items-center gap-3 animate-float pointer-events-none hidden sm:flex">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-[#ff6b00] font-black text-sm">
                20W
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-800 dark:text-white">PD Fast Chargers</h5>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Interlink Aura Series</p>
              </div>
            </div>

            {/* Floating Element 2 (WhatsApp Badge) */}
            <div className="absolute -bottom-6 -right-6 sm:-right-8 p-3.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-xl backdrop-blur-lg flex items-center gap-3 animate-float pointer-events-none hidden sm:flex" style={{ animationDelay: '1.5s' }}>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-800 dark:text-white">0302-4007420</h5>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Instant Order Helpline</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
