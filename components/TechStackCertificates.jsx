'use client';

import React, { useState } from 'react';
import {
  Sparkles, Award, Cpu, CheckCircle2, ShieldCheck, Terminal,
  Code2, Brain, Eye, Database, Layers, Cloud, Settings,
  Server, Globe, BarChart3, Mic2, Wrench, MessageSquare,
  FunctionSquare, ExternalLink, Clock,
  GraduationCap, BookOpen, MapPin, Briefcase
} from 'lucide-react';
import { techStackCategories, certificates } from '@/lib/data';

const categoryIconMap = {
  'code': Code2,
  'cpu': Cpu,
  'brain': Brain,
  'sparkles': Sparkles,
  'message': MessageSquare,
  'eye': Eye,
  'database': Database,
  'layers': Layers,
  'cloud': Cloud,
  'settings': Settings,
  'server': Server,
  'globe': Globe,
  'function': FunctionSquare,
  'audio': Mic2,
  'tool': Wrench,
};

const categoryColorMap = {
  'Programming Languages': 'from-blue-500/20 to-blue-600/10 border-blue-500/20',
  'Machine Learning Frameworks': 'from-green-500/20 to-green-600/10 border-green-500/20',
  'Deep Learning Frameworks': 'from-purple-500/20 to-purple-600/10 border-purple-500/20',
  'Generative AI & LLMs': 'from-amber-500/20 to-amber-600/10 border-amber-500/30',
  'Natural Language Processing': 'from-sky-500/20 to-sky-600/10 border-sky-500/20',
  'Computer Vision': 'from-pink-500/20 to-pink-600/10 border-pink-500/20',
  'Data Engineering & Analytics': 'from-orange-500/20 to-orange-600/10 border-orange-500/20',
  'Vector Databases & Search': 'from-violet-500/20 to-violet-600/10 border-violet-500/20',
  'Cloud & AI Services (Azure)': 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/20',
  'MLOps & Deployment': 'from-red-500/20 to-red-600/10 border-red-500/20',
  'Databases & Storage': 'from-teal-500/20 to-teal-600/10 border-teal-500/20',
  'Web & API Development': 'from-indigo-500/20 to-indigo-600/10 border-indigo-500/20',
  'Mathematics & Statistics': 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/20',
  'Audio & Signal Processing': 'from-fuchsia-500/20 to-fuchsia-600/10 border-fuchsia-500/20',
  'Tools & Productivity': 'from-slate-500/20 to-slate-600/10 border-slate-500/20',
};

const categoryTextColorMap = {
  'Programming Languages': 'text-blue-400',
  'Machine Learning Frameworks': 'text-green-400',
  'Deep Learning Frameworks': 'text-purple-400',
  'Generative AI & LLMs': 'text-amber-400',
  'Natural Language Processing': 'text-sky-400',
  'Computer Vision': 'text-pink-400',
  'Data Engineering & Analytics': 'text-orange-400',
  'Vector Databases & Search': 'text-violet-400',
  'Cloud & AI Services (Azure)': 'text-cyan-400',
  'MLOps & Deployment': 'text-red-400',
  'Databases & Storage': 'text-teal-400',
  'Web & API Development': 'text-indigo-400',
  'Mathematics & Statistics': 'text-yellow-400',
  'Audio & Signal Processing': 'text-fuchsia-400',
  'Tools & Productivity': 'text-slate-400',
};

// ── Shared View Button ────────────────────────────────────────────────────────
function ViewButton({ link, activeClass }) {
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all hover:-translate-y-0.5 ${activeClass}`}
      >
        <ExternalLink className="w-3.5 h-3.5" />
        View Certificate
      </a>
    );
  }
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-white/10 text-secondaryText text-xs uppercase tracking-wider cursor-not-allowed">
      <Clock className="w-3.5 h-3.5" />
      Link Coming Soon
    </span>
  );
}

export default function TechStackCertificates() {
  const [activeTab, setActiveTab] = useState('skills');

  const totalSkills = techStackCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  const certs       = certificates.filter(c => c.type === 'certification');
  const experience  = certificates.filter(c => c.type === 'experience');
  const education   = certificates.filter(c => c.type === 'education');

  return (
    <section id="skills" className="py-24 bg-[#0d0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ───────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-gold-500/20 text-xs font-semibold uppercase tracking-wider text-gold-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Expertise & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            Technical Stack & <span className="text-gold-gradient">Credentials</span>
          </h2>
          <p className="text-base text-secondaryText font-light">
            A comprehensive overview of skills, tools, certifications, and education.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 pt-2">
            <div className="text-center">
              <p className="text-2xl font-extrabold font-heading text-gold-gradient">{techStackCategories.length}</p>
              <p className="text-xs text-secondaryText uppercase tracking-wider">Skill Domains</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-extrabold font-heading text-gold-gradient">{totalSkills}+</p>
              <p className="text-xs text-secondaryText uppercase tracking-wider">Total Skills</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-extrabold font-heading text-gold-gradient">{certs.length + experience.length}</p>
              <p className="text-xs text-secondaryText uppercase tracking-wider">Certificates</p>
            </div>
          </div>
        </div>

        {/* ── Tab Selector ─────────────────────────────────────────── */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-surface border border-white/10">
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'skills'
                  ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-black shadow-lg'
                  : 'text-secondaryText hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Skill Matrix</span>
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'certificates'
                  ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-black shadow-lg'
                  : 'text-secondaryText hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Certificates</span>
            </button>
          </div>
        </div>

        {/* ── Skills Grid ──────────────────────────────────────────── */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {techStackCategories.map((cat, idx) => {
              const IconComponent = categoryIconMap[cat.icon] || Terminal;
              const cardColor = categoryColorMap[cat.name] || 'from-gray-500/20 to-gray-600/10 border-gray-500/20';
              const textColor = categoryTextColorMap[cat.name] || 'text-gray-400';
              return (
                <div
                  key={idx}
                  className={`relative rounded-2xl p-6 bg-gradient-to-br ${cardColor} border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl bg-black/30 border border-white/10 ${textColor}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold font-heading text-white">{cat.name}</h3>
                      <p className={`text-[11px] font-medium ${textColor}`}>{cat.items.length} skills</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/30 border border-white/10 text-xs font-medium text-gray-200 hover:text-white hover:border-white/20 transition-all cursor-default"
                      >
                        <CheckCircle2 className={`w-3 h-3 flex-shrink-0 ${textColor}`} />
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Certificates Tab ─────────────────────────────────────── */}
        {activeTab === 'certificates' && (
          <div className="space-y-14 max-w-6xl mx-auto">

            {/* 1 · Professional Certifications (gold) */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-white">Professional Certifications</h3>
                  <p className="text-xs text-secondaryText">Industry-recognised credentials</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {certs.map((cert, idx) => (
                  <div key={idx} className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between space-y-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-full blur-2xl pointer-events-none" />
                    <div className="space-y-3 relative z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-[10px] font-bold uppercase tracking-widest text-gold-400">
                        <ShieldCheck className="w-3 h-3" />{cert.badge}
                      </span>
                      <h4 className="text-base font-bold font-heading text-white leading-snug">{cert.title}</h4>
                      <div>
                        <p className="text-sm font-semibold text-gold-400">{cert.issuer}</p>
                        <p className="text-xs text-secondaryText">{cert.date}</p>
                      </div>
                      <p className="text-xs text-secondaryText leading-relaxed font-light">{cert.description}</p>
                    </div>
                    <div className="relative z-10 pt-2 border-t border-white/10">
                      <ViewButton link={cert.link} activeClass="bg-gradient-to-r from-gold-400 to-gold-600 text-black shadow-md" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2 · Work Experience (emerald) */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-white">Work Experience</h3>
                  <p className="text-xs text-secondaryText">Official experience certificates from employers</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {experience.map((cert, idx) => (
                  <div key={idx} className="relative rounded-2xl p-6 flex flex-col justify-between space-y-5 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/15 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
                    <div className="space-y-3 relative z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        <Briefcase className="w-3 h-3" />{cert.badge}
                      </span>
                      <h4 className="text-base font-bold font-heading text-white leading-snug">{cert.title}</h4>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-emerald-300">{cert.issuer}</p>
                        {cert.location && (
                          <p className="text-xs text-secondaryText flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-emerald-400 flex-shrink-0" />{cert.location}
                          </p>
                        )}
                        <div className="flex items-center gap-3">
                          <p className="text-xs text-secondaryText">{cert.date}</p>
                          {cert.duration && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold text-emerald-400">
                              <Clock className="w-2.5 h-2.5" />{cert.duration}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-secondaryText leading-relaxed font-light">{cert.description}</p>
                    </div>
                    <div className="relative z-10 pt-2 border-t border-white/10">
                      <ViewButton link={cert.link} activeClass="bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/30" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 · Education (indigo) */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-white">Education</h3>
                  <p className="text-xs text-secondaryText">Academic qualifications & professional training</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {education.map((cert, idx) => (
                  <div key={idx} className="relative rounded-2xl p-6 flex flex-col justify-between space-y-5 bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 border border-indigo-500/15 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="absolute top-0 right-0 w-28 h-28 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
                    <div className="space-y-3 relative z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold uppercase tracking-widest text-indigo-400">
                        <BookOpen className="w-3 h-3" />{cert.badge}
                      </span>
                      <h4 className="text-base font-bold font-heading text-white leading-snug">{cert.title}</h4>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-indigo-300">{cert.issuer}</p>
                        {cert.location && (
                          <p className="text-xs text-secondaryText flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-indigo-400 flex-shrink-0" />{cert.location}
                          </p>
                        )}
                        <p className="text-xs text-secondaryText">{cert.date}</p>
                      </div>
                      {cert.description && (
                        <p className="text-xs text-secondaryText leading-relaxed font-light line-clamp-3">{cert.description}</p>
                      )}
                      {cert.grade && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                          <BarChart3 className="w-3.5 h-3.5 text-indigo-400" />
                          <span className="text-xs font-bold text-indigo-300">Score: {cert.grade}</span>
                        </div>
                      )}
                    </div>
                    <div className="relative z-10 pt-2 border-t border-white/10">
                      <ViewButton link={cert.link} activeClass="bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/30" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
