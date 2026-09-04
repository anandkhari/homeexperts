"use client";

import { useState } from "react";
import Script from "next/script";
import Reveal from "@/components/motion/reveal";
import { ExternalLink, Play, ChevronLeft, ChevronRight } from "lucide-react";

function InstagramIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const reels = [
  {
    id: "Dcsb4u6NGSK",
    title: "Home Experts Project Spotlight",
    url: "https://www.instagram.com/reel/Dcsb4u6NGSK/",
    tag: "AC & Maintenance",
  },
  {
    id: "DcO5PxutB2y",
    title: "Quality Service Execution",
    url: "https://www.instagram.com/reel/DcO5PxutB2y/",
    tag: "Renovation & Finishing",
  },
  {
    id: "DbnhhkVtlMZ",
    title: "Expert Technician Highlights",
    url: "https://www.instagram.com/reel/DbnhhkVtlMZ/",
    tag: "Plumbing & Electrical",
  },
];

export default function InstagramReels() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? reels.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === reels.length - 1 ? 0 : prev + 1));
  };

  const currentReel = reels[currentIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f5f7fb] via-[#ffffff] to-[#f5f7fb] px-4 py-14 md:px-6 md:py-20">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#E1306C]/5 via-[#833AB4]/5 to-[#3BBFBF]/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1140px]">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center" y={20} blur={12}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E1306C]/20 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-md">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-tr from-[#fccc63] via-[#e52d27] to-[#b31217] text-white">
              <InstagramIcon className="h-2.5 w-2.5" />
            </div>
            <span className="bg-gradient-to-r from-[#E1306C] via-[#C13584] to-[#833AB4] bg-clip-text text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-transparent">
              Instagram Spotlights
            </span>
          </div>

          <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#1e3156] sm:text-3xl md:text-4xl">
            See Our Work In Action
          </h2>

          <p className="mt-2.5 text-sm leading-relaxed text-[#5A6A8A] md:text-base">
            Watch real home maintenance transformations, expert tips, and project highlights from the Home Experts team across the UAE.
          </p>
        </Reveal>

        {/* Mobile Carousel View (visible on mobile only) */}
        <div className="mt-8 md:hidden">
          <Reveal y={24} blur={12} className="relative flex flex-col items-center overflow-hidden">
            {/* Carousel Card */}
            <div className="group relative flex w-full max-w-[340px] flex-col overflow-hidden rounded-2xl border border-[#DDE3EE] bg-white p-3.5 shadow-[0_6px_20px_rgba(30,49,86,0.06)]">
              {/* Instagram top badge */}
              <div className="mb-2.5 flex items-center justify-between px-1.5 pt-0.5">
                <span className="rounded-full bg-[#f0f4fa] px-2.5 py-0.5 text-[0.68rem] font-bold text-[#1e3156]">
                  {currentReel.tag}
                </span>
                <a
                  href={currentReel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[0.72rem] font-extrabold text-[#E1306C] transition hover:text-[#b82454]"
                >
                  Watch Reel <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Instagram Embed iFrame Container */}
              <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-black/5 shadow-inner">
                <iframe
                  key={currentReel.id}
                  src={`https://www.instagram.com/reel/${currentReel.id}/embed/`}
                  className="h-full w-full border-0"
                  allowtransparency="true"
                  allow="encrypted-media"
                  scrolling="no"
                  title={currentReel.title}
                />
              </div>

              {/* Card Footer */}
              <div className="mt-3 flex items-center justify-between border-t border-[#f0f4fa] px-1.5 pt-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-[#fccc63] via-[#e52d27] to-[#833AB4] text-white shadow-sm">
                    <InstagramIcon className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-[0.78rem] font-bold text-[#1e3156]">Home Experts</p>
                    <p className="text-[0.68rem] text-[#8A9BB5]">@homeexperts.uae</p>
                  </div>
                </div>

                <a
                  href={currentReel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#1e3156] px-3 py-1 text-[0.7rem] font-bold text-white transition hover:bg-[#E1306C]"
                >
                  <Play className="h-2.5 w-2.5 fill-current" /> Play
                </a>
              </div>
            </div>

            {/* Carousel Navigation - Below Card */}
            <div className="mt-4 flex items-center justify-between w-full max-w-[340px] px-2">
              <button
                onClick={goToPrevious}
                className="inline-flex items-center justify-center rounded-full bg-[#1e3156] p-2.5 text-white transition hover:bg-[#E1306C] active:scale-95"
                aria-label="Previous reel"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {/* Indicator Dots */}
              <div className="flex gap-2">
                {reels.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-5 bg-[#E1306C]"
                        : "w-2 bg-[#DDE3EE] hover:bg-[#C13584]"
                    }`}
                    aria-label={`Go to reel ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="inline-flex items-center justify-center rounded-full bg-[#1e3156] p-2.5 text-white transition hover:bg-[#E1306C] active:scale-95"
                aria-label="Next reel"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Counter */}
            <div className="mt-2 text-center text-[0.8rem] font-medium text-[#5A6A8A]">
              {currentIndex + 1} / {reels.length}
            </div>
          </Reveal>
        </div>

        {/* Desktop Grid View (hidden on mobile) */}
        <div className="hidden md:grid gap-6 mt-10 md:grid-cols-3">
          {reels.map((reel, index) => (
            <Reveal
              key={reel.id}
              y={24}
              blur={12}
              delay={80 * (index + 1)}
              className="group relative flex w-full max-w-[350px] mx-auto flex-col overflow-hidden rounded-2xl border border-[#DDE3EE] bg-white p-3.5 shadow-[0_6px_20px_rgba(30,49,86,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E1306C]/30 hover:shadow-[0_14px_30px_rgba(225,48,108,0.1)]"
            >
              {/* Instagram top badge */}
              <div className="mb-2.5 flex items-center justify-between px-1.5 pt-0.5">
                <span className="rounded-full bg-[#f0f4fa] px-2.5 py-0.5 text-[0.68rem] font-bold text-[#1e3156]">
                  {reel.tag}
                </span>
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[0.72rem] font-extrabold text-[#E1306C] transition hover:text-[#b82454]"
                >
                  Watch Reel <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Instagram Embed iFrame Container */}
              <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-black/5 shadow-inner">
                <iframe
                  src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                  className="h-full w-full border-0"
                  allowtransparency="true"
                  allow="encrypted-media"
                  scrolling="no"
                  title={reel.title}
                />
              </div>

              {/* Card Footer */}
              <div className="mt-3 flex items-center justify-between border-t border-[#f0f4fa] px-1.5 pt-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-[#fccc63] via-[#e52d27] to-[#833AB4] text-white shadow-sm">
                    <InstagramIcon className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-[0.78rem] font-bold text-[#1e3156]">Home Experts</p>
                    <p className="text-[0.68rem] text-[#8A9BB5]">@homeexperts.uae</p>
                  </div>
                </div>

                <a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#1e3156] px-3 py-1 text-[0.7rem] font-bold text-white transition hover:bg-[#E1306C]"
                >
                  <Play className="h-2.5 w-2.5 fill-current" /> Play
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA to follow on Instagram */}
        <Reveal className="mt-10 text-center" y={16} blur={8} delay={300}>
          <a
            href="https://www.instagram.com/homeexperts.uae"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#E1306C] via-[#C13584] to-[#833AB4] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-[0_6px_20px_rgba(225,48,108,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_28px_rgba(225,48,108,0.3)]"
          >
            <InstagramIcon className="h-4 w-4" />
            Follow Us On Instagram
          </a>
        </Reveal>
      </div>

      {/* Load Instagram Embed Script */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
      />
    </section>
  );
}