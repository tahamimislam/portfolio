import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

// Skill icons mapped to Devicon classes or emoji fallbacks
const skillIcons = {
  Python: 'devicon-python-plain',
  'C++': 'devicon-cplusplus-plain',
  JavaScript: 'devicon-javascript-plain',
  TypeScript: 'devicon-typescript-plain',
  SQL: 'devicon-mysql-plain',
  HTML: 'devicon-html5-plain',
  CSS: 'devicon-css3-plain',
  React: 'devicon-react-original',
  FastAPI: 'devicon-fastapi-plain',
  'REST API': '🔗',
  NumPy: 'devicon-numpy-plain',
  Pandas: 'devicon-pandas-plain',
  'Scikit-learn': 'devicon-scikitlearn-plain',
  Git: 'devicon-git-plain',
  GitHub: 'devicon-github-original',
};

// Removed category colors to use a single accent system

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills section"
      className="section-padding"
      style={{ borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}
    >
      <div className="section-container">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Label */}
          <motion.div variants={fadeUp} className="section-label">
            Technical Skills
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
              marginBottom: '3.5rem',
            }}
          >
            Tools I work with
          </motion.h2>

          {/* Skills rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {skills.map((group, gi) => {
              return (
                <motion.div
                  key={group.category}
                  variants={fadeUp}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '180px 1fr',
                    gap: '2rem',
                    alignItems: 'center',
                    padding: '1.75rem 0',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                  className="skill-row"
                >
                  {/* Category label */}
                  <div>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.3rem',
                    }}>
                      {`0${gi + 1}`}
                    </span>
                    <span style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}>
                      {group.category}
                    </span>
                  </div>

                  {/* Skill items */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                    {group.items.map((skill, index) => (
                      <div key={skill} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)' }}>
                          {skillIcons[skill]?.startsWith('devicon-') ? (
                            <i className={skillIcons[skill]} style={{ fontSize: '1rem', opacity: 0.7 }}></i>
                          ) : (
                            <span style={{ fontSize: '1rem', opacity: 0.7 }} aria-hidden="true">{skillIcons[skill] || '◆'}</span>
                          )}
                          <span style={{ fontSize: '0.95rem', fontWeight: 400, color: 'var(--text-primary)' }}>{skill}</span>
                        </div>
                        {index < group.items.length - 1 && (
                          <span style={{ color: 'var(--border)', fontSize: '1.2rem', lineHeight: 1 }}>·</span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .skill-row { grid-template-columns: 1fr !important; gap: 0.75rem !important; }
        }
      `}</style>
    </section>
  );
}
