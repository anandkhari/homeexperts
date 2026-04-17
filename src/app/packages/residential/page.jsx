"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/pageshero";
import {
  Clock,
  Wind,
  Zap,
  Droplets,
  ArrowRight,
  ShieldCheck,
  PlusCircle,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { Home, Building2, Users, CheckCircle2 } from "lucide-react";
import LandingCTA from "@/components/homepage/landing-cta";
import LandingTestimonials from "@/components/homepage/landing-testimonials";

const features = [
  {
    title: "24/7 Emergency Service",
    description:
      "Our contract includes highly convenient, around-the-clock emergency support for any AC, plumbing, or electrical issues that arise throughout the year, 365 days a year.",
    icon: <Clock className="h-14 w-14" />,
  },
  {
    title: "Air Conditioner Maintenance",
    description:
      "Our comprehensive 14-step AC inspection includes full assessment, disinfection, and troubleshooting performed quarterly to ensure peak efficiency during UAE summers.",
    icon: <Wind className="h-14 w-14" />,
  },
  {
    title: "Electrical Inspections",
    description:
      "Certified technicians perform annual checks for loose wiring, overloaded circuits, and fire risks, remaining on standby for ad-hoc repairs and emergency issues.",
    icon: <Zap className="h-14 w-14" />,
  },
  {
    title: "Plumbing Inspections",
    description:
      "Thorough annual inspections check for hidden leaks, clogged drains, faulty fixtures, and water pressure issues. Ad-hoc plumbing repairs are fully covered.",
    icon: <Droplets className="h-14 w-14" />,
  },
];

const audienceBenefits = [
  {
    title: "AMC Benefits for Homeowners",
    description:
      "Skip the stress of chasing different service providers for every issue. A Home Experts annual contract bundles essential maintenance into one dependable plan, helping you protect your property, reduce surprise repair costs, and keep your home in top condition year-round.",
    icon: Home,
    highlights: [
      "One trusted plan",
      "Reduce surprise costs",
      "Year-round coverage",
    ],
  },
  {
    title: "AMC Benefits for Landlords",
    description:
      "Our annual maintenance contracts make property management far easier by giving you one trusted partner for AC, plumbing, and electrical support. Instead of coordinating repeated callouts, you get faster issue resolution, clearer communication, and better protection for your rental asset.",
    icon: Building2,
    highlights: [
      "One trusted partner",
      "Faster resolution",
      "Asset protection",
    ],
  },
  {
    title: "AMC Benefits for Tenants",
    description:
      "An annual maintenance contract also brings peace of mind to tenants by ensuring essential issues are handled quickly and professionally. From faulty AC units to leaking taps and electrical problems, it helps reduce downtime, improve comfort, and avoid bigger repair headaches later.",
    icon: Users,
    highlights: [
      "Quick response",
      "Improved comfort",
      "Fewer repair headaches",
    ],
  },
];

const faqs = [
  {
    question: "What is an AMC contract?",
    answer:
      "An AMC, or Annual Maintenance Contract, is a yearly service plan that covers scheduled maintenance and support for key home systems such as AC, plumbing, and electrical. It helps homeowners and tenants reduce emergency breakdowns and manage maintenance more predictably.",
  },
  {
    question: "What are the benefits of an annual maintenance contract?",
    answer:
      "The biggest benefits are convenience, faster support, preventive care, and better control over repair costs. Instead of arranging separate technicians for every issue, you work with one trusted maintenance partner throughout the year.",
  },
  {
    question: "What does the residential AMC cover?",
    answer:
      "Our residential AMC is designed to cover essential AC servicing, plumbing support, electrical assistance, and emergency response depending on the selected plan. Coverage can vary by package, so the exact inclusions are matched to your chosen contract level.",
  },
  {
    question: "How often will maintenance visits be scheduled?",
    answer:
      "Scheduled visit frequency depends on the type of service and package you choose. AC inspections are typically planned throughout the year, while plumbing and electrical support can include both scheduled checks and on-demand visits when issues appear.",
  },
  {
    question: "Can I customise my AMC contract plan?",
    answer:
      "Yes. AMC plans can often be tailored based on your property type, system requirements, and the level of protection you want. This is especially useful for villas, apartments, and landlords managing multiple units.",
  },
  {
    question: "Is an AMC contract worth it for villas and apartments in Dubai?",
    answer:
      "Yes. Dubai properties depend heavily on cooling systems and regular upkeep, so preventive maintenance can save money, reduce disruption, and protect the long-term condition of the home. It is especially valuable during peak summer months when urgent repairs are harder to coordinate quickly.",
  },
  {
    question: "What's included in your home A/C maintenance service?",
    answer:
      "Home AC maintenance typically includes system inspection, cleaning, performance checks, and troubleshooting to improve efficiency and reduce breakdown risk. Depending on the package, some plans may also include added parts support or priority assistance.",
  },
  {
    question: "Are there any home A/C services not included in the AMC?",
    answer:
      "Some specialist work, consumables, or replacement parts may sit outside a standard contract, depending on the package. That is why we offer upgraded options for customers who want broader AC parts and hardware coverage.",
  },
  {
    question:
      "Why aren't duct and coil cleaning included in the residential AMC?",
    answer:
      "Duct and coil cleaning are often treated as deeper specialist cleaning services rather than routine maintenance tasks. They may be quoted separately because the scope, equipment, and labor involved can vary significantly from property to property.",
  },
  {
    question:
      "Are all household plumbing and electrical issues covered under the contract?",
    answer:
      "Not always. Essential issues and standard maintenance support are usually included, but major replacements, special materials, or non-covered faults may be outside the standard scope. The exact level of coverage depends on the plan you select.",
  },
  {
    question: "Are there any extra costs homeowners should be aware of?",
    answer:
      "Possible extra costs can include replacement parts, specialist deep-cleaning services, or non-covered repair items outside the contract scope. A well-structured AMC still helps reduce overall surprise costs by catching problems early.",
  },
  {
    question: "What happens if I move homes or need to cancel my contract?",
    answer:
      "Transfer and cancellation terms depend on the specific package and agreement terms. In many cases, support options can be discussed based on timing, contract status, and whether the new property falls within the same service area.",
  },
  {
    question: "What if I have an emergency at night or on the weekend?",
    answer:
      "Emergency support is one of the major reasons customers choose an AMC. Our maintenance packages are designed to give you access to faster assistance for urgent AC, plumbing, or electrical issues beyond normal appointment scheduling.",
  },
  {
    question: "Aren't maintenance contracts just for homeowners?",
    answer:
      "No. Landlords and tenants also benefit from annual maintenance contracts. They simplify communication, reduce downtime, and help ensure maintenance responsibilities are handled quickly and professionally.",
  },
  {
    question:
      "Aren't contracts just a way for companies to charge more for unnecessary add-ons?",
    answer:
      "A good maintenance contract should do the opposite: reduce repeat callout costs, improve preventive care, and make service support more transparent. The value comes from clear inclusions, reliable service, and fewer expensive emergency repairs over time.",
  },
];

export default function AMCSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* <PageHero
        title="Residential"
        titleAccent="  Maintenance Contracts"
        subtitle="Flexible annual maintenance coverage for villas, apartments, and residential spaces across Dubai and the UAE."
        image="/aivan2.png"
        imageAlt="Residential property management and maintenance planning"
      /> */}
      <section className="relative overflow-hidden bg-white px-4 py-16 md:px-6 md:py-24">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
            {/* LEFT CONTENT COLUMN */}
            <div className="lg:col-span-7">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-1 w-10 bg-[#3BBFBF] rounded-full" />
                <span className="text-[#3BBFBF] text-[10px] font-black uppercase tracking-[0.3em] md:text-xs">
                  Annual Maintenance Contracts
                </span>
              </div>

              <h2 className="mb-8 text-4xl font-medium leading-[1.1] tracking-tight text-[#2C3E6B] md:text-5xl ">
                Essential AMC{" "}
                <span className="text-[#3BBFBF]">Contract Dubai</span> — 24/7
                Support
              </h2>

              <div className="space-y-6 text-base leading-relaxed text-[#5A6A8A] md:text-base">
                <p>
              
                  
                   At Home Experts UAE
                  
                  , your peace of mind is our priority. We have developed a
                  comprehensive, cost-saving annual maintenance contract
                  designed for Dubai homeowners that covers all your essential
                  property needs.
                </p>

                <p>
                  With year-round AC servicing and 24-hour qualified support for
                  plumbing and electrical repairs, our Essential Maintenance
                  package is the gold standard for home care. Our highly-skilled
                  team of certified technicians is on-hand 365 days a year to
                  deliver precision workmanship and emergency assistance.
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

            {/* RIGHT IMAGE COLUMN */}
            <div className="relative lg:col-span-5">
              {/* Decorative Background Elements */}
              <div className="absolute -bottom-6 -right-6 h-64 w-64 rounded-full bg-[#3BBFBF]/10 blur-3xl" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl md:aspect-square lg:aspect-[4/5]">
                <Image
                  src="/residential.jpg" // Professional AC tech image
                  alt="Expert technician performing AC maintenance"
                  fill
                  className="object-cover"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-[#2C3E6B]/90 p-6 text-white backdrop-blur-md">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3BBFBF]">
                      <ShieldCheck className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#3BBFBF]">
                        Certified Care
                      </div>
                      <div className="text-sm font-bold">
                        100% Parts & Labor Guarantee
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Tag */}
              <div className="absolute -right-4 top-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#3BBFBF] text-white shadow-xl">
                <div className="text-center">
                  <Clock className="mx-auto h-5 w-5 mb-1" />
                  <span className="block text-[10px] font-black leading-none">
                    24/7
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-lg bg-[#2C3E6B] px-6 py-14 text-white md:px-24 md:py-18">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,191,191,0.18),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(7,17,31,0.45),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#3BBFBF]/70 to-transparent" />

        <div className="relative z-10">
          <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#3BBFBF]/60" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3BBFBF] md:text-xs">
                Why It Matters
              </span>
              <span className="h-px w-10 bg-[#3BBFBF]/60" />
            </div>

            <h2 className="text-3xl font-semibold  tracking-tight text-white md:text-5xl">
              Benefits of Annual Home Maintenance Contracts in Dubai
            </h2>

            <div className="mx-auto mt-6 h-1 w-32 rounded-full bg-[#3BBFBF]" />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {audienceBenefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group relative rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3BBFBF]/40 hover:bg-white/8 flex flex-col"
                >
                  {/* Card number */}
                  <span className="absolute top-6 right-7 text-[3rem] font-black leading-none text-white/5 select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon bubble */}
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3BBFBF]/15 ring-1 ring-[#3BBFBF]/30 transition-colors duration-300 group-hover:bg-[#3BBFBF]/25">
                    <Icon
                      className="h-7 w-7 text-[#3BBFBF]"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="text-xl font-semibold leading-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/65 md:text-[0.95rem]">
                    {item.description}
                  </p>

                  {/* Highlight pills */}
                  <ul className="mt-6 flex flex-col gap-2 pt-6 border-t border-white/10">
                    {item.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2.5 text-xs font-medium text-white/70"
                      >
                        <CheckCircle2
                          className="h-4 w-4 flex-shrink-0 text-[#3BBFBF]"
                          strokeWidth={2}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-1 w-8 bg-[#3BBFBF] rounded-full" />
              <span className="text-[#3BBFBF] text-[10px] font-black uppercase tracking-[0.4em]">
                Comprehensive Care
              </span>
              <span className="h-1 w-8 bg-[#3BBFBF] rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#2C3E6B] uppercase tracking-tight leading-none">
              What is included in our Annual <br />
              <span className="text-[#3BBFBF]"> Maintenance Contract?</span>
            </h2>
          </div>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((item, index) => (
              <div
                key={index}
                className="group bg-white p-10 rounded-lg border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 h-14 w-14 rounded-lg text-[#3BBFBF] flex items-center justify-center transition-colors group-hover:bg-[#3BBFBF] group-hover:text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#2C3E6B] mb-3 uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-[#5A6A8A] text-sm leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <section className="relative mt-16 overflow-hidden rounded-[3rem] bg-[#2C3E6B] px-6 py-14 text-white md:px-10 md:py-18">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,191,191,0.12),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(7,17,31,0.4),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#3BBFBF]/70 to-transparent" />

            <div className="relative z-10 mx-auto max-w-6xl">
              <div className="mb-10 text-center md:mb-14">
                <h2 className="text-3xl font-medium uppercase tracking-tight text-white md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <div className="mx-auto mt-6 h-1 w-32 rounded-full bg-[#3BBFBF]" />
              </div>

              <div className="divide-y divide-white/20 border-y border-white/20">
                {faqs.map((faq, index) => {
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

      <LandingCTA />

      <LandingTestimonials />
    </>
  );
}
