import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';

import { siteConfig } from '@/config/site';

import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
