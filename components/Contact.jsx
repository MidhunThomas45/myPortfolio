'use client';

import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send, Sparkles, Github, Linkedin, Instagram, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    
    try {
      await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-gold-500/20 text-xs font-semibold uppercase tracking-wider text-gold-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            Let's Build Something <span className="text-gold-gradient">Intelligent</span>
          </h2>
          <p className="text-base sm:text-lg text-secondaryText font-light">
            Have an upcoming AI project, engineering position, or consultation query? Send me a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl font-bold font-heading text-white">Contact Information</h3>
              <p className="text-sm text-secondaryText font-light leading-relaxed">
                Feel free to reach out directly via email or connect with me on social platforms.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-surface/80 border border-white/10 hover:border-gold-500/40 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-gold-500/10 text-gold-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-secondaryText uppercase tracking-wider">Email Address</p>
                    <p className="text-sm font-semibold text-white group-hover:text-gold-400 transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface/80 border border-white/10">
                  <div className="p-3 rounded-xl bg-gold-500/10 text-gold-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-secondaryText uppercase tracking-wider">Location</p>
                    <p className="text-sm font-semibold text-white">
                      Global IT Park, Japan & Kerala, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-secondaryText uppercase tracking-wider mb-3">Connect Online</p>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-surface border border-white/10 text-secondaryText hover:text-gold-400 hover:border-gold-500/40 transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-surface border border-white/10 text-secondaryText hover:text-gold-400 hover:border-gold-500/40 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-surface border border-white/10 text-secondaryText hover:text-gold-400 hover:border-gold-500/40 transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gold-500/20 text-gold-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">Message Delivered!</h3>
                  <p className="text-sm text-secondaryText max-w-md mx-auto">
                    Thank you for reaching out. I have received your email and will respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-surface border border-white/10 text-xs font-semibold text-gold-400 uppercase tracking-wider hover:bg-white/5 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  action="https://formsubmit.co/midhunthomas45@gmail.com"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-secondaryText">Your Name</label>
                    <div className="relative">
                      <User className="w-5 h-5 text-secondaryText absolute left-4 top-3.5" />
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-surface border border-white/10 text-white placeholder-secondaryText/50 focus:outline-none focus:border-gold-500/60 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-secondaryText">Your Email</label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-secondaryText absolute left-4 top-3.5" />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-surface border border-white/10 text-white placeholder-secondaryText/50 focus:outline-none focus:border-gold-500/60 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-secondaryText">Your Message</label>
                    <div className="relative">
                      <MessageSquare className="w-5 h-5 text-secondaryText absolute left-4 top-3.5" />
                      <textarea
                        name="message"
                        required
                        rows="4"
                        placeholder="Discuss project opportunity or consultation..."
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-surface border border-white/10 text-white placeholder-secondaryText/50 focus:outline-none focus:border-gold-500/60 transition-all text-sm resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>{loading ? "Transmitting..." : "Send Message"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
