
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const hero = `${import.meta.env.BASE_URL}PhotoOfMe.jpg`;
  const [text, setText] = useState("");
  const fullText = "Umar Turdumambetov";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="hero-photo-container"
        >
          {/* Attempting to clip circle if background is simple, otherwise just a nice frame */}
          <img
            src={hero}
            alt="Umar Turdumambetov"
            className="hero-photo"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="hero-name">
            {text}
            <span className="cursor">&nbsp;</span>
          </h1>
          <p className="hero-subtitle" style={{ color: 'var(--brand2)', fontSize: '1.2rem', letterSpacing: '2px' }}>
            SOFTWARE ENGINEER & ML ENTHUSIAST
          </p>

          <div style={{ marginTop: 40 }}>
            <a href="#projects" className="btn" style={{ marginRight: 20 }}>View Work</a>
            <a href="#contact" className="btn">Contact Me</a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}