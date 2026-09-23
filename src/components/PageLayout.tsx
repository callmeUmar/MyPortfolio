import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface PageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  bgText: string;
  statueSrc: string;
  bgColor: string;
  imageStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function PageLayout({
  title,
  subtitle,
  description,
  bgText,
  statueSrc,
  bgColor,
  imageStyle,
  children,
}: PageLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="landing-container" style={{ backgroundColor: bgColor }}>
      <nav className="navbar">
        <div className="logo">Umar Turdumambetov</div>
        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        <ul className={`nav-links${menuOpen ? ' nav-links-open' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}>PROJECTS</Link></li>
          <li><Link to="/experience" onClick={() => setMenuOpen(false)}>EXPERIENCE</Link></li>
          <li><Link to="/hobbies" onClick={() => setMenuOpen(false)}>HOBBIES</Link></li>
          <li><Link to="/cv" onClick={() => setMenuOpen(false)}>CV</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
        </ul>
      </nav>

      <main className="hero">
        <div className="hero-left">
          <div className="gold-frame"></div>
          <img src={statueSrc} alt="Classical Statue" className="statue-img" style={imageStyle} />
        </div>

        <div className="hero-right">
          <h1 className="main-title">{title}</h1>
          <h2 className="subtitle">{subtitle}</h2>
          
          <div className="content-row">
            <div className="gold-line"></div>
            <p className="description">{description}</p>
          </div>
        </div>
      </main>
      
      {/* Additional page content (Summary, Footer, etc.) */}
      {children}
    </div>
  );
}
