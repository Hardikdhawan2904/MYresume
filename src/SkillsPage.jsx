import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion"; // ⬅️ import Framer Motion
import "./SkillsPage.css";
import { FaReact } from "react-icons/fa";
// Preload models
useGLTF.preload("rd.glb");
useGLTF.preload("pd.glb");
useGLTF.preload("bd.glb");
useGLTF.preload("id.glb");
useGLTF.preload("pm.glb");
useGLTF.preload("da.glb");

const skills = [
  { model: "rd.glb", label: "React Development", cam: [0, 0, 10] },
  { model: "pd.glb", label: "Python Development", cam: [0, 0, 10] },
  { model: "bd.glb", label: "Backend Development", cam: [0, 0, 2] },
  { model: "id.glb", label: "Interactive Developer", cam: [0, 0, 200], color: "white" },
  { model: "pm.glb", label: "Project Management", cam: [7, 7, 200] },
  { model: "da.glb", label: "Data Analytics", cam: [0, 5, 10], className: "dim" },

];

// Rotating model wrapper
const RotatingModel = ({ path, color }) => {
  const { scene } = useGLTF(path);
  const ref = useRef();

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.01;
  });

  // If a color is provided, override all mesh materials
  if (color) {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(color),
          metalness: 0,
          roughness: 0.5,
        });
      }
    });
  }

  return <primitive ref={ref} object={scene} scale={1.2} />;
};

// Skill card with animations
// Skill card with scroll-based animations
const SkillCard = ({ model, label, cam, color, index }) => (
  <motion.div
    className="skill-card"
    initial={{ opacity: 0, y: 40 }}        // before showing
    whileInView={{ opacity: 1, y: 0 }}     // animate when in viewport
    exit={{ opacity: 0, y: 40 }}           // when leaving page
    transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
    viewport={{ once: false, amount: 0 }} // amount=0.2 means animate when 20% is visible
  >
    <Canvas camera={{ position: cam, fov: 40 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <RotatingModel path={model} color={color} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
    <p className="skill-label">{label}</p>
  </motion.div>
);




export default function SkillsPage() {
  return (
    <AnimatePresence mode="wait">
      <div className="skills-section">
        <h2 className="skills-title">
          <FaReact className="skills-title-icon" />
          How I Can Contribute & My Key Skills
        </h2>

        <div className="skills-row">
          {skills.map((s, i) => (
            <SkillCard
              key={s.model}
              model={s.model}
              label={s.label}
              cam={s.cam}
              color={s.color}
              index={i}
            />
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
}

