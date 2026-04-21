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
    question: "What is an Event Installation AMC?",
    answer:
      "An Event Installation AMC (Annual Maintenance Contract) is a service agreement that ensures continuous maintenance, monitoring, and support for all event-related installations such as staging, kiosks, lighting, and AV systems throughout the event duration.",
  },
  {
    question: "What services are included in the AMC?",
    answer:
      "Our AMC typically includes:\n- On-site technical support\n- Daily inspection and maintenance\n- Preventive maintenance checks\n- Immediate troubleshooting and repairs\n- Coordination with event teams for smooth operations",
  },
  {
    question: "Do you provide on-site support during the event?",
    answer:
      "Yes, our trained technicians remain on-site throughout the event to ensure all installations are functioning properly and to address any issues immediately.",
  },
  {
    question: "What types of installations are covered?",
    answer:
      "We cover a wide range of event setups including:\n- Stages and structural elements\n- Exhibition kiosks and booths\n- Lighting systems (decorative and functional)\n- Audio-visual equipment\n- Electrical and basic MEP components",
  },
  {
    question: "How quickly can issues be resolved?",
    answer:
      "We provide immediate response with on-site technicians, ensuring most issues are resolved in real time without affecting the event flow.",
  },
  {
    question: "Is preventive maintenance included?",
    answer:
      "Yes, we conduct routine checks and preventive maintenance to identify and resolve potential issues before they become major problems.",
  },
  {
    question: "Can the AMC be customized based on event size?",
    answer:
      "Absolutely. Our AMC packages are flexible and can be tailored depending on event scale, duration, complexity, and specific requirements.",
  },
  {
    question: "Do you handle emergency situations?",
    answer:
      "Yes, we are equipped to manage urgent repairs and unexpected breakdowns quickly to minimize downtime and ensure safety.",
  },
  {
    question: "Are spare parts and materials included in the AMC?",
    answer:
      "Basic consumables may be included, while major materials or replacements are typically charged separately, depending on the agreement.",
  },
  {
    question: "Why is AMC important for events?",
    answer:
      "Events involve continuous use and high foot traffic, which can lead to wear and tear. An AMC ensures:\n- Safety compliance\n- Consistent performance\n- Reduced risk of breakdowns\n- Seamless event experience for guests",
  },
  {
    question: "Do you provide post-event support?",
    answer:
      "Yes, we can assist with dismantling support, condition checks, and reporting after the event if required.",
  },
  {
    question: "How can we subscribe to your AMC services?",
    answer:
      "You can contact us through our website, email, or phone to discuss your event requirements, and we will propose a tailored AMC plan.",
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
                  Event-Ready Performance
                </span>
              </div>

              <h2 className="mb-8 text-3xl font-semibold leading-[1.1] tracking-tight text-[#2C3E6B] md:text-5xl">
                Keep your installations vibrant <span className="text-[#3BBFBF]">safe, and fully operational</span> 
              </h2>

              <div className="space-y-6 text-base leading-relaxed text-[#5A6A8A] ">
                <p>
                  In high-traffic events, constant movement and heavy usage can quickly wear down installations. Our Event Installation AMC is designed for daily maintenance, ensuring your setups—from kiosks and stages to lighting and AV—remain flawless throughout the event.
                </p>
                <p>
                 With on-site support, routine checks, and immediate response, we proactively manage wear and tear, prevent disruptions, and maintain visual impact. From start to finish, we keep everything running smoothly so your event stays engaging, safe, and unforgettable.
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
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl">
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
                <h3 className="max-w-[14ch] text-2xl font-semibold leading-tight tracking-tight text-[#3BBFBF]">
                  {item.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-white/80">
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
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3BBFBF]">
                 AMC Deliverables
               </span>
              <span className="h-1 w-8 rounded-full bg-[#3BBFBF]" />
            </div>
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-[#2C3E6B] md:text-5xl">
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
                    <h3 className="mb-3 text-xl font-semibold leading-tight tracking-tight text-[#2C3E6B]">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-[#5A6A8A]">
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
                <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl">
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
                        <span className="text-base font-semibold text-white md:text-lg">
                          {faq.question}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="pb-5 pl-8 pr-2">
                          <p className="max-w-4xl whitespace-pre-line text-sm leading-7 text-white/75 md:text-base">
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
