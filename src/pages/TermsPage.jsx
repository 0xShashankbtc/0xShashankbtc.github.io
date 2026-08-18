import React from 'react';
import { Shield } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';

export default function TermsPage({ onOpenContact, onOpenBooking }) {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-purple-300 mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-sm font-mono text-white/50">
            Last Updated: May 13, 2025
          </p>
        </div>

        <div className="nyro-card p-8 md:p-12 border border-white/10 space-y-8 text-white/80 font-light leading-relaxed text-sm sm:text-base mb-20">
          <p className="text-lg text-white font-normal">
            Welcome to Nyro© ("we," "our," "us"). By accessing and using our website and services, you agree to comply with and be bound by these Terms of Service.
          </p>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <h3 className="text-xl font-heading font-bold text-white">1. Introduction</h3>
            <p>
              It is a legal agreement that outlines the rules, responsibilities, and expectations between a website, app, or service provider and its users.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <h3 className="text-xl font-heading font-bold text-white">2. Services</h3>
            <p>
              We provide brand design services, including but not limited to logo design, brand strategy, visual identity development, and Framer website engineering.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <h3 className="text-xl font-heading font-bold text-white">3. User Responsibilities</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Do not use our services for any unlawful purpose.</li>
              <li>Do not infringe on any intellectual property rights.</li>
              <li>Do not attempt to hack, disrupt, or modify our website.</li>
              <li>Do not use our content or designs without prior permission.</li>
            </ul>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <h3 className="text-xl font-heading font-bold text-white">4. Payments and Refunds</h3>
            <p>
              All payments for services must be made as per the agreed terms before work commences. Refunds are only granted under specific circumstances, subject to review.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <h3 className="text-xl font-heading font-bold text-white">5. Intellectual Property</h3>
            <p>
              We retain ownership of all preliminary design work until final payment is received. Clients receive rights to use the final design as outlined in the contract.
            </p>
          </div>
        </div>

      </div>

      <ContactCTA onOpenContact={onOpenContact} onOpenBooking={onOpenBooking} />
    </div>
  );
}
