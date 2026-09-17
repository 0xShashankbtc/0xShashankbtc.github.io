import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { ARTICLES } from '../data/portfolioData';

export default function ArticlesSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative z-10 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono uppercase tracking-wider text-sky-600 mb-4 font-semibold shadow-xs">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Engineering Research & Notes</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              Technical Deep Dives & Architectural Insights
            </h2>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-sm font-semibold text-slate-900 transition-all duration-300 self-start md:self-auto shadow-xs hover:shadow-md"
          >
            <span>See All Articles</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => navigate(`/blog/${article.slug}`)}
              className="shashank-card p-8 flex flex-col justify-between bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-all duration-300 rounded-3xl shadow-xs cursor-pointer group"
            >
              <div>
                {/* Meta Top Bar */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-sky-700 bg-sky-50 border border-sky-200">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Article Title & Summary */}
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-slate-600 font-normal leading-relaxed text-xs sm:text-sm mb-6 line-clamp-3">
                  {article.summary}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 group-hover:text-sky-600 pt-4 border-t border-slate-200/80">
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
