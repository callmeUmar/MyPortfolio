
import { PROJECTS } from "../data/projects";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const items = PROJECTS;

  return (
    <div className="project-list fade-in-section">
      {items.map((p) => {
        const cover = p.images?.[0];

        return (
          <article key={p.id} className={`project-card ${p.id}`}>
            <div
              className="project-bg"
              style={{
                backgroundImage: cover ? `url('${cover}')` : undefined,
                backgroundColor: cover ? undefined : "#1e293b",
                opacity: 0.4
              }}
              aria-hidden="true"
            />
            <div className="project-overlay">
              <div className="project-content">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-blurb">{p.blurb}</p>

                <div className="project-actions">
                  {p.links?.demo && (
                    <a className="btn" href={p.links.demo} target="_blank" rel="noreferrer">
                      Demo <ExternalLink size={16} style={{ marginLeft: 8 }} />
                    </a>
                  )}
                  {p.links?.more && (
                    <a
                      className="btn outline"
                      href={p.links.more}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Docs
                    </a>
                  )}

                  {p.links?.repo && (
                    <a
                      className="btn outline"
                      href={p.links.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code <Github size={16} style={{ marginLeft: 8 }} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}