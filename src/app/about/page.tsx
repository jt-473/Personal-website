"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";
import WordsPullUpMultiStyle from "@/components/WordsPullUpMultiStyle";

const bioText = "I went to Rathmore Grammar in Belfast and achieved AAB at A-Level in Maths, Chemistry and Biology. I am now studying Sport and Exercise Science at Ulster University. Alongside my degree I taught myself Python, JavaScript and SQL, started entering hackathons, and developed skills in graphic design and video editing.";

export default function About() {

  return (
    <main className="flex flex-col items-center min-h-screen px-6 pt-20 pb-20">
      <div className="w-full max-w-3xl">

        {/* Intro */}
        <div className="mb-16">
          <motion.p
            className="text-[10px] sm:text-xs mb-6 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", color: "#F94F02" }}
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
I study Sport and Exercise Science at Ulster University. I also build apps, coach sport, do freelance design, and create content.
          </motion.p>
        </div>

        {/* Currently */}
        <FadeUp>
          <div className="mb-16">
            <SectionLabel>Currently</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { title: "Studying", body: "BSc Sport and Exercise Science at Ulster University (2024–2028). Made the Dean's List in first year with a 70%+ average." },
                { title: "Building", body: "Co-founding Lumideck, an AI flashcard tool for students. I handle the front end and social media." },
                { title: "Coaching", body: "Qualified coach in Basketball and Badminton. I deliver sessions for groups of 15–20 participants." },
                { title: "Creating", body: "Adobe Student Ambassador. I do freelance graphic design, video editing, and UGC content for brands. Over 100K total views across brand content." },
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
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(225,224,204,0.55)" }}>
              {bioText}
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
                { title: "Ulster University Dean's List (2024/25)", desc: "Awarded for achieving a 70%+ average in first year." },
                { title: "Elevate Programme", desc: "Selected as 1 of 8 students from a cohort of 180+. The programme focused on public speaking and professional networking." },
                { title: "Hack Belfast Runner-Up", desc: "Finished 2nd place at Hack Belfast 2026. Built and pitched a product in 24 hours." },
                { title: "Ulster EDGE Award", desc: "Completed Ulster University's employability and skills development programme." },
                { title: "Students as Leaders Programme", desc: "Completed Ulster University's student leadership programme." },
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

        {/* Certifications */}
        <FadeUp delay={0.05}>
          <div className="mb-16">
            <SectionLabel>Certifications</SectionLabel>
            <div className="space-y-3">
              {[
                { name: "Shuttle Time Badminton Coaching Qualification", issuer: "" },
                { name: "Basketball NI Coaching Qualification", issuer: "" },
                { name: "AI Fluency for Students — Anthropic", issuer: "" },
                { name: "Introduction to Claude Cowork — Anthropic", issuer: "" },
              ].map(({ name, issuer }) => (
                <div key={name} className="flex items-center justify-between py-3 border-b last:border-0"
                  style={{ borderColor: "rgba(225,224,204,0.08)" }}>
                  <span className="text-sm" style={{ color: "rgba(225,224,204,0.55)" }}>{name}</span>
                  {issuer && <span className="text-xs ml-4 shrink-0" style={{ color: "#F94F02" }}>{issuer}</span>}
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
              Feel free to get in touch.
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
        style={{ fontFamily: "Hussar, sans-serif", fontSize: "12px", color: "#F94F02" }}
      >
        {children}
      </h2>
      <div className="flex-1 h-px" style={{ backgroundColor: "rgba(225,224,204,0.1)" }} />
    </div>
  );
}
