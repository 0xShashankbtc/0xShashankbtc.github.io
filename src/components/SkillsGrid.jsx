import React from 'react';
import { Layers, Cpu } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-24 relative z-10 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono uppercase tracking-wider text-sky-600 mb-4 font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Specialized Engineering & AI Domains
          </h2>
          <p className="mt-3 text-slate-600 text-base font-normal">
            From low-level microcontroller signal processing to high-level computer vision, ROS robotics, and Web3 smart contracts.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, idx) => (
            <div
              key={skill.id}
              className="shashank-card p-8 flex flex-col justify-between bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-all duration-300 rounded-3xl shadow-xs group"
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-mono font-bold text-slate-300 group-hover:text-sky-600 transition-colors">
                    0{idx + 1}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-indigo-600 group-hover:text-white transition-all shadow-xs">
                    <Cpu className="w-5 h-5" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                  {skill.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {skill.description}
                </p>
              </div>

              {/* Tools Badges */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/80">
                {skill.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-700 bg-white border border-slate-200 font-mono shadow-2xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
