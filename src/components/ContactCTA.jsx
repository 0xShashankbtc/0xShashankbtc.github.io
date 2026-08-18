import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Bot } from 'lucide-react';
import { SmokyButton } from './ui/smoky-button';

export default function ContactCTA({ onOpenContact, onOpenBooking }) {
  return (
    <section className="py-24 relative z-10 border-t border-slate-200 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="shashank-card p-10 md:p-16 bg-white border border-slate-200 text-slate-900 relative overflow-hidden rounded-3xl shadow-xl"
        >
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-sky-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-radial from-indigo-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono uppercase tracking-wider text-sky-600 font-semibold shadow-xs">
                <span>Let's Collaborate</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
                Ready to Build Next-Gen AI & Robotics Systems?
              </h2>
              <p className="text-slate-600 text-base font-normal max-w-2xl leading-relaxed">
                Whether you need custom ESP32 IoT hardware, ROS robotics algorithms, Web3 smart contracts, or AI integration — let’s connect.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-end">
              <SmokyButton
                onClick={onOpenBooking}
                colors={{ primary: "#0ea5e9", secondary: "#6366f1", shadow: "#0284c7" }}
                className="w-full"
              >
                <Bot className="w-4.5 h-4.5 text-sky-300" />
                <span>Chat with AI Twin</span>
              </SmokyButton>

              <button
                onClick={onOpenContact}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer uppercase tracking-wider"
              >
                <Mail className="w-4.5 h-4.5 text-white" />
                <span>Contact Shashank</span>
                <ArrowUpRight className="w-4.5 h-4.5 text-slate-300" />
              </button>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
