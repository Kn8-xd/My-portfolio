import MagneticLink from './MagneticLink';
import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer id="contact" className="page-shell footer" aria-labelledby="contact-title">
      <p className="eyebrow">03 / What’s next?</p>
      <h2 id="contact-title">Something good<br />starts with <span className="text-acid">hello.</span></h2>
      <div className="footer-contact">
        <p className="text-paper/60 max-w-sm leading-7">Have an idea worth exploring?<br />Find me where the code lives.</p>
        <div className="flex flex-wrap gap-3">
          {profile.email && <MagneticLink href={`mailto:${profile.email}`} className="pill-button">Say hello ↗</MagneticLink>}
          {profile.socials.map((social) => <MagneticLink key={social.label} href={social.href} className="pill-button outline-button">{social.label} <span aria-hidden="true">↗</span></MagneticLink>)}
        </div>
      </div>
      <div className="footer-bottom eyebrow"><span>© {new Date().getFullYear()} {profile.name}</span><span>Built with intention. And React.</span><a href="#home">Back to top ↑</a></div>
    </footer>
  );
}
