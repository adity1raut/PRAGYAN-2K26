import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";

export default function NexusBackground({ activePulse }) {
  const { scrollY } = useScroll();

  /* ---------------- SCROLL SPEED (REAL MAGIC) ---------------- */

  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const glowStrength = useTransform(
    smoothVelocity,
    [-1000, 0, 1000],
    [0.25, 0.08, 0.25]
  );

  /* ---------------- PARALLAX ---------------- */

  const gridY = useTransform(scrollY, [0, 2000], [0, 200]);
  const glowY = useTransform(scrollY, [0, 2000], [0, -120]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050B1A]">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07142E] via-[#050B1A] to-black" />

      {/* ===== 3D PERSPECTIVE GRID ===== */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 opacity-[0.18]"
      >
        <div
          className="absolute inset-0"
          style={{
            transform: "perspective(900px) rotateX(65deg)",
            transformOrigin: "top center",
            backgroundImage: `
              linear-gradient(to right, rgba(56,189,248,0.18) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(56,189,248,0.18) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* ===== ENERGY STREAMS ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent"
            style={{ left: `${10 + i * 8}%` }}
            animate={{ opacity: [0.15, 0.6, 0.15] }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ===== SCROLL-REACTIVE GLOW ===== */}
      <motion.div
        style={{ y: glowY, opacity: glowStrength }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-cyan-500 blur-[160px]"
      />

      {/* ===== CARD EXPANSION REACTION ===== */}
      <motion.div
        animate={{
          scale: activePulse ? 1.15 : 1,
          opacity: activePulse ? 0.25 : 0,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_60%)]"
      />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] mix-blend-overlay" />
    </div>
  );
}
