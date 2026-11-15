import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects as allProjects, Project, categoryColors } from '../data/projects';
import ProjectFilter from '../components/ProjectFilter';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { PixelStar, PixelHeart, PixelComputer } from '../components/PixelArt';

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: 'large' | 'medium' | 'compact';
}

const ProjectCard = ({ project, index, variant = 'medium' }: ProjectCardProps) => {
  // Large Featured Card
  if (variant === 'large') {
    return (
      <motion.div
        className="rounded-3xl border-2 border-[#BB98E5]/30 bg-white/90 p-7 sm:p-9 shadow-[0_12px_40px_rgba(187,152,229,0.12)] hover:shadow-[0_16px_50px_rgba(255,160,122,0.22)] hover:border-[#FFA07A]/60 transition-all backdrop-blur-md relative overflow-hidden"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {/* Soft background ambient gradient */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#BB98E5]/15 via-[#FFA07A]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-current shadow-sm"
                  style={{ backgroundColor: `${categoryColors[project.category]}20`, color: categoryColors[project.category] }}
                >
                  {project.category}
                </span>
                {project.isNew && (
                  <span className="flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#BB98E5] to-[#FFA07A] text-white">
                    <PixelStar size={12} />
                    <span>Featured</span>
                  </span>
                )}
              </div>
              <h3 className="text-[#1E1B4B] font-extrabold text-2xl sm:text-3xl tracking-tight">
                {project.name}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              {project.liveUrl && <LiveProjectButton href={project.liveUrl} />}
              {project.name.includes('KahaniVerse') && (
                <a
                  href="https://www.instagram.com/kahaniverse329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-[#BB98E5] to-[#FFA07A] text-white text-xs font-bold shadow-md hover:scale-105 transition-all flex items-center gap-1.5"
                >
                  <span>Watch on Instagram</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-600 font-normal leading-relaxed mb-5 text-sm sm:text-base">
            {project.longDescription || project.description}
          </p>

          {/* Highlights */}
          {project.highlights && (
            <div className="flex flex-wrap gap-2 mb-5">
              {project.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-3 py-1 bg-[#FAF5FF] border border-[#BB98E5]/40 text-[#6B21A8] rounded-full text-xs font-semibold shadow-xs"
                >
                  ✦ {highlight}
                </span>
              ))}
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 border border-slate-200 bg-white text-slate-600 rounded-lg text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Stats */}
            {project.stars > 0 && (
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#EA580C] bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FFEDD5]">
                <span>⭐</span>
                <span>{project.stars} {project.name.includes('KahaniVerse') ? 'K+ Instagram Views' : 'stars'}</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // Medium Card
  if (variant === 'medium') {
    return (
      <motion.div
        className="rounded-3xl border border-[#BB98E5]/25 bg-white/85 p-6 hover:border-[#FFA07A]/60 hover:shadow-[0_12px_30px_rgba(187,152,229,0.14)] transition-all backdrop-blur-md flex flex-col justify-between"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        whileHover={{ y: -4 }}
      >
        <div>
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="text-[#1E1B4B] font-bold text-lg leading-snug">{project.name}</h3>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r from-[#BB98E5] to-[#FFA07A] text-white flex-shrink-0 hover:opacity-90 transition-opacity"
              >
                Live ↗
              </a>
            )}
          </div>

          <p className="text-slate-600 font-normal text-xs sm:text-sm mb-4 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {project.highlights.slice(0, 3).map((h) => (
                <span key={h} className="px-2 py-0.5 bg-[#FAF5FF] text-[#7C3AED] border border-[#BB98E5]/30 rounded-md text-[11px] font-medium">
                  {h}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-100">
          {project.tech.slice(0, 4).map((tech) => (
            <span key={tech} className="px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-500 rounded text-[11px]">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    );
  }

  // Compact variant
  return (
    <motion.div
      className="p-4 rounded-2xl bg-white/80 border border-[#BB98E5]/20 hover:border-[#FFA07A]/50 hover:shadow-md transition-all"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h4 className="text-[#1E1B4B] font-bold text-sm mb-0.5">{project.name}</h4>
          <p className="text-slate-500 text-xs">{project.description || 'Project details'}</p>
        </div>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EA580C] text-xs font-bold ml-2 hover:underline"
          >
            Launch ↗
          </a>
        ) : (
          <span className="text-[#BB98E5] text-xs font-semibold ml-2">✦</span>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);

  // Separate projects by tier
  const featuredProjects = filteredProjects.filter(p => p.category === 'featured');
  const productionProjects = filteredProjects.filter(p => p.category === 'production');
  const automationProjects = filteredProjects.filter(p => p.category === 'automation');
  const iotProjects = filteredProjects.filter(p => p.category === 'iot');
  const labProjects = filteredProjects.filter(p => p.isNew && p.category !== 'featured');

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36 overflow-hidden"
    >
      {/* Funky Pixel Art Floating Decors */}
      <div className="absolute top-12 left-8 opacity-40 pointer-events-none hidden sm:block">
        <PixelComputer size={40} />
      </div>
      <div className="absolute top-20 right-12 opacity-40 pointer-events-none hidden sm:block">
        <PixelHeart size={34} />
      </div>

      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5FF] border border-[#BB98E5]/40 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-3">
              <PixelStar size={14} />
              <span>Selected Works &amp; Systems</span>
            </div>
            <h2
              id="projects-heading"
              className="text-[#0F172A] font-black uppercase text-center leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 9vw, 130px)' }}
            >
              Projects
            </h2>
          </div>
        </FadeIn>

        {/* Filter */}
        <FadeIn delay={0.1} y={30}>
          <div className="mb-12">
            <ProjectFilter projects={allProjects} onSelect={setFilteredProjects} />
          </div>
        </FadeIn>

        {/* Results count */}
        {filteredProjects.length !== allProjects.length && (
          <div className="text-center mb-8 text-slate-500 font-medium text-sm">
            Showing {filteredProjects.length} of {allProjects.length} projects
          </div>
        )}

        {/* Featured Projects - Large Cards */}
        {featuredProjects.length > 0 && (
          <div className="space-y-7 mb-16">
            <FadeIn delay={0.1} y={20}>
              <div className="text-center mb-2">
                <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                  ✦ Featured &amp; High-Impact Releases ✦
                </span>
              </div>
            </FadeIn>
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} variant="large" />
            ))}
          </div>
        )}

        {/* Live Deployments */}
        {productionProjects.length > 0 && (
          <div className="mb-16">
            <FadeIn delay={0.15} y={20}>
              <div className="text-center mb-6">
                <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                  ⚡ Live Deployed Applications ⚡
                </span>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {productionProjects.map((project, i) => (
                <ProjectCard key={project.name} project={project} index={i} variant="medium" />
              ))}
            </div>
          </div>
        )}

        {/* AI & Automation Projects */}
        {automationProjects.length > 0 && (
          <div className="mb-16">
            <FadeIn delay={0.2} y={20}>
              <div className="text-center mb-6">
                <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                  🤖 AI Pipelines &amp; Workflows 🤖
                </span>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {automationProjects.map((project, i) => (
                <ProjectCard key={project.name} project={project} index={i} variant="medium" />
              ))}
            </div>
          </div>
        )}

        {/* IoT & Hardware Projects */}
        {iotProjects.length > 0 && (
          <div className="mb-16">
            <FadeIn delay={0.25} y={20}>
              <div className="text-center mb-6">
                <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                  ⚙️ IoT, Sensors &amp; Microcontrollers ⚙️
                </span>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {iotProjects.map((project, i) => (
                <ProjectCard key={project.name} project={project} index={i} variant="medium" />
              ))}
            </div>
          </div>
        )}

        {/* Creative Lab & Innovations */}
        {labProjects.length > 0 && (
          <div className="mb-16">
            <FadeIn delay={0.3} y={20}>
              <div className="text-center mb-6">
                <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                  🧪 Creative Lab &amp; Prototypes 🧪
                </span>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {labProjects.map((project, i) => (
                <ProjectCard key={`lab-${project.name}`} project={project} index={i} variant="compact" />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white/60 rounded-3xl border border-slate-200">
            <div className="text-slate-500 font-medium">No projects match your selected filter</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
