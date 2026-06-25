"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WordsPullUpMultiStyle from "@/components/WordsPullUpMultiStyle";


/* ─── Main page ─── */
export default function Home() {

  return (
    <main className="bg-black">

      {/* ═══════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════ */}
      <section className="h-screen bg-black relative overflow-hidden">

        {/* Background photo — cinematic zoom-out reveal */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/ASSd.png"
            alt="Jovan Tomy"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay — fades in after image */}
        <motion.div
          className="absolute inset-0 z-[1] bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
        />

        {/* LEFT — text */}
        <div className="relative z-10 h-full flex flex-col justify-between px-8 md:px-12 pt-0 pb-10 md:pb-14">

          {/* Navbar */}
          <motion.nav
            className="self-center px-6 py-3 md:px-10 rounded-b-2xl"
            style={{ backgroundColor: "#0a0a0a" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex items-center gap-4 sm:gap-8 md:gap-12">
              {[
                { label: "JT", href: "/", isLogo: true },
                { label: "About", href: "/about" },
                { label: "Work", href: "/work" },
                { label: "Resume", href: "/resume.pdf", external: true },
                { label: "Contact", href: "https://www.linkedin.com/in/jovan-tomy-077b1a32a/", external: true },
              ].map(({ label, href, isLogo, external }) => (
                <li key={label}>
                  {external ? (
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      className="text-[11px] sm:text-xs md:text-sm transition-colors duration-200 hover:opacity-70"
                      style={{ color: "rgba(225,224,204,0.65)" }}>
                      {label}
                    </a>
                  ) : (
                    <Link href={href}
                      className="text-[11px] sm:text-xs md:text-sm transition-colors duration-200 hover:opacity-70"
                      style={{ fontFamily: isLogo ? "Hussar, sans-serif" : undefined, fontSize: isLogo ? "18px" : undefined, fontWeight: isLogo ? "bold" : undefined, color: isLogo ? "#F94F02" : "rgba(225,224,204,0.65)" }}>
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.nav>

          <div className="flex-1" />

          {/* Bottom row */}
          <motion.div className="flex items-end justify-between gap-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}>
            <div />
            <Link href="/work"
              className="group inline-flex items-center gap-2 hover:gap-3 transition-all duration-200 rounded-full pl-5 pr-2 py-2 shrink-0"
              style={{ backgroundColor: "#DEDBC8" }}>
              <span className="text-black text-sm font-medium whitespace-nowrap">See my work</span>
              <span className="rounded-full w-9 h-9 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shrink-0" style={{ backgroundColor: "#F94F02" }}>
                <ArrowRight size={14} color="#fff" />
              </span>
            </Link>
          </motion.div>

        </div>


      </section>

      {/* ═══════════════════════════════════════
          SECTION 2 — ABOUT
      ═══════════════════════════════════════ */}
      <section className="bg-black py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Left — text */}
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs uppercase tracking-widest mb-8" style={{ color: "#F94F02" }}>
              About
            </p>
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.03em]" style={{ color: "#E1E0CC" }}>
              <WordsPullUpMultiStyle
                segments={[
                  { text: "I'm Jovan Tomy,", className: "font-normal" },
                  { text: "a student-athlete who builds things.", className: "font-normal italic" },
                ]}
              />
            </div>
            <p className="mt-10 text-lg md:text-xl leading-relaxed max-w-lg" style={{ color: "rgba(225,224,204,0.55)" }}>
              I&apos;m Jovan. A sport science student who also builds apps, analyses data, creates content, and does freelance design.
            </p>
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm transition-opacity duration-200 hover:opacity-60"
                style={{ color: "#E1E0CC" }}
              >
                More about me <ArrowRight size={14} style={{ transform: "rotate(-45deg)" }} />
              </Link>
            </div>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            className="rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/5]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/photo-2.jpg" alt="Jovan" className="w-full h-full object-cover" />
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 3 — NAV LINKS
      ═══════════════════════════════════════ */}
      <section className="bg-black px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">

          <div>
            {[
              { label: "About",   desc: "Who I am & what I've done",          href: "/about",                                        external: false },
              { label: "Work",    desc: "Projects, startups & experiments",    href: "/work",                                         external: false },
              { label: "Resume",  desc: "Full CV — opens as PDF",              href: "/resume.pdf",                                   external: true  },
              { label: "Contact", desc: "Get in touch directly",               href: "https://www.linkedin.com/in/jovan-tomy-077b1a32a/", external: true  },
            ].map(({ label, desc, href, external }, i) => {
              const Tag = external ? "a" : Link;
              const props = external
                ? { href, target: "_blank", rel: "noopener noreferrer" }
                : { href };

              return (
                <motion.div
                  key={label}
                  className="group border-t relative overflow-hidden"
                  style={{ borderColor: "rgba(225,224,204,0.08)" }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Orange sweep on hover */}
                  <motion.div
                    className="absolute inset-0 origin-left pointer-events-none"
                    style={{ backgroundColor: "rgba(232,80,10,0.06)" }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <Tag
                    {...props}
                    className="relative flex items-center justify-between py-6 md:py-8 cursor-pointer"
                  >
                    <div className="flex items-baseline gap-4 md:gap-8">
                      <span
                        className="text-xs font-mono tabular-nums shrink-0 w-6"
                        style={{ color: "#F94F02" }}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-[-0.04em] transition-all duration-300 group-hover:translate-x-1"
                        style={{ fontFamily: "Hussar, sans-serif", color: "#E1E0CC" }}
                      >
                        {label}
                      </span>
                      <span
                        className="hidden sm:block text-xs md:text-sm"
                        style={{ color: "#F94F02" }}
                      >
                        {desc}
                      </span>
                    </div>
                    <div
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-[#F94F02] group-hover:bg-[#F94F02]"
                      style={{ borderColor: "rgba(225,224,204,0.3)" }}
                    >
                      <ArrowRight size={14} className="transition-colors duration-300 group-hover:text-white" style={{ color: "#E1E0CC", transform: "rotate(-45deg)" }} />
                    </div>
                  </Tag>
                </motion.div>
              );
            })}
            {/* Bottom border */}
            <div className="border-t" style={{ borderColor: "rgba(225,224,204,0.08)" }} />
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t px-6 py-10 text-center" style={{ borderColor: "rgba(225,224,204,0.08)" }}>
        <p className="text-xs" style={{ color: "rgba(225,224,204,0.35)" }}>
          © {new Date().getFullYear()} Jovan Tomy — Belfast
        </p>
      </footer>

    </main>
  );
}
