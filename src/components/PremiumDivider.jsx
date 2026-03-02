import React from 'react';
import { motion } from 'framer-motion';

export default function PremiumDivider({ className = "" }) {
  return (
    <div className={`relative h-px w-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[#2B2B2B]" />
      <motion.div
        className="absolute h-full w-32 bg-gradient-to-r from-transparent via-[#C9A24D]/50 to-transparent"
        animate={{ x: ["-100%", "400%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
      />
    </div>
  );
}