import React from 'react';
import { X, Star, PhoneCall, CheckCircle2, ShieldCheck, Truck, Zap } from 'lucide-react';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappMsg = `Hello ANB Mobile! I am interested in purchasing: ${product.name} (PKR ${product.price.toLocaleString()})`;
  const whatsappUrl = `https://wa.me/923024007420?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Image Showcase */}
          <div className="relative h-64 sm:h-72 bg-slate-100 dark:bg-slate-950 rounded-2xl p-6 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-800">
            {product.badge && (
              <span className="absolute top-3 left-3 z-10 text-[10px] font-black uppercase px-3 py-1 rounded-full bg-[#ff6b00] text-white">
                {product.badge}
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-black uppercase text-[#ff6b00]">
                  {product.brand}
                </span>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{product.rating}</span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-heading">
                {product.name}
              </h2>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-black text-slate-900 dark:text-white font-heading">
                PKR {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-slate-400 line-through">
                  PKR {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {product.description}
            </p>

            {/* Product Specifications List */}
            {product.specs && (
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                  Technical Specifications:
                </h4>
                <div className="grid grid-cols-1 gap-1.5">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Store Guarantees */}
            <div className="grid grid-cols-2 gap-2 text-[11px] font-bold text-slate-500 dark:text-slate-400 pt-2">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#ff6b00]" /> 100% Original
              </span>
              <span className="flex items-center gap-1">
                <Truck className="w-4 h-4 text-blue-500" /> Fast Courier
              </span>
            </div>

            {/* WhatsApp CTA */}
            <div className="pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-extrabold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg shadow-emerald-500/20 transition-all"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Order via WhatsApp (+92 302 4007420)</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductModal;
