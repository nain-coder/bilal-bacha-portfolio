import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import ExperienceItem from "./ExperienceItem";
import { experience } from "../data/experience";
import "./Experience.css";

export default function Experience() {
  const [openId, setOpenId] = useState(experience[0].id);

  return (
    <Section id="work" title="Work experience">
      {experience.map((job, i) => (
        <Reveal key={job.id} delay={i * 100}>
          <ExperienceItem job={job} isOpen={openId === job.id} onToggle={() => setOpenId(openId === job.id ? null : job.id)} />
        </Reveal>
      ))}
    </Section>
  );
}
