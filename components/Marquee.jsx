"use client";

import { motion } from "framer-motion";

const Marquee = ({ children, speed = 20, direction = "left", className = "" }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-8"
        animate={{
          x: direction === "left" ? [0, "-50%"] : ["-50%", 0],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default Marquee;
