import Link from "next/link";
import PageHero from "@/components/pageshero";
import CTA from "@/components/homepage/cta";
import Blogs from "@/components/homepage/blogs";

const packageCards = [
  {
    href: "/packages/residential",
    eyebrow: "For Homes",
    title: "Residential AMC",
    description:
      "Annual maintenance support for villas, apartments, landlords, and tenants who want dependable AC, plumbing, and electrical coverage.",
  },
  {
    href: "/packages/commercial",
    eyebrow: "For Business",
    title: "Commercial AMC",
    description:
      "Preventive maintenance and priority support for offices, retail spaces, managed facilities, and multi-unit commercial properties.",
  },
];

export default function PackagesPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Choose The Right"
        titleAccent="Maintenance Contract"
        subtitle="Explore our annual maintenance packages and pick the coverage that best fits your property, response expectations, and day-to-day support needs."
        image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
        imageAlt="Property maintenance planning discussion"
      />

      <section className="bg-[#F8FAFC] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#2C3E6B]/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#3BBFBF] md:text-xs">
              Annual Contracts
            </span>
            <h2 className="text-3xl font-black tracking-tight text-[#2C3E6B] md:text-5xl">
              Packages built for <span className="text-[#3BBFBF]">homes and businesses</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#5A6A8A] md:text-base">
              Every package is designed to reduce emergency issues, improve maintenance planning, and give you one reliable team to call when support is needed.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {packageCards.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3BBFBF]/40 hover:shadow-xl"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#3BBFBF]">
                  {item.eyebrow}
                </p>
                <h3 className="mt-4 text-3xl font-black tracking-tight text-[#2C3E6B]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5A6A8A] md:text-base">
                  {item.description}
                </p>
                <span className="mt-8 inline-flex items-center rounded-full border-2 border-[#2C3E6B] px-5 py-2 text-[0.75rem] font-extrabold uppercase tracking-[0.12em] text-[#2C3E6B] transition group-hover:bg-[#2C3E6B] group-hover:text-white">
                  View Package
                </span>
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
