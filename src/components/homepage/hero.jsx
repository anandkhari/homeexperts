"use client";

import Link from "next/link";

import Reveal from "@/components/motion/reveal";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#07111f]">
      <video
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="animate-image-drift absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero.webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.70)_0%,rgba(7,17,31,0.50)_38%,rgba(7,17,31,0.20)_62%,rgba(7,17,31,0.50)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,191,191,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(44,62,107,0.40),transparent_35%)]" />
      <div className="animate-drift-glow absolute -left-10 top-24 h-48 w-48 rounded-full bg-[#3BBFBF]/20 blur-3xl" />
      <div className="animate-float-soft-delayed absolute bottom-16 right-[8%] h-56 w-56 rounded-full bg-[#6ea8ff]/16 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-[1440px] items-center px-4 py-12 md:px-6 md:py-16">
        <div className="w-full">
          <div className="max-w-[760px]">
            <Reveal delay={80} y={18} blur={10}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-[#3BBFBF] backdrop-blur-sm sm:px-4 sm:py-2 sm:text-[0.72rem]">
                <span className="h-2 w-2 rounded-full bg-[#3BBFBF]" />
                Home care without the chaos
              </div>
            </Reveal>

            <Reveal delay={180} y={28} blur={14}>
              <h1 className="max-w-2xl text-4xl font-semibold leading-[1.2] tracking-[-0.04em] text-white uppercase sm:text-5xl md:text-6xl">
                Your home, managed by experts
              </h1>
            </Reveal>

            <Reveal delay={300} y={30} blur={16}>
              <p className="mt-6 max-w-[58ch] text-sm leading-7 text-white/80 sm:text-base md:text-lg md:leading-8">
                From urgent repairs to planned maintenance, Home Experts brings
                trusted specialists to your door with speed, clarity, and a
                premium service experience that feels effortless.
              </p>
            </Reveal>

            <Reveal delay={420} y={26} blur={14}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  className="animate-shine inline-flex min-h-12 items-center justify-center rounded-[16px] bg-[#3BBFBF] px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_4px_16px_rgba(59,191,191,0.40)] transition hover:-translate-y-0.5 hover:bg-[#2eacac] sm:min-h-14 sm:px-7"
                  href="/contact"
                >
                  Book A Free Quote
                </Link>
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-[16px] border border-white/25 bg-white/10 px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20 sm:min-h-14 sm:px-7"
                  href="/services"
                >
                  Explore Services
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
