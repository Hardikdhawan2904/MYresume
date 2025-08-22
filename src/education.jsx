import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import "./Education.css"; // ✅ Import the CSS

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech.)",
    field: "Computer Science and Engineering (AI & ML)",
    college: "SRM Institute of Science and Technology, Chennai",
    details: "Current CGPA: 9.09 | Year: 3rd Year",
  },
  {
    degree: "Class 12th – PCM",
    field: "",
    college: "Amity International School, Delhi",
    details: "Percentage: 83.4%",
  },
  {
    degree: "Class 10th",
    field: "",
    college: "Amity Indian Military College, Manesar, Gurgaon",
    details: "Percentage: 96.2%",
  },
];

export default function Education() {
  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={window.location.pathname}
        className="education-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div
          className="education-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FaGraduationCap size={100} color="#af4c9eff" />
          <h2 className="education-title">Education</h2>
        </motion.div>

        {/* Timeline */}
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div className="circle"></div>
              <h3 className="degree">{edu.degree}</h3>
              {edu.field && <p className="field">{edu.field}</p>}
              <p className="college">{edu.college}</p>
              <p className="details">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
