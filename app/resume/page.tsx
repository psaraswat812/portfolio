import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';

export default function ResumePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Section className="relative pt-32 sm:pt-40 lg:pt-48">
        <div
          className="bg-accent-primary/[0.06] pointer-events-none absolute top-[-14rem] left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full blur-[120px]"
          aria-hidden="true"
        />

        <Container>
          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="text-text-secondary hover:text-text-primary inline-flex text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Back to portfolio
            </Link>

            <p className="text-accent-primary mt-12 text-sm font-medium tracking-[0.24em] uppercase">
              Resume
            </p>

            <h1 className="display-text mt-5 text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
              A concise view of my work and experience.
            </h1>

            <p className="text-text-secondary mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
              View the latest PDF resume in your browser or download a copy for
              later.
            </p>

            <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div
                className="bg-accent-primary/[0.06] pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl"
                aria-hidden="true"
              />

              <div className="relative">
                <p className="text-text-muted text-xs font-medium tracking-[0.18em] uppercase">
                  PDF document
                </p>
                <h2 className="text-text-primary mt-4 text-2xl font-semibold tracking-tight">
                  Puranjay Saraswat Resume
                </h2>
                <p className="text-text-secondary mt-3 max-w-xl leading-7">
                  The PDF is the source of record for the current resume.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(255,255,255,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated"
                  >
                    View PDF
                  </a>

                  <a
                    href="/resume.pdf"
                    download="Puranjay-Saraswat-Resume.pdf"
                    className="border-border-default text-text-primary hover:border-border-strong inline-flex items-center rounded-full border bg-white/[0.02] px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}