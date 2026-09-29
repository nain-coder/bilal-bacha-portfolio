import Section from "./Section";
import Reveal from "./Reveal";
import { education, languages } from "../data/education";
import "./Education.css";

export default function Education() {
  return (
    <Section id="education" title="Education and languages">
      <div className="education">
        <Reveal className="card">
          {education.map((e) => (
            <div key={e.degree} style={{ display: "contents" }}>
              <h3>{e.degree}</h3>
              <p>{e.school} · {e.period}</p>
            </div>
          ))}
        </Reveal>
        <Reveal className="card" delay={120}>
          <h3>Languages</h3>
          {languages.map((l) => <p key={l.name}>{l.name}: {l.level}</p>)}
        </Reveal>
      </div>
    </Section>
  );
}
