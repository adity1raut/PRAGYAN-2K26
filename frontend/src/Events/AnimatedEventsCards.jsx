export default function NeonEventCards({ events }) {
    const { setCursor } = useCursor();
  
    // Motion values for horizontal scroll
    const x = useMotionValue(0);
  
    return (
      <div className="relative w-full overflow-x-auto py-8 px-6">
        {/* Glowing Scrollbar */}
        <div className="absolute bottom-2 left-0 w-full h-1 bg-gray-800/50 rounded-full">
          <motion.div
            className="h-1 bg-cyan-400/70 rounded-full shadow-neon"
            style={{
              x, // move with scroll
              width: `${Math.min((events.length / 10) * 100, 100)}%`,
            }}
          />
        </div>
  
        {/* Horizontal scroll container */}
        <motion.div
          className="flex gap-8 cursor-grab"
          drag="x"
          dragConstraints={{ left: -events.length * 260 + 260, right: 0 }}
          style={{ x }}
          whileTap={{ cursor: "grabbing" }}
        >
          {events.map((event, idx) => {
            const Icon = { Trophy, Star, Sparkles, Heart, Users }[event.icon] || Star;
            const [mouseX, setMouseX] = useState(0);
            const [mouseY, setMouseY] = useState(0);
  
            // Parallax transforms
            const rotateX = useTransform(mouseY, [0, 300], [6, -6]);
            const rotateY = useTransform(mouseX, [0, 300], [-6, 6]);
  
            return (
              <motion.div
                key={idx}
                className="relative bg-gray-900/80 border border-gray-800 rounded-3xl p-6 min-w-[250px] shadow-neon text-white"
                style={{ rotateX, rotateY, perspective: 600 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setMouseX(e.clientX - rect.left);
                  setMouseY(e.clientY - rect.top);
                }}
                onMouseEnter={() =>
                  setCursor({
                    visible: true,
                    content: (
                      <div className="max-w-xs">
                        <h4 className="font-bold text-lg text-cyan-400">{event.title}</h4>
                        <p className="text-sm text-gray-300 mt-1">{event.description}</p>
                      </div>
                    ),
                  })
                }
                onMouseLeave={() => setCursor({ visible: false, content: null })}
                whileHover={{ scale: 1.08 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 15, delay: idx * 0.1 }}
              >
                {/* Featured Badge */}
                {event.featured && (
                  <div className="absolute -top-3 right-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
  
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
  
                {/* Title */}
                <h3 className="text-2xl font-bold mb-1">{event.title}</h3>
  
                {/* Tagline */}
                <p className="text-cyan-400 text-sm uppercase tracking-wider mb-3">
                  {event.tagline}
                </p>
  
                {/* Description */}
                <p className="text-gray-300 text-base line-clamp-3">{event.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    );
  }
  