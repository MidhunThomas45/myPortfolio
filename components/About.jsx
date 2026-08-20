'use client';

import React from 'react';
import Image from 'next/image';
import { FileText, Code, Award, Globe, Sparkles, CheckCircle2, MapPin } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function About() {
  const stats = [
    { label: "AI & ML Projects", value: personalInfo.stats.projectsCount, icon: Code, desc: "Production & Research Models" },
    { label: "Certifications", value: personalInfo.stats.certificatesCount, icon: Award, desc: "Professional Validated Skills" },
    { label: "Experience", value: personalInfo.stats.yearsExperience, icon: Globe, desc: "Japan & India Engineering" },
  ];

  return (
    <section id="about" className="py-24 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-gold-500/20 text-xs font-semibold uppercase tracking-wider text-gold-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            Bridging Data Science & <span className="text-gold-gradient">Production Engineering</span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Gold gradient glow frame */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-gold-500/30 via-indigo-500/20 to-gold-400/40 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative rounded-2xl bg-surface border border-white/15 overflow-hidden p-3 shadow-2xl">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-black">
                  <img
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 space-y-1">
                    <p className="text-sm font-bold text-white flex items-center justify-between">
                      <span>{personalInfo.name}</span>
                      <span className="flex items-center text-[11px] font-medium text-gold-400 gap-1">
                        <MapPin className="w-3 h-3" /> {personalInfo.location}
                      </span>
                    </p>
                    <p className="text-xs text-secondaryText">AI-ML Engineer @ Adam Innovations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Values */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-silver-gradient">
                Hi, I'm Midhun Thomas
              </h3>
              <p className="text-base sm:text-lg text-secondaryText leading-relaxed font-light">
                {personalInfo.bio}
              </p>
            </div>

            {/* Feature Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Generative AI & LLM RAG Systems",
                "Computer Vision & Emotion Recognition",
                "Microservice Architectures (FastAPI & Azure)",
                "MLOps, Docker & CI/CD Pipelines",
                "Predictive Analytics & Financial Modeling",
                "Multilingual Voice & Document Intelligence"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-surface/50 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-black font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-gold-500/30 transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4" /> Download Complete CV
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-surface hover:bg-white/10 text-white font-medium text-sm border border-white/15 transition-all flex items-center gap-2"
              >
                <Code className="w-4 h-4 text-gold-400" /> View Project Archive
              </a>
            </div>

          </div>

        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass-card glass-card-hover rounded-2xl p-6 flex items-center justify-between"
              >
                <div className="space-y-1">
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold text-gold-gradient">
                    {stat.value}
                  </span>
                  <p className="text-sm font-semibold text-white uppercase tracking-wider">{stat.label}</p>
                  <p className="text-xs text-secondaryText">{stat.desc}</p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-gold-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
