import React from 'react';
import { motion } from 'framer-motion';

export default function SignalPulse({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      {/* Core dot */}
      <div className="w-2 h-2 bg-[#C9A24D] rounded-full" />

      {/* Pulse rings */}
      <motion.div
        className="absolute inset-0 w-2 h-2 bg-[#C9A24D] rounded-full"
        animate={{
          scale: [1, 3],
          opacity: [0.6, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      <motion.div
        className="absolute inset-0 w-2 h-2 bg-[#C9A24D] rounded-full"
        animate={{
          scale: [1, 3],
          opacity: [0.6, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.5,
        }}
      />
    </div>
  );
}