"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WordsPullUpMultiStyle from "@/components/WordsPullUpMultiStyle";

export default function Resume() {
  return (
    <main className="flex flex-col items-center min-h-screen px-6 pt-24 pb-20">

      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.9] tracking-[-0.04em] mb-12"
        style={{ fontFamily: "Hussar, sans-serif" }}>
        <WordsPullUpMultiStyle segments={[{ text: "Resume." }]} />
      </div>

      <div className="flex flex-col gap-6 w-full max-w-3xl">
        {["/images/cv-page-1.png", "/images/cv-page-2.png"].map((src, i) => (
          <motion.div
            key={src}
            className="rounded-[8px] overflow-hidden border"
            style={{ borderColor: "rgba(225,224,204,0.1)" }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={src}
              alt={`CV page ${i + 1}`}
              width={900}
              height={1200}
              className="w-full h-auto"
              priority={i === 0}
            />
          </motion.div>
        ))}
      </div>

    </main>
  );
}
