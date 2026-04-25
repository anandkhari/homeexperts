"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Phone,
  Mail,
  Clock,
  Check,
  Star,
  ArrowRight,
  Home,
  ChevronDown,
  MapPin,
  Navigation,
  Map as MapIcon,
  ShieldCheck,
} from "lucide-react";
import PageHero from "@/components/pageshero";
import { ALL_SERVICES } from "@/data/all-services";

const mainServices = [
  "Annual Contract",
  ...ALL_SERVICES.map((service) => service.title),
 
].filter((service, index, services) => services.indexOf(service) === index);

const acSubServices = [
  "Standard AC Service",
  "Express AC Repair",
  "AC Installation/Replacement",
  "Duct & Vent Cleaning",
];

export default function ContactQuotePage() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedSubService, setSelectedSubService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mdayzvlb", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        toast.success("Form submitted successfully! Our team will contact you soon.");
        form.reset();
        setSelectedService("");
        setSelectedSubService("");
      } else {
        toast.error("Oops! There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Home Experts",
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
            mainEntity: {
              "@type": "HomeAndConstructionBusiness",
              name: "Home Experts",
              telephone: "+971554753102",
              email: "helpdesk@homeexperts.ae",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Warehouse No 56, Office No 2B, Jebel Ali Industrial First",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
            },
          }),
        }}
      />
      <PageHero
        title="Contact Us"
        // titleAccent="Home Experts"
        subtitle="Have a maintenance emergency, need a routine service, or looking for an annual contract? Reach out to our dedicated team today. We guarantee a rapid 60-minute response time during business hours."
        image="/aivan2.png"
        imageAlt="Friendly Home Experts customer support representative ready to assist"
      />

      {/* CONTACT FORM & SIDEBAR SECTION */}
      <section className="min-h-screen bg-[#F8FAFC] px-4 py-12 md:px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            {/* LEFT COLUMN: THE FORM */}
            <div className="relative overflow-hidden rounded-sm border border-gray-100 bg-white p-8 shadow-xl lg:col-span-8">
              <div className="absolute left-0 top-0 h-1.5 w-full bg-[#3BBFBF]" />

              <div className="mb-10 text-center">
                <div className="mb-2 flex items-center justify-center gap-3 text-[#3BBFBF]">
                  <div className="h-px w-6 bg-[#3BBFBF]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Free Quote Request
                  </span>
                  <div className="h-px w-6 bg-[#3BBFBF]" />
                </div>
                <h1 className="text-3xl font-semibold text-[#2C3E6B] md:text-5xl">
                  Tell us what you need
                </h1>
                <p className="mt-3 text-sm font-medium text-[#5A6A8A]">
                  We&apos;ll get back to you within 60 minutes during business
                  hours.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] font-black uppercase tracking-wider text-[#2C3E6B]">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="First Name"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-[#2C3E6B] placeholder:text-[#5A6A8A]/70 transition-all focus:border-[#3BBFBF] focus:outline-none focus:ring-1 focus:ring-[#3BBFBF]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-black uppercase tracking-wider text-[#2C3E6B]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Last Name"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-[#2C3E6B] placeholder:text-[#5A6A8A]/70 transition-all focus:border-[#3BBFBF] focus:outline-none focus:ring-1 focus:ring-[#3BBFBF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] font-black uppercase tracking-wider text-[#2C3E6B]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email Address"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-[#2C3E6B] placeholder:text-[#5A6A8A]/70 transition-all focus:border-[#3BBFBF] focus:outline-none focus:ring-1 focus:ring-[#3BBFBF]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-black uppercase tracking-wider text-[#2C3E6B]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Phone Number"
                      className="w-full rounded-xl border border-[#3BBFBF] bg-[#F0FDFD] px-4 py-3 text-sm font-medium text-[#2C3E6B] placeholder:text-[#5A6A8A]/70 focus:outline-none focus:ring-1 focus:ring-[#3BBFBF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="relative">
                    <label className="mb-2 block text-[10px] font-black uppercase tracking-wider text-[#2C3E6B]">
                      What service do you require?
                    </label>
                    <div className="group relative">
                      <select
                        name="service"
                        required
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-[#2C3E6B] transition-all focus:border-[#3BBFBF] focus:outline-none focus:ring-1 focus:ring-[#3BBFBF]"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {mainServices.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute inset-y-0 right-4 my-auto h-4 w-4 text-[#2C3E6B]/40 transition-colors group-focus-within:text-[#3BBFBF]" />
                    </div>
                  </div>

                 
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-black uppercase tracking-wider text-[#2C3E6B]">
                    Additional Details
                  </label>
                  <textarea
                    name="details"
                    rows={3}
                    placeholder="Tell us more about the job..."
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-[#2C3E6B] placeholder:text-[#5A6A8A]/70 focus:border-[#3BBFBF] focus:outline-none focus:ring-1 focus:ring-[#3BBFBF]"
                  />
                </div>

                <div className="w-full md:w-1/2">
                  <label className="mb-2 block text-[10px] font-black uppercase tracking-wider text-[#2C3E6B]">
                    Promo Code
                  </label>
                  <input
                    type="text"
                    name="promoCode"
                    placeholder="Coupon Code (optional)"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-[#2C3E6B] placeholder:text-[#5A6A8A]/70 focus:border-[#3BBFBF] focus:outline-none focus:ring-1 focus:ring-[#3BBFBF]"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#3BBFBF] py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-[#2da9a9] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                  {!isSubmitting && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                </button>
              </form>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-gray-100 pt-6 text-[10px] font-bold text-[#5A6A8A]">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span>4.8/5 from 2,200+ Google reviews</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-3 w-3 text-[#3BBFBF]" />
                  <span>No call-out fees</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-3 w-3 text-[#3BBFBF]" />
                  <span>Response within 60 minutes</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: SIDEBAR */}
            <div className="relative overflow-hidden rounded-sm bg-[#2C3E6B] p-8 text-white shadow-2xl lg:col-span-4">
              <div className="absolute -right-12 -top-12 h-32 w-32 bg-[#3BBFBF] opacity-20 blur-[60px]" />

              <p className="mb-8 text-sm font-medium text-white/70">
                UAE&apos;s premium home maintenance partner since 2008.
              </p>

              <div className="mb-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3BBFBF]/20 text-[#3BBFBF]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold">+971 554753102 </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3BBFBF]/20 text-[#3BBFBF]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold">
                     helpdesk@homeexperts.ae
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3BBFBF]/20 text-[#3BBFBF]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="text-xs font-bold leading-tight">
                    Mon—Sun 24/7
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3BBFBF]/20 text-[#3BBFBF]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-sm font-bold">Home Experts</span>
                    <span className="mt-1 text-xs font-medium text-white/70">
                      Warehouse No 56, Office No – 2B, Jebel Ali Industrial First, Dubai, UAE
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-8 h-px w-full bg-white/10" />

              <h3 className="mb-6 text-[11px] font-black uppercase tracking-widest text-[#3BBFBF]">
                Why choose us?
              </h3>
              <ul className="mb-10 space-y-4">
                {[
                  "100% transparent pricing — no hidden fees",
                  "Trusted in the UAE since 2014",
                  "500,000+ jobs completed",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-xs font-medium text-white/90"
                  >
                    <Check className="mt-0.5 h-4 w-4 text-[#3BBFBF]" />
                    {text}
                  </li>
                ))}
              </ul>

          
            </div>
          </div>
        </div>
      </section>

      {/* MAP & LOCATION SECTION */}
          <div className="h-[400px] w-full border-t transition-all duration-700">
            <iframe
              src="https://maps.google.com/maps?q=25%C2%B000'41.7%22N%2055%C2%B007'55.6%22E&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <ToastContainer position="bottom-right" />
    </>
  );
}
