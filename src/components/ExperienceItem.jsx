export default function ExperienceItem({ job, isOpen, onToggle }) {
  const panelId = `panel-${job.id}`;
  return (
    <div className="job" data-open={isOpen}>
      <button className="job__header" aria-expanded={isOpen} aria-controls={panelId} onClick={onToggle}>
        <span>
          <h3 className="job__title">{job.role}, {job.org}</h3>
          <small className="job__meta">{job.place} · {job.period}</small>
        </span>
        <span className="job__icon" aria-hidden="true">+</span>
      </button>
      <div className="job__panel" id={panelId}>
        <div>
          <ul className="job__points">
            {job.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
