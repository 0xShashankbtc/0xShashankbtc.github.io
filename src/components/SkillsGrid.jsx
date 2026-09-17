import React from 'react';
import { Layers, Cpu, Code2, Bot, Globe, Terminal, ArrowUpRight } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

const SKILL_ICONS = {
  languages: Code2,
  'ai-ml-llm': Cpu,
  'custom-agents-vision': Bot,
  'robotics-hardware': Layers,
  'web-backend-360': Globe,
  'automation-infrastructure': Terminal,
};

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-24 relative z-10 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono uppercase tracking-wider text-sky-600 mb-4 font-semibold shadow-xs">
              <Layers className="w-3.5 h-3.5" />
              <span>Technical Capabilities · GitHub Aligned</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              Specialized Engineering & AI Stack
            </h2>
            <p className="mt-3 text-slate-600 text-base font-normal">
              Directly aligned with <a href="https://github.com/ShashankJangid" target="_blank" rel="noopener noreferrer" className="text-sky-600 font-semibold hover:underline">github.com/ShashankJangid</a> — covering GPU computing, custom AI agents, robotics kinematics, and 360° web platforms.
            </p>
          </div>

          <a
            href="https://github.com/ShashankJangid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-mono font-semibold text-slate-800 transition-all duration-300 self-start md:self-auto shadow-xs"
          >
            <span>View GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, idx) => {
            const IconComponent = SKILL_ICONS[skill.id] || Cpu;
            return (
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
                      <IconComponent className="w-5 h-5" />
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
                      className="px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-700 bg-white border border-slate-200 font-mono shadow-2xs group-hover:border-slate-300 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
