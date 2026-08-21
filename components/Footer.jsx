'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Brain } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06070a] border-t border-white/10 py-12 text-secondaryText relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
              <Brain className="w-4 h-4 text-gold-400" />
            </div>
            <span className="text-sm font-semibold text-white font-heading">
              {personalInfo.name} — AI / ML Portfolio
            </span>
          </div>

          {/* Center: Copyright */}
          <p className="text-xs text-secondaryText text-center">
            © {new Date().getFullYear()} {personalInfo.name}.
          </p>

          {/* Right: Scroll to top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-surface border border-white/10 text-secondaryText hover:text-gold-400 hover:border-gold-500/40 transition-all flex items-center justify-center gap-1 text-xs"
            aria-label="Back to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>
      </div>
    </footer>
  );
}
