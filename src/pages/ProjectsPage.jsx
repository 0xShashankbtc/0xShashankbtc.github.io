import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import ProjectDetailModal from '../components/ProjectDetailModal';
import ContactCTA from '../components/ContactCTA';
import FAQSection from '../components/FAQSection';
import { FolderGit2 } from 'lucide-react';

const CATEGORIES = ['All', 'AI', 'Robotics', 'IoT', 'GPU & Systems', 'Hardware', 'Web'];

export default function ProjectsPage({ onOpenContact, onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono uppercase tracking-wider text-cyan-600 mb-4 font-semibold shadow-xs">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Engineering Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Projects & Systems
          </h1>
          <p className="text-lg text-slate-600 font-normal leading-relaxed">
            Autonomous robotics platforms, ESP32 microcontrollers, digital signal processing pipelines, computer vision AI, and Web3 smart contracts.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-slate-200 pb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white font-bold shadow-xs'
                  : 'bg-white hover:bg-slate-200 text-slate-600 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Detail Modal */}
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>

      <FAQSection />
      <ContactCTA onOpenContact={onOpenContact} onOpenBooking={onOpenBooking} />
    </div>
  );
}
