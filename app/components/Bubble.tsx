'use client';

import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface BubbleProps {
  className?: string;
  color?: string;
  size?: number | string;
  opacity?: number;
  delay?: number;
  floatY?: number[];
  floatX?: number[];
  duration?: number;
}

export function Bubble({
  className = "",
  color = "#4285F4",
  size = 16,
  opacity = 0.4, // Muted from 0.6
  delay = 0,
  floatY = [0, -20, 0],
  floatX = [0, 10, 0],
  duration = 5
}: BubbleProps) {
  const [isBurst, setIsBurst] = useState(false);
  const controls = useAnimation();

  const handleBurst = () => {
    if (isBurst) return;
    setIsBurst(true);
    
    // Reset after a few seconds so the user can play with it again
    setTimeout(() => {
      setIsBurst(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {!isBurst ? (
        <motion.div
          key="bubble"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: opacity,
            y: floatY,
            x: floatX,
          }}
          exit={{ 
            scale: 3, 
            opacity: 0,
            transition: { duration: 0.3, ease: "easeOut" } 
          }}
          transition={{
            scale: { duration: 0.5 },
            opacity: { duration: 0.5 },
            y: { duration: duration, repeat: Infinity, ease: "easeInOut", delay: delay },
            x: { duration: duration, repeat: Infinity, ease: "easeInOut", delay: delay },
          }}
          onClick={handleBurst}
          className={`${className} rounded-full cursor-pointer pointer-events-auto`}
          style={{ 
            backgroundColor: color,
            width: size,
            height: size,
            filter: 'blur(1px)' // Subtle blur for the antigravity feel
          }}
          whileHover={{ scale: 1.2, filter: 'blur(0px)', opacity: 1 }}
          whileTap={{ scale: 0.8 }}
        />
      ) : (
        // Simple particle burst effect
        <motion.div key="particles" className="relative">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              animate={{ 
                x: (Math.random() - 0.5) * 60, 
                y: (Math.random() - 0.5) * 60, 
                scale: 0,
                opacity: 0 
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute rounded-full"
              style={{ 
                backgroundColor: color,
                width: typeof size === 'number' ? size / 2 : 8,
                height: typeof size === 'number' ? size / 2 : 8,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
