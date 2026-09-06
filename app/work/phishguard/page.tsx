'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';

import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';

function ArchitectureNode({
  label,
  title,
  description,
  shouldReduceMotion,
  featured = false,
}: {
  label: string;
  title: string;
  description: string;
  shouldReduceMotion: boolean | null;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className={[
        'mx-auto w-full max-w-xl rounded-2xl border p-5 transition-colors duration-500',
        featured
          ? 'border-accent-primary/25 bg-accent-primary/[0.055] shadow-[0_0_45px_rgba(99,102,241,0.08)]'
          : 'border-white/[0.07] bg-white/[0.02]',
      ].join(' ')}
    >
      <div className="flex items-start gap-4">
        <div
          className={[
            'mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
            featured
              ? 'border-accent-primary/25 bg-accent-primary/[0.08]'
              : 'border-white/[0.07] bg-white/[0.025]',
          ].join(' ')}
        >
          <span
            className={[
              'text-xs font-semibold',
              featured ? 'text-accent-primary' : 'text-text-muted',
            ].join(' ')}
          >
            {title === 'PostgreSQL' ? 'DB' : title.slice(0, 1)}
          </span>
        </div>

        <div>
          <span className="text-text-muted text-[9px] tracking-[0.18em] uppercase">
            {label}
          </span>

          <h3 className="text-text-primary mt-1 text-base font-medium">
            {title}
          </h3>

          <p className="text-text-secondary mt-2 text-sm leading-6">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
function ArchitectureConnector({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null;
}) {
  return (
    <div className="bg-border-default relative mx-auto h-12 w-px">
      {!shouldReduceMotion && (
        <motion.span
          className="bg-accent-primary absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full shadow-[0_0_16px_rgba(99,102,241,0.65)]"
          animate={{
            y: [0, 32, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
    </div>
  );
}
export default function PhishGuardPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="relative overflow-hidden">
      {/* Ambient background */}
      <div
        className="bg-accent-primary/[0.07] pointer-events-none absolute top-[-10rem] left-[-14rem] h-[32rem] w-[32rem] rounded-full blur-[140px]"
        aria-hidden="true"
      />

      <div
        className="bg-accent-secondary/[0.05] pointer-events-none absolute top-[28rem] right-[-12rem] h-[28rem] w-[28rem] rounded-full blur-[130px]"
        aria-hidden="true"
      />

      {/* Hero */}
      <Section className="relative pt-32 sm:pt-40 lg:pt-48">
        {/* AMBIENT LIGHTING */}
        <div
          className="bg-accent-primary/[0.055] pointer-events-none absolute top-[-18rem] left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-[120px]"
          aria-hidden="true"
        />

        <div
          className="bg-accent-primary/[0.035] pointer-events-none absolute right-[-12rem] bottom-[-16rem] -z-10 h-[30rem] w-[30rem] rounded-full blur-[110px]"
          aria-hidden="true"
        />
        <Container>
          <div className="grid gap-20 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            {/* Hero content */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
            >
              {/* <Link
                href="/#work"
                className="group text-text-muted hover:text-text-primary inline-flex items-center gap-3 text-sm transition-colors duration-300"
              >
                <span
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                  aria-hidden="true"
                >
                  ←
                </span>
                Back to selected work
              </Link> */}

              {/* <div className="mt-12 flex items-center gap-4">
                <span className="text-accent-primary text-xs font-medium tracking-[0.2em]">
                  01
                </span>

                <span className="bg-border-strong h-px w-10" />

                <span className="text-text-muted text-xs tracking-[0.18em] uppercase">
                  AI / ML · Security
                </span>
              </div> */}
              <p className="text-accent-primary mb-6 flex items-center gap-3 text-sm font-medium tracking-[0.22em] uppercase">
                <span
                  className="bg-accent-primary h-1.5 w-1.5 animate-pulse rounded-full"
                  aria-hidden="true"
                />
                AI Security Platform
              </p>

              <h1 className="display-text mt-7 max-w-3xl text-5xl leading-[0.98] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                PhishGuard AI
              </h1>

              <p className="text-text-secondary mt-7 max-w-2xl text-xl leading-8 sm:text-2xl sm:leading-9">
                An intelligent phishing detection platform designed to analyze
                suspicious URLs, emails, and text and turn complex signals into
                understandable risk assessments.
              </p>



              <div className="mt-12 flex flex-wrap items-center gap-4">
                {/* <a
                  href="#architecture"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Explore the system
                  <span aria-hidden="true">↓</span>
                </a> */}
                <a
                  href="#architecture"
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#000000',
                  }}
                  className="inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-medium shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(255,255,255,0.16)]"
                >
                  Explore the system
                  <span aria-hidden="true">↓</span>
                </a>

                <a
                  href="#engineering"
                  className="border-border-default text-text-primary hover:border-border-strong inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-medium bg-white/[0.02] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.05]"
                >
                  Engineering details
                </a>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                {['FastAPI', 'Next.js', 'PostgreSQL', 'Redis', 'Docker'].map(
                  (technology) => (
                    <span
                      key={technology}
                      className="text-text-secondary rounded-full border border-white/10 bg-white/[0.015] px-3 py-1.5 text-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-primary/30 hover:bg-accent-primary/[0.04] hover:text-white"
                    >
                      {technology}
                    </span>
                  ),
                )}
              </div>
            </motion.div>

            {/* System visual */}
            {/* System visual */}
            <motion.div
              initial={
                shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 20 }
              }
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: 'easeOut',
              }}
            >
              <div className="relative mx-auto w-full max-w-xl">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 p-3 shadow-[0_0_120px_rgba(99,102,241,0.1)] sm:p-4">
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-[#08080c]">
                    {/* Background grid */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.08]"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                      }}
                      aria-hidden="true"
                    />

                    {/* Ambient glow */}
                    <div
                      className="bg-accent-primary/[0.07] pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
                      aria-hidden="true"
                    />

                    {/* Header */}
                    <div className="relative flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="border-accent-primary/20 bg-accent-primary/[0.08] flex h-8 w-8 items-center justify-center rounded-lg border">
                          <span className="text-accent-primary text-xs font-semibold">
                            P
                          </span>
                        </div>

                        <div>
                          <p className="text-text-primary text-xs font-medium">
                            PhishGuard AI
                          </p>

                          <p className="text-text-muted text-[9px] tracking-[0.16em] uppercase">
                            Threat analysis
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5">
                        <span className="bg-accent-primary h-1.5 w-1.5 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]" />

                        <span className="text-text-muted text-[9px] tracking-[0.15em] uppercase">
                          Engine online
                        </span>
                      </div>
                    </div>

                    {/* Main analysis */}
                    <div className="relative px-5 py-7 sm:px-7 sm:py-9">
                      <div className="grid gap-6 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                        {/* Input */}
                        <motion.div
                          animate={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  y: [0, -3, 0],
                                }
                          }
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.025]"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-text-muted text-[9px] tracking-[0.16em] uppercase">
                              Input
                            </span>

                            <span className="text-text-muted rounded-full border border-white/[0.07] px-2 py-1 text-[8px] tracking-[0.12em] uppercase">
                              URL
                            </span>
                          </div>

                          <div className="mt-5 space-y-2">
                            <div className="h-2 w-full rounded-full bg-white/[0.06]" />
                            <div className="h-2 w-4/5 rounded-full bg-white/[0.05]" />
                            <div className="h-2 w-3/5 rounded-full bg-white/[0.04]" />
                          </div>
                        </motion.div>

                        {/* Processing core */}
                        <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
                          <motion.div
                            className="border-accent-primary/20 absolute inset-0 rounded-full border"
                            animate={
                              shouldReduceMotion ? undefined : { rotate: 360 }
                            }
                            transition={{
                              duration: 12,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                          />

                          <motion.div
                            className="border-accent-secondary/20 absolute inset-3 rounded-full border"
                            animate={
                              shouldReduceMotion ? undefined : { rotate: -360 }
                            }
                            transition={{
                              duration: 9,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                          />

                          <motion.div
                            className="border-accent-primary/30 bg-accent-primary/[0.08] relative flex h-14 w-14 items-center justify-center rounded-2xl border shadow-[0_0_45px_rgba(99,102,241,0.18)]"
                            animate={
                              shouldReduceMotion
                                ? undefined
                                : {
                                    scale: [1, 1.06, 1],
                                  }
                            }
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                          >
                            <span className="text-text-primary text-xs font-semibold">
                              AI
                            </span>
                          </motion.div>
                        </div>

                        {/* Result */}
                        <motion.div
                          animate={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  y: [0, 3, 0],
                                }
                          }
                          transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          className="border-accent-primary/20 bg-accent-primary/[0.045] rounded-2xl border p-4"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-text-muted text-[9px] tracking-[0.16em] uppercase">
                              Assessment
                            </span>

                            <span className="text-accent-primary text-[9px] font-medium tracking-[0.14em] uppercase">
                              Analyzed
                            </span>
                          </div>

                          <div className="mt-5">
                            <span className="text-text-primary block text-2xl font-semibold tracking-tight">
                              Risk
                            </span>

                            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                              <motion.div
                                className="bg-accent-primary h-full rounded-full"
                                initial={{ width: '0%' }}
                                animate={{
                                  width: shouldReduceMotion
                                    ? '68%'
                                    : ['45%', '68%', '58%'],
                                }}
                                transition={{
                                  duration: 3.5,
                                  repeat: Infinity,
                                  repeatType: 'reverse',
                                  ease: 'easeInOut',
                                }}
                              />
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Signal cards */}
                      <div className="mt-7 grid grid-cols-3 gap-2">
                        {[
                          ['URL', 'Features'],
                          ['NLP', 'Signals'],
                          ['Threat', 'Intel'],
                        ].map(([label, value]) => (
                          <div
                            key={label}
                            className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-3"
                          >
                            <span className="text-text-muted block text-[9px] tracking-[0.14em] uppercase">
                              {label}
                            </span>

                            <span className="text-text-secondary mt-1 block text-[10px]">
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer status */}
                    <div className="relative flex items-center justify-between border-t border-white/[0.07] px-5 py-3.5">
                      <span className="text-text-muted text-[9px] tracking-[0.15em] uppercase">
                        Multi-layer risk assessment
                      </span>

                      <span className="text-accent-primary flex items-center gap-2 text-[9px] tracking-[0.14em] uppercase">
                        <span className="bg-accent-primary h-1.5 w-1.5 rounded-full" />
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Problem */}
      <Section
        id="problem"
        className="relative isolate overflow-hidden border-t border-white/[0.04]"
      >
        {/* AMBIENT LIGHTING */}
        <div
          className="bg-accent-primary/[0.055] pointer-events-none absolute top-[-18rem] left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-[120px]"
          aria-hidden="true"
        />

        <div
          className="bg-accent-primary/[0.035] pointer-events-none absolute right-[-12rem] bottom-[-16rem] -z-10 h-[30rem] w-[30rem] rounded-full blur-[110px]"
          aria-hidden="true"
        />

        <Container>
          <div className="w-full">
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 24,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.65,
                ease: 'easeOut',
              }}
            >
              <p className="text-accent-primary flex items-center gap-3 text-sm font-medium tracking-[0.22em] uppercase">
                <span
                  className="bg-accent-primary h-1.5 w-1.5 animate-pulse rounded-full"
                  aria-hidden="true"
                />
                01 · The Problem
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                Phishing is not always obvious.
              </h2>

              <p className="text-text-secondary mt-6 max-w-3xl text-lg leading-8">
                Suspicious messages can combine familiar language, trusted
                branding, misleading links, and carefully crafted social
                engineering signals. The goal of PhishGuard AI is to turn those
                signals into a structured assessment instead of making the user
                rely on intuition alone.
              </p>
            </motion.div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                number: '01',
                label: 'SIGNAL',
                title: 'Familiar language',
                text: 'Phishing messages can use language that appears legitimate, making malicious intent harder to recognize from wording alone.',
              },
              {
                number: '02',
                label: 'DECEPTION',
                title: 'Trusted appearance',
                text: 'Branding, familiar names, and carefully constructed messages can make suspicious communication appear credible.',
              },
              {
                number: '03',
                label: 'RISK',
                title: 'Hidden intent',
                text: 'Misleading links and social-engineering signals may only become obvious when multiple characteristics are considered together.',
              },
            ].map((item, index) => (
              <motion.article
                key={item.number}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 20,
                      }
                }
                whileInView={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group bg-background relative overflow-hidden rounded-[2rem] border border-white/10 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.025] md:p-8"
              >
                <div
                  className="bg-accent-primary/[0.06] pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="border-accent-primary/20 bg-accent-primary/[0.05] text-accent-primary flex h-9 w-9 items-center justify-center rounded-xl border text-xs font-semibold">
                      {item.number}
                    </span>

                    <span className="text-text-secondary rounded-full border border-white/10 px-3 py-1.5 text-[10px] tracking-[0.12em] uppercase transition-colors duration-300 group-hover:border-white/20 group-hover:text-white">
                      {item.label}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-text-secondary mt-4 leading-7">
                    {item.text}
                  </p>

                  <div className="group-hover:bg-accent-primary/30 mt-8 h-px w-full bg-white/10 transition-all duration-500" />
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            whileInView={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="border-accent-primary/15 bg-accent-primary/[0.025] mt-6 rounded-[2rem] border p-7 md:p-8"
          >
            <span className="text-accent-primary text-xs font-medium tracking-[0.18em] uppercase">
              Core problem
            </span>

            <div className="mt-4 grid gap-5 md:grid-cols-[0.75fr_1.25fr] md:items-center">
              <h3 className="text-2xl font-semibold tracking-tight">
                A score alone is not enough.
              </h3>

              <p className="text-text-secondary leading-7">
                Users need to understand not only whether an input is risky, but
                which signals contributed to that assessment and what action
                should follow.
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Approach */}
      <Section
        id="approach"
        className="relative isolate overflow-hidden border-t border-white/[0.04]"
      >
        {/* AMBIENT LIGHTING */}
        <div
          className="bg-accent-primary/[0.055] pointer-events-none absolute top-[-18rem] left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-[120px]"
          aria-hidden="true"
        />

        <div
          className="bg-accent-primary/[0.035] pointer-events-none absolute right-[-12rem] bottom-[-16rem] h-[30rem] w-[30rem] rounded-full blur-[110px]"
          aria-hidden="true"
        />

        <Container>
          <div className="w-full">
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 24,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.65,
                ease: 'easeOut',
              }}
            >
              <p className="text-accent-primary flex items-center gap-3 text-sm font-medium tracking-[0.22em] uppercase">
                <span
                  className="bg-accent-primary h-1.5 w-1.5 animate-pulse rounded-full"
                  aria-hidden="true"
                />
                02 · The Approach
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                Multiple signals. One understandable decision.
              </h2>

              <p className="text-text-secondary mt-6 max-w-3xl text-lg leading-8">
                Instead of treating phishing detection as a single black-box
                prediction, the system combines different analysis layers and
                converts them into a final risk assessment with explainable
                factors.
              </p>
            </motion.div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {[
              {
                number: '01',
                title: 'Analyze the input',
                label: 'INPUT',
                text: 'The system accepts suspicious URLs, emails, and text as the starting point for analysis.',
              },
              {
                number: '02',
                title: 'Extract meaningful signals',
                label: 'FEATURES',
                text: 'URL characteristics, text patterns, and contextual indicators are transformed into structured signals.',
              },
              {
                number: '03',
                title: 'Combine evidence',
                label: 'ASSESSMENT',
                text: 'Multiple analysis outputs contribute evidence rather than relying on one isolated prediction.',
              },
              {
                number: '04',
                title: 'Explain the result',
                label: 'OUTPUT',
                text: 'The final assessment communicates risk factors in a form that people can understand and act upon.',
              },
            ].map((item, index) => (
              <motion.article
                key={item.number}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 20,
                      }
                }
                whileInView={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group bg-background relative overflow-hidden rounded-[2rem] border border-white/10 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.025] md:p-8"
              >
                <div
                  className="bg-accent-primary/[0.055] pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <span className="border-accent-primary/20 bg-accent-primary/[0.05] text-accent-primary flex h-9 w-9 items-center justify-center rounded-xl border text-xs font-semibold">
                      {item.number}
                    </span>

                    <span className="text-text-secondary rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-medium tracking-[0.12em] uppercase transition-colors duration-300 group-hover:border-white/20 group-hover:text-white">
                      {item.label}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-text-secondary mt-4 leading-7">
                    {item.text}
                  </p>

                  <div className="group-hover:bg-accent-primary/30 mt-8 h-px w-full bg-white/10 transition-colors duration-500" />
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            whileInView={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="border-accent-primary/20 bg-accent-primary/[0.035] mt-6 rounded-[2rem] border p-7 md:p-8"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-accent-primary text-xs font-medium tracking-[0.18em] uppercase">
                  Decision model
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Detection becomes understandable.
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {[
                  'Input',
                  'Features',
                  'Prediction',
                  'Threat signals',
                  'Risk',
                  'Explanation',
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-text-secondary hover:border-accent-primary/20 hover:bg-accent-primary/[0.05] rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs transition-all duration-300 hover:text-white">
                      {item}
                    </span>

                    {index < 5 && (
                      <span className="text-accent-primary" aria-hidden="true">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
      {/* Architecture */}
      <Section
        id="architecture"
        className="relative overflow-hidden border-t border-white/[0.04]"
      >
        {/* AMBIENT LIGHTING */}
        <div
          className="bg-accent-primary/[0.045] pointer-events-none absolute top-[-16rem] right-[-12rem] -z-10 h-[38rem] w-[38rem] rounded-full blur-[120px]"
          aria-hidden="true"
        />

        <div
          className="bg-accent-primary/[0.025] pointer-events-none absolute bottom-[-18rem] left-[-14rem] -z-10 h-[34rem] w-[34rem] rounded-full blur-[120px]"
          aria-hidden="true"
        />

        <Container>
          {/* SECTION HEADER */}
          <div className="relative">
            <div className="flex flex-col gap-8">
              {/* Section label */}
              <div>
                <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
                  03 · System Architecture
                </p>

                <p className="text-text-muted mt-4 max-w-sm text-sm leading-6">
                  A layered pipeline that transforms raw inputs into an
                  explainable phishing risk assessment.
                </p>
              </div>

              {/* Heading */}
              <div className="max-w-5xl">
                <h2 className="text-text-primary text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  From input to risk assessment.
                </h2>

                <p className="text-text-secondary mt-6 max-w-4xl text-base leading-8 sm:text-lg">
                  PhishGuard separates the user interface, API layer, analysis
                  engines, risk assessment, and persistence layer so each part
                  of the system has a clear responsibility.
                </p>
              </div>
            </div>
          </div>

          {/* ARCHITECTURE SYSTEM */}
          <div className="group border-border-default bg-surface-elevated/20 hover:bg-surface-elevated/25 relative mt-14 overflow-hidden rounded-[2rem] border p-5 transition-all duration-500 hover:border-white/[0.14] sm:p-8 lg:p-10">
            {/* INTERNAL AMBIENT GLOW */}
            <div
              className="bg-accent-primary/[0.035] group-hover:bg-accent-primary/[0.055] pointer-events-none absolute top-[-12rem] left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full blur-[100px] transition-opacity duration-700"
              aria-hidden="true"
            />

            <div className="relative">
              {/* USER INPUT */}
              <div className="flex justify-center">
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={
                    shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  className="group/node w-full max-w-2xl rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.035] hover:shadow-[0_20px_60px_rgba(99,102,241,0.08)] sm:p-7"
                >
                  <span className="text-text-muted text-[10px] tracking-[0.18em] uppercase">
                    Entry point
                  </span>

                  <h3 className="text-text-primary mt-3 text-xl font-medium">
                    User Input
                  </h3>

                  <div className="mt-5 flex justify-center gap-2">
                    {['URL', 'Email', 'Text'].map((input) => (
                      <span
                        key={input}
                        className="text-text-secondary rounded-full border border-white/[0.07] bg-white/[0.015] px-3.5 py-1.5 text-[10px] transition-all duration-300 group-hover/node:border-white/[0.12]"
                      >
                        {input}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* CONNECTOR */}
              <div className="bg-border-default relative mx-auto h-14 w-px">
                {!shouldReduceMotion && (
                  <motion.span
                    className="bg-accent-primary absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full shadow-[0_0_18px_rgba(99,102,241,0.7)]"
                    animate={{
                      y: [0, 38, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                )}
              </div>

              {/* FRONTEND */}
              <ArchitectureNode
                label="Application layer"
                title="Next.js"
                description="Frontend interface for submitting inputs and presenting analysis results."
                shouldReduceMotion={shouldReduceMotion}
              />

              <ArchitectureConnector shouldReduceMotion={shouldReduceMotion} />

              {/* API */}
              <ArchitectureNode
                label="API layer"
                title="FastAPI"
                description="Receives requests, coordinates analysis, and returns structured risk assessments."
                shouldReduceMotion={shouldReduceMotion}
              />

              <ArchitectureConnector shouldReduceMotion={shouldReduceMotion} />

              {/* ANALYSIS ENGINES */}
              <div>
                <div className="mb-5 text-center">
                  <span className="text-text-muted text-[10px] tracking-[0.18em] uppercase">
                    Analysis layer
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    {
                      title: 'URL Analysis',
                      description: 'Extracts signals from suspicious links.',
                    },
                    {
                      title: 'NLP Analysis',
                      description: 'Evaluates language and message patterns.',
                    },
                    {
                      title: 'Threat Intel',
                      description: 'Adds contextual threat signals.',
                    },
                  ].map((engine, index) => (
                    <motion.div
                      key={engine.title}
                      initial={
                        shouldReduceMotion ? false : { opacity: 0, y: 18 }
                      }
                      whileInView={
                        shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                      }
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                        ease: 'easeOut',
                      }}
                      className="group/engine relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.035] hover:shadow-[0_20px_60px_rgba(99,102,241,0.06)]"
                    >
                      {/* Card glow */}
                      <div
                        className="bg-accent-primary/[0.06] pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover/engine:opacity-100"
                        aria-hidden="true"
                      />

                      <div className="relative">
                        <div className="flex items-center justify-between">
                          <span className="text-accent-primary text-[9px] tracking-[0.15em] uppercase">
                            0{index + 1}
                          </span>

                          <span className="text-text-muted text-[9px] tracking-[0.12em] uppercase">
                            Analysis
                          </span>
                        </div>

                        <h3 className="text-text-primary mt-6 text-base font-medium">
                          {engine.title}
                        </h3>

                        <p className="text-text-muted mt-3 text-sm leading-6">
                          {engine.description}
                        </p>

                        <div className="group-hover/engine:bg-accent-primary/20 mt-6 h-px w-full bg-white/[0.07] transition-colors duration-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <ArchitectureConnector shouldReduceMotion={shouldReduceMotion} />

              {/* RISK ASSESSMENT */}
              <ArchitectureNode
                label="Decision layer"
                title="Risk Assessment"
                description="Combines analysis signals into a structured risk decision with explainable factors."
                shouldReduceMotion={shouldReduceMotion}
                featured
              />

              <ArchitectureConnector shouldReduceMotion={shouldReduceMotion} />

              {/* PERSISTENCE */}
              <ArchitectureNode
                label="Persistence layer"
                title="PostgreSQL"
                description="Stores scan history, audit information, and system records."
                shouldReduceMotion={shouldReduceMotion}
              />
            </div>
          </div>
        </Container>
      </Section>
      {/* How PhishGuard Thinks */}
      <Section id="detection" className="relative border-t border-white/[0.04]">
        {/* AMBIENT LIGHTING */}
        <div
          className="bg-accent-primary/[0.055] pointer-events-none absolute top-[-18rem] left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-[120px]"
          aria-hidden="true"
        />

        <div
          className="bg-accent-primary/[0.035] pointer-events-none absolute right-[-12rem] bottom-[-16rem] -z-10 h-[30rem] w-[30rem] rounded-full blur-[110px]"
          aria-hidden="true"
        />

        <Container>
          {/* FULL WIDTH SECTION CONTENT */}
          <div className="w-full">
            {/* Section label */}
            <div>
              <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
                04 · Detection Pipeline
              </p>

              <p className="text-text-muted mt-4 max-w-xl text-sm leading-6 sm:text-base">
                The system turns raw input into a structured and explainable
                assessment through multiple analysis stages.
              </p>
            </div>

            {/* Section heading */}
            <div className="mt-10 sm:mt-12">
              <h2 className="text-text-primary max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                How PhishGuard thinks.
              </h2>

              <p className="text-text-secondary mt-6 max-w-4xl text-base leading-8 sm:text-lg">
                Instead of relying on a single signal, PhishGuard evaluates
                different characteristics of an input before producing a final
                risk assessment.
              </p>
            </div>

            {/* Detection stages */}
            <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2">
              {[
                {
                  number: '01',
                  title: 'Input',
                  label: 'Raw signal',
                  description:
                    'A suspicious URL, email, or text enters the detection pipeline.',
                  details: ['URL', 'Email', 'Text'],
                },
                {
                  number: '02',
                  title: 'Feature Extraction',
                  label: 'Signal discovery',
                  description:
                    'Relevant characteristics are extracted so the system can reason about the input.',
                  details: ['URL features', 'Text patterns', 'Context'],
                },
                {
                  number: '03',
                  title: 'Model Prediction',
                  label: 'ML inference',
                  description:
                    'Machine-learning models evaluate the extracted signals and produce prediction scores.',
                  details: ['Prediction', 'Probability', 'Model output'],
                },
                {
                  number: '04',
                  title: 'Threat Signals',
                  label: 'Context',
                  description:
                    'Additional threat information contributes another layer of evidence to the assessment.',
                  details: [
                    'Threat intelligence',
                    'Known signals',
                    'Risk factors',
                  ],
                },
                {
                  number: '05',
                  title: 'Risk Assessment',
                  label: 'Decision layer',
                  description:
                    'The available signals are combined into a structured risk decision.',
                  details: ['Risk score', 'Risk level', 'Confidence'],
                },
                {
                  number: '06',
                  title: 'Explainable Result',
                  label: 'Human-readable output',
                  description:
                    'The result is presented with understandable factors instead of exposing only a prediction.',
                  details: [
                    'Risk factors',
                    'Explanation',
                    'Recommended action',
                  ],
                },
              ].map((stage, index) => (
                <motion.div
                  key={stage.number}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={
                    shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                    ease: 'easeOut',
                  }}
                  className="group hover:border-accent-primary/20 relative flex min-h-[18rem] flex-col overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.035] sm:p-8"
                >
                  {/* Subtle hover glow */}
                  <div
                    className="bg-accent-primary/[0.045] pointer-events-none absolute top-[-8rem] right-[-8rem] h-40 w-40 rounded-full opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  {/* Top row */}
                  <div className="relative flex items-start justify-between gap-4">
                    {/* Number */}
                    <div className="border-accent-primary/15 bg-accent-primary/[0.055] flex h-12 w-12 shrink-0 items-center justify-center rounded-full border">
                      <span className="text-accent-primary text-xs font-semibold">
                        {stage.number}
                      </span>
                    </div>

                    {/* Category */}
                    <span className="text-text-muted group-hover:border-accent-primary/15 group-hover:text-text-secondary rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[9px] tracking-[0.16em] uppercase transition-colors duration-300">
                      {stage.label}
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="relative mt-10">
                    <h3 className="text-text-primary text-xl font-medium tracking-tight sm:text-2xl">
                      {stage.title}
                    </h3>

                    <p className="text-text-secondary mt-4 max-w-xl text-sm leading-7 sm:text-base">
                      {stage.description}
                    </p>
                  </div>

                  {/* Bottom divider */}
                  <div className="mt-auto pt-8">
                    <div className="border-t border-white/[0.07] pt-5">
                      <div className="flex flex-wrap gap-2">
                        {stage.details.map((detail) => (
                          <span
                            key={detail}
                            className="text-text-muted group-hover:border-accent-primary/15 group-hover:text-text-secondary rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[9px] transition-all duration-300"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover accent line */}
                  <div className="bg-accent-primary absolute bottom-0 left-8 h-px w-0 opacity-0 transition-all duration-500 group-hover:w-[calc(100%-4rem)] group-hover:opacity-70" />
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      {/* Engineering Stack */}
      <Section
        id="engineering"
        className="relative border-t border-white/[0.04]"
      >
        {/* AMBIENT LIGHTING */}
        <div
          className="bg-accent-primary/[0.055] pointer-events-none absolute top-[-18rem] left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-[120px]"
          aria-hidden="true"
        />

        <div
          className="bg-accent-primary/[0.035] pointer-events-none absolute right-[-12rem] bottom-[-16rem] -z-10 h-[30rem] w-[30rem] rounded-full blur-[110px]"
          aria-hidden="true"
        />

        <Container>
          {/* FULL WIDTH */}
          <div className="w-full">
            {/* Section label */}
            <div>
              <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
                05 · Engineering
              </p>

              <p className="text-text-muted mt-4 max-w-xl text-sm leading-6 sm:text-base">
                Every technology in the stack has a specific responsibility
                inside the system.
              </p>
            </div>

            {/* Section heading */}
            <div className="mt-10 sm:mt-12">
              <h2 className="text-text-primary max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Built as a real system.
              </h2>

              <p className="text-text-secondary mt-6 max-w-5xl text-base leading-8 sm:text-lg">
                The stack is designed around separation of concerns: the
                frontend handles interaction, the API coordinates the system,
                the ML layer performs detection, and infrastructure keeps
                everything reliable and deployable.
              </p>
            </div>

            {/* Technology cards */}
            <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2">
              {[
                {
                  number: '01',
                  technology: 'Next.js',
                  category: 'Application',
                  reason:
                    'Provides the interactive interface for submitting inputs, viewing results, and navigating scan history.',
                  tags: ['React', 'TypeScript', 'UI'],
                },
                {
                  number: '02',
                  technology: 'FastAPI',
                  category: 'Backend API',
                  reason:
                    'Acts as the API layer that receives requests, coordinates services, and returns structured responses.',
                  tags: ['Python', 'REST', 'API'],
                },
                {
                  number: '03',
                  technology: 'Python + ML',
                  category: 'Detection',
                  reason:
                    'Handles feature extraction, model inference, and the intelligence behind phishing risk detection.',
                  tags: ['NLP', 'Features', 'Inference'],
                },
                {
                  number: '04',
                  technology: 'PostgreSQL',
                  category: 'Persistence',
                  reason:
                    'Stores scan history, audit information, users, and persistent application data.',
                  tags: ['SQL', 'History', 'Audit'],
                },
                {
                  number: '05',
                  technology: 'Redis',
                  category: 'Processing',
                  reason:
                    'Supports queued and asynchronous workloads so heavier operations do not block the main request flow.',
                  tags: ['Queue', 'Async', 'Workers'],
                },
                {
                  number: '06',
                  technology: 'Docker',
                  category: 'Infrastructure',
                  reason:
                    'Packages the application and its services into reproducible environments for deployment.',
                  tags: ['Containers', 'Deploy', 'Isolation'],
                },
              ].map((item, index) => (
                <motion.article
                  key={item.technology}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 24,
                        }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                    ease: 'easeOut',
                  }}
                  className="group hover:border-accent-primary/20 relative flex min-h-[20rem] flex-col overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.035] sm:p-8"
                >
                  {/* Hover ambient glow */}
                  <div
                    className="bg-accent-primary/[0.055] pointer-events-none absolute top-[-8rem] right-[-8rem] h-48 w-48 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="relative flex h-full flex-col">
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-6">
                      {/* Number + technology */}
                      <div className="flex items-center gap-4">
                        <div className="border-accent-primary/15 bg-accent-primary/[0.055] flex h-12 w-12 shrink-0 items-center justify-center rounded-full border">
                          <span className="text-accent-primary text-xs font-semibold">
                            {item.number}
                          </span>
                        </div>

                        <div>
                          <span className="text-text-muted text-[9px] tracking-[0.18em] uppercase">
                            {item.category}
                          </span>

                          <h3 className="text-text-primary mt-1 text-xl font-medium tracking-tight sm:text-2xl">
                            {item.technology}
                          </h3>
                        </div>
                      </div>

                      {/* Stack label */}
                      <span className="text-text-muted group-hover:text-accent-primary hidden text-[9px] tracking-[0.16em] uppercase transition-colors duration-300 sm:block">
                        Stack
                      </span>
                    </div>

                    {/* Why it exists */}
                    <div className="mt-10">
                      <span className="text-text-muted text-[9px] tracking-[0.18em] uppercase">
                        Why it exists
                      </span>

                      <p className="text-text-secondary mt-3 max-w-2xl text-sm leading-7 sm:text-base">
                        {item.reason}
                      </p>
                    </div>

                    {/* Bottom area */}
                    <div className="mt-auto pt-8">
                      <div className="border-t border-white/[0.07] pt-5">
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-text-muted group-hover:border-accent-primary/15 group-hover:text-text-secondary rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[9px] transition-all duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover accent line */}
                  <div className="bg-accent-primary absolute bottom-0 left-8 h-px w-0 opacity-0 transition-all duration-500 group-hover:w-[calc(100%-4rem)] group-hover:opacity-70" />
                </motion.article>
              ))}
            </div>

            {/* Architecture principle */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 24,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: 'easeOut',
              }}
              className="group border-accent-primary/10 bg-accent-primary/[0.025] hover:border-accent-primary/20 hover:bg-accent-primary/[0.035] relative mt-5 overflow-hidden rounded-[2rem] border p-6 transition-all duration-500 sm:p-8"
            >
              {/* Ambient glow */}
              <div
                className="bg-accent-primary/[0.045] pointer-events-none absolute top-[-8rem] right-[-8rem] h-48 w-48 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-3xl">
                  <span className="text-accent-primary text-[9px] tracking-[0.18em] uppercase">
                    Design principle
                  </span>

                  <p className="text-text-secondary mt-3 text-sm leading-7 sm:text-base">
                    Keep responsibilities isolated so individual services can
                    evolve without coupling the entire application.
                  </p>
                </div>

                <div className="border-accent-primary/15 bg-accent-primary/[0.05] group-hover:border-accent-primary/25 shrink-0 rounded-full border px-4 py-2.5 transition-all duration-300">
                  <span className="text-accent-primary text-[9px] tracking-[0.16em] uppercase">
                    Modular architecture
                  </span>
                </div>
              </div>

              {/* Hover accent line */}
              <div className="bg-accent-primary absolute bottom-0 left-8 h-px w-0 opacity-0 transition-all duration-500 group-hover:w-[calc(100%-4rem)] group-hover:opacity-70" />
            </motion.div>
          </div>
        </Container>
      </Section>
      {/* Model Evaluation */}
      <Section
        id="evaluation"
        className="relative border-t border-white/[0.04]"
      >
        {/* AMBIENT LIGHTING */}
        <div
          className="bg-accent-primary/[0.055] pointer-events-none absolute top-[-18rem] left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-[120px]"
          aria-hidden="true"
        />

        <div
          className="bg-accent-primary/[0.035] pointer-events-none absolute right-[-12rem] bottom-[-16rem] -z-10 h-[30rem] w-[30rem] rounded-full blur-[110px]"
          aria-hidden="true"
        />

        <Container>
          {/* SECTION INTRO */}
          <div>
            <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
              06 · Evaluation
            </p>

            <p className="text-text-muted mt-4 max-w-xl text-sm leading-6">
              Detection quality is evaluated using classification metrics
              together with inference performance.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="mt-12">
            <h2 className="text-text-primary text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Measure the model, not the hype.
            </h2>

            <p className="text-text-secondary mt-6 max-w-4xl text-base leading-8 sm:text-lg">
              A phishing detector cannot be judged by accuracy alone. PhishGuard
              is evaluated across precision, recall, F1 score, and inference
              latency to understand both detection quality and practical
              performance.
            </p>

            {/* METRICS */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  metric: 'Precision',
                  symbol: 'P',
                  description:
                    'Measures how many inputs predicted as phishing were actually phishing.',
                  focus: 'False positives',
                },
                {
                  metric: 'Recall',
                  symbol: 'R',
                  description:
                    'Measures how effectively the system identifies phishing inputs that are actually present.',
                  focus: 'False negatives',
                },
                {
                  metric: 'F1 Score',
                  symbol: 'F1',
                  description:
                    'Balances precision and recall into a single evaluation measure.',
                  focus: 'Overall balance',
                },
                {
                  metric: 'Latency',
                  symbol: 'ms',
                  description:
                    'Measures how quickly the system can process an input and return an assessment.',
                  focus: 'Runtime performance',
                },
              ].map((item, index) => (
                <motion.article
                  key={item.metric}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 18,
                        }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="group hover:border-accent-primary/20 relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.035]"
                >
                  {/* CARD AMBIENT GLOW */}
                  <div
                    className="bg-accent-primary/[0.045] pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-text-muted text-[9px] tracking-[0.18em] uppercase">
                          Metric
                        </span>

                        <h3 className="text-text-primary mt-2 text-lg font-medium">
                          {item.metric}
                        </h3>
                      </div>

                      <div className="border-accent-primary/15 bg-accent-primary/[0.055] flex h-10 min-w-10 items-center justify-center rounded-xl border px-2">
                        <span className="text-accent-primary text-xs font-semibold">
                          {item.symbol}
                        </span>
                      </div>
                    </div>

                    <p className="text-text-secondary mt-5 text-sm leading-6">
                      {item.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
                      <span className="text-text-muted text-[9px] tracking-[0.16em] uppercase">
                        Evaluation focus
                      </span>

                      <span className="text-text-secondary group-hover:text-accent-primary text-[10px] transition-colors duration-300">
                        {item.focus}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* MODEL COMPARISON */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 18,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.55,
                delay: 0.12,
              }}
              className="mt-5 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]"
            >
              <div className="border-b border-white/[0.06] p-6 md:p-7">
                <span className="text-accent-primary text-[9px] tracking-[0.18em] uppercase">
                  Model comparison
                </span>

                <h3 className="text-text-primary mt-3 text-xl font-medium">
                  Compare before choosing.
                </h3>

                <p className="text-text-secondary mt-3 max-w-3xl text-sm leading-6">
                  Candidate models can be compared using the same evaluation
                  criteria before selecting the model used by the application.
                </p>
              </div>

              <div className="divide-y divide-white/[0.06]">
                {[
                  {
                    name: 'Candidate A',
                    role: 'Baseline',
                  },
                  {
                    name: 'Candidate B',
                    role: 'Alternative',
                  },
                  {
                    name: 'Selected Model',
                    role: 'Production candidate',
                  },
                ].map((model, index) => (
                  <div
                    key={model.name}
                    className="grid gap-4 p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025]">
                        <span className="text-text-muted text-[10px] font-semibold">
                          0{index + 1}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-text-primary text-sm font-medium">
                          {model.name}
                        </h4>

                        <span className="text-text-muted text-[10px]">
                          {model.role}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      {['Precision', 'Recall', 'F1', 'Latency'].map(
                        (metric) => (
                          <span
                            key={metric}
                            className="text-text-muted hover:text-text-secondary rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[9px] transition-colors duration-300 hover:border-white/[0.14]"
                          >
                            {metric}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* EVALUATION PRINCIPLE */}
            <div className="mt-5 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 md:p-7">
              <div className="flex gap-4">
                <div className="bg-accent-primary mt-0.5 h-2 w-2 shrink-0 rounded-full" />

                <div>
                  <span className="text-text-muted text-[9px] tracking-[0.18em] uppercase">
                    Measurement principle
                  </span>

                  <p className="text-text-secondary mt-3 max-w-4xl text-sm leading-6">
                    Final performance numbers will be reported from measured
                    experiments rather than estimated or manually chosen values.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      {/* Engineering Challenges */}
      <Section
        id="challenges"
        className="relative border-t border-white/[0.04]"
      >
        {/* AMBIENT LIGHTING */}
        <div
          className="bg-accent-primary/[0.055] pointer-events-none absolute top-[-18rem] left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-[120px]"
          aria-hidden="true"
        />

        <div
          className="bg-accent-primary/[0.035] pointer-events-none absolute right-[-12rem] bottom-[-16rem] -z-10 h-[30rem] w-[30rem] rounded-full blur-[110px]"
          aria-hidden="true"
        />

        <Container>
          {/* SECTION INTRO */}
          <div>
            <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
              07 · Engineering Decisions
            </p>

            <p className="text-text-muted mt-4 max-w-xl text-sm leading-6">
              Building the system required decisions around boundaries,
              processing, persistence, and reliability.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="mt-12">
            <h2 className="text-text-primary text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              The interesting part was the engineering.
            </h2>

            <p className="text-text-secondary mt-6 max-w-4xl text-base leading-8 sm:text-lg">
              A working prototype is only the beginning. As the system grows,
              architecture decisions determine whether the application remains
              understandable, testable, and reliable.
            </p>

            {/* ENGINEERING DECISIONS */}
            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              {[
                {
                  number: '01',
                  challenge: 'API & service boundaries',
                  decision:
                    'Separate the API layer from the detection and persistence responsibilities.',
                  reasoning:
                    'Keeping responsibilities isolated makes individual services easier to reason about, test, and change without affecting unrelated parts of the system.',
                  tags: ['FastAPI', 'Services', 'Separation'],
                },
                {
                  number: '02',
                  challenge: 'Heavy processing',
                  decision:
                    'Introduce asynchronous processing for workloads that do not need to block the main request path.',
                  reasoning:
                    'Queue-based processing allows heavier operations to be handled independently while keeping the interactive API responsive.',
                  tags: ['Redis', 'Queue', 'Workers'],
                },
                {
                  number: '03',
                  challenge: 'Persistent scan history',
                  decision:
                    'Treat scan results and audit information as persistent application data rather than temporary responses.',
                  reasoning:
                    'A security-oriented application benefits from being able to inspect previous activity, understand outcomes, and maintain an auditable history.',
                  tags: ['PostgreSQL', 'Audit', 'History'],
                },
                {
                  number: '04',
                  challenge: 'Reliability & verification',
                  decision:
                    'Use automated checks and integration tests while the system evolves.',
                  reasoning:
                    'Changes across authentication, services, models, and APIs can introduce regressions, so verification needs to be part of the development workflow.',
                  tags: ['Pytest', 'TypeScript', 'Linting'],
                },
              ].map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 18,
                        }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="group hover:border-accent-primary/20 relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.035] md:p-7"
                >
                  {/* CARD AMBIENT GLOW */}
                  <div
                    className="bg-accent-primary/[0.045] pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="relative">
                    {/* HEADER */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="border-accent-primary/15 bg-accent-primary/[0.055] flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border">
                        <span className="text-accent-primary text-xs font-semibold">
                          {item.number}
                        </span>
                      </div>

                      <span className="text-text-muted rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[9px] tracking-[0.16em] uppercase">
                        Engineering decision
                      </span>
                    </div>

                    {/* CHALLENGE */}
                    <div className="mt-7">
                      <span className="text-text-muted text-[9px] tracking-[0.18em] uppercase">
                        Challenge
                      </span>

                      <h3 className="text-text-primary mt-2 text-xl font-medium tracking-tight">
                        {item.challenge}
                      </h3>
                    </div>

                    {/* DECISION */}
                    <div className="mt-6 rounded-xl border border-white/[0.06] bg-black/10 p-5">
                      <span className="text-accent-primary text-[9px] tracking-[0.18em] uppercase">
                        Decision
                      </span>

                      <p className="text-text-secondary mt-3 text-sm leading-6">
                        {item.decision}
                      </p>
                    </div>

                    {/* REASONING */}
                    <div className="mt-5">
                      <span className="text-text-muted text-[9px] tracking-[0.18em] uppercase">
                        Why
                      </span>

                      <p className="text-text-secondary mt-3 text-sm leading-6">
                        {item.reasoning}
                      </p>
                    </div>

                    {/* TAGS */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-text-muted group-hover:border-accent-primary/15 group-hover:text-text-secondary rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[9px] transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      {/* Lessons Learned */}
      <Section id="lessons" className="relative border-t border-white/[0.04]">
        {/* AMBIENT LIGHTING */}
        <div
          className="bg-accent-primary/[0.055] pointer-events-none absolute top-[-18rem] left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-[120px]"
          aria-hidden="true"
        />

        <div
          className="bg-accent-primary/[0.035] pointer-events-none absolute right-[-12rem] bottom-[-16rem] -z-10 h-[30rem] w-[30rem] rounded-full blur-[110px]"
          aria-hidden="true"
        />

        <Container>
          {/* SECTION HEADER */}
          <div className="w-full">
            <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
              08 · Lessons Learned
            </p>

            <h2 className="text-text-primary mt-5 max-w-5xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Building the system changed how I think.
            </h2>

            <p className="text-text-secondary mt-6 max-w-4xl text-base leading-8 sm:text-lg">
              PhishGuard started as a detection problem, but building the
              surrounding system made the engineering challenges impossible to
              ignore.
            </p>

            <p className="text-text-muted mt-4 max-w-2xl text-sm leading-6">
              The biggest lessons came from turning individual features into a
              system that had to work together.
            </p>
          </div>

          {/* LESSON CARDS */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: '01',
                title: 'A model is only one part of the product',
                text: 'Good predictions are not enough. The model has to fit into an API, data layer, interface, and operational workflow that people can actually use.',
              },
              {
                number: '02',
                title: 'Architecture matters earlier than expected',
                text: 'Separating responsibilities early makes debugging, testing, and extending the system significantly easier as more features are introduced.',
              },
              {
                number: '03',
                title: 'Security needs explainability',
                text: 'A risk score becomes more useful when the system can also communicate why an input was considered suspicious.',
              },
              {
                number: '04',
                title: 'Reliability is a feature',
                text: 'Authentication, validation, persistence, queues, testing, and deployment are not secondary details. They are part of the product itself.',
              },
            ].map((lesson, index) => (
              <motion.article
                key={lesson.number}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 18,
                      }
                }
                whileInView={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="group hover:border-accent-primary/20 relative overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.035] md:p-7"
              >
                {/* CARD AMBIENT GLOW */}
                <div
                  className="bg-accent-primary/[0.045] pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative">
                  {/* CARD TOP */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025]">
                      <span className="text-accent-primary text-xs font-semibold">
                        {lesson.number}
                      </span>
                    </div>

                    <span className="text-text-muted group-hover:text-accent-primary text-[9px] tracking-[0.16em] uppercase transition-colors duration-300">
                      Lesson
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-text-primary mt-7 text-lg leading-7 font-medium">
                    {lesson.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-text-secondary mt-3 text-sm leading-6">
                    {lesson.text}
                  </p>

                  {/* CARD FOOTER LINE */}
                  <div className="group-hover:bg-accent-primary/30 mt-7 h-px w-full bg-white/[0.07] transition-colors duration-500" />
                </div>
              </motion.article>
            ))}
          </div>

          {/* CLOSING THOUGHT */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 16,
                  }
            }
            whileInView={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.55,
              delay: 0.15,
            }}
            className="border-accent-primary/10 bg-accent-primary/[0.025] mt-5 rounded-[1.5rem] border p-6 sm:p-7"
          >
            <span className="text-accent-primary text-[9px] tracking-[0.18em] uppercase">
              Takeaway
            </span>

            <p className="text-text-secondary mt-3 max-w-4xl text-base leading-7 sm:text-lg sm:leading-8">
              The most valuable part of PhishGuard was not adding more features.
              It was learning how individual engineering decisions interact when
              they become one system.
            </p>
          </motion.div>
        </Container>
      </Section>
      {/* Future Improvements */}
      <Section id="future" className="relative border-t border-white/[0.04]">
        {/* AMBIENT LIGHTING */}
        <div
          className="bg-accent-primary/[0.055] pointer-events-none absolute top-[-18rem] left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-[120px]"
          aria-hidden="true"
        />

        <div
          className="bg-accent-primary/[0.035] pointer-events-none absolute right-[-12rem] bottom-[-16rem] -z-10 h-[30rem] w-[30rem] rounded-full blur-[110px]"
          aria-hidden="true"
        />

        <Container>
          {/* SECTION HEADER */}
          <div className="w-full">
            <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
              09 · Future Direction
            </p>

            <h2 className="text-text-primary mt-5 max-w-5xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Where PhishGuard goes next.
            </h2>

            <p className="text-text-secondary mt-6 max-w-4xl text-base leading-8 sm:text-lg">
              The architecture leaves room for the system to evolve beyond
              individual scans into a more complete security intelligence
              platform.
            </p>

            <p className="text-text-muted mt-4 max-w-2xl text-sm leading-6">
              The current system establishes the foundation. The next step is
              making detection more adaptive and operationally useful.
            </p>
          </div>

          {/* FUTURE ROADMAP */}
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              {
                number: '01',
                title: 'Adaptive detection',
                description:
                  'Experiment with stronger models, richer feature sets, and continuously evaluated detection strategies to improve robustness against changing phishing patterns.',
                tags: ['Models', 'Features', 'Evaluation'],
              },
              {
                number: '02',
                title: 'Threat intelligence',
                description:
                  'Connect external threat intelligence sources so model predictions can be strengthened with additional context about suspicious domains, URLs, and indicators.',
                tags: ['Threat feeds', 'Indicators', 'Context'],
              },
              {
                number: '03',
                title: 'Real-time monitoring',
                description:
                  'Extend the existing scanning workflow toward continuous monitoring, alerting, and trend analysis for organizations handling larger volumes of suspicious activity.',
                tags: ['Monitoring', 'Alerts', 'Analytics'],
              },
              {
                number: '04',
                title: 'Production hardening',
                description:
                  'Strengthen observability, rate controls, deployment workflows, security controls, and failure handling as the system moves closer to production-scale usage.',
                tags: ['Observability', 'Security', 'Scale'],
              },
            ].map((item, index) => (
              <motion.article
                key={item.number}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 18,
                      }
                }
                whileInView={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="group hover:border-accent-primary/20 relative overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.035] md:p-7"
              >
                {/* CARD AMBIENT GLOW */}
                <div
                  className="bg-accent-primary/[0.045] pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                {/* PROGRESS LINE */}
                <div
                  className="bg-accent-primary/20 group-hover:bg-accent-primary/60 absolute top-0 bottom-0 left-0 w-px transition-all duration-500"
                  aria-hidden="true"
                />

                <div className="relative pl-3 sm:pl-4">
                  {/* CARD TOP */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025]">
                        <span className="text-accent-primary text-[10px] font-semibold">
                          {item.number}
                        </span>
                      </div>

                      <span className="text-text-muted text-[9px] tracking-[0.18em] uppercase">
                        Next direction
                      </span>
                    </div>

                    <span className="text-text-muted group-hover:text-accent-primary hidden text-[9px] tracking-[0.16em] uppercase transition-colors duration-300 sm:block">
                      Explore
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-text-primary mt-6 text-xl font-medium tracking-tight">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-text-secondary mt-3 max-w-2xl text-sm leading-6">
                    {item.description}
                  </p>

                  {/* TAGS */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-text-muted group-hover:border-accent-primary/15 group-hover:text-text-secondary rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[9px] transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* BOTTOM LINE */}
                  <div className="group-hover:bg-accent-primary/30 mt-7 h-px w-full bg-white/[0.07] transition-colors duration-500" />
                </div>
              </motion.article>
            ))}
          </div>

          {/* CLOSING STATEMENT */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 16,
                  }
            }
            whileInView={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.55,
              delay: 0.15,
            }}
            className="border-accent-primary/10 bg-accent-primary/[0.025] mt-5 rounded-[1.5rem] border p-6 sm:p-7"
          >
            <span className="text-accent-primary text-[9px] tracking-[0.18em] uppercase">
              Long-term direction
            </span>

            <p className="text-text-secondary mt-3 max-w-4xl text-base leading-7 sm:text-lg sm:leading-8">
              The goal is not simply to classify more messages. It is to build a
              security system that can continuously learn from signals, explain
              its decisions, and remain reliable as the threat landscape
              changes.
            </p>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
