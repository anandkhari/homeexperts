"use client";

import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";

const trustSignals = [
  "No call-out fees",
  "7-day availability",
  "24/7 support",
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#2C3E6B]">
      {/* Background radial accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,191,191,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(7,17,31,0.50),transparent_55%)]" />
      {/* Top teal line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#3BBFBF]/60 to-transparent" />

      <div className="relative mx-auto max-w-[1440px] px-4 py-14 md:px-24 md:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT: Heading + subtext */}
          <div>
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#3BBFBF]" />
              <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-[#3BBFBF]">
                Get Started Today
              </p>
              <span className="h-px w-8 bg-[#3BBFBF]" />
            </div>

            <h2 className="max-w-[16ch] text-4xl font-medium leading-[1.15] tracking-[-0.03em] text-white md:text-5xl">
              Ready to fix what's slowing you down?
            </h2>

            <p className="mt-5 max-w-[44ch] text-[0.92rem] leading-7 text-white/55">
              Book a visit in minutes. Vetted technicians, transparent pricing, zero stress.
            </p>
          </div>

          {/* RIGHT: Buttons + trust signals */}
          <div className="flex flex-col gap-4 lg:items-end">
            <div className="flex w-full flex-col gap-3 sm:w-auto">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#3BBFBF] px-8 py-4 text-[0.82rem] font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#2eacac]"
              >
                Book a Free Quote
                <HiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-[0.82rem] font-extrabold uppercase tracking-[0.12em] text-white transition hover:border-white/60 hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
              {trustSignals.map((item, i) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-[0.72rem] font-medium text-white/40"
                >
                  <span className="text-[#3BBFBF]">✓</span>
                  {item}
                  {i < trustSignals.length - 1 && (
                    <span className="ml-2 text-white/20">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}