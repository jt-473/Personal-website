"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import WordsPullUpMultiStyle from "@/components/WordsPullUpMultiStyle";
import { workItems, type WorkItem } from "@/lib/work-data";

const projects = workItems.filter((w) => w.type === "project");
const experience = workItems.filter((w) => w.type === "experience");

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.97, opacity: 0, y: 20 }}
      animate={inView ? { scale: 1, opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/work/${item.slug}`}
        className="rounded-2xl p-6 md:p-8 border flex flex-col group cursor-pointer"
        style={{ backgroundColor: "#101010", borderColor: "rgba(225,224,204,0.07)", height: "220px" }}
      >
          {/* Top row */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h2
                className="text-lg md:text-xl font-medium mb-1 group-hover:opacity-80 transition-opacity"
                style={{ fontFamily: "Hussar, sans-serif", color: "#E1E0CC" }}
              >
                {item.title}
              </h2>
              <p className="text-xs" style={{ color: "rgba(225,224,204,0.4)" }}>
                {item.subtitle}
              </p>
            </div>
            <span className="text-xs font-mono shrink-0 pt-1" style={{ color: "rgba(225,224,204,0.3)" }}>
              {item.date}
            </span>
          </div>

          {/* Description — truncated */}
          <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(225,224,204,0.55)", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", flex: "1 1 0", minHeight: 0 }}>
            {item.description}
          </p>

          {/* Tags + view more */}
          <div className="flex items-end justify-between gap-3 mt-auto">
            <div className="flex flex-wrap gap-1.5">
              {item.tags.slice(0, 3).map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 text-[10px] rounded-full border"
                  style={{ color: "#F94F02", borderColor: "rgba(232,80,10,0.25)" }}
                >
                  {s}
                </span>
              ))}
            </div>
            <span
              className="shrink-0 inline-flex items-center gap-1.5 text-sm font-bold px-3 py-1 rounded-full"
              style={{ color: "#000", backgroundColor: "#E1E0CC" }}
            >
              View more <ArrowRight size={12} />
            </span>
          </div>
      </Link>
    </motion.div>
  );
}

export default function Work() {
  return (
    <main className="min-h-screen bg-black px-4 md:px-6 pt-16 pb-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="py-16 md:py-24">
          <motion.p
            className="text-xs sm:text-sm mb-6 tracking-widest uppercase"
            style={{ fontFamily: "Hussar, sans-serif", color: "#F94F02" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            things i&apos;ve built & done
          </motion.p>
          <div
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.9] tracking-[-0.04em]"
            style={{ fontFamily: "Hussar, sans-serif" }}
          >
            <WordsPullUpMultiStyle segments={[{ text: "Work." }]} />
          </div>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-2">
          {projects.map((item, i) => (
            <WorkCard key={item.slug} item={item} index={i} />
          ))}
        </div>

        {/* Currently working on */}
        <div className="mt-16 mb-16">
          <motion.p
            className="text-[10px] sm:text-xs mb-8 tracking-widest uppercase"
            style={{ fontFamily: "Hussar, sans-serif", color: "#60A5FA" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            currently working on
          </motion.p>
          <div className="flex flex-col gap-3">
            {[
              { label: "Mini-course", title: "Python for Sport Scientists", sub: "teaching undergrads to use Python for lab reports & essays to get higher grades" },
              { label: "AI Agent", title: "Sport & Exercise Science research agent", sub: "pulls papers, articles, creates graphs" },
              { label: "AI Assistant", title: "Personal branding content assistant", sub: "for LinkedIn" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="rounded-2xl px-6 py-5 border flex items-center gap-5"
                style={{ backgroundColor: "#060d1a", borderColor: "rgba(96,165,250,0.15)" }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="w-2 h-2 rounded-full shrink-0 animate-pulse" style={{ backgroundColor: "#60A5FA" }} />
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-xs px-2.5 py-1 rounded-full border" style={{ color: "#60A5FA", borderColor: "rgba(96,165,250,0.25)" }}>
                    {item.label}
                  </span>
                  <span className="text-sm font-medium" style={{ fontFamily: "Hussar, sans-serif", color: "#E1E0CC" }}>
                    {item.title}
                  </span>
                  {item.sub && (
                    <span className="text-xs" style={{ color: "rgba(225,224,204,0.35)" }}>{item.sub}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mt-16">
          <motion.p
            className="text-[10px] sm:text-xs mb-8 tracking-widest uppercase"
            style={{ fontFamily: "Hussar, sans-serif", color: "#F94F02" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            experience & roles
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-2">
            {experience.map((item, i) => (
              <WorkCard key={item.slug} item={item} index={i} />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
