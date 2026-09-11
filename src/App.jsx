import { MotionConfig } from 'framer-motion';
import LenisWrapper from './components/LenisWrapper';
import Hero from './components/Hero';
import BentoSkills from './components/BentoSkills';
import FeaturedWork from './components/FeaturedWork';
import Footer from './components/Footer';
import { profile } from './data/portfolio';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LenisWrapper>
        <a className="skip-link" href="#main">Skip to content</a>
        <header className="site-header page-shell">
          <a href="#home" aria-label={`${profile.name} home`} className="wordmark">{profile.name}<span className="text-acid">®</span></a>
          <nav aria-label="Main navigation" className="flex items-center gap-6 text-sm">
            <a href="#work">Work</a>
            <a href="#skills">Stack</a>
            <a href="#contact" className="nav-contact">Let’s talk <span aria-hidden="true">↗</span></a>
          </nav>
        </header>
        <main id="main" tabIndex={-1}>
          <Hero />
          <FeaturedWork />
          <BentoSkills />
        </main>
        <Footer />
      </LenisWrapper>
    </MotionConfig>
  );
}
