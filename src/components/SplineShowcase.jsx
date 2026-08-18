import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Move3d, ShieldCheck } from 'lucide-react';
import { SITE_METADATA } from '../data/portfolioData';

export default function SplineShowcase() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="py-16 relative overflow-hidden bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center text-xs font-mono text-cyan-600 uppercase tracking-widest mb-2 font-semibold">
            <span>Interactive 3D Scene</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            Spline 3D Robotics Model
          </h2>
          <p className="mt-2 text-sm text-slate-600 font-normal">
            Drag and rotate the 3D model below to explore Shashank's interactive robotics environment.
          </p>
        </div>

        {/* 3D Canvas Container */}
        <div className="nyro-card p-4 sm:p-6 border border-slate-200 max-w-5xl mx-auto relative overflow-hidden bg-white shadow-md rounded-2xl">
          {/* Badge Overlays */}
          <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-mono tracking-wider uppercase shadow-xs">
            <span>Interactive 3D Robot · Drag to Explore</span>
          </div>

          <div className="absolute top-6 right-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
            <span>Spline 3D Engine</span>
          </div>

          {/* Spline Component */}
          <div className="w-full h-[400px] sm:h-[500px] rounded-xl overflow-hidden relative bg-slate-50">
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-700 font-mono text-xs gap-2">
                Loading 3D Robotics Scene...
              </div>
            )}
            <Spline
              scene={SITE_METADATA.splineModelUrl}
              onLoad={() => setIsLoaded(true)}
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* Bottom Hint */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest">
            <Move3d className="w-4 h-4 text-cyan-600" />
            <span>Use cursor to rotate 3D view</span>
          </div>
        </div>
      </div>
    </section>
  );
}
