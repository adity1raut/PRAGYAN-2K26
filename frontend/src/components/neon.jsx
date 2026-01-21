import { motion, useMotionValue, useSpring } from "framer-motion";
import { Star, Trophy, Sparkles, Users, Heart } from "lucide-react";

/* ----------------------------- ICON MAP ----------------------------- */

const iconMap = {
  trophy: Trophy,
  star: Star,
  sparkles: Sparkles,
  users: Users,
  heart: Heart,
};

/* --------------------------- STAR BACKGROUND -------------------------- */

function StarMesh() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-40 overflow-hidden">
      {Array.from({ length: 45 }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/40"
          style={{
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${20 + Math.random() * 20}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------ EVENT CARD ---------------------------- */

function EventCard({ event, index }) {
  const Icon = iconMap[event.icon?.toLowerCase()] || Star;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 20 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.25);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: smoothX, y: smoothY }}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.8, ease: "easeOut" }}
      whileHover={{
        rotateX: 6,
        rotateY: -6,
        scale: 1.04,
        boxShadow: "0 40px 120px rgba(0,255,255,0.25)",
      }}
      className="
        relative
        rounded-3xl
        bg-black/60
        backdrop-blur-xl
        border border-cyan-400/20
        p-6
        cursor-pointer
        will-change-transform
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-600/10 blur-xl -z-10" />

      {/* Icon */}
      <Icon className="w-10 h-10 text-cyan-400 mb-4" />

      <div className="mt-4 rounded-xl bg-black/35 backdrop-blur-md p-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-2 tracking-wide">
          {event.title}
        </h3>

        {/* Tagline */}
        <p className="text-xs uppercase text-cyan-400 tracking-[0.3em]">
          {event.tagline}
        </p>

        {/* Description */}
        <p className="mt-4 text-gray-300 leading-relaxed text-sm tracking-wide">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ---------------------------- MAIN EXPORT ----------------------------- */

export default function NeonEventCards({ events = [] }) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden px-6 py-16 bg-black">
      <StarMesh />

      {/* Glow Background */}
      <div className="fixed inset-0 -z-30 bg-[radial-gradient(circle_at_center,#00ffff22,transparent_65%)]" />

      <motion.div
        drag="y"
        dragConstraints={{ top: -300, bottom: 300 }}
        dragElastic={0.08}
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-10
          max-w-7xl
          mx-auto
        "
      >
        {events.map((event, i) => (
          <EventCard key={i} event={event} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
