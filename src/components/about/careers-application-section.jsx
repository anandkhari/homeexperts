"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

const perks = [
  "Competitive salary and benefits",
  "Opportunities for training and growth",
  "Supportive and collaborative environment",
  "Work with modern tools and an experienced team",
  "Exposure to real-world projects",
];

export default function CareersApplicationSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("form_type", "Job Application");
    data.append("_subject", "New Job Application - HomeExperts");

    try {
      const response = await fetch("https://formspree.io/f/mdayzvlb", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Application submitted successfully. Our team will get back to you shortly.",
        });
        form.reset();
      } else {
        setStatus({
          type: "error",
          message:
            "We couldn't submit your application right now. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#F8FAFC] px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-[#E5EAF3] bg-white p-6 shadow-sm md:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="relative h-[280px] overflow-hidden rounded-2xl lg:col-span-5 lg:h-[420px]">
              <Image
                src="/careers.jpg"
                alt="Home Experts team members at work"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 35vw, 100vw"
              />
            </div>

            <div className="lg:col-span-7">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#3BBFBF]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#3BBFBF] md:text-xs">
                <span className="h-0.5 w-6 bg-[#3BBFBF]" />
                Careers
              </span>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#2C3E6B] md:text-4xl">
                Join Our Team
              </h2>
              <p className="mt-4 text-[0.95rem] leading-[1.75] text-[#2C3E6B]/75">
                Home Experts is growing across the UAE, and we&apos;re looking for
                skilled professionals who take pride in quality work. If
                you&apos;re driven by teamwork, continuous learning, and real career
                growth, we&apos;d love to hear from you.
              </p>

              <div className="mt-6 rounded-2xl border border-gray-100 bg-[#F8FAFC] p-6 md:p-8">
                <h3 className="text-lg font-semibold text-[#2C3E6B]">
                  Why Work With Us
                </h3>
                <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {perks.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl bg-white px-4 py-3 text-sm font-medium text-[#2C3E6B]/85"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#3BBFBF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-10">
            <div className="max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3BBFBF] md:text-xs">
                Apply Now
              </span>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#2C3E6B] md:text-3xl">
                Apply Today
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5A6A8A]">
                Share your details below and tell us about your experience or
                role interest. Our recruitment team will review your application
                and get back to you.
              </p>
            </div>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="job-full-name"
                    className="mb-2 block text-[10px] font-black uppercase tracking-wider text-[#2C3E6B]"
                  >
                    Full Name
                  </label>
                  <input
                    id="job-full-name"
                    type="text"
                    name="full_name"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-[#2C3E6B] placeholder:text-[#5A6A8A]/70 transition-all focus:border-[#3BBFBF] focus:outline-none focus:ring-1 focus:ring-[#3BBFBF]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="job-email"
                    className="mb-2 block text-[10px] font-black uppercase tracking-wider text-[#2C3E6B]"
                  >
                    Email Address
                  </label>
                  <input
                    id="job-email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-[#2C3E6B] placeholder:text-[#5A6A8A]/70 transition-all focus:border-[#3BBFBF] focus:outline-none focus:ring-1 focus:ring-[#3BBFBF]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="job-phone"
                  className="mb-2 block text-[10px] font-black uppercase tracking-wider text-[#2C3E6B]"
                >
                  Phone Number
                </label>
                <input
                  id="job-phone"
                  type="tel"
                  name="phone_number"
                  placeholder="Your phone number"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-[#2C3E6B] placeholder:text-[#5A6A8A]/70 transition-all focus:border-[#3BBFBF] focus:outline-none focus:ring-1 focus:ring-[#3BBFBF]"
                />
              </div>

              <div>
                <label
                  htmlFor="job-message"
                  className="mb-2 block text-[10px] font-black uppercase tracking-wider text-[#2C3E6B]"
                >
                  Message / Experience / Role Applying For
                </label>
                <textarea
                  id="job-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your experience and the role you're applying for..."
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-[#2C3E6B] placeholder:text-[#5A6A8A]/70 transition-all focus:border-[#3BBFBF] focus:outline-none focus:ring-1 focus:ring-[#3BBFBF]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3BBFBF] px-8 py-3 text-xs font-black uppercase tracking-widest text-white transition-all hover:bg-[#2da9a9] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Apply Now"}
                {!isSubmitting && (
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                )}
              </button>

              {status.message ? (
                <p
                  className={`text-sm font-medium ${
                    status.type === "success"
                      ? "text-[#0B8E7A]"
                      : "text-[#C24141]"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
