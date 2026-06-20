"use client";

import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blob 1 — purple, top left */}
      <motion.div
        className="absolute rounded-full opacity-25 blur-[120px]"
        style={{
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(circle, #7c3aed, transparent 70%)",
          top: "-20%",
          left: "-15%",
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, 30, -10, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 2 — cyan, bottom right */}
      <motion.div
        className="absolute rounded-full opacity-20 blur-[140px]"
        style={{
          width: "55vw",
          height: "55vw",
          background: "radial-gradient(circle, #0891b2, transparent 70%)",
          bottom: "-15%",
          right: "-10%",
        }}
        animate={{
          x: [0, -50, 20, 0],
          y: [0, -30, 15, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Blob 3 — indigo, center */}
      <motion.div
        className="absolute rounded-full opacity-15 blur-[160px]"
        style={{
          width: "45vw",
          height: "45vw",
          background: "radial-gradient(circle, #4f46e5, transparent 70%)",
          top: "30%",
          left: "30%",
        }}
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />
    </div>
  );
}
