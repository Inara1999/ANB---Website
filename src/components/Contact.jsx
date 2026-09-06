import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, CreditCard, User, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Mobile Accessories',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti triggered');
    }

    setSubmitted(true);

    // Direct WhatsApp formulation option
    const whatsappMsg = `Hi Ali Ammar! My name is ${formData.name} (${formData.phone}). Interested in ${formData.category}: ${formData.message}`;
    const url = `https://wa.me/923024007420?text=${encodeURIComponent(whatsappMsg)}`;
    
    setTimeout(() => {
      window.open(url, '_blank');
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-900 text-white overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#ff6b00]/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b00]/20 text-[#ff6b00] border border-[#ff6b00]/30 text-xs font-bold uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
            Contact ANB Mobile &amp; Computer Accessories
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have questions about product availability or bulk pricing? Reach out to store owner <strong className="text-white">Ali Ammar</strong> directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Cards & Business Info (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Store Information Card */}
            <div className="p-8 rounded-3xl bg-slate-800/90 border border-slate-700/80 shadow-2xl space-y-6">
              <div>
                <h3 className="text-2xl font-black font-heading text-white mb-1">
                  ANB Mobile
                </h3>
                <p className="text-xs text-slate-400">
                  &amp; Computer Accessories Store
                </p>
              </div>

              <div className="space-y-4">
                {/* Owner info */}
                <div className="flex items-center gap-4 p-3 rounded-2xl bg-slate-900/80 border border-slate-700/60">
                  <div className="p-3 rounded-xl bg-[#ff6b00]/20 text-[#ff6b00]">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Store Proprietor</span>
                    <strong className="text-base text-white">Ali Ammar</strong>
                  </div>
                </div>

                {/* Numbers */}
                <div className="flex items-center gap-4 p-3 rounded-2xl bg-slate-900/80 border border-slate-700/60">
                  <div className="p-3 rounded-xl bg-orange-500/20 text-[#ff6b00]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Call / WhatsApp Helplines</span>
                    <div className="flex flex-col">
                      <a href="tel:03024007420" className="text-sm font-bold text-white hover:text-[#ff6b00] transition-colors">
                        0302-4007420
                      </a>
                      <a href="tel:03324934330" className="text-sm font-bold text-white hover:text-[#0066ff] transition-colors">
                        0332-4934330
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-3 rounded-2xl bg-slate-900/80 border border-slate-700/60">
                  <div className="p-3 rounded-xl bg-blue-500/20 text-[#0066ff]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Main Store Address</span>
                    <p className="text-xs font-bold text-white">
                      Electronics Market, Lahore / All Pakistan Shipping
                    </p>
                  </div>
                </div>

                {/* Payments */}
                <div className="flex items-center gap-4 p-3 rounded-2xl bg-slate-900/80 border border-slate-700/60">
                  <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Instant Payment Accepted</span>
                    <p className="text-xs font-bold text-emerald-400">
                      JazzCash &amp; Easypaisa
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  href="tel:03024007420"
                  className="flex items-center justify-center gap-2 py-3 rounded-2xl text-xs font-extrabold text-white bg-[#ff6b00] hover:bg-orange-600 shadow-md shadow-[#ff6b00]/30 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href="https://wa.me/923024007420?text=Hello%20ANB%20Mobile!%20I%20want%20to%20place%20an%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-2xl text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/30 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

            {/* High-Tech Map Simulation Container */}
            <div className="p-6 rounded-3xl bg-slate-800/90 border border-slate-700/80 shadow-2xl relative overflow-hidden h-48 flex flex-col justify-between group">
              {/* Map Canvas Background Pattern */}
              <div className="absolute inset-0 bg-[#0f172a] opacity-90 pointer-events-none bg-cyber-grid"></div>

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-[11px] font-bold text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-[#ff6b00]" />
                  <span>Store Pin Location</span>
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded-md">Open Daily</span>
              </div>

              <div className="relative z-10 text-center space-y-1">
                <h4 className="text-base font-extrabold text-white font-heading">
                  ANB Mobile &amp; Computer Accessories
                </h4>
                <p className="text-xs text-slate-400">
                  Owner: Ali Ammar • 0302-4007420
                </p>
              </div>

              <div className="relative z-10">
                <a
                  href="https://maps.google.com/?q=Electronics+Market+Lahore+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-xs font-bold text-white hover:border-[#ff6b00] flex items-center justify-center gap-2 transition-all"
                >
                  <span>Open Directions on Google Maps</span>
                </a>
              </div>
            </div>

          </div>

          {/* Contact Inquiry Form (7 Columns) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-slate-800/90 border border-slate-700/80 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 animate-bounce" />
                </div>
                <h3 className="text-2xl font-black font-heading text-white">Inquiry Sent Successfully!</h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto">
                  Redirecting to WhatsApp to chat directly with Ali Ammar...
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-700 text-white text-xs font-bold hover:bg-slate-600"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black font-heading text-white mb-2">Send An Instant Message</h3>
                  <p className="text-xs text-slate-400">
                    Fill out the form below to inquire about products or request a custom order quote.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ali Raza"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Mobile / WhatsApp No *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0300-1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Product Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
                  >
                    <option value="Mobile Accessories">Mobile Accessories (Fast Chargers, Cables, Earbuds)</option>
                    <option value="Laptop Accessories">Laptop Accessories (Chargers, Cooling Pads)</option>
                    <option value="Computer Accessories">Computer Accessories (Keyboards, Webcams)</option>
                    <option value="Networking Solutions">Networking Solutions (Routers, Switches)</option>
                    <option value="New/Used Mobiles">New / Used Smartphones</option>
                    <option value="Remote Controls">Remote Controls (TV & AC)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Message or Requirement</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what accessory or product model you need..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-[#ff6b00] via-orange-600 to-[#e60000] hover:from-orange-600 hover:to-red-700 shadow-xl shadow-[#ff6b00]/30 transition-all transform hover:-translate-y-0.5"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message &amp; Open WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  ⚡ Store Helpline: <strong>0302-4007420</strong> / <strong>0332-4934330</strong> (Ali Ammar)
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
