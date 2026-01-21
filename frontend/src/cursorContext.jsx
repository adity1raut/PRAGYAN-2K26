import { createContext, useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";

const CursorContext = createContext(null);

export const useCursor = () => useContext(CursorContext);

export function CursorProvider({ children }) {
  const [cursor, setCursor] = useState({
    isMobile: false,
    visible: false,
    x: 0,
    y: 0,
    content: null,
  });

  // ✅ detect mobile safely
  useEffect(() => {
    const checkMobile = () => {
      setCursor((prev) => ({
        ...prev,
        isMobile: window.innerWidth < 768,
      }));
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ FIX: get isMobile from state
  const { isMobile, visible, x, y, content } = cursor;

  return (
    <CursorContext.Provider value={{ cursor, setCursor }}>
      {children}

      {/* ✅ disable cursor on mobile */}
      {!isMobile && visible && (
        <motion.div
          animate={{ x, y, opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          className="fixed pointer-events-none z-[9999]
                     bg-black/80 backdrop-blur-xl
                     text-white px-4 py-2 rounded-xl shadow-xl"
        >
          {content}
        </motion.div>
      )}
    </CursorContext.Provider>
  );
}
