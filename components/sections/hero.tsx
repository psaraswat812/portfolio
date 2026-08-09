'use client';

import Link from 'next/link';
import {
  motion,
  useReducedMotion,
} from 'motion/react';

import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { DigitalCore } from '@/components/sections/digital-core';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <Section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-12 pt-28 sm:pb-16 md:pt-32"
    >
      <div
        className="ambient-glow -left-32 top-24 h-72 w-72"
        aria-hidden="true"
      />

      <div
        className="ambient-glow -right-32 bottom-16 h-96 w-96"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Hero content */}
          <div className="max-w-3xl">
            <motion.p
              className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-accent-primary"
              initial={
  shouldReduceMotion
    ? false
    : { opacity: 0, y: 12 }
}
animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: 'easeOut',
              }}
            >
              AI / ML Engineer
            </motion.p>

            <motion.h1
              className="display-text text-balance text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
              initial={
  shouldReduceMotion
    ? false
    : { opacity: 0, y: 28 }
}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: 'easeOut',
              }}
            >
              Building digital experiences with AI.
            </motion.h1>

            <motion.p
              className="mt-7 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8"
              initial={
  shouldReduceMotion
    ? false
    : { opacity: 0, y: 20 }
}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.45,
                ease: 'easeOut',
              }}
            >
              I&apos;m Puranjay Saraswat, a computer science student focused on
              AI/ML, software engineering, and building useful digital
              products.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row"
              initial={
  shouldReduceMotion
    ? false
    : { opacity: 0, y: 18 }
}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.6,
                ease: 'easeOut',
              }}
            >
              <Link
                href="#work"
                className="inline-flex items-center justify-center rounded-full bg-text-primary px-6 py-3 text-sm font-semibold text-background transition-transform duration-300 hover:-translate-y-0.5"
              >
                Explore my work
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-border-default px-6 py-3 text-sm font-medium text-text-primary transition-all duration-300 hover:border-border-strong hover:bg-glass-background"
              >
                Let&apos;s connect
              </Link>
            </motion.div>
          </div>

          {/* Digital Core */}
          <motion.div
            className="relative mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[520px]"
          initial={
  shouldReduceMotion
    ? false
    : { opacity: 0, scale: 0.92, y: 20 }
}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: 'easeOut',
            }}
          >
            <DigitalCore />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
