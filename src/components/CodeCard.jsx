import { useState } from "react";
import useTyping from "../hooks/useTyping";
import { heroCode } from "../data/profile";
import "./CodeCard.css";

const PROPS = /^(name|role|stack|base|domain|open)$/;
const TOKENS = /("[^"]*"|<\/?\w+|\b(?:name|role|stack|base|domain|open)\b)/;

function highlight(text) {
  return text.split(TOKENS).map((part, i) => {
    if (part.startsWith('"')) return <span key={i} className="tok-string">{part}</span>;
    if (part.startsWith("<")) return <span key={i} className="tok-tag">{part}</span>;
    if (PROPS.test(part)) return <span key={i} className="tok-prop">{part}</span>;
    return part;
  });
}

export default function CodeCard() {
  const typed = useTyping(heroCode);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({ x: ((e.clientY - r.top) / r.height - 0.5) * -10, y: ((e.clientX - r.left) / r.width - 0.5) * 10 });
  };

  return (
    <div className="code-card-wrap rise rise--late">
      <div
        className="code-card"
        aria-label="Profile summary written as a React component"
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <div className="code-card__dots" aria-hidden="true"><i /><i /><i /></div>
        <pre>{highlight(typed)}<span className="code-card__caret" aria-hidden="true" /></pre>
      </div>
    </div>
  );
}
