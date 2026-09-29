import { useState } from "react";
import Section from "./Section";
import { skills } from "../data/skills";
import "./Skills.css";

export default function Skills() {
  const categories = Object.keys(skills);
  const [active, setActive] = useState(categories[0]);

  return (
    <Section id="skills" title="Skills">
      <div className="skills__tabs">
        {categories.map((c) => (
          <button key={c} className="skills__tab" aria-pressed={active === c} onClick={() => setActive(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="skills__chips" key={active}>
        {skills[active].map((s, i) => (
          <span key={s} className="skills__chip" style={{ animationDelay: `${i * 30}ms` }}>{s}</span>
        ))}
      </div>
    </Section>
  );
}
