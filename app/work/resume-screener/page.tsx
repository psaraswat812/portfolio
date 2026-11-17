import { ArrowDown, ArrowUpRight, BrainCircuit, FileText, GitFork } from 'lucide-react';

import { projectLinks } from '@/lib/projects';

export default function ResumeScreenerCaseStudy() {
  return (
    // <main className="min-h-screen bg-background text-text-primary">
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        {/* AMBIENT LIGHTING */}
        <div
          className="bg-accent-primary/[0.08] pointer-events-none absolute top-[-18rem] left-1/2 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div
          className="bg-accent-primary/[0.05] pointer-events-none absolute top-1/3 right-[-12rem] -z-10 h-[28rem] w-[28rem] rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_35%)]" />

        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-12">
          {/* HERO COPY */}
          <div className="relative">
            <p className="text-accent-primary mb-6 flex items-center gap-3 text-sm font-medium tracking-[0.22em] uppercase">
              <span
                className="bg-accent-primary h-1.5 w-1.5 animate-pulse rounded-full"
                aria-hidden="true"
              />
              AI Resume Intelligence
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
              Turn a resume into actionable career intelligence.
            </h1>

            <p className="text-text-secondary mt-8 max-w-2xl text-lg leading-8 md:text-xl">
              An AI-powered resume analysis system that evaluates ATS
              compatibility, predicts role fit, identifies skill gaps, generates
              recommendations, and helps candidates improve their resumes.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#pipeline"
                className="relative z-10 inline-flex items-center gap-3 rounded-full !bg-white px-5 py-3 text-sm font-medium !text-black shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(255,255,255,0.16)]"
              >
                Explore the pipeline
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
              </a>

              <a
                href="#engineering"
                className="relative z-10 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.02] px-5 py-3 text-sm font-medium text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.05]"
              >
                View engineering
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300" />
              </a>
              <a
                href={projectLinks.resumeScreener.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-4 py-3 text-sm font-medium text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-label="Open AI Resume Screener GitHub repository in a new tab"
              >
                GitHub
                <GitFork className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            {/* TECH STACK */}
            <div className="text-text-secondary mt-12 flex flex-wrap gap-3 text-xs">
              {['Next.js', 'FastAPI', 'PostgreSQL', 'Gemini', 'NLP / ML'].map(
                (item) => (
                  <span
                    key={item}
                    className="hover:border-accent-primary/30 hover:bg-accent-primary/[0.04] rounded-full border border-white/10 bg-white/[0.015] px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            {/* OUTER GLOW */}
            <div
              className="bg-accent-primary/[0.12] pointer-events-none absolute -inset-12 rounded-full blur-3xl"
              aria-hidden="true"
            />

            {/* ORBITAL LIGHT */}
            <div
  className="pointer-events-none absolute -inset-6 rounded-[2.5rem] border border-accent-primary/[0.08] animate-[spin_35s_linear_infinite]"
  aria-hidden="true"
/>

            <div className="relative animate-[float_6s_ease-in-out_infinite,heroPulse_8s_ease-in-out_infinite] rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:scale-[1.01]">
              {/* WINDOW HEADER */}
              <div className="bg-background/80 rounded-[1.6rem] border border-white/10 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] shadow-[0_0_20px_rgba(255,255,255,0.04)]">
                      <FileText className="text-accent-primary h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-medium">resume.pdf</p>
                      <p className="text-text-secondary text-xs">
                        Document extracted
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="bg-accent-primary h-1.5 w-1.5 animate-pulse rounded-full"
                      aria-hidden="true"
                    />
                    <span className="text-text-secondary text-[10px] tracking-wider uppercase">
                      Live analysis
                    </span>
                  </div>
                </div>

                <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="space-y-3">
                  {/* ATS */}
                  <div className="hover:border-accent-primary/20 hover:bg-accent-primary/[0.025] rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary text-xs tracking-wider uppercase">
                        ATS compatibility
                      </span>

                      <span className="text-accent-primary text-xs font-medium">
                        Analyzing
                      </span>
                    </div>

                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="bg-accent-primary h-full w-[78%] animate-pulse rounded-full" />
                    </div>

                    <div className="text-text-secondary mt-2 flex justify-between text-[10px]">
                      <span>Keyword alignment</span>
                      <span>Similarity analysis</span>
                    </div>
                  </div>

                  {/* SIGNALS */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20">
                      <p className="text-text-secondary text-xs tracking-wider uppercase">
                        Predicted role
                      </p>

                      <p className="mt-2 text-sm font-medium">
                        AI / ML Engineer
                      </p>

                      <div className="mt-3 flex items-center gap-2">
                        <span className="bg-accent-primary h-1.5 w-1.5 rounded-full" />
                        <span className="text-text-secondary text-[10px]">
                          Role classification
                        </span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20">
                      <p className="text-text-secondary text-xs tracking-wider uppercase">
                        Skill match
                      </p>

                      <p className="mt-2 text-sm font-medium">
                        Structured signals
                      </p>

                      <div className="mt-3 flex items-center gap-2">
                        <span className="bg-accent-primary h-1.5 w-1.5 rounded-full" />
                        <span className="text-text-secondary text-[10px]">
                          Skill extraction
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* AI RESULT */}
                  <div className="border-accent-primary/20 bg-accent-primary/[0.05] rounded-xl border p-4 shadow-[0_0_30px_rgba(255,255,255,0.025)]">
                    <div className="flex items-center gap-2">
                      <BrainCircuit className="text-accent-primary h-4 w-4" />

                      <p className="text-sm font-medium">
                        Analysis pipeline active
                      </p>

                      <span className="ml-auto">
                        <span
                          className="bg-accent-primary block h-1.5 w-1.5 animate-ping rounded-full"
                          aria-hidden="true"
                        />
                      </span>
                    </div>

                    <p className="text-text-secondary mt-2 text-xs leading-5">
                      Skill gaps, role signals, and targeted improvement
                      recommendations are being generated.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING SIGNAL */}
            <div className="bg-background/80 absolute top-10 -right-4 hidden animate-[float_5s_ease-in-out_infinite_reverse] rounded-xl border border-white/10 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="bg-accent-primary/[0.08] flex h-7 w-7 items-center justify-center rounded-lg">
                  <BrainCircuit className="text-accent-primary h-3.5 w-3.5" />
                </div>

                <div>
                  <p className="text-[10px] font-medium">AI analysis</p>
                  <p className="text-text-secondary mt-0.5 text-[9px]">
                    Processing signals
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING DOCUMENT SIGNAL */}
            <div className="bg-background/80 absolute -bottom-5 -left-5 hidden animate-[float_7s_ease-in-out_infinite] rounded-xl border border-white/10 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                  <FileText className="text-accent-primary h-3.5 w-3.5" />
                </div>

                <div>
                  <p className="text-[10px] font-medium">Resume parsed</p>
                  <p className="text-text-secondary mt-0.5 text-[9px]">
                    Structured successfully
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="relative isolate overflow-hidden border-y border-white/10">
        {/* AMBIENT LIGHTING */}
        <div
          className="bg-accent-primary/[0.035] pointer-events-none absolute top-[-12rem] right-[-10rem] -z-10 h-[28rem] w-[28rem] rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div
          className="bg-accent-primary/[0.025] pointer-events-none absolute bottom-[-14rem] left-[-10rem] -z-10 h-[26rem] w-[26rem] rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          {/* HEADER */}
          <div className="max-w-4xl">
            <p className="text-accent-primary flex items-center gap-3 text-sm font-medium tracking-[0.22em] uppercase">
              <span
                className="bg-accent-primary h-1.5 w-1.5 animate-pulse rounded-full"
                aria-hidden="true"
              />
              01 · The Problem
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Resumes are optimized for humans. Hiring systems often
              aren&apos;t.
            </h2>

            <p className="text-text-secondary mt-6 max-w-3xl text-lg leading-8">
              A resume can be technically strong and still fail to communicate
              the right signals to a hiring system. The challenge is not simply
              writing a better document — it is understanding how the document
              performs against a specific role.
            </p>
          </div>

          {/* PROBLEM SIGNALS */}
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Visibility',
                text: 'Important skills can be buried, missing, or difficult to evaluate against a specific role.',
                signal: 'Skills',
              },
              {
                number: '02',
                title: 'Compatibility',
                text: 'A strong resume can still be poorly aligned with the language and requirements of a target job.',
                signal: 'Alignment',
              },
              {
                number: '03',
                title: 'Iteration',
                text: 'Candidates need a way to understand whether changes actually improve the quality and relevance of a resume.',
                signal: 'Improvement',
              },
            ].map(({ number, title, text, signal }) => (
              <div
                key={number}
                className="group bg-background relative overflow-hidden rounded-[2rem] border border-white/10 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.025] md:p-8"
              >
                {/* CARD LIGHT */}
                <div
                  className="bg-accent-primary/[0.055] pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative">
                  {/* TOP ROW */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="border-accent-primary/20 bg-accent-primary/[0.05] text-accent-primary flex h-10 w-10 items-center justify-center rounded-xl border text-xs font-semibold">
                      {number}
                    </div>

                    <span className="text-text-secondary rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium tracking-[0.12em] uppercase transition-all duration-300 group-hover:border-white/20 group-hover:text-white">
                      {signal}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                    {title}
                  </h3>

                  <p className="text-text-secondary mt-4 leading-7">{text}</p>

                  {/* BOTTOM SIGNAL */}
                  <div className="mt-8 h-px w-full overflow-hidden bg-white/10">
                    <div className="bg-accent-primary h-full w-0 transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CORE PROBLEM */}
          <div className="group border-accent-primary/20 bg-accent-primary/[0.035] hover:border-accent-primary/30 hover:bg-accent-primary/[0.05] relative mt-6 overflow-hidden rounded-[2rem] border p-7 transition-all duration-500 md:p-8">
            <div
              className="bg-accent-primary/[0.07] pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125"
              aria-hidden="true"
            />

            <div className="relative grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div>
                <p className="text-accent-primary text-xs font-medium tracking-[0.18em] uppercase">
                  Core Problem
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  A score alone is not enough.
                </h3>
              </div>

              <p className="text-text-secondary leading-7">
                Candidates need to know not only how a resume performs, but why
                it performs that way and what should change next. That requires
                a system that can connect document content, role requirements,
                structured analysis, and actionable recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PIPELINE */}
      <section
        id="pipeline"
        className="relative isolate overflow-hidden border-y border-white/10 bg-white/[0.015]"
      >
        {/* AMBIENT LIGHT */}
        <div
          className="bg-accent-primary/[0.06] pointer-events-none absolute top-[-18rem] left-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div
          className="bg-accent-primary/[0.04] pointer-events-none absolute right-[-10rem] bottom-[-16rem] -z-10 h-[28rem] w-[28rem] rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          {/* SECTION INTRO */}
          <div className="max-w-3xl">
            <p className="text-accent-primary flex items-center gap-3 text-sm font-medium tracking-[0.22em] uppercase">
              <span
                className="bg-accent-primary h-1.5 w-1.5 animate-pulse rounded-full"
                aria-hidden="true"
              />
              02 · The Approach
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              From document to decision.
            </h2>

            <p className="text-text-secondary mt-6 text-lg leading-8">
              The system turns an uploaded resume into structured career
              intelligence through document processing, skill extraction, ATS
              analysis, AI reasoning, and personalized improvement.
            </p>
          </div>

          {/* PIPELINE */}
          <div className="relative mt-16">
            {/* DESKTOP CONNECTING LINE */}
            <div
              className="pointer-events-none absolute top-7 right-[12.5%] left-[12.5%] hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block"
              aria-hidden="true"
            />

            <div className="grid gap-4 lg:grid-cols-4">
              {[
                {
                  number: '01',
                  title: 'Resume Upload',
                  description:
                    'Accept PDF and DOCX resumes and prepare them for downstream analysis.',
                  tag: 'Input',
                },
                {
                  number: '02',
                  title: 'Document Processing',
                  description:
                    'Extract resume content into structured text that can be analyzed by the system.',
                  tag: 'Processing',
                },
                {
                  number: '03',
                  title: 'Skill Intelligence',
                  description:
                    'Use NLP-based extraction to identify technical skills, experience signals, and missing capabilities.',
                  tag: 'NLP / ML',
                },
                {
                  number: '04',
                  title: 'ATS Analysis',
                  description:
                    'Evaluate resume quality and compatibility while identifying areas that can reduce candidate visibility.',
                  tag: 'Evaluation',
                },
                {
                  number: '05',
                  title: 'AI Reasoning',
                  description:
                    'Use Gemini-powered analysis to generate role insights, recommendations, and targeted improvements.',
                  tag: 'Gemini AI',
                },
                {
                  number: '06',
                  title: 'Resume Rewriting',
                  description:
                    'Transform the analysis into an AI-assisted improved version of the resume.',
                  tag: 'Generation',
                },
                {
                  number: '07',
                  title: 'Resume Comparison',
                  description:
                    'Compare resume versions to understand how the document changes after optimization.',
                  tag: 'Iteration',
                },
                {
                  number: '08',
                  title: 'Career Dashboard',
                  description:
                    'Surface analysis, recommendations, and resume intelligence through the application dashboards.',
                  tag: 'Product',
                },
              ].map(({ number, title, description, tag }, index) => (
                <div key={number} className="group relative">
                  {/* PIPELINE NODE */}
                  <div className="bg-background group-hover:border-accent-primary/40 relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.03)] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
                    <span className="text-accent-primary text-xs font-semibold">
                      {number}
                    </span>

                    <div className="border-accent-primary/0 group-hover:border-accent-primary/20 pointer-events-none absolute inset-[-5px] rounded-full border transition-all duration-500" />
                  </div>

                  {/* CARD */}
                  <div className="bg-background relative overflow-hidden rounded-2xl border border-white/10 p-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-white/20 group-hover:bg-white/[0.025]">
                    {/* HOVER LIGHT */}
                    <div
                      className="bg-accent-primary/[0.07] pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />

                    <div className="relative">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-accent-primary text-xs font-medium">
                          {number}
                        </span>

                        <span className="text-text-secondary group-hover:border-accent-primary/20 rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-medium tracking-wider uppercase transition-colors duration-300 group-hover:text-white">
                          {tag}
                        </span>
                      </div>

                      <div className="mt-8">
                        <h3 className="text-xl font-medium tracking-tight">
                          {title}
                        </h3>

                        <p className="text-text-secondary mt-3 text-sm leading-6">
                          {description}
                        </p>
                      </div>

                      {/* PROGRESS LINE */}
                      <div className="mt-8 h-px w-full overflow-hidden bg-white/10">
                        <div className="bg-accent-primary h-full w-0 transition-all duration-700 group-hover:w-full" />
                      </div>
                    </div>
                  </div>

                  {/* MOBILE CONNECTION */}
                  {index < 7 && (
                    <div
                      className="mx-auto my-2 h-4 w-px bg-gradient-to-b from-white/10 to-transparent lg:hidden"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* INTELLIGENCE + OUTPUT */}
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
            {/* INTELLIGENCE LAYER */}
            <div className="group bg-background relative overflow-hidden rounded-2xl border border-white/10 p-6 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.025] md:p-8">
              <div
                className="bg-accent-primary/[0.06] group-hover:bg-accent-primary/[0.09] pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl transition-all duration-700 group-hover:scale-125"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-text-secondary text-xs font-medium tracking-[0.18em] uppercase">
                      Intelligence Layer
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                      One resume, multiple signals.
                    </h3>
                  </div>

                  <div className="border-accent-primary/20 bg-accent-primary/[0.05] relative flex h-11 w-11 items-center justify-center rounded-xl border">
                    <BrainCircuit className="text-accent-primary h-6 w-6" />

                    <span
                      className="border-accent-primary/20 absolute inset-0 animate-ping rounded-xl border"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    'ATS compatibility',
                    'Skill extraction',
                    'Missing skills',
                    'Role fit',
                    'Recommendations',
                    'AI rewriting',
                  ].map((item) => (
                    <span
                      key={item}
                      className="text-text-secondary hover:border-accent-primary/20 hover:bg-accent-primary/[0.04] rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* OUTPUT */}
            <div className="group border-accent-primary/20 bg-accent-primary/[0.04] hover:border-accent-primary/30 hover:bg-accent-primary/[0.06] relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 md:p-8">
              <div
                className="bg-accent-primary/[0.08] pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-accent-primary text-xs font-medium tracking-[0.18em] uppercase">
                    Output
                  </p>

                  <span
                    className="bg-accent-primary h-1.5 w-1.5 animate-pulse rounded-full"
                    aria-hidden="true"
                  />
                </div>

                <p className="text-text-primary mt-4 text-lg leading-7">
                  The final result is not just a score. It is an actionable view
                  of where the resume performs, where it falls short, and what
                  can be improved next.
                </p>

                <div className="from-accent-primary/30 mt-8 h-px w-full bg-gradient-to-r to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section
        id="architecture"
        className="relative isolate overflow-hidden border-t border-white/10"
      >
        {/* AMBIENT ARCHITECTURE LIGHT */}
        <div
          className="bg-accent-primary/[0.055] pointer-events-none absolute top-[-14rem] left-[55%] -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div
          className="bg-accent-primary/[0.035] pointer-events-none absolute bottom-[-16rem] left-[-10rem] -z-10 h-[30rem] w-[30rem] rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            {/* SECTION INTRO */}
            <div>
              <p className="text-accent-primary flex items-center gap-3 text-sm font-medium tracking-[0.22em] uppercase">
                <span
                  className="bg-accent-primary h-1.5 w-1.5 animate-pulse rounded-full"
                  aria-hidden="true"
                />
                03 · System Architecture
              </p>

              <p className="text-text-secondary mt-5 max-w-xs text-sm leading-6">
                The application separates the user experience, API layer, data
                persistence, and intelligence layer so each part has a clear
                responsibility.
              </p>

              {/* ARCHITECTURE SIGNAL */}
              <div className="mt-12 hidden max-w-xs lg:block">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="border-accent-primary/20 bg-accent-primary/[0.05] relative flex h-9 w-9 items-center justify-center rounded-xl border">
                      <BrainCircuit className="text-accent-primary h-4 w-4" />

                      <span
                        className="border-accent-primary/20 absolute inset-0 animate-ping rounded-xl border"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-medium">
                        Layered architecture
                      </p>
                      <p className="text-text-secondary mt-1 text-[11px]">
                        Separated responsibilities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ARCHITECTURE CONTENT */}
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                A full-stack AI system around the resume.
              </h2>

              <p className="text-text-secondary mt-6 max-w-3xl text-base leading-8 sm:text-lg">
                Resume analysis is handled as a pipeline of cooperating services
                rather than a single model call. The frontend manages
                interaction, the backend coordinates processing, the database
                persists application data, and the AI layer turns extracted
                signals into useful career intelligence.
              </p>

              {/* LAYERED ARCHITECTURE */}
              <div className="relative mt-12">
                {/* VERTICAL FLOW LINE */}
                <div
                  className="via-accent-primary/20 pointer-events-none absolute top-10 bottom-10 left-6 hidden w-px bg-gradient-to-b from-white/5 to-transparent md:block"
                  aria-hidden="true"
                />

                <div className="space-y-3">
                  {/* FRONTEND */}
                  <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.03] md:p-8">
                    <div
                      className="bg-accent-primary/[0.05] pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />

                    <div className="relative md:pl-12">
                      <div className="bg-background absolute top-0 left-0 hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 md:flex">
                        <span className="text-accent-primary text-[10px] font-semibold">
                          01
                        </span>
                      </div>

                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <span className="text-accent-primary text-xs font-medium tracking-[0.18em] uppercase">
                            01 · Presentation Layer
                          </span>

                          <h3 className="mt-3 text-xl font-semibold">
                            Next.js / React
                          </h3>

                          <p className="text-text-secondary mt-3 max-w-2xl text-sm leading-6">
                            Handles resume upload, analysis views, dashboards,
                            resume comparison, and the user-facing product
                            experience.
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {['Next.js', 'React', 'Tailwind CSS'].map((item) => (
                            <span
                              key={item}
                              className="text-text-secondary rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs transition-all duration-300 group-hover:border-white/20 group-hover:text-white"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-7 h-px w-full overflow-hidden bg-white/10">
                        <div className="bg-accent-primary h-full w-0 transition-all duration-700 group-hover:w-1/3" />
                      </div>
                    </div>
                  </div>

                  {/* API */}
                  <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.03] md:p-8">
                    <div
                      className="bg-accent-primary/[0.05] pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />

                    <div className="relative md:pl-12">
                      <div className="bg-background absolute top-0 left-0 hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 md:flex">
                        <span className="text-accent-primary text-[10px] font-semibold">
                          02
                        </span>
                      </div>

                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <span className="text-accent-primary text-xs font-medium tracking-[0.18em] uppercase">
                            02 · Application Layer
                          </span>

                          <h3 className="mt-3 text-xl font-semibold">
                            FastAPI Backend
                          </h3>

                          <p className="text-text-secondary mt-3 max-w-2xl text-sm leading-6">
                            Coordinates requests, resume processing,
                            authentication, analysis workflows, and
                            communication between the product interface and
                            intelligence layer.
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {['FastAPI', 'JWT', 'Python'].map((item) => (
                            <span
                              key={item}
                              className="text-text-secondary rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs transition-all duration-300 group-hover:border-white/20 group-hover:text-white"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-7 h-px w-full overflow-hidden bg-white/10">
                        <div className="bg-accent-primary h-full w-0 transition-all duration-700 group-hover:w-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* INTELLIGENCE */}
                  <div className="group border-accent-primary/20 bg-accent-primary/[0.035] hover:border-accent-primary/30 hover:bg-accent-primary/[0.05] relative overflow-hidden rounded-[2rem] border p-6 transition-all duration-500 hover:-translate-y-0.5 md:p-8">
                    <div
                      className="bg-accent-primary/[0.08] pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125"
                      aria-hidden="true"
                    />

                    <div className="relative md:pl-12">
                      <div className="border-accent-primary/20 bg-background absolute top-0 left-0 hidden h-8 w-8 items-center justify-center rounded-full border md:flex">
                        <span className="text-accent-primary text-[10px] font-semibold">
                          03
                        </span>
                      </div>

                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <span className="text-accent-primary text-xs font-medium tracking-[0.18em] uppercase">
                            03 · Intelligence Layer
                          </span>

                          <h3 className="mt-3 text-xl font-semibold">
                            NLP + Machine Learning + Gemini
                          </h3>

                          <p className="text-text-secondary mt-3 max-w-2xl text-sm leading-6">
                            Combines NLP-based skill extraction,
                            machine-learning analysis, and Gemini-powered
                            reasoning to produce resume insights, missing-skill
                            detection, recommendations, and AI-assisted
                            rewriting.
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {['Gemini', 'Scikit-Learn', 'NLP'].map((item) => (
                            <span
                              key={item}
                              className="border-accent-primary/20 bg-accent-primary/[0.05] text-text-secondary group-hover:bg-accent-primary/[0.08] rounded-full border px-3 py-1.5 text-xs transition-all duration-300 group-hover:text-white"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-7 flex items-center gap-3">
                        <div className="from-accent-primary/30 h-px flex-1 bg-gradient-to-r to-transparent" />

                        <span className="text-accent-primary text-[10px] tracking-wider uppercase">
                          Core intelligence
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* DATA */}
                  <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.03] md:p-8">
                    <div
                      className="bg-accent-primary/[0.05] pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />

                    <div className="relative md:pl-12">
                      <div className="bg-background absolute top-0 left-0 hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 md:flex">
                        <span className="text-accent-primary text-[10px] font-semibold">
                          04
                        </span>
                      </div>

                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <span className="text-accent-primary text-xs font-medium tracking-[0.18em] uppercase">
                            04 · Persistence Layer
                          </span>

                          <h3 className="mt-3 text-xl font-semibold">
                            PostgreSQL + SQLAlchemy
                          </h3>

                          <p className="text-text-secondary mt-3 max-w-2xl text-sm leading-6">
                            Persists application data and provides the storage
                            layer for the platform&apos;s user and resume
                            workflows.
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {['PostgreSQL', 'SQLAlchemy'].map((item) => (
                            <span
                              key={item}
                              className="text-text-secondary rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs transition-all duration-300 group-hover:border-white/20 group-hover:text-white"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-7 h-px w-full overflow-hidden bg-white/10">
                        <div className="bg-accent-primary h-full w-0 transition-all duration-700 group-hover:w-1/4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* REQUEST FLOW */}
              <div className="group bg-background relative mt-6 overflow-hidden rounded-[2rem] border border-white/10 p-6 transition-all duration-500 hover:border-white/20 md:p-8">
                <div
                  className="bg-accent-primary/[0.05] pointer-events-none absolute top-[-8rem] left-1/3 h-48 w-48 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125"
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-text-secondary text-xs font-medium tracking-[0.18em] uppercase">
                        Request Flow
                      </p>

                      <p className="mt-2 text-sm font-medium">
                        From upload to intelligence
                      </p>
                    </div>

                    <span
                      className="bg-accent-primary h-1.5 w-1.5 animate-pulse rounded-full"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="text-text-secondary flex flex-wrap items-center gap-2 text-xs">
                    {[
                      'Resume',
                      'Next.js',
                      'FastAPI',
                      'NLP / ML',
                      'Gemini',
                      'PostgreSQL',
                      'Insights',
                    ].map((item, index) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="hover:border-accent-primary/20 hover:bg-accent-primary/[0.04] rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 transition-all duration-300 hover:text-white">
                          {item}
                        </span>

                        {index < 6 && (
                          <span
                            className="text-accent-primary transition-transform duration-300 group-hover:translate-x-0.5"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERING */}
      <section
        id="engineering"
        className="relative isolate overflow-hidden border-y border-white/10 bg-white/[0.015]"
      >
        {/* AMBIENT LIGHTING */}
        <div
          className="bg-accent-primary/[0.045] pointer-events-none absolute top-[-12rem] right-[-12rem] -z-10 h-[32rem] w-[32rem] rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div
          className="bg-accent-primary/[0.03] pointer-events-none absolute bottom-[-14rem] left-[-10rem] -z-10 h-[28rem] w-[28rem] rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          {/* HEADER */}
          <div className="max-w-4xl">
            <p className="text-accent-primary flex items-center gap-3 text-sm font-medium tracking-[0.22em] uppercase">
              <span
                className="bg-accent-primary h-1.5 w-1.5 animate-pulse rounded-full"
                aria-hidden="true"
              />
              04 · Engineering Details
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              The intelligence layer is deliberately split into specialized
              systems.
            </h2>

            <p className="text-text-secondary mt-6 max-w-3xl text-lg leading-8">
              Different parts of resume analysis require different techniques.
              The system uses deterministic document processing and transparent
              similarity methods where interpretability matters, while
              generative AI is introduced where natural-language reasoning and
              rewriting provide more value.
            </p>
          </div>

          {/* ENGINEERING SYSTEMS */}
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {[
              {
                number: '01',
                title: 'Document Processing',
                label: 'Input Layer',
                text: 'PDF and DOCX files are converted into analyzable text before the intelligence pipeline begins.',
              },
              {
                number: '02',
                title: 'Role Classification',
                label: 'ML Layer',
                text: 'A trained classifier and TF-IDF vectorizer use resume content to predict the most relevant job category.',
              },
              {
                number: '03',
                title: 'ATS Matching',
                label: 'Evaluation Layer',
                text: 'TF-IDF vectors and cosine similarity provide a transparent compatibility score between resume content and a target job description.',
              },
              {
                number: '04',
                title: 'Generative AI',
                label: 'Reasoning Layer',
                text: 'Gemini is used where natural-language generation adds value, including feedback, recommendations, and resume rewriting.',
              },
            ].map(({ number, title, label, text }) => (
              <div
                key={number}
                className="group bg-background relative overflow-hidden rounded-[2rem] border border-white/10 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.025] md:p-8"
              >
                {/* CARD LIGHT */}
                <div
                  className="bg-accent-primary/[0.055] pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative">
                  {/* TOP ROW */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="border-accent-primary/20 bg-accent-primary/[0.05] text-accent-primary flex h-9 w-9 items-center justify-center rounded-xl border text-xs font-semibold">
                        {number}
                      </span>

                      <span className="text-text-secondary text-[10px] font-medium tracking-[0.14em] uppercase">
                        Engineering System
                      </span>
                    </div>

                    <span className="text-text-secondary rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium tracking-[0.12em] uppercase transition-colors duration-300 group-hover:border-white/20 group-hover:text-white">
                      {label}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <h3 className="mt-8 text-xl font-semibold tracking-tight">
                    {title}
                  </h3>

                  <p className="text-text-secondary mt-4 leading-7">{text}</p>

                  {/* PROGRESS LINE */}
                  <div className="mt-8 h-px w-full overflow-hidden bg-white/10">
                    <div className="bg-accent-primary h-full w-0 transition-all duration-700 ease-out group-hover:w-full" />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-text-secondary text-[10px] tracking-[0.14em] uppercase">
                      Specialized responsibility
                    </span>

                    <span
                      className="text-accent-primary translate-x-0 opacity-40 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ENGINEERING PRINCIPLE + FLOW */}
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {/* DESIGN PRINCIPLE */}
            <div className="group bg-background relative overflow-hidden rounded-[2rem] border border-white/10 p-7 transition-all duration-500 hover:border-white/20 md:p-8">
              <div
                className="bg-accent-primary/[0.045] pointer-events-none absolute -right-24 -bottom-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-accent-primary text-xs font-medium tracking-[0.18em] uppercase">
                    Design Principle
                  </p>

                  <span className="border-accent-primary/20 bg-accent-primary/[0.05] text-accent-primary flex h-8 w-8 items-center justify-center rounded-lg border text-xs">
                    ✦
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                  Use the right technique for the right problem.
                </h3>

                <p className="text-text-secondary mt-4 leading-7">
                  Classification and similarity scoring provide structured
                  signals that can be evaluated directly. Generative AI is then
                  used for the parts of the experience that benefit from
                  contextual language generation.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <span className="h-px flex-1 bg-white/10" />
                  <span className="text-text-secondary text-[10px] tracking-[0.14em] uppercase">
                    Deterministic → Generative
                  </span>
                </div>
              </div>
            </div>

            {/* INTELLIGENCE FLOW */}
            <div className="group border-accent-primary/20 bg-accent-primary/[0.035] hover:border-accent-primary/30 hover:bg-accent-primary/[0.045] relative overflow-hidden rounded-[2rem] border p-7 transition-all duration-500 md:p-8">
              <div
                className="bg-accent-primary/[0.07] pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-accent-primary text-xs font-medium tracking-[0.18em] uppercase">
                      Intelligence Flow
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                      Signals become decisions.
                    </h3>
                  </div>

                  <span
                    className="bg-accent-primary h-1.5 w-1.5 animate-pulse rounded-full"
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-2">
                  {[
                    'Resume text',
                    'TF-IDF',
                    'Classification',
                    'Similarity',
                    'Gemini',
                    'Actionable output',
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-text-secondary hover:border-accent-primary/20 hover:bg-accent-primary/[0.05] rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs transition-all duration-300 hover:text-white">
                        {item}
                      </span>

                      {index < 5 && (
                        <span
                          className="text-accent-primary transition-transform duration-300 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="from-accent-primary/30 via-accent-primary/10 mt-8 h-px w-full bg-gradient-to-r to-transparent" />

                <p className="text-text-secondary mt-4 text-xs leading-5">
                  Structured analysis creates the signals that the generation
                  layer can turn into useful candidate-facing recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERING DECISIONS */}
      <section className="relative isolate overflow-hidden">
        {/* AMBIENT LIGHT */}
        <div
          className="bg-accent-primary/[0.035] pointer-events-none absolute top-[-10rem] left-[-12rem] -z-10 h-[30rem] w-[30rem] rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div
          className="bg-accent-primary/[0.025] pointer-events-none absolute right-[-10rem] bottom-[-14rem] -z-10 h-[28rem] w-[28rem] rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          {/* HEADER */}
          <div className="max-w-4xl">
            <p className="text-accent-primary flex items-center gap-3 text-sm font-medium tracking-[0.22em] uppercase">
              <span
                className="bg-accent-primary h-1.5 w-1.5 animate-pulse rounded-full"
                aria-hidden="true"
              />
              05 · Engineering Decisions
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Why these techniques?
            </h2>

            <p className="text-text-secondary mt-6 max-w-3xl text-lg leading-8">
              The architecture is based on choosing the simplest technique that
              provides a useful and interpretable signal, while reserving
              generative AI for problems where natural-language reasoning adds
              clear value.
            </p>
          </div>

          {/* DECISION MATRIX */}
          <div className="mt-14 space-y-4">
            {[
              {
                number: '01',
                question: 'Why TF-IDF + cosine similarity?',
                answer:
                  'It provides a lightweight and interpretable way to compare resume content with a target job description.',
                decision: 'Transparent similarity',
                tradeoff:
                  'Less semantic understanding than larger language models, but easier to inspect and reason about.',
              },
              {
                number: '02',
                question: 'Why a separate role classifier?',
                answer:
                  'Role prediction is treated as a classification problem instead of delegating every decision to a generative model.',
                decision: 'Dedicated prediction layer',
                tradeoff:
                  'Requires a trained classifier, but keeps role prediction separate from free-form generation.',
              },
              {
                number: '03',
                question: 'Why deterministic skill extraction?',
                answer:
                  'A defined skills database provides predictable skill detection and makes missing-skill analysis easier to reason about.',
                decision: 'Controlled skill vocabulary',
                tradeoff:
                  'The approach depends on the coverage of the defined skills database.',
              },
              {
                number: '04',
                question: 'Why Gemini for rewriting?',
                answer:
                  'Generative AI is most useful where natural language generation is required: feedback, recommendations, and rewriting.',
                decision: 'Generation where it adds value',
                tradeoff:
                  'Output is less deterministic than rule-based processing and requires appropriate prompting and validation.',
              },
            ].map(({ number, question, answer, decision, tradeoff }) => (
              <div
                key={question}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.03]"
              >
                {/* HOVER LIGHT */}
                <div
                  className="bg-accent-primary/[0.05] pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative p-6 md:p-8">
                  <div className="grid gap-8 lg:grid-cols-[auto_1.2fr_0.8fr] lg:items-start">
                    {/* NUMBER */}
                    <div className="flex items-center gap-3 lg:block">
                      <div className="border-accent-primary/20 bg-accent-primary/[0.05] text-accent-primary flex h-10 w-10 items-center justify-center rounded-xl border text-xs font-semibold">
                        {number}
                      </div>

                      <span className="text-text-secondary text-[10px] font-medium tracking-[0.14em] uppercase lg:mt-3 lg:block">
                        Decision
                      </span>
                    </div>

                    {/* MAIN DECISION */}
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                        {question}
                      </h3>

                      <p className="text-text-secondary mt-4 max-w-2xl leading-7">
                        {answer}
                      </p>
                    </div>

                    {/* ENGINEERING RESULT */}
                    <div className="bg-background/70 rounded-2xl border border-white/10 p-5 backdrop-blur">
                      <p className="text-accent-primary text-[10px] font-medium tracking-[0.16em] uppercase">
                        Design choice
                      </p>

                      <p className="mt-3 text-sm font-medium">{decision}</p>

                      <div className="mt-5 h-px bg-white/10" />

                      <p className="text-text-secondary mt-4 text-xs leading-5">
                        <span className="text-text-primary font-medium">
                          Trade-off:
                        </span>{' '}
                        {tradeoff}
                      </p>
                    </div>
                  </div>

                  {/* BOTTOM SIGNAL */}
                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-px flex-1 overflow-hidden bg-white/10">
                      <div className="bg-accent-primary h-full w-0 transition-all duration-700 group-hover:w-1/3" />
                    </div>

                    <span className="text-text-secondary text-[10px] tracking-[0.14em] uppercase">
                      Engineering rationale
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FINAL PRINCIPLE */}
          <div className="border-accent-primary/20 bg-accent-primary/[0.035] relative mt-6 overflow-hidden rounded-[2rem] border p-7 md:p-8">
            <div
              className="bg-accent-primary/[0.07] pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl"
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <p className="text-accent-primary text-xs font-medium tracking-[0.18em] uppercase">
                  Core Principle
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Deterministic signals first. Generative intelligence where it
                  matters.
                </h3>

                <p className="text-text-secondary mt-3 leading-7">
                  The system does not treat every resume-analysis problem as an
                  AI generation problem. Structured methods establish the
                  signals, while Gemini adds contextual language generation
                  where it provides additional value.
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2 text-xs">
                <span className="bg-background rounded-full border border-white/10 px-3 py-2">
                  Structured
                </span>

                <span className="text-accent-primary" aria-hidden="true">
                  →
                </span>

                <span className="border-accent-primary/20 bg-accent-primary/[0.06] rounded-full border px-3 py-2">
                  Generative
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANALYSIS ENGINE */}
      <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.015]">
        {/* Ambient lighting */}
        <div
          className="bg-accent-primary/[0.035] pointer-events-none absolute top-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full blur-[120px]"
          aria-hidden="true"
        />

        <div
          className="bg-accent-primary/[0.025] pointer-events-none absolute top-1/3 -right-32 h-72 w-72 rounded-full blur-[100px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="bg-accent-primary h-px w-8" />

              <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
                06 · Analysis Engine
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              One resume. Multiple signals.
            </h2>

            <p className="text-text-secondary mt-6 max-w-3xl text-lg leading-8">
              Instead of reducing a resume to a single score, the analysis
              engine extracts several independent signals that can be combined
              into a more useful picture of role fit, skills, ATS compatibility,
              and improvement opportunities.
            </p>
          </div>

          {/* SIGNAL CARDS */}
          <div className="relative mt-14 grid gap-5 lg:grid-cols-3">
            {/* Signal 01 */}
            <div className="group bg-background hover:border-accent-primary/30 relative overflow-hidden rounded-2xl border border-white/10 p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(255,255,255,0.035)]">
              <div
                className="bg-accent-primary/[0.06] pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-text-secondary text-xs tracking-wider uppercase">
                    Signal 01
                  </p>

                  <span className="text-text-secondary group-hover:border-accent-primary/20 rounded-full border border-white/10 px-2.5 py-1 text-[10px] transition-colors duration-300 group-hover:text-white">
                    Similarity
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                  ATS compatibility
                </h3>

                <p className="text-text-secondary mt-4 text-sm leading-6">
                  TF-IDF representations and cosine similarity are used to
                  compare resume content against a target job description.
                </p>

                <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text-secondary">Resume</span>

                    <span className="text-text-secondary">Job description</span>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                      <div className="bg-accent-primary h-full w-3/4 origin-left rounded-full transition-transform duration-700 group-hover:scale-x-105" />
                    </div>

                    <span className="text-accent-primary text-xs">↔</span>

                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                      <div className="bg-accent-primary h-full w-2/3 origin-left rounded-full transition-transform duration-700 group-hover:scale-x-105" />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-text-secondary text-[10px] tracking-wider uppercase">
                      Vector representation
                    </span>

                    <span className="text-[10px] text-white/50">
                      Cosine similarity
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Signal 02 */}
            <div className="group bg-background hover:border-accent-primary/30 relative overflow-hidden rounded-2xl border border-white/10 p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(255,255,255,0.035)]">
              <div
                className="bg-accent-primary/[0.06] pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-text-secondary text-xs tracking-wider uppercase">
                    Signal 02
                  </p>

                  <span className="text-text-secondary group-hover:border-accent-primary/20 rounded-full border border-white/10 px-2.5 py-1 text-[10px] transition-colors duration-300 group-hover:text-white">
                    Classification
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                  Role prediction
                </h3>

                <p className="text-text-secondary mt-4 text-sm leading-6">
                  Resume text is transformed with TF-IDF and passed through the
                  trained classification pipeline to predict a relevant job
                  category.
                </p>

                <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-text-secondary text-xs tracking-wider uppercase">
                    Predicted category
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <div className="border-accent-primary/20 bg-accent-primary/[0.06] flex h-9 w-9 items-center justify-center rounded-lg border">
                      <span className="text-accent-primary text-xs font-semibold">
                        AI
                      </span>
                    </div>

                    <p className="text-lg font-medium">AI / ML Engineer</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {['NLP', 'ML', 'Python'].map((skill) => (
                      <span
                        key={skill}
                        className="text-text-secondary rounded-full border border-white/10 px-2.5 py-1 text-[10px] transition-colors duration-300 group-hover:border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Signal 03 */}
            <div className="group bg-background hover:border-accent-primary/30 relative overflow-hidden rounded-2xl border border-white/10 p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(255,255,255,0.035)]">
              <div
                className="bg-accent-primary/[0.06] pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-text-secondary text-xs tracking-wider uppercase">
                    Signal 03
                  </p>

                  <span className="text-text-secondary group-hover:border-accent-primary/20 rounded-full border border-white/10 px-2.5 py-1 text-[10px] transition-colors duration-300 group-hover:text-white">
                    Skill Intelligence
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                  Skill matching
                </h3>

                <p className="text-text-secondary mt-4 text-sm leading-6">
                  Extracted skills are used to surface existing strengths and
                  identify capabilities that may be missing from the target
                  profile.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {['Python', 'SQL', 'Machine Learning', 'FastAPI', 'NLP'].map(
                    (skill, index) => (
                      <span
                        key={skill}
                        className="text-text-secondary group-hover:border-accent-primary/20 group-hover:bg-accent-primary/[0.04] rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs transition-all duration-300"
                        style={{
                          transitionDelay: `${index * 40}ms`,
                        }}
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>

                <div className="mt-7 grid grid-cols-5 gap-1.5">
                  {[1, 1, 1, 1, 0].map((active, index) => (
                    <div
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        active ? 'bg-accent-primary' : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-text-secondary mt-3 text-[10px] tracking-wider uppercase">
                  Extracted skill signals
                </p>
              </div>
            </div>
          </div>

          {/* DECISION LAYER */}
          <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="group border-accent-primary/20 bg-accent-primary/[0.04] hover:border-accent-primary/30 relative overflow-hidden rounded-2xl border p-7 transition-all duration-500 md:p-8">
              <div
                className="bg-accent-primary/[0.08] pointer-events-none absolute -right-24 -bottom-24 h-56 w-56 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125"
                aria-hidden="true"
              />

              <div className="relative">
                <p className="text-accent-primary text-xs font-medium tracking-[0.18em] uppercase">
                  Decision Layer
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  Turn signals into actions.
                </h3>

                <p className="text-text-secondary mt-4 leading-7">
                  The analysis becomes useful when the extracted signals lead to
                  specific improvements rather than simply reporting what is
                  already present in the resume.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <span className="border-background flex h-8 w-8 items-center justify-center rounded-full border bg-white/[0.08] text-[10px]">
                      ATS
                    </span>
                    <span className="border-background flex h-8 w-8 items-center justify-center rounded-full border bg-white/[0.08] text-[10px]">
                      ML
                    </span>
                    <span className="border-background flex h-8 w-8 items-center justify-center rounded-full border bg-white/[0.08] text-[10px]">
                      AI
                    </span>
                  </div>

                  <span className="text-text-secondary text-xs">
                    Signals → recommendations
                  </span>
                </div>
              </div>
            </div>

            {/* Recommendation engine */}
            <div className="group bg-background relative overflow-hidden rounded-2xl border border-white/10 p-7 transition-all duration-500 hover:border-white/20 md:p-8">
              <div
                className="bg-accent-primary/[0.025] pointer-events-none absolute top-0 right-0 h-48 w-48 rounded-full blur-3xl"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Recommendation engine</p>

                  <span className="text-text-secondary text-[10px] tracking-wider uppercase">
                    Actionable output
                  </span>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    'Add measurable project outcomes',
                    'Strengthen technical keywords',
                    'Improve project descriptions',
                    'Use stronger action verbs',
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="group/item hover:border-accent-primary/20 hover:bg-accent-primary/[0.03] flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <span className="text-accent-primary text-xs font-medium">
                        0{index + 1}
                      </span>

                      <span className="text-text-secondary text-sm leading-5 transition-colors duration-300 group-hover/item:text-white">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Signal flow */}
          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
              {[
                'Resume text',
                'ATS signal',
                'Role signal',
                'Skill signal',
                'Recommendations',
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="text-text-secondary hover:border-accent-primary/20 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 transition-colors duration-300 hover:text-white">
                    {item}
                  </span>

                  {index < 4 && (
                    <span className="text-accent-primary/60" aria-hidden="true">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESUME EVOLUTION */}
      <section className="relative overflow-hidden">
        {/* Ambient section lighting */}
        <div
          className="bg-accent-primary/[0.06] pointer-events-none absolute top-1/3 left-1/4 -z-10 h-80 w-80 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
              07 · Resume Evolution
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Improvement becomes visible across versions.
            </h2>

            <p className="text-text-secondary mt-6 max-w-3xl text-lg leading-8">
              A resume is not treated as a one-time document. Each version can
              be analyzed again so candidates can understand what changed, which
              signals improved, and where further refinement is needed.
            </p>
          </div>

          {/* VERSION FLOW */}
          <div className="relative mt-14 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
            {/* Version 01 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.035] md:p-8">
              {/* Hover light */}
              <div
                className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-white/[0.04] blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-text-secondary text-xs tracking-wider uppercase">
                    Version 01
                  </p>

                  <span className="text-text-secondary rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-medium tracking-wider uppercase">
                    Baseline
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                  Initial resume
                </h3>

                <p className="text-text-secondary mt-3 text-sm leading-6">
                  The starting point establishes the candidate&apos;s existing
                  profile before optimization.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    'Initial skill profile',
                    'Existing project descriptions',
                    'Current keyword coverage',
                    'Baseline ATS similarity',
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 group-hover:border-white/15"
                    >
                      <span className="text-text-secondary text-xs">
                        0{index + 1}
                      </span>

                      <span className="text-text-secondary text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Transition */}
            <div className="hidden items-center justify-center lg:flex">
              <div className="flex flex-col items-center gap-3">
                <span className="text-text-secondary text-[10px] font-medium tracking-[0.18em] uppercase">
                  Iterate
                </span>

                <div className="border-accent-primary/20 bg-accent-primary/[0.05] relative flex h-12 w-12 items-center justify-center rounded-full border">
                  <span className="text-accent-primary text-xl">→</span>

                  <div
                    className="border-accent-primary/10 pointer-events-none absolute inset-0 animate-pulse rounded-full border"
                    aria-hidden="true"
                  />
                </div>

                <span className="text-text-secondary text-[10px] font-medium tracking-[0.18em] uppercase">
                  Re-analyze
                </span>
              </div>
            </div>

            {/* Mobile transition */}
            <div className="flex items-center justify-center lg:hidden">
              <div className="border-accent-primary/20 bg-accent-primary/[0.05] flex h-12 w-12 items-center justify-center rounded-full border">
                <span className="text-accent-primary text-xl">↓</span>
              </div>
            </div>

            {/* Version 02 */}
            <div className="group border-accent-primary/20 bg-accent-primary/[0.04] hover:border-accent-primary/30 hover:bg-accent-primary/[0.055] relative overflow-hidden rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1 md:p-8">
              {/* Accent glow */}
              <div
                className="bg-accent-primary/10 group-hover:bg-accent-primary/15 pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full blur-3xl transition-all duration-500"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-text-secondary text-xs tracking-wider uppercase">
                    Version 02
                  </p>

                  <span className="border-accent-primary/20 bg-accent-primary/[0.05] text-text-secondary rounded-full border px-3 py-1.5 text-[10px] font-medium tracking-wider uppercase">
                    Improved
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                  Refined resume
                </h3>

                <p className="text-text-secondary mt-3 text-sm leading-6">
                  The improved version reflects targeted changes based on the
                  analysis and recommendations.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    'Updated skill profile',
                    'Stronger project descriptions',
                    'Improved keyword alignment',
                    'Re-evaluated ATS similarity',
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="group-hover:border-accent-primary/15 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300"
                    >
                      <span className="text-accent-primary text-xs">
                        0{index + 1}
                      </span>

                      <span className="text-text-secondary text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* COMPARISON PANEL */}
          <div className="group bg-background relative mt-6 overflow-hidden rounded-2xl border border-white/10 p-7 transition-all duration-500 hover:border-white/20 md:p-8">
            <div
              className="bg-accent-primary/[0.05] group-hover:bg-accent-primary/[0.08] pointer-events-none absolute bottom-0 -left-24 h-40 w-40 rounded-full blur-3xl transition-all duration-500"
              aria-hidden="true"
            />

            <div className="relative grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div>
                <p className="text-accent-primary text-xs font-medium tracking-[0.18em] uppercase">
                  Version comparison
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  Track the direction of improvement.
                </h3>

                <p className="text-text-secondary mt-3 max-w-md text-sm leading-6">
                  The system makes resume iteration observable instead of
                  treating every upload as an isolated analysis.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ['Skills', 'What changed?'],
                  ['Keywords', 'What aligned?'],
                  ['ATS', 'What improved?'],
                ].map(([title, description], index) => (
                  <div
                    key={title}
                    className="group/card rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{title}</p>

                      <span className="text-accent-primary text-[10px]">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="text-text-secondary mt-2 text-xs leading-5">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-text-secondary mt-6 text-sm leading-6">
            Version comparison is designed to support measurable
            before-and-after evaluation. Numerical improvement should only be
            displayed after the corresponding measurements have been generated
            from controlled runs.
          </p>
        </div>
      </section>

      {/* RECRUITER VIEW */}
      <section className="relative isolate overflow-hidden border-y border-white/10 bg-white/[0.015]">
        {/* AMBIENT RECRUITER LIGHTING */}
        <div
          className="bg-accent-primary/[0.045] pointer-events-none absolute top-[-12rem] right-[-10rem] -z-10 h-[30rem] w-[30rem] rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div
          className="bg-accent-primary/[0.025] pointer-events-none absolute bottom-[-10rem] left-[-10rem] -z-10 h-[26rem] w-[26rem] rounded-full blur-3xl"
          aria-hidden="true"
        />

        {/* CONTENT WRAPPER */}
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
              09 · Recruiter View
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              The same intelligence can support recruiter workflows.
            </h2>

            <p className="text-text-secondary mt-6 max-w-3xl text-lg leading-8">
              The analysis pipeline can also be viewed from a recruiter
              perspective: candidates can be compared using structured signals
              instead of relying only on manual resume inspection.
            </p>
          </div>

          <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            {/* SUMMARY CARDS */}
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  label: 'Candidate pool',
                  value: 'Resume history',
                  text: 'Access previously analyzed resumes.',
                },
                {
                  label: 'Comparison',
                  value: 'Structured signals',
                  text: 'Compare role fit, skills, and ATS similarity.',
                },
                {
                  label: 'Decision support',
                  value: 'Candidate insights',
                  text: 'Surface relevant information for review.',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group bg-background relative overflow-hidden rounded-2xl border border-white/10 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.025]"
                >
                  <div
                    className="bg-accent-primary/[0.05] pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="relative">
                    <p className="text-text-secondary text-xs tracking-wider uppercase">
                      {item.label}
                    </p>

                    <p className="mt-4 text-xl font-semibold tracking-tight">
                      {item.value}
                    </p>

                    <p className="text-text-secondary mt-3 text-sm leading-6">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CANDIDATE COMPARISON */}
            <div className="bg-background mt-5 rounded-2xl border border-white/10 p-6 md:p-7">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-medium">Candidate comparison</p>

                  <p className="text-text-secondary mt-2 text-sm leading-6">
                    A recruiter-facing workflow can organize candidates around
                    the signals already produced by the analysis engine.
                  </p>
                </div>

                <span className="border-accent-primary/20 bg-accent-primary/[0.05] text-text-secondary w-fit rounded-full border px-3 py-1.5 text-[10px] font-medium tracking-wider uppercase">
                  Decision support
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  [
                    '01',
                    'Resume profile',
                    'Skills, experience, and extracted signals',
                  ],
                  [
                    '02',
                    'Role alignment',
                    'Predicted role and target-job similarity',
                  ],
                  [
                    '03',
                    'Improvement areas',
                    'Missing skills and resume recommendations',
                  ],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="group grid gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] md:grid-cols-[auto_0.7fr_1.3fr] md:items-center"
                  >
                    <span className="text-accent-primary text-xs font-medium">
                      {number}
                    </span>

                    <span className="text-sm font-medium">{title}</span>

                    <span className="text-text-secondary text-sm">
                      {description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* WORKFLOW */}
            <div className="border-accent-primary/20 bg-accent-primary/[0.04] mt-5 rounded-2xl border p-6 md:p-7">
              <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-center">
                <div>
                  <p className="text-accent-primary text-xs font-medium tracking-[0.18em] uppercase">
                    Workflow
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                    From many resumes to structured review.
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {[
                    'Resume pool',
                    'Analysis',
                    'Role fit',
                    'Skill gaps',
                    'Comparison',
                    'Review',
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-text-secondary rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                        {item}
                      </span>

                      {index < 5 && (
                        <span
                          className="text-accent-primary"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="text-text-secondary mt-6 text-sm leading-6">
            This section presents the recruiter-oriented workflow and
            decision-support concept rather than claiming a production-scale
            recruiter benchmark.
          </p>
        </div>
      </section>

      {/* EVALUATION */}
      <section className="relative isolate overflow-hidden border-y border-white/10 bg-white/[0.015]">
        {/* AMBIENT EVALUATION LIGHTING */}
        <div
          className="bg-accent-primary/[0.035] pointer-events-none absolute -top-40 right-[-10rem] -z-10 h-[32rem] w-[32rem] rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div
          className="bg-accent-primary/[0.02] pointer-events-none absolute -bottom-40 left-[-12rem] -z-10 h-[28rem] w-[28rem] rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
              10 · Evaluation
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Evaluate the system with evidence, not invented numbers.
            </h2>

            <p className="text-text-secondary mt-6 max-w-3xl text-lg leading-8">
              The system contains multiple analysis components, so evaluation
              should measure each component independently before considering the
              complete resume experience.
            </p>
          </div>

          {/* EVALUATION LAYERS */}
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {[
              {
                number: '01',
                title: 'Role Classification',
                label: 'ML Evaluation',
                text: 'Evaluate the trained role-classification pipeline using held-out data and classification metrics such as precision, recall, F1-score, and accuracy.',
              },
              {
                number: '02',
                title: 'ATS Similarity',
                label: 'Similarity Evaluation',
                text: 'Evaluate whether similarity scores meaningfully reflect alignment between resume content and target job descriptions.',
              },
              {
                number: '03',
                title: 'Skill Matching',
                label: 'Extraction Evaluation',
                text: 'Measure whether the skill extraction and matching pipeline identifies relevant skills while correctly surfacing missing capabilities.',
              },
              {
                number: '04',
                title: 'AI Rewriting',
                label: 'Generation Evaluation',
                text: 'Assess rewritten content for relevance, clarity, preservation of important information, and alignment with the identified improvement targets.',
              },
            ].map(({ number, title, label, text }) => (
              <div
                key={number}
                className="group bg-background relative overflow-hidden rounded-2xl border border-white/10 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.025]"
              >
                {/* CARD LIGHT */}
                <div
                  className="bg-accent-primary/[0.045] pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-accent-primary text-xs font-medium">
                      {number}
                    </span>

                    <span className="text-text-secondary rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-medium tracking-[0.12em] uppercase transition-colors duration-300 group-hover:border-white/20">
                      {label}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-semibold tracking-tight">
                    {title}
                  </h3>

                  <p className="text-text-secondary mt-4 leading-7">{text}</p>

                  <div className="group-hover:bg-accent-primary/30 mt-8 h-px w-full bg-white/10 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* EVALUATION PRINCIPLE + STATUS */}
          <div className="mt-6 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="border-accent-primary/20 bg-accent-primary/[0.04] hover:border-accent-primary/30 rounded-2xl border p-7 transition-all duration-500 md:p-8">
              <p className="text-accent-primary text-xs font-medium tracking-[0.18em] uppercase">
                Evaluation Principle
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                Measure each layer before judging the product.
              </h3>

              <p className="text-text-secondary mt-4 leading-7">
                Classification, similarity, skill extraction, and generation
                solve different problems. Their evaluation should therefore use
                metrics appropriate to each component rather than collapsing
                everything into one headline score.
              </p>
            </div>

            <div className="bg-background rounded-2xl border border-white/10 p-7 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium">Current evaluation status</p>

                <span className="text-text-secondary rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-medium tracking-wider uppercase">
                  Validation
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  ['Role prediction', 'Evaluation framework defined'],
                  ['ATS similarity', 'Evaluation framework defined'],
                  ['Skill matching', 'Evaluation framework defined'],
                  ['AI rewriting', 'Qualitative evaluation required'],
                ].map(([item, status]) => (
                  <div
                    key={item}
                    className="group flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.045] sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="text-sm font-medium">{item}</span>

                    <span className="text-text-secondary text-xs transition-colors duration-300 group-hover:text-white/70">
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VALIDATION NOTE */}
          <div className="border-accent-primary/15 bg-accent-primary/[0.025] mt-6 rounded-2xl border p-6 md:p-7">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-accent-primary text-xs font-medium tracking-[0.18em] uppercase">
                  Validation Status
                </p>

                <p className="text-text-secondary mt-3 max-w-4xl text-sm leading-6">
                  No numerical benchmark is claimed here until controlled
                  experiments have been performed on the implemented system and
                  the resulting measurements have been recorded.
                </p>
              </div>

              <span className="text-text-secondary shrink-0 rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-medium tracking-wider uppercase">
                Evidence first
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* LESSONS LEARNED */}
      <section className="relative isolate overflow-hidden border-t border-white/10">
        {/* AMBIENT LIGHTING */}
        <div
          className="bg-accent-primary/[0.035] pointer-events-none absolute top-[-12rem] left-[-10rem] -z-10 h-[30rem] w-[30rem] rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div
          className="bg-accent-primary/[0.025] pointer-events-none absolute right-[-10rem] bottom-[-12rem] -z-10 h-[28rem] w-[28rem] rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
              11 · Lessons Learned
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Building an AI product is more than calling a model.
            </h2>

            <p className="text-text-secondary mt-6 max-w-3xl text-lg leading-8">
              The most important lessons came from designing the system around
              the model rather than treating the model as the entire product.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Separate analysis from generation',
                text: 'Deterministic signals and generative output serve different purposes. Keeping them separate makes the system easier to reason about, evaluate, and improve.',
              },
              {
                number: '02',
                title: 'Structured intermediate results matter',
                text: 'Scores, extracted skills, role predictions, gaps, and recommendations become reusable product data instead of disappearing inside a single model response.',
              },
              {
                number: '03',
                title: 'AI needs a product around it',
                text: 'The useful system is the complete flow from upload and analysis to storage, comparison, explanation, rewriting, and continuous improvement.',
              },
            ].map(({ number, title, text }) => (
              <div
                key={number}
                className="group bg-background relative overflow-hidden rounded-2xl border border-white/10 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.025]"
              >
                {/* CARD LIGHT */}
                <div
                  className="bg-accent-primary/[0.06] pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-accent-primary text-xs font-medium">
                      {number}
                    </span>

                    <span className="text-text-secondary rounded-full border border-white/10 px-2.5 py-1 text-[10px] tracking-wider uppercase">
                      Lesson
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-semibold tracking-tight">
                    {title}
                  </h3>

                  <p className="text-text-secondary mt-4 leading-7">{text}</p>

                  <div className="group-hover:bg-accent-primary/30 mt-8 h-px w-full bg-white/10 transition-all duration-500" />

                  <div className="mt-5 flex items-center gap-2">
                    <span className="bg-accent-primary h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover:scale-150" />

                    <span className="text-text-secondary text-xs">
                      Applied to system design
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PRINCIPLE */}
          <div className="border-accent-primary/20 bg-accent-primary/[0.035] relative mt-6 overflow-hidden rounded-2xl border p-7 md:p-8">
            <div
              className="bg-accent-primary/[0.05] pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full blur-3xl"
              aria-hidden="true"
            />

            <div className="relative grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-center">
              <div>
                <p className="text-accent-primary text-xs font-medium tracking-[0.18em] uppercase">
                  Core Principle
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  Build the intelligence layer as a system.
                </h3>
              </div>

              <p className="text-text-secondary leading-7">
                The model is only one component. Reliable AI products require
                structured inputs, transparent processing, persistence,
                evaluation, user feedback, and a clear interface that turns
                intelligence into useful decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE DIRECTION */}
      <section className="relative isolate overflow-hidden border-t border-white/10">
        {/* AMBIENT FUTURE LIGHTING */}
        <div
          className="bg-accent-primary/[0.035] pointer-events-none absolute top-[-14rem] right-[-12rem] -z-10 h-[34rem] w-[34rem] rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div
          className="bg-accent-primary/[0.02] pointer-events-none absolute bottom-[-12rem] left-[-10rem] -z-10 h-[28rem] w-[28rem] rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-accent-primary text-sm font-medium tracking-[0.22em] uppercase">
              12 · Future Direction
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              The next iteration turns resume analysis into a broader career
              intelligence platform.
            </h2>

            <p className="text-text-secondary mt-6 max-w-3xl text-lg leading-8">
              The current system establishes the foundation for deeper role
              evaluation, candidate workflows, interview preparation, and
              application intelligence.
            </p>
          </div>

          {/* FUTURE CAPABILITIES */}
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              'Multi-role evaluation',
              'Candidate ranking',
              'Interview preparation',
              'Application tracking',
              'Resume templates',
            ].map((item, index) => (
              <div
                key={item}
                className="group bg-background relative overflow-hidden rounded-2xl border border-white/10 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.025]"
              >
                {/* CARD LIGHT */}
                <div
                  className="bg-accent-primary/[0.045] pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-accent-primary text-xs font-medium">
                      0{index + 1}
                    </span>

                    <span className="text-text-secondary text-[10px] font-medium tracking-[0.14em] uppercase">
                      Next
                    </span>
                  </div>

                  <p className="mt-7 text-sm leading-6 font-medium">{item}</p>

                  <div className="group-hover:bg-accent-primary/30 mt-7 h-px w-full bg-white/10 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* DIRECTION */}
          <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="border-accent-primary/20 bg-accent-primary/[0.035] rounded-2xl border p-7 md:p-8">
              <p className="text-accent-primary text-xs font-medium tracking-[0.18em] uppercase">
                Product Direction
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                Move from resume optimization toward career intelligence.
              </h3>

              <p className="text-text-secondary mt-4 leading-7">
                Future iterations can build on the existing analysis pipeline to
                support multiple target roles, candidate comparison, interview
                preparation, application tracking, and more structured resume
                generation.
              </p>
            </div>

            <div className="bg-background rounded-2xl border border-white/10 p-7 md:p-8">
              <p className="text-sm font-medium">Expansion path</p>

              <div className="mt-6 space-y-3">
                {[
                  ['01', 'Analyze', 'Understand the current resume'],
                  ['02', 'Optimize', 'Improve role alignment and content'],
                  ['03', 'Compare', 'Evaluate against multiple opportunities'],
                  [
                    '04',
                    'Prepare',
                    'Extend insights into interview preparation',
                  ],
                ].map(([number, title, text]) => (
                  <div
                    key={number}
                    className="group flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.045]"
                  >
                    <span className="text-accent-primary text-xs font-medium">
                      {number}
                    </span>

                    <div>
                      <p className="text-sm font-medium">{title}</p>
                      <p className="text-text-secondary mt-1 text-xs leading-5">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CLOSING STATEMENT */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-text-secondary text-xs font-medium tracking-[0.18em] uppercase">
                  Long-term direction
                </p>

                <p className="mt-3 max-w-3xl text-lg leading-7">
                  The goal is not simply to make resumes better. It is to make
                  the decisions surrounding a candidate&apos;s career more
                  informed, explainable, and actionable.
                </p>
              </div>

              <span className="border-accent-primary/20 bg-accent-primary/[0.05] text-text-secondary shrink-0 rounded-full border px-4 py-2 text-[10px] font-medium tracking-wider uppercase">
                Career intelligence
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
