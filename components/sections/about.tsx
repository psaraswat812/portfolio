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
          {/* Journey */}
          <motion.div
            className="mt-28"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
              Journey
            </p>

            <h2 className="text-text-primary mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Every project built the next one.
            </h2>

            <p className="text-text-secondary mt-6 max-w-3xl text-lg leading-8">
              My journey has been less about collecting technologies and more
              about understanding how complete software systems are designed,
              built, improved, and deployed.
            </p>

            <div className="relative mt-14">
              <div className="absolute top-0 left-5 h-full w-px bg-white/10" />

              {[
                {
                  year: '2023',
                  title: 'Started Computer Science',
                  text: 'Began learning programming fundamentals, data structures, and problem solving.',
                },
                {
                  year: '2024',
                  title: 'Full Stack Development',
                  text: 'Built modern web applications using React, Next.js, APIs, and databases.',
                },
                {
                  year: '2025',
                  title: 'Artificial Intelligence',
                  text: 'Focused on machine learning, NLP, recommendation systems, and practical AI engineering.',
                },
                {
                  year: '2026',
                  title: 'System Engineering',
                  text: 'Designed complete AI products including PhishGuard AI and the AI Resume Screener with production-oriented architecture.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="relative mb-10 ml-14"
                >
                  <div className="bg-accent-primary absolute top-2 -left-[3.1rem] h-3 w-3 rounded-full shadow-[0_0_18px_rgba(99,102,241,0.65)]" />

                  <span className="text-accent-primary text-xs tracking-[0.18em] uppercase">
                    {item.year}
                  </span>

                  <h3 className="text-text-primary mt-2 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-text-secondary mt-3 max-w-2xl leading-7">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="mt-28"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
              Engineering Philosophy
            </p>

            <h2 className="text-text-primary mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              How I approach building software.
            </h2>

            <p className="text-text-secondary mt-6 max-w-3xl text-lg leading-8">
              Every project follows the same principles. I care about
              architecture, maintainability, user experience, and continuous
              improvement just as much as writing code.
            </p>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Think in Systems',
                  text: 'Instead of isolated features, I design complete systems where every component has a clear responsibility.',
                },
                {
                  title: 'Build for People',
                  text: 'Technology only becomes valuable when it creates experiences that are understandable, intuitive, and useful.',
                },
                {
                  title: 'Keep Improving',
                  text: 'Every iteration is an opportunity to simplify architecture, improve quality, and deliver a better product.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 20,
                        }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -6,
                        }
                  }
                  className="group hover:border-accent-primary/20 rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:bg-white/[0.05]"
                >
                  <h3 className="text-text-primary text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-text-secondary mt-5 leading-7">
                    {item.text}
                  </p>

                  <div className="group-hover:bg-accent-primary/40 mt-8 h-px bg-white/10 transition-colors duration-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="mt-28"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
              Technology Stack
            </p>

            <h2 className="text-text-primary mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Tools I enjoy building with.
            </h2>

            <p className="text-text-secondary mt-6 max-w-3xl text-lg leading-8">
              I choose technologies based on the problem being solved rather
              than following trends. My projects combine AI, backend
              engineering, modern frontend development, and deployment tools.
            </p>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {[
                {
                  category: 'Languages',
                  items: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
                },
                {
                  category: 'Frontend',
                  items: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
                },
                {
                  category: 'Backend',
                  items: ['FastAPI', 'REST APIs', 'JWT', 'Redis'],
                },
                {
                  category: 'Artificial Intelligence',
                  items: ['Scikit-learn', 'NLP', 'TF-IDF', 'Generative AI'],
                },
                {
                  category: 'Database',
                  items: ['PostgreSQL', 'SQLAlchemy'],
                },
                {
                  category: 'Deployment',
                  items: ['Docker', 'Git', 'GitHub', 'Vercel'],
                },
              ].map((group, index) => (
                <motion.div
                  key={group.category}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 20,
                        }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -5,
                        }
                  }
                  className="group hover:border-accent-primary/20 rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:bg-white/[0.05]"
                >
                  <p className="text-accent-primary text-xs tracking-[0.18em] uppercase">
                    {group.category}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-text-secondary group-hover:border-accent-primary/20 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm transition-colors duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Current Focus */}
          <motion.div
            className="mt-28"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
              Current Focus
            </p>

            <h2 className="text-text-primary mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              What I'm building and learning today.
            </h2>

            <p className="text-text-secondary mt-6 max-w-3xl text-lg leading-8">
              I'm focused on building production-oriented AI applications while
              strengthening my backend engineering skills. Every new project is
              an opportunity to improve architecture, system design, and user
              experience.
            </p>

            <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr]">
              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -5,
                      }
                }
                transition={{ duration: 0.3 }}
                className="hover:border-accent-primary/20 rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:bg-white/[0.05]"
              >
                <p className="text-accent-primary text-xs tracking-[0.18em] uppercase">
                  Building
                </p>

                <ul className="text-text-secondary mt-6 space-y-4 leading-7">
                  <li>• AI-powered software systems</li>
                  <li>• Production-ready backend APIs</li>
                  <li>• Modern full-stack web applications</li>
                  <li>• Portfolio projects with real engineering depth</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -5,
                      }
                }
                transition={{ duration: 0.3 }}
                className="hover:border-accent-primary/20 rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:bg-white/[0.05]"
              >
                <p className="text-accent-primary text-xs tracking-[0.18em] uppercase">
                  Learning
                </p>

                <ul className="text-text-secondary mt-6 space-y-4 leading-7">
                  <li>• Advanced Machine Learning</li>
                  <li>• System Design</li>
                  <li>• Scalable Backend Architecture</li>
                  <li>• AI Product Engineering</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
          {/* CTA */}
          <motion.div
            className="mt-28"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 text-center">
              <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
                Let's Connect
              </p>

              <h2 className="text-text-primary mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                Interested in building something meaningful?
              </h2>

              <p className="text-text-secondary mx-auto mt-6 max-w-2xl text-lg leading-8">
                I'm always excited to discuss software engineering, AI, machine
                learning, or opportunities to build impactful products.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="#contact"
                  className="bg-accent-primary rounded-full px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1"
                >
                  Contact Me
                </a>

                <a
                  href="/resume.pdf"
                  className="hover:border-accent-primary/20 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3 text-sm transition-all duration-300 hover:-translate-y-1"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>

          {/* Principles */}
          <div className="grid gap-4">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
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
                className="group border-border-default bg-surface-elevated/40 hover:border-border-strong hover:bg-surface-elevated/70 rounded-3xl border p-6 transition-colors duration-500 sm:p-7"
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
