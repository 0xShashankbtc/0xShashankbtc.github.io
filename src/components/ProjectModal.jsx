import React, { useEffect } from 'react';
import { X, CheckCircle2, Cpu } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  // Lock background body scroll and prevent Lenis scroll leaking
  useEffect(() => {
    if (project) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-950/60 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="shashank-card w-full max-w-2xl max-h-[85vh] flex flex-col bg-white border border-slate-200 shadow-2xl rounded-3xl overflow-hidden relative my-auto"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent="true"
      >
        {/* Floating Top-Right Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-950 hover:bg-white shadow-md transition-all cursor-pointer"
          title="Close dialog (Esc)"
        >
          <X className="w-4.5 h-4.5" />
        </button>

        {/* Scrollable Modal Content */}
        <div 
          className="overflow-y-auto p-6 sm:p-8 space-y-6 overscroll-contain"
          data-lenis-prevent="true"
        >
          
          {/* Hero Image Container */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3.5 left-3.5">
              <span className="px-3 py-1 text-xs font-mono font-semibold text-slate-800 bg-white/95 backdrop-blur-md rounded-full border border-slate-200 shadow-xs">
                {project.category}
              </span>
            </div>
          </div>

          {/* Title & Industry */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-600 font-semibold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>{project.industry || 'Advanced Engineering'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight leading-snug">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {project.subtitle}
            </p>
          </div>

          {/* Metadata Matrix */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-mono">
            <div>
              <div className="text-slate-400 uppercase font-semibold mb-0.5 text-[10px]">Duration</div>
              <div className="font-bold text-slate-800 text-xs sm:text-sm">{project.duration || '2024'}</div>
            </div>
            <div>
              <div className="text-slate-400 uppercase font-semibold mb-0.5 text-[10px]">Domain</div>
              <div className="font-bold text-slate-800 text-xs sm:text-sm">{project.category}</div>
            </div>
            <div>
              <div className="text-slate-400 uppercase font-semibold mb-0.5 text-[10px]">Scope</div>
              <div className="font-bold text-slate-800 text-xs sm:text-sm truncate">{project.scope || 'System Architecture'}</div>
            </div>
          </div>

          {/* Challenge & Solution Cards */}
          {(project.challenge || project.solution) && (
            <div className="space-y-3">
              {project.challenge && (
                <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
                  <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider block mb-1">
                    Challenge
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="p-4 bg-sky-500/5 border border-sky-500/20 rounded-2xl">
                  <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider block mb-1">
                    Solution & Implementation
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Technical Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-heading font-bold text-slate-900 uppercase tracking-wider font-mono">
                Key Technical Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
