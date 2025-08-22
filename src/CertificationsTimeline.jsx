import React, { useEffect, useRef, useState } from "react";
import "./CertificationsTimeline.css";

const certifications = [
  { title: "Oracle Cloud AI Foundations", issuer: "Oracle", date: "2025-2027" },
  { title: "Smart India Hackathon", issuer: "Ministry of Education, India", date: "Sep 2024" },
  { title: "Certificate of Participation – Adobe India Hackathon", issuer: "Adobe" },
  { title: "Introduction to Machine Learning", issuer: "Amazon Web Services" },
  { title: "Get Started with Python", issuer: "Google" },
  { title: "Introduction to Artificial Intelligence", issuer: "IBM" },
  { title: "Introduction to Data Analytics", issuer: "IBM" },
  { title: "Programming in Java", issuer: "NPTEL, IIT Kharagpur" },
  { title: "Image Processing Onramp", issuer: "MathWorks" },
  { title: "MATLAB Onramp", issuer: "MathWorks" },
  { title: "Deloitte Technology Job Simulation", issuer: "Deloitte", date: "June 2025" },

];

const CertificationsTimeline = () => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = containerRef.current.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY || window.pageYOffset;
      const containerTop = containerRef.current.offsetTop;
      const relativeScroll = Math.min(Math.max(scrollTop + windowHeight/2 - containerTop, 0), totalHeight);
      setScrollY(relativeScroll);
      setContainerHeight(totalHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="timeline-container" ref={containerRef}>
      <div className="timeline-bar" style={{ height: `${scrollY}px` }} />
      {certifications.map((cert, index) => {
        const side = index % 2 === 0 ? "left" : "right";
        const appearAt = ((index + 0.5) / certifications.length) * containerHeight;
        const visible = scrollY >= appearAt;

        return (
          <div
            key={index}
            className={`timeline-item ${side} ${visible ? "visible" : ""}`}
          >
            <div className="content">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.date && <span>{cert.date}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CertificationsTimeline;
