"use client";

import { motion } from "framer-motion";

const MagneticButton = ({ children, className = "" }) => {
    return (
        <motion.button
            className={`relative overflow-hidden ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            <motion.span
                className="absolute inset-0 bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
            />
            {children}
        </motion.button>
    );
};

export default MagneticButton;
