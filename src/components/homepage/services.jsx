"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";

const services = [
  {
    title: "Annual Contracts",
    href: "/packages",
    slug: "annual-contracts",
    image: "/Logo_Home_Clear.png",
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
    image: "/ac_repair.jpg",
    description:
      "Safe and reliable electrical repairs, installations, and fault finding by certified pros.",
  },
  {
    title: "Plumbing",
    href: "/services/plumbing",
    slug: "plumbing",
    image: "/ac_repair.jpg",
    description:
      "From leak detection to full fixture installations, keeping your water systems flowing.",
  },
  {
    title: "Painting",
    href: "/services/painting",
    slug: "painting",
    image: "/ac_repair.jpg",
    description:
      "Professional interior and exterior painting services to refresh your living space.",
  },
  {
    title: "Handyman",
    href: "/services/handyman",
    slug: "handyman",
    image: "/ac_repair.jpg",
    description:
      "Versatile repair and installation services for all those small jobs around the home.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-16 md:px-6 md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute left-[-10%] top-10 h-64 w-64 rounded-full bg-[#3BBFBF] blur-[80px] md:h-96 md:w-96 md:blur-[120px]" />
        <div className="absolute bottom-10 right-[-10%] h-64 w-64 rounded-full bg-[#2C3E6B] blur-[80px] md:h-96 md:w-96 md:blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-20">
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
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-500 hover:border-[#3BBFBF]/30 hover:shadow-2xl"
            >
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
                  className="mt-auto flex items-center gap-2 text-xs   tracking-[0.2em] "
                >
                  Explore Details
                  <ArrowRight className="h-4 w-4 transition-transform text-gray-500 duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
