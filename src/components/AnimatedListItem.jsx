import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedListItem({ index, children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.li
      ref={ref}
      className="flex items-center gap-4 text-[#8A8A8A] pl-4 py-3 hover:text-[#F6F3EC] hover:bg-[#2B2B2B]/30 transition-all group relative overflow-hidden"
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: delay + index * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Progress bar underline */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-[#C9A24D]/20"
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: delay + index * 0.08 + 0.3, duration: 0.6 }}
        style={{ width: '100%' }}
      />
      <span className="text-xs text-[#C9A24D] font-mono w-6 flex-shrink-0">
        0{index + 1}
      </span>
      {children}
    </motion.li>
  );
}