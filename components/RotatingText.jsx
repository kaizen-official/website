"use client";

import { motion } from "framer-motion";

const RotatingText = ({ words = [], className = "", interval = 2000 }) => {
  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        className="inline-block"
        animate={{
          y: words.map((_, i) => `-${i * 100}%`),
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: interval / 1000,
          times: words.map((_, i) => i / words.length),
        }}
      >
        {words.map((word, i) => (
          <span key={i} className="block">
            {word}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

export default RotatingText;
