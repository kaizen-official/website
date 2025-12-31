"use client";

import { motion } from "framer-motion";

const GradientText = ({ children, className = "", colors = ["#ffaa40", "#9c40ff", "#ffaa40"], animationSpeed = 8 }) => {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        backgroundSize: `${colors.length * 100}% 100%`,
    };

    return (
        <motion.span
            className={`inline-block bg-clip-text text-transparent ${className}`}
            style={gradientStyle}
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
                duration: animationSpeed,
                ease: "linear",
                repeat: Infinity,
            }}
        >
            {children}
        </motion.span>
    );
};

export default GradientText;
