"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import WordsPullUpMultiStyle from "@/components/WordsPullUpMultiStyle";

/* ─── Animated letter for scroll-reveal ─── */
function AnimatedLetter({
  char,
  progress,
  index,
  total,
}: {
  char: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
  total: number;
}) {
  const start = (index / total) - 0.1;
  const end = (index / total) + 0.05;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}


/* ─── Main page ─── */
export default function Home() {
  /* About section scroll-linked text */
  const aboutTextRef = useRef(null);
  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutTextRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const aboutText =
    "Over the last year, I placed 2nd at Hack Belfast, landed on the Dean's List at Ulster, and co-founded an AI EdTech startup. I move between sport science, technology, and creativity — and I don't apologise for it.";

  return (
    <main className="bg-black">

      {/* ═══════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════ */}
      <section className="h-screen p-4 md:p-6">
        <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">

          {/* Background video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          />

          {/* Noise overlay */}
          <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none z-10" />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10 pointer-events-none" />

          {/* Pill navbar — sits inside the rounded container */}
          <motion.nav
            className="absolute top-0 left-1/2 -translate-x-1/2 z-30 bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
              {[
                { label: "JT", href: "/", isLogo: true },
                { label: "About", href: "/about" },
                { label: "Work", href: "/work" },
                { label: "Resume", href: "/resume.pdf", external: true },
                { label: "Contact", href: "mailto:jovantomy@icloud.com", external: true },
              ].map(({ label, href, isLogo, external }) => (
                <li key={label}>
                  {external ? (
                    <a
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="text-[10px] sm:text-xs md:text-sm cursor-pointer transition-colors duration-200"
                      style={{ color: "rgba(225, 224, 204, 0.8)" }}
                      onMouseEnter={e => ((e.target as HTMLElement).style.color = "#E1E0CC")}
                      onMouseLeave={e => ((e.target as HTMLElement).style.color = "rgba(225, 224, 204, 0.8)")}
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className="text-[10px] sm:text-xs md:text-sm cursor-pointer transition-colors duration-200"
                      style={{
                        fontFamily: isLogo ? "Hussar, sans-serif" : undefined,
                        fontSize: isLogo ? "17px" : undefined,
                        fontWeight: isLogo ? "bold" : undefined,
                        color: "rgba(225, 224, 204, 0.8)",
                      }}
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Bottom-anchored hero content */}
          <div className="absolute bottom-0 left-0 right-0 z-20 px-5 md:px-10 pb-6 md:pb-10 grid grid-cols-12 items-end gap-4">

            {/* Left — giant name */}
            <div className="col-span-12 md:col-span-8">
              <h1
                className="overflow-hidden flex flex-col"
                style={{ color: "#E1E0CC", fontFamily: "Hussar, sans-serif" }}
                aria-label="Jovan Tomy"
              >
                {/* "Jovan" — big */}
                <span className="overflow-hidden block leading-[0.88] tracking-[-0.06em] text-[22vw] sm:text-[20vw] md:text-[18vw] lg:text-[17vw] xl:text-[16vw]">
                  <motion.span
                    className="inline-block"
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    Jovan
                  </motion.span>
                </span>
                {/* "Tomy" — smaller subtitle */}
                <span className="overflow-hidden block leading-none tracking-[-0.02em] text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3.5vw]"
                  style={{ color: "rgba(225,224,204,0.45)" }}>
                  <motion.span
                    className="inline-block"
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    Tomy
                  </motion.span>
                </span>
              </h1>
            </div>

            {/* Right — description + CTA */}
            <div className="col-span-12 md:col-span-4 flex flex-col gap-5 pb-1 md:pb-4">
              <motion.p
                className="text-xs sm:text-sm md:text-base leading-[1.2]"
                style={{ color: "rgba(222,219,200,0.7)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                Sport and Exercise Science student at Ulster. I build apps, coach sport, analyse data, and make things — not bound by one lane.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 hover:gap-3 transition-all duration-200 rounded-full pl-5 pr-2 py-2 cursor-pointer"
                  style={{ backgroundColor: "#DEDBC8" }}
                >
                  <span className="text-black text-sm sm:text-base font-medium">See my work</span>
                  <span
                    className="rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shrink-0"
                    style={{ backgroundColor: "#000" }}
                  >
                    <ArrowRight size={14} color="#DEDBC8" />
                  </span>
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 2 — ABOUT
      ═══════════════════════════════════════ */}
      <section className="bg-black py-20 md:py-32 px-4 md:px-6">
        <div
          className="max-w-6xl mx-auto rounded-2xl md:rounded-[2rem] px-6 py-16 md:px-16 md:py-24 text-center"
          style={{ backgroundColor: "#101010" }}
        >
          {/* Label */}
          <motion.p
            className="text-[10px] sm:text-xs mb-8 tracking-widest uppercase"
            style={{ color: "#DEDBC8" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Sport &amp; technology
          </motion.p>

          {/* Multi-style heading */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-10">
            <WordsPullUpMultiStyle
              segments={[
                { text: "I'm Jovan Tomy,", className: "font-normal" },
                { text: "a student-athlete turned builder.", className: "font-normal italic" },
                { text: "I work across sport science, tech, and creative media.", className: "font-normal" },
              ]}
            />
          </div>

          {/* Scroll-linked paragraph */}
          <p
            ref={aboutTextRef}
            className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#DEDBC8" }}
          >
            {aboutText.split("").map((char, i) => (
              <AnimatedLetter
                key={i}
                char={char}
                progress={aboutProgress}
                index={i}
                total={aboutText.length}
              />
            ))}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 3 — NAV LINKS
      ═══════════════════════════════════════ */}
      <section className="bg-black px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">

          <div>
            {[
              { label: "About",   desc: "Who I am & what I've done",          href: "/about",                    external: false },
              { label: "Work",    desc: "Projects, startups & experiments",    href: "/work",                     external: false },
              { label: "Resume",  desc: "Full CV — opens as PDF",              href: "/resume.pdf",               external: true  },
              { label: "Contact", desc: "Get in touch directly",               href: "mailto:jovantomy@icloud.com", external: true  },
            ].map(({ label, desc, href, external }, i) => {
              const Tag = external ? "a" : Link;
              const props = external
                ? { href, target: href.startsWith("mailto") ? undefined : "_blank", rel: "noopener noreferrer" }
                : { href };

              return (
                <motion.div
                  key={label}
                  className="group border-t"
                  style={{ borderColor: "rgba(225,224,204,0.08)" }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Tag
                    {...props}
                    className="flex items-center justify-between py-6 md:py-8 cursor-pointer"
                  >
                    <div className="flex items-baseline gap-4 md:gap-8">
                      <span
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-[-0.04em] transition-opacity duration-300 group-hover:opacity-60"
                        style={{ fontFamily: "Hussar, sans-serif", color: "#E1E0CC" }}
                      >
                        {label}
                      </span>
                      <span
                        className="hidden sm:block text-xs md:text-sm transition-colors duration-300"
                        style={{ color: "rgba(225,224,204,0.5)" }}
                      >
                        {desc}
                      </span>
                    </div>
                    <motion.div
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-300"
                      style={{ borderColor: "rgba(225,224,204,0.3)" }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowRight size={14} style={{ color: "#E1E0CC", transform: "rotate(-45deg)" }} />
                    </motion.div>
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
