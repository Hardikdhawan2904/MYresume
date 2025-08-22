import { useEffect, useState } from "react";

function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: pos.y,
        left: pos.x,
        width: 20,
        height: 20,
        background: "rgba(155, 48, 255, 0.6)", // purplish glow
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        boxShadow: "0 0 15px rgba(155, 48, 255, 0.8)",
        zIndex: 9999,
      }}
    />
  );
}

export default CustomCursor;
