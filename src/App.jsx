import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Mail,
  Code2,
  Sparkles,
  ArrowUpRight,
  Menu,
  X,
  BrainCircuit,
  Database,
  Music,
  Play,
  Pause
} from 'lucide-react';

// Modular Component Imports
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

// Custom SVG Icons for GitHub and LinkedIn
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

// 3D Tilt Card Component
const TiltCard = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative transition-all duration-200 ease-out ${className}`}
    >
      <div style={{ transform: "translateZ(25px)" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Floating Background Music Player State (HTML5 Audio API)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef(null);

  // Royalty-free ambient lofi background track
  const bgTrackUrl = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3";

  useEffect(() => {
    audioRef.current = new Audio(bgTrackUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.35;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleBackgroundMusic = () => {
    if (!audioRef.current) return;
    if (isPlayingMusic) {
      audioRef.current.pause();
      setIsPlayingMusic(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlayingMusic(true);
      }).catch((err) => {
        console.error("Audio playback error:", err);
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-purple-500 selection:text-white relative overflow-x-hidden">
      
      {/* Midnight Ambient Glow Orbs & Background Grid Canvas */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[160px]" />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#1f293d_1px,transparent_1px)] [background-size:28px_28px] opacity-15" />
      </div>

      {/* Fixed Floating Small MusicPlayer Div in Bottom Corner (Cat Image + Steady Glass Design) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 right-6 z-50 p-2.5 rounded-2xl bg-slate-950/90 border border-white/10 backdrop-blur-xl shadow-2xl flex items-center gap-3 hover:border-purple-500/40 transition-all"
      >
        {/* Cat Image Thumbnail */}
        <div className="relative w-11 h-11 rounded-xl overflow-hidden shadow-md flex-shrink-0 border border-white/10">
          <img
            src="/cat_custom_player.jpeg"
            alt="Cat Music Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Track Label ("Hello!") */}
        <div className="hidden sm:block pr-1">
          <p className="text-sm font-bold text-white leading-tight">Hello!</p>
          <p className="text-[10px] text-purple-400 font-semibold flex items-center gap-1 mt-0.5">
            <Music className="w-3 h-3 text-cyan-400" />
            <span>{isPlayingMusic ? 'Playing Music' : 'Background Track'}</span>
          </p>
        </div>

        {/* Play/Pause Toggle Button */}
        <button
          onClick={toggleBackgroundMusic}
          className={`w-9 h-9 rounded-xl flex items-center justify-center text-white transition-all shadow-md ${
            isPlayingMusic
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90'
              : 'bg-white/10 hover:bg-white/15 text-slate-300 border border-white/10'
          }`}
          aria-label={isPlayingMusic ? "Pause Music" : "Play Music"}
        >
          {isPlayingMusic ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4 ml-0.5" />
          )}
        </button>
      </motion.div>

      {/* Glassmorphic Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-2xl bg-slate-950/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 p-[2px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-white text-base">SM</span>
              </div>
            </div>
            <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-purple-300 transition-colors">
              Shubhangi<span className="text-purple-400">.Mishra</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-slate-300">
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
            <a href="#timeline" className="hover:text-cyan-400 transition-colors">Timeline</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </nav>

          {/* Social Icons & Connect Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/Shubhangi7Mishra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-slate-300 hover:text-white rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-110"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/shubhangi-mishra-268119298"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-slate-300 hover:text-white rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-110"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-purple-600/30 hover:scale-105 flex items-center gap-2"
            >
              <span>Connect</span>
              <Sparkles className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-slate-300 hover:text-white rounded-xl bg-white/5 border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 border-b border-white/10 px-6 py-6 space-y-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-purple-400 font-medium py-2">About</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium py-2">Skills</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-purple-400 font-medium py-2">Projects</a>
            <a href="#timeline" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium py-2">Timeline</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-purple-400 font-medium py-2">Contact</a>
            <div className="flex gap-4 pt-4 border-t border-white/10">
              <a href="https://github.com/Shubhangi7Mishra" target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-2 text-slate-300 text-sm font-medium">
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a href="https://linkedin.com/in/shubhangi-mishra-268119298" target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-2 text-slate-300 text-sm font-medium">
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-widest">
              <BrainCircuit className="w-4 h-4 text-cyan-400" />
              <span>Data Logic & User Experience Engineer</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.08]">
              React Developer & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-indigo-400">AI / ML Engineer</span>.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
              Hi, I'm <strong className="text-white font-semibold">Shubhangi Mishra</strong>. Detail-oriented engineer specializing in the intersection of data logic and user experience. Proficient in <span className="text-amber-300 font-semibold">Python</span>, <span className="text-purple-300 font-semibold">React.js</span>, <span className="text-cyan-300 font-semibold">DBMS/SQL</span>, and core <span className="text-indigo-300 font-semibold">DSA</span>.
            </p>

            {/* AI/ML & React Skill Badges */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-purple-500/30 text-xs font-semibold text-purple-300">
                <Code2 className="w-3.5 h-3.5 text-purple-400" /> React.js & Tailwind UI
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-cyan-500/30 text-xs font-semibold text-cyan-300">
                <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" /> Python, OpenCV & TensorFlow
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-indigo-500/30 text-xs font-semibold text-indigo-300">
                <Database className="w-3.5 h-3.5 text-indigo-400" /> PostgreSQL & DBMS
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-95 text-white font-bold text-sm transition-all shadow-xl shadow-purple-600/30 hover:scale-105 flex items-center gap-2"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 text-slate-200 font-bold text-sm transition-all hover:scale-105 flex items-center gap-2"
              >
                <span>Contact Info</span>
                <Mail className="w-4 h-4 text-purple-400" />
              </a>
            </div>
          </motion.div>

          {/* Hero Right 3D Avatar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <TiltCard className="w-full max-w-md">
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-purple-500/40 via-cyan-500/30 to-transparent shadow-2xl backdrop-blur-2xl">
                <div className="bg-slate-950/95 rounded-[23px] p-6 border border-white/10 space-y-6">
                  
                  {/* Portrait Frame */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group">
                    <img
                      src="/shubhangi_new_portrait.jpeg"
                      alt="Shubhangi Mishra Profile"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
                    <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-white">Shubhangi Mishra</p>
                        <p className="text-[11px] font-semibold text-purple-400">B.E. AI & ML (SIRT Bhopal)</p>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-lg font-extrabold text-purple-400">React.js</span>
                      <p className="text-[10px] text-slate-400 font-medium">Visual Layer</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-lg font-extrabold text-cyan-400">Python</span>
                      <p className="text-[10px] text-slate-400 font-medium">Data & AI</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-lg font-extrabold text-indigo-400">2026</span>
                      <p className="text-[10px] text-slate-400 font-medium">Graduation</p>
                    </div>
                  </div>

                </div>
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </section>

      {/* Render Modular Sections */}
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Shubhangi Mishra • B.E. AI & ML • Data Logic & Frontend Engineer.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <a href="https://github.com/Shubhangi7Mishra" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/shubhangi-mishra-268119298" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:shubhangisona123@gmail.com" className="hover:text-purple-400 transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
