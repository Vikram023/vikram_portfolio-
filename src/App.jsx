import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Research from './sections/Research';
import Contact from './sections/Contact';
import Achievements from './sections/Achievements';

function App() {
  return (
    <div style={{ background: '#050508', minHeight: '100vh', color: '#f0f0f5' }}>
      {/* Top accent line */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #4f6ef7, #22d3ee, #a78bfa)', zIndex: 200 }} />

      <Navbar />

      <main>
        <Hero />
        <Achievements />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
