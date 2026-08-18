import React, { useState } from 'react';
import { ARTICLES } from '../data/portfolioData';
import ContactCTA from '../components/ContactCTA';
import FAQSection from '../components/FAQSection';
import { BookOpen, Clock, Search, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BLOG_CATEGORIES = ['All', 'No-Code Design', 'Interaction Design', 'Product Design', 'Design Trends'];

export default function BlogPage({ onOpenContact, onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-cyan-300 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>©2025</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight mb-4">
            Articles & Insights
          </h1>
          <p className="text-lg text-white/70 font-light leading-relaxed">
            From hands-on tips to deep dives into design and strategy, you’ll find content here to learn, grow, and spark inspiration.
          </p>
        </div>

        {/* Search & Filters Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12 border-b border-white/10 pb-6">
          <div className="flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                    : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => navigate(`/blog/${article.slug}`)}
              className="nyro-card p-8 flex flex-col justify-between border border-white/10 hover:border-cyan-500/30 transition-all duration-500 cursor-pointer group"
            >
              <div>
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

                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors">
                  {article.title}
                </h2>
                <p className="text-white/70 font-normal leading-relaxed text-sm mb-6 line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-white/80 group-hover:text-white pt-4 border-t border-white/5">
                <span>Read Full Article</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      <FAQSection />
      <ContactCTA onOpenContact={onOpenContact} onOpenBooking={onOpenBooking} />
    </div>
  );
}
