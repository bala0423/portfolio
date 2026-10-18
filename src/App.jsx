import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

function App() {
  return (
    // reducedMotion="user" turns off transform animations for visitors who prefer reduced motion.
    <MotionConfig reducedMotion="user">
      <div className="bg-surface text-body">
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </MotionConfig>
  );
}

export default App;
