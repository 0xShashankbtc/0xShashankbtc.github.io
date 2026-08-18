import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { ARTICLES } from '../data/portfolioData';

export default function ArticlesSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative z-10 border-t border-white/5 bg-[#0d0f14]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-cyan-300 mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Articles</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              From hands-on tips to deep dives into design and strategy
            </h2>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-sm font-semibold text-white transition-all duration-300 self-start md:self-auto hover:border-white/30"
          >
            <span>see all articles</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => navigate(`/blog/${article.slug}`)}
              className="nyro-card p-8 flex flex-col justify-between border border-white/10 hover:border-cyan-500/30 transition-all duration-500 cursor-pointer group"
            >
              <div>
                {/* Meta Top Bar */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-4 text-xs font-mono text-white/50">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Article Title & Summary */}
                <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors">
                  {article.title}
                </h3>
                <p className="text-white/70 font-normal leading-relaxed text-sm mb-6 line-clamp-3">
                  {article.summary}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="flex items-center gap-2 text-xs font-semibold text-white/80 group-hover:text-white pt-4 border-t border-white/5">
                <span>Read Full Article</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
