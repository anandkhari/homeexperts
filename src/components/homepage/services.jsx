"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Reveal from "@/components/motion/reveal";

const services = [
  {
    title: "Annual Contracts",
    href: "/packages",
    slug: "annual-contracts",
    image: "https://images.pexels.com/photos/6682772/pexels-photo-6682772.jpeg",
    description:
      "Comprehensive yearly maintenance plans for total peace of mind and priority support.",
  },
  {
    title: "AC Servicing",
    href: "/services/ac",
    slug: "ac-servicing",
    image: "/ac_repair.jpg",
    description:
      "Expert cooling solutions including filter cleaning, gas top-ups, and efficiency checks.",
  },
  {
    title: "Electrical",
    href: "/services/electrical",
    slug: "electrical",
    image: "/electrical.jpg",
    description:
      "Safe and reliable electrical repairs, installations, and fault finding by certified pros.",
  },
  {
    title: "Plumbing",
    href: "/services/plumbing",
    slug: "plumbing",
    image: "/plumbing.jpg",
    description:
      "From leak detection to full fixture installations, keeping your water systems flowing.",
  },
  {
    title: "Painting",
    href: "/services/painting",
    slug: "painting",
    image: "https://images.pexels.com/photos/36153946/pexels-photo-36153946.jpeg",
    description:
      "Professional interior and exterior painting services to refresh your living space.",
  },
  {
    title: "Handyman",
    href: "/services/handyman",
    slug: "handyman",
    image: "/handyman.jpg",
    description:
      "Versatile repair and installation services for all those small jobs around the home.",
  },
  {
    title: "Water Tank Cleaning",
    href: "/services/other",
    slug: "water-tank-cleaning",
    image: "/watertankcleaning.jpg",
    description:
      "Deep cleaning and sanitization for residential water tanks to keep your water fresh and safe.",
  },
  {
    title: "Duct Cleaning",
    href: "/services/other",
    slug: "duct-cleaning",
    image: "/duct-cleaning.jpg",
    description:
      "Professional air duct cleaning that helps improve airflow, indoor air quality, and AC efficiency.",
  },
  {
    title: "Coil Cleaning",
    href: "/services/other",
    slug: "coil-cleaning",
    image: "/coilcleaning.jpg",
    description:
      "Thorough evaporator and condenser coil cleaning to boost cooling performance and reduce energy waste.",
  },
];

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
          {services.map((service, index) => (
            <Reveal
              key={service.slug}
              className="group"
              delay={90 + index * 70}
              y={28}
              blur={14}
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-[#3BBFBF]/30 hover:shadow-2xl">
              <div className="relative h-48 w-full overflow-hidden md:h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E6B]/90 via-[#2C3E6B]/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-50" />

                <div className="absolute top-4 left-6 text-4xl font-black text-white/30 drop-shadow-md">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="flex flex-grow flex-col p-8 pt-10">
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#2C3E6B] transition-colors group-hover:text-[#3BBFBF]">
                  {service.title}
                </h3>

                <p className="mb-8 text-sm leading-relaxed text-[#5A6A8A]">
                  {service.description}
                </p>

                <div className="relative mb-6 h-px w-full overflow-hidden bg-gray-100">
                  <div className="absolute h-full w-0 bg-gradient-to-r from-[#3BBFBF] to-[#2C3E6B] transition-all duration-700 group-hover:w-full" />
                </div>

                <Link
                  href={service.href}
                  className="mt-auto inline-flex items-center gap-2 self-start rounded-full border-2 border-[#2C3E6B] px-5 py-2.5 text-[0.75rem] font-extrabold uppercase tracking-[0.12em] text-[#2C3E6B] transition hover:bg-[#2C3E6B] hover:text-white"
                >
                  Explore Details
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
