"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeUp from "@/components/FadeUp";
import WordsPullUpMultiStyle from "@/components/WordsPullUpMultiStyle";

function AnimatedChar({ char, progress, index, total }: {
  char: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
  total: number;
}) {
  const start = (index / total) * 0.8;
  const end = start + 0.15;
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

const bioText = "I went to Rathmore Grammar School in Belfast and left with AAB at A-Level in Maths, Chemistry, and Biology. Outside of sport science I taught myself Python, JavaScript and SQL, started building projects, entered hackathons, and picked up graphic design and video editing along the way.";

export default function About() {
  const bioRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bioRef,
    offset: ["start 0.85", "end 0.25"],
  });

  return (
    <main className="flex flex-col items-center min-h-screen px-6 pt-20 pb-20">
      <div className="w-full max-w-3xl">

        {/* Intro */}
        <div className="mb-16">
          <motion.p
            className="text-[10px] sm:text-xs mb-6 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", color: "rgba(225,224,204,0.4)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            a bit about me
          </motion.p>
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.9] tracking-[-0.04em] mb-8"
            style={{ fontFamily: "Hussar, sans-serif" }}>
            <WordsPullUpMultiStyle segments={[{ text: "Who I Am." }]} />
          </div>
          <motion.p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "rgba(225,224,204,0.6)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            I&apos;m Jovan, a Sport and Exercise Science student at Ulster University in Belfast. I build apps, coach sport, analyse data, and make things. I don&apos;t fit neatly into one box and I&apos;m fine with that.
          </motion.p>
        </div>

        {/* Currently */}
        <FadeUp>
          <div className="mb-16">
            <SectionLabel>Currently</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { title: "Studying", body: "BSc Sport and Exercise Science at Ulster University (2024–2028). Dean's List 2024/25, 70%+ average." },
                { title: "Building", body: "Co-founding Lumideck, an AI EdTech startup helping students learn through interactive flashcard tools." },
                { title: "Coaching", body: "Qualified Basketball and Badminton coach, delivering sessions for groups of 15–20 participants and supporting skill development in young people." },
                { title: "Creating", body: "Adobe Student Ambassador. Freelance graphic designer, video editor, and UGC creator. 100K+ total views across branded content for 5+ companies." },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  className="p-5 rounded-[8px] relative overflow-hidden group border cursor-default"
                  style={{ backgroundColor: "#101010", borderColor: "rgba(225,224,204,0.08)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ borderColor: "rgba(225,224,204,0.2)" }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[8px]"
                    style={{ background: "radial-gradient(circle at 50% 0%, rgba(222,219,200,0.04) 0%, transparent 70%)" }}
                  />
                  <p className="text-sm font-medium mb-2" style={{ color: "#E1E0CC" }}>{card.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(225,224,204,0.5)" }}>{card.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Background with scroll-linked char animation */}
        <FadeUp delay={0.05}>
          <div className="mb-16">
            <SectionLabel>Background</SectionLabel>
            <p ref={bioRef} className="text-sm leading-relaxed mb-4">
              {bioText.split("").map((char, i) => (
                <AnimatedChar
                  key={i}
                  char={char}
                  progress={scrollYProgress}
                  index={i}
                  total={bioText.length}
                />
              ))}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(225,224,204,0.55)" }}>
              I was selected for Ulster&apos;s Elevate Programme (1 of 8 students from a cohort of 180+), focused on public speaking, networking, and personal growth.
            </p>
          </div>
        </FadeUp>

        {/* Skills */}
        <FadeUp delay={0.05}>
          <div className="mb-16">
            <SectionLabel>Skills & Tools</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {[
                "Python", "JavaScript", "SQL",
                "Adobe Photoshop", "Premiere Pro", "Canva", "Figma", "Framer",
                "Excel", "PowerPoint",
                "Performance Analysis", "Biomechanics", "Data Analysis",
                "Coaching", "Content Creation", "Graphic Design",
              ].map((skill, i) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1.5 text-xs rounded-[4px] cursor-default border"
                  style={{ color: "rgba(225,224,204,0.5)", borderColor: "rgba(225,224,204,0.1)" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.02 * i, duration: 0.3 }}
                  whileHover={{ borderColor: "rgba(225,224,204,0.3)", color: "#E1E0CC" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Achievements */}
        <FadeUp delay={0.05}>
          <div className="mb-16">
            <SectionLabel>Achievements</SectionLabel>
            <div className="space-y-3">
              {[
                { title: "Ulster University Dean's List (2024/25)", desc: "Achieved 70%+ average, certificate awarded." },
                { title: "Elevate Programme", desc: "1 of 8 students picked from a cohort of 180+ for a personal and professional development programme." },
                { title: "Hack Belfast Runner-Up", desc: "Placed 2nd overall out of all teams in a 24-hour hackathon." },
                { title: "Ulster EDGE Award", desc: "Completed a structured employability programme." },
                { title: "Students as Leaders Programme", desc: "Completed leadership programme focused on teamwork, communication, and problem-solving." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 py-3 border-b last:border-0"
                  style={{ borderColor: "rgba(225,224,204,0.08)" }}>
                  <span className="text-sm font-medium min-w-0 shrink-0 hidden md:block"
                    style={{ width: "280px", color: "#E1E0CC" }}>{item.title}</span>
                  <div className="md:hidden">
                    <p className="text-sm font-medium mb-1" style={{ color: "#E1E0CC" }}>{item.title}</p>
                    <p className="text-sm" style={{ color: "rgba(225,224,204,0.5)" }}>{item.desc}</p>
                  </div>
                  <p className="text-sm hidden md:block" style={{ color: "rgba(225,224,204,0.5)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Contact */}
        <FadeUp delay={0.05}>
          <div>
            <SectionLabel>Get in touch</SectionLabel>
            <p className="text-sm mb-6" style={{ color: "rgba(225,224,204,0.5)" }}>
              If something I&apos;ve built or done is relevant to you, I&apos;m happy to talk.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="mailto:jovantomy@icloud.com"
                className="px-5 py-2.5 text-sm font-medium rounded-full cursor-pointer"
                style={{ backgroundColor: "#DEDBC8", color: "#000" }}
                whileHover={{ opacity: 0.85 }}
                transition={{ duration: 0.15 }}
              >
                Email me
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/jovan-tomy-077b1a32a/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-sm rounded-full cursor-pointer border"
                style={{ borderColor: "rgba(225,224,204,0.2)", color: "rgba(225,224,204,0.6)" }}
                whileHover={{ borderColor: "rgba(225,224,204,0.5)", color: "#E1E0CC" }}
                transition={{ duration: 0.15 }}
              >
                LinkedIn
              </motion.a>
            </div>
          </div>
        </FadeUp>

      </div>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <h2
        className="text-xs font-semibold tracking-widest uppercase whitespace-nowrap"
        style={{ fontFamily: "Hussar, sans-serif", fontSize: "12px", color: "#E1E0CC" }}
      >
        {children}
      </h2>
      <div className="flex-1 h-px" style={{ backgroundColor: "rgba(225,224,204,0.1)" }} />
    </div>
  );
}
