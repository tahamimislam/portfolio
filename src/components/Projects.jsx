import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
import { projects } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};



const projectPatterns = ['◈', '◇', '◉'];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects section"
      className="section-padding"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="section-container">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Label */}
          <motion.div variants={fadeUp} className="section-label">
            Selected Work
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              marginBottom: '3rem',
            }}
          >
            Things I've built
          </motion.h2>

          {/* Projects list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                aria-label={`Project: ${project.title}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '220px 1fr auto',
                  gap: '2rem',
                  alignItems: 'center',
                  padding: '2rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  cursor: 'default',
                  transition: 'border-color 0.25s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="project-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                {/* Gradient visual */}
                <div style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  borderRadius: '6px',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  flexShrink: 0,
                }}>
                  <span style={{ fontSize: '2rem', opacity: 0.6 }}>{projectPatterns[i]}</span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.1em',
                  }}>
                    PROJECT {project.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--text-muted)',
                    }}>
                      {project.number}
                    </span>
                    {project.status && (
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px',
                        background: project.status === 'In Progress'
                          ? 'rgba(245,158,11,0.12)'
                          : 'rgba(16,185,129,0.12)',
                        color: project.status === 'In Progress' ? '#fbbf24' : '#34d399',
                        border: `1px solid ${project.status === 'In Progress' ? 'rgba(245,158,11,0.25)' : 'rgba(16,185,129,0.25)'}`,
                      }}>
                        {project.status}
                      </span>
                    )}
                  </div>

                  <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.01em',
                  }}>
                    {project.title}
                  </h3>

                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.75,
                    marginBottom: '1rem',
                    maxWidth: '460px',
                  }}>
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {project.tech.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  flexShrink: 0,
                }}>
                  <a
                    id={`project-${i + 1}-github-btn`}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    className="btn-secondary"
                    style={{ fontSize: '0.8rem', padding: '0.5rem 0.85rem', justifyContent: 'center' }}
                  >
                    <GithubIcon size={14} />
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      id={`project-${i + 1}-demo-btn`}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo for ${project.title}`}
                      className="btn-primary"
                      style={{ fontSize: '0.8rem', padding: '0.5rem 0.85rem', justifyContent: 'center' }}
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  )}
                </div>

                {/* Arrow decoration */}
                <div style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  opacity: 0.15,
                }}>
                  <ArrowUpRight size={20} />
                </div>
              </motion.article>
            ))}
          </div>

          {/* Note */}
          <motion.p
            variants={fadeUp}
            style={{
              marginTop: '2rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              textAlign: 'center',
            }}
          >
            * GitHub and demo links will be updated once projects are published.
          </motion.p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .project-card { grid-template-columns: 1fr !important; }
          .project-card > div:first-child { max-width: 100%; aspect-ratio: 21/9 !important; }
        }
        @media (max-width: 640px) {
          .project-card { padding: 1.25rem !important; }
        }
      `}</style>
    </section>
  );
}
