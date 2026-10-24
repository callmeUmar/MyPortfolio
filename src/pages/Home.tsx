import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { EXPERIENCE, PUBLICATIONS, CONTACTS } from '../data/site';
import ProjectRow from '../components/ProjectRow';

export default function Home() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  return (
    <main className="home-page">
      <header className="header-row">
        <h1>Umar Turdumambetov</h1>
        <p className="header-meta">
          <span>Computer Science and Math, Whitman College</span>
          <span className="year">Expected 2028</span>
        </p>
      </header>

      <section className="grid-section">
        <div className="section-label">
          <span className="section-number">(01)</span> Experience
        </div>
        <div className="section-content">
          <ul className="line-list">
            {EXPERIENCE.map((item) => (
              <li key={item.role + item.company}>
                <span>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.role} — {item.company}
                    </a>
                  ) : (
                    <>{item.role} — {item.company}</>
                  )}
                </span>
                <span className="year">{item.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid-section">
        <div className="section-label">
          <span className="section-number">(02)</span> Projects
        </div>
        <div className="section-content">
          <div className="project-list">
            {PROJECTS.map((project) => (
              <ProjectRow
                key={project.slug}
                project={project}
                open={openProject === project.slug}
                onToggle={() =>
                  setOpenProject((current) => (current === project.slug ? null : project.slug))
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="grid-section">
        <div className="section-label">
          <span className="section-number">(03)</span> Publications
        </div>
        <div className="section-content">
          <ul className="line-list">
            {PUBLICATIONS.map((item) => (
              <li key={item.title}>
                <span>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </span>
                <span className="year">{item.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid-section">
        <div className="section-label">
          <span className="section-number">(04)</span> Contact
        </div>
        <div className="section-content">
          <ul className="contact-list">
            {CONTACTS.map((contact) => (
              <li key={contact.name}>
                <a href={contact.url} target="_blank" rel="noopener noreferrer">
                  {contact.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
