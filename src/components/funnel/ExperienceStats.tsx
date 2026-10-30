import { useEffect, useRef, useState } from "react";

export const ExperienceStats = () => {
  const root = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) { setCount(10000); return; }
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1400, 1);
        setCount(Math.round(10000 * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: .25 });
    if (root.current) observer.observe(root.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, []);
  return (
    <div ref={root} className="experience-stats">
      <div><p className="experience-number" aria-label="10,000 plus, estimated"><span aria-hidden="true">{count.toLocaleString("en-US")}+</span></p><p>Videos edited <span className="estimate-tag">Estimated</span></p></div>
      <div><p className="experience-number">4+</p><p>Years in content & creative</p></div>
      <div><p className="experience-number experience-revenue">$10K–$100K</p><p>Monthly revenue reported by coaching clients</p></div>
      <p className="experience-source">Video total is a rough four-year estimate based on Marc’s reported 4,200+ Frame.io items this year, allowing for quieter periods. It is not an audited count of unique videos. Client revenue is self-reported business revenue, not revenue attributed solely to our creative.</p>
    </div>
  );
};
