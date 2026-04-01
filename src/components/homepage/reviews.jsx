import Link from "next/link";

function Stars({ count = 5, muted = false }) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center gap-1.5 ${muted ? "text-[#d9d9df]" : "text-[#3BBFBF]"}`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <span key={index} className="text-[2.55rem] leading-none">
          &#9733;
        </span>
      ))}
    </div>
  );
}

const testimonials = [
  {
    name: "Thomas Shen",
    date: "March 25, 2026",
    body: "Alexander was on site for a quote to replace our AC unit, and he was clear, competent, and well informed about the scope. Would be happy to use Home Expertrs again.",
  },
  {
    name: "David Gabbott",
    date: "March 24, 2026",
    body: "Not the first time using Home Expertrs, and as always the staff were excellent. The job moved smoothly from start to finish, and the AC was ready before the heat kicked in.",
  },
  {
    name: "Ellis Stevenson",
    date: "March 19, 2026",
    body: "Thank you to the team at Home Expertrs for the great service. The technicians were friendly, polite, and careful in our home throughout the entire visit.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 xl:grid-cols-[340px_minmax(0,1fr)] xl:gap-12">
          <div className="xl:pt-4">
            <div className="flex items-start gap-4">
              <p className="text-[4.5rem] font-black leading-none tracking-[-0.06em] text-[#2C3E6B]">
                4.7
              </p>
              <p className="pt-2 text-[2rem] font-medium leading-[1.05] text-[#2C3E6B]">
                Out of
                <br />5 Stars
              </p>
            </div>

            <div className="mt-4 flex items-center gap-1">
              <Stars />
              <span className="ml-1 text-[2.55rem] leading-none text-[#d9d9df]">
                &#9733;
              </span>
            </div>

            <p className="mt-5 max-w-[260px] text-xl leading-9 text-[#2C3E6B]">
              Overall rating of 2,275 3rd-party reviews
            </p>

            <Link
              className="mt-8 inline-flex min-h-14 w-full max-w-[272px] items-center justify-center rounded-[8px] bg-[#2C3E6B] px-6 text-lg font-semibold text-white transition hover:bg-[#3D5490]"
              href="/contact"
            >
              Leave Us Feedback
            </Link>

            <button
              className="mt-8 inline-flex items-center gap-4 text-left text-[1.05rem] font-medium text-[#2C3E6B]"
              type="button"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#DDE3EE] text-[#3BBFBF]">
                &#9776;
              </span>
              <span>View Filters</span>
              <span className="text-[#3BBFBF]">^</span>
            </button>
          </div>

          <div>
            <div className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="flex min-h-[520px] flex-col rounded-[12px] border border-[#DDE3EE] bg-white p-8 shadow-[0_10px_30px_rgba(44,62,107,0.06)]"
                >
                  <Stars />
                  <p className="mt-4 text-[1.05rem] font-medium text-[#5A6A8A]">
                    5 out of 5 stars
                  </p>
                  <p className="mt-2 text-[2.4rem] font-black leading-none tracking-[-0.05em]">
                    <span className="text-[#4285f4]">G</span>
                    <span className="text-[#ea4335]">o</span>
                    <span className="text-[#fbbc05]">o</span>
                    <span className="text-[#4285f4]">g</span>
                    <span className="text-[#34a853]">l</span>
                    <span className="text-[#ea4335]">e</span>
                  </p>

                  <div className="mt-8">
                    <p className="text-[1.15rem] font-bold text-[#2C3E6B]">
                      {item.name}
                    </p>
                    <p className="mt-1 text-[1rem] italic text-[#8A9BB5]">
                      {item.date}
                    </p>
                  </div>

                  <p className="mt-8 text-[1.05rem] leading-10 text-[#5A6A8A]">
                    {item.body}
                  </p>

                  <div className="mt-auto flex items-end justify-between pt-8">
                    <Link
                      className="text-[1.1rem] font-medium text-[#3BBFBF] transition hover:text-[#2eacac]"
                      href="/contact"
                    >
                      Read More
                    </Link>
                    <span className="text-[1.9rem] leading-none text-[#3BBFBF]">
                      &nearr;
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-6">
              <div className="flex items-center gap-5 text-[1.35rem] text-[#8A9BB5]">
                <button
                  aria-label="Previous reviews"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#DDE3EE] bg-white shadow-[0_4px_14px_rgba(44,62,107,0.06)]"
                  type="button"
                >
                  &larr;
                </button>
                <div className="flex items-center gap-5 text-lg">
                  <span className="font-bold text-[#2C3E6B]">1</span>
                  <span className="text-[#3BBFBF]">2</span>
                  <span className="text-[#3BBFBF]">3</span>
                  <span className="text-[#3BBFBF]">4</span>
                  <span className="text-[#3BBFBF]">...</span>
                  <span className="text-[#3BBFBF]">138</span>
                </div>
                <button
                  aria-label="Next reviews"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#DDE3EE] bg-white shadow-[0_4px_14px_rgba(44,62,107,0.06)]"
                  type="button"
                >
                  &rarr;
                </button>
              </div>

              <p className="text-xl text-[#2C3E6B]">
                Powered by <span className="text-[#3BBFBF]">GatherUp</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
