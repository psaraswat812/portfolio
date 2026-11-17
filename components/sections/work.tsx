'use client';

import Link from 'next/link';
import { ArrowUpRight, GitFork } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { projectLinks } from '@/lib/projects';

const projects = [
  {
    number: '01',
    title: 'PhishGuard AI',
    category: 'AI / ML · Security',
    description:
      'An intelligent phishing detection platform that analyzes URLs, emails, and suspicious text to assess risk and explain why something may be dangerous.',
    technologies: ['FastAPI', 'Next.js', 'PostgreSQL', 'Redis', 'Docker'],
    href: projectLinks.phishguard.caseStudy,
    repository: projectLinks.phishguard.repository,
  },
  {
    number: '02',
    title: 'AI Resume Screener',
    category: 'AI / ML · Product',
    description:
      'An AI-powered resume analysis platform that evaluates resumes, predicts suitable roles, identifies skill gaps, and provides actionable improvement suggestions.',
    technologies: ['Next.js', 'FastAPI', 'SQLAlchemy', 'PostgreSQL'],
    href: projectLinks.resumeScreener.caseStudy,
    repository: projectLinks.resumeScreener.repository,
  },
];

export function Work() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="work"
      className="relative overflow-hidden border-t border-white/[0.04]"
    >
      {/* Ambient background */}
      <div
        className="bg-accent-secondary/[0.035] pointer-events-none absolute top-24 right-[-10rem] h-96 w-96 rounded-full blur-[120px]"
        aria-hidden="true"
      />

      <Container>
        {/* Section heading */}
        <motion.div
          className="max-w-3xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          <p className="text-accent-primary mb-4 text-sm font-medium tracking-[0.24em] uppercase">
            Selected Work
          </p>

          <h2 className="display-text text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            Things I&apos;ve built to solve real problems.
          </h2>

          <p className="text-text-secondary mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
            A selection of projects where I&apos;ve combined AI, software
            engineering, and product thinking to turn ideas into working
            systems.
          </p>
        </motion.div>

        {/* Featured project */}
        <motion.div
          className="mt-16"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: 'easeOut',
          }}
        >
          <div className="group">
            <div className="border-border-default bg-surface-elevated/50 hover:border-border-strong hover:bg-surface-elevated/60 relative overflow-hidden rounded-[2rem] border p-6 transition-all duration-700 hover:-translate-y-1 sm:p-8 lg:p-10">
              {/* Project atmosphere */}
              <div
                className="bg-accent-primary/[0.08] pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full blur-[90px] transition-transform duration-700 group-hover:scale-125"
                aria-hidden="true"
              />

              <div
                className="bg-accent-secondary/[0.05] pointer-events-none absolute bottom-[-8rem] left-1/3 h-64 w-64 rounded-full blur-[80px]"
                aria-hidden="true"
              />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                {/* Project information */}
                <div>
                  <div className="flex items-center gap-4">
                    <span className="text-accent-primary text-xs font-medium tracking-[0.2em]">
                      01
                    </span>

                    <span className="bg-border-strong h-px w-10" />

                    <span className="text-text-muted text-xs tracking-[0.18em] uppercase">
                      AI / ML · Security
                    </span>
                  </div>

                  <h3 className="text-text-primary mt-6 text-3xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl">
                    PhishGuard AI
                  </h3>

                  <p className="text-text-secondary mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
                    An intelligent phishing detection platform that analyzes
                    URLs, emails, and suspicious text to assess risk and explain
                    why something may be dangerous.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {projects[0].technologies.map((technology) => (
                      <span
                        key={technology}
                        className="text-text-secondary rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    <Link
                      href={projects[0].href}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(255,255,255,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated"
                      aria-label="View PhishGuard AI case study"
                    >
                      View case study
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>

                    <a
                      href={projects[0].repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-border-default text-text-primary hover:border-border-strong inline-flex items-center gap-2 rounded-full border bg-white/[0.02] px-5 py-3 text-sm font-medium backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated"
                      aria-label="Open PhishGuard AI GitHub repository in a new tab"
                    >
                      GitHub repository
                      <GitFork className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                {/* Project visual */}
                <div className="relative mx-auto w-full max-w-md">
                  <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30 p-4 shadow-[0_0_100px_rgba(99,102,241,0.08)] sm:p-5">
                    <div className="relative h-full overflow-hidden rounded-[1.25rem] border border-white/[0.06] bg-white/[0.015]">
                      {/* Grid */}
                      <div
                        className="absolute inset-0 opacity-[0.12]"
                        style={{
                          backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                          backgroundSize: '32px 32px',
                        }}
                        aria-hidden="true"
                      />

                      {/* Radial atmosphere */}
                      <div
                        className="bg-accent-primary/[0.06] absolute top-1/2 left-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px]"
                        aria-hidden="true"
                      />

                      {/* Outer orbit */}
                      <motion.div
                        className="border-accent-primary/15 absolute top-1/2 left-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border"
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : {
                                rotate: 360,
                              }
                        }
                        transition={{
                          duration: 24,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        aria-hidden="true"
                      />

                      {/* Inner orbit */}
                      <motion.div
                        className="border-accent-secondary/20 absolute top-1/2 left-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border"
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : {
                                rotate: -360,
                              }
                        }
                        transition={{
                          duration: 18,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        aria-hidden="true"
                      />

                      {/* Orbit particles */}
                      <motion.div
                        className="bg-accent-primary absolute top-[calc(50%-6.5rem)] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full shadow-[0_0_18px_rgba(99,102,241,0.8)]"
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : {
                                rotate: 360,
                              }
                        }
                        transition={{
                          duration: 24,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        style={{
                          transformOrigin: '0 6.5rem',
                        }}
                        aria-hidden="true"
                      />

                      <motion.div
                        className="bg-accent-secondary absolute top-[calc(50%-4.5rem)] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full shadow-[0_0_16px_rgba(168,85,247,0.7)]"
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : {
                                rotate: -360,
                              }
                        }
                        transition={{
                          duration: 18,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        style={{
                          transformOrigin: '0 4.5rem',
                        }}
                        aria-hidden="true"
                      />

                      {/* Core */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <motion.div
                          className="border-accent-primary/30 bg-accent-primary/[0.08] relative flex h-24 w-24 items-center justify-center rounded-[1.75rem] border shadow-[0_0_70px_rgba(99,102,241,0.16)]"
                          animate={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  scale: [1, 1.04, 1],
                                  boxShadow: [
                                    '0 0 45px rgba(99,102,241,0.12)',
                                    '0 0 75px rgba(99,102,241,0.22)',
                                    '0 0 45px rgba(99,102,241,0.12)',
                                  ],
                                }
                          }
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          <div className="text-center">
                            <span className="text-text-muted block text-xs tracking-[0.2em] uppercase">
                              Risk
                            </span>

                            <span className="text-text-primary mt-1 block text-2xl font-semibold tracking-tight">
                              AI
                            </span>
                          </div>
                        </motion.div>
                      </div>

                      {/* Status */}
                      <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-md">
                        <span className="bg-accent-primary h-1.5 w-1.5 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]" />

                        <span className="text-text-muted text-[10px] tracking-[0.18em] uppercase">
                          Detection Engine
                        </span>
                      </div>

                      {/* Bottom metric */}
                      <div className="absolute right-5 bottom-5 left-5 flex items-center justify-between rounded-2xl border border-white/[0.07] bg-black/30 px-4 py-3 backdrop-blur-md">
                        <div>
                          <span className="text-text-muted block text-[10px] tracking-[0.16em] uppercase">
                            Analysis
                          </span>

                          <span className="text-text-primary mt-1 block text-sm font-medium">
                            Multi-layer risk assessment
                          </span>
                        </div>

                        <span className="text-accent-primary text-xs">
                          ACTIVE
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Second project */}
        <motion.div
          className="mt-6"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: 'easeOut',
          }}
        >
          <div className="group">
            <article className="border-border-default bg-surface-elevated/35 hover:border-border-strong hover:bg-surface-elevated/60 relative overflow-hidden rounded-[1.75rem] border p-7 transition-all duration-500 hover:-translate-y-1 sm:p-8">
              {/* Ambient glow */}
              <div
                className="bg-accent-secondary/[0.045] pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full blur-[70px] transition-transform duration-700 group-hover:scale-125"
                aria-hidden="true"
              />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-accent-primary text-xs font-medium tracking-[0.2em]">
                      02
                    </span>

                    <span className="bg-border-strong h-px w-10" />

                    <span className="text-text-muted text-xs tracking-[0.18em] uppercase">
                      AI / ML · Product
                    </span>
                  </div>

                  <h3 className="text-text-primary mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                    AI Resume Screener
                  </h3>

                  <p className="text-text-secondary mt-4 max-w-3xl text-sm leading-6 sm:text-base sm:leading-7">
                    An AI-powered resume analysis platform that evaluates
                    resumes, predicts suitable roles, identifies skill gaps, and
                    provides actionable improvement suggestions.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {projects[1].technologies.map((technology) => (
                      <span
                        key={technology}
                        className="text-text-secondary rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={projects[1].href}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(255,255,255,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated"
                    aria-label="View AI Resume Screener case study"
                  >
                    View case study
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>

                  <a
                    href={projects[1].repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-border-default text-text-primary hover:border-border-strong inline-flex items-center gap-2 rounded-full border bg-white/[0.02] px-5 py-3 text-sm font-medium backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated"
                    aria-label="Open AI Resume Screener GitHub repository in a new tab"
                  >
                    GitHub repository
                    <GitFork className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </motion.div>

        {/* Future work indicator */}
        <motion.div
          className="mt-10 flex items-center gap-4"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
        >
          <span className="bg-border-default h-px flex-1" />

          <span className="text-text-muted text-xs tracking-[0.2em] uppercase">
            More high-value work in progress
          </span>

          <span className="bg-border-default h-px flex-1" />
        </motion.div>
      </Container>
    </Section>
  );
}
