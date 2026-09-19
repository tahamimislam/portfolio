import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

// Skill icons as SVG emoji-style representations
const skillIcons = {
  Python: '🐍',
  'C++': '⚙️',
  JavaScript: '⚡',
  SQL: '🗄️',
  HTML: '📄',
  CSS: '🎨',
  React: '⚛️',
  FastAPI: '🚀',
  'REST API': '🔗',
  NumPy: '🔢',
  Pandas: '🐼',
  'Scikit-learn': '🤖',
  'Machine Learning': '🧠',
  Git: '🌿',
  GitHub: '🐙',
};

const categoryColors = {
  Programming: { bg: 'rgba(99,102,241,0.06)', border: 'rgba(99,102,241,0.2)', accent: '#818cf8' },
  Frontend: { bg: 'rgba(14,165,233,0.06)', border: 'rgba(14,165,233,0.2)', accent: '#38bdf8' },
  Backend: { bg: 'rgba(16,185,129,0.06)', border: 'rgba(16,185,129,0.2)', accent: '#34d399' },
  'AI / ML': { bg: 'rgba(168,85,247,0.06)', border: 'rgba(168,85,247,0.2)', accent: '#c084fc' },
  Tools: { bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.2)', accent: '#fbbf24' },
};

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
              const colors = categoryColors[group.category] || categoryColors.Programming;
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
                      color: colors.accent,
                    }}>
                      {group.category}
                    </span>
                  </div>

                  {/* Skill badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {group.items.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ y: -2, scale: 1.03 }}
                        transition={{ duration: 0.15 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          padding: '0.5rem 0.9rem',
                          background: colors.bg,
                          border: `1px solid ${colors.border}`,
                          borderRadius: '8px',
                          cursor: 'default',
                        }}
                      >
                        <span style={{ fontSize: '0.9rem' }} aria-hidden="true">
                          {skillIcons[skill] || '◆'}
                        </span>
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          color: colors.accent,
                        }}>
                          {skill}
                        </span>
                      </motion.div>
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
