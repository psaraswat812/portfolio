import { About } from '@/components/sections/about';
import { Hero } from '@/components/sections/hero';
import { Navbar } from '@/components/layout/navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
