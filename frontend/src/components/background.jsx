// src/components/BackgroundLayer.jsx
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Background() {
  const containerRef = useRef(null);

  // Cursor position for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX = useTransform(mouseX, [0, window.innerWidth], [-50, 50]);
  const parallaxY = useTransform(mouseY, [0, window.innerHeight], [-50, 50]);

  useEffect(() => {
    const handleMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  // Generate floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    speed: Math.random() * 10 + 5,
    color: `hsl(${Math.random() * 360}, 80%, 60%)`,
  }));

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden bg-gray-950"
    >
      {/* Infinite parallax background layer */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute inset-0"
      >
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="rounded-full absolute"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              top: `${p.top}%`,
              backgroundColor: p.color,
              boxShadow: `0 0 10px ${p.color}, 0 0 20px ${p.color}`,
            }}
            animate={{ y: [`${p.top}%`, `${p.top + 5}%`, `${p.top}%`] }}
            transition={{
              duration: p.speed,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
