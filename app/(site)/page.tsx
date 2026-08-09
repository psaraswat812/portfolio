import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';

export default function HomePage() {
  return (
    <main>
      <Section className="min-h-[60vh]">
        <Container>
          <div className="flex min-h-[50vh] items-center">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent-primary">
                Portfolio
              </p>

              <h1 className="display-text text-balance text-5xl font-semibold md:text-7xl">
                Puranjay Saraswat
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary md:text-xl">
                AI/ML engineer and software developer building thoughtful
                digital products.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
