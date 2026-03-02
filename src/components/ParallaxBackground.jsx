import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxBackground() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 3000], [0, -400]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -250]);
  const y3 = useTransform(scrollY, [0, 3000], [0, -150]);
  const rotate1 = useTransform(scrollY, [0, 3000], [0, 45]);
  const scale1 = useTransform(scrollY, [0, 1500], [1, 1.2]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating gradient orbs with parallax */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, #C9A24D 0%, transparent 70%)',
          top: '10%',
          right: '-10%',
          y: y1,
          scale: scale1,
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.02]"
        style={{
          background: 'radial-gradient(circle, #8A8A8A 0%, transparent 70%)',
          top: '50%',
          left: '-15%',
          y: y2,
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.025]"
        style={{
          background: 'radial-gradient(circle, #C9A24D 0%, transparent 70%)',
          top: '120%',
          right: '10%',
          y: y3,
        }}
      />

    </div>
  );
}