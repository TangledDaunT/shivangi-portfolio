import FadeIn from '../components/FadeIn';
import Timeline from '../components/Timeline';
import StatsCard from '../components/StatsCard';
import { portfolioStats } from '../data/stats';
import { PixelHeart, PixelStar, PixelFlower, PixelSparkle } from '../components/PixelArt';

const AboutSection = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36 overflow-hidden"
    >
      {/* Funky Background Accents */}
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-[#BB98E5]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-10 w-96 h-96 bg-[#FFA07A]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Pixel Stickers */}
      <div className="absolute top-16 left-6 sm:left-12 opacity-80 pointer-events-none animate-bounce [animation-duration:3s]">
        <PixelFlower size={36} />
      </div>
      <div className="absolute top-28 right-8 sm:right-16 opacity-80 pointer-events-none animate-pulse">
        <PixelSparkle size={26} />
      </div>

      {/* Center content */}
      <div className="flex flex-col items-center gap-14 sm:gap-18 md:gap-20 z-10 max-w-6xl mx-auto w-full">
        {/* Section Tag & Heading */}
        <FadeIn delay={0} y={30}>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5FF] border border-[#BB98E5]/40 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-3">
              <PixelHeart size={14} />
              <span>Get to Know Shivangi</span>
            </div>
            <h2
              id="about-heading"
              className="text-[#0F172A] font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(2.75rem, 10vw, 140px)' }}
            >
              About me
            </h2>
          </div>
        </FadeIn>

        {/* Bio Card */}
        <FadeIn delay={0.1} y={30} className="w-full max-w-4xl">
          <div className="bg-white/90 border-2 border-[#BB98E5]/30 rounded-3xl p-7 sm:p-10 shadow-[0_12px_40px_rgba(187,152,229,0.12)] backdrop-blur-md">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-[#BB98E5]" />
              <span className="w-3 h-3 rounded-full bg-[#FFA07A]" />
              <span className="w-3 h-3 rounded-full bg-[#6EE7B7]" />
              <span className="text-xs font-mono text-slate-400 ml-2">shivangi.dev / bio</span>
            </div>
            <p className="text-slate-700 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-6">
              I&apos;m <span className="font-bold text-[#1E1B4B]">Shivangi Tripathi</span>, a software developer and frontend engineer. Currently in my 3rd year pursuing B.Tech in Computer Applications &amp; Computing (CAC) at <span className="font-semibold text-[#7C3AED]">Galgotias University (7.8 CGPA)</span>, I focus on crafting interactive, modern web interfaces and practical AI automation pipelines.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Previously, I interned at <span className="font-semibold text-[#EA580C]">Savvy Technologies</span> as a Frontend Developer &amp; Website Designer. Beyond core software, I architect end-to-end AI video pipelines, including my project <span className="font-semibold text-[#7C3AED]">@kahaniverse329</span> which surpassed <span className="font-bold text-[#EA580C]">100K+ views on Instagram</span> with automated generation, scheduling, and analytics feedback.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-slate-100">
              <a
                href="mailto:shivangitripathi1392@gmail.com"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#BB98E5] to-[#FFA07A] text-white text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>Email Shivangi</span>
                <span>✉</span>
              </a>
              <a
                href="https://www.instagram.com/kahaniverse329/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-white border border-[#BB98E5]/50 text-[#7C3AED] hover:border-[#FFA07A] hover:text-[#EA580C] text-xs sm:text-sm font-bold shadow-xs hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>Instagram (@kahaniverse329)</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Stats Grid */}
        <div className="w-full">
          <FadeIn delay={0.15} y={30}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white/85 border border-[#BB98E5]/30 rounded-2xl p-5 sm:p-6 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#BB98E5] to-[#FFA07A] bg-clip-text text-transparent">
                  100K+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Instagram Views</div>
                <div className="text-[11px] text-slate-400">@kahaniverse329</div>
              </div>

              <div className="bg-white/85 border border-[#BB98E5]/30 rounded-2xl p-5 sm:p-6 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-black text-[#1E1B4B]">
                  7.8
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">CGPA · B.Tech CAC</div>
                <div className="text-[11px] text-slate-400">Galgotias University</div>
              </div>

              <div className="bg-white/85 border border-[#BB98E5]/30 rounded-2xl p-5 sm:p-6 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-black text-[#7C3AED]">
                  3rd
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Year Student</div>
                <div className="text-[11px] text-slate-400">Core Engineering</div>
              </div>

              <div className="bg-white/85 border border-[#BB98E5]/30 rounded-2xl p-5 sm:p-6 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-black text-[#EA580C]">
                  Savvy
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Frontend Intern</div>
                <div className="text-[11px] text-slate-400">Website Designer</div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Experience Timeline */}
        <div className="w-full">
          <FadeIn delay={0.2} y={30}>
            <div className="bg-white/85 border border-[#BB98E5]/25 rounded-3xl p-6 sm:p-10 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B4B] mb-6 flex items-center gap-2">
                <PixelStar size={18} />
                <span>Experience &amp; Milestones</span>
              </h3>
              <Timeline />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
