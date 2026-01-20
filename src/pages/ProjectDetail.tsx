import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import { ExternalLink } from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <section className="section">
        <h2 className="title">Project not found</h2>
        <Link className="btn" to="/projects">← Back to Projects</Link>
      </section>
    );
  }

  return (
    <section className="section">
      <h2 className="title">{project.title}</h2>
      {project.highlight && <div className="muted" style={{fontFamily:"ui-monospace",marginBottom:10}}>{project.highlight}</div>}
      <p className="muted" style={{marginBottom:16}}>{project.blurb}</p>

      {!!project.images?.length && (
        <div className="grid cols-3" style={{marginBottom:16}}>
          {project.images.map(src => <img key={src} src={src} alt="" className="card"/>)}
        </div>
      )}

      <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
        {project.links.demo && <a className="btn primary" href={project.links.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={16}/></a>}
        {project.links.more && <a className="btn" href={project.links.more} target="_blank" rel="noreferrer">Docs/More <ExternalLink size={16}/></a>}
        {project.links.repo && <a className="btn" href={project.links.repo} target="_blank" rel="noreferrer">Repository <ExternalLink size={16}/></a>}
        <Link className="btn" to="/projects">← Back to Projects</Link>
      </div>
    </section>
  );
}