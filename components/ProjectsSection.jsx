'use client';

import React, { useState } from 'react';
import { Sparkles, Code, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { projects } from '@/lib/data';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const categories = ["All Projects", "AI & LLMs", "Computer Vision & ML", "Full-Stack & Data"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "All Projects") return true;
    return p.category === activeCategory;
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-24 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-gold-500/20 text-xs font-semibold uppercase tracking-wider text-gold-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            AI & Software <span className="text-gold-gradient">Architectures</span>
          </h2>
          <p className="text-base sm:text-lg text-secondaryText font-light">
            Explore 14 production systems, Machine Learning models, and enterprise software solutions.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-black shadow-lg shadow-gold-500/20'
                  : 'bg-surface/80 text-secondaryText hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onQuickView={setSelectedProject}
            />
          ))}
        </div>

        {/* Load More / Show Less Toggle Button */}
        {filteredProjects.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3.5 rounded-xl bg-surface hover:bg-white/10 text-gold-400 hover:text-gold-300 font-semibold text-xs uppercase tracking-wider border border-gold-500/30 hover:border-gold-500/60 transition-all inline-flex items-center gap-2 shadow-lg"
            >
              <span>{showAll ? "Show Fewer Projects" : `View All ${filteredProjects.length} Projects`}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}

      </div>

      {/* Quick View Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
