"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Segment {
  text: string;
  className?: string;
}

interface Props {
  segments: Segment[];
  className?: string;
}

export default function WordsPullUpMultiStyle({ segments, className = "" }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const words: { word: string; cls: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((word) => {
      words.push({ word, cls: seg.className ?? "" });
    });
  });

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center gap-x-[0.28em] ${className}`}>
      {words.map((item, i) => (
        <span key={i} className={`overflow-hidden inline-block ${item.cls}`}>
          <motion.span
            className="inline-block"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
