import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X, Bot } from 'lucide-react';
import { SITE_METADATA } from '../data/portfolioData';

export default function Navbar({ onOpenContact, onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl py-3.5 border-b border-slate-200 shadow-xs'
          : 'bg-white/70 backdrop-blur-md py-5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-heading font-extrabold text-sm shadow-md group-hover:bg-cyan-600 transition-colors">
            SJ
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-slate-900 tracking-tight text-base group-hover:text-cyan-600 transition-colors">
              {SITE_METADATA.name}
            </span>
            <span className="font-mono text-[10px] text-cyan-600 uppercase tracking-wider font-semibold">
              {SITE_METADATA.title}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-slate-600 font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors duration-200 hover:text-slate-900 ${
                  isActive ? 'text-cyan-600 font-bold' : ''
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white font-heading font-semibold text-xs uppercase tracking-wider hover:bg-cyan-600 transition-all shadow-xs cursor-pointer"
          >
            <Bot className="w-4 h-4" />
            <span>AI Twin</span>
          </button>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 p-6 space-y-4 shadow-xl">
          <div className="flex flex-col gap-4 font-mono text-sm uppercase tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-slate-700 hover:text-cyan-600 flex items-center justify-between font-medium"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full bg-slate-900 text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Bot className="w-4 h-4" />
              <span>Talk to AI Twin</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
