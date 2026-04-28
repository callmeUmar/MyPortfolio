import React from 'react';
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
  return (
    <div className="landing-container" style={{ backgroundColor: bgColor }}>
      <nav className="navbar">
        <div className="logo">Umar Turdumambetov</div>
        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/projects">PROJECTS</Link></li>
          <li><Link to="/experience">EXPERIENCE</Link></li>
          <li><Link to="/hobbies">HOBBIES</Link></li>
          <li><Link to="/cv">CV</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
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
