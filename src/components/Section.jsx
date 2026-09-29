import Reveal from "./Reveal";

export default function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <Reveal as="h2" className="section__title">{title}</Reveal>
      {children}
    </section>
  );
}
