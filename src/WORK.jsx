import React from "react";
import { motion } from "framer-motion";
import { FiMonitor } from "react-icons/fi"; // correct icon

const experiences = [
  {
    role: "Intern - QG EBS Pvt. Ltd.",
    date: "Dec 2024",
    details: [
      "Successfully completed the project with strong problem-solving skills.",
      "Developed a Vendor Spent Analysis Dashboard using Python.",
      "Conducted a Python Basics training session for QG colleague.",
      "Recognized by senior leaders for exceptional performance, innovation, and dedication to project success",
    ],
  },
  {
    role: "Intern - ALSAA Food Industries LLP",
    date: "Jun – Jul 2024",
    details: [
      "Worked on PLC-based Refrigeration & Air Conditioning systems.",
      "Demonstrated diligence, adaptability, and a keen learning attitude",
    ],
  },
];

const Work = () => {
  return (
    <section
      id="work"
      style={{
        minHeight: "60vh",
         justifyContent: "flex-start", // <- Move content to top
    padding: "10px 40px 40px 40px",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        
        
        background: "rgba(0,0,0,.85)",
        color: "white",
      }}
    >
      {/* Animated heading with laptop icon */}
      <motion.div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          marginBottom: "60px",
        }}
        animate={{ scale: [1, 1.05, 1] }}
        viewport={{ once: false, amount: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
      >
        {/* Laptop/Monitor icon with independent glow */}
        <motion.div
          animate={{
            textShadow: [
              "0 0 6px #ef4ce1",
              "0 0 14px #ef4ce1",
              "0 0 6px #ef4ce1",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        >
          <FiMonitor size={40} color="#ef4ce1" />
        </motion.div>

        <h1
          style={{
            fontSize: "3.8rem",
            fontWeight: "bold",
            color: "#ef4ce1ff",
            textShadow: "0 0 6px rgba(239, 76, 198, 0.7)",
          }}
        >
          Work Experience
        </h1>
      </motion.div>

      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "25px",
        }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            style={{
              width: "100%",
              padding: "25px",
              borderRadius: "16px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(239, 76, 239, 0.3)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 0 12px rgba(239,76,198,0.4), 0 4px 15px rgba(0,0,0,0.2)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h2
              style={{
                fontSize: "1.8rem",
                color: "#ef4cd4ff",
                marginBottom: "10px",
                textShadow: "0 0 4px rgba(239, 76, 212, 0.5)",
              }}
            >
              {exp.role}
            </h2>
            <p style={{ fontSize: "1rem", opacity: 0.7, marginBottom: "12px" }}>
              {exp.date}
            </p>
            <ul style={{ listStyleType: "none", paddingLeft: 0, lineHeight: "1.8" }}>
              {exp.details.map((point, i) => (
                <li key={i} style={{ marginBottom: "8px" }}>
                  • {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
