import Link from "next/link";
import Image from "next/image";
import { createServerClient } from "@/lib/supabase/server";
import Reveal from "@/components/motion/reveal";
import { Calendar, ArrowRight } from "lucide-react";

export default async function Blogs() {
  const serverSupabase = createServerClient();
  const { data } = await serverSupabase
    .from("blog_posts")
    .select("id, slug, title, cover_image, created_at, excerpt, category")
    .eq("published", true)
    .order("created_at", { ascending: false })
    .limit(3);

  const posts = data || [];
  const loading = false;

  if (loading) {
    return (
      <section className="bg-[#F4F6F9] px-4 py-16 md:px-20 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="mx-auto max-w-[980px] text-center" y={24} blur={14}>
            <p className="text-5xl font-medium  leading-none tracking-[0.03em] text-[#2C3E6B]">
              Our Blogs
            </p>
            <div className="mx-auto mt-6 h-2 w-28 bg-[#3BBFBF] md:w-48" />
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h-[450px] animate-pulse rounded-3xl bg-gray-50" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F4F6F9] px-4 py-16 md:px-20 md:py-24">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="mx-auto max-w-[980px] text-center" y={24} blur={14}>
          <p className="text-5xl font-medium  leading-none tracking-[0.03em] text-[#2C3E6B]">
            Our Blogs
          </p>
          <div className="mx-auto mt-6 h-2 w-28 bg-[#3BBFBF] md:w-48" />
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {posts.map((post, index) => (
            <Reveal
              key={post.id}
              className="group"
              delay={100 + index * 90}
              y={26}
              blur={14}
            >
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white font-medium text-gray-500 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
              <Link href={`/blog/${post.slug}`} className="relative h-[240px] overflow-hidden">
                <Image
                  src={post.cover_image || "/placeholder-blog.jpg"}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-1000 group-hover:scale-110"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-[#2C3E6B]/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>

              <div className="flex flex-grow flex-col p-8">
                <p className="mb-4 text-[10px] font-black uppercase tracking-[0.25em] text-[#3BBFBF]">
                  {new Date(post.created_at).toLocaleDateString('en-AE', { day: 'numeric', month: 'short', year: 'numeric' })}
                </p>

                <Link
                  className="mb-4 line-clamp-2 text-xl font-semibold leading-snug text-[#081224] transition-colors duration-300 group-hover:text-[#14284A] hover:!text-[#2C3E6B]"
                  href={`/blog/${post.slug}`}
                >
                  {post.title}
                </Link>

                <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-[#5A6A8A]">
                  {post.excerpt || "Read our latest insights on home maintenance and expert tips."}
                </p>

                <div className="mt-auto border-t border-gray-100 pt-4">
                  <Link
                    className="group/link inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-[#0A1A33] transition-all hover:text-[#2C3E6B]"
                    href={`/blog/${post.slug}`}
                  >
                    Read More
                    <span className="text-lg transition-transform duration-300 group-hover/link:translate-x-2">
                      -&gt;
                    </span>
                  </Link>
                </div>
              </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center" delay={180} y={20} blur={10}>
          <Link
            className="animate-shine inline-flex min-h-14 items-center justify-center rounded-[8px] bg-[#2C3E6B] px-10 text-lg font-extrabold uppercase tracking-[0.06em] text-white transition hover:-translate-y-0.5 hover:bg-[#3D5490]"
            href="/blog"
          >
            Visit Blog
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
