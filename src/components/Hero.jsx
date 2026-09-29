import { profile, availability, facts } from "../data/profile";
import CodeCard from "./CodeCard";
import "./Hero.css";

export default function Hero() {
  return (
    <header id="top" className="hero">
      <span className="hero__glow hero__glow--a" />
      <span className="hero__glow hero__glow--b" />
      <div>
        <p className="badge rise"><span className="badge__dot" />{availability}</p>
        <h1 className="hero__name" aria-label={profile.name}>
          {profile.name.split(" ").map((w, i) => (
            <span key={w} className="hero__word" aria-hidden="true">
              <span style={{ animationDelay: `${250 + i * 130}ms` }}>{w}</span>
            </span>
          ))}
        </h1>
        <p className="hero__summary rise rise--late">{profile.summary}</p>
        <div className="hero__actions rise rise--late">
          <a className="btn btn--primary" href={profile.cv} download>Download CV</a>
          <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <ul className="hero__facts rise rise--late">
          {facts.map((f) => <li key={f}>{f}</li>)}
        </ul>
      </div>
      <CodeCard />
    </header>
  );
}
