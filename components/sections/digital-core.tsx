'use client';

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'motion/react';

export function DigitalCore() {
  const shouldReduceMotion = useReducedMotion();
  const animationEnabled = !shouldReduceMotion;
   const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });

  const rotateY = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    mouseX.set((x - 0.5) * 8);
    mouseY.set((y - 0.5) * -8);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }
  return (
    <motion.div
  className="relative aspect-square w-full max-w-[520px]"
  aria-hidden="true"
  onMouseMove={shouldReduceMotion ? undefined : handleMouseMove}
onMouseLeave={shouldReduceMotion ? undefined : handleMouseLeave}
  style={{
    rotateX,
    rotateY,
    transformPerspective: 1000,
  }}
>
      {/* Ambient atmosphere */}
      <div className="absolute inset-[5%] rounded-full bg-accent-primary/10 blur-[100px]" />

      <div className="absolute inset-[15%] rounded-full bg-accent-secondary/10 blur-[80px]" />

      {/* Outer orbital field */}
      <motion.div
        className="absolute inset-[7%] rounded-full border border-white/[0.06]"
        animate={animationEnabled ? { rotate: 360 } : undefined}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute inset-[13%] rounded-full border border-accent-primary/[0.12]"
        animate={
  animationEnabled
    ? { rotate: 360 }
    : undefined
}
        transition={{
          duration: 65,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Main orbital ring */}
      <motion.div
        className="absolute inset-[19%] rounded-full border border-white/[0.10]"
        animate={animationEnabled ? { rotate: 360 } : undefined}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary shadow-[0_0_24px_rgba(99,102,241,0.9)]" />
      </motion.div>

      {/* Secondary orbit */}
      <motion.div
        className="absolute inset-[25%] rotate-[25deg] rounded-full border border-accent-blue/[0.16]"
        animate={
  animationEnabled
    ? { rotate: 385 }
    : undefined
}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent-blue shadow-[0_0_20px_rgba(59,130,246,0.9)]" />
      </motion.div>

      {/* Glass shell */}
      <div className="absolute inset-[29%] rounded-full border border-white/[0.12] bg-white/[0.025] shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl" />

      {/* Inner energy field */}
      <motion.div
        className="absolute inset-[34%] rounded-full bg-gradient-to-br from-accent-blue/20 via-accent-primary/20 to-accent-secondary/20 blur-2xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.55, 0.8, 0.55],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Core */}
      <motion.div
        className="absolute inset-[38%] flex items-center justify-center rounded-full border border-accent-primary/30 bg-surface-elevated/80 shadow-[0_0_80px_rgba(99,102,241,0.2)] backdrop-blur-2xl"
        animate={{
          scale: [1, 1.025, 1],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          className="relative h-[42%] w-[42%] rounded-full bg-gradient-to-br from-accent-blue via-accent-primary to-accent-secondary shadow-[0_0_60px_rgba(99,102,241,0.5)]"
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="absolute inset-[25%] rounded-full bg-white/20 blur-md" />
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <motion.span
        className="absolute left-[19%] top-[31%] h-1 w-1 rounded-full bg-white/60"
        animate={{
          y: [0, -8, 0],
          opacity: [0.35, 0.8, 0.35],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.span
        className="absolute right-[18%] top-[25%] h-1.5 w-1.5 rounded-full bg-accent-blue/70"
        animate={{
          y: [0, 10, 0],
          opacity: [0.3, 0.75, 0.3],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.6,
        }}
      />

      <motion.span
        className="absolute bottom-[25%] left-[23%] h-1.5 w-1.5 rounded-full bg-accent-secondary/70"
        animate={{
          y: [0, -12, 0],
          x: [0, 5, 0],
          opacity: [0.25, 0.7, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <motion.span
        className="absolute bottom-[18%] right-[27%] h-1 w-1 rounded-full bg-white/50"
        animate={{
          y: [0, 7, 0],
          opacity: [0.2, 0.65, 0.2],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.4,
        }}
      />

      <motion.span
        className="absolute left-[35%] top-[13%] h-1 w-1 rounded-full bg-accent-primary/80"
        animate={{
          y: [0, -6, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4.6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.3,
        }}
      />
    </motion.div>
  );
}
