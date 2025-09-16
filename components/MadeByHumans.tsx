
import React, { useEffect, useRef } from "react";
const MadeByHumans = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateX = (-y * 6).toFixed(2);
      const rotateY = (x * 6).toFixed(2);
      el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    const onLeave = () => {
      el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg)`;
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);
  return <section id="made-by-humans" className="w-full bg-gradient-to-b from-pulse-950 to-pulse-900 text-white py-8 lg:py-12">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="sm:text-5xl font-playfair text-white italic font-thin text-6xl md:text-7xl">
            Imagined by Radiologists
          </h2>
        </div>
      </div>
    </section>;
};
export default MadeByHumans;
