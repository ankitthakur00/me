"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode, CSSProperties } from "react";
import { useTheme } from "next-themes";

interface MarkerHighlightProps {
  children: ReactNode;
  color?: string;
  delay?: number;
  className?: string;
}

export const MarkerHighlight = ({
  children,
  color = "#FBBC05",
  delay = 0.5,
  className = "",
}: MarkerHighlightProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const highlightColor = theme === "dark" ? "#FFE066" : color;

  const highlightStyle: CSSProperties = {
    position: "absolute",
    left: "-2.5%",
    bottom: "2px",
    height: "80%",
    backgroundColor: highlightColor,
    borderRadius: "5px",
    transform: "rotate(-1deg) skew(-5deg)",
    transformOrigin: "left center",
    zIndex: -1,
    pointerEvents: "none",
    opacity: theme === "dark" ? 0.3 : 0.4,
  };

  return (
    <span ref={ref} className={`relative inline-block z-10 marker-highlight ${className}`}>
      {children}
      <motion.span
        style={highlightStyle}
        initial={{ width: 0, opacity: 0 }}
        animate={isInView ? { width: "105%", opacity: highlightStyle.opacity } : { width: 0, opacity: 0 }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
    </span>
  );
};
