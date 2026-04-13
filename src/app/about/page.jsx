import PageHero from "@/components/pageshero";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Handshake,
  Clock4,
  Award,
  FileText,
  HeartHandshake,
  ShieldCheck,
  Zap,
  Heart,
} from "lucide-react";
import CTA from "@/components/homepage/cta";
import Blog from "../blog/page";
import Blogs from "@/components/homepage/blogs";

const values = [
  {
    icon: Handshake,
    title: "Integrity",
    description: "We do what we say, every time",
  },
  {
    icon: Clock4,
    title: "Reliability",
    description: "On time, every visit, no excuses",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Only the highest standard of workmanship",
  },
  {
    icon: FileText,
    title: "Transparency",
    description: "Clear pricing, no hidden fees",
  },
  {
    icon: HeartHandshake,
    title: "Respect",
    description: "Your home is treated as our own",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    description: "Certified technicians, safe practices always",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Always improving how we serve you",
  },
  {
    icon: Heart,
    title: "Care",
    description: "We genuinely care about your home and family",
  },
];

const milestones = [
  {
    year: "2014",
    title: "Founded",
    label: "UAE's Trusted Maintenance Partner",
  },
  {
    year: "2015",
    title: "10,000 Customers",
  },
  {
    year: "2026",
    title: "12,588  Jobs",
  },
];

export default function About() {
  return (
    <main>
      <PageHero
        title="About Home Experts"
        titleAccent="Home Experts"
        subtitle="Reliable home maintenance professionals delivering trusted AC, plumbing, electrical, cleaning, and repair services across the UAE with a focus on quality, speed, and customer care."
        video="/aboutvideo.mp4"
        image="/abouthero.JPG"
        imageAlt="Home Experts team at work"
      />
      <section className="relative overflow-hidden bg-white px-4 py-16 md:px-6 md:py-24">
        {/* Background Glows matching brand guide */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
          <div className="absolute left-[-10%] top-10 h-64 w-64 rounded-full bg-[#3BBFBF] blur-[80px] md:h-96 md:w-96 md:blur-[120px]" />
          <div className="absolute bottom-10 right-[-10%] h-64 w-64 rounded-full bg-[#2C3E6B] blur-[80px] md:h-96 md:w-96 md:blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Image Stack */}
            <div className="relative aspect-square lg:col-span-5">
              {/* The primary dark navy background frame */}
              <div className="absolute inset-x-8 bottom-0 top-16 rounded-3xl bg-[#2C3E6B]" />

              {/* The main image container with teal side accent */}
              <div className="relative left-0 top-0 aspect-square h-full w-[90%] overflow-hidden rounded-l-3xl border-l-[16px] border-[#3BBFBF]">
                <Image
                  src="/about.jpg" // replace with your image path
                  alt="Handyman performing home maintenance"
                  fill
                  className="object-cover object-right"
                />
              </div>

              {/* The 'Est. 2008' floating card */}
              <div className="absolute -bottom-8 -left-8 rounded-2xl bg-white p-6 shadow-2xl">
                <span className="text-4xl font-semibold text-[#2C3E6B]">
                  Est. 2014
                </span>
                <p className="mt-2 text-xs font-semibold tracking-wide text-[#5A6A8A]">
                  UAE's Trusted Maintenance Partner
                </p>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="lg:col-span-7 lg:pl-16">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#3BBFBF]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#3BBFBF] md:text-xs">
                <span className="h-0.5 w-6 bg-[#3BBFBF]" />
                Our Story
              </span>

              <h2 className="mt-2 mb-10 text-4xl font-semibold leading-[1.1] tracking-tight text-[#2C3E6B] md:text-5xl">
                12 years of showing up, <br className="hidden md:block" />
                and never letting you down.
              </h2>

              <div className="space-y-6 max-w-2xl text-[0.95rem] leading-[1.7] text-[#2C3E6B]/65">
                <p>
                  It started in 2014 with a single promise — that every home
                  deserves expert care, and every homeowner deserves to be
                  treated with honesty. What began as a small team with big
                  ambitions has grown into one of the UAE's most trusted names
                  in home maintenance.
                </p>
                <p>
                  Through thousands of jobs, countless referrals, and over a
                  decade of hard-earned trust, we've remained committed to one
                  thing: doing the job right. Not just fast. Not just cheap.
                  Right. That's the standard we set in 2008 — and the one we
                  hold ourselves to every single day.
                </p>
              </div>

             

              {/* Primary & Secondary Buttons */}
              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  href="/our-team"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#3BBFBF] bg-[#3BBFBF] px-7 py-3 text-xs font-extrabold uppercase tracking-widest text-white transition hover:bg-[#3BBFBF]/90"
                >
                  Meet Our Team
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#2C3E6B] bg-transparent px-7 py-3 text-xs font-extrabold uppercase tracking-widest text-[#2C3E6B] transition hover:bg-[#2C3E6B] hover:text-white"
                >
                  Client Reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-4 text-center">
              <div className="h-px w-12 bg-[#3BBFBF]"></div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3BBFBF] md:text-xs">
                Our Values
              </p>
              <div className="h-px w-12 bg-[#3BBFBF]"></div>
            </div>
            <h2 className="mt-4 text-3xl font-black leading-[1.1] tracking-tight text-[#2C3E6B] md:text-5xl font-medium">
              Our Guiding Principles
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#5A6A8A]">
              Clear values, consistent results, a dedicated team.
            </p>
          </div>

          {/* Values Grid */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 md:mt-20 md:max-w-none md:grid-cols-4 lg:gap-12">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-8 pl-[18px] pr-8 shadow-sm transition-all duration-300 hover:border-[#3BBFBF]/30 hover:shadow-xl"
              >
                {/* Teal Side accent on hover */}
                <div className="absolute inset-y-0 left-0 w-[6px] rounded-l-2xl bg-[#3BBFBF] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex flex-col items-start gap-3 pl-[18px]">
                  <value.icon className="h-12 w-12 text-[#3BBFBF]" />
                  <h3 className="text-xl font-bold tracking-tight text-[#2C3E6B]">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#5A6A8A]">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Blogs />
    </main>
  );
}
