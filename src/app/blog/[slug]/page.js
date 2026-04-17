"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";

export default function BlogPostPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug;

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("slug", slug)
          .eq("published", true)
          .single();

        if (error || !data) {
          setPost(null);
        } else {
          setPost(data);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Could not load this article.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="w-10 h-10 border-4 border-[#3BBFBF]/20 border-t-[#3BBFBF] rounded-full animate-spin mb-4" />
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2C3E6B]">Loading Insight...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
        <h1 className="text-2xl font-black text-[#2C3E6B] mb-4 uppercase">Article Not Found</h1>
        <Link href="/blog" className="flex items-center gap-2 text-[#3BBFBF] font-black uppercase text-xs tracking-widest hover:underline">
          <ArrowLeft size={16} /> Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen pb-24">
      {/* HEADER SECTION */}
      <div className="relative h-[50vh] w-full min-h-[400px]">
        <Image
          src={post.cover_image || "https://images.pexels.com/photos/4421160/pexels-photo-4421160.jpeg"}
          alt={post.title}
          fill
          className="object-cover"
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