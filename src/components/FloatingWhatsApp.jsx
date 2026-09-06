import React, { useState } from 'react';
import { MessageSquare, X, Send, PhoneCall, Sparkles } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const handleSend = (textToSend) => {
    const text = textToSend || userMsg || 'Hello ANB Mobile! I have an inquiry.';
    const url = `https://wa.me/923024007420?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
    setUserMsg('');
  };

  const quickQuestions = [
    "Is 20W Fast Charger available?",
    "Do you sell PTA approved used phones?",
    "What are the delivery charges?",
    "JazzCash payment procedure?"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Quick Chat Popup Modal */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* WhatsApp Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white text-emerald-600 font-black flex items-center justify-center text-sm shadow">
                  ANB
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-600 rounded-full"></span>
              </div>
              <div>
                <h4 className="text-sm font-extrabold font-heading">ANB Mobile Support</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping"></span>
                  Owner: Ali Ammar (Online)
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 dark:bg-slate-950 space-y-3 max-h-80 overflow-y-auto">
            <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-xs text-slate-800 dark:text-emerald-200 max-w-[85%]">
              <p className="font-semibold mb-1">Assalam-o-Alaikum! 👋</p>
              Welcome to ANB Mobile &amp; Computer Accessories! How can Ali Ammar help you today?
            </div>

            <div className="space-y-1.5 pt-2">
              <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Tap quick question:</p>
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="w-full text-left text-xs p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/70 text-slate-700 dark:text-slate-200 hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
                >
                  ⚡ {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white shadow-2xl shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
        aria-label="Open WhatsApp Chat"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 blur animate-ping pointer-events-none"></span>
        <PhoneCall className="w-7 h-7 relative z-10" />

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-extrabold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          WhatsApp Ali Ammar (+92 302 4007420)
        </span>
      </button>

    </div>
  );
};

export default FloatingWhatsApp;
