import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_METADATA } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-14 relative z-10 border-t border-slate-200 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <Link to="/" className="inline-block">
              <span className="font-heading text-xl font-bold tracking-tight text-slate-900">
                {SITE_METADATA.name}
              </span>
            </Link>
            <p className="text-xs text-slate-600 font-normal max-w-sm leading-relaxed">
              {SITE_METADATA.title} — M.Tech AI Scholar at IIT Jodhpur, engineering autonomous robotics, intelligent hardware, and Web3 applications.
            </p>
            <div className="text-[11px] font-mono text-slate-400">
              © {new Date().getFullYear()} {SITE_METADATA.name} | All Rights Reserved
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-600 mb-2 font-semibold">
              Navigation
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>
                <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-sky-600 transition-colors">Projects & Systems</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-600 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-600 mb-2 font-semibold">
              Contact & Credentials
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>
                <a href={`mailto:${SITE_METADATA.email}`} className="hover:text-sky-600 transition-colors font-mono text-xs">
                  {SITE_METADATA.email}
                </a>
              </li>
              <li>
                <span className="font-mono text-xs text-slate-700">{SITE_METADATA.phone}</span>
              </li>
              <li>
                <a href={SITE_METADATA.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 transition-colors font-mono text-xs">
                  LinkedIn Profile
                </a>
              </li>
              <li className="pt-1 text-xs text-slate-400">
                IIT Jodhpur · AI & Robotics Research
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            Shashank Jangid — IIT Engineer · AI · IoT · Web3
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-slate-900 transition-colors cursor-pointer">
              Back to top
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
