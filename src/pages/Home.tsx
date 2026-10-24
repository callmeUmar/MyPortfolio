import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { EXPERIENCE, PUBLICATIONS, CONTACTS } from '../data/site';
import ProjectRow from '../components/ProjectRow';

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <section className="home-section" data-open={open} aria-labelledby={`${id}-label`}>
      <h2 className="home-section-title">
        <button
          type="button"
          className="home-section-toggle"
          aria-expanded={open}
          aria-controls={`${id}-body`}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="home-section-number" aria-hidden="true">({number})</span>
          <span id={`${id}-label`}>{title}</span>
          <span className="home-section-chevron" aria-hidden="true" />
        </button>
      </h2>
      <div className="home-section-body" id={`${id}-body`}>
        <div className="home-section-inner">{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="home">
      <div className="home-row">
        <h1 className="home-label">Umar Turdumambetov</h1>
        <p className="home-value">
          <span>Computer Science and Math, Whitman College</span>
          <span className="year">Expected 2028</span>
        </p>
      </div>

      <Section number="01" title="Experience">
        <ul className="home-list">
          {EXPERIENCE.map((item) => (
            <li className="home-item" key={item.role + item.company}>
              {item.url ? (
                <a className="home-item-title" href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.role} — {item.company}
                </a>
              ) : (
                <span className="home-item-title">
                  {item.role} — {item.company}
                </span>
              )}
              <span className="home-item-year">{item.year}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section number="02" title="Projects">
        <ul className="home-list">
          {PROJECTS.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </ul>
      </Section>

      <Section number="03" title="Publications">
        <ul className="home-list">
          {PUBLICATIONS.map((item) => (
            <li className="home-item" key={item.title}>
              {item.url ? (
                <a className="home-item-title" href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              ) : (
                <span className="home-item-title">{item.title}</span>
              )}
              <span className="home-item-year">{item.year}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section number="04" title="Contact">
        <ul className="home-list">
          {CONTACTS.map((contact) => (
            <li className="home-item" key={contact.name}>
              <a className="home-item-title" href={contact.url} target="_blank" rel="noopener noreferrer">
                {contact.name}
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
