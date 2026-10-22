import React from "react";
import { motion } from "framer-motion";
import { FiMonitor } from "react-icons/fi";

const experiences = [
  {
    role: "GenAI and Data Intern - EY (Tech Consulting)",
    date: "May 2026 – Jul 2026",
    details: [
      "Built a multi-agent BFSI dispute investigation platform (FastAPI, PostgreSQL) with 6 specialized LLM agents and 48 fraud-detection tools.",
      "Designed a DB-first fraud scoring engine using bank-verified signals (SIM swap, device change, geovelocity), reducing false positives.",
      "Developed a 4-service multi-agent data pipeline for CSV/Excel ingestion, quality gating, schema classification, and AI-readiness scoring with human-in-the-loop approval.",
      "Built an LLM-powered analytics agent (LangGraph, DuckDB) for natural-language KPI lookup, variance, root-cause, and forecasting.",
    ],
  },
  {
    role: "Data Science Intern - Quintes Global EBS Pvt. Ltd.",
    date: "Dec 2024 – Jan 2025",
    details: [
      "Applied data mining and trend analysis to ₹50M+ vendor transaction data across 200+ vendors for 20+ stakeholders.",
      "Reduced data processing time by 35% through Python pipeline automation and query optimization.",
      "Trained 15+ employees in Python, improving team efficiency by 30%.",
      "Recognized by senior leadership for delivering high-impact solutions.",
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
        justifyContent: "flex-start",
        padding: "0.625rem 2.5rem 2.5rem 2.5rem", // 10px 40px 40px 40px
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "rgba(0,0,0,.85)",
        color: "white",
      }}
    >
      {/* Animated heading */}
      <motion.div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.9375rem", // 15px
          marginBottom: "3.75rem", // 60px
        }}
        animate={{ scale: [1, 1.05, 1] }}
        viewport={{ once: false, amount: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
      >
        <motion.div
          animate={{
            textShadow: [
              "0 0 0.375rem #ef4ce1", // 6px
              "0 0 0.875rem #ef4ce1", // 14px
              "0 0 0.375rem #ef4ce1", // 6px
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        >
          <FiMonitor size={2.5 * 16} color="#ef4ce1" /> {/* 40px */}
        </motion.div>

        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#ef4ce1ff",
            textShadow: "0 0 0.375rem rgba(239, 76, 198, 0.7)", // 6px
          }}
        >
          Work Experience
        </h1>
      </motion.div>

      <div
        style={{
          maxWidth: "56.25rem", // 900px
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5625rem", // 25px
        }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            style={{
              width: "100%",
              padding: "1.75rem",
              borderRadius: "1.25rem",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(239,76,239,0.2)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)",
              textAlign: "center",
              backdropFilter: "blur(8px)",
              borderLeft: "3px solid rgba(239,76,198,0.6)",
            }}
            whileHover={{
              scale: 1.02,
              borderColor: "rgba(239,76,239,0.5)",
              boxShadow: "0 0 24px rgba(239,76,198,0.25), 0 8px 32px rgba(0,0,0,0.3)",
              y: -4,
            }}
            initial={{ opacity: 0, y: 1.25 }} // 20px
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h2
              style={{
                fontSize: "1.8rem",
                color: "#ef4cd4ff",
                marginBottom: "0.625rem", // 10px
                textShadow: "0 0 0.25rem rgba(239, 76, 212, 0.5)", // 4px
              }}
            >
              {exp.role}
            </h2>
            <p style={{ fontSize: "1rem", opacity: 0.7, marginBottom: "0.75rem" }}>
              {exp.date}
            </p>
            <ul
              style={{
                listStyleType: "none",
                paddingLeft: 0,
                lineHeight: "1.8",
              }}
            >
              {exp.details.map((point, i) => (
                <li key={i} style={{ marginBottom: "0.5rem" }}>
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
