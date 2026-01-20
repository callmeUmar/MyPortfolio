// src/pages/Contact.tsx
import { Mail, Linkedin, Github, Send, Instagram } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/umar-turdumambetov-6160ba368/",
      tag: "Professional profile",
    },
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/callmeUmar",
      tag: "Code & projects",
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      url: "mailto:umarturdumambetov@gmail.com",
      tag: "umarturdumambetov@gmail.com",
    },
    {
      name: "Telegram",
      icon: <Send size={24} />,
      url: "https://t.me/umarhnt", // change this
      tag: "umarhnt",
    },
    {
      name: "Instagram",
      icon: <Instagram size={24} />,
      url: "https://www.instagram.com/umarhnt", // change this
      tag: "umarhnt",
    },
  ];

  return (

    <>
      <p className="muted" style={{ marginBottom: "10px" }}>
        Feel free to reach out through any of the platforms below.
      </p>

      <div className="grid cols-2" style={{ gap: "10px" }}>
        {contacts.map((c) => (
          <a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="card contact-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '30px'
            }}
          >
            <div style={{ marginBottom: '10px' }}>
              {c.icon}
            </div>
            <h3 style={{ margin: 0, fontSize: '18px' }}>{c.name}</h3>
          </a>
        ))}
      </div>
    </>
  );
}
