'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Sparkles, Brain } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#090b10]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 p-[1px] shadow-lg shadow-gold-500/10 group-hover:shadow-gold-500/30 transition-all">
            <div className="w-full h-full bg-[#090b10] rounded-[11px] flex items-center justify-center">
              <Brain className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg text-silver-gradient group-hover:text-gold-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] tracking-wider uppercase text-gold-400/90 font-medium">
              AI / ML Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-surface/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm text-secondaryText hover:text-white hover:bg-white/5 rounded-full transition-all duration-200 font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-md shadow-gold-500/20 hover:shadow-gold-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Resume / CV</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-surface border border-white/10 text-secondaryText hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090b10]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base text-secondaryText hover:text-gold-400 hover:bg-white/5 rounded-xl font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-black font-semibold text-sm uppercase tracking-wider"
            >
              <span>Download Resume</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
