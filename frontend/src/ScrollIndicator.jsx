import { motion, useScroll } from "framer-motion";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[3px] 
                 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400
                 origin-left z-[9998]"
    />
  );
}
