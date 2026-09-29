import Reveal from "./Reveal";
import useInView from "../hooks/useInView";
import useCountUp from "../hooks/useCountUp";
import { stats } from "../data/stats";
import "./Stats.css";

function Stat({ value, suffix, label, delay }) {
  const [ref, seen] = useInView(0.5);
  const n = useCountUp(value, seen);
  return (
    <Reveal delay={delay} className="stat">
      <div ref={ref} className="stat__value">{n}{suffix}</div>
      <p className="stat__label">{label}</p>
    </Reveal>
  );
}

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((s, i) => <Stat key={s.label} {...s} delay={i * 100} />)}
    </div>
  );
}
