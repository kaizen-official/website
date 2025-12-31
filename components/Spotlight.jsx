"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Spotlight = ({ children, className = "" }) => {
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200 });
    const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const background = useTransform(
        [smoothX, smoothY],
        ([x, y]) =>
            `radial-gradient(600px circle at ${x}px ${y}px, rgba(14, 165, 233, 0.15), transparent 40%)`
    );

    return (
        <motion.div
            className={`relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && (
                <motion.div
                    className="pointer-events-none absolute inset-0 z-0"
                    style={{ background }}
                />
            )}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};

export default Spotlight;
