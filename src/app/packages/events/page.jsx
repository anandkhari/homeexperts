"use client";

import { useState } from "react";
import Image from "next/image";
import PageHero from "@/components/pageshero";
import Link from "next/link";
import {
  ArrowRight,
  Mic2,
  Zap,
  Layout,
  Clock,
  Settings2,
  ShieldCheck,
  ChevronRight,
  Boxes,
  MonitorPlay,
  MessageCircle,
  Store,
} from "lucide-react";
import LandingCTA from "@/components/homepage/landing-cta";
import LandingTestimonials from "@/components/homepage/landing-testimonials";
import CTA from "@/components/homepage/cta";

const eventFeatures = [
  {
    title: "Preventive Maintenance",
    description:
      "Scheduled inspections and servicing to identify issues early, reducing the risk of unexpected breakdowns during live activations.",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    title: "24/7 Rapid Response",
    description:
      "On-call technical support to handle urgent issues immediately, ensuring zero downtime for your brand installations.",
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: "Multi-Asset Coverage",
    description:
      "A single contract covering everything from structures and kiosks to AV systems and electrical components.",
    icon: <Boxes className="h-6 w-6" />,
  },
  {
    title: "Cost Predictability",
    description:
      "Avoid unexpected repair expenses with a fixed annual fee, allowing for better budget management and long-term planning.",
    icon: <Settings2 className="h-6 w-6" />,
  },
];

const eventBenefits = [
  {
    title: "Malls & Retail",
    description:
      "Maintain premium presentation standards in high-traffic retail environments. Our AMC ensures that lighting, kiosks, and digital displays stay functional and visually perfect for every customer interaction.",
    icon: <Store className="h-6 w-6" />,
  },
  {
    title: "Exhibitions & Stands",
    description:
      "Protect your exhibition investment with proactive upkeep. We handle the technical integrity of stands and trade show booths, ensuring all electrical and mechanical systems perform throughout the event duration.",
    icon: <Layout className="h-6 w-6" />,
  },
  {
    title: "Outdoor Activations",
    description:
      "Combat the elements with specialized maintenance for outdoor setups. We focus on structural stability and weather-proofing for temporary campaigns and semi-permanent brand installations.",
    icon: <Zap className="h-6 w-6" />,
  },
];

const eventFaqs = [
  {
    question: "What does an Event AMC typically cover?",
    answer:
      "It covers the ongoing upkeep of structures, kiosks, branding elements, signage, lighting, AV systems, and electrical components. We ensure that everything from the physical build to the technical equipment remains in peak condition.",
  },
  {
    question: "How fast is the response time for emergency support?",
    answer:
      "We provide priority response for AMC clients. In fast-paced event environments, our team is on standby to provide rapid on-site support across Dubai and the UAE to resolve issues before they impact your brand image.",
  },
  {
    question: "Is the maintenance plan customizable?",
    answer:
      "Yes. Every activation is unique. We design tailored packages based on your specific setup, the complexity of the installations, the duration of the activation, and your specific operational requirements.",
  },
  {
    question: "Why do I need an AMC for temporary setups?",
    answer:
      "Even temporary setups are prone to technical glitches, wear and tear from crowds, or electrical issues. An AMC provides peace of mind that a professional team is responsible for the performance and safety of the installation 24/7.",
  },
];

export default function EventMaintenancePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-white">
      {/* <PageHero
        title="Event & Activation"
        titleAccent=" Maintenance Contracts"
        subtitle="Ensure your brand installations and event setups stay flawless with proactive maintenance and 24/7 technical support."
        image="/aivan2.png" // Update with your actual image path
        imageAlt="Event and activation maintenance support"
      /> */}

      {/* Narrative Section */}
      <section className="relative overflow-hidden px-4 py-16 md:px-6 md:py-24">
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
                  Proactive Brand Care
                </span>
              </div>

              <h2 className="mb-8 text-4xl font-medium  leading-[1.1] tracking-tight text-[#2C3E6B] md:text-5xl">
                Protect your <span className="text-[#3BBFBF]">brand image</span> with seamless installations
              </h2>

              <div className="space-y-6 text-base leading-relaxed text-[#5A6A8A] md:text-lg">
                <p>
                  In the fast-paced world of events, even a minor technical failure can disrupt your operations and impact your brand’s reputation. Our AMC solutions provide dedicated maintenance for kiosks, exhibitions, and brand activations across the UAE.
                </p>
                <p>
                  Instead of reacting to breakdowns, our proactive approach ensures your assets—from lighting and AV to structural components—are regularly inspected and supported by experts. We minimize downtime so you can focus on your audience.
                </p>
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
            </div>

            <div className="relative lg:col-span-5">
              <div className="absolute -bottom-6 -right-6 h-64 w-64 rounded-full bg-[#3BBFBF]/10 blur-3xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl">
                <Image
                  src="/event.jpg" // Update with your actual image path
                  alt="Professional event maintenance team"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-[#2C3E6B]/90 p-6 text-white backdrop-blur-md">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3BBFBF]">
                      <MonitorPlay className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#3BBFBF]">
                        Event Ready
                      </div>
                      <div className="text-sm font-bold">
                        Zero-downtime support for live activations
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative overflow-hidden bg-[#2C3E6B] px-6 py-14 text-white md:px-20 md:py-18">
        <div className="relative z-10">
          <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#3BBFBF]/60" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3BBFBF] md:text-xs">
                Ideal For
              </span>
              <span className="h-px w-10 bg-[#3BBFBF]/60" />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-5xl">
              Who we support
            </h2>
            <div className="mx-auto mt-6 h-1 w-32 rounded-full bg-[#3BBFBF]" />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {eventBenefits.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3BBFBF]/40 hover:bg-white/8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#3BBFBF]">
                  {item.icon}
                </div>
                <h3 className="max-w-[14ch] text-2xl font-black leading-tight text-[#3BBFBF]">
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

      {/* Features Grid */}
      <section className="bg-[#F8FAFC] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="h-1 w-8 rounded-full bg-[#3BBFBF]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3BBFBF]">
                AMC Deliverables
              </span>
              <span className="h-1 w-8 rounded-full bg-[#3BBFBF]" />
            </div>
            <h2 className="text-4xl font-medium leading-none tracking-tight text-[#2C3E6B] md:text-5xl">
              Your comprehensive <br />
              <span className="text-[#3BBFBF]">Event Maintenance Solution</span>
            </h2>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {eventFeatures.map((item) => (
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

          {/* FAQ Section */}
          <section className="relative mt-20 overflow-hidden rounded-[3rem] bg-[#2C3E6B] px-6 py-14 text-white md:px-10 md:py-18">
            <div className="relative z-10 mx-auto max-w-6xl">
              <div className="mb-10 text-center md:mb-14">
                <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-5xl">
                  AMC FAQs
                </h2>
                <div className="mx-auto mt-6 h-1 w-32 rounded-full bg-[#3BBFBF]" />
              </div>

              <div className="divide-y divide-white/20 border-y border-white/20">
                {eventFaqs.map((faq, index) => {
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