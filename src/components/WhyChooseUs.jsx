import React from 'react';
import { Package, Users, ShieldCheck, Clock, Truck, Headphones, CheckCircle2, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const stats = [
    { count: "1000+", label: "Products in Stock", icon: Package, color: "text-[#ff6b00]", bg: "bg-[#ff6b00]/10" },
    { count: "500+", label: "Happy Customers", icon: Users, color: "text-[#0066ff]", bg: "bg-[#0066ff]/10" },
    { count: "15+", label: "Trusted Brands", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { count: "5+", label: "Years Experience", icon: Clock, color: "text-purple-500", bg: "bg-purple-500/10" },
  ];

  const highlights = [
    {
      title: "100% Genuine Guarantee",
      desc: "All mobile accessories, laptop chargers, and networking hardware are sourced from official brand distributors.",
      icon: ShieldCheck
    },
    {
      title: "Instant WhatsApp Booking",
      desc: "Direct communication with store owner Ali Ammar for stock availability, exact prices, and customized advice.",
      icon: Headphones
    },
    {
      title: "Fast Shipping Pakistan",
      desc: "Swift delivery across Lahore, Karachi, Islamabad, Faisalabad, and all major cities in Pakistan.",
      icon: Truck
    },
    {
      title: "JazzCash & Easypaisa",
      desc: "Hassle-free digital payment support alongside cash on delivery options.",
      icon: Zap
    }
  ];

  return (
    <section className="py-20 relative bg-slate-900 text-white overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b00]/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Statistics Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80 shadow-xl text-center space-y-3 transform hover:-translate-y-1 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight ${stat.color}`}>
                  {stat.count}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-300">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b00]/20 text-[#ff6b00] text-xs font-bold uppercase tracking-wider">
              Why Choose ANB Mobile
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight leading-tight">
              Your Trusted Store For Electronics &amp; Accessories
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              We stand out in the Pakistani tech market by offering verified products, competitive wholesale-level rates, and personal assistance from owner Ali Ammar.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-[#ff6b00] hover:bg-orange-600 shadow-lg shadow-[#ff6b00]/30 transition-all"
              >
                <span>Contact Ali Ammar Today</span>
                <CheckCircle2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-[#ff6b00] transition-colors space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 text-[#ff6b00] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
