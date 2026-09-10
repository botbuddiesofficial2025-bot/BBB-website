import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const html = document.documentElement;
      const max = html.scrollHeight - html.clientHeight;
      const progress = max > 0 ? html.scrollTop / max : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-track" aria-hidden="true">
      <div ref={barRef} className="scroll-bar" />
    </div>
  );
}
