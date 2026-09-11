import { motion, useReducedMotion } from 'framer-motion';
import { skills } from '../data/portfolio';

export default function BentoSkills() {
  const reducedMotion = useReducedMotion();
  return (
    <section id="skills" className="page-shell section-space" aria-labelledby="skills-title">
      <div className="section-heading">
        <div><p className="eyebrow">02 / The toolkit</p><h2 id="skills-title">Good tools.<br /><span className="muted">Better possibilities.</span></h2></div>
        <p className="section-note">The stack behind this portfolio.<br />Small details, working together.</p>
      </div>
      <div className="bento-grid">
        {skills.map((skill) => (
          <motion.article key={skill.title} className={`bento-card ${skill.style}`}
            whileHover={reducedMotion ? {} : { y: -6, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
            <p className="eyebrow">{skill.label}</p>
            <span className="skill-mark" aria-hidden="true">{skill.mark}</span>
            <div><h3>{skill.title}</h3><p className="text-paper/60 text-sm leading-6 mt-3 max-w-sm">{skill.description}</p></div>
            <ul className="tags" aria-label="Technologies">{skill.tokens.map((token) => <li key={token}>{token}</li>)}</ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
