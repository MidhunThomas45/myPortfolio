import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Code2, Layers, Lock, Sparkles, MapPin } from 'lucide-react';
import { projects, personalInfo } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} | ${personalInfo.name}`,
    description: project.shortDescription || project.description,
    openGraph: {
      title: `${project.title} - AI/ML Project by ${personalInfo.name}`,
      description: project.description,
      images: [
        {
          url: '/thomas.jpeg',
          alt: project.title,
        },
      ],
    },
  };
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const isPrivate = project.github === 'Private';

  return (
    <div className="min-h-screen bg-[#090b10] text-[#f3f4f6] flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-white/10 text-xs font-semibold uppercase tracking-wider text-gold-400 hover:text-gold-300 hover:border-gold-500/40 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Main Glass Container */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl">
          
          {/* Header */}
          <div className="space-y-4 border-b border-white/10 pb-8">
            <span className="px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-xs font-semibold uppercase tracking-wider text-gold-400">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-secondaryText font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-gold-400" />
              <span>Key Architectural & System Features</span>
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-surface/80 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-200 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Matrix */}
          <div className="space-y-4 pt-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
              <Code2 className="w-4 h-4 text-gold-400" />
              <span>Technologies & Tools Stack</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-surface border border-white/10 text-xs font-medium text-silver-gradient"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {isPrivate ? (
                <span className="px-5 py-3 rounded-xl bg-surface border border-white/10 text-xs font-medium text-amber-400 flex items-center gap-2">
                  <Lock className="w-4 h-4" /> Source Code Private
                </span>
              ) : (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-surface border border-white/10 text-xs font-semibold uppercase tracking-wider text-white hover:text-gold-400 hover:border-gold-500/40 transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4" /> View GitHub Repository
                </a>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-black font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-gold-500/30 transition-all flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" /> Launch Live Demo
                </a>
              )}
            </div>

            <Link
              href="/#contact"
              className="text-xs text-secondaryText hover:text-gold-400 transition-colors"
            >
              Have a question about this architecture? Contact Midhun
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
