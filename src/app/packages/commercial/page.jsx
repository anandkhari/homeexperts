"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/pageshero";
import CTA from "@/components/homepage/cta";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  ClipboardCheck,
  ShieldCheck,
  TimerReset,
  Wrench,
  MessageCircle,
  Users,
  ShoppingCart,
} from "lucide-react";
import LandingCTA from "@/components/homepage/landing-cta";
import LandingTestimonials from "@/components/homepage/landing-testimonials";

const commercialFeatures = [
  {
    title: "Planned Preventive Maintenance",
    description:
      "Reduce operational downtime with scheduled inspections, servicing, and reporting for critical building systems.",
    icon: <ClipboardCheck className="h-6 w-6" />,
  },
  {
    title: "Priority Emergency Response",
    description:
      "Get faster support for urgent AC, plumbing, and electrical issues that affect staff, tenants, or day-to-day operations.",
    icon: <TimerReset className="h-6 w-6" />,
  },
  {
    title: "Multi-System Coverage",
    description:
      "Bundle multiple maintenance needs under one commercial contract instead of coordinating several vendors and callouts.",
    icon: <Wrench className="h-6 w-6" />,
  },
  {
    title: "Safer Facility Management",
    description:
      "Keep your property aligned with maintenance best practices through routine checks, cleaner records, and dependable support.",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
];

const commercialBenefits = [
  {
    title: "For Offices",
    description:
      "Support smoother day-to-day operations with dependable maintenance for workspaces, meeting rooms, and staff areas. A commercial AMC helps reduce disruptions, protects employee comfort, and makes facility support easier to manage.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "For Retail & Hospitality",
    description:
      "Customer-facing businesses need maintenance issues resolved fast. Our commercial contracts help reduce downtime, protect presentation standards, and keep cooling, plumbing, and electrical systems running reliably.",
    icon: <ShoppingCart className="h-6 w-6" />,
  },
  {
    title: "For Buildings & Facilities",
    description:
      "Property managers and facility teams benefit from one trusted maintenance partner, faster response, and better control over recurring service costs across larger commercial spaces.",
    icon: <Building2 className="h-6 w-6" />,
  },
];

const commercialFaqs = [
  {
    question: "What is included in a commercial AMC?",
    answer:
      "A commercial AMC usually includes scheduled preventive maintenance, emergency response support, inspections, and service coverage for key building systems. Exact inclusions depend on property size, usage, and the contract scope you choose.",
  },
  {
    question: "Who is a commercial maintenance contract suitable for?",
    answer:
      "Commercial AMCs are ideal for offices, retail stores, clinics, warehouses, restaurants, mixed-use buildings, and managed facilities that need reliable, ongoing maintenance support.",
  },
  {
    question: "Can you cover multiple units or branches under one contract?",
    answer:
      "Yes. Commercial maintenance plans can be structured around multiple units, floors, or branches depending on your operational needs and service coverage requirements.",
  },
  {
    question: "Do commercial packages include emergency support?",
    answer:
      "Yes. Emergency support is one of the biggest advantages of a commercial AMC, especially for businesses where downtime affects staff, customers, or tenants.",
  },
  {
    question: "Can the contract be customised for my business type?",
    answer:
      "Yes. Commercial packages are often tailored around the size of the property, the systems involved, operating hours, and the level of service response your business needs.",
  },
  {
    question:
      "Why is preventive maintenance important for commercial properties?",
    answer:
      "Preventive maintenance helps identify issues early, lower the risk of major failures, and keep essential systems working efficiently. It also helps businesses avoid unplanned repair costs and operational interruptions.",
  },
];

export default function CommercialPackagesPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-white">
      {/* <PageHero
        title="Commercial"
        titleAccent="  Maintenance Contracts"
        subtitle="Flexible annual maintenance coverage for offices, retail units, buildings, and managed commercial spaces across Dubai and the UAE."
        image="/aivan2.png"
        imageAlt="Commercial property management and maintenance planning"
      /> */}

      <section className="relative overflow-hidden px-4 py-16 md:px-6 md:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div className="absolute left-[-8%] top-12 h-72 w-72 rounded-full bg-[#3BBFBF] blur-[100px]" />
          <div className="absolute bottom-0 right-[-8%] h-80 w-80 rounded-full bg-[#2C3E6B] blur-[110px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-1 w-10 rounded-full bg-[#3BBFBF]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3BBFBF] md:text-xs">
                  Commercial Coverage
                </span>
              </div>

              <h2 className="mb-8 text-4xl font-medium  leading-[1.1] tracking-tight text-[#2C3E6B] md:text-5xl">
                Protect your{" "}
                <span className="text-[#3BBFBF]">business operations</span> with
                proactive support
              </h2>

              <div className="space-y-6 text-base leading-relaxed text-[#5A6A8A] ">
                <p>
                  Home Experts commercial maintenance contracts are built for
                  businesses that need reliability, speed, and operational
                  continuity. From offices and retail spaces to managed
                  buildings and facilities, we help reduce downtime through
                  planned maintenance and rapid issue response.
                </p>
                <p>
                  Instead of juggling separate contractors for every maintenance
                  task, you get one experienced partner for essential building
                  support. That means cleaner coordination, better visibility,
                  and more predictable maintenance management across your
                  property.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/packages"
                  className="inline-flex items-center gap-3 rounded-full bg-[#2C3E6B] px-8 py-4 text-xs font-black uppercase tracking-widest text-white transition-all hover:bg-[#3BBFBF] hover:shadow-xl shadow-[#2C3E6B]/20"
                >
                  View AMC Packages
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border-2 border-[#25D366] bg-transparent px-8 py-4 text-xs font-black uppercase tracking-widest text-[#25D366] transition-all hover:bg-[#25D366] hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us Now
                </Link>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="absolute -bottom-6 -right-6 h-64 w-64 rounded-full bg-[#3BBFBF]/10 blur-3xl" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl">
                <Image
                  src="/commercial.jpg"
                  alt="Commercial property maintenance team"
                  fill
                  className="object-cover"
                />

                <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-[#2C3E6B]/90 p-6 text-white backdrop-blur-md">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3BBFBF]">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#3BBFBF]">
                        Business Ready
                      </div>
                      <div className="text-sm font-bold">
                        Faster response for operational spaces
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#2C3E6B] px-6 py-14 text-white md:px-20 md:py-18">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,191,191,0.18),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(7,17,31,0.45),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#3BBFBF]/70 to-transparent" />

        <div className="relative z-10">
          <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#3BBFBF]/60" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3BBFBF] md:text-xs">
                Who It Helps
              </span>
              <span className="h-px w-10 bg-[#3BBFBF]/60" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Why commercial clients choose Home Experts
            </h2>
            <div className="mx-auto mt-6 h-1 w-32 rounded-full bg-[#3BBFBF]" />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {commercialBenefits.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3BBFBF]/40 hover:bg-white/8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#3BBFBF]">
                  {item.icon}
                </div>
                <h3 className="max-w-[14ch] text-2xl font-semibold leading-tight text-[#3BBFBF]">
                  {item.title}
                </h3>
                <p className="mt-6 text-sm leading-8 text-white/78 md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="h-1 w-8 rounded-full bg-[#3BBFBF]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3BBFBF]">
                Commercial Support
              </span>
              <span className="h-1 w-8 rounded-full bg-[#3BBFBF]" />
            </div>
            <h2 className="text-4xl font-medium leading-normal tracking-tight text-[#2C3E6B] md:text-5xl">
              What you get from our <br />
              <span className="text-[#3BBFBF]">
                Commercial Maintenance Contract
              </span>
            </h2>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {commercialFeatures.map((item) => (
              <div
                key={item.title}
                className="group rounded-[2.5rem] border border-gray-100 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#2C3E6B] text-[#3BBFBF] transition-colors group-hover:bg-[#3BBFBF] group-hover:text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-black uppercase tracking-tight text-[#2C3E6B]">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium leading-relaxed text-[#5A6A8A]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <section className="relative mt-24 overflow-hidden rounded-[3rem] bg-[#2C3E6B] px-6 py-14 text-white md:px-10 md:py-18">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,191,191,0.12),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(7,17,31,0.4),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#3BBFBF]/70 to-transparent" />

            <div className="relative z-10 mx-auto max-w-6xl">
              <div className="mb-10 text-center md:mb-14">
                <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-5xl">
                  Commercial Package FAQs
                </h2>
                <div className="mx-auto mt-6 h-1 w-32 rounded-full bg-[#3BBFBF]" />
              </div>

              <div className="divide-y divide-white/20 border-y border-white/20">
                {commercialFaqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div key={faq.question}>
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        className="flex w-full items-center gap-4 py-5 text-left"
                      >
                        <ChevronRight
                          className={`h-4 w-4 flex-shrink-0 text-[#3BBFBF] transition-transform duration-300 ${
                            isOpen ? "rotate-90" : ""
                          }`}
                        />
                        <span className="text-sm font-black text-white md:text-lg">
                          {faq.question}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="pb-5 pl-8 pr-2">
                          <p className="max-w-4xl text-sm leading-7 text-white/75 md:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </section>

      <CTA />

      <LandingTestimonials />
    </main>
  );
}
