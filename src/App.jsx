import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds } from "@react-three/drei";
import { motion } from "framer-motion";
import { Wallet, BarChart3, Trophy, Lightbulb, FileText, Folder, Mic } from "lucide-react";
import "./App.css";

import LandingPage from "./LandingPage";

import Education from "./education";
import Work from "./WORK";
import CertificationsTimeline from "./CertificationsTimeline";
import { FiSettings } from "react-icons/fi";
import StarField from "./StarField";
import SkillsPage from "./SkillsPage";
import Contact from "./contact";
import { Analytics } from '@vercel/analytics/react';




<Canvas camera={{ fov: 70 }}>
  <ambientLight intensity={1} />
  <directionalLight position={[5, 5, 5]} intensity={1} />

  <Bounds fit clip observe margin={1.2}>
    <AnimatedModel />
  </Bounds>

  <OrbitControls
    enableZoom
    enablePan={false}
    target={[0, -8, 0]}
    minPolarAngle={Math.PI / 4}
    maxPolarAngle={Math.PI / 2}
  />
</Canvas>



// Preload the 3D model
useGLTF.preload("/myModel.glb");

function AnimatedModel(props) {
  const { scene } = useGLTF("/myModel.glb");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // mobile breakpoint
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <primitive
      object={scene}
      scale={isMobile ? 25 : 17}        // 🔥 bigger on mobile
      position={isMobile ? [0, -10, 0] : [10, -8, 8]} // adjust placement
      rotation={[Math.PI / 700, Math.PI / 1000, 0]}
      {...props}
    />
  );
}


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const container = {
    width: "100%",
    maxWidth: 1180,
    margin: "0 auto",
    paddingLeft: 20,
    paddingRight: 20,
  };

  const link = {
    color: "rgba(182, 169, 169, 0.9)",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 16,
  };


  const section = {
    minHeight: "calc(100vh - 64px)",
    paddingTop: 24,
    paddingBottom: 24,
    display: "flex",
    alignItems: "center",
  };

  // ✅ Projects data
  const projects = [
  {
    title: "HoloGrid Sphere",
    description:
      "Interactive holographic sphere with animated grid lines and futuristic HUD effects.",
    icon: <Lightbulb className="w-10 h-10 text-cyan-400" />,
    link: "https://github.com/Hardikdhawan2904/HoloGrid-Sphere",
  },
  {
    title: "Purchase Order Dashboard",
    description:
      "Interactive dashboard for purchase analytics & vendor insights using Plotly.",
    icon: <BarChart3 className="w-10 h-10 text-blue-400" />,
    link: "https://github.com/Hardikdhawan2904/DASHBOARDRD-FOR-PURCHSE-ORDER",
  },
  {
    title: "Sports Management System",
    description:
      "System for player tracking, event scheduling, and match results.",
    icon: <Trophy className="w-10 h-10 text-yellow-400" />,
    link: "https://github.com/Hardikdhawan2904/Sports-management-system",
  },
  {
    title: "Bank Management System",
    description:
      "C-based CLI app for managing customer accounts using file handling.",
    icon: <Folder className="w-10 h-10 text-pink-400" />,
    link: "https://github.com/Hardikdhawan2904/Bank-Management-System",
  },
  {
    title: "Resume Website",
    description:
      "Interactive 3D resume built with React, Three.js, and Tailwind.",
    icon: <FileText className="w-10 h-10 text-orange-400" />,
    link: "https://github.com/Hardikdhawan2904/myresume", // Deployed link
  },
   {
    title: "Voice Assistant (Tuesday & Friday)",
    description:
      "Python-based voice AI with Dialogflow integration, speech recognition, and multiple conversation modes.",
    icon: <Mic className="w-10 h-10 text-red-400" />,
    link: "https://github.com/Hardikdhawan2904/tuesday",
  },
];



  return (
     <>

    <Analytics />
      <LandingPage />
      {/* Fixed Top Bar */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 64,
          background: "rgba(0,0,0,.85)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(248, 15, 15, 0.06)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            ...container,
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
          }}
        >
          <a
            href="#intro"
            style={{
              ...link,
              fontWeight: 800,
              
              fontSize: 22,
              color: "#DFE9F7",
              justifySelf: "start",
            }}
          >
            Hardik Dhawan
          </a>

          <nav className="main-nav" style={{ justifySelf: "center", display: "flex", gap: 28, flexWrap: "wrap" }}>
            <a href="#projects-experience" className="nav-link" style={link}>Projects</a>
            <a href="#education" className="nav-link" style={link}>Education</a>
            <a href="#work-experience" className="nav-link" style={link}>Work Experience</a>
            <a href="#certifications" className="nav-link" style={link}>Certifications</a>
            <a href="#skills" className="nav-link" style={link}>Skills</a>
          </nav>

          <div style={{ justifySelf: "end", display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href="#contact"
              className="contact-btn"
              style={{ padding: "8px 16px", background: "#121e2cff", color: "#fff", borderRadius: 6, textDecoration: "none" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#9311df")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#121e2cff")}
            >
              Contact me
            </a>
            <button
              className="hamburger-btn"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span className={`ham-line ${menuOpen ? "open" : ""}`}></span>
              <span className={`ham-line ${menuOpen ? "open" : ""}`}></span>
              <span className={`ham-line ${menuOpen ? "open" : ""}`}></span>
            </button>
          </div>

          {menuOpen && (
            <div className="mobile-menu">
              {["#projects-experience", "#education", "#work-experience", "#certifications", "#skills", "#contact"].map((href) => (
                <a key={href} href={href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
                  {href.replace("#", "").replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div style={{ height: 64 }}></div>

      

{/* Intro Section */}
<section id="intro" style={section} className="section-animate">
  <div
    className="intro-inner"
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,.85)",
      justifyContent: "space-between",
      gap: "20px",
    }}
  >
    {/* Left: Image and Text */}
    <div
      className="intro-left"
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(0,0,0,.85)",
        alignItems: "flex-start",
        gap: 20,
        paddingLeft: 80,
      }}
    >
      {/* Profile Image */}
      <motion.img
        src="/a.png"
        alt="Profile"
        className="intro-profile-img"
        initial={{ opacity: 0, scale: 0.8, y: -40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0 }}
      />

      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0 }}
        style={{
          margin: 0,
          fontSize: "clamp(1rem, 2vw, 1.25rem)",
          color: "#a78bfa",
          fontWeight: 600,
          fontFamily: "’Poppins’, sans-serif",
          marginLeft: "clamp(0px, 6vw, 120px)",
          letterSpacing: "0.5px",
        }}
      >
        Hi, I’m Hardik — Pursuing Software Engineering
      </motion.p>

      {/* Bio */}
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: false, amount: 0 }}
        style={{ marginLeft: "clamp(0px, 6vw, 120px)" }}
      >
        AI & Frontend Developer skilled in React.js, Python, and data visualization. Delivered 4+ projects including dashboards, analytics platforms, and 3D web apps. Certified in AI, ML, and Data Analytics with proven impact on performance optimization and team productivity.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        onClick={() =>
          document.getElementById("projects-experience").scrollIntoView({ behavior: "smooth" })
        }
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        viewport={{ once: false, amount: 0 }}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.96 }}
        style={{
          marginTop: "24px",
          padding: "14px 36px",
          background: "linear-gradient(135deg, #5b21b6, #9311df)",
          color: "#fff",
          border: "1px solid rgba(147,17,223,0.4)",
          borderRadius: "30px",
          fontSize: "clamp(1rem, 2vw, 1.15rem)",
          fontWeight: "700",
          cursor: "pointer",
          marginLeft: "clamp(0px, 6vw, 120px)",
          boxShadow: "0 0 20px rgba(147,17,223,0.4)",
          transition: "all 0.3s ease",
          letterSpacing: "0.5px",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = "linear-gradient(135deg, #9311df, #ff0080)";
          e.currentTarget.style.boxShadow = "0 0 30px rgba(147,17,223,0.6)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = "linear-gradient(135deg, #5b21b6, #9311df)";
          e.currentTarget.style.boxShadow = "0 0 20px rgba(147,17,223,0.4)";
        }}
      >
        See My Work ↓
      </motion.button>
    </div>
  



          {/* Right: 3D Model */}
          <div className="right-panel">
            <div style={{ width: "100%", height: "100%" }}>
              <Canvas camera={{ fov: 40 , position: [100, 40, 80] }} shadows>
  <ambientLight intensity={0.3} color={"#800080"} />
  <directionalLight position={[5, 10, 10]} color={"#9b30ff"} />
        
  <Bounds fit clip observe margin={1.2}>
    <AnimatedModel
      scale={17}
      position={[10, -8, 8]}
      rotation={[Math.PI / 700, Math.PI / 1000, 0]}
    />
  </Bounds>

  <StarField count={200} /> {/* <-- add stars here */}

  <OrbitControls
    enableZoom={true} 
    makeDefault
    minPolarAngle={Math.PI / 4}
    maxPolarAngle={Math.PI / 2}
  />
</Canvas>
            </div>
          </div>
        </div>
      </section>
         <div
  style={{
    width: "100%",
    overflow: "hidden",
    background: "rgba(0,0,0,.85)",
    padding: "40px 0",
    margin: "40px 0",
    position: "relative",
    minHeight: "200px",
  }}
>
  <div className="floating-logos">
    <img src="/logos/python.svg" alt="Python" className="float delay-0" />
    <img src="/logos/react.svg" alt="React" className="float delay-1" />
    <img src="/logos/dash.svg" alt="Dash" className="float delay-2" />
    <img src="/logos/cpp.svg" alt="C++" className="float delay-3" />
    <img src="/logos/js.svg" alt="JavaScript" className="float delay-4" />
    <img src="/logos/ab.svg" alt="AB" className="float delay-5" />
    <img src="/logos/ac.svg" alt="AC" className="float delay-6" />
    <img src="/logos/ad.svg" alt="AC" className="float delay-7" />
  </div>
</div>

     {/* ✅ Projects & Experience Section */}
<section
  id="projects-experience"
  style={{ ...section, backgroundColor: "rgba(0,0,0,.85)", color: "#80357cff" }}
  className="section-animate"
>
  <div style={container}>
    {/* ✅ Heading remains the same */}
    <motion.h2
      style={{
        fontSize: "4rem",
        marginLeft: 0,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "6rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
    >
      <FiSettings
        size={60}
        color="#ff00c8ff"
        style={{ animation: "rotate 3s linear infinite" }}
      />
      Projects 
    </motion.h2>

    {/* ✅ Projects Grid */}
    <div
      className="grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "24px",
        alignItems: "left",
      }}
    >
      {projects.map((proj, index) => (
        <motion.a
          key={index}
          href={proj.link} // 🔗 opens link for that project
          target="_blank"
          rel="noopener noreferrer"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          exit={{ opacity: 0, y: 50 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(147,17,223,0.2)",
            borderRadius: "20px",
            padding: "32px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s",
            backdropFilter: "blur(8px)",
            textDecoration: "none",
            color: "inherit",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
            e.currentTarget.style.boxShadow = "0 20px 50px rgba(147,17,223,0.3), 0 0 0 1px rgba(255,0,128,0.2)";
            e.currentTarget.style.borderColor = "rgba(147,17,223,0.5)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)";
            e.currentTarget.style.borderColor = "rgba(147,17,223,0.2)";
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {proj.icon}
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#d238f8ff",
              }}
            >
              {proj.title}
            </h3>
          </div>
          <p style={{ marginTop: 12, color: "#cbd5e1" }}>
            {proj.description}
          </p>
        </motion.a>
      ))}
    </div>
  </div>
</section>

      {/* Other Sections */}
     <section
  id="education"
  style={{
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
  className="section-animate"
>
  <Education />
</section>
<section className="highlights-section">
      <motion.div
        className="highlight-card"
        whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(255,0,242,0.4)" }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="highlight-icon">💡</span>
        <motion.h3>Innovation</motion.h3>
        <motion.p>Bringing creative solutions to complex challenges with a fresh perspective.</motion.p>
      </motion.div>

      <motion.div
        className="highlight-card"
        whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(255,0,242,0.4)" }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="highlight-icon">🤝</span>
        <motion.h3>Collaboration</motion.h3>
        <motion.p>Working closely with teams and clients to ensure mutual success.</motion.p>
      </motion.div>

      <motion.div
        className="highlight-card"
        whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(255,0,242,0.4)" }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="highlight-icon">📈</span>
        <motion.h3>Growth</motion.h3>
        <motion.p>Constantly learning and improving to deliver the best possible results.</motion.p>
      </motion.div>
    </section>


      <section id="work-experience" style={section} className="section-animate">
  <Work />
</section>

      <section id="certifications" style={section} className="section-animate">
  <div style={container}>
    <motion.h2
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",
        fontSize: "3rem",
        fontWeight: "800",
        color: "#df47ecff",
      }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05, color: "#ff0080" }} // dynamic hover effect
    >
      <FileText size={50} color="#8a2be2" /> {/* Paper icon */}
      Certifications
    </motion.h2>

    <CertificationsTimeline />
  </div>
</section>
     <section id="skills" className="section-animate">
  <SkillsPage />
</section>

      <section id="contact" style={{ ...section, width: "100%", padding: 0 }} className="section-animate">
        <Contact />
      </section>
    
      </>
  );
}
