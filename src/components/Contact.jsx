import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  Phone,
  MapPin,
  ArrowUpRight,
  Sparkles,
  HeartHandshake
} from 'lucide-react';

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.6a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4z" />
  </svg>
);

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shubhangisona123@gmail.com');
    setCopiedEmail(true);
    setToastMessage("Email address copied to clipboard!");
    setTimeout(() => {
      setCopiedEmail(false);
      setToastMessage(null);
    }, 3500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      
      {/* Toast Notification Alert */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 right-6 z-50 px-5 py-3.5 rounded-2xl bg-slate-900/95 border border-purple-500/40 text-white shadow-2xl backdrop-blur-xl flex items-center gap-3 text-xs sm:text-sm font-semibold"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-slate-950/90 border border-white/10 p-8 sm:p-14 backdrop-blur-2xl space-y-12 relative overflow-hidden shadow-2xl"
      >
        {/* Ambient Particle Glow Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-600/30 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 z-10 relative">
          <span className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-extrabold uppercase tracking-widest inline-flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-cyan-400" /> Connect & Collaborate
          </span>
          <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-indigo-400">Build Together</span>
          </h3>
          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            I am actively seeking Front-End Development & AI/ML Engineering opportunities. Feel free to reach out via email, phone, or connect on social platforms!
          </p>
        </div>

        {/* Big Copy Email CTA Banner */}
        <div className="z-10 relative rounded-2xl bg-gradient-to-r from-purple-900/30 via-slate-900/80 to-cyan-900/30 border border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">Primary Contact Email</span>
            <p className="text-base sm:text-lg font-bold text-white tracking-tight font-mono">shubhangisona123@gmail.com</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopyEmail}
            className={`px-7 py-4 rounded-xl font-bold text-sm shadow-xl transition-all flex items-center gap-2.5 whitespace-nowrap ${
              copiedEmail
                ? 'bg-emerald-500 text-white shadow-emerald-500/30'
                : 'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white shadow-purple-600/30 hover:opacity-95'
            }`}
          >
            {copiedEmail ? (
              <>
                <Check className="w-4 h-4" />
                <span>Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Email Address</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 z-10 relative">
          
          {/* Location Card */}
          <motion.div
            whileHover={{ y: -4 }}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Location</p>
              <p className="text-sm font-semibold text-white">Bhopal, Madhya Pradesh</p>
              <p className="text-xs text-slate-400">India</p>
            </div>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.a
            whileHover={{ y: -4 }}
            href="https://linkedin.com/in/shubhangi-mishra-268119298"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-3 hover:border-cyan-500/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <LinkedinIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">LinkedIn</p>
              <p className="text-sm font-semibold text-white truncate">shubhangi-mishra</p>
              <span className="text-xs font-bold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1 mt-1">
                View Profile <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.a>

          {/* GitHub Card */}
          <motion.a
            whileHover={{ y: -4 }}
            href="https://github.com/Shubhangi7Mishra"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-3 hover:border-indigo-500/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
              <GithubIcon className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">GitHub</p>
              <p className="text-sm font-semibold text-white">Shubhangi7Mishra</p>
              <span className="text-xs font-bold text-indigo-400 group-hover:text-indigo-300 flex items-center gap-1 mt-1">
                Explore Code <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.a>

          {/* Phone Card */}
          <motion.a
            whileHover={{ y: -4 }}
            href="tel:+916263648135"
            className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-3 hover:border-emerald-500/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Phone Call</p>
              <p className="text-sm font-semibold text-white">+91 6263648135</p>
              <span className="text-xs font-bold text-emerald-400 group-hover:text-emerald-300 flex items-center gap-1 mt-1">
                Direct Call <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.a>

        </div>

      </motion.div>
    </section>
  );
}
