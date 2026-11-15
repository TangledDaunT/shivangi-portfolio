import { useState } from 'react';
import { motion } from 'framer-motion';
import { Project, categoryLabels } from '../data/projects';

interface ProjectFilterProps {
  projects: Project[];
  onSelect: (projects: Project[]) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ projects, onSelect }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'featured', label: 'Featured', count: projects.filter(p => p.category === 'featured').length },
    { id: 'production', label: 'Live Deployments', count: projects.filter(p => p.category === 'production').length },
    { id: 'automation', label: 'AI & Automation', count: projects.filter(p => p.category === 'automation').length },
    { id: 'iot', label: 'IoT & Hardware', count: projects.filter(p => p.category === 'iot').length },
  ];

  const handleFilter = (categoryId: string) => {
    setActiveCategory(categoryId);
    let filtered = projects;

    if (categoryId !== 'all') {
      filtered = projects.filter(p => p.category === categoryId);
    }

    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    onSelect(filtered);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    let filtered = projects;

    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (query) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.tech.some(t => t.toLowerCase().includes(query.toLowerCase()))
      );
    }

    onSelect(filtered);
  };

  return (
    <div className="w-full">
      {/* Search Bar */}
      <div className="mb-6 max-w-xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search projects, AI pipelines, React tech..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-6 py-3.5 bg-white/95 border-2 border-[#BB98E5]/30 rounded-full text-[#1E1B4B] placeholder-slate-400 focus:outline-none focus:border-[#FFA07A] focus:ring-2 focus:ring-[#FFA07A]/20 transition-all shadow-sm text-sm"
            aria-label="Search projects"
          />
          <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#BB98E5]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map(({ id, label, count }) => (
          <motion.button
            key={id}
            onClick={() => handleFilter(id)}
            className={`px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === id
                ? 'bg-gradient-to-r from-[#BB98E5] to-[#FFA07A] text-white border-transparent shadow-[0_4px_16px_rgba(187,152,229,0.35)]'
                : 'bg-white/80 text-slate-600 border-slate-200 hover:border-[#BB98E5]/60 hover:bg-white'
            }`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            {label}
            <span className={`ml-1.5 text-xs ${activeCategory === id ? 'text-white/85' : 'text-slate-400'}`}>
              ({count})
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;
