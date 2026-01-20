
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const hero = `${import.meta.env.BASE_URL}PhotoOfMe.png`;
  const [text, setText] = useState("");
  const fullText = "Umar\nTurdumambetov";

  // Scroll based opacity
  const { scrollY } = useScroll();
  const overlayOpacity = useTransform(scrollY, [0, 500], [0, 1]);

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
      {/* Left Column: Photo */}
      <div className="hero-split-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={hero} alt="Umar Turdumambetov" className="hero-photo-split" />
        </motion.div>
      </div>

      {/* Right Column: Text */}
      <div className="hero-split-right">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hero-content-split"
        >
          <h1 className="hero-name">
            {text}
            <span className="cursor">&nbsp;</span>
          </h1>
          <p className="hero-subtitle" style={{ textShadow: 'none', color: '#6b7280', background: 'transparent', padding: 0 }}>
            SOFTWARE ENGINEER
          </p>

          <div style={{ marginTop: 30 }}>
            <a href="#projects" className="btn" style={{ marginRight: 20 }}>View Work</a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}