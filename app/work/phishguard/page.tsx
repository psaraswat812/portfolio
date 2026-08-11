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
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            {/* Hero content */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
            >
              <Link
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
              </Link>

              <div className="mt-12 flex items-center gap-4">
                <span className="text-accent-primary text-xs font-medium tracking-[0.2em]">
                  01
                </span>

                <span className="bg-border-strong h-px w-10" />

                <span className="text-text-muted text-xs tracking-[0.18em] uppercase">
                  AI / ML · Security
                </span>
              </div>

              <h1 className="display-text mt-7 max-w-3xl text-5xl leading-[0.98] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                PhishGuard AI
              </h1>

              <p className="text-text-secondary mt-7 max-w-2xl text-xl leading-8 sm:text-2xl sm:leading-9">
                An intelligent phishing detection platform designed to analyze
                suspicious URLs, emails, and text and turn complex signals into
                understandable risk assessments.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {['FastAPI', 'Next.js', 'PostgreSQL', 'Redis', 'Docker'].map(
                  (technology) => (
                    <span
                      key={technology}
                      className="text-text-secondary rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs"
                    >
                      {technology}
                    </span>
                  ),
                )}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-5">
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
    backgroundColor: "#ffffff",
    color: "#000000",
  }}
  className="inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
>
  Explore the system
  <span aria-hidden="true">↓</span>
</a>

                <a
                  href="#engineering"
                  className="border-border-default text-text-primary hover:border-border-strong inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-medium transition-colors duration-300"
                >
                  Engineering details
                </a>
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
                          className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4"
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
      <Section id="problem" className="relative border-t border-white/[0.04]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
                01 · The Problem
              </p>
            </div>

            <div>
              <h2 className="text-text-primary text-3xl font-semibold tracking-tight sm:text-4xl">
                Phishing is not always obvious.
              </h2>

              <p className="text-text-secondary mt-6 max-w-3xl text-base leading-8 sm:text-lg">
                Suspicious messages can combine familiar language, trusted
                branding, misleading links, and carefully crafted social
                engineering signals. The goal of PhishGuard AI is to turn those
                signals into a structured assessment instead of making the user
                rely on intuition alone.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Approach */}
      <Section id="approach" className="relative border-t border-white/[0.04]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
                02 · The Approach
              </p>
            </div>

            <div>
              <h2 className="text-text-primary text-3xl font-semibold tracking-tight sm:text-4xl">
                Multiple signals. One understandable decision.
              </h2>

              <p className="text-text-secondary mt-6 max-w-3xl text-base leading-8 sm:text-lg">
                Instead of treating phishing detection as a single black-box
                prediction, the system combines different analysis layers and
                converts them into a final risk assessment with explainable
                factors.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Architecture */}
      <Section
        id="architecture"
        className="relative border-t border-white/[0.04]"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            {/* Section label */}
            <div>
              <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
                03 · System Architecture
              </p>

              <p className="text-text-muted mt-4 max-w-xs text-sm leading-6">
                A layered pipeline that transforms raw inputs into an
                explainable phishing risk assessment.
              </p>
            </div>

            {/* Architecture */}
            <div>
              <h2 className="text-text-primary text-3xl font-semibold tracking-tight sm:text-4xl">
                From input to risk assessment.
              </h2>

              <p className="text-text-secondary mt-6 max-w-3xl text-base leading-8 sm:text-lg">
                PhishGuard separates the user interface, API layer, analysis
                engines, risk assessment, and persistence layer so each part of
                the system has a clear responsibility.
              </p>

              <div className="border-border-default bg-surface-elevated/30 mt-10 overflow-hidden rounded-[2rem] border p-5 sm:p-7">
                {/* User input */}
                <div className="flex justify-center">
                  <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={
                      shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                    }
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-sm rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 text-center"
                  >
                    <span className="text-text-muted text-[10px] tracking-[0.18em] uppercase">
                      Entry point
                    </span>

                    <h3 className="text-text-primary mt-2 text-lg font-medium">
                      User Input
                    </h3>

                    <div className="mt-4 flex justify-center gap-2">
                      {['URL', 'Email', 'Text'].map((input) => (
                        <span
                          key={input}
                          className="text-text-secondary rounded-full border border-white/[0.07] px-3 py-1.5 text-[10px]"
                        >
                          {input}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Connector */}
                <div className="bg-border-default relative mx-auto h-12 w-px">
                  {!shouldReduceMotion && (
                    <motion.span
                      className="bg-accent-primary absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full shadow-[0_0_16px_rgba(99,102,241,0.65)]"
                      animate={{ y: [0, 32, 0], opacity: [0, 1, 0] }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  )}
                </div>

                {/* Frontend */}
                <ArchitectureNode
                  label="Application layer"
                  title="Next.js"
                  description="Frontend interface for submitting inputs and presenting analysis results."
                  shouldReduceMotion={shouldReduceMotion}
                />

                <ArchitectureConnector
                  shouldReduceMotion={shouldReduceMotion}
                />

                {/* API */}
                <ArchitectureNode
                  label="API layer"
                  title="FastAPI"
                  description="Receives requests, coordinates analysis, and returns structured risk assessments."
                  shouldReduceMotion={shouldReduceMotion}
                />

                <ArchitectureConnector
                  shouldReduceMotion={shouldReduceMotion}
                />

                {/* Analysis engines */}
                <div>
                  <div className="mb-4 text-center">
                    <span className="text-text-muted text-[10px] tracking-[0.18em] uppercase">
                      Analysis layer
                    </span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
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
                          shouldReduceMotion ? false : { opacity: 0, y: 16 }
                        }
                        whileInView={
                          shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                        }
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.08,
                        }}
                        className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4"
                      >
                        <span className="text-accent-primary text-[9px] tracking-[0.15em] uppercase">
                          0{index + 1}
                        </span>

                        <h3 className="text-text-primary mt-3 text-sm font-medium">
                          {engine.title}
                        </h3>

                        <p className="text-text-muted mt-2 text-xs leading-5">
                          {engine.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <ArchitectureConnector
                  shouldReduceMotion={shouldReduceMotion}
                />

                {/* Risk assessment */}
                <ArchitectureNode
                  label="Decision layer"
                  title="Risk Assessment"
                  description="Combines analysis signals into a structured risk decision with explainable factors."
                  shouldReduceMotion={shouldReduceMotion}
                  featured
                />

                <ArchitectureConnector
                  shouldReduceMotion={shouldReduceMotion}
                />

                {/* Persistence */}
                <ArchitectureNode
                  label="Persistence layer"
                  title="PostgreSQL"
                  description="Stores scan history, audit information, and system records."
                  shouldReduceMotion={shouldReduceMotion}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
      {/* How PhishGuard Thinks */}
      <Section id="detection" className="relative border-t border-white/[0.04]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            {/* Section label */}
            <div>
              <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
                04 · Detection Pipeline
              </p>

              <p className="text-text-muted mt-4 max-w-xs text-sm leading-6">
                The system turns raw input into a structured and explainable
                assessment through multiple analysis stages.
              </p>
            </div>

            {/* Pipeline */}
            <div>
              <h2 className="text-text-primary text-3xl font-semibold tracking-tight sm:text-4xl">
                How PhishGuard thinks.
              </h2>

              <p className="text-text-secondary mt-6 max-w-3xl text-base leading-8 sm:text-lg">
                Instead of relying on a single signal, PhishGuard evaluates
                different characteristics of an input before producing a final
                risk assessment.
              </p>

              <div className="mt-10">
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
                ].map((stage, index, stages) => (
                  <div key={stage.number} className="relative">
                    <motion.div
                      initial={
                        shouldReduceMotion ? false : { opacity: 0, x: 20 }
                      }
                      whileInView={
                        shouldReduceMotion ? undefined : { opacity: 1, x: 0 }
                      }
                      viewport={{
                        once: true,
                        amount: 0.35,
                      }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.06,
                        ease: 'easeOut',
                      }}
                      className="group hover:border-accent-primary/20 relative grid gap-5 rounded-[1.5rem] border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-500 hover:-translate-y-0.5 hover:bg-white/[0.035] sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-6"
                    >
                      {/* Number */}
                      <div className="flex items-center gap-4">
                        <div className="border-accent-primary/15 bg-accent-primary/[0.055] flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border">
                          <span className="text-accent-primary text-xs font-semibold">
                            {stage.number}
                          </span>
                        </div>

                        <div className="sm:hidden">
                          <span className="text-text-muted text-[9px] tracking-[0.18em] uppercase">
                            {stage.label}
                          </span>

                          <h3 className="text-text-primary mt-1 text-base font-medium">
                            {stage.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <div className="hidden sm:block">
                          <span className="text-text-muted text-[9px] tracking-[0.18em] uppercase">
                            {stage.label}
                          </span>

                          <h3 className="text-text-primary mt-1 text-lg font-medium">
                            {stage.title}
                          </h3>
                        </div>

                        <p className="text-text-secondary mt-2 max-w-2xl text-sm leading-6">
                          {stage.description}
                        </p>
                      </div>

                      {/* Signals */}
                      <div className="flex flex-wrap gap-2 sm:max-w-[12rem] sm:justify-end">
                        {stage.details.map((detail) => (
                          <span
                            key={detail}
                            className="text-text-muted group-hover:border-accent-primary/15 group-hover:text-text-secondary rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[9px] transition-colors duration-300"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Pipeline connector */}
                    {index < stages.length - 1 && (
                      <div className="bg-border-default relative ml-[1.35rem] h-8 w-px">
                        {!shouldReduceMotion && (
                          <motion.span
                            className="bg-accent-primary absolute top-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full shadow-[0_0_14px_rgba(99,102,241,0.65)]"
                            animate={{
                              y: [0, 18, 0],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeInOut',
                              delay: index * 0.18,
                            }}
                          />
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
      {/* Engineering Stack */}
      <Section
        id="engineering"
        className="relative border-t border-white/[0.04]"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            {/* Section label */}
            <div>
              <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
                05 · Engineering
              </p>

              <p className="text-text-muted mt-4 max-w-xs text-sm leading-6">
                Every technology in the stack has a specific responsibility
                inside the system.
              </p>
            </div>

            {/* Stack */}
            <div>
              <h2 className="text-text-primary text-3xl font-semibold tracking-tight sm:text-4xl">
                Built as a real system.
              </h2>

              <p className="text-text-secondary mt-6 max-w-3xl text-base leading-8 sm:text-lg">
                The stack is designed around separation of concerns: the
                frontend handles interaction, the API coordinates the system,
                the ML layer performs detection, and infrastructure keeps
                everything reliable and deployable.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
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
                      delay: index * 0.06,
                      ease: 'easeOut',
                    }}
                    className="group hover:border-accent-primary/20 relative overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.035] sm:p-6"
                  >
                    {/* Hover glow */}
                    <div
                      className="bg-accent-primary/[0.06] pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />

                    <div className="relative">
                      {/* Top row */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025]">
                            <span className="text-accent-primary text-xs font-semibold">
                              {item.number}
                            </span>
                          </div>

                          <div>
                            <span className="text-text-muted text-[9px] tracking-[0.18em] uppercase">
                              {item.category}
                            </span>

                            <h3 className="text-text-primary mt-1 text-base font-medium">
                              {item.technology}
                            </h3>
                          </div>
                        </div>

                        <span className="text-text-muted group-hover:text-accent-primary text-[10px] tracking-[0.16em] uppercase transition-colors duration-300">
                          Stack
                        </span>
                      </div>

                      {/* Why */}
                      <div className="mt-6">
                        <span className="text-text-muted text-[9px] tracking-[0.18em] uppercase">
                          Why it exists
                        </span>

                        <p className="text-text-secondary mt-2 text-sm leading-6">
                          {item.reason}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="mt-5 flex flex-wrap gap-2">
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

              {/* Architecture principle */}
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
                className="border-accent-primary/10 bg-accent-primary/[0.025] mt-4 rounded-[1.5rem] border p-5 sm:p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="text-accent-primary text-[9px] tracking-[0.18em] uppercase">
                      Design principle
                    </span>

                    <p className="text-text-secondary mt-2 text-sm leading-6">
                      Keep responsibilities isolated so individual services can
                      evolve without coupling the entire application.
                    </p>
                  </div>

                  <div className="border-accent-primary/15 bg-accent-primary/[0.05] shrink-0 rounded-full border px-4 py-2">
                    <span className="text-accent-primary text-[9px] tracking-[0.16em] uppercase">
                      Modular architecture
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>
      {/* Model Evaluation */}
      <Section
        id="evaluation"
        className="relative border-t border-white/[0.04]"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            {/* Section label */}
            <div>
              <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
                06 · Evaluation
              </p>

              <p className="text-text-muted mt-4 max-w-xs text-sm leading-6">
                Detection quality is evaluated using classification metrics
                together with inference performance.
              </p>
            </div>

            {/* Evaluation content */}
            <div>
              <h2 className="text-text-primary text-3xl font-semibold tracking-tight sm:text-4xl">
                Measure the model, not the hype.
              </h2>

              <p className="text-text-secondary mt-6 max-w-3xl text-base leading-8 sm:text-lg">
                A phishing detector cannot be judged by accuracy alone.
                PhishGuard is evaluated across precision, recall, F1 score, and
                inference latency to understand both detection quality and
                practical performance.
              </p>

              {/* Metrics */}
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
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
                    className="group hover:border-accent-primary/20 rounded-[1.5rem] border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.035] sm:p-6"
                  >
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

                    <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
                      <span className="text-text-muted text-[9px] tracking-[0.16em] uppercase">
                        Evaluation focus
                      </span>

                      <span className="text-text-secondary group-hover:text-accent-primary text-[10px] transition-colors duration-300">
                        {item.focus}
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Model comparison */}
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
                className="mt-4 overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-white/[0.02]"
              >
                <div className="border-b border-white/[0.06] p-5 sm:p-6">
                  <span className="text-accent-primary text-[9px] tracking-[0.18em] uppercase">
                    Model comparison
                  </span>

                  <h3 className="text-text-primary mt-2 text-lg font-medium">
                    Compare before choosing.
                  </h3>

                  <p className="text-text-secondary mt-2 max-w-2xl text-sm leading-6">
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
                              className="text-text-muted rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[9px]"
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

              {/* Honest evaluation note */}
              <div className="mt-4 rounded-[1.5rem] border border-white/[0.06] bg-white/[0.015] p-5 sm:p-6">
                <div className="flex gap-4">
                  <div className="bg-accent-primary mt-0.5 h-2 w-2 shrink-0 rounded-full" />

                  <div>
                    <span className="text-text-muted text-[9px] tracking-[0.18em] uppercase">
                      Measurement principle
                    </span>

                    <p className="text-text-secondary mt-2 text-sm leading-6">
                      Final performance numbers will be reported from measured
                      experiments rather than estimated or manually chosen
                      values.
                    </p>
                  </div>
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
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            {/* Section label */}
            <div>
              <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
                07 · Engineering Decisions
              </p>

              <p className="text-text-muted mt-4 max-w-xs text-sm leading-6">
                Building the system required decisions around boundaries,
                processing, persistence, and reliability.
              </p>
            </div>

            {/* Decisions */}
            <div>
              <h2 className="text-text-primary text-3xl font-semibold tracking-tight sm:text-4xl">
                The interesting part was the engineering.
              </h2>

              <p className="text-text-secondary mt-6 max-w-3xl text-base leading-8 sm:text-lg">
                A working prototype is only the beginning. As the system grows,
                architecture decisions determine whether the application remains
                understandable, testable, and reliable.
              </p>

              <div className="mt-10 space-y-3">
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
                    className="group hover:border-accent-primary/20 overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-white/[0.02] transition-all duration-500 hover:bg-white/[0.035]"
                  >
                    <div className="grid gap-5 p-5 sm:grid-cols-[auto_1fr] sm:p-6">
                      {/* Number */}
                      <div className="border-accent-primary/15 bg-accent-primary/[0.055] flex h-10 w-10 items-center justify-center rounded-xl border">
                        <span className="text-accent-primary text-xs font-semibold">
                          {item.number}
                        </span>
                      </div>

                      <div>
                        {/* Challenge */}
                        <span className="text-text-muted text-[9px] tracking-[0.18em] uppercase">
                          Engineering challenge
                        </span>

                        <h3 className="text-text-primary mt-2 text-lg font-medium">
                          {item.challenge}
                        </h3>

                        {/* Decision */}
                        <div className="mt-5 rounded-xl border border-white/[0.06] bg-black/10 p-4">
                          <span className="text-accent-primary text-[9px] tracking-[0.18em] uppercase">
                            Decision
                          </span>

                          <p className="text-text-secondary mt-2 text-sm leading-6">
                            {item.decision}
                          </p>
                        </div>

                        {/* Reasoning */}
                        <div className="mt-4">
                          <span className="text-text-muted text-[9px] tracking-[0.18em] uppercase">
                            Why
                          </span>

                          <p className="text-text-secondary mt-2 text-sm leading-6">
                            {item.reasoning}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="mt-5 flex flex-wrap gap-2">
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
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
      {/* Lessons Learned */}
      <Section id="lessons" className="relative border-t border-white/[0.04]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            {/* Section label */}
            <div>
              <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
                08 · Lessons Learned
              </p>

              <p className="text-text-muted mt-4 max-w-xs text-sm leading-6">
                The biggest lessons came from turning individual features into a
                system that had to work together.
              </p>
            </div>

            {/* Lessons */}
            <div>
              <h2 className="text-text-primary text-3xl font-semibold tracking-tight sm:text-4xl">
                Building the system changed how I think.
              </h2>

              <p className="text-text-secondary mt-6 max-w-3xl text-base leading-8 sm:text-lg">
                PhishGuard started as a detection problem, but building the
                surrounding system made the engineering challenges impossible to
                ignore.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
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
                    className="group hover:border-accent-primary/20 rounded-[1.5rem] border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.035] sm:p-6"
                  >
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

                    <h3 className="text-text-primary mt-6 text-lg leading-7 font-medium">
                      {lesson.title}
                    </h3>

                    <p className="text-text-secondary mt-3 text-sm leading-6">
                      {lesson.text}
                    </p>
                  </motion.article>
                ))}
              </div>

              {/* Closing thought */}
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
                className="border-accent-primary/10 bg-accent-primary/[0.025] mt-4 rounded-[1.5rem] border p-6 sm:p-7"
              >
                <span className="text-accent-primary text-[9px] tracking-[0.18em] uppercase">
                  Takeaway
                </span>

                <p className="text-text-secondary mt-3 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
                  The most valuable part of PhishGuard was not adding more
                  features. It was learning how individual engineering decisions
                  interact when they become one system.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>
      {/* Future Improvements */}
      <Section id="future" className="relative border-t border-white/[0.04]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            {/* Section label */}
            <div>
              <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
                09 · Future Direction
              </p>

              <p className="text-text-muted mt-4 max-w-xs text-sm leading-6">
                The current system establishes the foundation. The next step is
                making detection more adaptive and operationally useful.
              </p>
            </div>

            {/* Future roadmap */}
            <div>
              <h2 className="text-text-primary text-3xl font-semibold tracking-tight sm:text-4xl">
                Where PhishGuard goes next.
              </h2>

              <p className="text-text-secondary mt-6 max-w-3xl text-base leading-8 sm:text-lg">
                The architecture leaves room for the system to evolve beyond
                individual scans into a more complete security intelligence
                platform.
              </p>

              <div className="mt-10 space-y-3">
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
                            x: -18,
                          }
                    }
                    whileInView={
                      shouldReduceMotion
                        ? undefined
                        : {
                            opacity: 1,
                            x: 0,
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
                    className="group hover:border-accent-primary/20 relative overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-500 hover:bg-white/[0.035] sm:p-6"
                  >
                    {/* Progress line */}
                    <div
                      className="bg-accent-primary/20 group-hover:bg-accent-primary/60 absolute top-0 bottom-0 left-0 w-px transition-all duration-500"
                      aria-hidden="true"
                    />

                    <div className="pl-3 sm:pl-4">
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

                      <h3 className="text-text-primary mt-5 text-lg font-medium">
                        {item.title}
                      </h3>

                      <p className="text-text-secondary mt-3 max-w-2xl text-sm leading-6">
                        {item.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
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

              {/* Closing statement */}
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
                className="mt-4 rounded-[1.5rem] border border-white/[0.07] bg-white/[0.02] p-6 sm:p-7"
              >
                <span className="text-accent-primary text-[9px] tracking-[0.18em] uppercase">
                  Long-term direction
                </span>

                <p className="text-text-secondary mt-3 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
                  The goal is not simply to classify more messages. It is to
                  build a security system that can continuously learn from
                  signals, explain its decisions, and remain reliable as the
                  threat landscape changes.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
