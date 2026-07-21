import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Cpu,
  GraduationCap,
  Award,
  Scan,
  CheckCircle2,
  BrainCircuit
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          The Bento <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-indigo-400">Ecosystem</span>
        </h3>
        <p className="text-slate-400 text-sm sm:text-base">
          Detailed breakdown of my AI/ML education, Python backend logic, and React engineering skills.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Bento Card 1: Professional Summary */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-2 lg:col-span-2 rounded-3xl bg-slate-950/70 border border-white/10 p-8 flex flex-col justify-between backdrop-blur-xl relative overflow-hidden group hover:border-purple-500/50 transition-all"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <BrainCircuit className="w-36 h-36 text-purple-400" />
          </div>
          <div className="space-y-4 z-10">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <User className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-bold text-white">Professional Summary</h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Detail-oriented Engineer specializing in the intersection of data logic and user experience. Proficient in Python, Database Management Systems, and core Data Structures & Algorithms.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Passionate about the visual layer, leveraging HTML, CSS, JavaScript, React, and Tailwind CSS to translate complex logic into seamless, responsive, and high-performance user journeys.
            </p>
          </div>

          <div className="pt-6 z-10 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
              Data Logic + UI Layer
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              Python & React Integration
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              DSA & DBMS Systems
            </span>
          </div>
        </motion.div>

        {/* Bento Card 2: Technical Proficiencies */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-1 lg:col-span-2 rounded-3xl bg-slate-950/70 border border-white/10 p-8 flex flex-col justify-between backdrop-blur-xl hover:border-cyan-500/50 transition-all"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-bold text-white">Technical Proficiencies</h4>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-xs font-bold text-cyan-400 block">Languages</span>
                <p className="text-[11px] text-slate-300">Python, JavaScript (ES6+), HTML5, CSS3</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-xs font-bold text-purple-400 block">Frameworks & Libs</span>
                <p className="text-[11px] text-slate-300">React.js, Tailwind CSS, GSAP, Locomotive, Shery.js</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-xs font-bold text-amber-400 block">Core CS Concepts</span>
                <p className="text-[11px] text-slate-300">Data Structures & Algorithms (DSA), DBMS</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-xs font-bold text-emerald-400 block">Database</span>
                <p className="text-[11px] text-slate-300">SQL, PostgreSQL, MongoDB Atlas</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 mt-4 flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold text-purple-300">Degree: B.E. AI & ML (2026 Grad)</span>
            <BrainCircuit className="w-4 h-4 text-cyan-400" />
          </div>
        </motion.div>

        {/* Bento Card 3: Education */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-1 lg:col-span-2 rounded-3xl bg-slate-950/70 border border-white/10 p-8 flex flex-col justify-between backdrop-blur-xl hover:border-indigo-500/50 transition-all"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-bold text-white">Education & Institution</h4>
            <div className="space-y-2">
              <h5 className="text-base font-bold text-purple-300">
                Bachelor of Engineering (B.E.)
              </h5>
              <p className="text-sm font-semibold text-slate-200">
                Artificial Intelligence and Machine Learning
              </p>
              <p className="text-xs text-slate-400">
                Sagar Institute of Research and Technology (SIRT), Bhopal, India
              </p>
              <p className="text-xs font-bold text-cyan-400 pt-1">
                Graduation Year: 2026
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 mt-4 flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-xs text-slate-300 font-medium">Bhopal, India • AI/ML Engineering</span>
          </div>
        </motion.div>

        {/* Bento Card 4: AI/ML & Core Engineering Competencies */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-2 lg:col-span-2 rounded-3xl bg-slate-950/70 border border-white/10 p-8 flex flex-col justify-between backdrop-blur-xl hover:border-purple-500/50 transition-all"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Scan className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-bold text-white">AI / ML & Computer Vision Focus</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-400">Computer Vision</span>
                  <span className="text-[10px] text-emerald-400">96.8% Accuracy</span>
                </div>
                <p className="text-sm font-semibold text-white">Facial Recognition Pipeline</p>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  OpenCV and TensorFlow face detection pipeline integrated with a real-time Flask analytics dashboard and interactive JS interface.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400">Database & Backend</span>
                  <span className="text-[10px] text-slate-400 font-medium">PostgreSQL & MongoDB</span>
                </div>
                <p className="text-sm font-semibold text-white">DBMS & Data Architectures</p>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  SQL database design and MongoDB Atlas integration for real-time verification logs and high-performance data queries.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 mt-4 flex items-center justify-between text-xs text-slate-300">
            <span>Core Engineering: Python • React.js • PostgreSQL • DSA</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
