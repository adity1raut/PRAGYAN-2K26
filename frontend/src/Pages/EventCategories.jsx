import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  { title: "Departmental Events", type: "departmental" },
  { title: "Cultural Events", type: "cultural" },
  { title: "Technical Events", type: "technical" },
];

export default function EventCategories() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(`/events/${cat.type}`)}
            className="
              cursor-pointer
              rounded-3xl
              bg-black/60
              backdrop-blur-xl
              border border-cyan-400/30
              p-10
              text-center
              text-white
            "
          >
            <h2 className="text-2xl font-semibold">{cat.title}</h2>
            <p className="mt-3 text-cyan-400 text-sm tracking-widest">
              VIEW EVENTS →
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
