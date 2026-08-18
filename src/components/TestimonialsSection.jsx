import React from 'react';
import { MessageSquareQuote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-purple-300 mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            A few highlights from the amazing people I’ve had the chance to design for
          </h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="nyro-card p-8 flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div>
                {/* Rating & Date Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-white/40">{item.date}</span>
                </div>

                {/* Quote */}
                <p className="text-base text-white/80 italic leading-relaxed font-light mb-8">
                  {item.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/20"
                />
                <div>
                  <div className="font-heading font-bold text-white text-base">
                    {item.name}
                  </div>
                  <div className="text-xs text-white/50">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
