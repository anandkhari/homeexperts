import Link from "next/link";
import Reveal from "@/components/motion/reveal";

const highlights = [
  "AC, plumbing, electrical & handyman — all under one roof",
  "Vetted, uniformed technicians with 10+ years average experience",
  "Serving all major communities across the UAE",
  "Transparent pricing with no hidden fees",
  "Operating 7 days a week, 8am – 8pm",
  "24/7 customer support hotline",
];

void highlights;

export default function About() {
  return (
    <section className="bg-white px-4 py-20 md:px-24 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* LEFT: Text content */}
          <Reveal y={28} blur={14}>
            <div>
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#3BBFBF]" />
              <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-[#3BBFBF]">
                About Us
              </p>
            </div>

            {/* Heading */}
            <h2 className="max-w-[18ch] text-4xl font-medium leading-[1.2] tracking-[-0.03em] text-[#2C3E6B] md:text-5xl">
              How can we assist you?
            </h2>

            {/* Body */}
            <div className="mt-6 space-y-4 text-[0.95rem] leading-7 text-[#2C3E6B]/65">
              <p>
                Everything from air conditioning units to plumbing and
                electrics. We've got you covered with expert property
                maintenance services designed for busy homeowners.
              </p>
              <p>
                With over 10 years of average experience in the region, our
                technicians cover all major communities across the UAE —
                delivering high quality results, professional support, and a
                stress-free experience every time.
              </p>
              <p>
                We guarantee you will have a seamless journey with Home Experts
                as your trusted service partner.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="animate-shine inline-flex items-center justify-center rounded-full bg-[#3BBFBF] px-7 py-3 text-[0.82rem] font-extrabold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-[#2eacac]"
              >
                Meet Our Team
              </Link>
              <Link
                href="/reviews"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#2C3E6B] px-7 py-3 text-[0.82rem] font-extrabold uppercase tracking-[0.1em] text-[#2C3E6B] transition hover:-translate-y-0.5 hover:bg-[#2C3E6B] hover:text-white"
              >
                Client Reviews
              </Link>
            </div>
            </div>
          </Reveal>

          {/* RIGHT: Image */}
          <Reveal delay={120} x={24} y={28} blur={16}>
            <div className="relative">
            {/* Decorative background block */}
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[28px] bg-[#2C3E6B]/6 md:-right-6 md:-top-6" />

            {/* Teal accent bar */}
            <div className="animate-float-soft absolute -left-3 top-10 h-24 w-1 rounded-full bg-[#3BBFBF]" />

            <div className="relative overflow-hidden rounded-[24px] shadow-[0_24px_64px_rgba(44,62,107,0.14)]">
              <img
                src="/about.jpg"
                alt="Home Experts team of professional technicians"
                className="animate-image-drift h-[520px] w-full object-cover object-top transition duration-700 hover:scale-[1.02]"
              />

              {/* Floating stat badge */}
              <div className="animate-float-soft-delayed absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-[#2C3E6B]/90 px-5 py-4 backdrop-blur-sm">
                <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-[#3BBFBF]">
                  Trusted since 2014
                </p>
                <div className="mt-2 flex items-end gap-5">
                  <div>
                    <p className="text-2xl font-black leading-none text-white">
                     12,588 +
                    </p>
                    <p className="mt-1 text-[0.7rem] text-white/60">
                      jobs completed
                    </p>
                  </div>
                  <div className="h-8 w-px bg-white/15" />
                  <div>
                    <p className="text-2xl font-black leading-none text-white">
                      4.8★
                    </p>
                    <p className="mt-1 text-[0.7rem] text-white/60">
                      google rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
