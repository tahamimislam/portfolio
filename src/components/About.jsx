import { motion } from 'framer-motion';
import { personal } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const quickFacts = [
  { label: 'University', value: 'United International University' },
  { label: 'Degree', value: 'B.Sc. in CSE' },
  { label: 'Batch', value: '2024 – Present' },
  { label: 'Location', value: 'Dhaka, Bangladesh' },
  { label: 'Focus', value: 'Full Stack & Backend' },
  { label: 'Status', value: 'Seeking Internships' },
];

export default function About() {
  return (
    <section id="about" aria-label="About section" className="section-padding">
      <div className="section-container">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section label */}
          <motion.div variants={fadeUp} className="section-label">
            About Me
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
              maxWidth: '700px',
            }}
          >
            Building at the intersection of{' '}
            <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
              intelligence
            </span>{' '}
            and code.
          </motion.h2>

          {/* Two-column layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start',
          }}
            className="about-grid"
          >
            {/* Bio */}
            <motion.div variants={fadeUp}>
              {personal.about.split('\n\n').map((para, i) => (
                <p key={i} style={{
                  fontSize: '0.975rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.85,
                  marginBottom: '1.25rem',
                }}>
                  {para.trim()}
                </p>
              ))}
            </motion.div>

            {/* Quick Facts */}
            <motion.div variants={fadeUp}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}>
                QUICK FACTS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {quickFacts.map(({ label, value }) => (
                  <div key={label} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    padding: '0.85rem 0',
                    borderBottom: '1px solid var(--border)',
                    gap: '1rem',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      flexShrink: 0,
                    }}>
                      {label}
                    </span>
                    <span style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                      fontWeight: 500,
                      textAlign: 'right',
                    }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
