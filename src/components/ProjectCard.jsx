import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu } from 'lucide-react';

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="group shashank-card overflow-hidden cursor-pointer flex flex-col justify-between h-full bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 rounded-3xl shadow-xs"
    >
      {/* Project Image Frame */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        
        {/* Category Pill Tag */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3.5 py-1 text-xs font-semibold text-slate-800 bg-white/95 backdrop-blur-md rounded-full border border-slate-200 shadow-xs">
            {project.category}
          </span>
        </div>

        {/* Floating Arrow Button */}
        <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 rounded-full gradient-btn flex items-center justify-center shadow-md transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Content Info */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow bg-white">
        <div>
          <div className="flex items-baseline justify-between mb-2">
            <h3 className="text-2xl font-heading font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-mono text-slate-400 font-semibold">{project.duration}</span>
          </div>
          <p className="text-sm text-slate-600 font-normal leading-relaxed line-clamp-2">
            {project.subtitle}
          </p>
        </div>

        {/* Bottom Details Bar */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1.5 text-sky-600 font-mono font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            {project.industry}
          </span>
          <span className="font-mono text-slate-400">{project.scope}</span>
        </div>
      </div>
    </motion.div>
  );
}
