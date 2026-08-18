import React from 'react';
import { Lock } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';

export default function PrivacyPage({ onOpenContact, onOpenBooking }) {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-cyan-300 mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>Data Protection</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm font-mono text-white/50">
            Last Updated: May 13, 2025
          </p>
        </div>

        <div className="nyro-card p-8 md:p-12 border border-white/10 space-y-8 text-white/80 font-light leading-relaxed text-sm sm:text-base mb-20">
          <p className="text-lg text-white font-normal">
            Your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website.
          </p>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <h3 className="text-xl font-heading font-bold text-white">1. Introduction</h3>
            <p>
              This document explains how a website, app, or business collects, uses, stores, and protects user data. By using the Website, you agree to the terms outlined in this Privacy Policy.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <h3 className="text-xl font-heading font-bold text-white">2. Information We Collect</h3>
            <p>
              We collect both personal (name, email address, inquiry details) and non-personal information (browser type, IP address, device analytics) to improve our services and provide a seamless experience.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <h3 className="text-xl font-heading font-bold text-white">3. How We Use Your Information</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Communicate regarding project inquiries or support requests.</li>
              <li>Process transactions and deliver design assets.</li>
              <li>Improve website functionality and security.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <h3 className="text-xl font-heading font-bold text-white">4. Cookies and Security</h3>
            <p>
              We use cookies and industry-standard security measures to analyze web traffic and protect your personal information.
            </p>
          </div>
        </div>

      </div>

      <ContactCTA onOpenContact={onOpenContact} onOpenBooking={onOpenBooking} />
    </div>
  );
}
