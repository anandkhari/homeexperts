import Link from "next/link";
import {
  ArrowUpRight,
  Droplets,
  Paintbrush2,
  ShieldAlert,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

const serviceCategories = [
  {
    title: "Plumbing",
    description: "Leaks, fixtures, drainage, and urgent water repairs.",
    href: "/services/plumbing",
    icon: Droplets,
  },
  {
    title: "Electrical",
    description: "Fault finding, installations, rewiring, and safety checks.",
    href: "/services/electrical",
    icon: Zap,
  },
  {
    title: "Cleaning",
    description: "Deep cleaning, recurring visits, move-in, and post-renovation.",
    href: "/services/maid",
    icon: Sparkles,
  },
  {
    title: "Handyman",
    description: "Assembly, repairs, mounting, and all the small fixes.",
    href: "/services/handyman",
    icon: Wrench,
  },
  {
    title: "Painting",
    description: "Interior refreshes, touch-ups, and full-room transformations.",
    href: "/services/painting",
    icon: Paintbrush2,
  },
  {
    title: "Pest Control",
    description: "Safe treatment plans for homes, rentals, and facilities.",
    href: "/services/pest-control",
    icon: ShieldAlert,
  },
];

export default function LandingServices() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] px-4 py-18 text-white md:px-6 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(111,224,207,0.16),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(59,125,255,0.16),transparent_24%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#b5fff2]">
              Services
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              Browse standout categories built for modern home care
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#bdebe4] transition hover:text-white"
          >
            View all services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCategories.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-[2rem] border border-white/10 bg-white/6 p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#6fe0cf]/30 hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#6fe0cf] transition group-hover:bg-[#6fe0cf] group-hover:text-[#08111f]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/35 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                </div>
                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
