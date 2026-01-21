import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import eventData from "../Events/eventData";
import { useEffect, useState } from "react";

export default function AnimatedEventShell() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [focused, setFocused] = useState(0);

  const categories = Object.keys(eventData);

  // 🎯 Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        setFocused((p) => (p + 1) % categories.length);
      }
      if (e.key === "ArrowLeft") {
        setFocused((p) => (p - 1 + categories.length) % categories.length);
      }
      if (e.key === "Enter") {
        navigate(`/events/${categories[focused]}`);
      }
      if (e.key === "Escape") {
        navigate("/events");
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [focused, navigate, categories]);

  return (
    <div className="min-h-screen px-10 pt-24 overflow-hidden">
      <AnimatePresence mode="wait">
        {!category && (
          <motion.div
            key="grid"
            className="grid grid-cols-1 md:grid-cols-3 gap-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {categories.map((key, i) => (
              <motion.div
                key={key}
                layoutId={`event-${key}`}
                tabIndex={0}
                className={`relative rounded-3xl p-10 cursor-pointer
                  backdrop-blur-xl bg-white/5 border border-white/10
                  transition-all ${
                    focused === i ? "ring-2 ring-cyan-400/60" : ""
                  }`}
                onClick={() => navigate(`/events/${key}`)}
                whileHover={{
                  scale: 1.05,
                  rotateX: 6,
                  rotateY: -6,
                  z: 40,
                }}
              >
                <h2 className="text-3xl font-semibold tracking-wide mb-4">
                  {eventData[key].title}
                </h2>
                <p className="text-white/70 tracking-wider leading-relaxed">
                  {eventData[key].description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {category && (
          <motion.div
            key="expanded"
            layoutId={`event-${category}`}
            className="relative rounded-[40px] p-14
              backdrop-blur-2xl bg-white/5 border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => navigate("/events")}
              className="mb-10 text-sm tracking-widest opacity-70 hover:opacity-100"
            >
              ← BACK
            </button>

            <h1 className="text-5xl font-semibold tracking-wide mb-6">
              {eventData[category].title}
            </h1>

            <p className="text-white/70 tracking-wider leading-relaxed max-w-3xl">
              {eventData[category].description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
