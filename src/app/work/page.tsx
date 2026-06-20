"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import WordsPullUpMultiStyle from "@/components/WordsPullUpMultiStyle";

const projects = [
  {
    title: "Brewstige",
    tag: "Hackathon · Runner-Up",
    year: "2025",
    description:
      "Placed 2nd at Hack Belfast. Built a gamified café discovery app with a 5-person team, working on UI, reporting, and product development. Got 4 business meetings and early client interest within 24 hours of finishing.",
    stack: ["UI Design", "Product Development", "Reporting"],
  },
  {
    title: "World Cup Predictor",
    tag: "Data Science",
    year: "2025",
    description:
      "Analysed 49,000+ international football matches in Python to predict the 2026 World Cup. Used host advantage, recent form, and Elo ratings as variables, applying the same performance analysis thinking I use in sport science.",
    stack: ["Python", "Data Analysis", "Sports Science"],
  },
  {
    title: "NetWorth",
    tag: "Personal Finance App",
    year: "2025",
    description:
      "Built it because I was tired of checking multiple apps to know where my money was. Links bank and investment accounts, tracks net worth, flags subscriptions, and tells you what you can actually spend.",
    stack: ["App Development", "Finance", "Data"],
  },
  {
    title: "Lumideck",
    tag: "AI EdTech Startup · Co-Founder",
    year: "2025",
    description:
      "Co-founded an AI EdTech startup. We built an interactive flashcard platform, iterated based on user feedback, and kept shipping until the engagement numbers actually moved.",
    stack: ["AI", "EdTech", "Product"],
  },
  {
    title: "Life Quest",
    tag: "Educational Technology",
    year: "2024",
    description:
      "Designed and presented a gamified life-skills platform for 16 to 25 year olds. The idea was to teach things school skips: personal finance, career readiness, communication, and how to actually live independently.",
    stack: ["EdTech", "UX Design", "Gamification"],
  },
  {
    title: "Biomechanics Project",
    tag: "Sports Science",
    year: "2024",
    description:
      "Ran movement analysis on 10+ subjects, spotted mechanical inefficiencies, and put together improvement recommendations. Most subjects had room for 10–20% gains.",
    stack: ["Biomechanics", "Performance Analysis", "Research"],
  },
  {
    title: "Performance Analysis",
    tag: "Sports Science",
    year: "2024",
    description:
      "Analysed athlete performance data and match footage. Tactical decision-making accuracy improved by 15% across simulated scenarios.",
    stack: ["Performance Analysis", "Data", "Sports Science"],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl p-6 md:p-8 border flex flex-col group cursor-default"
      style={{ backgroundColor: "#101010", borderColor: "rgba(225,224,204,0.07)" }}
      initial={{ scale: 0.97, opacity: 0, y: 20 }}
      animate={inView ? { scale: 1, opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ borderColor: "rgba(225,224,204,0.18)" }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h2
            className="text-lg md:text-xl font-medium mb-1"
            style={{ fontFamily: "Hussar, sans-serif", color: "#E1E0CC" }}
          >
            {project.title}
          </h2>
          <p className="text-xs" style={{ color: "rgba(225,224,204,0.4)" }}>
            {project.tag}
          </p>
        </div>
        <span
          className="text-xs font-mono shrink-0 pt-1"
          style={{ color: "rgba(225,224,204,0.3)" }}
        >
          {project.year}
        </span>
      </div>

      {/* Description */}
      <p
        className="text-sm leading-relaxed flex-1 mb-5"
        style={{ color: "rgba(225,224,204,0.55)" }}
      >
        {project.description}
      </p>

      {/* Stack tags + arrow */}
      <div className="flex items-end justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="px-2.5 py-1 text-[10px] rounded-full border"
              style={{ color: "rgba(225,224,204,0.4)", borderColor: "rgba(225,224,204,0.1)" }}
            >
              {s}
            </span>
          ))}
        </div>
        <ArrowRight
          size={14}
          className="shrink-0 opacity-0 group-hover:opacity-60 transition-opacity duration-200"
          style={{ color: "#E1E0CC", transform: "rotate(-45deg)" }}
        />
      </div>
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
            className="text-[10px] sm:text-xs mb-6 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", color: "rgba(225,224,204,0.4)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            things i&apos;ve built
          </motion.p>

          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.9] tracking-[-0.04em]"
            style={{ fontFamily: "Hussar, sans-serif" }}>
            <WordsPullUpMultiStyle
              segments={[
                { text: "Work.", className: "" },
              ]}
            />
          </div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

      </div>
    </main>
  );
}
