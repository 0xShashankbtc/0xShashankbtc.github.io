import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Bot, Cpu, Zap, Move3d } from 'lucide-react';
import { SITE_METADATA } from '../data/portfolioData';
import { SmokyButton } from './ui/smoky-button';
import { SplineScene } from './ui/splite';
import { Spotlight } from './ui/spotlight';
import { Card } from './ui/card';

const WORD_ITEMS = ['Robotics', 'AI Systems', 'IoT Hardware', 'Web3 DApps'];

export default function Hero({ onOpenContact, onOpenBooking }) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORD_ITEMS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-slate-50 text-slate-900 border-b border-slate-200">
      
      {/* Background Ambient Radial Lighting */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-radial from-sky-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-[550px] h-[550px] bg-radial from-indigo-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      
      {/* Ambient Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Hero Split Grid: Left Content, Right Interactive 3D Robot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Headline & Controls */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Status Rectangular Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-xl bg-white border border-sky-500/30 text-xs font-mono font-semibold text-slate-800 shadow-xs">
                <span>{SITE_METADATA.status}</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-slate-900 leading-[1.1]"
              >
                <span className="block mb-1">Engineering</span>
                <div className="h-[1.15em] flex items-center justify-center lg:justify-start overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={wordIndex}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -25 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="gradient-text inline-block"
                    >
                      {WORD_ITEMS[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {SITE_METADATA.tagline}
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <SmokyButton
                onClick={onOpenBooking}
                colors={{ primary: "#0ea5e9", secondary: "#6366f1", shadow: "#0284c7" }}
                className="w-full sm:w-auto min-w-[200px]"
              >
                <Bot className="w-4.5 h-4.5 text-sky-300" />
                <span>Chat with AI Twin</span>
              </SmokyButton>
              
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-semibold text-sm transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer uppercase tracking-wider"
              >
                <span>Contact Shashank</span>
                <ArrowUpRight className="w-4.5 h-4.5 text-slate-600" />
              </button>
            </motion.div>

          </div>

          {/* Right Column: Dedicated Interactive 3D Robot Card (Light Theme) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <Card className="w-full h-[450px] sm:h-[500px] bg-white border border-slate-200 relative overflow-hidden rounded-3xl shadow-xl group">
              
              {/* Dynamic Cursor Spotlight Tracking */}
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="rgba(14,165,233,0.15)"
                size={300}
              />

              {/* 3D Robot Interactive Canvas (unobstructed pointer events) */}
              <div className="w-full h-full relative z-10">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full cursor-grab active:cursor-grabbing"
                />
              </div>

              {/* Top Interactive Indicator Badge */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-mono text-slate-800 shadow-xs">
                <Move3d className="w-3.5 h-3.5 text-sky-600" />
                <span>Interactive 3D Robot · Drag to Move</span>
              </div>

            </Card>
          </motion.div>

        </div>

        {/* Bio Feature Showcase Card (Pristine Light Theme) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="shashank-card p-8 md:p-12 bg-white border border-slate-200 text-slate-900 max-w-5xl mx-auto relative overflow-hidden shadow-lg rounded-3xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Bio Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-sky-600 text-xs font-mono tracking-widest uppercase font-bold">
                <Cpu className="w-4 h-4" />
                <span>M.Tech AI · IIT Jodhpur</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
                Autonomous Robotics & Embedded Hardware
              </h3>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                {SITE_METADATA.bio}
              </p>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['ROS & Kinematics', 'ESP32 IoT', 'Solidity Web3', 'MLOps & LLMs'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 border border-sky-500/20 text-xs font-mono text-slate-700 font-medium shadow-2xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Image (Original Aspect Ratio & Natural Framing) */}
            <div className="lg:col-span-5 relative group overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-100 shadow-md">
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src="/sj.jpg"
                  alt="Shashank Jangid - Original Capture"
                  className="w-full h-full object-cover object-[50%_18%] transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                />
              </div>

              <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 text-[11px] font-mono font-bold text-slate-800 shadow-xs flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>Original Lab Capture</span>
              </div>
            </div>

          </div>

          {/* Stats Bar */}
          <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
                {SITE_METADATA.yearsExperience}
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-mono font-medium">
                Years Exp
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
                {SITE_METADATA.projectsDelivered}
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-mono font-medium">
                Projects
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
                {SITE_METADATA.certificationsCount}
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-mono font-medium">
                Certifications
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
