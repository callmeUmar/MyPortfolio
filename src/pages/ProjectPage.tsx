import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProject } from '../data/projects';
import type { ProjectSection } from '../data/projects';
import GradientThumb from '../components/GradientThumb';

function slugifyHeading(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// Turns bare URLs in content strings into links.
function linkify(text: string) {
  return text.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="inline-link">
        {part}
      </a>
    ) : (
      part
    )
  );
}

function Blocks({
  paragraphs = [],
  list,
  closing = [],
  textClass,
}: {
  paragraphs?: string[];
  list?: string[];
  closing?: string[];
  textClass?: string;
}) {
  // A paragraph written as "[...]" is a note-to-self: style it as a placeholder.
  const para = (text: string, key: React.Key) => (
    <p key={key} className={textClass ?? (text.startsWith('[') ? 'placeholder-text' : undefined)}>
      {linkify(text)}
    </p>
  );
  return (
    <>
      {paragraphs.map(para)}
      {list && (
        <ul className="project-list-items">
          {list.map((item, j) => (
            <li key={j}>{linkify(item)}</li>
          ))}
        </ul>
      )}
      {closing.map((text, j) => para(text, `c${j}`))}
    </>
  );
}

type TocEntry = {
  id: string;
  heading: string;
  subs: { id: string; heading: string }[];
};

function buildToc(sections: ProjectSection[]): TocEntry[] {
  return sections.map((section) => {
    const id = slugifyHeading(section.heading);
    return {
      id,
      heading: section.heading,
      subs: (section.subsections ?? []).map((sub) => ({
        id: `${id}--${slugifyHeading(sub.heading)}`,
        heading: sub.heading,
      })),
    };
  });
}

export default function ProjectPage() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;

  const toc = useMemo(() => (project ? buildToc(project.sections) : []), [project]);
  const elementRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeId, setActiveId] = useState<string | null>(toc[0]?.id ?? null);
  const [activeSubId, setActiveSubId] = useState<string | null>(null);
  const [contentsOpen, setContentsOpen] = useState(false);

  useEffect(() => {
    if (!project) return;

    const sectionIds = toc.map((t) => t.id);
    const subIds = toc.flatMap((t) => t.subs.map((s) => s.id));

    // The active heading is the last one whose top has passed a "reading line".
    // The line sits 25% down the viewport, but slides toward the bottom as the
    // page nears its end, so short trailing sections still get their turn
    // instead of being skipped when the page can't scroll any further.
    const lastAbove = (ids: string[], line: number) => {
      let found: string | null = null;
      for (const id of ids) {
        const el = elementRefs.current[id];
        if (el && el.getBoundingClientRect().top <= line) found = id;
      }
      return found;
    };

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const remaining = document.documentElement.scrollHeight - (window.scrollY + vh);
      const base = vh * 0.25;
      const line = base + Math.max(0, vh - base - remaining);

      const section = lastAbove(sectionIds, line) ?? sectionIds[0] ?? null;
      setActiveId(section);
      setActiveSubId(
        section ? lastAbove(subIds.filter((id) => id.startsWith(`${section}--`)), line) : null
      );
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // IntersectionObserver re-checks whenever a heading crosses the viewport;
    // the scroll listener covers movement in between.
    const observer = new IntersectionObserver(schedule, { threshold: [0, 1] });
    [...sectionIds, ...subIds].forEach((id) => {
      const el = elementRefs.current[id];
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [project, toc]);

  if (!project) {
    return (
      <main className="page">
        <p className="breadcrumb">
          <Link to="/" viewTransition>Umar Turdumambetov</Link> / <span>Projects</span>
        </p>
        <h1 className="project-title">Project not found</h1>
        <p>
          <Link to="/" viewTransition>← Back home</Link>
        </p>
      </main>
    );
  }

  const scrollToId = (id: string) => {
    elementRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setContentsOpen(false);
  };

  const setRef = (id: string) => (el: HTMLElement | null) => {
    elementRefs.current[id] = el;
  };

  // expandAll: the mobile "Contents" panel shows every subsection; the desktop
  // TOC only unfolds the subsections of the section currently in view.
  const renderToc = (expandAll: boolean) => (
    <ul className="toc-list">
      {toc.map((entry) => {
        const active = activeId === entry.id;
        const open = expandAll || active;
        return (
          <li key={entry.id}>
            <button
              type="button"
              className="toc-item"
              data-active={active}
              onClick={() => scrollToId(entry.id)}
            >
              <span className="toc-dot" aria-hidden="true" />
              {entry.heading}
            </button>
            {entry.subs.length > 0 && (
              <div className="toc-sub" data-open={open} aria-hidden={!open}>
                <ul className="toc-sublist">
                  {entry.subs.map((sub) => (
                    <li key={sub.id}>
                      <button
                        type="button"
                        className="toc-subitem"
                        data-active={activeSubId === sub.id}
                        tabIndex={open ? 0 : -1}
                        onClick={() => scrollToId(sub.id)}
                      >
                        {sub.heading}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <main className="page project-page">
      <p className="breadcrumb">
        <Link to="/" viewTransition>Umar Turdumambetov</Link> / <span>Projects</span>
      </p>

      <h1
        className="project-title"
        style={{ viewTransitionName: `title-${project.slug}` } as React.CSSProperties}
      >
        {project.name}
      </h1>
      <p className="project-subtitle">{project.subtitle}</p>

      <div className="project-meta">
        <div className="project-meta-row">
          <span className="project-meta-label">Author</span>
          <span className="project-meta-value">Umar Turdumambetov</span>
        </div>
        <div className="project-meta-row">
          <span className="project-meta-label">Published</span>
          <span className="project-meta-value">{project.published}</span>
        </div>
        <span className="project-category">{project.category}</span>
      </div>

      {Object.values(project.links).some(Boolean) && (
        <div className="project-links">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          )}
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer">Live</a>
          )}
          {project.links.devpost && (
            <a href={project.links.devpost} target="_blank" rel="noopener noreferrer">Devpost</a>
          )}
          {project.links.drive && (
            <a href={project.links.drive} target="_blank" rel="noopener noreferrer">Files</a>
          )}
        </div>
      )}

      <hr className="divider" />

      <GradientThumb
        palette={project.palette}
        className="project-hero"
        transitionName={`thumb-${project.slug}`}
      />

      <div className="project-body-layout">
        <nav className="toc toc-desktop" aria-label="Table of contents">
          {renderToc(false)}
        </nav>

        <div className="project-contents-mobile">
          <button
            type="button"
            className="contents-toggle"
            aria-expanded={contentsOpen}
            aria-controls="contents-mobile-panel"
            onClick={() => setContentsOpen((v) => !v)}
          >
            Contents {contentsOpen ? '−' : '+'}
          </button>
          <div id="contents-mobile-panel" className="contents-mobile-panel" data-open={contentsOpen}>
            <div className="contents-mobile-panel-inner">{renderToc(true)}</div>
          </div>
        </div>

        <div className="project-sections">
          {project.stack.length > 0 && (
            <p className="project-stack-line">
              <span className="project-meta-label">Stack</span> {project.stack.join(' · ')}
            </p>
          )}
          {project.sections.map((section, i) => {
            const entry = toc[i];
            const textClass = section.placeholder ? 'placeholder-text' : undefined;
            const paragraphs = section.paragraphs ?? (section.body ? [section.body] : []);
            return (
              <section key={entry.id} id={entry.id} ref={setRef(entry.id)} className="project-section">
                <h2>{section.heading}</h2>
                <Blocks
                  paragraphs={paragraphs}
                  list={section.list}
                  closing={section.closing}
                  textClass={textClass}
                />
                {section.subsections?.map((sub, j) => {
                  const subId = entry.subs[j].id;
                  return (
                    <div key={subId} id={subId} ref={setRef(subId)} className="project-subsection">
                      <h3>{sub.heading}</h3>
                      <Blocks paragraphs={sub.paragraphs} list={sub.list} closing={sub.closing} />
                    </div>
                  );
                })}
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
