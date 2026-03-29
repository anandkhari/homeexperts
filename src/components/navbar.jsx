import Link from "next/link";

const navItems = [
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/packages", label: "Annual Contract", hasDropdown: true },
  { href: "/about", label: "About", hasDropdown: true },
  { href: "/legal", label: "FAQ" },
  { href: "/blog", label: "How We Compare" },
  { href: "/blog", label: "Blog" },
];

const socialLinks = [
  { label: "Facebook", href: "#", short: "f" },
  { label: "Instagram", href: "#", short: "ig" },
  { label: "LinkedIn", href: "#", short: "in" },
  { label: "YouTube", href: "#", short: "yt" },
  { label: "Email", href: "mailto:hello@homeexpertrs.com", short: "@" },
];

function ChevronDownIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 4.75 7 9.25l4.5-4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.9 2.5c.4-.4 1-.5 1.5-.2l2 1c.6.3.9 1 .7 1.7L10.4 7c-.1.5 0 1 .4 1.4l.8.8c.4.4.9.5 1.4.4l2.5-.7c.7-.2 1.4.1 1.7.7l1 2c.3.5.2 1.1-.2 1.5l-1.1 1.1c-.8.8-2 .9-3 .5-2.2-.9-4.2-2.4-5.9-4.1-1.7-1.7-3.2-3.7-4.1-5.9-.4-1-.3-2.2.5-3L6.9 2.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m13 13 3.5 3.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 shadow-[0_1px_0_rgba(0,0,0,0.06)]">
      <div className="bg-[#7b2b8e] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-4 py-3 text-sm font-semibold tracking-[0.12em] uppercase md:flex-row md:items-center md:justify-between md:px-6 md:py-0">
          <div className="flex items-center justify-center gap-3 text-center md:min-h-[52px] md:justify-start">
            <span className="text-[#d7ff00]">★★★★★</span>
            <span className="tracking-[0.08em] text-white/95">
              Rated 4.7 | 2k+ Reviews
            </span>
          </div>

          <Link
            className="inline-flex min-h-[52px] items-center justify-center gap-3 bg-[#d7ff00] px-6 text-center font-extrabold tracking-[0.08em] text-[#27113a] transition hover:bg-[#c4ec00]"
            href="/contact"
          >
            <PhoneIcon />
            <span>800-FIX (800-349)</span>
          </Link>

          <div className="flex items-center justify-center gap-5 md:min-h-[52px] md:justify-end">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                aria-label={item.label}
                className="text-sm font-bold uppercase tracking-[0.08em] text-white/90 transition hover:text-[#d7ff00]"
                href={item.href}
              >
                {item.short}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-4 py-4 md:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-4">
          <div className="flex items-center justify-between gap-4 lg:flex-none">
            <Link
              aria-label="Home Expertrs home"
              className="grid  shrink-0 place-items-center rounded-[10px] bg-[#7b2b8e] px-2 py-3 text-center text-[0.95rem] font-black uppercase leading-[0.9] tracking-[0.04em] text-[#d7ff00] shadow-[0_12px_24px_rgba(123,43,142,0.2)]"
              href="/"
            >
              <span>
                Homeexpert
              </span>
            </Link>

            <Link
              className="inline-flex rounded-[12px] bg-[#7b2b8e] px-4 py-3 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-[#69247a] lg:hidden"
              href="/quote"
            >
              Get A Free Quote
            </Link>
          </div>

          <nav
            aria-label="Primary"
            className="flex min-w-0 flex-1 items-center overflow-x-auto"
          >
            <ul className="flex min-w-max items-center gap-5 pr-2 text-[0.86rem] font-extrabold uppercase tracking-[0.13em] text-[#7b2b8e] lg:gap-9">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    className="inline-flex items-center gap-2 whitespace-nowrap transition hover:text-[#4f155f]"
                    href={item.href}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown ? <ChevronDownIcon /> : null}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3 md:flex-row md:items-center lg:flex-none">
          

            <Link
              className="hidden rounded-[12px] bg-[#7b2b8e] px-6 py-3 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-[#69247a] lg:inline-flex"
              href="/quote"
            >
              Get A Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
