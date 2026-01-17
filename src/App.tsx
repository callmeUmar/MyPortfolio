
import React, { useEffect } from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies"
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";


export default function App() {
  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className="container">

        <section id="home">
          <Home />
        </section>

        <section id="projects" className="section">
          <h2 className="title">Projects</h2>
          <Projects />
        </section>

        <section id="experience" className="section">
          <h2 className="title">Experience</h2>
          <Experience />
        </section>

        <section id="hobbies" className="section">
          <h2 className="title">Hobbies</h2>
          <Hobbies />
        </section>

        <section id="cv" className="section">
          <h2 className="title">Curriculum Vitae</h2>
          <CV />
        </section>

        <section id="contact" className="section">
          <h2 className="title">Contact</h2>
          <Contact />
        </section>

      </main>
    </>
  );
}

