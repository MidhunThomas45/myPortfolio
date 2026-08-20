'use client';

import React from 'react';
import Link from 'next/link';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight, Code2, Layers, Lock } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const isPrivate = project.github === 'Private';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d0f17] border border-gold-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-surface border border-white/10 text-secondaryText hover:text-white hover:border-gold-500/40 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-3 pr-8">
          <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-xs font-semibold uppercase tracking-wider text-gold-400">
            {project.category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-base text-secondaryText leading-relaxed font-light">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="space-y-3 pt-2">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-gold-400" /> Key Engineering Highlights
          </h4>
          <div className="space-y-2">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-surface/60 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-3 pt-2">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
            <Code2 className="w-4 h-4 text-gold-400" /> Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-surface border border-white/10 text-xs text-silver-gradient">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <Link
            href={`/project/${project.id}`}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-black font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-gold-500/30 transition-all flex items-center gap-2"
          >
            <span>Full Project Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="flex items-center gap-3">
            {isPrivate ? (
              <span className="px-4 py-3 rounded-xl bg-surface border border-white/10 text-xs text-secondaryText flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-amber-400" /> Source Code Private
              </span>
            ) : (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-surface border border-white/10 text-xs font-medium text-white hover:text-gold-400 hover:border-gold-500/30 transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-surface border border-white/10 text-xs font-medium text-white hover:text-gold-400 hover:border-gold-500/30 transition-all flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
