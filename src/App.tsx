import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import PlaygroundSection from './sections/PlaygroundSection';
import ScrollProgress from './components/ScrollProgress';

const App = () => {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1001] focus:rounded focus:bg-[#A855F7] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <main id="main-content" style={{ overflowX: 'clip', background: '#0C0C0C' }}>
        {/* Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Sections */}
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <EducationSection />
        <ServicesSection />
        <ProjectsSection />
        <PlaygroundSection />

        {/* FAQ Section */}
        <section id="faq" className="faq-section">
          <h2 className="hero-heading">Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>What is KahaniVerse (@kahaniverse329)?</h3>
            <p>
              KahaniVerse is an autonomous AI-driven storytelling ecosystem and automated video pipeline.
              I craft original narrative story scripts, while a custom backend pipeline generates AI visual
              scenes, orchestrates voiceover audio, compiles the videos, and autonomously schedules and publishes
              them to Instagram. The pipeline monitors post engagement metrics via API and feeds insights back
              to iteratively optimize content performance—having already surpassed 100K+ total views on the dashboard.
            </p>
          </div>
          <div className="faq-item">
            <h3>What technologies do you specialize in?</h3>
            <p>
              My primary expertise is in frontend engineering and interactive web applications using React,
              TypeScript, Vite, Tailwind CSS, and Framer Motion. I also build automated Python pipelines, API
              orchestrations (Instagram Graph API, AI video/image generators), and full-stack solutions.
            </p>
          </div>
          <div className="faq-item">
            <h3>How can I hire or collaborate with you?</h3>
            <p>
              I am open to frontend developer roles, modern UI/UX design projects, and automated AI pipeline
              collaborations. Contact me directly at{' '}
              <a href="mailto:shivangitripathi1392@gmail.com" className="text-[#C084FC] underline hover:text-white">
                shivangitripathi1392@gmail.com
              </a>.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials-section">
          <h2 className="hero-heading">What People Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>
                "Shivangi delivered an intuitive, responsive frontend that elevated our platform. Her speed,
                eye for motion graphics, and polish are truly impressive."
              </p>
              <p className="testimonial-author">— Engineering Lead, Savvy Technologies</p>
            </div>
            <div className="testimonial-card">
              <p>
                "The KahaniVerse automation pipeline works like clockwork. Reaching 100K+ organic views with
                automated video synthesis and self-optimizing insight loops is a remarkable technical achievement."
              </p>
              <p className="testimonial-author">— Creator Lead, Digital Media</p>
            </div>
            <div className="testimonial-card">
              <p>
                "The UI architecture Shivangi built for Cupid is smooth, modern, and completely effortless to
                navigate across mobile and desktop devices."
              </p>
              <p className="testimonial-author">— Project Collaborator, Cupid App</p>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="blog-section">
          <h2 className="hero-heading">Technical Writing &amp; Notes</h2>
          <p className="text-[#94A3B8]">
            Articles on automated AI pipelines, modern frontend motion, and full-stack engineering.
          </p>
          <div className="blog-grid">
            <article className="blog-card">
              <h3 className="text-white">
                Autonomous Video Storytelling: From Script to 100K+ Views on Instagram
              </h3>
              <p className="text-[#94A3B8]">
                How I designed and engineered an automated AI pipeline that transforms narrative writing into
                high-retention Instagram reels with real-time feedback loops...
              </p>
              <a href="https://www.instagram.com/kahaniverse329/" target="_blank" rel="noopener noreferrer">
                Explore KahaniVerse →
              </a>
            </article>
            <article className="blog-card">
              <h3 className="text-white">
                Designing Cyberpunk &amp; Futuristic Web Interfaces with React &amp; Tailwind
              </h3>
              <p className="text-[#94A3B8]">
                Balancing bold aesthetic visuals, glowing metallic accents, and high-performance 60fps animations
                without bloat or AI slop...
              </p>
              <a href="#hero">Read case study →</a>
            </article>
            <article className="blog-card">
              <h3 className="text-white">
                Campus Dating at Scale: Architecture of Cupid for Galgotias University
              </h3>
              <p className="text-[#94A3B8]">
                Building intuitive user onboarding, match recommendation cards, and fluid mobile-first UI for
                university students...
              </p>
              <a href="#projects">View project details →</a>
            </article>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0C0C0C] border-t border-[#A855F7]/25 py-16 px-5 sm:px-8 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-white font-black text-3xl mb-2 tracking-tight">Shivangi Tripathi</h3>
                <p className="text-[#94A3B8] font-light">Software Developer &amp; AI Automation Creator</p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-6">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/kahaniverse329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-[#C084FC] hover:scale-110 transition-all"
                  aria-label="Instagram Profile (@kahaniverse329)"
                  title="Instagram (@kahaniverse329) - 100K+ Views"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Shivangilovestycy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-white hover:scale-110 transition-all"
                  aria-label="GitHub Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.547 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/shivangi-tripathi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-[#C084FC] hover:scale-110 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:shivangitripathi1392@gmail.com"
                  className="text-[#94A3B8] hover:text-white hover:scale-110 transition-all"
                  aria-label="Send email"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[#A855F7]/15 text-center">
              <nav className="footer-nav" aria-label="Footer">
                <a href="#about" className="text-[#94A3B8] hover:text-[#C084FC]">About</a>
                <a href="#services" className="text-[#94A3B8] hover:text-[#C084FC]">Services</a>
                <a href="#projects" className="text-[#94A3B8] hover:text-[#C084FC]">Projects</a>
                <a href="#playground" className="text-[#94A3B8] hover:text-[#C084FC]">Playground</a>
                <a href="https://www.instagram.com/kahaniverse329/" target="_blank" rel="noopener noreferrer" className="text-[#C084FC] hover:text-white">Instagram</a>
                <a href="https://github.com/Shivangilovestycy" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-white">GitHub</a>
                <a href="mailto:shivangitripathi1392@gmail.com" className="text-[#94A3B8] hover:text-white">Email</a>
              </nav>
              <p className="text-[#64748B] font-light text-sm mt-4">
                © {new Date().getFullYear()} Shivangi Tripathi · Built with React + Vite + Cyberpunk Motion
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default App;
