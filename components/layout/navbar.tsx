import Link from 'next/link';

import { Container } from '@/components/layout/container';

const navigation = [
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Resume',
    href: '/resume',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container>
        <nav className="flex h-24 items-center justify-between">
          <Link
            href="/"
            className="display-text text-sm font-semibold tracking-tight"
            aria-label="Puranjay Saraswat home"
          >
            PS.
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-secondary hover:text-text-primary text-sm transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="#contact"
            className="border-border-default bg-glass-background text-text-primary hover:border-border-strong hover:bg-glass-background-strong hidden rounded-full border px-5 py-2.5 text-sm font-medium backdrop-blur-md transition-all duration-300 md:block"
          >
            Let&apos;s talk
          </Link>

          <button
            type="button"
            className="border-border-default text-text-primary rounded-full border px-4 py-2 text-sm md:hidden"
            aria-label="Open navigation menu"
          >
            Menu
          </button>
        </nav>
      </Container>
    </header>
  );
}
