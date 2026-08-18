import React from 'react';
import { GraduationCap, Award, BookOpen, Check } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export default function EducationTimeline() {
  return (
    <section className="py-24 relative z-10 border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono uppercase tracking-wider text-sky-600 mb-3 font-semibold shadow-xs">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Journey</span>
              </div>
              <h2 className="text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
                Education & Degree Programs
              </h2>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="shashank-card p-6 bg-white border border-slate-200 rounded-2xl shadow-xs relative"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-wider">
                      {edu.period}
                    </span>
                    <BookOpen className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-slate-700 mb-2">
                    {edu.institution}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono uppercase tracking-wider text-sky-600 mb-3 font-semibold shadow-xs">
                <Award className="w-3.5 h-3.5" />
                <span>Honors & Credentials</span>
              </div>
              <h2 className="text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
                Certifications
              </h2>
            </div>

            <div className="shashank-card p-6 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-3 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 border border-sky-200 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-normal">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
