'use client';
import { motion, useReducedMotion } from 'motion/react';

import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';

const principles = [
  {
    number: '01',
    title: 'Build',
    description:
      'I turn ideas into working software, focusing on useful products rather than isolated experiments.',
  },
  {
    number: '02',
    title: 'Learn',
    description:
      'I continuously explore AI, machine learning, software engineering, and the systems behind modern products.',
  },
  {
    number: '03',
    title: 'Iterate',
    description:
      'I believe strong products come from testing, debugging, improving, and learning from every version.',
  },
];

export function About() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <Section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.04]"
    >
      <div
        className="bg-accent-primary/[0.035] pointer-events-none absolute top-0 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full blur-[100px]"
        aria-hidden="true"
      />
      <Container>
        {/* Section heading */}
        <motion.div
          className="max-w-3xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          <p className="text-accent-primary mb-4 text-sm font-medium tracking-[0.24em] uppercase">
            About / Identity
          </p>

          <h2 className="display-text text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            I build at the intersection of AI, software, and digital products.
          </h2>

          <p className="text-text-secondary mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
            I&apos;m Puranjay Saraswat, a computer science student focused on
            AI/ML and software engineering. I enjoy turning technical ideas into
            products that are useful, understandable, and thoughtfully designed.
          </p>
        </motion.div>

        {/* Identity grid */}
        <motion.div
          className="mt-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: 'easeOut',
          }}
        >
          {/* Identity card */}
          <motion.div
            className="glass-panel relative overflow-hidden rounded-3xl p-7 sm:p-8"
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    y: -4,
                  }
            }
            transition={{
              duration: 0.35,
              ease: 'easeOut',
            }}
          >
            <motion.div
              className="bg-accent-primary/10 absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl"
              aria-hidden="true"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.08, 1],
                      opacity: [0.6, 0.9, 0.6],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <div className="relative">
              <p className="text-text-muted text-xs font-medium tracking-[0.2em] uppercase">
                Current focus
              </p>

              <div className="mt-8">
                <motion.div
                  className="text-text-primary flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-xl font-semibold shadow-[0_0_40px_rgba(99,102,241,0.12)]"
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          rotate: -3,
                          scale: 1.04,
                        }
                  }
                  transition={{
                    duration: 0.25,
                    ease: 'easeOut',
                  }}
                >
                  PS
                </motion.div>

                <h3 className="text-text-primary mt-7 text-2xl font-semibold tracking-tight">
                  Puranjay Saraswat
                </h3>

                <p className="text-text-secondary mt-2 text-sm">
                  Computer Science • AI/ML
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  'Artificial Intelligence',
                  'Machine Learning',
                  'Software Engineering',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-text-secondary rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Principles */}
          <div className="grid gap-4">
            {principles.map((principle, index) => (
  <motion.div
    key={principle.number}
    initial={
      shouldReduceMotion
        ? false
        : { opacity: 0, x: 24 }
    }
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{
      duration: 0.6,
      delay: shouldReduceMotion ? 0 : index * 0.12,
      ease: 'easeOut',
    }}
    whileHover={
      shouldReduceMotion
        ? undefined
        : {
            x: 5,
          }
    }
    className="group rounded-3xl border border-border-default bg-surface-elevated/40 p-6 transition-colors duration-500 hover:border-border-strong hover:bg-surface-elevated/70 sm:p-7"
  >
                <div className="flex items-start gap-5">
                  <span className="text-accent-primary pt-1 text-xs font-medium tracking-[0.18em]">
                    {principle.number}
                  </span>

                  <div>
                    <h3 className="text-text-primary text-xl font-semibold tracking-tight">
                      {principle.title}
                    </h3>

                    <p className="text-text-secondary mt-2 max-w-xl text-sm leading-6">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
