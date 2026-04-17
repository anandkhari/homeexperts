"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
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
      { href: "/services/ac", label: "AC Servicing, Repair & Replacement" },
      {
        href: "/services/electrical-plumbing-services",
        label: "Electrical & Plumbing Services",
      },
      { href: "/services/handyman", label: "Handyman Services" },
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
      { href: "/services/painting", label: "Painting Works" },
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
      {
        href: "/services/pet-housing-solutions",
        label: "Pet Housing Solutions",
      },
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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "py-2 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          : "py-5 bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6">
        
        {/* LOGO */}
        <Link
          href="/"
          className="relative z-50 transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <img
            src="/Logo_Home_Clear.png"
            alt="Logo"
            className="h-10 md:h-11 w-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 px-4 py-2 text-[0.82rem] font-bold uppercase tracking-wider text-[#2C3E6B] transition-all duration-300 rounded-full group-hover:bg-[#3BBFBF]/10 group-hover:text-[#3BBFBF]"
                >
                  {item.label}
                  {item.children && (
                    <HiChevronDown className="text-[10px] transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {/* DROPDOWN */}
                {item.children && (
                  <div className="invisible absolute left-0 top-full pt-4 opacity-0 transition-all duration-300 transform scale-95 origin-top-left group-hover:visible group-hover:opacity-100 group-hover:scale-100">
                    
                    {/* SERVICES MEGA MENU */}
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
                                    className="block text-[0.78rem] font-bold uppercase tracking-wide text-[#2C3E6B] transition-all hover:text-[#3BBFBF] hover:translate-x-1"
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
                      /* NORMAL DROPDOWN (Packages) */
                      <div className="w-60 overflow-hidden rounded-2xl border border-[#DDE3EE] bg-white p-2 shadow-2xl shadow-[#2C3E6B]/10">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-xl px-4 py-2.5 text-[0.75rem] font-bold uppercase tracking-wide text-[#2C3E6B] transition-all hover:bg-[#F3F8FB] hover:translate-x-1 hover:text-[#3BBFBF]"
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

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="tel:+97142945885"
            className="relative hidden sm:inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#2C3E6B] px-7 py-2.5 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#3BBFBF] hover:shadow-lg active:scale-95"
          >
            <HiOutlinePhone className="text-sm" />
            <span className="relative z-10">Call Us</span>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F8FB] text-[#2C3E6B] transition-all duration-300 hover:bg-[#3BBFBF] hover:text-white"
          >
            {menuOpen ? <HiOutlineXMark size={20} /> : <HiBars3 size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen
            ? "max-h-[80vh] opacity-100 border-t border-[#DDE3EE] mt-2"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white px-6 py-8">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-gray-50 pb-4">
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-black text-[#2C3E6B]"
                >
                  {item.label}
                </Link>

                {item.label === "Services" && (
                  <div className="mt-3 space-y-4">
                    {item.children.map((group) => (
                      <div key={group.label}>
                        <p className="text-xs font-bold uppercase text-[#3BBFBF]">
                          {group.label}
                        </p>
                        <div className="mt-2 grid grid-cols-2 gap-2">
                          {group.items.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="text-xs font-bold uppercase text-[#2C3E6B]/70"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-6 text-[#2C3E6B]/40">
            <FaFacebookF className="hover:text-[#3BBFBF] cursor-pointer" />
            <FaInstagram className="hover:text-[#3BBFBF] cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#3BBFBF] cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
}