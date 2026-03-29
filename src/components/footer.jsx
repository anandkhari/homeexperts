import Link from "next/link";

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "AC Servicing", href: "/services/ac" },
      { label: "Electrical", href: "/services/electrical" },
      { label: "Plumbing", href: "/services/plumbing" },
      { label: "Handyman", href: "/services/handyman" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Packages", href: "/packages" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Get a Quote", href: "/quote" },
      { label: "FAQ", href: "/legal" },
      { label: "Customer Care", href: "/contact" },
      { label: "Service Areas", href: "/services" },
    ],
  },
];

const contactItems = [
  { label: "Call", value: "800-FIX (800-349)", href: "/contact" },
  { label: "Email", value: "hello@homeexpertrs.com", href: "mailto:hello@homeexpertrs.com" },
  { label: "Hours", value: "Mon-Sun | 8AM to 10PM", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a0c23] text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-12 md:px-6 lg:grid-cols-[1.2fr_auto] lg:items-center">
          <div>
            <p className="text-[clamp(2rem,4vw,4rem)] font-black uppercase leading-[0.95] tracking-[-0.04em] text-white">
              Ready To Fix What Is Slowing Your Home Down?
            </p>
            <p className="mt-4 max-w-[54ch] text-base leading-7 text-white/72 md:text-lg">
              One trusted team for repairs, maintenance, inspections, and fast
              support when home life gets interrupted.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
            <Link
              className="inline-flex min-h-14 items-center justify-center rounded-[16px] bg-[#d7ff00] px-7 text-sm font-extrabold uppercase tracking-[0.14em] text-[#23112e] transition hover:bg-[#c5ec00]"
              href="/quote"
            >
              Book A Free Quote
            </Link>
            <Link
              className="inline-flex min-h-14 items-center justify-center rounded-[16px] border border-white/18 bg-white/8 px-7 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-white/12"
              href="/services"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1.8fr]">
          <div>
            <Link
              aria-label="Home Expertrs home"
              className="inline-flex rounded-[14px] bg-[#7b2b8e] px-5 py-4 text-xl font-black uppercase tracking-[0.08em] text-[#d7ff00] shadow-[0_16px_32px_rgba(123,43,142,0.25)]"
              href="/"
            >
              Homeexpertrs
            </Link>

            <p className="mt-6 max-w-[34ch] text-base leading-7 text-white/68">
              Premium home maintenance with fast response times, transparent
              coordination, and technicians homeowners can trust.
            </p>

            <div className="mt-8 grid gap-4">
              {contactItems.map((item) => (
                <Link
                  key={item.label}
                  className="rounded-[18px] border border-white/8 bg-white/5 px-5 py-4 transition hover:border-white/16 hover:bg-white/8"
                  href={item.href}
                >
                  <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#d7ff00]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base font-semibold text-white/88">
                    {item.value}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#d7ff00]">
                  {column.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        className="text-base font-semibold text-white/76 transition hover:text-white"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#d7ff00]">
                Follow
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {["Facebook", "Instagram", "LinkedIn", "YouTube"].map((item) => (
                  <Link
                    key={item}
                    className="inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] text-white/86 transition hover:border-white/18 hover:bg-white/10"
                    href="/contact"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <div className="mt-8 rounded-[22px] border border-white/10 bg-[linear-gradient(145deg,rgba(123,43,142,0.42),rgba(26,12,35,0.96))] p-5">
                <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#d7ff00]">
                  Response Promise
                </p>
                <p className="mt-3 text-3xl font-black leading-none text-white">
                  Fast booking.
                </p>
                <p className="mt-2 text-base leading-7 text-white/72">
                  Clear communication from the first quote to final fix.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm font-medium text-white/52 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Homeexpertrs. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link className="transition hover:text-white/84" href="/legal">
              Privacy
            </Link>
            <Link className="transition hover:text-white/84" href="/legal">
              Terms
            </Link>
            <Link className="transition hover:text-white/84" href="/contact">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
