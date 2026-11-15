import FadeIn from '../components/FadeIn';

const EducationSection = () => {
  return (
    <section id="education" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#D7E2EA] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(2rem, 8vw, 80px)' }}
          >
            Education & Certifications
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <FadeIn delay={0.1} y={30}>
            <div className="bg-[#120E1E]/80 border border-[#A855F7]/25 rounded-3xl p-6 sm:p-8 h-full hover:border-[#A855F7]/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all backdrop-blur-sm">
              <h3 className="text-white font-semibold text-lg mb-2">B.Tech in CAC (Computer Applications)</h3>
              <p className="text-[#94A3B8] font-light">Galgotias University, 3rd Year · CGPA: 7.8</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={30}>
            <div className="bg-[#120E1E]/80 border border-[#A855F7]/25 rounded-3xl p-6 sm:p-8 h-full hover:border-[#A855F7]/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all backdrop-blur-sm">
              <h3 className="text-white font-semibold text-lg mb-2">Frontend Developer Intern</h3>
              <p className="text-[#94A3B8] font-light">Savvy Technologies · Web Design &amp; UI Engineering</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} y={30}>
            <div className="bg-[#120E1E]/80 border border-[#A855F7]/25 rounded-3xl p-6 sm:p-8 h-full hover:border-[#A855F7]/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all backdrop-blur-sm">
              <h3 className="text-white font-semibold text-lg mb-2">Autonomous AI &amp; Web Systems</h3>
              <p className="text-[#94A3B8] font-light">Video Automation Pipelines (100K+ Views) &amp; React UIs</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
