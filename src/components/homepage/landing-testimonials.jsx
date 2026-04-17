"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import Reveal from "@/components/motion/reveal";

const testimonials = [
  {
    name: "Maya Thompson",
    role: "Villa owner",
    rating: 5,
    quote:
      "The experience felt premium from the first click. I found a plumber in minutes, knew exactly what to expect, and the work was flawless.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    name: "Omar Rahman",
    role: "Property manager",
    rating: 5,
    quote:
      "HomeExperts cut our maintenance coordination time dramatically. The platform is polished, fast, and the professionals actually show up prepared.",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    name: "Sofia Bennett",
    role: "Busy parent",
    rating: 5,
    quote:
      "The search and booking flow felt effortless. I booked deep cleaning and electrical help in the same afternoon without any of the usual stress.",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
];

export default function LandingTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section className="bg-[#f5f7fb] px-4 py-18 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center" y={24} blur={14}>
          <span className="rounded-full bg-white px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#1e3156] shadow-sm">
            Testimonials
          </span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[#1e3156] md:text-5xl">
            Customers remember how smooth it feels
          </h2>
        </Reveal>

        <Reveal
          className="mt-14 overflow-hidden rounded-lg border border-white bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)]"
          delay={120}
          y={30}
          blur={16}
        >
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div key={active.image} className="relative min-h-[22rem] overflow-hidden bg-[#08111f]">
              <Image
                src={active.image}
                alt={active.name}
                fill
                sizes="(max-width: 1023px) 100vw, 46vw"
                className="animate-image-drift object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,31,0.15),rgba(8,17,31,0.82))]" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {Array.from({ length: active.rating }).map((_, index) => (
                    <Star key={index} className="h-3.5 w-3.5 fill-current text-[#ffe082]" />
                  ))}
                </div>
              </div>
            </div>

            <div key={active.name} className="flex flex-col justify-between p-7 md:p-10">
              <div className="reveal is-visible" style={{ "--reveal-y": "0px", "--reveal-delay": "0ms", "--reveal-blur": "0px", animationDuration: "0ms" }}>
                <p className="text-2xl font-semibold leading-[1.45] tracking-[-0.04em] text-[#0d1623] md:text-3xl">
                  &quot;{active.quote}&quot;
                </p>
                <div className="mt-8">
                  <div className="text-lg font-semibold text-[#091321]">
                    {active.name}
                  </div>
                  <div className="mt-1 text-sm text-[#617086]">{active.role}</div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  {testimonials.map((item, index) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Show testimonial from ${item.name}`}
                      className={`h-2.5 rounded-full transition-all ${
                        index === activeIndex
                          ? "w-10 bg-[#0d1623]"
                          : "w-2.5 bg-[#d2dbe6]"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(
                        (activeIndex - 1 + testimonials.length) % testimonials.length
                      )
                    }
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d9e2ec] text-[#0d1623] transition hover:border-[#0d1623] hover:bg-[#0d1623] hover:text-white"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((activeIndex + 1) % testimonials.length)
                    }
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d9e2ec] text-[#0d1623] transition hover:border-[#0d1623] hover:bg-[#0d1623] hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
