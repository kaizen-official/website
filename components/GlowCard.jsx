"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const GlowCard = ({ children, className = "" }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            className={`relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-gray-900 to-gray-800 ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity"
                style={{
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(14, 165, 233, 0.3), transparent 40%)`,
                    opacity,
                }}
            />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};

export default GlowCard;
