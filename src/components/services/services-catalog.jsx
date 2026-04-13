"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/motion/reveal";
import ServiceCard from "@/components/services/service-card";
import { ALL_SERVICES } from "@/data/all-services";

export default function ServicesCatalog() {
  const [query, setQuery] = useState("");

  const filteredServices = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return ALL_SERVICES;

    return ALL_SERVICES.filter((service) => {
      const inTitle = service.title.toLowerCase().includes(term);
      const inDescription = service.description.toLowerCase().includes(term);
      const inKeywords = (service.keywords || []).some((keyword) =>
        keyword.toLowerCase().includes(term)
      );

      return inTitle || inDescription || inKeywords;
    });
  }, [query]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-16 md:px-6 md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="animate-drift-glow absolute left-[-10%] top-10 h-64 w-64 rounded-full bg-[#3BBFBF] blur-[80px] md:h-96 md:w-96 md:blur-[120px]" />
        <div className="animate-float-soft-delayed absolute bottom-10 right-[-10%] h-64 w-64 rounded-full bg-[#2C3E6B] blur-[80px] md:h-96 md:w-96 md:blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* <Reveal className="mx-auto mb-8 max-w-3xl text-center md:mb-12" y={24} blur={14}>
          <span className="mb-4 inline-block rounded-full bg-[#2C3E6B]/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#3BBFBF] md:text-xs">
            Service Directory
          </span>

          <h2 className="mt-2 mb-5 text-3xl font-black leading-[1.1] tracking-tight text-[#2C3E6B] md:text-5xl font-medium">
            Explore All <span className="text-[#3BBFBF]">Services</span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#5A6A8A] md:text-base">
            Search and browse all available maintenance, installation, upgrade,
            and specialist services from one place.
          </p>
        </Reveal> */}

        <Reveal className="mx-auto mb-10 max-w-2xl" y={20} blur={12}>
          <label htmlFor="service-search" className="sr-only">
            Search services
          </label>
          <input
            id="service-search"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search services (e.g. AC, waterproofing, smart home)"
            className="w-full rounded-2xl border border-[#DDE3EE] bg-white px-5 py-3 text-sm font-medium text-[#2C3E6B] shadow-sm outline-none transition focus:border-[#3BBFBF] focus:ring-2 focus:ring-[#3BBFBF]/20 md:text-base"
          />
          <p className="mt-2 text-xs font-semibold tracking-wide text-[#5A6A8A]">
            Showing {filteredServices.length} of {ALL_SERVICES.length} services
          </p>
        </Reveal>

        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {filteredServices.map((service, index) => (
              <Reveal
                key={service.slug}
                className="group"
                delay={80 + index * 50}
                y={24}
                blur={12}
              >
                <ServiceCard service={service} index={index} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mx-auto mt-10 max-w-xl rounded-2xl border border-[#DDE3EE] bg-white p-8 text-center shadow-sm">
            <p className="text-lg font-semibold text-[#2C3E6B]">No services found</p>
            <p className="mt-2 text-sm text-[#5A6A8A]">
              Try a different keyword like AC, carpentry, waterproofing, or
              renovation.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
