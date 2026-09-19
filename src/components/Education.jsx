import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Education() {
  return (
    <section
      id="education"
      aria-label="Education section"
      className="section-padding"
      style={{ borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}
    >
      <div className="section-container">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Label */}
          <motion.div variants={fadeUp} className="section-label">
            Education
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
            Academic background
          </motion.h2>

          {/* Education entries */}
          {education.map((edu) => (
            <motion.div
              key={edu.institution}
              variants={fadeUp}
              style={{
                display: 'grid',
                gridTemplateColumns: '4px 1fr',
                gap: '2rem',
              }}
            >
              {/* Timeline line */}
              <div style={{
                width: '3px',
                background: 'linear-gradient(to bottom, var(--accent), transparent)',
                borderRadius: '4px',
                marginTop: '0.4rem',
              }} />

              {/* Content card */}
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="glass-card"
                style={{ padding: '2rem' }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1rem',
                }}>
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      marginBottom: '0.5rem',
                    }}>
                      <GraduationCap size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                      <h3 style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.01em',
                      }}>
                        {edu.degree}
                      </h3>
                    </div>
                    <p style={{
                      fontSize: '0.975rem',
                      fontWeight: 500,
                      color: 'var(--accent)',
                      marginBottom: '0.35rem',
                    }}>
                      {edu.institution}
                    </p>
                  </div>

                  {/* Status badge */}
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    padding: '0.25rem 0.7rem',
                    borderRadius: '100px',
                    background: 'rgba(99,102,241,0.12)',
                    border: '1px solid rgba(99,102,241,0.3)',
                    color: 'var(--accent)',
                    flexShrink: 0,
                  }}>
                    {edu.status}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Calendar size={13} style={{ color: 'var(--text-muted)' }} />
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                    }}>
                      {edu.period}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MapPin size={13} style={{ color: 'var(--text-muted)' }} />
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                    }}>
                      {edu.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
