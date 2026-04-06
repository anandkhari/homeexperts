import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#07111f]">
      <img
        aria-hidden="true"
        src="https://images.pexels.com/photos/6196238/pexels-photo-6196238.jpeg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.70)_0%,rgba(7,17,31,0.50)_38%,rgba(7,17,31,0.20)_62%,rgba(7,17,31,0.50)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,191,191,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(44,62,107,0.40),transparent_35%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1440px] items-center px-4 py-12 md:px-6 md:py-16">
        <div className="w-full">
          <div className="max-w-[760px]">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 text-[0.68rem] sm:text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#3BBFBF] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#3BBFBF]" />
              Home care without the chaos
            </div>

            <h1 className="max-w-2xl text-4xl sm:text-5xl md:text-6xl font-semibold uppercase leading-[1.2] tracking-[-0.04em] text-white">
              Your home, managed by experts
            </h1>

            <p className="mt-6 max-w-[58ch] text-sm leading-7 text-white/80 sm:text-base md:text-lg md:leading-8">
              From urgent repairs to planned maintenance, Home Experts brings
              trusted specialists to your door with speed, clarity, and a
              premium service experience that feels effortless.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                className="inline-flex min-h-12 sm:min-h-14 items-center justify-center rounded-[16px] bg-[#3BBFBF] px-6 sm:px-7 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_4px_16px_rgba(59,191,191,0.40)] transition hover:bg-[#2eacac]"
                href="/quote"
              >
                Book A Free Quote
              </Link>
              <Link
                className="inline-flex min-h-12 sm:min-h-14 items-center justify-center rounded-[16px] border border-white/25 bg-white/10 px-6 sm:px-7 text-sm font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition hover:bg-white/20"
                href="/services"
              >
                Explore Services
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}