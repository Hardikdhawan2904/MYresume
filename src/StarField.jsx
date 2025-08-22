// StarField.jsx
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const StarField = ({ count = 300 }) => {
  const pointsRef = useRef();

  // Create random star positions + unique twinkle phase
  const stars = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 200, // x spread
          Math.random() * 100 + 20,    // y height
          (Math.random() - 0.5) * 200  // z spread
        ),
        twinkle: Math.random() * Math.PI * 2, // random twinkle phase
      });
    }
    return temp;
  }, [count]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position.array;
    const colors = pointsRef.current.geometry.attributes.color.array;

    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];

      // 🌠 Falling effect (slower)
      star.position.y -= 0.05; // reduced speed
      if (star.position.y < 0) star.position.y = Math.random() * 100 + 50;

      // ✨ Twinkle effect (smooth pulse)
      const brightness =
        0.6 + Math.sin(clock.getElapsedTime() * 2 + star.twinkle) * 0.4;
      // range = [0.2 → 1.0]

      // Update positions
      positions[i * 3] = star.position.x;
      positions[i * 3 + 1] = star.position.y;
      positions[i * 3 + 2] = star.position.z;

      // Update colors (RGB = brightness → glowing white)
      colors[i * 3] = brightness;
      colors[i * 3 + 1] = brightness;
      colors[i * 3 + 2] = brightness;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.geometry.attributes.color.needsUpdate = true;
  });

  // Geometry buffer
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geom;
  }, [count]);

  // Material for glowing effect
  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        vertexColors: true,
        size: 2.0, // bigger stars
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending, // glow
        depthWrite: false, // prevents dark overlap
      }),
    []
  );

  return <points ref={pointsRef} geometry={geometry} material={material} />;
};

export default StarField;
