import Link from "next/link";
import { Home, Building2, Sparkles, ArrowRight } from "lucide-react";
import PageHero from "@/components/pageshero";
import CTA from "@/components/homepage/cta";
import Blogs from "@/components/homepage/blogs";

export const metadata = {
  title: "AMC Packages",
  description:
    "Explore annual maintenance packages and choose coverage that fits your property and support needs across the UAE.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/packages`,
  },
  openGraph: {
    title: "AMC Packages | Home Experts",
    description:
      "Annual maintenance packages for residential, commercial, and event properties across the UAE.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/packages`,
    type: "website",
    images: [{ url: "/aivan2.png", width: 1200, height: 630, alt: "AMC Packages" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMC Packages | Home Experts",
    description:
      "Annual maintenance packages for homes and businesses across the UAE.",
    images: ["/aivan2.png"],
  },
};

const packageCards = [
  {
    href: "/packages/residential",
    eyebrow: "For Homes",
    title: "Residential AMC",
    icon: <Home className="w-8 h-8" />,
    description:
      "Annual maintenance support for villas, apartments, landlords, and tenants who want dependable AC, plumbing, and electrical coverage.",
    features: ["24/7 Emergency Support", "Preventive AC Servicing", "Priority Scheduling"],
  },
  {
    href: "/packages/commercial",
    eyebrow: "For Business",
    title: "Commercial AMC",
    icon: <Building2 className="w-8 h-8" />,
    description:
      "Preventive maintenance and priority support for offices, retail spaces, managed facilities, and multi-unit commercial properties.",
    features: ["Dedicated Account Manager", "Asset Lifecycle Tracking", "Compliance Reporting"],
  },
  {
    href: "/packages/events",
    eyebrow: "For Activations",
    title: "Event & Activation AMC",
    icon: <Sparkles className="w-8 h-8" />,
    description:
      "Proactive maintenance and rapid-response technical support for kiosks, exhibitions, brand activations, and live event installations.",
    features: ["On-site Technicians", "Rapid Deployment", "Short-term High Intensity"],
  },
];

export default function PackagesPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: process.env.NEXT_PUBLIC_SITE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "AMC Packages",
                item: `${process.env.NEXT_PUBLIC_SITE_URL}/packages`,
              },
            ],
          }),
        }}
      />
      <PageHero
        title="Choose The Right "
        titleAccent="Maintenance Contract"
        subtitle="Explore our annual maintenance packages and pick the coverage that best fits your property, response expectations, and day-to-day support needs."
        image="/aivan2.png"
        imageAlt="Property maintenance planning discussion"
      />

      <section className="relative bg-[#F8FAFC] px-4 py-16 md:px-6 md:py-24 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2C3E6B" strokeWidth="1"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#3BBFBF]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3BBFBF] md:text-xs">
              Annual Contracts
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#2C3E6B] md:text-5xl lg:leading-[1.1]">
              Packages built for <span className="text-[#3BBFBF]">homes and businesses</span>
            </h2>
         
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {packageCards.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex flex-col rounded-[2.5rem] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#3BBFBF]/30 hover:shadow-[0_20px_50px_rgba(44,62,107,0.1)] md:p-10"
              >
                {/* Icon Container */}
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8FAFC] text-[#2C3E6B] transition-colors duration-500 group-hover:bg-[#3BBFBF] group-hover:text-white">
                  {item.icon}
                </div>

                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#3BBFBF]">
                  {item.eyebrow}
                </p>
                
                <h3 className="mt-4 text-2xl font-black tracking-tight text-[#2C3E6B] md:text-3xl">
                  {item.title}
                </h3>
                
                <p className="mt-5 text-sm leading-7 text-[#5A6A8A] md:text-base flex-grow">
                  {item.description}
                </p>

              
                
                <div className="mt-10 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full border-2 border-[#2C3E6B] px-6 py-2.5 text-[0.7rem] font-black uppercase tracking-[0.15em] text-[#2C3E6B] transition-all duration-300 group-hover:bg-[#2C3E6B] group-hover:text-white">
                      Explore Package
                    </span>
                    <ArrowRight className="h-5 w-5 text-[#3BBFBF] opacity-0 transition-all duration-300 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Blogs />
    </main>
  );
}
