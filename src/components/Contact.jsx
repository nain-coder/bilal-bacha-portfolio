import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "../data/profile";
import "./Contact.css";

export default function Contact() {
  return (
    <Section id="contact" title="Hiring in Germany? Let's talk.">
      <Reveal className="contact__box">
        <p className="contact__text">
          I'm open to full-time front end roles in Germany. I ship Angular, React and Vue interfaces for fintech and e-commerce products. English C1, German A2.
        </p>
        <a className="contact__email" href={`mailto:${profile.email}`}>{profile.email}</a>
        <div className="contact__actions">
          <a className="btn btn--primary" href={profile.cv} download>Download CV</a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <p className="contact__details">{profile.phone} · {profile.location}</p>
      </Reveal>
    </Section>
  );
}
