import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '../data/portfolio';

function ProjectMockup({ project }) {
  return (
    <div className={`project-art ${project.theme}`} aria-hidden="true">
      <div className="mockup-window">
        <div className="mockup-toolbar"><span>● ● ●</span><span>{project.title.toLowerCase()} / studio</span><span>↗</span></div>
        {project.theme === 'orbit' ? (
          <div className="dashboard">
            <aside><strong>o.</strong><span>Overview</span><span>Workspace</span><span>Activity</span></aside>
            <div className="dashboard-content">
              <span className="mockup-label">YOUR SPACE, SIMPLIFIED</span>
              <h4>{project.headline}<br />{project.subline}</h4>
              <div className="dashboard-stats"><div><small>Focus score</small><strong>94<span>%</span></strong></div><div><small>Weekly activity</small><div className="chart">{[32, 58, 42, 75, 63, 90, 78].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div></div>
              <div className="dashboard-line">Make space for what matters. <span>↗</span></div>
            </div>
          </div>
        ) : (
          <div className="editorial"><span className="mockup-label">FORMA — COLLECTION 001</span><h4>{project.headline}<br /><em>{project.subline}</em></h4><div className="sculpture" /><div className="editorial-bottom"><span>Less, but considered.</span><span>Explore the collection ↗</span></div></div>
        )}
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  const reducedMotion = useReducedMotion();
  return (
    <section id="work" className="page-shell section-space" aria-labelledby="work-title">
      <div className="section-heading">
        <div><p className="eyebrow">01 / Selected explorations</p><h2 id="work-title">Ideas made<br /><span className="muted">a little more real.</span></h2></div>
        <p className="section-note">Two original interface concepts.<br />A starting point for what comes next.</p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <motion.article key={project.id} initial={reducedMotion ? false : { opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <ProjectMockup project={project} />
            <div className="project-caption"><div><h3>{project.title} <span className="muted">/ {project.category}</span></h3><ul className="tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div><span className="eyebrow">{project.year}</span></div>
            <details className="project-details"><summary>Behind the concept <span aria-hidden="true">＋</span></summary><p>{project.description}</p></details>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
