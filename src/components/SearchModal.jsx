import React, { useState } from 'react';
import { X, Search, ArrowRight, Star } from 'lucide-react';
import { productsData } from '../data/products';

const SearchModal = ({ isOpen, onClose, onSelectProduct }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim()
    ? productsData.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.brand.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : productsData.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        
        {/* Search Bar Input Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-[#ff6b00]" />
          <input
            type="text"
            autoFocus
            placeholder="Search accessories (e.g. Charger, Earbuds, Logitech, Router)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-base font-medium text-slate-900 dark:text-white focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="mt-4 space-y-3 max-h-96 overflow-y-auto pr-1">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            {query ? `Found ${results.length} results` : 'Popular Accessories:'}
          </p>

          {results.length > 0 ? (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50 hover:border-[#ff6b00] dark:hover:border-[#ff6b00] transition-all cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 p-1 flex items-center justify-center border border-slate-200 dark:border-slate-800">
                    <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-[#ff6b00] transition-colors">
                      {product.name}
                    </h4>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {product.brand} • PKR {product.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-slate-200/60 dark:bg-slate-700/60 group-hover:bg-[#ff6b00] group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))
          ) : (
            <p className="text-xs text-slate-400 text-center py-6">
              No products found matching "{query}"
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default SearchModal;
