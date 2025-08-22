import React, { useState, Suspense } from "react";
import "./contact.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
useGLTF.preload("/contact.glb");
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const Model = () => {
  const { scene } = useGLTF("/contact.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <primitive object={scene} scale={5} position={[0, -200, -300]} />;
};

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/mvgqjlnr", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      form.reset();
      setTimeout(() => setStatus(""), 3000);
    } else {
      setStatus("Oops! Something went wrong.");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      {/* Title */}
      <h2 className="contact-title flex items-center justify-center gap-6">
        <FaEnvelope className="contact-icon" />
        Get in Touch – Let’s Connect
      </h2>

      <div className="contact-content">
        {/* Left: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="contact-form"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: false, amount: 0 }}
        >
          {/* Name Field */}
          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
            viewport={{ once: false, amount: 0 }}
          >
            <label>Your name</label>
            <input type="text" name="name" placeholder="What's your good name?" required />
          </motion.div>

          {/* Email Field */}
          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
            viewport={{ once: false, amount: 0 }}
          >
            <label>Your Email</label>
            <input type="email" name="email" placeholder="What's your email address?" required />
          </motion.div>

          {/* Message Field */}
          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
            viewport={{ once: false, amount: 0 }}
          >
            <label>Your Message</label>
            <textarea name="message" placeholder="How can I help you?" rows="4" required />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SEND MESSAGE
          </motion.button>

          {status && <p className="status">{status}</p>}
        </motion.form>

        {/* Right: GLB 3D Model */}
        <div className="contact-model">
          <Canvas
            shadows
            camera={{ position: [0, 700, 1100], fov: 45, near: 0.1, far: 50000 }}
          >
            <ambientLight intensity={0.6} />
            <directionalLight
              position={[500, 1000, 500]}
              intensity={1}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-camera-far={5000}
              shadow-camera-left={-1000}
              shadow-camera-right={1000}
              shadow-camera-top={1000}
              shadow-camera-bottom={-1000}
            />

            <mesh
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -200, 0]}
            >
              <planeGeometry args={[5000, 5000]} />
              <shadowMaterial opacity={0.3} />
            </mesh>

            <Suspense fallback={null}>
              <Model />
            </Suspense>
            <OrbitControls enableZoom={true} makeDefault minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} />
          </Canvas>
        </div>
      </div>

    <footer className="contact-footer" style={{ marginTop: "100px" }}>
  <div className="footer-left">
    <a target="_blank" rel="noopener noreferrer">
      Terms & Conditions
    </a>
  </div>

  <div className="footer-right">
    {/* Logos Section */}
    <div className="footer-logos">
      <a href="https://www.instagram.com/hardikxdhawan/" target="_blank" rel="noopener noreferrer">
        <img src="/logo1.svg" alt="Logo 1" className="footer-logo" />
      </a>
      <a href="https://www.linkedin.com/in/hardik-dhawan-415b97239/" target="_blank" rel="noopener noreferrer">
        <img src="/logo2.svg" alt="Logo 2" className="footer-logo" />
      </a>
      <a href="https://github.com/Hardikdhawan2904" target="_blank" rel="noopener noreferrer">
        <img src="/logo3.svg" alt="Logo 3" className="footer-logo" />
      </a>
    </div>

    <span className="footer-text">
      © 2025 Hardik Dhawan. All rights reserved.
    </span>
  </div>    
</footer>


    </section>
  );
};

export default Contact;
