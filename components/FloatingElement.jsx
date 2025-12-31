"use client";

import { motion } from "framer-motion";

const FloatingElement = ({ children, className = "", duration = 3, distance = 10 }) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-distance, distance, -distance],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
