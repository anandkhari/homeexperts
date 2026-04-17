"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "AC Servicing", href: "/services/ac" },
      { label: "Electrical", href: "/services/electrical" },
      { label: "Plumbing", href: "/services/plumbing" },
      { label: "Handyman", href: "/services/handyman" },
      { label: "Water Tank Cleaning", href: "/services/water-tank-cleaning" },
      { label: "Duct & Coil Cleaning", href: "/services/ac-duct-coil-cleaning" },
      { label: "Pet Housing Solutions", href: "/services/pet-housing-solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Blog", href: "/blog" },
      { label: "Services", href: "/services" },
      { label: "AMC Packages", href: "/packages" },
      { label: "Contact", href: "/contact" },
      
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Get a Quote", href: "/contact" },
    
      { label: "Service Areas", href: "/services" },
      { label: "Privacy Policy", href: "/legal" },
    ],
  },
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "#", label: "Facebook" },
  { icon: <FaInstagram />, href: "#", label: "Instagram" },
  { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
  { icon: <FaYoutube />, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2C3E6B]">
      <div className="mx-auto max-w-[1440px] px-4 pb-10 pt-16 md:px-6 md:pt-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr]">

          {/* Brand column */}
          <div className="space-y-7">
            {/* <Link href="/">
              <img
                src="/Logo_Home_clear.png" // Ensure you have a light/white version for dark background
                alt="Home Maintenance Experts"
                className="h-11 w-auto brightness-0 invert" // Temporary fix if you only have a dark logo
              />
            </Link> */}

            <p className="max-w-sm text-[0.92rem] leading-7 text-white/70">
              Reliable home maintenance across the UAE. We handle the details so
              you can enjoy your home without the stress.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+97142945885"
                className="group flex items-center gap-3 text-[0.88rem] font-semibold text-white transition hover:text-[#3BBFBF]"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#3BBFBF] transition group-hover:border-[#3BBFBF] group-hover:bg-[#3BBFBF] group-hover:text-white">
                  <HiOutlinePhone className="text-sm" />
                </span>
                +971 4 294 5885
              </a>
              <a
                href="mailto:helpdesk@homeexperts.ae"
                className="group flex items-center gap-3 text-[0.88rem] font-semibold text-white transition hover:text-[#3BBFBF]"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#3BBFBF] transition group-hover:border-[#3BBFBF] group-hover:bg-[#3BBFBF] group-hover:text-white">
                  <HiOutlineEnvelope className="text-sm" />
                </span>
               helpdesk@homeexperts.ae
              </a>
            </div>
          </div>

          {/* Links grid */}
          <div className="grid gap-10 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <div className="mb-6 flex items-center gap-2">
                  <span className="h-px w-5 bg-[#3BBFBF]" />
                  <h3 className="text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-[#3BBFBF]">
                    {col.title}
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-block text-[0.88rem] font-medium text-white/60 transition-all duration-200 hover:translate-x-1 hover:text-[#3BBFBF]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-[0.8rem] font-medium text-white/30">
            &copy; {new Date().getFullYear()} Home Experts UAE. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#3BBFBF] hover:bg-[#3BBFBF] hover:text-white"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
