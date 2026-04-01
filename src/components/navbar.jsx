"use client";

import Link from "next/link";
// Using Hi2 for UI and Fa6 for Social Brands (standard practice)
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube 
} from "react-icons/fa6";
import { 
  HiOutlinePhone, 
  HiChevronDown, 
  HiOutlineEnvelope 
} from "react-icons/hi2";

const navItems = [
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/packages", label: "Annual Contract", hasDropdown: true },
  { href: "/about", label: "About", hasDropdown: true },
  { href: "/legal", label: "FAQ" },
  { href: "/blog", label: "How We Compare" },
  { href: "/blog", label: "Blog" },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: <FaFacebookF /> },
  { label: "Instagram", href: "#", icon: <FaInstagram /> },
  { label: "LinkedIn", href: "#", icon: <FaLinkedinIn /> },
  { label: "YouTube", href: "#", icon: <FaYoutube /> },
  { label: "Email", href: "mailto:hello@homeexperts.com", icon: <HiOutlineEnvelope /> },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 shadow-[0_1px_0_rgba(44,62,107,0.10)]">
      {/* ── Top bar: navy background ── */}
      <div className="bg-[#2C3E6B] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-4 py-3 text-sm font-semibold tracking-[0.12em] uppercase md:flex-row md:items-center md:justify-between md:px-6 md:py-0">
          
          {/* Phone CTA — teal pill */}
          <Link
            className="inline-flex min-h-[52px] items-center justify-center gap-3 bg-[#3BBFBF] px-6 text-center font-extrabold tracking-[0.08em] text-white transition hover:bg-[#2eacac]"
            href="/contact"
          >
            <HiOutlinePhone className="text-lg" />
            <span>800-FIX (800-349)</span>
          </Link>

          {/* Social links */}
          <div className="flex items-center justify-center gap-5 md:min-h-[52px] md:justify-end">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                aria-label={item.label}
                className="text-lg text-white/80 transition hover:text-[#3BBFBF] hover:scale-110"
                href={item.href}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main nav bar: white background ── */}
      <div className="border-b border-[#DDE3EE] bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-4 py-4 md:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-4">

          {/* Logo + mobile CTA */}
          <div className="flex items-center justify-between gap-4 lg:flex-none">
            <Link aria-label="Home Maintenance Experts home" className="shrink-0" href="/">
              <img
                src="/Logo_Home_Clear.png"
                alt="Home Maintenance Experts"
                className="h-12 w-auto"
              />
            </Link>

            <Link
              className="inline-flex rounded-[8px] bg-[#3BBFBF] px-4 py-3 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-[#2eacac] lg:hidden"
              href="/quote"
            >
              Get A Quote
            </Link>
          </div>

          {/* Nav links */}
          <nav aria-label="Primary" className="flex min-w-0 flex-1 items-center overflow-x-auto">
            <ul className="flex min-w-max items-center gap-5 pr-2 text-[0.86rem] font-extrabold uppercase tracking-[0.13em] text-[#2C3E6B] lg:gap-9">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    className="group inline-flex items-center gap-2 whitespace-nowrap transition hover:text-[#3BBFBF]"
                    href={item.href}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <HiChevronDown className="text-sm transition-transform group-hover:translate-y-0.5" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center lg:flex-none">
            <Link
              className="hidden rounded-[8px] bg-[#3BBFBF] px-6 py-3 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_2px_8px_rgba(59,191,191,0.30)] transition hover:bg-[#2eacac] lg:inline-flex"
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