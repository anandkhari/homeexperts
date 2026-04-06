import {
  BadgeCheck,
  Clock3,
  CreditCard,
  Shield,
  Sparkles,
  Star,
} from "lucide-react";

const features = [
  {
    title: "Verified Professionals",
    description:
      "Every expert is reviewed for identity, trade skill, and service quality before they join the network.",
    icon: BadgeCheck,
  },
  {
    title: "Fast Booking",
    description:
      "Find availability in minutes with simple booking flows built for urgent fixes and planned maintenance.",
    icon: Clock3,
  },
  {
    title: "Secure Payments",
    description:
      "Pay safely through trusted checkout flows with clear pricing and service confirmation.",
    icon: CreditCard,
  },
  {
    title: "Ratings & Reviews",
    description:
      "Choose confidently with transparent feedback, service history, and repeat-customer trust signals.",
    icon: Star,
  },
  {
    title: "Service Guarantee",
    description:
      "We support every booking with responsive follow-up and quality standards that protect your experience.",
    icon: Shield,
  },
  {
    title: "Premium Support",
    description:
      "From first booking to final fix, the platform keeps communication polished, helpful, and human.",
    icon: Sparkles,
  },
];

export default function LandingFeatures() {
  return (
    <section className="relative overflow-hidden bg-[#f5f7fb] px-4 py-18 md:px-6 md:py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(111,224,207,0.08),transparent)]" />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-white px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#3b7dff] shadow-sm">
            Why HomeExperts
          </span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[#091321] md:text-5xl">
            Premium service discovery without the guesswork
          </h2>
          <p className="mt-5 text-base leading-8 text-[#5c6678]">
            Designed to feel effortless for customers and dependable for
            professionals, with thoughtful details at every step.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="group rounded-[2rem] border border-white bg-white/90 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.12)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#0c1727,#19304d)] text-[#6fe0cf] shadow-lg shadow-[#0b1524]/10 transition group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-[#0d1623]">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#617086]">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
