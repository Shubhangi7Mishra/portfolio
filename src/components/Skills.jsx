import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Terminal,
  BrainCircuit,
  Binary,
  Zap,
  Sparkles,
  Database
} from 'lucide-react';

export default function Skills() {
  // Core Tech Stack Data from Resume
  const techStack = [
    { name: "React.js", category: "Frontend Core", level: "Advanced", icon: Code2, color: "from-cyan-500 to-blue-500" },
    { name: "Python", category: "Core & AI Logic", level: "Advanced", icon: Terminal, color: "from-amber-400 to-yellow-500" },
    { name: "Artificial Intelligence & ML", category: "Degree Focus", level: "Specialization", icon: BrainCircuit, color: "from-purple-500 to-indigo-500" },
    { name: "Data Structures & Algorithms", category: "CS Core", level: "Proficient", icon: Binary, color: "from-blue-600 to-cyan-500" },
    { name: "Tailwind CSS", category: "Styling & UI", level: "Advanced", icon: Zap, color: "from-teal-400 to-cyan-500" },
    { name: "Framer Motion & GSAP", category: "Cinematic Motion", level: "Advanced", icon: Sparkles, color: "from-fuchsia-500 to-pink-500" },
    { name: "DBMS & SQL / PostgreSQL", category: "Database Logic", level: "Proficient", icon: Database, color: "from-emerald-400 to-teal-500" },
    { name: "JavaScript (ES6+)", category: "Core Language", level: "Advanced", icon: Code2, color: "from-yellow-400 to-amber-500" }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-xs font-bold text-cyan-400 tracking-widest uppercase">Tech Stack & Ecosystem</h2>
        <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Capabilities</span>
        </h3>
        <p className="text-slate-400 text-sm sm:text-base">
          Technical skills listed in my resume, bridging frontend UX with Python & AI logic.
        </p>
      </div>

      {/* Primary Tech Capabilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {techStack.map((tech, idx) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl bg-slate-950/80 border border-white/10 p-6 backdrop-blur-xl relative overflow-hidden group hover:border-purple-500/50 transition-all"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tech.color}`} />
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-purple-300">{tech.level}</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-1">{tech.name}</h4>
              <p className="text-xs text-slate-400 mb-4">{tech.category}</p>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${tech.color} rounded-full w-4/5`} />
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
