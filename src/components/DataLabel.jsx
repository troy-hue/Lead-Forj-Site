import React from 'react';

export default function DataLabel({ children, className = "" }) {
  return (
    <span
      className={`text-xs tracking-wider text-[#8A8A8A] uppercase ${className}`}
      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
    >
      {children}
    </span>
  );
}