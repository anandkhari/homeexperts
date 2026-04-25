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

      <div className="relative mx-auto max-w-[1440px] px-5 py-12 sm:px-8 md:px-16 md:py-16 lg:px-24">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">

          {/* LEFT: Heading + subtext */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-px w-6 bg-[#3BBFBF] sm:w-8" />
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-[#3BBFBF] sm:text-[0.72rem]">
                Get Started Today
              </p>
              <span className="h-px w-6 bg-[#3BBFBF] sm:w-8" />
            </div>

            <h2 className="mx-auto text-3xl font-medium leading-[1.18] tracking-[-0.03em] text-white sm:text-4xl md:text-5xl lg:mx-0 lg:max-w-[16ch]">
              Ready to fix what's slowing you down?
            </h2>

            <p className="mx-auto mt-4 max-w-[36ch] text-[0.88rem] leading-7 text-white/55 sm:max-w-[44ch] lg:mx-0">
              Book a visit in minutes. Vetted technicians, transparent pricing, zero stress.
            </p>
          </div>

          {/* RIGHT: Buttons + trust signals */}
          <div className="flex flex-col items-center gap-4 lg:items-end">
            {/* Buttons */}
            <div className="flex w-full flex-col gap-3 sm:w-80 lg:w-auto">
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
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 pt-1 lg:justify-end">
              {trustSignals.map((item, i) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-[0.72rem] font-medium text-white/40"
                >
                  <span className="text-[#3BBFBF]">✓</span>
                  {item}
                  {i < trustSignals.length - 1 && (
                    <span className="ml-1 text-white/20">·</span>
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