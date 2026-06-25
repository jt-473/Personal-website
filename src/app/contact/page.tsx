"use client";

import { motion } from "framer-motion";
import WordsPullUpMultiStyle from "@/components/WordsPullUpMultiStyle";

const links = [
  {
    label: "Email",
    value: "jovantomy@icloud.com",
    href: "mailto:jovantomy@icloud.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jovan-tomy",
    href: "https://www.linkedin.com/in/jovan-tomy-077b1a32a/",
  },
];

export default function Contact() {
  return (
    <main className="flex flex-col items-center min-h-screen px-6 pt-20 pb-20">
      <div className="w-full max-w-3xl">

        <motion.p
          className="text-[10px] sm:text-xs mb-6 tracking-widest uppercase"
          style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", color: "rgba(225,224,204,0.4)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          get in touch
        </motion.p>

        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.9] tracking-[-0.04em] mb-8"
          style={{ fontFamily: "Hussar, sans-serif" }}>
          <WordsPullUpMultiStyle segments={[{ text: "Contact." }]} />
        </div>

        <motion.p
          className="text-lg leading-relaxed max-w-2xl mb-16"
          style={{ color: "rgba(225,224,204,0.6)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          Feel free to get in touch.
        </motion.p>

        <div className="space-y-0">
          {links.map(({ label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center justify-between py-6 border-t group"
              style={{ borderColor: "rgba(225,224,204,0.08)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-baseline gap-6 md:gap-12">
                <span
                  className="text-xs uppercase tracking-widest w-20 shrink-0"
                  style={{ color: "rgba(225,224,204,0.35)" }}
                >
                  {label}
                </span>
                <span
                  className="text-base md:text-lg transition-opacity duration-200 group-hover:opacity-60"
                  style={{ color: "#E1E0CC" }}
                >
                  {value}
                </span>
              </div>
              <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(225,224,204,0.3)" }}>
                {href.startsWith("mailto") ? "Email" : "Open"}
              </span>
            </motion.a>
          ))}
          <div className="border-t" style={{ borderColor: "rgba(225,224,204,0.08)" }} />
        </div>

      </div>
    </main>
  );
}
