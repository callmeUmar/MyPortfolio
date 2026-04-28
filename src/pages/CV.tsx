import React from 'react';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';
import { FileText, Download } from 'lucide-react';

export default function CV() {
  return (
    <PageLayout
      title="Curriculum Vitae."
      subtitle="My academic and professional summary"
      description="An overview of my education, key skills, and professional qualifications. I am always striving to learn more and push the boundaries of what I can build."
      bgText="ACADEMIC"
      statueSrc="/statue-cv.png"
      bgColor="#2e1a22" // Dark burgundy/purple
    >
      <section className="summary-section">
        <div className="summary-content" style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem', padding: '2rem 0' }}>
            <div style={{ width: '100%', height: '80vh', minHeight: '600px', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}>
              <iframe 
                src="/Resume.pdf#view=FitH" 
                title="Resume Preview"
                width="100%" 
                height="100%" 
                style={{ border: 'none' }}
              />
            </div>
            
            <a 
              href="/Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                backgroundColor: 'var(--gold)',
                color: '#000',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                transition: 'transform 0.2s ease, opacity 0.2s ease',
                marginTop: '1rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.opacity = '1';
              }}
            >
              <Download size={24} />
              Download Resume
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}