'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';

import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { projectLinks } from '@/lib/projects';

const contactEmail = 'saraswatpuranjay812@gmail.com';

export function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim() ?? '';
    const email = formData.get('email')?.toString().trim() ?? '';
    const subject = formData.get('subject')?.toString().trim() ?? '';
    const message = formData.get('message')?.toString().trim() ?? '';
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    setStatus('Your email application should open with this message prefilled. Review it and send the email to complete your message.');
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <Section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.04]"
    >
      <div
        className="bg-accent-primary/[0.035] pointer-events-none absolute right-[-12rem] bottom-[-14rem] h-[30rem] w-[30rem] rounded-full blur-[110px]"
        aria-hidden="true"
      />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="text-accent-primary text-sm font-medium tracking-[0.24em] uppercase">
              Contact
            </p>

            <h2 className="display-text mt-5 text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
              Let&apos;s build something thoughtful.
            </h2>

            <p className="text-text-secondary mt-6 text-base leading-7 sm:text-lg sm:leading-8">
              Have a project, role, or idea in mind? Share a little context and
              I&apos;ll prepare a reply with the right next step.
            </p>

            <div className="mt-10 space-y-5">
              <div>
                <p className="text-text-muted text-xs font-medium tracking-[0.18em] uppercase">
                  Direct email
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-text-primary hover:text-accent-primary mt-3 inline-flex text-base font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {contactEmail}
                </a>
              </div>

              <div>
                <p className="text-text-muted text-xs font-medium tracking-[0.18em] uppercase">
                  Project repositories
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={projectLinks.phishguard.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:border-border-strong hover:text-text-primary rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    PhishGuard GitHub
                  </a>
                  <a
                    href={projectLinks.resumeScreener.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:border-border-strong hover:text-text-primary rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    Resume Screener GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form
            className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_60px_rgba(99,102,241,0.05)] sm:p-8"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="text-sm font-medium text-text-primary">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="border-border-default bg-background/60 text-text-primary placeholder:text-text-muted mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-300 focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="text-sm font-medium text-text-primary">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="border-border-default bg-background/60 text-text-primary placeholder:text-text-muted mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-300 focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="contact-subject" className="text-sm font-medium text-text-primary">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                className="border-border-default bg-background/60 text-text-primary placeholder:text-text-muted mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-300 focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20"
                placeholder="What would you like to discuss?"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="contact-message" className="text-sm font-medium text-text-primary">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                required
                className="border-border-default bg-background/60 text-text-primary placeholder:text-text-muted mt-2 w-full resize-y rounded-xl border px-4 py-3 text-sm leading-6 outline-none transition-colors duration-300 focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20"
                placeholder="Tell me about the opportunity or project."
              />
            </div>

            <p className="text-text-muted mt-5 text-sm leading-6">
              Submitting opens your default email application with your message
              prefilled. Please review it and send the email from there.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="bg-accent-primary hover:bg-accent-primary/90 rounded-full px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Open email application
              </button>

              <a
                href={`mailto:${contactEmail}`}
                className="text-text-secondary hover:text-text-primary text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Email directly
              </a>
            </div>

            <p className="text-text-secondary mt-4 min-h-6 text-sm leading-6" role="status" aria-live="polite">
              {status}
            </p>
          </form>
        </div>
      </Container>
    </Section>
  );
}