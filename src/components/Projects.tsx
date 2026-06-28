import React, { useState, useEffect, useRef } from 'react';
import { projects, type Project } from '../data/projects';
import '../styles/Projects.css';

// ── Constants ─────────────────────────────────────────────────────────────────
const categories = ['All', 'Web', 'Mobile', 'QA Automation'] as const;
type FilterValue = (typeof categories)[number];

// ── Helpers ───────────────────────────────────────────────────────────────────
/**
 * projects.ts defines stack as a single dot-separated string e.g.
 * ".NET 8 · React · TypeScript"
 * Split on · or , to render individual pills.
 */
const toStackPills = (stack: string): string[] =>
  stack
    .split(/·|,/)
    .map((s) => s.trim())
    .filter(Boolean);

// ── Scroll-reveal hook ────────────────────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// ── ProjectCard ───────────────────────────────────────────────────────────────
interface CardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<CardProps> = ({ project, index }) => {
  const { ref, visible } = useInView();
  const pills = toStackPills(project.stack);
  const hasRealLink = project.link && project.link !== '#';

  return (
    <div
      ref={ref}
      className={`project-card ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <span
        className={`project-category cat-${project.category.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {project.category}
      </span>

      <h3>{project.title}</h3>

      <div className="stack">
        {pills.map((pill) => (
          <span key={pill} className="stack-pill">
            {pill}
          </span>
        ))}
      </div>

      <p>{project.description}</p>
      {hasRealLink ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Project →
        </a>
      ) : (
        <span className="link-placeholder">Coming soon</span>
      )}
    </div>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const Projects: React.FC = () => {
  const [filter, setFilter] = useState<FilterValue>('All');

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <span className="projects-eyebrow">// 03 — Build Log</span>
        <h2>Highlighted Projects</h2>
      </div>

      {/* Filter Bar */}
      <div
        className="filter-bar"
        role="group"
        aria-label="Filter projects by category"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid or empty state */}
      {filteredProjects.length === 0 ? (
        <p className="no-results">No projects in this category yet.</p>
      ) : (
        <div className="project-grid">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
