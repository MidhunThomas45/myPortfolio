'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Github, ArrowRight, Sparkles, Layers, Lock } from 'lucide-react';

export default function ProjectCard({ project, onQuickView }) {
  const isPrivate = project.github === 'Private';

  return (
    <div className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between h-full group relative">
      
      {/* Top Bar: Category badge & Actions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-[11px] font-semibold uppercase tracking-wider text-gold-400">
            {project.category}
          </span>

          <div className="flex items-center gap-2">
            {isPrivate ? (
              <span className="p-2 rounded-lg bg-surface border border-white/10 text-secondaryText text-xs flex items-center gap-1" title="Source Code Private">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Private</span>
              </span>
            ) : (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface border border-white/10 text-secondaryText hover:text-gold-400 hover:border-gold-500/30 transition-all"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface border border-white/10 text-secondaryText hover:text-gold-400 hover:border-gold-500/30 transition-all"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <Link href={`/project/${project.id}`} className="block group-hover:text-gold-400 transition-colors">
          <h3 className="text-xl font-bold font-heading text-white line-clamp-2">
            {project.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-secondaryText line-clamp-3 leading-relaxed font-light">
          {project.shortDescription || project.description}
        </p>
      </div>

      {/* Bottom Area: Tech Stack & View Details button */}
      <div className="pt-6 mt-6 border-t border-white/10 space-y-4">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-surface text-[11px] font-medium text-gray-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 rounded-md bg-surface text-[10px] text-gold-400 font-medium border border-gold-500/20">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        {/* Navigation Button */}
        <div className="flex items-center justify-between pt-1">
          <Link
            href={`/project/${project.id}`}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors group/btn"
          >
            <span>View System Details</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>

          {onQuickView && (
            <button
              onClick={() => onQuickView(project)}
              className="text-xs text-secondaryText hover:text-white transition-colors"
            >
              Quick Peek
            </button>
          )}
        </div>

      </div>

    </div>
  );
}
