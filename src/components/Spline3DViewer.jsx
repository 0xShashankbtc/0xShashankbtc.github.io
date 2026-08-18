import React from 'react';
import { SplineScene } from './ui/splite';
import { Spotlight } from './ui/spotlight';
import { Card } from './ui/card';
import { Move3d } from 'lucide-react';

export default function Spline3DViewer() {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono uppercase tracking-wider text-sky-600 mb-3 font-semibold shadow-xs">
            <span>Interactive 3D Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            Interactive 3D Dimension
          </h2>
          <p className="mt-2 text-base text-slate-600 font-normal">
            Hover and drag the viewport to interact with real-time dynamic 3D lighting.
          </p>
        </div>

        {/* 3D Spotlight Card Container */}
        <Card className="w-full h-[520px] bg-slate-950/95 border-slate-800 relative overflow-hidden rounded-3xl shadow-2xl">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          <div className="flex flex-col md:flex-row h-full">
            {/* Left Content */}
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-mono text-cyan-400 w-fit mb-4 font-semibold shadow-xs">
                <span>Shashank Jangid 3D Lab</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Autonomous Robotics & AI
              </h3>
              <p className="mt-4 text-slate-300 text-sm md:text-base font-normal max-w-lg leading-relaxed">
                Exploring kinematics, embedded systems, and machine intelligence in real-time interactive 3D space.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-mono text-slate-400">
                <Move3d className="w-4 h-4 text-sky-400" />
                <span>Move your cursor over the card to engage spotlight</span>
              </div>
            </div>

            {/* Right 3D Spline Scene Content */}
            <div className="flex-1 relative h-[280px] md:h-full">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>

      </div>
    </section>
  );
}
