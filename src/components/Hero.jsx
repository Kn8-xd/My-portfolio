import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import CanvasField from './CanvasField';
import MagneticLink from './MagneticLink';
import { profile } from '../data/portfolio';

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);

  return (
    <section id="home" className="hero page-shell" aria-labelledby="hero-title">
      <CanvasField paused={paused || Boolean(reducedMotion)} />
      <div className="hero-copy">
        <p className="eyebrow flex items-center gap-3"><span className="status-dot" /> {profile.role} / Portfolio</p>
        <h1 id="hero-title" className="hero-title">
          {['Thoughtful', 'by design.', 'Fluid by code.'].map((line, index) => (
            <span className="reveal-line" key={line}>
              <motion.span
                className={index === 2 ? 'text-acid' : ''}
                initial={reducedMotion ? false : { y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
              >{line}</motion.span>
            </span>
          ))}
        </h1>
        <div className="hero-bottom-copy">
          <p className="max-w-sm text-sm leading-7 text-paper/65">{profile.intro}</p>
          <MagneticLink href="#work" className="pill-button">Explore my work <span aria-hidden="true">↘</span></MagneticLink>
        </div>
      </div>
      <div className="hero-meta eyebrow">
        <span>Independent mind. Open possibilities.</span>
        {!reducedMotion && <button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? 'Resume' : 'Pause'} background</button>}
        <a href="#work">Scroll to discover ↓</a>
      </div>
    </section>
  );
}
