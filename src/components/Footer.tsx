import React from 'react';

interface FooterProps {
  hideContacts?: boolean;
}

export default function Footer({ hideContacts = false }: FooterProps) {
  return (
    <footer className="footer-section">
      {!hideContacts && (
        <div className="footer-grid">
          <div className="footer-column">
            <h4>CONTACTS</h4>
            <ul>
              <li><a href="https://www.instagram.com/umarhnt/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://t.me/umarhnt" target="_blank" rel="noopener noreferrer">Telegram</a></li>
              <li><a href="mailto:umarturdumambetov@gmail.com">Email</a></li>
              <li><a href="https://www.linkedin.com/in/umar-turdumambetov-6160ba368" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/callmeUmar" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://devpost.com/umarturdumambetov?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer">Devpost</a></li>
            </ul>
          </div>
        </div>
      )}

      <div className="footer-bottom" style={hideContacts ? { borderTop: 'none', paddingTop: 0 } : {}}>
        <div className="back-to-top">
          <a href="#" style={{ color: '#888', textDecoration: 'none' }}>^ Back to top</a>
        </div>
        <div className="copyright">
          United States , Bellevue , WA
        </div>
      </div>
    </footer>
  );
}
