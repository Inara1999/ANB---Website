import React from 'react';
import { Smartphone, RefreshCw, BatteryCharging, Laptop, Cpu, Wifi, Radio, Tv, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/products';

const iconMap = {
  Smartphone: Smartphone,
  RefreshCw: RefreshCw,
  BatteryCharging: BatteryCharging,
  Laptop: Laptop,
  Cpu: Cpu,
  Wifi: Wifi,
  Radio: Radio,
  Tv: Tv,
};

const Services = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b00]/10 text-[#ff6b00] text-xs font-bold uppercase tracking-wider">
            Our Key Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-900 dark:text-white">
            Comprehensive Tech Solutions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            From new smartphone sales to specialized IT networking setup and mobile repairing, we cover all your tech requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Smartphone;
            return (
              <div
                key={service.id}
                className="group p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/70 shadow-lg hover:shadow-2xl hover:border-[#ff6b00] dark:hover:border-[#ff6b00] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-[#ff6b00] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#ff6b00] group-hover:text-white transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white font-heading group-hover:text-[#ff6b00] transition-colors mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <a
                  href={`https://wa.me/923024007420?text=Hello%20ANB%20Mobile!%20I%20am%20inquiring%20about%20your%20service:%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-[#ff6b00] hover:text-orange-600"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
