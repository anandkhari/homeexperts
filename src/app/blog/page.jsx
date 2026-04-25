import Image from "next/image";
import Link from "next/link";
import { createServerClient } from "@/lib/supabase/server";
import PageHero from "@/components/pageshero";
import { Clock, ArrowRight, Calendar } from "lucide-react";

export const metadata = {
  title: `Blog | ${process.env.NEXT_PUBLIC_SITE_NAME || "Home Experts"}`,
  description: "Read our latest articles on home maintenance, repairs, and renovation.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
  },
};

export default async function Blog() {
  const serverSupabase = createServerClient();
  const { data } = await serverSupabase
    .from("blog_posts")
    .select("id, title, slug, excerpt, cover_image, category, created_at")
    .eq("published", true)
    .order("created_at", { ascending: false });

  const posts = data || [];
  const loading = false;

  return (
    <main className="bg-white">
      

      <section className="relative px-4 py-16 md:px-6 md:py-20">
        {/* Background Ambient Glows */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <div className="absolute left-[-5%] top-20 h-96 w-96 rounded-full bg-[#3BBFBF] blur-[120px]" />
          <div className="absolute bottom-20 right-[-5%] h-96 w-96 rounded-full bg-[#2C3E6B] blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* HEADER SECTION */}
          <div className="mx-auto max-w-5xl text-center mb-20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-1 w-8 bg-[#3BBFBF] rounded-full" />
              <span className="text-[#3BBFBF] text-[10px] font-black uppercase tracking-[0.4em]">Our Blog</span>
              <span className="h-1 w-8 bg-[#3BBFBF] rounded-full" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-[#2C3E6B] tracking-tight leading-[1.15]">
              Your Trusted Source For <br className="hidden md:block" />
              <span className="text-[#3BBFBF]">Home Maintenance Know-How</span>
            </h1>
            
            <p className="mt-8 text-base leading-relaxed text-[#5A6A8A] md:text-base">
              Wondering why your AC keeps tripping — or finally ready to tackle that leaking tap yourself? The Home Experts blog cuts through the confusion with honest, practical advice written by the same technicians who show up at your door. No jargon, no fluff — just real fixes, smart tips, and the kind of knowledge that saves you time and money before a small issue becomes a big one.
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-[450px] animate-pulse rounded-3xl bg-gray-50" />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="rounded-[3rem] border-2 border-dashed border-gray-100 p-20 text-center">
              <p className="text-[#5A6A8A] font-medium italic">New expert tips are being drafted. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#3BBFBF]/30 hover:shadow-2xl"
                >
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={post.cover_image || "/placeholder-blog.jpg"}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      style={{ objectFit: "cover" }}
                    />
                    {/* Category Badge */}
                    <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-1.5 text-[9px] font-black uppercase tracking-widest text-[#2C3E6B] backdrop-blur-md shadow-sm">
                      {post.category?.replace("-", " ") || "Maintenance"}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-1 flex-col p-8 pt-10">
                    <div className="mb-4 flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#5A6A8A]">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3 text-[#3BBFBF]" />
                        {new Date(post.created_at).toLocaleDateString('en-AE', { day: 'numeric', month: 'short' })}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3 w-3 text-[#3BBFBF]" />
                        5 min read
                      </div>
                    </div>

                    <h3 className="mb-4 text-xl font-black leading-tight text-[#2C3E6B] transition-colors group-hover:text-[#3BBFBF]">
                      {post.title}
                    </h3>

                    <p className="mb-8 line-clamp-3 text-sm leading-relaxed text-[#5A6A8A]">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2C3E6B]">
                        Read Full Insight
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2C3E6B] text-white transition-all duration-300 group-hover:bg-[#3BBFBF] group-hover:scale-110">
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
