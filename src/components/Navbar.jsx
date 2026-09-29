import { profile, navLinks } from "../data/profile";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Main">
      <div className="wrap navbar__inner">
        <a className="navbar__brand" href="#top">{profile.shortName}</a>
        <div className="navbar__right">
          <ul className="navbar__list">
            {navLinks.map((l) => (
              <li key={l.href}><a className="navbar__link" href={l.href}>{l.label}</a></li>
            ))}
          </ul>
          <a className="navbar__cta" href="#contact">Hire me</a>
        </div>
      </div>
    </nav>
  );
}
