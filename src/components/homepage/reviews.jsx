import Link from "next/link";

const testimonials = [
  {
    name: "Thomas Shen",
    date: "March 25, 2026",
    body: "Alexander was on site for a quote to replace our AC unit, and he was clear, competent, and well informed about the scope. Would be happy to use Home Experts again.",
  },
  {
    name: "David Gabbott",
    date: "March 24, 2026",
    body: "Not the first time using Home Experts, and as always the staff were excellent. The job moved smoothly from start to finish, and the AC was ready before the heat kicked in.",
  },
  {
    name: "Ellis Stevenson",
    date: "March 19, 2026",
    body: "Thank you to the team at Home Experts for the great service. The technicians were friendly, polite, and careful in our home throughout the entire visit.",
  },
];

function GoogleLogo() {
  return (
    <span className="text-[1.1rem] font-black tracking-tight">
      <span className="text-[#4285f4]">G</span>
      <span className="text-[#ea4335]">o</span>
      <span className="text-[#fbbc05]">o</span>
      <span className="text-[#4285f4]">g</span>
      <span className="text-[#34a853]">l</span>
      <span className="text-[#ea4335]">e</span>
    </span>
  );
}

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? "text-[#3BBFBF]" : "text-[#DDE3EE]"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] px-4 py-20 md:px-6 md:py-28">

      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#3BBFBF]/6 blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#2C3E6B]/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto px-24 max-w-[1440px]">

        {/* ── Header ── */}
        <div className="mb-14 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#3BBFBF]" />
              <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-[#3BBFBF]">
                Client Reviews
              </p>
            </div>
            <h2 className="max-w-[20ch] text-4xl font-medium leading-[1.2] tracking-[-0.03em] text-[#2C3E6B] md:text-5xl">
              What our customers are saying
            </h2>
          </div>

          {/* Rating summary */}
          <div className="flex shrink-0 items-center gap-6 rounded-2xl border border-[#DDE3EE] bg-white px-7 py-5 shadow-[0_4px_24px_rgba(44,62,107,0.07)]">
            <div className="text-center">
              <p className="text-5xl font-black leading-none tracking-[-0.04em] text-[#2C3E6B]">4.7</p>
              <StarRating count={5} />
              <p className="mt-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.15em] text-[#2C3E6B]/40">
                out of 5
              </p>
            </div>
            <div className="h-14 w-px bg-[#DDE3EE]" />
            <div>
              <p className="text-[0.75rem] font-extrabold uppercase tracking-[0.15em] text-[#2C3E6B]/50">
                Powered by
              </p>
              <GoogleLogo />
              <p className="mt-1 text-[0.72rem] text-[#2C3E6B]/40">2,275 reviews</p>
            </div>
          </div>
        </div>

        {/* ── Review cards ── */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <article
              key={item.name}
              className="group flex flex-col rounded-2xl border border-[#DDE3EE] bg-white p-7 shadow-[0_4px_20px_rgba(44,62,107,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#3BBFBF]/40 hover:shadow-[0_12px_40px_rgba(44,62,107,0.12)]"
            >
              {/* Top row */}
              <div className="flex items-center justify-between">
                <StarRating count={5} />
                <GoogleLogo />
              </div>

              {/* Review body */}
              <p className="mt-5 flex-1 text-[0.92rem] leading-7 text-[#5A6A8A]">
                "{item.body}"
              </p>

              {/* Divider */}
              <div className="relative my-6 h-px w-full overflow-hidden bg-[#DDE3EE]">
                <div className="absolute h-full w-0 bg-gradient-to-r from-[#3BBFBF] to-[#2C3E6B] transition-all duration-500 group-hover:w-full" />
              </div>

              {/* Reviewer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar initials */}
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#2C3E6B] text-[0.7rem] font-black text-white">
                    {item.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-[0.85rem] font-extrabold text-[#2C3E6B]">{item.name}</p>
                    <p className="text-[0.72rem] text-[#8A9BB5]">{item.date}</p>
                  </div>
                </div>
                <Link
                  href="/reviews"
                  className="text-[#3BBFBF] transition hover:text-[#2eacac]"
                  aria-label="Read full review"
                >
                  <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* ── Bottom row ── */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 sm:flex-row">

          {/* Pagination */}
          <div className="flex items-center gap-2">
            <button
              aria-label="Previous"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#DDE3EE] bg-white text-[#2C3E6B] shadow-sm transition hover:border-[#2C3E6B] hover:bg-[#2C3E6B] hover:text-white"
            >
              ←
            </button>
            {["1", "2", "3", "...", "138"].map((p) => (
              <button
                key={p}
                className={`inline-flex h-10 min-w-[40px] items-center justify-center rounded-full px-2 text-[0.82rem] font-extrabold transition ${
                  p === "1"
                    ? "bg-[#2C3E6B] text-white"
                    : "text-[#2C3E6B]/50 hover:text-[#2C3E6B]"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              aria-label="Next"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#DDE3EE] bg-white text-[#2C3E6B] shadow-sm transition hover:border-[#2C3E6B] hover:bg-[#2C3E6B] hover:text-white"
            >
              →
            </button>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#3BBFBF] px-7 py-3 text-[0.82rem] font-extrabold uppercase tracking-[0.1em] text-white transition hover:bg-[#2eacac]"
          >
            Leave Us Feedback
          </Link>
        </div>

      </div>
    </section>
  );
}