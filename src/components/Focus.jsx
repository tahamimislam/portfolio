import { motion } from 'framer-motion';
import { Brain, Cpu, BarChart2, GitBranch, Server, Layers, Globe } from 'lucide-react';
import { focusAreas } from '../data/portfolioData';

const iconMap = { Brain, Cpu, BarChart2, GitBranch, Server, Layers, Globe };

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};



export default function Focus() {
  return (
    <section
      id="focus"
      aria-label="Learning focus areas section"
      className="section-padding"
      style={{ borderTop: '1px solid var(--border)' }}
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
            Current Focus
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
              marginBottom: '0.75rem',
            }}
          >
            What I'm learning
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              marginBottom: '3rem',
              maxWidth: '500px',
            }}
          >
            Areas I'm actively exploring and building skills in right now.
          </motion.p>

          {/* Focus grid */}
          <motion.div
            variants={stagger}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
            }}
            className="focus-grid"
          >
            {focusAreas.map((area, i) => {
              const IconComponent = iconMap[area.icon];
              return (
                <motion.div
                  key={area.title}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    padding: '1.5rem',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    cursor: 'default',
                    transition: 'border-color 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '6px',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}>
                    {IconComponent && <IconComponent size={18} style={{ color: 'var(--accent)' }} />}
                  </div>
                  <h3 style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.4rem',
                  }}>
                    {area.title}
                  </h3>
                  <p style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                  }}>
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .focus-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .focus-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
