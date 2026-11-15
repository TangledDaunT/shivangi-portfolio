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
    { id: 'featured', label: 'Deployed Projects', count: projects.filter(p => p.liveUrl).length },
    { id: 'iot', label: categoryLabels.iot, count: projects.filter(p => p.category === 'iot').length },
    { id: 'automation', label: categoryLabels.automation, count: projects.filter(p => p.category === 'automation').length },
    { id: 'experiment', label: categoryLabels.experiment, count: projects.filter(p => p.category === 'experiment').length },
    { id: 'coursework', label: categoryLabels.coursework, count: projects.filter(p => p.category === 'coursework').length },
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
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search projects, technologies..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-6 py-3 bg-[#120E1E]/80 border border-[#A855F7]/30 rounded-full text-white placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#C084FC] focus:ring-1 focus:ring-[#A855F7] transition-all backdrop-blur-md"
            aria-label="Search projects"
          />
          <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#C084FC]">
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
            className={`px-4 py-2 rounded-full border font-medium text-sm transition-all ${
              activeCategory === id
                ? 'bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white border-[#C084FC] shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                : 'bg-[#120E1E]/80 text-[#CBD5E1] border-[#A855F7]/25 hover:border-[#A855F7]/50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {label}
            <span className={`ml-2 text-xs ${activeCategory === id ? 'text-white/80' : 'text-[#94A3B8]'}`}>
              ({count})
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;
