import { skills } from "../data/skills";
import "./Marquee.css";

const items = Object.values(skills).flat();

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[...items, ...items].map((s, i) => <span key={i} className="marquee__item">{s}</span>)}
      </div>
    </div>
  );
}
