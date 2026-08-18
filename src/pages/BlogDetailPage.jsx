import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock, Share2 } from 'lucide-react';
import { ARTICLES } from '../data/portfolioData';
import FAQSection from '../components/FAQSection';
import ContactCTA from '../components/ContactCTA';

export default function BlogDetailPage({ onOpenContact, onOpenBooking }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = ARTICLES.find((a) => a.slug === id || a.id === id) || ARTICLES[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const otherArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="pt-28 pb-20">
      
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white/70 hover:text-white transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Article Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {article.category}
            </span>
            <span className="text-xs font-mono text-white/40">{article.date}</span>
            <span className="text-xs font-mono text-white/40 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight mb-8">
            {article.title}
          </h1>

          {/* Author Box */}
          <div className="flex items-center justify-between p-4 nyro-card border border-white/10 rounded-2xl">
            <div className="flex items-center gap-4">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover border border-white/20"
              />
              <div>
                <div className="font-heading font-bold text-white text-sm">{article.author.name}</div>
                <div className="text-xs text-white/50">{article.author.role}</div>
              </div>
            </div>
            
            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Article link copied to clipboard!');
                }
              }}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-colors cursor-pointer"
              title="Share link"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="nyro-card p-4 md:p-6 mb-12 border border-white/15 overflow-hidden">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl"
          />
        </div>

        {/* Summary Intro Callout */}
        <div className="p-6 md:p-8 nyro-card border border-cyan-500/20 bg-cyan-500/5 mb-12 rounded-2xl">
          <p className="text-lg md:text-xl text-cyan-100 font-light italic leading-relaxed">
            "{article.summary}"
          </p>
        </div>

        {/* Article Body Sections */}
        <div className="space-y-12 mb-20 text-white/80 font-normal leading-relaxed text-base sm:text-lg">
          {article.sections.map((sec, idx) => (
            <div key={idx} className="space-y-4 pt-6 border-t border-white/10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white flex items-center gap-3">
                <span className="text-sm font-mono text-purple-400">0{idx + 1}.</span>
                {sec.heading}
              </h2>
              {sec.subheading && (
                <p className="text-base text-purple-200/90 font-medium">
                  {sec.subheading}
                </p>
              )}
              <p className="text-white/70 font-light leading-relaxed">
                {sec.content}
              </p>
            </div>
          ))}
        </div>

        {/* Other Articles Recommendation */}
        <div className="pt-12 border-t border-white/10 mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-heading font-bold text-white">Other Articles</h3>
            <Link to="/blog" className="text-xs font-mono text-cyan-300 hover:underline">
              see all articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherArticles.map((a) => (
              <div
                key={a.id}
                onClick={() => navigate(`/blog/${a.slug}`)}
                className="nyro-card p-6 border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase text-cyan-400 mb-2 block">{a.category}</span>
                  <h4 className="font-heading font-bold text-white text-lg group-hover:text-cyan-200 transition-colors line-clamp-2">
                    {a.title}
                  </h4>
                </div>
                <div className="text-xs font-mono text-white/40 mt-4">{a.date}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <FAQSection />
      <ContactCTA onOpenContact={onOpenContact} onOpenBooking={onOpenBooking} />
    </div>
  );
}
