import { EXPERIENCE } from "../data/experience";

export default function Experience() {
  return (
    <div className="exp-timeline">
      {EXPERIENCE.map((item, i) => (
        <article className="exp-item card" key={item.id}>
          <div className="exp-header">
            <div>
              <h3 className="exp-role">{item.role}</h3>
              <div className="exp-meta">
                <a
                  className="exp-company"
                  href={item.link || "#"}
                  target={item.link ? "_blank" : undefined}
                  rel={item.link ? "noreferrer" : undefined}
                >
                  {item.company}
                </a>
                {item.location && <span className="muted"> • {item.location}</span>}
              </div>
            </div>
            <div className="exp-dates">{item.start} — {item.end}</div>
          </div>

          <ul className="exp-bullets">
            {item.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
          </ul>

          {item.tags?.length ? (
            <div className="exp-tags">
              {item.tags.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}