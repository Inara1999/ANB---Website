import React from 'react';
import { User, Phone, CreditCard, ShieldCheck, CheckCircle2, Award, Smartphone, Laptop, Cpu, Wifi, Radio, Tv } from 'lucide-react';
import Logo from './Logo';

const About = () => {
  const dealsInList = [
    { title: "New Mobiles", desc: "Official PTA Approved", icon: Smartphone },
    { title: "Used Mobiles", desc: "Tested Grade-A Stock", icon: Smartphone },
    { title: "Mobile Accessories", desc: "Chargers, Cables, Earbuds", icon: ShieldCheck },
    { title: "Laptop Accessories", desc: "Chargers, Cooling Pads", icon: Laptop },
    { title: "Computer Accessories", desc: "Keyboards, Mice, Webcams", icon: Cpu },
    { title: "Networking Products", desc: "Routers, Switches, Extenders", icon: Wifi },
    { title: "Internet Devices", desc: "4G LTE Mifi Devices", icon: Radio },
    { title: "Remote Controls", desc: "Smart TV & AC Remotes", icon: Tv },
  ];

  const urduPills = [
    { text: "نئے اور سیکنڈ ہینڈ موبائلز", color: "bg-blue-600 text-white" },
    { text: "کمپیوٹرز", color: "bg-pink-600 text-white" },
    { text: "لیپ ٹاپ", color: "bg-red-600 text-white" },
    { text: "ایسیسریز", color: "bg-emerald-600 text-white" },
    { text: "انٹرنیٹ کیبلز", color: "bg-teal-600 text-white" },
    { text: "انٹرنیٹ ڈیوائسز", color: "bg-purple-600 text-white" },
    { text: "فوٹو کاپی", color: "bg-slate-700 text-white" },
    { text: "ریمورٹ کنٹرول", color: "bg-indigo-600 text-white" },
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b00]/10 text-[#ff6b00] text-xs font-bold uppercase tracking-wider">
            About Our Business
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-900 dark:text-white">
            Trusted Tech &amp; Accessories Store In Pakistan
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Founded and managed by <strong className="text-slate-900 dark:text-white">Ali Ammar</strong>, ANB Mobile &amp; Computer Accessories brings top-notch genuine electronics, reliable after-sales service, and competitive pricing.
          </p>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Store Banner Replica & Owner Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Owner & Contact Card */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#ff6b00]/20 to-transparent rounded-bl-full pointer-events-none"></div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#ff6b00] to-orange-500 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-[#ff6b00]/30">
                  AA
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-heading">Ali Ammar</h3>
                  <p className="text-xs font-semibold text-[#ff6b00] uppercase tracking-wider">Store Founder &amp; Proprietor</p>
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-orange-500/10 text-[#ff6b00]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Primary Contact</span>
                    <a href="tel:03024007420" className="block text-base font-bold text-slate-900 dark:text-white hover:text-[#ff6b00] transition-colors">
                      0302-4007420
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-[#0066ff]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Secondary Helpline</span>
                    <a href="tel:03324934330" className="block text-base font-bold text-slate-900 dark:text-white hover:text-[#0066ff] transition-colors">
                      0332-4934330
                    </a>
                  </div>
                </div>
              </div>

              {/* Payment Methods Section */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/60">
                <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#ff6b00]" />
                  <span>Accepted Payment Methods</span>
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  {/* JazzCash Badge */}
                  <div className="p-3 rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center text-xs shadow">
                      JC
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900 dark:text-white">JazzCash</h5>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Instant Transfer</p>
                    </div>
                  </div>

                  {/* Easypaisa Badge */}
                  <div className="p-3 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white font-black flex items-center justify-center text-xs shadow">
                      EP
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900 dark:text-white">Easypaisa</h5>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Mobile Wallet</p>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-center text-emerald-600 dark:text-emerald-400 font-semibold mt-3 dir-rtl">
                  ایزی پیسہ اور جیز کیش کی سہولت موجود ہے
                </p>
              </div>

            </div>

            {/* Urdu Service Banner Card */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <Logo size="sm" />
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-600 text-white">
                  موبائل ریپئرنگ
                </span>
              </div>

              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                We provide expert mobile phone repairing services alongside new and used smartphone deals!
              </p>

              <div className="p-3 rounded-2xl bg-red-600/20 border border-red-500/40 text-center">
                <p className="text-sm font-bold text-red-400 dir-rtl">
                  موبائل ریپئرنگ کا کام بھی کیا جاتا ہے
                </p>
              </div>
            </div>

          </div>

          {/* Column 2: We Deal In Grid */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100 dark:border-slate-700/60">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white font-heading">
                    We Deal In
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Comprehensive selection of mobile, laptop &amp; IT inventory
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-[#ff6b00]/10 text-[#ff6b00]">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              {/* Urdu Specialty Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {urduPills.map((pill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-sm ${pill.color}`}
                  >
                    {pill.text}
                  </span>
                ))}
              </div>

              {/* Business Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dealsInList.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/50 hover:border-[#ff6b00] dark:hover:border-[#ff6b00] transition-all group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-[#ff6b00] shadow-sm group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#ff6b00] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Verified Local Dealer
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Tested &amp; Guaranteed
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
