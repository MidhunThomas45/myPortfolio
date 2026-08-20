'use client';

import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, Code2, ArrowUpRight } from 'lucide-react';
import { experiences } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0d0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-gold-500/20 text-xs font-semibold uppercase tracking-wider text-gold-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            Professional <span className="text-gold-gradient">Experience</span>
          </h2>
          <p className="text-base sm:text-lg text-secondaryText max-w-2xl mx-auto font-light">
            Engineering scalable AI platforms and enterprise data analytics across global tech organizations.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-10 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Col: Role, Company & Meta */}
                <div className="lg:col-span-4 space-y-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 p-[1px] shadow-lg shadow-gold-500/10">
                      <div className="w-full h-full bg-[#090b10] rounded-[15px] flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-gold-400" />
                      </div>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold">{exp.type}</span>
                      <h3 className="text-xl font-bold font-heading text-white">{exp.role}</h3>
                      <p className="text-sm font-medium text-silver-gradient">{exp.company}</p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 text-xs text-secondaryText">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gold-400" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Right Col: Details & Tools */}
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-base text-secondaryText leading-relaxed font-light">
                    {exp.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                      <Code2 className="w-4 h-4 text-gold-400" />
                      <span>Key Tools & Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg bg-surface border border-white/10 text-xs text-gray-300 hover:text-gold-400 hover:border-gold-500/30 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
