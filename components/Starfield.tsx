import React, { useEffect, useRef } from "react";

interface StarfieldProps {
  density?: number; // Lower = more stars per area
}

const Starfield: React.FC<StarfieldProps> = ({ density = 8000 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let stars: { x: number; y: number; r: number; speed: number; tw: number; tp: number }[] = [];
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const hslVar = (name: string, alpha = 1) => {
      const root = getComputedStyle(document.documentElement);
      const val = root.getPropertyValue(name).trim(); // e.g. "220 84% 60%"
      if (val) return `hsl(${val} / ${alpha})`;
      return `hsla(0,0%,100%,${alpha})`;
    };

    const starColor = (a: number) => hslVar('--foreground', a);
    const glowColor = hslVar('--primary', 0.6);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const area = rect.width * rect.height;
      const target = Math.max(60, Math.min(250, Math.floor(area / density)));
      stars = new Array(target).fill(0).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: (Math.random() * 1.2 + 0.3) * dpr,
        speed: (Math.random() * 0.2 + 0.05) * dpr, // downward drift
        tw: Math.random() * 1.5 + 0.5, // twinkle speed factor
        tp: Math.random() * Math.PI * 2 // twinkle phase
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';

      for (const s of stars) {
        // Motion
        s.y += reducedMotion ? 0.02 * dpr : s.speed;
        if (s.y > canvas.height + 2) {
          s.y = -2;
          s.x = Math.random() * canvas.width;
        }

        // Twinkle
        const alpha = reducedMotion ? 0.7 : 0.5 + 0.5 * Math.sin(t * 0.001 * s.tw + s.tp);

        ctx.beginPath();
        ctx.fillStyle = starColor(Math.max(0.25, Math.min(1, alpha)));
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = reducedMotion ? 1.5 : 6;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      ctx.globalCompositeOperation = 'source-over';
    };

    const loop = (now: number) => {
      draw(now);
      animationId = requestAnimationFrame(loop);
    };

    resize();
    animationId = requestAnimationFrame(loop);
    const onResize = () => resize();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 z-10 pointer-events-none select-none"
    />
  );
};

export default Starfield;
