"use client";

import { useRef } from "react";

const highlights = [
  {
    tag: "Highlight",
    title: "Medical Device Development",
    description:
      "Cross-functional product strategy, human factors, and lifecycle planning for complex programs.",
  },
  {
    tag: "Highlight",
    title: "Quality & Regulatory",
    description:
      "Risk management, design controls, and global regulatory strategy aligned with FDA, EU MDR, and ISO.",
  },
  {
    tag: "Highlight",
    title: "Electromechanical Systems",
    description:
      "Precision architecture, embedded control, and verification for mission-critical hardware.",
  },
  {
    tag: "Highlight",
    title: "SaMD & Connectivity",
    description:
      "Cloud-integrated ecosystems, secure data pipelines, and compliant software as a medical device.",
  },
  {
    tag: "Highlight",
    title: "AI/ML & Data Analytics",
    description:
      "Algorithm development, dataset curation, and evidence generation tailored for regulated use.",
  },
  {
    tag: "Highlight",
    title: "Design Transfer & Manufacturing",
    description:
      "DFM, pilot builds, and scalable manufacturing strategies to accelerate commercialization.",
  },
];

const KeyHighlightsSlider = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const node = trackRef.current;
    if (!node) return;
    const delta = node.clientWidth * 0.9;
    node.scrollBy({
      left: direction === "left" ? -delta : delta,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#eef2ff] py-20 dark:bg-slate-950">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-primary/70">
              03 — Key Highlights
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">
              Capabilities that drive regulated innovation
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
              Swipe through the disciplines that keep your medical device program
              on schedule—from early concept through compliant manufacturing.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/60 bg-white/80 text-slate-600 shadow-md transition hover:-translate-y-[2px] hover:text-primary dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              type="button"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/60 bg-white/80 text-slate-600 shadow-md transition hover:-translate-y-[2px] hover:text-primary dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        <div className="relative mt-12">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-8 overflow-x-auto pb-8 [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            {highlights.map((item, index) => (
              <article
                key={item.title}
                className="group relative inline-flex min-w-[260px] max-w-xs snap-center flex-col justify-between rounded-[36px] bg-white/80 p-8 shadow-[0_25px_70px_-35px_rgba(79,114,205,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_40px_90px_-45px_rgba(79,114,205,0.65)] dark:bg-slate-900/80"
              >
                <div className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-rose-500 text-white shadow-lg transition group-hover:scale-105">
                  →
                </div>
                <span className="inline-flex items-center rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:border-slate-700 dark:text-slate-300">
                  {item.tag}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-300">
                  {item.description}
                </p>
                <div className="mt-10 text-right text-6xl font-bold text-slate-200/90 dark:text-slate-800">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </article>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#eef2ff] to-transparent dark:from-slate-950" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#eef2ff] to-transparent dark:from-slate-950" />
        </div>

        <div className="mx-auto mt-10 flex w-32 gap-2">
          {highlights.map((_, idx) => (
            <span
              key={idx}
              className="h-1 flex-1 rounded-full bg-gradient-to-r from-primary/30 via-primary/20 to-primary/10 first:from-primary/50 last:to-primary/40"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlightsSlider;
export { KeyHighlightsSlider };