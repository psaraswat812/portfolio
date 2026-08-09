export const motionConfig = {
  duration: {
    fast: 0.2,
    normal: 0.35,
    slow: 0.6,
    cinematic: 0.9,
  },

  ease: {
    standard: [0.22, 1, 0.36, 1],
    smooth: [0.16, 1, 0.3, 1],
    emphasized: [0.16, 1, 0.3, 1],
  },

  distance: {
    small: 8,
    medium: 20,
    large: 40,
  },
} as const;
