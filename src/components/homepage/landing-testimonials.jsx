"use client";

import Script from "next/script";
import Reveal from "@/components/motion/reveal";
import { Star } from "lucide-react";

export default function LandingTestimonials() {
  return (
    <section className="bg-[#f5f7fb] px-4 py-18 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <Reveal className="mx-auto max-w-3xl text-center" y={24} blur={14}>
          <span className="rounded-full bg-white px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#1e3156] shadow-sm">
            Testimonials
          </span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[#1e3156] md:text-5xl">
            Customers remember how smooth it feels
          </h2>
        </Reveal>

      

        {/* Elfsight Widget */}
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="afterInteractive"
        />
        <Reveal className="mt-12" y={24} blur={14} delay={120}>
          <div className="elfsight-app-a9306fae-cd27-4fa7-866a-796c2efce727" />
        </Reveal>

      </div>
    </section>
  );
}