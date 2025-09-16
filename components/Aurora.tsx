import React from "react";

const Aurora: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-10">
      {/* Layer 1 */}
      <span
        className="absolute -top-1/3 -left-1/3 w-[140%] h-[140%] blur-3xl opacity-50 mix-blend-screen transform-gpu animate-[spin_70s_linear_infinite]"
        style={{
          background:
            "radial-gradient(45% 45% at 50% 50%, hsl(var(--primary) / 0.35) 0%, transparent 60%)",
        }}
      />
      {/* Layer 2 */}
      <span
        className="absolute -bottom-1/3 -right-1/3 w-[120%] h-[120%] blur-3xl opacity-45 mix-blend-screen transform-gpu animate-[spin_90s_linear_infinite]"
        style={{
          background:
            "radial-gradient(40% 40% at 50% 50%, hsl(var(--foreground) / 0.25) 0%, transparent 65%)",
        }}
      />
      {/* Layer 3 */}
      <span
        className="absolute top-1/4 left-1/3 w-[80%] h-[80%] blur-2xl opacity-40 mix-blend-screen transform-gpu animate-[spin_80s_linear_infinite]"
        style={{
          background:
            "radial-gradient(35% 35% at 50% 50%, hsl(var(--primary) / 0.25) 0%, transparent 70%)",
        }}
      />
      {/* Soft vignette for contrast */}
      <span
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 120%, transparent 0%, transparent 50%, hsl(var(--background)) 100%)",
        }}
      />
    </div>
  );
};

export default Aurora;
