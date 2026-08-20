import React, { useState, useEffect, useCallback, memo } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Instagram,
  Sparkles,
  Database,
  Filter,
  Brain,
  LineChart,
  Rocket,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../assets/ds_images/img1.png";
import img2 from "../assets/ds_images/img2.png";
import img3 from "../assets/ds_images/img3.png";

// Memoized Components
const StatusBadge = memo(() => (
  <div
    className="inline-block animate-float lg:mx-0"
  >
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#c9a227] to-[#f2e8d8] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-card">
        <span className="bg-gradient-to-r from-[#c9a227] to-[#f2e8d8] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
          <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />
          Ready to Innovate
        </span>
      </div>
    </div>
  </div>
));

const MainTitle = memo(() => (
  <div className="space-y-2">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#c9a227] to-[#f2e8d8] blur-2xl opacity-20"></span>
        <span className="relative text-primaryText">
          Architecting
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#c9a227] to-[#f2e8d8] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[#c9a227] to-[#f2e8d8] bg-clip-text text-transparent">
          Intelligence
        </span>
      </span>
    </h1>
  </div>
));

const TechStack = memo(({ tech }) => (
  <div className="px-4 py-2 hidden sm:block rounded-full bg-card backdrop-blur-sm border border-card text-sm text-secondaryText hover:bg-cardHover transition-colors">
    {tech}
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-11 bg-background backdrop-blur-xl rounded-lg border border-card leading-none overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          <Icon
            className={`w-4 h-4 text-primaryText ${
              text === "Contact"
                ? "group-hover:translate-x-1"
                : "group-hover:rotate-45"
            } transform transition-all duration-300 z-10`}
          />
        </span>
      </div>
    </button>
  </a>
));

const SocialLink = memo(({ icon: Icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button className="group relative p-3">
      <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#f2e8d8] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-card group-hover:border-cardHover transition-all duration-300">
        <Icon className="w-5 h-5 text-secondaryText group-hover:text-primaryText transition-colors" />
      </div>
    </button>
  </a>
));

// Constants
const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = ["Data Scientist", "AI-ML Engineer"];
const TECH_STACK = ["Python", "Azure", "Machine Learning", "Deep Learning", "Agentic AI", "NLP", "SQL", "Cloud", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "MLOps", "Generative AI"];
const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/MidhunThomas45" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/midhun997/" },
  { icon: Instagram, link: "https://www.instagram.com/midhunkanjirakadan?utm_source=qr&igsh=cGV0Nmhyb2k3ajRh" },
];

const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // Image Cycling State
  const [currentImage, setCurrentImage] = useState(0);
  const images = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Optimize AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
        offset: 10,
      });
    };

    initAOS();
    window.addEventListener("resize", initAOS);
    return () => window.removeEventListener("resize", initAOS);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  // Optimize typing effect
  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText((prev) => prev + WORDS[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);


  return (
    <div className="min-h-screen bg-background overflow-hidden" id="Home">
      <div
        className={`relative z-10 transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-[5%] sm:px-6 lg:px-[0%] min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-center h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0"
            >
              <div className="space-y-4 sm:space-y-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                  <StatusBadge />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                  <MainTitle />
                </motion.div>

                {/* Typing Effect */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
                  className="h-8 flex items-center"
                >
                  <span className="text-xl md:text-2xl text-secondaryText font-light">
                    {text}
                  </span>
                  <span className="w-[3px] h-6 bg-gradient-to-t from-[#c9a227] to-[#f2e8d8] ml-1 animate-blink"></span>
                </motion.div>

                {/* Description */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-base md:text-lg text-secondaryText max-w-xl leading-relaxed font-light"
                >
                  I design intelligent systems, leveraging data and machine learning to build scalable AI solutions.
                </motion.p>

                {/* Tech Stack */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-wrap gap-3 justify-start"
                >
                  {TECH_STACK.map((tech, index) => (
                    <TechStack key={index} tech={tech} />
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }}
                  className="flex flex-row gap-3 w-full justify-start"
                >
                  <CTAButton href="#Portofolio" text="Projects" icon={ExternalLink} />
                  <CTAButton href="#Contact" text="Contact" icon={Mail} />
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}
                  className="hidden sm:flex gap-4 justify-start"
                >
                  {SOCIAL_LINKS.map((social, index) => (
                    <SocialLink key={index} {...social} />
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Optimized Lottie Animation */}
            <div
              className="w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <div className="relative w-full h-full flex justify-center items-center">
                {/* Rotating Orbital Track */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full border border-cardHover border-dashed opacity-50"
                />
              
                {/* Orbital Elements (Icons) */}
                {[Database, Brain, LineChart, Filter].map((Icon, index) => {
                   const angle = (index * 90) * (Math.PI / 180);
                   const radius = typeof window !== 'undefined' && window.innerWidth < 640 ? 150 : 200;
                   const x = Math.cos(angle) * radius;
                   const y = Math.sin(angle) * radius;
                   return (
                     <motion.div
                       key={index}
                       className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-card backdrop-blur-xl border border-cardHover flex items-center justify-center shadow-[0_0_15px_rgba(201,162,39,0.2)] z-20"
                       initial={{ x: 0, y: 0 }}
                       animate={{ 
                         x: [0, x, x],
                         y: [0, y, y],
                         rotate: [0, -360]
                       }}
                       transition={{ 
                         x: { duration: 1.5, ease: "easeOut" },
                         y: { duration: 1.5, ease: "easeOut" },
                         rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                       }}
                     >
                       <Icon className="w-6 h-6 text-[#c9a227]" />
                     </motion.div>
                   );
                })}
              
                {/* Central Image */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-[#c9a227]/30 shadow-[0_0_40px_rgba(201,162,39,0.3)] z-10 flex items-center justify-center bg-card">
                  <img
                    key={currentImage}
                    src={images[currentImage]}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Data Science Visualization"
                  />
                </div>
                
                {/* Floating Graph Element */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-4 sm:-right-8 bottom-1/4 w-32 h-24 bg-card backdrop-blur-xl border border-cardHover rounded-xl p-3 shadow-xl z-20 flex items-end gap-1"
                >
                  {[40, 70, 45, 90, 65, 85].map((h, i) => (
                    <motion.div 
                      key={i} 
                      className="w-full bg-gradient-to-t from-[#c9a227] to-[#f2e8d8] rounded-t-sm" 
                      initial={{ height: 0 }} 
                      animate={{ height: `${h}%` }} 
                      transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }} 
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
