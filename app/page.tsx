// app/page.tsx

'use client';

// We no longer need useState here because the menu manages its own state
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FullMenu from '@/components/FullMenu'; // <-- Import the new component
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackgroundOrbs from '@/components/BackgroundOrbs';

export default function Home() {
  // The selectedCategory state has been removed, simplifying this page
  return (
    <main className="relative overflow-x-hidden bg-black">
      <BackgroundOrbs />
      <Header />
      <Hero />
      <FullMenu /> {/* <-- Use the new component here */}
      <About />
      <Contact />
      <Footer />
    </main>
  );
}