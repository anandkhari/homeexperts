"use client";

import { useEffect, useRef, useState } from "react";

const trustStats = [
  {
    value: 4.7,
    display: "4.7",
    suffix: "★",
    label: "Average Google Rating",
    sub: "From 2,000+ verified reviews",
  },
  {
    value: 427132,
    display: "427,132",
    suffix: "+",
    label: "Jobs Completed",
    sub: "Trusted since 2008",
  },
  {
    value: 47219,
    display: "47,219",
    suffix: "+",
    label: "Happy Customers",
    sub: "And growing every day",
  },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const isDecimal = target < 100;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = isDecimal
        ? Math.round(eased * target * 10) / 10
        : Math.floor(eased * target);
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatCard({ stat, index, animate }) {
  const count = useCountUp(stat.value, 1800, animate);
  const isDecimal = stat.value < 100;

  const displayValue = animate
    ? isDecimal
      ? count.toFixed(1)
      : count.toLocaleString()
    : "0";

  return (
    <div
      className="group relative flex flex-col items-center px-6 py-2 text-center"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Vertical divider — only between cards */}
      {index !== 0 && (
        <div className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-white/15 md:block" />
      )}

      {/* Stat number */}
      <div className="relative">
        <span
          className="block text-5xl font-black leading-none tracking-[-0.04em] text-white transition-transform duration-300 group-hover:scale-105 md:text-6xl"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {displayValue}
          <span className="ml-1 text-[#3BBFBF]">{stat.suffix}</span>
        </span>

        {/* Animated underline accent */}
        <span className="mt-2 block h-[2px] w-0 bg-gradient-to-r from-[#3BBFBF] to-transparent transition-all duration-500 group-hover:w-full" />
      </div>

      {/* Label */}
      <p className="mt-4 text-[0.82rem] font-extrabold uppercase tracking-[0.15em] text-white/90 md:text-sm">
        {stat.label}
      </p>

      {/* Sub-label */}
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
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#2C3E6B] px-4 py-14 text-white md:px-6 md:py-16"
    >
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,191,191,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(7,17,31,0.35),transparent_60%)]" />

      {/* Decorative top border line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#3BBFBF]/60 to-transparent" />

      <div className="relative mx-auto max-w-[1440px]">

        {/* Eyebrow label */}
        <div className="mb-10 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#3BBFBF]/50" />
          <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.25em] text-[#3BBFBF]">
            Trusted across the UAE
          </p>
          <span className="h-px w-10 bg-[#3BBFBF]/50" />
        </div>

        {/* Stats grid */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-0">
          {trustStats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} animate={animate} />
          ))}
        </div>

      </div>

      {/* Decorative bottom border line */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
