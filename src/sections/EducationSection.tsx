import FadeIn from '../components/FadeIn';
import { PixelStar, PixelHeart, PixelDisk } from '../components/PixelArt';

const EducationSection = () => {
  return (
    <section id="education" className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={35}>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5FF] border border-[#BB98E5]/40 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-3">
              <PixelDisk size={14} />
              <span>Academics &amp; Credentials</span>
            </div>
            <h2
              className="text-[#0F172A] font-black uppercase text-center leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.25rem, 7vw, 72px)' }}
            >
              Education &amp; Experience
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <FadeIn delay={0.1} y={30}>
            <div className="bg-white/90 border-2 border-[#BB98E5]/30 rounded-3xl p-7 sm:p-8 h-full shadow-[0_10px_30px_rgba(187,152,229,0.1)] hover:border-[#FFA07A]/60 hover:shadow-[0_14px_40px_rgba(255,160,122,0.18)] transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#FAF5FF] border border-[#BB98E5]/40 flex items-center justify-center text-xl mb-4">
                  🎓
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] mb-1">
                  Galgotias University
                </div>
                <h3 className="text-[#1E1B4B] font-extrabold text-xl mb-2">
                  B.Tech in CAC
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Computer Applications &amp; Computing, currently in 3rd Year. Core engineering coursework in data structures, web architecture, and algorithms.
                </p>
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#BB98E5]/30 text-[#7C3AED] text-xs font-bold">
                ⭐ CGPA: 7.8 / 10.0
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} y={30}>
            <div className="bg-white/90 border-2 border-[#BB98E5]/30 rounded-3xl p-7 sm:p-8 h-full shadow-[0_10px_30px_rgba(187,152,229,0.1)] hover:border-[#FFA07A]/60 hover:shadow-[0_14px_40px_rgba(255,160,122,0.18)] transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#FFF7ED] border border-[#FFA07A]/40 flex items-center justify-center text-xl mb-4">
                  💼
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C] mb-1">
                  Savvy Technologies
                </div>
                <h3 className="text-[#1E1B4B] font-extrabold text-xl mb-2">
                  Frontend Developer Intern
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Engineered interactive website layouts and responsive user interfaces. Focused on component modularity, clean CSS animations, and cross-browser performance.
                </p>
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#FFF7ED] border border-[#FFA07A]/30 text-[#EA580C] text-xs font-bold">
                ⚡ Website Designer
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={30}>
            <div className="bg-white/90 border-2 border-[#BB98E5]/30 rounded-3xl p-7 sm:p-8 h-full shadow-[0_10px_30px_rgba(187,152,229,0.1)] hover:border-[#FFA07A]/60 hover:shadow-[0_14px_40px_rgba(255,160,122,0.18)] transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#F0FDF4] border border-[#6EE7B7]/50 flex items-center justify-center text-xl mb-4">
                  🚀
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#059669] mb-1">
                  KahaniVerse Ecosystem
                </div>
                <h3 className="text-[#1E1B4B] font-extrabold text-xl mb-2">
                  AI Video Automation
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Built an end-to-end autonomous story video generation pipeline with real-time analytics feedback loop, reaching over 100K+ organic views.
                </p>
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#6EE7B7]/40 text-[#059669] text-xs font-bold">
                🔥 100K+ Views Milestone
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
