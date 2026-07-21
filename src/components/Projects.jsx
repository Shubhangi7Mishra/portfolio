import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Sparkles,
  X,
  ExternalLink,
  Code2,
  CheckCircle2
} from 'lucide-react';

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export default function Projects() {
  // Cursor Motion Values & Springs for physics-based cursor follower
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 350 };
  const cursorX = useSpring(rawMouseX, springConfig);
  const cursorY = useSpring(rawMouseY, springConfig);

  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedModalProject, setSelectedModalProject] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      rawMouseX.set(e.clientX + 20);
      rawMouseY.set(e.clientY + 20);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [rawMouseX, rawMouseY]);

  // Projects data ordered chronologically by year
  const projects = [
    {
      id: 1,
      title: "AI Facial Recognition Attendance System",
      date: "2026",
      category: "AI / ML & Computer Vision",
      description: "Engineered front-end architecture and interactive UI layer achieving 96.8% recognition accuracy. Built a dynamic Flask-based dashboard for real-time attendance analytics, student verification logs, and subject reports integrated with OpenCV & TensorFlow pipelines.",
      longDescription: "This flagship AI/ML project automates identity verification and classroom attendance using modern computer vision. The custom OpenCV & TensorFlow face recognition pipeline processes high-framerate streams and logs student records instantly into a MongoDB Atlas cloud database. The React & Flask web dashboard displays live analytics, subject filter logs, and student attendance metrics with 96.8% accuracy.",
      tech: ["Python", "OpenCV", "TensorFlow", "Flask", "JavaScript", "MongoDB Atlas"],
      badge: "AI/ML + Computer Vision",
      badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      image: "./facial_recognition_custom.jpeg",
      github: "https://github.com/Shubhangi7Mishra",
      live: "#"
    },
    {
      id: 2,
      title: "The React Experience",
      date: "2024",
      category: "React.js & Motion UX",
      description: "Engineered a visually impressive web application utilizing React to replicate modern, high-end digital design patterns. Integrated Locomotive Scroll for smooth cinematic scrolling and leveraged Framer Motion for dynamic animations.",
      longDescription: "A cutting-edge frontend experience replicating award-winning agency digital design patterns. Built with modular React component structures, Framer Motion micro-interactions, Locomotive Scroll smooth scrolling workflows, and tailored Tailwind CSS design tokens.",
      tech: ["React.js", "Locomotive Scroll", "Framer Motion", "Tailwind CSS"],
      badge: "React + Motion Skill",
      badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      image: "./react_experience_custom.jpeg",
      github: "https://github.com/Shubhangi7Mishra",
      live: "#"
    },
    {
      id: 3,
      title: "The GSAP Canvas",
      date: "2024",
      category: "Creative Frontend & GSAP",
      description: "Developed a fully responsive clone of the Obys Agency website, embedding advanced web animation workflows (GSAP and Shery.js) to optimize user experience, front-end interactivity, and fluid transitions.",
      longDescription: "An interactive creative canvas project demonstrating pixel-perfect web layout replication and advanced web graphics animation. Utilizes GreenSock (GSAP), Shery.js 3D canvas effects, custom mouse cursors, and fluid page transitions.",
      tech: ["HTML5", "CSS3", "JavaScript", "GSAP", "Locomotive Scroll", "Shery.js"],
      badge: "Creative Canvas & GSAP",
      badgeColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
      image: "./gsap_canvas_custom.png",
      github: "https://github.com/Shubhangi7Mishra",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Floating Physics-Based Cursor Hover Preview Window */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            style={{
              x: cursorX,
              y: cursorY,
            }}
            className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block"
          >
            <div className="relative w-80 h-48 rounded-2xl overflow-hidden shadow-2xl border border-purple-500/50 backdrop-blur-2xl bg-slate-950/95">
              <img
                src={hoveredProject.image}
                alt={hoveredProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent p-4 flex flex-col justify-end">
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest">{hoveredProject.category}</span>
                <span className="text-sm font-black text-white leading-tight mt-0.5">{hoveredProject.title}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-xs font-bold text-purple-400 tracking-widest uppercase">Resume Projects</h2>
        <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-indigo-400">Projects</span>
        </h3>
        <p className="text-slate-400 text-sm sm:text-base">
          Hover over any project card to activate the cursor preview window. Click for case study details.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredProject(proj)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => setSelectedModalProject(proj)}
            className="rounded-3xl bg-slate-950/80 border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-purple-500/50 transition-all duration-300 shadow-2xl cursor-pointer"
          >
            <div>
              {/* Project Image Header */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-slate-950/90 border border-white/10 text-xs font-bold text-purple-300 backdrop-blur-md">
                    {proj.date}
                  </span>
                  <span className={`px-3 py-1 rounded-full border text-xs font-extrabold backdrop-blur-md ${proj.badgeColor}`}>
                    {proj.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-extrabold text-cyan-400 uppercase tracking-wider block">{proj.category}</span>
                  <h4 className="text-xl font-extrabold text-white">{proj.title}</h4>
                </div>
              </div>

              {/* Project Description */}
              <div className="p-6 space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tech.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-purple-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" /> Code Repository
              </a>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedModalProject(proj);
                }}
                className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500 hover:text-white transition-all"
                title="View Case Study Modal"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal Popup */}
      <AnimatePresence>
        {selectedModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl rounded-3xl bg-slate-950 border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedModalProject(null)}
                className="absolute top-4 right-4 p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Header */}
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-white/10">
                <img
                  src={selectedModalProject.image}
                  alt={selectedModalProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">{selectedModalProject.category}</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">{selectedModalProject.title}</h3>
                </div>
              </div>

              {/* Modal Details Body */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">Project Overview</h4>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                    {selectedModalProject.longDescription}
                  </p>
                </div>

                {/* Tech Stack Used */}
                <div>
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">Technologies & Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedModalProject.tech.map((t, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Action Buttons */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={selectedModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold text-xs flex items-center gap-2 transition-all"
                  >
                    <GithubIcon className="w-4 h-4" /> View GitHub Repository
                  </a>
                  <button
                    onClick={() => setSelectedModalProject(null)}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    Close Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
