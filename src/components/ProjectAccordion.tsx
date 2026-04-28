import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Github, Globe, ExternalLink, HardDrive } from 'lucide-react';

export interface ProjectAccordionProps {
  title: string;
  shortDescription: string;
  fullDescription: React.ReactNode;
  githubLink?: string;
  devpostLink?: string;
  liveLink?: string;
  driveLink?: string;
}

export default function ProjectAccordion({
  title,
  shortDescription,
  fullDescription,
  githubLink,
  devpostLink,
  liveLink,
  driveLink,
}: ProjectAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header">
        <button className="accordion-toggle" onClick={toggleAccordion} aria-expanded={isOpen}>
          <div className="accordion-title-area">
            <span className="accordion-icon">
              {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </span>
            <div className="accordion-titles">
              <h3 className="accordion-title">{title}</h3>
              <p className="accordion-short-desc">{shortDescription}</p>
            </div>
          </div>
        </button>
        
        <div className="accordion-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="accordion-link" title="GitHub">
              <Github size={20} />
            </a>
          )}
          {devpostLink && (
            <a href={devpostLink} target="_blank" rel="noopener noreferrer" className="accordion-link" title="Devpost">
              <Globe size={20} />
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="accordion-link" title="Live Demo">
              <ExternalLink size={20} />
            </a>
          )}
          {driveLink && (
            <a href={driveLink} target="_blank" rel="noopener noreferrer" className="accordion-link" title="Project Files">
              <HardDrive size={20} />
            </a>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="accordion-content">
          {fullDescription}
        </div>
      )}
    </div>
  );
}
