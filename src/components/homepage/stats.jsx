"use client";

import { useEffect, useRef, useState } from "react";

import Reveal from "@/components/motion/reveal";

const trustStats = [
  {
    value: 4.8,
    display: "4.8",
    suffix: "★",
    label: "Google Review Rating",
    sub: "Rated by our customers",
  },
  {
    value: 12588,
    display: "12,588",
    suffix: "+",
    label: "Job Completed",
    sub: "12,588 clients above",
  },
  {
    value: 12588,
    display: "12,588",
    suffix: "+",
    label: "Happy Customer",
    sub: "12,588 above",
  },
];

function StatCard({ stat, index, animate }) {
  const numberRef = useRef(null);

  useEffect(() => {
    if (!animate) return;

    const element = numberRef.current;
    if (!element) return;

    const target = stat.value;
    const duration = 1800;
    const isDecimal = target < 100;

    let startTime = null;

    // Start animation from zero
    element.textContent = isDecimal ? "0.0" : "0";

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Ease Out Cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      const current = isDecimal
        ? (Math.round(eased * target * 10) / 10).toFixed(1)
        : Math.floor(eased * target).toLocaleString();

      element.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Ensure exact final value
        element.textContent = stat.display;
      }
    };

    requestAnimationFrame(step);
  }, [animate, stat]);

  return (
    <div
      className="group relative flex flex-col items-center px-6 py-2 text-center"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {index !== 0 && (
        <div className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-white/15 md:block" />
      )}

      <div className="relative">
        <span
          className="block text-5xl font-black leading-none tracking-[-0.04em] text-white transition-transform duration-300 group-hover:scale-105 md:text-6xl"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {/* SEO-friendly:
              SSR outputs the FINAL VALUE.
              JS only animates after hydration.
          */}
          <span ref={numberRef}>{stat.display}</span>

          <span className="ml-1 text-[#3BBFBF]">
            {stat.suffix}
          </span>
        </span>

        <span className="mt-2 block h-[2px] w-0 bg-gradient-to-r from-[#3BBFBF] to-transparent transition-all duration-500 group-hover:w-full" />
      </div>

      <p className="mt-4 text-[0.82rem] font-extrabold uppercase tracking-[0.15em] text-white/90 md:text-sm">
        {stat.label}
      </p>

      <p className="mt-1 text-[0.72rem] font-medium tracking-wide text-white/45">
        {stat.sub}
      </p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#2C3E6B] px-4 py-14 text-white md:px-6 md:py-16"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,191,191,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(7,17,31,0.35),transparent_60%)]" />

      {/* Top border */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#3BBFBF]/60 to-transparent" />

      <div className="relative mx-auto max-w-[1440px]">
        <Reveal delay={80} y={18} blur={10}>
          <div className="mb-10 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#3BBFBF]/50" />

            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.25em] text-[#3BBFBF]">
              Trusted across the UAE
            </p>

            <span className="h-px w-10 bg-[#3BBFBF]/50" />
          </div>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-3 md:gap-0">
          {trustStats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={140 + i * 120}
              y={24}
              blur={12}
            >
              <StatCard
                stat={stat}
                index={i}
                animate={animate}
              />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}