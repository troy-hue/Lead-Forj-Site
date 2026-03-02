import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function GridBackground({ className = "" }) {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.03, 0.05, 0.03]);

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Subtle grid pattern with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #F6F3EC 1px, transparent 1px),
            linear-gradient(to bottom, #F6F3EC 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          y: backgroundY,
          opacity,
        }}
      />
      {/* Gradient fade at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101214] via-transparent to-[#101214]" />
    </div>
  );
}