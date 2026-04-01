import Link from "next/link";

const heroHighlights = [
  "AC, plumbing, electrical, and handyman support in one place",
  "Fast scheduling, transparent pricing, and vetted local technicians",
  "Designed for busy homeowners who want one reliable number to call",
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100vh-156px)] overflow-hidden bg-[#07111f]">
      <video
        aria-hidden="true"
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source
          src="https://www.pexels.com/download/video/6195515/"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.90)_0%,rgba(7,17,31,0.72)_38%,rgba(7,17,31,0.38)_62%,rgba(7,17,31,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,191,191,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(44,62,107,0.40),transparent_35%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-156px)] max-w-[1440px] items-end px-4 py-12 md:px-6 md:py-16">
        <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1.1fr)_360px] lg:items-end">
          <div className="max-w-[760px]">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#3BBFBF] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#3BBFBF]" />
              Home care without the chaos
            </div>

            <h1 className="max-w-[11ch] text-6xl font-semibold uppercase leading-[1.2] tracking-[-0.04em] text-white">
            Your home, managed by experts
            </h1>

            <p className="mt-6 max-w-[58ch] text-base leading-7 text-white/82 md:text-lg md:leading-8">
              From urgent repairs to planned maintenance, Home Expertrs brings
              trusted specialists to your door with speed, clarity, and a
              premium service experience that feels effortless.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                className="inline-flex min-h-14 items-center justify-center rounded-[16px] bg-[#3BBFBF] px-7 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_4px_16px_rgba(59,191,191,0.40)] transition hover:bg-[#2eacac]"
                href="/quote"
              >
                Book A Free Quote
              </Link>
              <Link
                className="inline-flex min-h-14 items-center justify-center rounded-[16px] border border-white/25 bg-white/10 px-7 text-sm font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition hover:bg-white/16"
                href="/services"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* <aside className="justify-self-end rounded-[28px] border border-white/12 bg-[rgba(240,246,252,0.94)] p-6 text-[#2C3E6B] shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-md">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#2C3E6B]">
              Why homeowners switch
            </p>
            <ul className="mt-5 space-y-4">
              {heroHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-[#2C3E6B]/10 pb-4 last:border-b-0 last:pb-0"
                >
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3BBFBF] text-xs font-black text-white">
                    +
                  </span>
                  <span className="text-sm font-semibold leading-6 text-[#2C3E6B]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-[20px] bg-[#2C3E6B] px-5 py-4 text-white">
              <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#3BBFBF]">
                Trusted at scale
              </p>
              <div className="mt-3 flex items-end justify-between gap-6">
                <div>
                  <p className="text-3xl font-black leading-none">2,000+</p>
                  <p className="mt-1 text-sm text-white/80">happy bookings</p>
                </div>
                <div>
                  <p className="text-3xl font-black leading-none">4.7/5</p>
                  <p className="mt-1 text-sm text-white/80">average rating</p>
                </div>
              </div>
            </div>
          </aside> */}
        </div>
      </div>
    </section>
  );
}
