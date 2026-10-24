import React from 'react';
import { Link, useViewTransitionState } from 'react-router-dom';
import type { Project } from '../data/projects';
import GradientThumb from './GradientThumb';

export default function ProjectRow({ project }: { project: Project }) {
  const href = `/projects/${project.slug}`;

  // True only while a view transition to or from this project's page is running,
  // so just the clicked project's name and thumbnail carry transition names.
  const transitioning = useViewTransitionState(href);

  return (
    <li className="home-item home-project">
      <Link
        to={href}
        viewTransition
        className="home-item-title"
        style={{ viewTransitionName: transitioning ? `title-${project.slug}` : undefined } as React.CSSProperties}
      >
        {project.name}
      </Link>
      <Link to={href} viewTransition className="home-project-art" tabIndex={-1} aria-hidden="true">
        <GradientThumb
          palette={project.palette}
          transitionName={transitioning ? `thumb-${project.slug}` : undefined}
        />
      </Link>
      {/* one-line description: revealed on hover/focus, always shown on touch screens */}
      <div className="home-project-detail">
        <p>{project.blurb}</p>
      </div>
    </li>
  );
}
