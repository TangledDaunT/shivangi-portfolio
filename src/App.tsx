import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import PlaygroundSection from './sections/PlaygroundSection';
import ScrollProgress from './components/ScrollProgress';
import CurvedThread from './components/CurvedThread';
import ShivangiChatbot from './components/ShivangiChatbot';
import { PixelStar, PixelHeart, PixelSparkle } from './components/PixelArt';

const App = () => {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1001] focus:rounded focus:bg-[#BB98E5] focus:px-4 focus:py-2 focus:text-black font-semibold"
      >
        Skip to content
      </a>

      {/* Interactive Curved Thread on the Right side */}
      <CurvedThread />

      {/* Floating Interactive AI Chatbot */}
      <ShivangiChatbot />

      {/* Main Container */}
      <div id="main-content" className="w-full relative selection:bg-[#BB98E5]/30 selection:text-[#1E1B4B]">
        {/* Scroll Progress Bar at the Top */}
        <ScrollProgress />

        {/* 1. Hero Section (Kept intact: cyber cockpit, centered right-side-up enlarged photo) */}
        <HeroSection />

        {/* 2. Transition from Dark Hero into the Whitish Funky Main Canvas */}
        <div
          id="main-canvas"
          className="relative w-full bg-[#FAF9FC] text-[#1E1B4B] overflow-hidden"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 20%, rgba(187, 152, 229, 0.12) 0%, transparent 45%),
              radial-gradient(circle at 90% 40%, rgba(255, 160, 122, 0.12) 0%, transparent 45%),
              radial-gradient(circle at 30% 70%, rgba(110, 231, 183, 0.10) 0%, transparent 45%),
              radial-gradient(circle at 80% 90%, rgba(187, 152, 229, 0.10) 0%, transparent 45%)
            `,
          }}
        >
          {/* Subtle Generative Micro-Grid Pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(187, 152, 229, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(187, 152, 229, 0.08) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />

          {/* Dual Marquee Track */}
          <MarqueeSection />

          {/* About Section */}
          <AboutSection />

          {/* Education & Experience Section */}
          <EducationSection />

          {/* Services Section */}
          <ServicesSection />

          {/* Projects Section (Removed blank-screen project & duplicate expense-tracker, no GitHub links) */}
          <ProjectsSection />

          {/* Playground Section */}
          <PlaygroundSection />

          {/* FAQ Section */}
          <section id="faq" className="max-w-4xl mx-auto px-5 sm:px-8 py-20 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5FF] border border-[#BB98E5]/40 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-3">
                <PixelSparkle size={14} />
                <span>Clear Answers</span>
              </div>
              <h2 className="text-[#0F172A] font-black uppercase text-3xl sm:text-5xl tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              <div className="bg-white/90 border border-[#BB98E5]/25 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-[#1E1B4B] font-bold text-lg mb-2 flex items-center gap-2">
                  <span className="text-[#7C3AED]">✦</span> What is KahaniVerse (@kahaniverse329)?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  KahaniVerse is an autonomous AI-driven storytelling ecosystem and automated video pipeline with over 100K+ views on Instagram. Shivangi crafts original narrative story scripts, while a custom backend pipeline generates AI visual scenes, orchestrates voiceover audio, compiles the videos, and autonomously schedules and publishes them to Instagram.
                </p>
              </div>

              <div className="bg-white/90 border border-[#BB98E5]/25 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-[#1E1B4B] font-bold text-lg mb-2 flex items-center gap-2">
                  <span className="text-[#EA580C]">✦</span> What technologies does Shivangi specialize in?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Her primary expertise centers on frontend engineering and interactive web applications using React, TypeScript, Next.js, Vite, Tailwind CSS, and Framer Motion. She also architects automated Python pipelines, API integrations (Instagram Graph API, AI video/image generators), and responsive full-stack solutions.
                </p>
              </div>

              <div className="bg-white/90 border border-[#BB98E5]/25 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-[#1E1B4B] font-bold text-lg mb-2 flex items-center gap-2">
                  <span className="text-[#059669]">✦</span> How can I get in touch or collaborate with her?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  You can reach out directly via email at{' '}
                  <a
                    href="mailto:shivangitripathi1392@gmail.com"
                    className="font-bold text-[#7C3AED] underline hover:text-[#EA580C] transition-colors"
                  >
                    shivangitripathi1392@gmail.com
                  </a>{' '}
                  or follow her automated storytelling channel on Instagram at{' '}
                  <a
                    href="https://www.instagram.com/kahaniverse329/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#EA580C] underline hover:text-[#7C3AED] transition-colors"
                  >
                    @kahaniverse329
                  </a>.
                </p>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="max-w-5xl mx-auto px-5 sm:px-8 py-20 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5FF] border border-[#BB98E5]/40 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-3">
                <PixelHeart size={14} />
                <span>Kind Words</span>
              </div>
              <h2 className="text-[#0F172A] font-black uppercase text-3xl sm:text-5xl tracking-tight">
                What Collaborators Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white/90 border border-[#BB98E5]/25 rounded-3xl p-7 shadow-sm flex flex-col justify-between">
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  "Shivangi delivered an intuitive, responsive frontend that elevated our web platform. Her eye for motion graphics, layout polish, and attention to detail are top notch."
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <div className="font-bold text-sm text-[#1E1B4B]">Engineering Lead</div>
                  <div className="text-xs text-[#7C3AED] font-semibold">Savvy Technologies</div>
                </div>
              </div>

              <div className="bg-white/90 border border-[#BB98E5]/25 rounded-3xl p-7 shadow-sm flex flex-col justify-between">
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  "The KahaniVerse automation pipeline works seamlessly. Crossing 100K+ organic views with automated video synthesis and retention optimization is an awesome achievement."
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <div className="font-bold text-sm text-[#1E1B4B]">Media Collaborator</div>
                  <div className="text-xs text-[#EA580C] font-semibold">KahaniVerse Project</div>
                </div>
              </div>

              <div className="bg-white/90 border border-[#BB98E5]/25 rounded-3xl p-7 shadow-sm flex flex-col justify-between">
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  "The UI architecture Shivangi designed for Cupid was fluid, fast, and completely effortless to navigate across mobile devices on campus."
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <div className="font-bold text-sm text-[#1E1B4B]">Campus Co-Creator</div>
                  <div className="text-xs text-[#059669] font-semibold">Cupid App</div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer (No GitHub, No LinkedIn — Only Instagram and Email) */}
          <footer className="bg-white/95 border-t border-[#BB98E5]/30 py-16 px-5 sm:px-8 md:px-10 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <PixelStar size={18} />
                    <h3 className="text-[#0F172A] font-black text-2xl sm:text-3xl tracking-tight">
                      Shivangi Tripathi
                    </h3>
                  </div>
                  <p className="text-slate-500 font-medium text-sm">
                    Software Developer · Frontend Engineer · B.Tech CAC @ Galgotias
                  </p>
                </div>

                {/* Social Channels: Instagram & Email Only */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/kahaniverse329/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF5FF] border border-[#BB98E5]/40 text-[#7C3AED] hover:border-[#FFA07A] hover:text-[#EA580C] hover:bg-[#FFF7ED] text-xs font-bold transition-all shadow-xs"
                    aria-label="Instagram Profile (@kahaniverse329)"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram (100K+ Views)</span>
                  </a>

                  <a
                    href="mailto:shivangitripathi1392@gmail.com"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#BB98E5] to-[#FFA07A] text-white text-xs font-bold transition-all shadow-sm hover:scale-105"
                    aria-label="Send Email"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Email Shivangi</span>
                  </a>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
                <nav className="flex flex-wrap items-center gap-6 font-medium text-slate-500">
                  <a href="#about" className="hover:text-[#7C3AED] transition-colors">About</a>
                  <a href="#services" className="hover:text-[#7C3AED] transition-colors">Services</a>
                  <a href="#projects" className="hover:text-[#7C3AED] transition-colors">Projects</a>
                  <a href="#playground" className="hover:text-[#7C3AED] transition-colors">Playground</a>
                  <a href="https://www.instagram.com/kahaniverse329/" target="_blank" rel="noopener noreferrer" className="hover:text-[#EA580C] transition-colors">Instagram</a>
                  <a href="mailto:shivangitripathi1392@gmail.com" className="hover:text-[#7C3AED] transition-colors">Contact</a>
                </nav>
                <div>
                  © {new Date().getFullYear()} Shivangi Tripathi · Handcrafted with React + Vite
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default App;
