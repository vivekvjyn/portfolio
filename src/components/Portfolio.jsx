import { useState, useMemo } from 'react';
import projects from '../data/projects';
import SortDropdown from './SortDropdown';
import ProjectCard from './ProjectCard';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('a-z');
  const [sortOpen, setSortOpen] = useState(false);

  const tags = useMemo(() => {
    const uniqueTags = [...new Set(projects.map((p) => p.tag))];
    return ['All', ...uniqueTags];
  }, []);

  const filteredProjects = useMemo(() => {
    let result = filter === 'All' ? [...projects] : projects.filter((p) => p.tag === filter);
    result.sort((a, b) => sort === 'a-z' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    return result;
  }, [filter, sort]);

  return (
    <main className="portfolio-track">
      <div className="portfolio-controls">
        <div className="filter-group">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`filter-btn ${filter === tag ? 'active' : ''}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <SortDropdown sort={sort} setSort={setSort} isOpen={sortOpen} setIsOpen={setSortOpen} />
      </div>
      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </main>
  );
}
