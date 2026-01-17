import React from 'react';


export default function Nav() {
  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-inner container">
        <div className="row">
          <div>
            <strong>Umar Turdumambetov</strong><br />
            <span className="muted">Student — Bellevue College</span>
          </div>
        </div>
        <nav className="nav">
          <a href="#home" onClick={(e) => scrollToSection('home', e)}>Home</a>
          <a href="#projects" onClick={(e) => scrollToSection('projects', e)}>Projects</a>
          <a href="#experience" onClick={(e) => scrollToSection('experience', e)}>Experience</a>
          <a href="#hobbies" onClick={(e) => scrollToSection('hobbies', e)}>Hobbies</a>
          <a href="#cv" onClick={(e) => scrollToSection('cv', e)}>CV</a>
          <a href="#contact" onClick={(e) => scrollToSection('contact', e)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
