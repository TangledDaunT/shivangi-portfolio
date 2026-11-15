import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profileImageUrl } from '../lib/cloudinary';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.35, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen w-full relative flex flex-col items-center justify-between overflow-hidden"
      style={{ overflowX: 'clip', background: '#0C0C0C' }}
    >
      {/* Futuristic Ambient Background */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/hero-bg.webp" type="image/webp" />
          <img
            src="/hero-bg.jpg"
            alt="Futuristic cyber background"
            className="w-full h-full object-cover object-center pointer-events-none select-none opacity-85"
          />
        </picture>
        {/* Soft gradient blend into page */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-[#0C0C0C] pointer-events-none" />
      </div>

      {/* Top Navigation */}
      <header className="w-full relative z-20 flex justify-between items-center px-6 sm:px-10 py-6">
        <a
          href="#hero"
          className="text-xs uppercase tracking-widest text-[#EBDCF9]/80 font-mono hover:text-[#FFA07A] transition-colors"
        >
          SHIVANGI.DEV
        </a>
        <nav className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#CBD5E1]">
          <a href="#about" className="hover:text-[#BB98E5] transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-[#BB98E5] transition-colors">
            Projects
          </a>
          <a href="#services" className="hover:text-[#BB98E5] transition-colors">
            Services
          </a>
          <a href="#playground" className="hover:text-[#BB98E5] transition-colors">
            Playground
          </a>
          <a
            href="https://www.instagram.com/kahaniverse329/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1 rounded-full border border-[#BB98E5]/50 text-[#BB98E5] hover:border-[#FFA07A] hover:text-[#FFA07A] hover:bg-[#FFA07A]/10 transition-all text-xs"
          >
            Instagram
          </a>
        </nav>
      </header>

      {/* Centered Hero Content */}
      <motion.div
        className="flex-1 w-full max-w-6xl mx-auto flex flex-col items-center justify-center relative z-10 px-4 py-2"
        style={{ opacity, scale }}
      >
        {/* Hero Heading: "I am Shivangi, and this is my portfolio." */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-3 sm:mb-5"
        >
          <h1 className="font-black uppercase tracking-tight leading-tight">
            <span className="block text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              I am Shivangi,
            </span>
            <span className="block bg-gradient-to-r from-[#BB98E5] via-[#E2BEF7] to-[#FFA07A] bg-clip-text text-transparent text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-1 drop-shadow-[0_2px_16px_rgba(187,152,229,0.35)]">
              and this is my portfolio.
            </span>
          </h1>
        </motion.div>

        {/* Shivangi's Centered Isolated Photo — Enlarged and Luminous */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Dreamy soft pastel lavender-violet + warm peach glow */}
          <div
            className="absolute w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] md:w-[560px] md:h-[560px] rounded-full blur-3xl pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(187, 152, 229, 0.28) 0%, rgba(255, 160, 122, 0.14) 55%, transparent 75%)',
            }}
          />

          {/* High-Resolution Centered Portrait */}
          <img
            src={profileImageUrl}
            alt="Shivangi Tripathi, Software Developer"
            className="relative w-[300px] sm:w-[420px] md:w-[500px] lg:w-[560px] max-h-[64vh] sm:max-h-[68vh] md:max-h-[72vh] object-contain pointer-events-none select-none drop-shadow-[0_16px_45px_rgba(187,152,229,0.32)]"
            draggable={false}
          />
        </motion.div>
      </motion.div>

      {/* Bottom spacing */}
      <div className="h-4 relative z-10" />
    </section>
  );
};

export default HeroSection;
