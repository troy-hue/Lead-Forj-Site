import React from 'react';
import { motion } from 'framer-motion';

export default function AbstractShape({ className = "", variant = "circle", delay = 0 }) {
  const shapes = {
    circle: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9A24D" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#C9A24D" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="none" stroke="url(#goldGradient)" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="url(#goldGradient)" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="url(#goldGradient)" strokeWidth="0.5" />
      </svg>
    ),
    arc: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9A24D" stopOpacity="0" />
            <stop offset="50%" stopColor="#C9A24D" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C9A24D" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M 20 100 Q 100 20 180 100" fill="none" stroke="url(#arcGradient)" strokeWidth="1" />
        <path d="M 40 120 Q 100 50 160 120" fill="none" stroke="url(#arcGradient)" strokeWidth="0.5" />
      </svg>
    ),
    lines: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9A24D" stopOpacity="0" />
            <stop offset="50%" stopColor="#C9A24D" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#C9A24D" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1="0" y1={40 + i * 30} x2="200" y2={40 + i * 30} stroke="url(#lineGradient)" strokeWidth="0.5" />
        ))}
      </svg>
    ),
    dots: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {[...Array(25)].map((_, i) => {
          const x = (i % 5) * 40 + 20;
          const y = Math.floor(i / 5) * 40 + 20;
          const opacity = Math.random() * 0.3 + 0.1;
          return (
            <circle key={i} cx={x} cy={y} r="2" fill="#C9A24D" fillOpacity={opacity} />
          );
        })}
      </svg>
    )
  };

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay, ease: "easeOut" }}
    >
      <motion.div
        animate={{ 
          rotate: variant === "circle" ? 360 : 0,
          y: [0, -10, 0]
        }}
        transition={{ 
          rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {shapes[variant]}
      </motion.div>
    </motion.div>
  );
}
