import { useState, useEffect, useRef } from 'react';

/**
 * useScrollReveal - Returns a ref and a boolean `isVisible`.
 * Attach the ref to any element; `isVisible` becomes true when
 * the element enters the viewport (used with Framer Motion whileInView).
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [threshold]);

  return { ref, isVisible };
}

export default useScrollReveal;
