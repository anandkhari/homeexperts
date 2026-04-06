"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineXMark,
  HiBars3,
  HiChevronDown,
} from "react-icons/hi2";

const navItems = [
  { href: "/services", label: "Services" },
  {
    href: "/packages",
    label: "Annual Contract",
    children: [
      { href: "/packages/residential", label: "Residential" },
      { href: "/packages/commercial", label: "Commercial" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_rgba(44,62,107,0.10)]">

      {/* ── Main bar ── */}
      <div className="border-b border-[#DDE3EE]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-4 py-0 md:px-6">

          {/* LEFT: Logo */}
          <Link
            aria-label="Home Maintenance Experts home"
            href="/"
            className="shrink-0 flex items-center py-3"
          >
            <img
              src="/Logo_Home_Clear.png"
              alt="Home Maintenance Experts"
              className="h-12 w-auto"
            />
          </Link>

          {/* CENTER: Primary nav links — desktop only */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex flex-1 items-center justify-center overflow-visible"
          >
            <ul className="flex items-center gap-8 text-[0.82rem] font-extrabold uppercase tracking-[0.13em] text-[#2C3E6B]">
              {navItems.map((item) => {
                if (!item.children) {
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group inline-flex items-center gap-1.5 whitespace-nowrap py-5 border-b-2 border-transparent transition-all hover:border-[#3BBFBF] hover:text-[#3BBFBF]"
                      >
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={item.label} className="group relative">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 whitespace-nowrap py-5 border-b-2 border-transparent transition-all hover:border-[#3BBFBF] hover:text-[#3BBFBF]"
                    >
                      <span>{item.label}</span>
                      <HiChevronDown className="text-xs transition-transform duration-200 group-hover:translate-y-0.5" />
                    </Link>

                    <div className="invisible pointer-events-none absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                      <div className="overflow-hidden rounded-2xl border border-[#DDE3EE] bg-white p-2 shadow-xl shadow-[#2C3E6B]/10">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-xl px-4 py-3 text-[0.74rem] font-extrabold uppercase tracking-[0.12em] text-[#2C3E6B] transition hover:bg-[#F3F8FB] hover:text-[#3BBFBF]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* RIGHT: CTAs + hamburger */}
          <div className="flex items-center gap-3">

            {/* Phone icon pill — always visible */}
            <Link
              href="/contact"
              aria-label="Call us"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#3BBFBF] text-white text-base transition hover:bg-[#2eacac]"
            >
              <HiOutlinePhone />
            </Link>

            {/* Quote pill — always visible */}
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-full bg-[#3BBFBF] px-5 py-2.5 text-[0.78rem] font-extrabold uppercase tracking-[0.1em] text-white transition hover:bg-[#2eacac]"
            >
              Get A Quote
            </Link>

            {/* Hamburger button — mobile/tablet only */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => {
                setMenuOpen((open) => {
                  const nextOpen = !open;
                  if (!nextOpen) {
                    setMobileExpanded(null);
                  }
                  return nextOpen;
                });
              }}
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border-2 border-[#2C3E6B] text-[#2C3E6B] transition-all duration-200 hover:bg-[#2C3E6B] hover:text-white"
            >
              {menuOpen ? (
                <HiOutlineXMark className="text-xl" />
              ) : (
                <HiBars3 className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu — smooth slide down ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-b border-[#DDE3EE] bg-white px-4 pb-6 pt-2 md:px-6">

          {/* Nav links list */}
          <ul className="flex flex-col divide-y divide-[#DDE3EE]">
            {navItems.map((item) => {
              if (!item.children) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => {
                        setMenuOpen(false);
                        setMobileExpanded(null);
                      }}
                      className="group flex items-center justify-between py-4 text-[0.85rem] font-extrabold uppercase tracking-[0.13em] text-[#2C3E6B] transition hover:text-[#3BBFBF]"
                    >
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              }

              const isExpanded = mobileExpanded === item.label;

              return (
                <li key={item.label} className="py-1">
                  <div className="flex items-center justify-between gap-3 py-3">
                    <Link
                      href={item.href}
                      onClick={() => {
                        setMenuOpen(false);
                        setMobileExpanded(null);
                      }}
                      className="text-[0.85rem] font-extrabold uppercase tracking-[0.13em] text-[#2C3E6B] transition hover:text-[#3BBFBF]"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.label} menu`}
                      onClick={() =>
                        setMobileExpanded((current) =>
                          current === item.label ? null : item.label
                        )
                      }
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#DDE3EE] text-[#2C3E6B] transition hover:border-[#3BBFBF] hover:text-[#3BBFBF]"
                    >
                      <HiChevronDown
                        className={`text-base transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isExpanded ? "grid-rows-[1fr] pb-3 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="rounded-2xl bg-[#F8FAFC] p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => {
                              setMenuOpen(false);
                              setMobileExpanded(null);
                            }}
                            className="block rounded-xl px-4 py-3 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-[#2C3E6B] transition hover:bg-white hover:text-[#3BBFBF]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Call CTA */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 rounded-full border-2 border-[#2C3E6B] px-5 py-3 text-[0.82rem] font-extrabold uppercase tracking-[0.1em] text-[#2C3E6B] transition hover:bg-[#2C3E6B] hover:text-white"
          >
            <HiOutlinePhone className="text-sm" />
            <span>800-FIX (800-349)</span>
          </Link>

          {/* Social icons */}
          <div className="mt-5 flex items-center justify-center gap-5">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="text-lg text-[#2C3E6B]/50 transition hover:text-[#3BBFBF] hover:scale-110"
              >
                {item.icon}
              </Link>
            ))}
          </div>

        </div>
      </div>

    </header>
  );
}
