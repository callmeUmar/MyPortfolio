import React from 'react';
import { Link, useViewTransitionState } from 'react-router-dom';
import type { Project } from '../data/projects';
import GradientThumb from './GradientThumb';

type Props = {
  project: Project;
  open: boolean;
  onToggle: () => void;
};

export default function ProjectRow({ project, open, onToggle }: Props) {
  const panelId = `project-panel-${project.slug}`;
  const buttonId = `project-button-${project.slug}`;
  const href = `/projects/${project.slug}`;

  // True only while a view transition to or from this project's page is running,
  // so just the clicked project's name and thumbnail carry transition names.
  const transitioning = useViewTransitionState(href);

  return (
    <div className="project-row">
      <button
        type="button"
        id={buttonId}
        className="project-row-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span
          className="project-row-name"
          style={{ viewTransitionName: transitioning ? `title-${project.slug}` : undefined } as React.CSSProperties}
        >
          {project.name}
        </span>
        <GradientThumb
          palette={project.palette}
          className="project-row-thumb"
          transitionName={transitioning ? `thumb-${project.slug}` : undefined}
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="project-row-panel"
        data-open={open}
      >
        <div className="project-row-panel-inner">
          <p className="project-row-summary">{project.blurb}</p>
          {project.stack.length > 0 && (
            <p className="project-row-stack">{project.stack.join(' · ')}</p>
          )}
          <Link to={href} viewTransition className="project-row-link" tabIndex={open ? 0 : -1}>
            Read breakdown <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
