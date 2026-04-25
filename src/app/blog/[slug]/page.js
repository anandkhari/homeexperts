import { notFound } from "next/navigation";
import { cache } from "react";
import { createServerClient } from "@/lib/supabase/server";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";

function toMetaDescription(excerpt, content) {
  const raw = excerpt || content || "";
  const text = raw
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > 160 ? `${text.slice(0, 160).trim()}…` : text;
}

const getPublishedPostBySlug = cache(async (slug) => {
  const serverSupabase = createServerClient();
  const { data, error } = await serverSupabase
    .from("blog_posts")
    .select(
      "id, created_at, title, slug, excerpt, content, cover_image, category"
    )
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) return null;
  return data;
});

export async function generateStaticParams() {
  const serverSupabase = createServerClient();
  const { data } = await serverSupabase
    .from("blog_posts")
    .select("slug")
    .eq("published", true);
  return (data || []).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!slug) return {};

  const post = await getPublishedPostBySlug(slug);
  if (!post) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const canonical = siteUrl ? `${siteUrl}/blog/${post.slug}` : undefined;
  const description = toMetaDescription(post.excerpt, post.content);

  return {
    title: post.title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: post.title,
      description,
      images: post.cover_image ? [{ url: post.cover_image }] : [],
      type: "article",
      publishedTime: post.created_at,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: post.cover_image ? [post.cover_image] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = slug ? await getPublishedPostBySlug(slug) : null;

  if (!post) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "HomeExperts";
  const canonical = siteUrl ? `${siteUrl}/blog/${post.slug}` : undefined;
  const description = toMetaDescription(post.excerpt, post.content);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description,
    image: post.cover_image || undefined,
    datePublished: post.created_at,
    author: { "@type": "Organization", name: siteName },
    url: canonical,
  };

  return (
    <article className="bg-white min-h-screen pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HEADER SECTION */}
      <div className="relative h-[50vh] w-full min-h-[400px]">
        <Image
          src={post.cover_image || "https://images.pexels.com/photos/4421160/pexels-photo-4421160.jpeg"}
          alt={post.title}
          fill
          className="object-cover"
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E6B] via-[#2C3E6B]/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 mb-12 w-full text-white">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#3BBFBF] mb-8 font-black uppercase text-[10px] tracking-[0.2em] bg-white/10 backdrop-blur-md px-4 py-2 rounded-full hover:bg-[#3BBFBF] hover:text-white transition-all">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="h-1 w-8 bg-[#3BBFBF] rounded-full" />
              <span className="text-[#3BBFBF] text-[10px] font-black uppercase tracking-[0.3em]">
                {post.category?.replace("-", " ") || "Expert Advice"}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs font-bold uppercase tracking-widest text-white/80">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-[#3BBFBF]" />
                {new Date(post.created_at).toLocaleDateString('en-AE', { day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#3BBFBF]" />
                5 Min Read
              </div>
              <div className="flex items-center gap-2">
                <User size={14} className="text-[#3BBFBF]" />
                Home Experts Team
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-4xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Body */}
          <div className="lg:col-span-12">
            {/* Excerpt/Intro */}
            {post.excerpt && (
              <p className="text-xl md:text-2xl text-[#5A6A8A] font-medium leading-relaxed mb-12 italic border-l-4 border-[#3BBFBF] pl-8">
                {post.excerpt}
              </p>
            )}

            {/* Content Body */}
            <div className="prose prose-lg max-w-none text-[#2C3E6B] leading-[1.8] whitespace-pre-line font-medium">
              {post.content}
            </div>

            {/* Footer / Share */}
            <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
               <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#5A6A8A]">Share this insight</span>
                  <div className="flex gap-2">
                    <button className="h-10 w-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#3BBFBF] hover:text-white transition-all">
                      <Share2 size={16} />
                    </button>
                  </div>
               </div>
               
               <Link href="/contact" className="bg-[#2C3E6B] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-[#3BBFBF] transition-all shadow-xl shadow-[#2C3E6B]/10">
                  Book A Professional Service
               </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
