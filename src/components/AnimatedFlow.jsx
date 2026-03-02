import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedFlow({ steps, color = "#C9A24D" }) {
  return (
    <div className="flex items-center gap-2 text-sm font-mono flex-wrap">
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <motion.span
            className={i === 0 || i === steps.length - 1 ? "text-[#F6F3EC]" : "text-[#8A8A8A]"}
            style={i === 0 ? { color } : {}}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3, duration: 0.5 }}
          >
            {step}
          </motion.span>
          {i < steps.length - 1 && (
            <motion.span
              style={{ color }}
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 0.5, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3 + 0.2, duration: 0.3 }}
            >
              →
            </motion.span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}