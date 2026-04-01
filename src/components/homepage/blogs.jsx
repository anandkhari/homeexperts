import Link from "next/link";

const blogPosts = [
  {
    title: "All-Inclusive AMC With AC Parts Included: All You Need to Know",
    date: "January 5, 2026",
    excerpt:
      "When it comes to keeping your home cool, safe, and stress-free, an Annual Maintenance Contract is one of the smartest choices you can make.",
    href: "/blog",
    image:
      "https://images.pexels.com/photos/6196677/pexels-photo-6196677.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "AC Not Cooling? 7 Clues to Why Your Home Feels Like Summer",
    date: "December 18, 2025",
    excerpt:
      "When summer temperatures have you staying indoors, you need your home to feel comfortable and cool. Here is what to check first.",
    href: "/blog",
    image:
      "https://images.pexels.com/photos/4108711/pexels-photo-4108711.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Plugging Leaks: Common Plumbing Problems in Dubai Homes",
    date: "November 29, 2025",
    excerpt:
      "Plumbing is one of the most important systems in any home. Spot the warning signs early and prevent small issues from turning into bigger repairs.",
    href: "/blog",
    image:
      "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "AC Not Cooling Properly? Signs Your AC Unit Needs Replacement",
    date: "August 15, 2025",
    excerpt:
      "Cool air should feel effortless. If your unit is struggling, these replacement signals can help you decide before the problem gets expensive.",
    href: "/blog",
    image:
      "https://images.pexels.com/photos/8470807/pexels-photo-8470807.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function Blogs() {
  return (
    <section className="bg-[#F4F6F9] px-4 py-16 md:px-20 md:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-5xl font-medium uppercase leading-none tracking-[0.03em] text-[#2C3E6B]">
            Our Blogs
          </p>
          <div className="mx-auto mt-6 h-2 w-28 bg-[#3BBFBF] md:w-48" />
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col overflow-hidden text-gray-500 font-medium rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              <Link href={post.href} className="relative h-[240px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#2C3E6B]/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>

              <div className="flex flex-grow flex-col p-8">
                <p className="mb-4 text-[10px] font-black uppercase tracking-[0.25em] text-[#3BBFBF]">
                  {post.date}
                </p>

                <Link
                  className="mb-4 line-clamp-2 text-xl font-black leading-snug text-[#081224] transition-colors duration-300 group-hover:text-[#14284A] hover:!text-[#2C3E6B]"
                  href={post.href}
                >
                  {post.title}
                </Link>

                <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-[#5A6A8A]">
                  {post.excerpt}
                </p>

                <div className="mt-auto border-t border-gray-100 pt-4">
                  <Link
                    className="group/link inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-[#0A1A33] transition-all hover:text-[#2C3E6B]"
                    href={post.href}
                  >
                    Read More
                    <span className="text-lg transition-transform duration-300 group-hover/link:translate-x-2">
                      -&gt;
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            className="inline-flex min-h-14 items-center justify-center rounded-[8px] bg-[#2C3E6B] px-10 text-lg font-extrabold uppercase tracking-[0.06em] text-white transition hover:bg-[#3D5490]"
            href="/blog"
          >
            Visit Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
