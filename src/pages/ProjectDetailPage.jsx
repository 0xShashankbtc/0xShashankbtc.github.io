import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle, Calendar, ShieldCheck, Zap } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import ContactCTA from '../components/ContactCTA';
import FAQSection from '../components/FAQSection';

export default function ProjectDetailPage({ onOpenContact, onOpenBooking }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = PROJECTS.find((p) => p.slug === id || p.id === id) || PROJECTS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const otherProjects = PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="pt-28 pb-20">
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white/70 hover:text-white transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Project Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-white/40">{project.date}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-white/80 font-light leading-relaxed mb-8">
            {project.subtitle}
          </p>

          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95"
          >
            <span>visit website</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Hero Mockup Image Frame */}
        <div className="nyro-card p-4 md:p-6 mb-16 border border-white/15 overflow-hidden">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-auto max-h-[650px] object-cover rounded-2xl"
          />
        </div>

        {/* Project Overview Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 nyro-card border border-white/10 mb-20">
          <div>
            <div className="text-xs font-mono uppercase text-white/40 mb-1">Industry</div>
            <div className="text-sm font-semibold text-white">{project.industry}</div>
          </div>
          <div>
            <div className="text-xs font-mono uppercase text-white/40 mb-1">Scope of work</div>
            <div className="text-sm font-semibold text-white">{project.scope}</div>
          </div>
          <div>
            <div className="text-xs font-mono uppercase text-white/40 mb-1">Duration</div>
            <div className="text-sm font-semibold text-white">{project.duration}</div>
          </div>
          <div>
            <div className="text-xs font-mono uppercase text-white/40 mb-1">Launch Date</div>
            <div className="text-sm font-semibold text-white">{project.date}</div>
          </div>
        </div>

        {/* Challenge, Goal & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="nyro-card p-8 border border-white/10">
            <h3 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Challenge
            </h3>
            <p className="text-sm text-white/70 font-light leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="nyro-card p-8 border border-white/10">
            <h3 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Goal
            </h3>
            <p className="text-sm text-white/70 font-light leading-relaxed">
              {project.goal}
            </p>
          </div>

          <div className="nyro-card p-8 border border-white/10">
            <h3 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Solution
            </h3>
            <p className="text-sm text-white/70 font-light leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Highlights */}
        {project.highlights && (
          <div className="nyro-card p-8 md:p-12 border border-white/10 mb-24">
            <h3 className="text-2xl font-heading font-bold text-white mb-6">
              Key Engineering & Design Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects Recommendation */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-heading font-bold text-white">Other Projects</h3>
            <Link to="/projects" className="text-xs font-mono text-purple-300 hover:underline">
              see all works →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherProjects.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                onClick={() => navigate(`/projects/${p.slug}`)}
              />
            ))}
          </div>
        </div>

      </div>

      <FAQSection />
      <ContactCTA onOpenContact={onOpenContact} onOpenBooking={onOpenBooking} />
    </div>
  );
}
