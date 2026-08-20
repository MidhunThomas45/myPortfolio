'use client';

import React from 'react';
import { ArrowRight, Sparkles, Github, Linkedin, Mail, FileText, Bot, Database, Cpu, Layers } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  const topTech = ["Python", "PyTorch", "FastAPI", "Azure AI", "Gemini LLM", "RAG Pipeline", "Computer Vision", "MLOps"];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-[#090b10]">
      {/* Background Ambient Glows (No Videos) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 border border-gold-500/30 backdrop-blur-md shadow-lg shadow-gold-500/5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-500"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Available for AI Innovations & Engineer Roles
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight leading-[1.1]">
            Architecting <span className="text-gold-gradient">Intelligence</span>
            <br />
            Building <span className="text-silver-gradient">Scalable AI Systems</span>
          </h1>

          {/* Tagline / Subtitle */}
          <p className="text-lg sm:text-xl text-secondaryText max-w-2xl mx-auto leading-relaxed font-light">
            AI/ML Engineer at <strong className="text-white font-medium">Adam Innovations Co., Ltd (Japan)</strong>. 
            Specializing in Generative AI, LLM RAG Pipelines, Computer Vision, and production Machine Learning deployment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-black font-bold text-sm uppercase tracking-wider shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
            >
              <span>Explore 14 Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-surface hover:bg-white/10 text-white font-semibold text-sm uppercase tracking-wider border border-white/15 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-gold-400" />
              <span>Get in Touch</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-surface/50 hover:bg-white/10 text-secondaryText hover:text-white font-medium text-sm border border-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-gold-400" />
              <span>View CV</span>
            </a>
          </div>

          {/* Tech stack pill tags */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-2">
            {topTech.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-surface/80 border border-white/10 text-secondaryText hover:text-gold-400 hover:border-gold-500/40 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Social icons */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface border border-white/10 text-secondaryText hover:text-gold-400 hover:border-gold-500/40 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface border border-white/10 text-secondaryText hover:text-gold-400 hover:border-gold-500/40 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-surface border border-white/10 text-secondaryText hover:text-gold-400 hover:border-gold-500/40 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
