"use client";

import Link from "next/link";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube 
} from "react-icons/fa6";
import { HiOutlineArrowRight, HiOutlinePhone, HiOutlineEnvelope, HiOutlineClock } from "react-icons/hi2";

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
      { label: "About Us", href: "/about" },
      { label: "Our Blog", href: "/blog" },
      { label: "AMC Packages", href: "/packages" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Get a Quote", href: "/quote" },
      { label: "FAQs", href: "/legal" },
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
    <footer className="bg-white text-[#0A192F]">
      {/* ── Top CTA Section: High Impact ── */}
      <div className="relative overflow-hidden bg-[#0A192F] py-16 md:py-24">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#26C6DA] opacity-[0.08] blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block text-[#26C6DA] text-xs font-black uppercase tracking-[0.3em] mb-6">
                Premium Maintenance
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.95] tracking-tighter uppercase max-w-[15ch]">
                Ready to <span className="text-[#26C6DA]">Fix</span> what is slowing you down?
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                href="/quote"
                className="group flex items-center justify-center gap-3 bg-[#26C6DA] text-[#0A192F] px-8 py-5 rounded-2xl font-black uppercase tracking-wider text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(38,198,218,0.2)]"
              >
                Book a Free Quote
                <HiOutlineArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center px-8 py-5 rounded-2xl border border-white/20 text-white font-black uppercase tracking-wider text-sm transition-all hover:bg-white/5"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer Links ── */}
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="inline-block group">
              <img src="/Logo_Home_Clear.png" alt="Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-[#5A6A8A] text-lg leading-relaxed max-w-md">
              Reliable home maintenance across Dubai. We focus on the details so you can enjoy your home without the stress.
            </p>
            
            {/* Contact Pills */}
            <div className="space-y-3">
              <div className="flex items-center gap-4 text-[#0A192F]">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#26C6DA]">
                  <HiOutlinePhone size={20} />
                </div>
                <span className="font-bold text-lg">800-FIX (800-349)</span>
              </div>
              <div className="flex items-center gap-4 text-[#0A192F]">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#26C6DA]">
                  <HiOutlineEnvelope size={20} />
                </div>
                <span className="font-bold">hello@homeexperts.com</span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid gap-10 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-black uppercase tracking-[0.25em] text-[#0A192F] mb-8">
                  {col.title}
                </h3>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href} 
                        className="text-[#5A6A8A] font-medium transition-all hover:text-[#26C6DA] hover:translate-x-1 inline-block"
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

        {/* ── Bottom Bar ── */}
        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm font-medium text-[#5A6A8A]">
            &copy; {new Date().getFullYear()} Home Experts Dubai. Built for the modern home.
          </p>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link 
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-[#0A192F] transition-all hover:bg-[#26C6DA] hover:border-[#26C6DA] hover:text-white hover:-translate-y-1"
                aria-label={social.label}
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