import { useEffect, useRef, useState } from "react";


export default function CountUp({ value }) {
  const match = value.match(/^([\d,]+)(.*)$/);
  const [display, setDisplay] = useState(match ? "0" + match[2] : value);
  const ref = useRef(null);

  useEffect(() => {
    if (!match) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const target = parseInt(match[1].replace(/,/g, ""), 10);
    const suffix = match[2] || "";
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);
        const duration = 1000;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(target * eased).toLocaleString() + suffix);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <span ref={ref}>{display}</span>;
}
