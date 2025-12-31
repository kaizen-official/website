"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ShinyText = ({ text, className = "", shimmerWidth = 100 }) => {
    const x = useMotionValue(0);
    const xSmooth = useSpring(x, { damping: 50, stiffness: 400 });
    const maskImage = useTransform(
        xSmooth,
        [0, shimmerWidth],
        [
            `linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) ${shimmerWidth / 2}px, rgba(255,255,255,0) ${shimmerWidth}px)`,
            `linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) ${shimmerWidth / 2}px, rgba(255,255,255,0) ${shimmerWidth}px)`,
        ]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            x.set(0);
            setTimeout(() => {
                x.set(shimmerWidth * 10);
            }, 100);
        }, 3000);
        return () => clearInterval(interval);
    }, [x, shimmerWidth]);

    return (
        <span className={`relative inline-block ${className}`}>
            <span className="relative z-10">{text}</span>
            <motion.span
                className="absolute inset-0 z-20 bg-linear-to-r from-transparent via-white/80 to-transparent"
                style={{
                    maskImage,
                    WebkitMaskImage: maskImage,
                    x: xSmooth,
                }}
            />
        </span>
    );
};

export default ShinyText;
