import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profileImageUrl } from '../lib/cloudinary';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.3, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen w-full relative flex flex-col items-center justify-between overflow-hidden"
      style={{ overflowX: 'clip', background: '#0C0C0C' }}
    >
      {/* Futuristic Cyberpunk Background */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/hero-bg.webp" type="image/webp" />
          <img
            src="/hero-bg.jpg"
            alt="Futuristic cyber background"
            className="w-full h-full object-cover object-center pointer-events-none select-none"
          />
        </picture>
        {/* Subtle bottom vignette blending smoothly into the next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#0C0C0C] pointer-events-none" />
      </div>

      {/* Sleek Top Navigation */}
      <header className="w-full relative z-20 flex justify-between items-center px-6 sm:px-10 py-6">
        <a
          href="#hero"
          className="text-xs uppercase tracking-widest text-[#E9D5FF]/70 font-mono hover:text-white transition-colors"
        >
          SHIVANGI.DEV
        </a>
        <nav className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#CBD5E1]">
          <a href="#about" className="hover:text-[#C084FC] transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-[#C084FC] transition-colors">
            Projects
          </a>
          <a href="#services" className="hover:text-[#C084FC] transition-colors">
            Services
          </a>
          <a href="#playground" className="hover:text-[#C084FC] transition-colors">
            Playground
          </a>
          <a
            href="https://www.instagram.com/kahaniverse329/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-full border border-[#C084FC]/50 text-[#C084FC] hover:bg-[#C084FC]/10 hover:text-white transition-all text-xs"
          >
            Instagram
          </a>
        </nav>
      </header>

      {/* Centered Hero Content */}
      <motion.div
        className="flex-1 w-full max-w-5xl mx-auto flex flex-col items-center justify-center relative z-10 px-4 py-4"
        style={{ opacity, scale }}
      >
        {/* Hero Heading: "I am Shivangi, and this is my portfolio." */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-4 sm:mb-6"
        >
          <h1 className="font-black uppercase tracking-tight leading-tight">
            <span className="block text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              I am Shivangi,
            </span>
            <span className="block bg-gradient-to-r from-[#F3E8FF] via-[#C084FC] to-[#A855F7] bg-clip-text text-transparent text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-1 drop-shadow-[0_2px_16px_rgba(168,85,247,0.5)]">
              and this is my portfolio.
            </span>
          </h1>
        </motion.div>

        {/* Shivangi's Centered Isolated Photo with Cyber Ambient Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Subtle violet ambient backlight aura */}
          <div className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] rounded-full bg-[#A855F7]/25 blur-3xl pointer-events-none" />

          {/* Centered Portrait */}
          <img
            src={profileImageUrl}
            alt="Shivangi Tripathi, Software Developer"
            className="relative w-[210px] sm:w-[270px] md:w-[320px] lg:w-[350px] max-h-[52vh] object-contain pointer-events-none select-none drop-shadow-[0_12px_40px_rgba(168,85,247,0.45)]"
            draggable={false}
          />
        </motion.div>
      </motion.div>

      {/* Spacer to balance bottom */}
      <div className="h-6 relative z-10" />
    </section>
  );
};

export default HeroSection;
