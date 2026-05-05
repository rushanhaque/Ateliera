import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Lazy load Hero to ensure the 3D elements don't block the initial thread if they are heavy
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main>
        <Hero />

        <Suspense fallback={<div className="hero-fallback" style={{ minHeight: '100vh', background: '#FAF9F6' }} />}>
          <About />
        </Suspense>

        <Services />
        <Portfolio />
        <Team />
        <Testimonials />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
