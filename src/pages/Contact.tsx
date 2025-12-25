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
    <section className="section">
      <h2 className="title">Contact</h2>
      <p className="muted" style={{ marginBottom: "20px" }}>
        Feel free to reach out through any of the platforms below.
      </p>

      <div className="grid cols-2" style={{ gap: "20px" }}>
        {contacts.map((c) => (
          <a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="card contact-card"
          >
            <div className="spread">
              <div className="row" style={{ gap: "10px" }}>
                {c.icon}
                <h3 style={{ margin: 0 }}>{c.name}</h3>
              </div>
              <span className="muted">{c.tag}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
