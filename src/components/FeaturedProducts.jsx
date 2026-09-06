import React, { useState } from 'react';
import { Search, Star, PhoneCall, Eye, Sparkles, Filter, CheckCircle2, Shield } from 'lucide-react';
import { productsData } from '../data/products';

const FeaturedProducts = ({ selectedCategory, setSelectedCategory, selectedBrand, setSelectedBrand, onOpenProductModal }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Products' },
    { id: 'mobile', label: 'Mobile Accessories' },
    { id: 'laptop', label: 'Laptop Accessories' },
    { id: 'computer', label: 'Computer Accessories' },
    { id: 'audio', label: 'Audio & Sound' },
    { id: 'networking', label: 'Networking' },
  ];

  // Filter products based on Category, Brand, and Search Query
  const filteredProducts = productsData.filter((prod) => {
    const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
    const matchesBrand = !selectedBrand || prod.brand.toLowerCase() === selectedBrand.toLowerCase();
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.subCategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesBrand && matchesSearch;
  });

  return (
    <section id="products" className="py-20 relative bg-slate-50/70 dark:bg-slate-900/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b00]/10 text-[#ff6b00] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Featured Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-900 dark:text-white">
              Explore Our Accessories
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              Premium chargers, earbuds, gaming mice, keyboards, and networking gear with instant WhatsApp booking.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search products or brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff6b00] text-slate-900 dark:text-white shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Selected Brand Filter Pill Notice */}
        {selectedBrand && (
          <div className="mb-6 p-4 rounded-2xl bg-[#ff6b00]/10 border border-[#ff6b00]/30 flex items-center justify-between">
            <span className="text-sm font-bold text-[#ff6b00] flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Showing products for brand: <strong className="underline">{selectedBrand}</strong>
            </span>
            <button
              onClick={() => setSelectedBrand(null)}
              className="text-xs font-bold px-3 py-1 rounded-lg bg-[#ff6b00] text-white hover:bg-orange-600 transition-colors"
            >
              Reset Brand Filter
            </button>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === tab.id
                  ? 'bg-[#ff6b00] text-white shadow-lg shadow-[#ff6b00]/30'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[#ff6b00]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Showcase Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const whatsappMsg = `Hello ANB Mobile! I am interested in purchasing: ${product.name} (PKR ${product.price.toLocaleString()})`;
              const whatsappUrl = `https://wa.me/923024007420?text=${encodeURIComponent(whatsappMsg)}`;

              return (
                <div
                  key={product.id}
                  className="group rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-lg hover:shadow-2xl hover:border-[#ff6b00] dark:hover:border-[#ff6b00] transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Image Area with Badge & Overlay Action */}
                    <div className="relative h-56 bg-slate-100 dark:bg-slate-900 overflow-hidden flex items-center justify-center p-4">
                      {product.badge && (
                        <span className="absolute top-4 left-4 z-10 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-[#ff6b00] text-white shadow-md">
                          {product.badge}
                        </span>
                      )}

                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Hover Overlay Button */}
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-xs">
                        <button
                          onClick={() => onOpenProductModal(product)}
                          className="px-4 py-2 rounded-xl bg-white text-slate-900 text-xs font-bold shadow-lg hover:bg-[#ff6b00] hover:text-white transition-colors flex items-center gap-1.5"
                        >
                          <Eye className="w-4 h-4" />
                          <span>Quick Specs</span>
                        </button>
                      </div>
                    </div>

                    {/* Product Content Details */}
                    <div className="p-6 space-y-3">
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#ff6b00]">
                          {product.brand}
                        </span>
                        <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <span>{product.rating}</span>
                          <span className="text-slate-400 text-[11px]">({product.reviewsCount})</span>
                        </div>
                      </div>

                      <h3
                        onClick={() => onOpenProductModal(product)}
                        className="text-base font-extrabold text-slate-900 dark:text-white font-heading group-hover:text-[#ff6b00] transition-colors line-clamp-1 cursor-pointer"
                      >
                        {product.name}
                      </h3>

                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Price Section */}
                      <div className="pt-2 flex items-baseline gap-2">
                        <span className="text-xl font-black text-slate-900 dark:text-white font-heading">
                          PKR {product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-slate-400 line-through font-medium">
                            PKR {product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-6 pt-0 space-y-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-xs font-extrabold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-md shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>WhatsApp Inquiry</span>
                    </a>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 max-w-md mx-auto">
            <p className="text-base font-bold text-slate-700 dark:text-slate-300">No products match your filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedBrand(null);
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2 rounded-xl bg-[#ff6b00] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturedProducts;
