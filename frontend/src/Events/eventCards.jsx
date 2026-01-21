import { motion, useMotionValue, useSpring } from "framer-motion";
import { Star, Trophy, Sparkles, Users, Heart } from "lucide-react";

/* -------------------------------- ICON MAP -------------------------------- */

const iconMap = {
  trophy: Trophy,
  star: Star,
  sparkles: Sparkles,
  users: Users,
  heart: Heart,
};

/* ----------------------------- STAR BACKGROUND ----------------------------- */

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

/* ------------------------------- EVENT CARD -------------------------------- */

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
    rotateX: 4,
    rotateY: -4,
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
    cursor-grab
    will-change-transform
    flex
    flex-col
    h-full
  "
>
  {/* Glow */}
  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-600/10 blur-xl -z-10" />

  {/* Icon + Content */}

  <div className="mt-4 rounded-xl bg-black/35 backdrop-blur-md p-4 flex flex-col flex-1">
    <h3 className="text-xl font-semibold text-white tracking-widest mb-1">{event.title}</h3>
    <p className="mt-1 text-sm uppercase text-cyan-400/80 tracking-[0.1em]">{event.tagline}</p>
    <p className="mt-2 text-[1rem] text-gray-300 leading-relaxed tracking-wide  font-normal flex-1"
    style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      {event.description}
    </p>
    <p className="text-yellow-400 font-normal">
  🏆 Prize Pool : ₹{event.prizePool}
</p>

<p className="text-gray-400" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
  🎟 Entry Fee : ₹{event.entryFee}
</p>
<p className="mt-1 text-sm text-cyan-400/80 text-gray-300"
    style={{ fontFamily: " system-ui, sans-serif" }}>📍{event.venue}</p>


  </div>
</motion.div>

  );
}

/* ---------------------------- MAIN GRID EXPORT ------------------------------ */

export default function NeonEventCards({ events = [] }) {
  return (
    <section className="relative w-full overflow-hidden px-0 py-4">
      <StarMesh />

      {/* Parallax Glow */}
      <div className="fixed inset-0 -z-30 bg-[radial-gradient(circle_at_center,#00ffff22,transparent_65%)]" />

      {/* Flex Wrapper for Centered Cards */}
      <div className="flex flex-wrap justify-center gap-5 max-w-6xl mx-auto">
        {events.map((event, i) => (
          <div key={i} className="w-full sm:w-80 lg:w-96">
            <EventCard event={event} index={i} />
            <div
  className="
    hidden lg:block
    pointer-events-none
    absolute
    -right-6
    top-10
    h-[80%]
    w-[1px]
    bg-gradient-to-b
    from-transparent
    via-cyan-400/40
    to-transparent
  "
/>


          </div>
        ))}
      </div>
    </section>
  );
}

