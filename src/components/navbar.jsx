"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import {
  HiOutlineXMark,
  HiBars3,
  HiChevronDown,
  HiOutlinePhone,
} from "react-icons/hi2";

const serviceNavChildren = [
  {
    label: "Emergency & Repairs",
    items: [
      {
        href: "/services/emergency-maintenance-services",
        label: "Emergency Maintenance Services",
      },
      {
        href: "/services/ac-servicing-repair-replacement",
        label: "AC Servicing, Repair & Replacement",
      },
      {
        href: "/services/electrical-plumbing-services",
        label: "Electrical & Plumbing Services",
      },
      { href: "/services/handyman-services", label: "Handyman Services" },
    ],
  },
  {
    label: "Maintenance & Cleaning",
    items: [
      {
        href: "/services/ac-duct-coil-cleaning",
        label: "AC Duct & Coil Cleaning",
      },
      { href: "/services/water-tank-cleaning", label: "Water Tank Cleaning" },
      { href: "/services/pestcontrol", label: "Pest Control" },
      { href: "/services/waterproofing", label: "Waterproofing" },
    ],
  },
  {
    label: "Renovation & Interiors",
    items: [
      { href: "/services/renovation-works", label: "Renovation Works" },
      { href: "/services/painting-works", label: "Painting Works" },
      {
        href: "/services/glass-aluminium-carpentry-works",
        label: "Glass, Aluminium & Carpentry Works",
      },
      {
        href: "/services/landscaping-hardscaping",
        label: "Landscaping & Hardscaping",
      },
    ],
  },
  {
    label: "Smart & Sustainable Living",
    items: [
      {
        href: "/services/smart-home-installation",
        label: "Smart Home Installation",
      },
      {
        href: "/services/solar-panel-installation-maintenance",
        label: "Solar Panel Installation & Maintenance",
      },
      { href: "/services/pet-housing-solutions", label: "Pet Housing Solutions" },
    ],
  },
];

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", children: serviceNavChildren },
  {
    href: "/packages",
    label: "Annual Contract",
    children: [
      { href: "/packages/residential", label: "Residential" },
      { href: "/packages/commercial", label: "Commercial" },
      { href: "/packages/events", label: "Event & Activation" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/share/1AzprnA2DP/",
    label: "Facebook",
    Icon: FaFacebookF,
  },
  {
    href: "https://www.instagram.com/homeexpertsuae?igsh=aW84Zm5saDM2aWZn",
    label: "Instagram",
    Icon: FaInstagram,
  },
  {
    href: "https://www.linkedin.com/company/home_experts/",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSection(null);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-white/90 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md"
          : "bg-white py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6">
        {/* LOGO */}
        <Link
          href="/"
          className="relative z-50 transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <Image
            src="/Logo_Home_Clear.png"
            alt="Logo"
            width={160}
            height={44}
            className="h-10 w-auto md:h-11"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.82rem] font-bold uppercase tracking-wider text-[#2C3E6B] transition-all duration-300 group-hover:bg-[#3BBFBF]/10 group-hover:text-[#3BBFBF]"
                >
                  {item.label}
                  {item.children && (
                    <HiChevronDown className="text-[10px] transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-0 top-full origin-top-left scale-95 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
                    {item.label === "Services" ? (
                      <div className="w-[720px] rounded-2xl border border-[#DDE3EE] bg-white p-6 shadow-2xl shadow-[#2C3E6B]/10">
                        <div className="grid grid-cols-2 gap-8">
                          {item.children.map((group) => (
                            <div key={group.label}>
                              <p className="mb-3 text-[0.7rem] font-black uppercase tracking-[0.18em] text-[#3BBFBF]">
                                {group.label}
                              </p>

                              <div className="space-y-2">
                                {group.items.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className="block text-[0.78rem] font-bold uppercase tracking-wide text-[#2C3E6B] transition-all hover:translate-x-1 hover:text-[#3BBFBF]"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="w-60 overflow-hidden rounded-2xl border border-[#DDE3EE] bg-white p-2 shadow-2xl shadow-[#2C3E6B]/10">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-xl px-4 py-2.5 text-[0.75rem] font-bold uppercase tracking-wide text-[#2C3E6B] transition-all hover:translate-x-1 hover:bg-[#F3F8FB] hover:text-[#3BBFBF]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA + MOBILE TOGGLE */}
        <div className="flex items-center gap-3">
          <Link
            href="tel:+97142945885"
            className="relative hidden items-center justify-center gap-2 overflow-hidden rounded-full bg-[#2C3E6B] px-7 py-2.5 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#3BBFBF] hover:shadow-lg active:scale-95 sm:inline-flex"
          >
            <HiOutlinePhone className="text-sm" />
            <span className="relative z-10">Call Us</span>
          </Link>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F8FB] text-[#2C3E6B] transition-all duration-300 hover:bg-[#3BBFBF] hover:text-white lg:hidden"
          >
            {menuOpen ? <HiOutlineXMark size={20} /> : <HiBars3 size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* backdrop */}
        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-[420px] transform bg-white shadow-2xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col">
            {/* top bar */}
            <div className="flex items-center justify-between border-b border-[#EEF2F6] px-6 py-4">
              <Link href="/" onClick={closeMenu} className="block">
                <Image
                  src="/Logo_Home_Clear.png"
                  width={130}
                  height={40}
                  alt="Logo"
                  className="h-9 w-auto"
                />
              </Link>

              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F8FB] text-[#2C3E6B]"
              >
                <HiOutlineXMark size={22} />
              </button>
            </div>

            {/* content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-6">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-[#F2F4F7] pb-5">
                    {!item.children ? (
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="text-lg font-black text-[#2C3E6B]"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setOpenSection((prev) =>
                              prev === item.label ? null : item.label
                            )
                          }
                          className="flex w-full items-center justify-between text-left text-lg font-black text-[#2C3E6B]"
                        >
                          <span>{item.label}</span>
                          <HiChevronDown
                            className={`transition-transform duration-300 ${
                              openSection === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {openSection === item.label && (
                          <div className="mt-4 space-y-5">
                            {item.label === "Services" ? (
                              item.children.map((group) => (
                                <div key={group.label}>
                                  <p className="mb-2 text-[0.72rem] font-black uppercase tracking-[0.18em] text-[#3BBFBF]">
                                    {group.label}
                                  </p>

                                  <div className="space-y-2">
                                    {group.items.map((child) => (
                                      <Link
                                        key={child.href}
                                        href={child.href}
                                        onClick={closeMenu}
                                        className="block rounded-lg py-1 text-sm font-semibold text-[#2C3E6B]/80 transition-colors hover:text-[#3BBFBF]"
                                      >
                                        {child.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div className="space-y-2">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={closeMenu}
                                    className="block rounded-lg py-1 text-sm font-semibold text-[#2C3E6B]/80 transition-colors hover:text-[#3BBFBF]"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* mobile CTAs */}
              <div className="mt-8 space-y-3">
                <Link
                  href="tel:+97142945885"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center rounded-full bg-[#2C3E6B] py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition-all hover:bg-[#3BBFBF]"
                >
                  Call Now
                </Link>

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center rounded-full border border-[#2C3E6B] py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#2C3E6B] transition-all hover:border-[#3BBFBF] hover:text-[#3BBFBF]"
                >
                  Book Service
                </Link>
              </div>

              {/* social */}
              <div className="mt-8 flex items-center justify-center gap-6 pb-6 text-[#2C3E6B]/45">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="transition-colors hover:text-[#3BBFBF]"
                  >
                    <social.Icon className="cursor-pointer" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
