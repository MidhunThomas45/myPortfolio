import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import ProjectsSection from '@/components/ProjectsSection';
import TechStackCertificates from '@/components/TechStackCertificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#090b10] text-[#f3f4f6]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <ProjectsSection />
      <TechStackCertificates />
      <Contact />
      <Footer />
    </main>
  );
}
