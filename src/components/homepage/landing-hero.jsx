"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const quickSearches = [
  "Emergency plumber",
  "AC technician",
  "Deep cleaning",
  "Electrician",
  "Handyman",
  "Pest control",
];

const trustPoints = [
  { label: "Verified experts", value: "2.5k+" },
  { label: "Average response", value: "14 min" },
  { label: "Customer satisfaction", value: "4.9/5" },
];

export default function LandingHero() {
  const [query, setQuery] = useState("");

  const suggestions = useMemo(() => {
    if (!query.trim()) {
      return quickSearches.slice(0, 4);
    }

    return quickSearches.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <section className="relative isolate overflow-hidden bg-[#07111f] pb-18 pt-28 text-white md:pb-24 md:pt-32">
      <div className="mesh-bg absolute inset-0 opacity-90" />
      <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top,rgba(111,224,207,0.24),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(113,146,255,0.16),transparent_30%)]" />
      <div className="pointer-events-none absolute left-[-10%] top-32 h-72 w-72 rounded-full bg-[#6fe0cf]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8%] top-20 h-80 w-80 rounded-full bg-[#7a8cff]/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-3xl">
          <div className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#d8fff8]">
            <Sparkles className="h-3.5 w-3.5 text-[#6fe0cf]" />
            Premium home services, on demand
          </div>

          <h1 className="mt-6 max-w-[11ch] text-3xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-5xl lg:text-8xl">
            Find Trusted Home Experts Instantly
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            HomeExperts helps you book vetted electricians, plumbers, cleaners,
            and repair pros in minutes, with transparent pricing, secure
            payments, and service you can trust.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6fe0cf] px-6 py-3.5 text-sm font-semibold text-[#08111f] shadow-[0_18px_45px_rgba(111,224,207,0.35)] transition hover:-translate-y-0.5 hover:bg-[#83e8d9]"
            >
              Book a Service
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
            >
              Become a Professional
            </Link>
          </div>

          <div className="glass-panel relative mt-10 max-w-2xl rounded-[1.8rem] p-3 shadow-[0_25px_80px_rgba(4,9,20,0.4)]">
            <div className="flex flex-col gap-3 rounded-[1.4rem] bg-[#091321]/70 p-3 sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-3 rounded-[1.1rem] border border-white/10 bg-white/5 px-4 py-3">
                <Search className="h-4 w-4 text-[#6fe0cf]" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search for plumbing, electrical, cleaning..."
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                />
              </div>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-[1rem] bg-white px-5 py-3 text-sm font-semibold text-[#0b1524] transition hover:bg-[#eef4ff]"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 px-1">
              {suggestions.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setQuery(item)}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/75 transition hover:border-[#6fe0cf]/40 hover:bg-white/10 hover:text-white"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {trustPoints.map((item) => (
              <div
                key={item.label}
                className="glass-panel rounded-[1.6rem] px-5 py-4 shadow-[0_20px_60px_rgba(6,11,24,0.25)]"
              >
                <div className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  {item.value}
                </div>
                <div className="mt-1 text-sm text-white/60">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="floating-card absolute -left-4 top-10 z-20 hidden rounded-[1.6rem] border border-white/12 bg-[#0d1829]/80 p-4 backdrop-blur md:block">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#6fe0cf]/20 text-[#6fe0cf]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  Every provider verified
                </div>
                <div className="text-xs text-white/55">
                  Identity, ratings, and quality checks
                </div>
              </div>
            </div>
          </div>

          <div className="floating-card-delayed absolute -right-2 bottom-14 z-20 hidden rounded-[1.6rem] border border-white/12 bg-[#0d1829]/80 p-4 backdrop-blur md:block">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#ffe082]">
                <Star className="h-5 w-5 fill-current" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">4.9 average rating</div>
                <div className="text-xs text-white/55">Based on recent bookings</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/6 p-4 shadow-[0_30px_120px_rgba(4,9,20,0.48)] backdrop-blur md:p-5">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))]" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1525]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(111,224,207,0.15),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(122,140,255,0.18),transparent_28%)]" />
              <div className="relative p-5 md:p-7">
                <div className="flex items-center justify-between rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em] text-white/40">
                      Instant matching
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white">
                      Professionals near Downtown Dubai
                    </div>
                  </div>
                  <div className="rounded-full bg-[#6fe0cf]/18 px-3 py-1 text-xs font-semibold text-[#a7f4e8]">
                    Live now
                  </div>
                </div>

                <div className="mt-5 overflow-hidden rounded-[1.8rem]">
                  <Image
                    src="https://images.pexels.com/photos/8960866/pexels-photo-8960866.jpeg"
                    alt="Home service professional arriving for a booking"
                    width={900}
                    height={1080}
                    className="h-[28rem] w-full object-cover md:h-[36rem]"
                    style={{ height: "auto" }}
                    priority
                  />
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-4">
                    <div className="flex items-center gap-3">
                      <BadgeCheck className="h-5 w-5 text-[#6fe0cf]" />
                      <span className="text-sm font-semibold text-white">
                        Same-day appointments
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/55">
                      Book emergency maintenance or planned visits with full
                      status updates.
                    </p>
                  </div>
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-4">
                    <div className="flex items-center gap-3">
                      <BriefcaseBusiness className="h-5 w-5 text-[#7a8cff]" />
                      <span className="text-sm font-semibold text-white">
                        Premium pro network
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/55">
                      Specialists for homes, rentals, and commercial properties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
