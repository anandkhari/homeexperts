"use client";

import Reveal from "@/components/motion/reveal";
import ServiceCard from "@/components/services/service-card";
import { HOMEPAGE_SERVICES } from "@/data/homepage-services";

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-16 md:px-6 md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="animate-drift-glow absolute left-[-10%] top-10 h-64 w-64 rounded-full bg-[#3BBFBF] blur-[80px] md:h-96 md:w-96 md:blur-[120px]" />
        <div className="animate-float-soft-delayed absolute bottom-10 right-[-10%] h-64 w-64 rounded-full bg-[#2C3E6B] blur-[80px] md:h-96 md:w-96 md:blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-20" y={24} blur={14}>
          <span className="mb-4 inline-block rounded-full bg-[#2C3E6B]/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#3BBFBF] md:text-xs">
            Our Expertise
          </span>

          <h2 className="mt-2 mb-6 text-3xl font-black leading-[1.1] tracking-tight text-[#2C3E6B] md:text-5xl font-medium">
            How Can We <span className="text-[#3BBFBF]">Help You</span> Today?
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#5A6A8A] md:text-base">
            Get the highest quality home maintenance services at the most
            cost-efficient rates. Rely on our highly trained technicians to get
            the job right the first time.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {HOMEPAGE_SERVICES.map((service, index) => (
            <Reveal
              key={service.slug}
              className="group"
              delay={90 + index * 70}
              y={28}
              blur={14}
            >
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
