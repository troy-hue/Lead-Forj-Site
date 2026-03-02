import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const layers = [
  {
    id: 'signals',
    label: '01 — SIGNALS',
    title: 'Buyer Signal Detection',
    desc: 'Real-world triggers that indicate timing, intent, or fit — hiring patterns, leadership changes, funding events, content engagement.',
    color: '#C9A24D',
    width: '100%',
    items: ['Hiring intent', 'Leadership change', 'Funding events', 'Content engagement'],
  },
  {
    id: 'research',
    label: '02 — RESEARCH',
    title: 'AI-Assisted Deep Research',
    desc: 'Each signal is enriched with contextual intelligence — company stage, strategic priorities, decision-maker mapping.',
    color: '#A8834A',
    width: '82%',
    items: ['Company context', 'Stakeholder mapping', 'Priority alignment', 'Risk indicators'],
  },
  {
    id: 'qualification',
    label: '03 — QUALIFICATION',
    title: 'Signal Qualification Layer',
    desc: 'Fōrj Signal scores each prospect against fit criteria. If threshold isn\'t met, no email is sent.',
    color: '#8A6A3A',
    width: '66%',
    items: ['Fit scoring', 'Send decision', 'Timing gate', 'Relevance threshold'],
  },
  {
    id: 'message',
    label: '04 — MESSAGE',
    title: 'Context-Driven Personalization',
    desc: 'Each message is built around the specific signal and research — not templates. One reason. One ask.',
    color: '#6B5230',
    width: '50%',
    items: ['Signal-specific hook', 'Single CTA', 'Reputation-safe tone', 'Low volume'],
  },
  {
    id: 'conversation',
    label: '05 — OUTCOME',
    title: 'Qualified Conversations',
    desc: 'The result: fewer emails, higher reply rates, and conversations with prospects who are actually ready to engage.',
    color: '#C9A24D',
    width: '36%',
    items: ['Higher reply rate', 'Qualified meetings', 'Protected reputation', 'Compounding results'],
  },
];

export default function SignalFrameworkDiagram() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeLayer, setActiveLayer] = useState(null);

  return (
    <div ref={ref} className="w-full max-w-4xl">
      {/* Funnel diagram */}
      <div className="relative flex flex-col items-center gap-0 mb-12">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.id}
            className="relative cursor-pointer group"
            style={{ width: layer.width, maxWidth: '100%' }}
            initial={{ opacity: 0, scaleX: 0.6, y: -10 }}
            animate={inView ? { opacity: 1, scaleX: 1, y: 0 } : {}}
            transition={{ delay: i * 0.18, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
          >
            {/* Layer bar */}
            <div
              className="relative px-5 py-3 transition-all duration-300 group-hover:brightness-110"
              style={{
                background: `linear-gradient(90deg, ${layer.color}22 0%, ${layer.color}11 100%)`,
                borderLeft: `2px solid ${layer.color}`,
                borderTop: i === 0 ? `1px solid ${layer.color}33` : 'none',
                borderRight: `1px solid ${layer.color}22`,
                borderBottom: `1px solid ${layer.color}22`,
                clipPath: i < layers.length - 1
                  ? 'polygon(0 0, 100% 0, 96% 100%, 4% 100%)'
                  : 'polygon(4% 0, 96% 0, 100% 100%, 0% 100%)',
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono tracking-widest" style={{ color: layer.color }}>
                    {layer.label}
                  </span>
                  <span className="text-sm font-medium text-[#F6F3EC]">{layer.title}</span>
                </div>
                {/* Expand indicator */}
                <motion.div
                  animate={{ rotate: activeLayer === layer.id ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-4 flex items-center justify-center opacity-40 group-hover:opacity-80"
                  style={{ color: layer.color }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                    <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </motion.div>
              </div>
            </div>

            {/* Expanded detail panel */}
            <motion.div
              initial={false}
              animate={{
                height: activeLayer === layer.id ? 'auto' : 0,
                opacity: activeLayer === layer.id ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
              style={{ background: `${layer.color}08`, borderLeft: `2px solid ${layer.color}44` }}
            >
              <div className="px-5 py-4">
                <p className="text-[#8A8A8A] text-sm mb-3">{layer.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono px-2 py-1 rounded"
                      style={{ background: `${layer.color}18`, color: layer.color, border: `1px solid ${layer.color}30` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Connector arrow */}
            {i < layers.length - 1 && (
              <motion.div
                className="flex justify-center py-0.5"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.18 + 0.4 }}
              >
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M6 0L6 6M3 3L6 6L9 3" stroke="#C9A24D" strokeWidth="1" strokeOpacity="0.3" />
                </svg>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom label */}
      <motion.p
        className="text-center text-xs font-mono text-[#8A8A8A] tracking-widest"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
      >
        FŌRJ SIGNAL — IF THERE ISN'T ENOUGH SIGNAL, WE DON'T SEND
      </motion.p>
    </div>
  );
}