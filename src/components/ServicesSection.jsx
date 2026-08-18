import React from 'react';
import { Layout, Globe, Code2, Layers } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative z-10 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono uppercase tracking-wider text-cyan-600 mb-4 font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Specialized Engineering & AI Capabilities
          </h2>
          <p className="mt-3 text-slate-600 text-base font-normal">
            From low-level microcontroller signal processing to high-level computer vision and Web3 smart contracts.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="nyro-card p-8 md:p-10 flex flex-col justify-between bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-all duration-400 rounded-2xl shadow-xs group"
            >
              <div>
                {/* Top Bar with Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-mono font-bold text-slate-300 group-hover:text-cyan-600 transition-colors">
                    0{idx + 1}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all shadow-xs">
                    <Code2 className="w-6 h-6" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 font-normal leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Service Tag Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/80">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium text-slate-700 bg-white border border-slate-200 font-mono shadow-2xs"
                  >
                    {tag}
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
