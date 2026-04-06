"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { ArrowLeft, Save, Globe, Image as ImageIcon, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function NewBlogPost() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [published, setPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("maintenance");

  const generateSlug = (text) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const handleTitleChange = (e) => {
    const val = e.target.value;
    setTitle(val);
    setSlug(generateSlug(val));
  };

  const handleSubmit = async () => {
    if (!title || !content) {
      alert("Please provide at least a title and content for the expert article.");
      return;
    }

    setLoading(true);

    try {
      let imageURL = "";

      if (imageFile) {
        const filePath = `blog/${Date.now()}-${imageFile.name}`;
        const { error: uploadError } = await supabase.storage
          .from("cms")
          .upload(filePath, imageFile);

        if (uploadError) throw uploadError;
        const { data } = supabase.storage.from("cms").getPublicUrl(filePath);
        imageURL = data.publicUrl;
      }

      const { error } = await supabase.from("blog_posts").insert([
        {
          title,
          slug,
          excerpt,
          content,
          cover_image: imageURL,
          category,
          published,
        },
      ]);

      if (error) throw error;
      router.push("/admin/blogs");
    } catch (err) {
      console.error(err);
      alert("Failed to publish the article. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const blogCategories = [
    { id: "ac-tips", name: "AC & Cooling" },
    { id: "maintenance", name: "Home Maintenance" },
    { id: "safety", name: "Safety & Electrical" },
    { id: "lifestyle", name: "UAE Lifestyle" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
   

      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-[#2C3E6B]/5 p-8 md:p-12 border border-gray-50">
          
          {/* HEADER */}
        <div className="mb-12">
  {/* 1. Breadcrumb / Navigation Row */}
  <div className="mb-6">
    <Link 
      href="/admin/blogs" 
      className="inline-flex items-center gap-2 text-[#5A6A8A] hover:text-[#3BBFBF] transition-all text-[10px] font-black uppercase tracking-[0.15em] group"
    >
      <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
      Back to Dashboard
    </Link>
  </div>

  {/* 2. Title & Status Tag Wrapper */}
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <span className="h-1 w-8 bg-[#3BBFBF] rounded-full" />
      <span className="text-[#3BBFBF] text-[10px] font-black uppercase tracking-[0.3em]">
        Content Creator
      </span>
    </div>
    
    <h1 className="text-4xl font-black text-[#2C3E6B] tracking-tight md:text-5xl">
      New Expert <span className="text-[#3BBFBF]">Article</span>
    </h1>
    
    <p className="text-[#5A6A8A] text-sm max-w-xl">
      Draft and publish a new maintenance guide for the Home Experts UAE community.
    </p>
  </div>
</div>

          <div className="grid grid-cols-1 gap-8">
            
            {/* TITLE INPUT */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#2C3E6B] ml-1">Article Title</label>
              <input
                className="w-full border-2 border-gray-100 text-lg font-bold text-[#2C3E6B] rounded-2xl px-6 py-4 focus:outline-none focus:border-[#3BBFBF] transition-all placeholder:text-gray-300"
                placeholder="e.g., 5 Ways to Save on AC Bills this Summer"
                value={title}
                onChange={handleTitleChange}
              />
            </div>

            {/* URL SLUG (AUTO-GENERATED) */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#5A6A8A] ml-1">Permalink / Slug</label>
              <div className="flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-xl border border-gray-100 text-[#5A6A8A] text-sm italic">
                <span>homeexperts.ae/blog/</span>
                <span className="font-bold text-[#2C3E6B]">{slug || "..."}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CATEGORY */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#2C3E6B] ml-1">Service Category</label>
                <div className="relative group">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full appearance-none border-2 border-gray-100 rounded-2xl text-sm font-bold text-[#2C3E6B] px-6 py-4 focus:outline-none focus:border-[#3BBFBF] transition-all cursor-pointer bg-white"
                  >
                    {blogCategories.map((cat) => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                  <ChevronRight size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-[#3BBFBF] rotate-90 pointer-events-none" />
                </div>
              </div>

              {/* IMAGE UPLOAD */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#2C3E6B] ml-1">Cover Image</label>
                <label className="flex items-center gap-3 px-6 py-4 border-2 border-dashed border-gray-200 rounded-2xl cursor-pointer hover:border-[#3BBFBF] hover:bg-[#F0FDFD] transition-all">
                  <ImageIcon size={20} className="text-[#3BBFBF]" />
                  <span className="text-xs font-bold text-[#5A6A8A] truncate">
                    {imageFile ? imageFile.name : "Click to upload image"}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setImageFile(e.target.files[0])}
                  />
                </label>
              </div>
            </div>

            {/* EXCERPT */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#2C3E6B] ml-1">Short Preview Description</label>
              <textarea
                className="w-full border-2 border-gray-100 rounded-2xl px-6 py-4 text-sm text-[#2C3E6B] focus:outline-none focus:border-[#3BBFBF] transition-all placeholder:text-gray-300 min-h-[100px]"
                placeholder="Provide a catchy summary for the blog card..."
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
              />
            </div>

            {/* MAIN CONTENT */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#2C3E6B] ml-1">Article Body</label>
              <textarea
                className="w-full border-2 border-gray-100 rounded-[2rem] px-8 py-8 min-h-[400px] text-base text-[#2C3E6B] leading-relaxed focus:outline-none focus:border-[#3BBFBF] transition-all shadow-inner bg-gray-50/30"
                placeholder="Start writing your maintenance guide here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            {/* PUBLISH TOGGLE */}
            <div className="flex items-center gap-4 bg-[#2C3E6B] p-6 rounded-2xl text-white">
              <input
                type="checkbox"
                id="publish-check"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="w-6 h-6 rounded-lg accent-[#3BBFBF] cursor-pointer"
              />
              <label htmlFor="publish-check" className="flex flex-col cursor-pointer">
                <span className="text-sm font-black uppercase tracking-wider">Make Article Public</span>
                <span className="text-[10px] text-white/60">Visible to all UAE customers immediately upon save</span>
              </label>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-100 gap-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3BBFBF]/10 text-[#3BBFBF]">
                  <Globe size={14} />
                </div>
                <span className="text-[10px] font-black text-[#5A6A8A] uppercase tracking-widest">
                  SEO Optimized Content
                </span>
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#3BBFBF] text-white px-12 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#2da9a9] transition-all disabled:opacity-50 shadow-xl shadow-[#3BBFBF]/20"
              >
                {loading ? "Processing..." : published ? "Publish Article" : "Save as Draft"}
                {!loading && <Save size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}