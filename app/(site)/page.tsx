import { About } from '@/components/sections/about';
import { Work } from '@/components/sections/work';
import { Hero } from '@/components/sections/hero';
import { Navbar } from '@/components/layout/navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Work />
      </main>
    </>
  );
}
