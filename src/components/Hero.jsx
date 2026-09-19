import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown, Code, Terminal, Camera } from 'lucide-react';

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
import { personal } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, delay },
  }),
};

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      aria-label="Hero section"
      className="grid-bg"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '64px',
        overflow: 'hidden',
      }}
    >
      <div className="section-container" style={{ width: '100%', position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '3rem',
          alignItems: 'center',
        }}
          className="hero-grid"
        >
          {/* ── Left: Main content ── */}
          <div>
            {/* Status pill */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.1}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.25rem 0.75rem',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                marginBottom: '2rem',
                background: 'transparent',
              }}
            >
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: 'var(--text-secondary)',
              }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-secondary)',
                letterSpacing: '0.08em',
              }}>
                OPEN TO INTERNSHIPS
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
              }}
            >
              {personal.name}
            </motion.h1>

            {/* Role */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.35}
              style={{ marginBottom: '0.35rem' }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                color: 'var(--accent)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>
                {personal.role}
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.45}
              style={{ marginBottom: '1.5rem' }}
            >
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
                fontWeight: 400,
                color: 'var(--text-secondary)',
                fontStyle: 'italic',
                letterSpacing: '0.01em',
              }}>
                {personal.tagline}
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.55}
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                maxWidth: '520px',
                marginBottom: '2.5rem',
              }}
            >
              {personal.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.65}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}
            >
              <button
                id="hero-view-projects-btn"
                onClick={scrollToProjects}
                className="btn-primary"
                aria-label="View my projects"
              >
                View Projects
                <ArrowRight size={15} />
              </button>
              <button
                id="hero-contact-btn"
                onClick={scrollToContact}
                className="btn-secondary"
                aria-label="Go to contact section"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.8}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                FIND ME ON
              </span>
              <div style={{ width: '2rem', height: '1px', background: 'var(--border)' }} />
              <a
                id="hero-github-link"
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  color: 'var(--text-secondary)', textDecoration: 'none',
                  fontSize: '0.825rem', fontWeight: 500,
                  transition: 'color 0.2s ease',
                  padding: '0.4rem 0.5rem',
                  borderRadius: '6px',
                  border: '1px solid var(--border)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                <GithubIcon />
                GitHub
              </a>
              <a
                id="hero-linkedin-link"
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  color: 'var(--text-secondary)', textDecoration: 'none',
                  fontSize: '0.825rem', fontWeight: 500,
                  transition: 'color 0.2s ease',
                  padding: '0.4rem 0.5rem',
                  borderRadius: '6px',
                  border: '1px solid var(--border)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                <LinkedinIcon />
                LinkedIn
              </a>
              <a
                id="hero-leetcode-link"
                href={personal.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode profile"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  color: 'var(--text-secondary)', textDecoration: 'none',
                  fontSize: '0.825rem', fontWeight: 500,
                  transition: 'color 0.2s ease',
                  padding: '0.4rem 0.5rem',
                  borderRadius: '6px',
                  border: '1px solid var(--border)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                <Code size={16} />
                LeetCode
              </a>
              <a
                id="hero-codeforces-link"
                href={personal.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Codeforces profile"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  color: 'var(--text-secondary)', textDecoration: 'none',
                  fontSize: '0.825rem', fontWeight: 500,
                  transition: 'color 0.2s ease',
                  padding: '0.4rem 0.5rem',
                  borderRadius: '6px',
                  border: '1px solid var(--border)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                <Terminal size={16} />
                Codeforces
              </a>
              <a
                id="hero-pexels-link"
                href={personal.pexels}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pexels profile"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  color: 'var(--text-secondary)', textDecoration: 'none',
                  fontSize: '0.825rem', fontWeight: 500,
                  transition: 'color 0.2s ease',
                  padding: '0.4rem 0.5rem',
                  borderRadius: '6px',
                  border: '1px solid var(--border)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                <Camera size={16} />
                Pexels
              </a>
            </motion.div>
          </div>

          {/* ── Right: Info card ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="hero-info-card"
          >
            <div style={{
              padding: '1.75rem',
              minWidth: '240px',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px'
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                color: 'var(--text-muted)', letterSpacing: '0.12em',
                textTransform: 'uppercase', marginBottom: '1.25rem',
              }}>
                STATUS.INFO
              </div>
              {[
                { label: 'STATUS', value: 'Student', accent: true },
                { label: 'FOCUS', value: 'Web Dev' },
                { label: 'BASED IN', value: 'Dhaka, BD' },
                { label: 'GOAL', value: 'Software Engineer' },
                { label: 'OPEN TO', value: 'Internships' },
              ].map(({ label, value, accent }) => (
                <div key={label} style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', paddingBottom: '0.75rem',
                  marginBottom: '0.75rem',
                  borderBottom: '1px solid var(--border)',
                }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
                    {label}
                  </span>
                  <span style={{ fontSize: '0.825rem', fontWeight: 500, color: accent ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={scrollDown}
        aria-label="Scroll to about section"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--text-muted)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          animation: 'bounce 2s infinite',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em' }}>SCROLL</span>
        <ChevronDown size={16} />
      </motion.button>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(5px); }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-info-card { display: none !important; }
        }
      `}</style>
    </section>
  );
}
