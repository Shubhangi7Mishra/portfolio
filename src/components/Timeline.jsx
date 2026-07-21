import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Timeline() {
  // Timeline events sorted by year (2026, then 2024)
  const timelineEvents = [
    {
      year: "2022 - 2026",
      title: "Bachelor of Engineering (B.E.)",
      specialization: "Artificial Intelligence and Machine Learning",
      institution: "Sagar Institute of Research and Technology (SIRT), Bhopal",
      description: "Pursuing specialized degree in AI & Machine Learning. Proficient in Python, Data Structures & Algorithms (DSA), Database Systems (DBMS, SQL, PostgreSQL), and modern React frontend engineering.",
      type: "education"
    },
    {
      year: "2026",
      title: "AI-Based Real-Time Facial Recognition Attendance System",
      specialization: "Python, OpenCV, TensorFlow, Flask, JavaScript, MongoDB",
      institution: "AI/ML Project (96.8% Accuracy)",
      description: "Engineered interactive UI layer and Flask-based real-time dashboard for automated attendance analytics, identity verification logs, and TensorFlow face detection pipeline.",
      type: "project"
    },
    {
      year: "2024",
      title: "The React Experience",
      specialization: "React.js, Locomotive Scroll, Framer Motion, Tailwind CSS",
      institution: "Featured Web Project",
      description: "Replicated modern digital design patterns utilizing React, Locomotive Scroll cinematic scrolling, and Framer Motion fluid animation workflows.",
      type: "project"
    },
    {
      year: "2024",
      title: "The GSAP Canvas",
      specialization: "HTML5, CSS3, JavaScript, GSAP, Shery.js, Locomotive Scroll",
      institution: "Featured Web Project",
      description: "Developed a fully responsive Obys Agency website clone with pixel-perfect design alignment and advanced GSAP & Shery.js animation transitions.",
      type: "project"
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-xs font-bold text-indigo-400 tracking-widest uppercase">Academics & Work</h2>
        <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Timeline & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Milestones</span>
        </h3>
        <p className="text-slate-400 text-sm sm:text-base">
          Chronological progression of my engineering education, AI/ML research, and featured projects.
        </p>
      </div>

      <div className="relative border-l-2 border-purple-500/30 ml-4 md:ml-36 space-y-12">
        {timelineEvents.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="relative pl-8 md:pl-12 group"
          >
            {/* Timeline Marker Node */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-purple-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all" />

            {/* Desktop Year Badge */}
            <div className="hidden md:block absolute -left-40 top-1 text-right w-32">
              <span className="text-xs font-extrabold text-purple-300 px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20">
                {item.year}
              </span>
            </div>

            {/* Mobile Year Badge */}
            <div className="md:hidden mb-2">
              <span className="text-xs font-extrabold text-purple-300 px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20">
                {item.year}
              </span>
            </div>

            {/* Card Content */}
            <div className="rounded-2xl bg-slate-950/80 border border-white/10 p-6 backdrop-blur-xl space-y-2 group-hover:border-purple-500/40 transition-all">
              <h4 className="text-lg font-bold text-white">{item.title}</h4>
              <p className="text-xs font-bold text-cyan-400">{item.specialization}</p>
              <p className="text-xs font-medium text-slate-400">{item.institution}</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light pt-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
