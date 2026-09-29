import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "../data/projects";
import "./Projects.css";

const follow = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
};

export default function Projects() {
  return (
    <Section id="projects" title="Selected projects">
      <div className="projects">
        {projects.map((p, i) => (
          <Reveal key={p.name} as="article" className="project" delay={i * 90} onMouseMove={follow}>
            <h3 className="project__name">{p.name}</h3>
            <span className="project__stack">{p.stack}</span>
            <p className="project__detail">{p.detail}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
