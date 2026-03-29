import Link from "next/link";

const heroHighlights = [
  "AC, plumbing, electrical, and handyman support in one place",
  "Fast scheduling, transparent pricing, and vetted local technicians",
  "Designed for busy homeowners who want one reliable number to call",
];

const trustStats = [
  { value: "4.7", label: "Rated From 2K+ Google Reviews" },
  { value: "427,132", label: "Jobs Since 2008" },
  { value: "47,219", label: "Customers" },
];

const services = [
  {
    title: "Annual Contracts",
    href: "/packages",
    accent: "from-[#6d1d7f]/80 via-[#7b2b8e]/45 to-transparent",
    surface:
      "bg-[radial-gradient(circle_at_20%_20%,rgba(215,255,0,0.18),transparent_24%),linear-gradient(135deg,#3a1645_0%,#7b2b8e_52%,#b385c3_100%)]",
  },
  {
    title: "AC Servicing",
    href: "/services/ac",
    accent: "from-[#6d1d7f]/80 via-[#7b2b8e]/45 to-transparent",
    surface:
      "bg-[radial-gradient(circle_at_80%_18%,rgba(215,255,0,0.22),transparent_22%),linear-gradient(135deg,#102c3f_0%,#3f6f8f_48%,#d4dde6_100%)]",
  },
  {
    title: "Electrical",
    href: "/services/electrical",
    accent: "from-[#6d1d7f]/80 via-[#7b2b8e]/45 to-transparent",
    surface:
      "bg-[radial-gradient(circle_at_76%_20%,rgba(255,216,77,0.22),transparent_18%),linear-gradient(135deg,#473217_0%,#7f5b29_50%,#dbbb86_100%)]",
  },
  {
    title: "Plumbing",
    href: "/services/plumbing",
    accent: "from-[#6d1d7f]/80 via-[#7b2b8e]/45 to-transparent",
    surface:
      "bg-[radial-gradient(circle_at_82%_20%,rgba(255,255,255,0.2),transparent_16%),linear-gradient(135deg,#0f4655_0%,#1c7b89_48%,#cbe8eb_100%)]",
  },
  {
    title: "Painting",
    href: "/services/painting",
    accent: "from-[#6d1d7f]/80 via-[#7b2b8e]/45 to-transparent",
    surface:
      "bg-[radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.28),transparent_22%),linear-gradient(135deg,#70635b_0%,#cbb7aa_50%,#f5eee6_100%)]",
  },
  {
    title: "Handyman",
    href: "/services/handyman",
    accent: "from-[#6d1d7f]/80 via-[#7b2b8e]/45 to-transparent",
    surface:
      "bg-[radial-gradient(circle_at_76%_20%,rgba(215,255,0,0.16),transparent_22%),linear-gradient(135deg,#3f2c1f_0%,#8b6141_50%,#d6bc9d_100%)]",
  },
  {
    title: "Duct Cleaning",
    href: "/services/other",
    accent: "from-[#6d1d7f]/80 via-[#7b2b8e]/45 to-transparent",
    surface:
      "bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.16),transparent_18%),linear-gradient(135deg,#222c32_0%,#52666f_48%,#d4dcdf_100%)]",
  },
  {
    title: "Coil Cleaning",
    href: "/services/other",
    accent: "from-[#6d1d7f]/80 via-[#7b2b8e]/45 to-transparent",
    surface:
      "bg-[radial-gradient(circle_at_24%_20%,rgba(215,255,0,0.2),transparent_20%),linear-gradient(135deg,#223433_0%,#497370_52%,#d7ebe7_100%)]",
  },
  {
    title: "Water Tank Cleaning",
    href: "/services/other",
    accent: "from-[#6d1d7f]/80 via-[#7b2b8e]/45 to-transparent",
    surface:
      "bg-[radial-gradient(circle_at_80%_22%,rgba(86,172,255,0.18),transparent_20%),linear-gradient(135deg,#2e3438_0%,#6a726f_50%,#d9d5cb_100%)]",
  },
];

const testimonials = [
  {
    name: "Thomas Shen",
    date: "March 25, 2026",
    body:
      "Alexander was on site for a quote to replace our AC unit, and he was clear, competent, and well informed about the scope. Would be happy to use Home Expertrs again.",
  },
  {
    name: "David Gabbott",
    date: "March 24, 2026",
    body:
      "Not the first time using Home Expertrs, and as always the staff were excellent. The job moved smoothly from start to finish, and the AC was ready before the heat kicked in.",
  },
  {
    name: "Ellis Stevenson",
    date: "March 19, 2026",
    body:
      "Thank you to the team at Home Expertrs for the great service. The technicians were friendly, polite, and careful in our home throughout the entire visit.",
  },
];

const blogPosts = [
  {
    title: "All-Inclusive AMC With AC Parts Included: All You Need to Know",
    date: "January 5, 2026",
    excerpt:
      "When it comes to keeping your home cool, safe, and stress-free, an Annual Maintenance Contract is one of the smartest choices you can make.",
    href: "/blog",
    surface:
      "bg-[radial-gradient(circle_at_74%_22%,rgba(255,255,255,0.24),transparent_18%),linear-gradient(135deg,#d8d5c8_0%,#c7d5bb_35%,#7b2b8e_100%)]",
  },
  {
    title: "AC Not Cooling? 7 Clues to Why Your Home Feels Like Summer",
    date: "December 18, 2025",
    excerpt:
      "When summer temperatures have you staying indoors, you need your home to feel comfortable and cool. Here is what to check first.",
    href: "/blog",
    surface:
      "bg-[radial-gradient(circle_at_22%_18%,rgba(255,204,0,0.3),transparent_16%),linear-gradient(135deg,#e4d8be_0%,#7b2b8e_44%,#3f5f79_100%)]",
  },
  {
    title: "Plugging Leaks: Common Plumbing Problems in Dubai Homes and How to Prevent Them",
    date: "November 29, 2025",
    excerpt:
      "Plumbing is one of the most important systems in any home. Spot the warning signs early and prevent small issues from turning into bigger repairs.",
    href: "/blog",
    surface:
      "bg-[radial-gradient(circle_at_70%_20%,rgba(215,255,0,0.22),transparent_18%),linear-gradient(135deg,#e9e1cf_0%,#7b2b8e_42%,#8a6d54_100%)]",
  },
  {
    title: "AC Not Cooling Properly? Signs Your AC Unit Needs Replacement",
    date: "August 15, 2025",
    excerpt:
      "Cool air should feel effortless. If your unit is struggling, these replacement signals can help you decide before the problem gets expensive.",
    href: "/blog",
    surface:
      "bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.22),transparent_18%),linear-gradient(135deg,#dbc7a9_0%,#4c8db8_38%,#7b2b8e_100%)]",
  },
];

function StarRow({ count = 5, muted = false }) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center gap-1.5 ${muted ? "text-[#d9d9df]" : "text-[#ffbf00]"}`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <span key={index} className="text-[2.55rem] leading-none">
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[calc(100vh-156px)] overflow-hidden bg-[#16071f]">
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

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,7,31,0.88)_0%,rgba(22,7,31,0.7)_38%,rgba(22,7,31,0.35)_62%,rgba(22,7,31,0.7)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,255,0,0.2),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(123,43,142,0.35),transparent_35%)]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-156px)] max-w-[1440px] items-end px-4 py-12 md:px-6 md:py-16">
          <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1.1fr)_360px] lg:items-end">
            <div className="max-w-[760px]">
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#d7ff00] backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#d7ff00]" />
                Home care without the chaos
              </div>

              <h1 className="max-w-[11ch] text-6xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white">
                Home Experts. One Call. Fully Handled.
              </h1>

              <p className="mt-6 max-w-[58ch] text-base leading-7 text-white/82 md:text-lg md:leading-8">
                From urgent repairs to planned maintenance, Home Expertrs brings
                trusted specialists to your door with speed, clarity, and a
                premium service experience that feels effortless.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  className="inline-flex min-h-14 items-center justify-center rounded-[16px] bg-[#d7ff00] px-7 text-sm font-extrabold uppercase tracking-[0.12em] text-[#24112f] transition hover:bg-[#c5ec00]"
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

            <aside className="justify-self-end rounded-[28px] border border-white/12 bg-[rgba(248,241,228,0.92)] p-6 text-[#2b1735] shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#7b2b8e]">
                Why homeowners switch
              </p>
              <ul className="mt-5 space-y-4">
                {heroHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-[#7b2b8e]/10 pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7b2b8e] text-xs font-black text-[#d7ff00]">
                      +
                    </span>
                    <span className="text-sm font-semibold leading-6 text-[#2f2136]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-[20px] bg-[#7b2b8e] px-5 py-4 text-white">
                <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#d7ff00]">
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
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#7b2b8e] px-4 py-14 text-white md:px-6 md:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-[1120px] text-center">
            <p className="text-[clamp(1.7rem,4vw,3.45rem)] font-black uppercase leading-[1.08] tracking-[0.03em] text-white">
              The Largest &amp; Most Trusted Independent Maintenance Company In
              Dubai
            </p>
            <div className="mx-auto mt-8 h-2 w-32 bg-[#d7ff00] md:w-56" />
          </div>

          <div className="mt-12 grid gap-10 text-center md:mt-16 md:grid-cols-3 md:gap-8">
            {trustStats.map((stat) => (
              <div key={stat.label} className="px-4">
                <p className="text-[clamp(3rem,7vw,5rem)] font-black leading-none tracking-[-0.04em] text-white">
                  {stat.value}
                </p>
                <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.12em] text-white/92 md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center md:justify-end">
            <Link
              className="inline-flex min-h-14 items-center justify-center bg-[#d7ff00] px-7 text-sm font-extrabold uppercase tracking-[0.16em] text-[#6d1d7f] transition hover:bg-[#c5ec00]"
              href="/quote"
            >
              Get A Free Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f0e7] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-[980px] text-center">
            <p className="text-[clamp(1.9rem,4.5vw,3.55rem)] font-black uppercase leading-[1.05] tracking-[0.03em] text-[#201227]">
              How Can We Help You Today?
            </p>
            <div className="mx-auto mt-5 h-2 w-24 bg-[#d7ff00] md:w-36" />
            <p className="mx-auto mt-6 max-w-[820px] text-sm leading-7 text-[#46344f]/80 md:text-base">
              Get the highest quality home maintenance services at the most
              cost-efficient rates. Rely on our highly trained and qualified
              technicians to get the job right the first time.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                className="group relative isolate block min-h-[260px] overflow-hidden bg-white shadow-[0_24px_50px_rgba(32,18,39,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(32,18,39,0.16)] md:min-h-[320px]"
                href={service.href}
              >
                <div
                  className={`absolute inset-0 ${service.surface} transition duration-500 group-hover:scale-[1.04]`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(32,18,39,0.08)_100%)]" />

                <div className="absolute left-[9%] top-[10%] h-[34%] w-[38%] rounded-[999px] border border-white/18 bg-white/8 blur-[2px]" />
                <div className="absolute right-[12%] top-[18%] h-[44%] w-[24%] rounded-[36px] border border-black/8 bg-black/8" />
                <div className="absolute bottom-[14%] left-[14%] h-[18%] w-[52%] rounded-[28px] border border-black/8 bg-black/10" />

                <div className="absolute inset-x-0 bottom-[26%]">
                  <div
                    className={`mx-0 bg-gradient-to-r ${service.accent} px-6 py-3 text-center`}
                  >
                    <span className="text-lg font-black uppercase tracking-[0.08em] text-white">
                      {service.title}
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-5 right-5 rounded-full border border-white/18 bg-white/12 px-4 py-2 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                  Explore
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 xl:grid-cols-[340px_minmax(0,1fr)] xl:gap-12">
            <div className="xl:pt-4">
              <div className="flex items-start gap-4">
                <p className="text-[4.5rem] font-black leading-none tracking-[-0.06em] text-[#130d17]">
                  4.7
                </p>
                <p className="pt-2 text-[2rem] font-medium leading-[1.05] text-[#130d17]">
                  Out of
                  <br />5 Stars
                </p>
              </div>

              <div className="mt-4 flex items-center gap-1">
                <StarRow />
                <span className="ml-1 text-[2.55rem] leading-none text-[#d9d9df]">
                  &#9733;
                </span>
              </div>

              <p className="mt-5 max-w-[260px] text-xl leading-9 text-[#1f1724]">
                Overall rating of 2,275 3rd-party reviews
              </p>

              <Link
                className="mt-8 inline-flex min-h-14 w-full max-w-[272px] items-center justify-center rounded-[4px] bg-[#7b2b8e] px-6 text-lg font-semibold text-white transition hover:bg-[#69247a]"
                href="/contact"
              >
                Leave Us Feedback
              </Link>

              <button
                className="mt-8 inline-flex items-center gap-4 text-left text-[1.05rem] font-medium text-[#24182a]"
                type="button"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ddd7e3] text-[#7b2b8e]">
                  &#9776;
                </span>
                <span>View Filters</span>
                <span className="text-[#7b2b8e]">^</span>
              </button>
            </div>

            <div>
              <div className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
                {testimonials.map((item) => (
                  <article
                    key={item.name}
                    className="flex min-h-[520px] flex-col rounded-[6px] border border-[#e8e2ed] bg-white p-8 shadow-[0_10px_30px_rgba(20,10,25,0.04)]"
                  >
                    <StarRow />
                    <p className="mt-4 text-[1.05rem] font-medium text-[#5c5663]">
                      5 out of 5 stars
                    </p>
                    <p className="mt-2 text-[2.4rem] font-black leading-none tracking-[-0.05em] text-[#4285f4]">
                      <span className="text-[#4285f4]">G</span>
                      <span className="text-[#ea4335]">o</span>
                      <span className="text-[#fbbc05]">o</span>
                      <span className="text-[#4285f4]">g</span>
                      <span className="text-[#34a853]">l</span>
                      <span className="text-[#ea4335]">e</span>
                    </p>

                    <div className="mt-8">
                      <p className="text-[1.15rem] font-bold text-[#6d676f]">
                        {item.name}
                      </p>
                      <p className="mt-1 text-[1rem] italic text-[#8e8894]">
                        {item.date}
                      </p>
                    </div>

                    <p className="mt-8 text-[1.05rem] leading-10 text-[#6d676f]">
                      {item.body}
                    </p>

                    <div className="mt-auto flex items-end justify-between pt-8">
                      <Link
                        className="text-[1.1rem] font-medium text-[#8a3da1] transition hover:text-[#6d1d7f]"
                        href="/contact"
                      >
                        Read More
                      </Link>
                      <span className="text-[1.9rem] leading-none text-[#8a3da1]">
                        &nearr;
                      </span>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center gap-6">
                <div className="flex items-center gap-5 text-[1.35rem] text-[#7a7380]">
                  <button
                    aria-label="Previous reviews"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#e6e0eb] bg-white shadow-[0_4px_14px_rgba(20,10,25,0.05)]"
                    type="button"
                  >
                    &larr;
                  </button>
                  <div className="flex items-center gap-5 text-lg">
                    <span className="font-bold text-[#130d17]">1</span>
                    <span className="text-[#8a3da1]">2</span>
                    <span className="text-[#8a3da1]">3</span>
                    <span className="text-[#8a3da1]">4</span>
                    <span className="text-[#8a3da1]">...</span>
                    <span className="text-[#8a3da1]">138</span>
                  </div>
                  <button
                    aria-label="Next reviews"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#e6e0eb] bg-white shadow-[0_4px_14px_rgba(20,10,25,0.05)]"
                    type="button"
                  >
                    &rarr;
                  </button>
                </div>

                <p className="text-xl text-[#1f1724]">
                  Powered by <span className="text-[#8a3da1]">GatherUp</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-[980px] text-center">
            <p className="text-[clamp(2rem,4.5vw,3.6rem)] font-black uppercase leading-none tracking-[0.03em] text-[#1c1221]">
              Our Blogs
            </p>
            <div className="mx-auto mt-6 h-2 w-28 bg-[#d7ff00] md:w-48" />
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {blogPosts.map((post) => (
              <article key={post.title} className="group">
                <Link className="block" href={post.href}>
                  <div className="relative h-[220px] overflow-hidden bg-[#efe9dd]">
                    <div
                      className={`absolute inset-0 ${post.surface} transition duration-500 group-hover:scale-[1.04]`}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(0,0,0,0.08)_100%)]" />
                    <div className="absolute bottom-0 left-0 h-[44%] w-[34%] bg-white/10" />
                    <div className="absolute bottom-[10%] right-[8%] h-[52%] w-[42%] rounded-[24px] bg-black/10" />
                  </div>
                </Link>

                <div className="pt-5">
                  <Link
                    className="text-[clamp(1.5rem,2.3vw,2.15rem)] font-black leading-[1.16] tracking-[-0.03em] text-[#7b2b8e] transition hover:text-[#5a1c6a]"
                    href={post.href}
                  >
                    {post.title}
                  </Link>
                  <p className="mt-3 text-sm font-medium text-[#8a3da1]">
                    {post.date}
                  </p>
                  <p className="mt-5 text-[1.05rem] leading-9 text-[#6c6570]">
                    {post.excerpt}
                  </p>
                  <Link
                    className="mt-8 inline-flex text-[1.1rem] font-bold text-[#7b2b8e] transition hover:text-[#5a1c6a]"
                    href={post.href}
                  >
                    Read More &raquo;
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              className="inline-flex min-h-14 items-center justify-center bg-[#7b2b8e] px-10 text-lg font-extrabold uppercase tracking-[0.06em] text-white transition hover:bg-[#69247a]"
              href="/blog"
            >
              Visit Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
