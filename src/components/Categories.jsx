import React from 'react';
import { Smartphone, Laptop, Monitor, Headphones, Wifi, ArrowRight } from 'lucide-react';
import { categoriesData } from '../data/products';

const iconMap = {
  Smartphone: Smartphone,
  Laptop: Laptop,
  Monitor: Monitor,
  Headphones: Headphones,
  Wifi: Wifi,
};

const Categories = ({ onSelectCategory }) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066ff]/10 text-[#0066ff] text-xs font-bold uppercase tracking-wider">
              Browse Collections
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-900 dark:text-white">
              Product Categories
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              Explore our wide variety of mobile gadgets, computer components, laptop peripherals, and networking devices.
            </p>
          </div>

          <a
            href="#products"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#ff6b00] hover:text-orange-600 transition-colors group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesData.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Smartphone;
            return (
              <div
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  const el = document.getElementById('products');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group cursor-pointer p-8 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/70 shadow-lg hover:shadow-2xl hover:border-[#ff6b00] dark:hover:border-[#ff6b00] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Count Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-[#ff6b00] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#ff6b00] group-hover:text-white transition-all duration-300 shadow-inner">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 group-hover:bg-[#ff6b00]/10 group-hover:text-[#ff6b00] transition-colors">
                      {cat.count}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-heading group-hover:text-[#ff6b00] transition-colors mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 line-clamp-2">
                    {cat.description}
                  </p>

                  {/* Item Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cat.items.slice(0, 6).map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                    {cat.items.length > 6 && (
                      <span className="text-[11px] font-semibold px-2 py-1 rounded-lg bg-[#ff6b00]/10 text-[#ff6b00]">
                        +{cat.items.length - 6} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-[#ff6b00]">
                  <span>Explore Items</span>
                  <div className="w-8 h-8 rounded-full bg-[#ff6b00]/10 flex items-center justify-center group-hover:bg-[#ff6b00] group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Categories;
