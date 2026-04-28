import React from 'react';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';
import { Instagram, Send, Mail, Linkedin, Github, Globe } from 'lucide-react';

const contacts = [
  { name: 'Instagram', link: 'https://www.instagram.com/umarhnt/', icon: <Instagram size={40} />, color: '#E1306C' },
  { name: 'Telegram', link: 'https://t.me/umarhnt', icon: <Send size={40} />, color: '#0088cc' },
  { name: 'Email', link: 'mailto:umarturdumambetov@gmail.com', icon: <Mail size={40} />, color: '#D44638' },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/umar-turdumambetov-6160ba368', icon: <Linkedin size={40} />, color: '#0077b5' },
  { name: 'GitHub', link: 'https://github.com/callmeUmar', icon: <Github size={40} />, color: '#ffffff' },
  { name: 'Devpost', link: 'https://devpost.com/umarturdumambetov?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav', icon: <Globe size={40} />, color: '#008080' },
];

export default function Contact() {
  return (
    <PageLayout
      title="Get In Touch."
      subtitle="Start a conversation"
      description="Whether you have a project in mind, a question about my process, or just want to say hello, I'd love to hear from you."
      bgText="CONNECT"
      statueSrc="/statue-contact.png"
      bgColor="#1a1a1a"
      imageStyle={{ transform: 'rotateY(180deg)' }}
    >
      <section className="summary-section">
        <div className="summary-content" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '2rem 0' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            {contacts.map((contact, index) => (
              <a 
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1.5rem',
                  padding: '3rem 2rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  color: '#fff',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(5px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.boxShadow = `0 15px 30px ${contact.color}20`;
                  const iconSpan = e.currentTarget.querySelector('.icon-wrapper') as HTMLElement;
                  if (iconSpan) {
                    iconSpan.style.color = contact.color;
                    iconSpan.style.transform = 'scale(1.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
                  const iconSpan = e.currentTarget.querySelector('.icon-wrapper') as HTMLElement;
                  if (iconSpan) {
                    iconSpan.style.color = 'var(--gold)';
                    iconSpan.style.transform = 'scale(1)';
                  }
                }}
              >
                <span className="icon-wrapper" style={{ color: 'var(--gold)', transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>
                  {contact.icon}
                </span>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-primary)', margin: 0, letterSpacing: '2px', textTransform: 'uppercase' }}>
                  {contact.name}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer hideContacts={true} />
    </PageLayout>
  );
}
