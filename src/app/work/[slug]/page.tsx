"use client";

import { notFound, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Upload } from "lucide-react";
import { use, useRef, useState } from "react";
import { workItems } from "@/lib/work-data";

export default function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const item = workItems.find((w) => w.slug === slug);
  if (!item) notFound();

  const router = useRouter();
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState<string[]>(item.media ?? []);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function uploadFile(file: File) {
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    fd.append("slug", slug);
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    const data = await res.json();
    if (data.path) setUploaded((prev) => [...prev, data.path]);
    setUploading(false);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    Array.from(e.dataTransfer.files).forEach(uploadFile);
  }

  return (
    <main className="min-h-screen bg-black px-5 md:px-10 pt-16 pb-24">
      <div className="max-w-3xl mx-auto">

        {/* Back button */}
        <motion.button
          onClick={() => router.push("/work")}
          className="flex items-center gap-2 mt-8 mb-16 cursor-pointer group"
          style={{ color: "rgba(225,224,204,0.45)" }}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ color: "#E1E0CC" } as never}
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="text-sm">Back to work</span>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <p className="text-xs tracking-widest uppercase"
              style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", color: "rgba(225,224,204,0.4)" }}>
              {item.subtitle}
            </p>
            <span className="text-xs font-mono shrink-0" style={{ color: "rgba(225,224,204,0.3)" }}>
              {item.date}
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-[-0.04em] leading-[0.9] mb-8"
            style={{ fontFamily: "Hussar, sans-serif", color: "#E1E0CC" }}
          >
            {item.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full border"
                style={{ color: "rgba(225,224,204,0.5)", borderColor: "rgba(225,224,204,0.12)" }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t mb-10" style={{ borderColor: "rgba(225,224,204,0.08)" }} />

          {/* Description */}
          <p className="text-base leading-relaxed mb-16" style={{ color: "rgba(225,224,204,0.7)" }}>
            {item.description}
          </p>
        </motion.div>

        {/* Media section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {uploaded.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              {uploaded.map((src, i) => (
                <motion.div
                  key={i}
                  className={`rounded-2xl overflow-hidden border ${src.endsWith(".pdf") ? "" : "aspect-video"} ${!src.endsWith(".pdf") && !src.endsWith(".mp4") && !src.endsWith(".mov") && !src.endsWith(".webm") ? "cursor-zoom-in" : ""}`}
                  style={{ borderColor: "rgba(225,224,204,0.08)", ...(src.endsWith(".pdf") ? { height: "600px" } : {}) }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={!src.endsWith(".pdf") ? { scale: 1.02 } : {}}
                  onClick={() => {
                    if (!src.endsWith(".pdf") && !src.endsWith(".mp4") && !src.endsWith(".mov") && !src.endsWith(".webm")) {
                      setLightbox(src);
                    }
                  }}
                >
                  {src.endsWith(".mp4") || src.endsWith(".mov") || src.endsWith(".webm") ? (
                    <video src={src} controls className="w-full h-full object-cover" />
                  ) : src.endsWith(".pdf") ? (
                    <iframe src={src} className="w-full h-full" style={{ minHeight: "500px" }} />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {/* Lightbox */}
          {lightbox && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-zoom-out"
              style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setLightbox(null)}
            >
              <motion.img
                src={lightbox}
                alt=""
                className="max-w-full max-h-full rounded-2xl object-contain"
                style={{ maxHeight: "90vh", maxWidth: "90vw" }}
                initial={{ scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.88, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
              />
              <button
                className="absolute top-5 right-6 text-2xl font-light transition-opacity hover:opacity-60"
                style={{ color: "rgba(225,224,204,0.7)" }}
                onClick={() => setLightbox(null)}
              >
                ✕
              </button>
            </motion.div>
          )}

          {/* Drop zone */}
          <div
            className="rounded-2xl border border-dashed flex flex-col items-center justify-center py-16 text-center cursor-pointer transition-colors duration-200"
            style={{ borderColor: dragging ? "#F94F02" : "rgba(225,224,204,0.15)", backgroundColor: dragging ? "rgba(249,79,2,0.05)" : "transparent" }}
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            onClick={() => inputRef.current?.click()}
          >
            <Upload size={20} style={{ color: dragging ? "#F94F02" : "rgba(225,224,204,0.3)", marginBottom: "12px" }} />
            <p className="text-sm" style={{ color: dragging ? "#F94F02" : "rgba(225,224,204,0.4)" }}>
              {uploading ? "Uploading…" : "Drop files here or click to browse"}
            </p>
            <p className="text-xs mt-1" style={{ color: "rgba(225,224,204,0.2)" }}>
              JPG, PNG, MP4, MOV, PDF
            </p>
            <input
              ref={inputRef}
              type="file"
              accept="image/*,video/*,.pdf"
              multiple
              className="hidden"
              onChange={(e) => Array.from(e.target.files ?? []).forEach(uploadFile)}
            />
          </div>
        </motion.div>

      </div>
    </main>
  );
}
