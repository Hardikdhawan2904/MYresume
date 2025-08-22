import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLightbulb, FaDraftingCompass, FaPaintBrush, FaCode } from "react-icons/fa";
import "./LandingPage.css";

const rotatingWords = [
  { word: "Ideas", icon: <FaLightbulb /> },
  { word: "Concepts", icon: <FaDraftingCompass /> },
  { word: "Designs", icon: <FaPaintBrush /> },
  { word: "Code", icon: <FaCode /> },
];

export default function LandingPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000); // change word every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-container">
      {/* Name & Quote */}
      <div className="landing-header">
        <h1 className="landing-text">Hardik Dhawan</h1>
        <p className="landing-quote">
          Turning ideas into clean code and creative solutions.
        </p>
      </div>

    <div className="rotating-section">
  <p className="rotating-text">
    Shaping{" "}
    <span className="rotating-wrapper">
      <AnimatePresence mode="wait">
        <motion.span
          key={rotatingWords[index].word}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="highlight-word"
        >
          {rotatingWords[index].icon} {rotatingWords[index].word}
        </motion.span>
      </AnimatePresence>
    </span>
  </p>
  <p className="rotating-subtext">
    into Real Projects that Deliver Results
  </p>
</div>





      {/* Scroll Arrow */}
      <div
        className="scroll-down"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <span className="arrow">↓</span>
        <p>Scroll</p>
      </div>

      {/* Gradient fade at bottom */}
      <div className="fade-bottom"></div>
    </div>
  );
}

