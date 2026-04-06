"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { ArrowLeft, Save, Globe, Image as ImageIcon, AlertCircle, Clock } from "lucide-react";
import Link from "next/link";

export default function EditBlogPost() {
  const router = useRouter();
  const params = useParams();
  const postId = useMemo(() => params?.id, [params]);

  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [published, setPublished] = useState(false);

  useEffect(() => {
    if (!postId) return;

    const fetchPost = async () => {
      setLoading(true);
      setNotFound(false);

      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("id", postId)
          .single();

        if (error || !data) {
          setNotFound(true);
          return;
        }

        setTitle(data.title || "");
        setSlug(data.slug || "");
        setExcerpt(data.excerpt || "");
        setContent(data.content || "");
        setCoverImage(data.cover_image || "");
        setPublished(Boolean(data.published));
      } catch (err) {
        console.error("Failed to load post:", err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  const handleSave = async () => {
    if (!title || !content) {
      alert("Title and content are required to save changes.");
      return;
    }

    setSaving(true);

    try {
      let nextCoverImage = coverImage;

      if (imageFile) {
        const filePath = `blog/${Date.now()}-${imageFile.name}`;
        const { error: uploadError } = await supabase.storage
          .from("cms")
          .upload(filePath, imageFile);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
          .from("cms")
          .getPublicUrl(filePath);

        nextCoverImage = data.publicUrl;
      }

      const { error } = await supabase
        .from("blog_posts")
        .update({
          title,
          slug,
          excerpt,
          content,
          cover_image: nextCoverImage,
          published
        })
        .eq("id", postId);

      if (error) throw error;
      router.push("/admin/blogs");
    } catch (err) {
      console.error("Failed to update post:", err);
      alert("Failed to update post");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#3BBFBF]"></div>
          <span className="text-[10px] font-black uppercase tracking-widest text-[#2C3E6B]">Retrieving Article...</span>
        </div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC] px-6 text-center">
        <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-gray-100 max-w-md">
          <AlertCircle size={48} className="text-red-400 mx-auto mb-6" />
          <h1 className="text-2xl font-black text-[#2C3E6B] mb-2">Article Not Found</h1>
          <p className="text-[#5A6A8A] text-sm mb-8">The article you are trying to edit may have been moved or deleted.</p>
          <button
            onClick={() => router.push("/admin/blogs")}
            className="w-full bg-[#2C3E6B] text-white px-6 py-4 rounded-2xl font-bold hover:bg-[#1a2642] transition-all"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* TOP NAVIGATION BAR */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-100 px-6 py-4 mb-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/admin/blogs" className="flex items-center gap-2 text-[#5A6A8A] hover:text-[#2C3E6B] transition-colors text-sm font-bold uppercase tracking-wider">
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>
          <div className="flex items-center gap-3">
            <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${published ? 'bg-[#3BBFBF]/10 text-[#3BBFBF]' : 'bg-amber-100 text-amber-600'}`}>
              {published ? 'Live on Site' : 'Private Draft'}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-[#2C3E6B]/5 p-8 md:p-12 border border-gray-50">
          
          {/* HEADER */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1 w-8 bg-[#3BBFBF] rounded-full" />
              <span className="text-[#3BBFBF] text-[10px] font-black uppercase tracking-[0.3em]">
                Expert Content Editor
              </span>
            </div>
            <h1 className="text-4xl font-black text-[#2C3E6B] tracking-tight">
              Edit <span className="text-[#3BBFBF]">Article</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-8">
            
            {/* TITLE */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#2C3E6B] ml-1">Article Title</label>
              <input
                className="w-full border-2 border-gray-100 text-lg font-bold text-[#2C3E6B] rounded-2xl px-6 py-4 focus:outline-none focus:border-[#3BBFBF] transition-all"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* SLUG (READ ONLY) */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#5A6A8A] ml-1">URL Slug (Permanent)</label>
              <div className="flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-xl border border-gray-100 text-[#5A6A8A] text-sm italic">
                <Clock size={14} />
                <span>homeexperts.ae/blog/</span>
                <span className="font-bold text-[#2C3E6B]">{slug}</span>
              </div>
            </div>

            {/* EXCERPT */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#2C3E6B] ml-1">Short Preview Description</label>
              <textarea
                className="w-full border-2 border-gray-100 rounded-2xl px-6 py-4 text-sm text-[#2C3E6B] focus:outline-none focus:border-[#3BBFBF] transition-all min-h-[100px]"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
              />
            </div>

            {/* COVER IMAGE */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#2C3E6B] ml-1">Featured Cover Image</label>
              <div className="space-y-4">
                {coverImage && (
                  <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border-2 border-gray-100 bg-gray-50">
                    <img
                      src={coverImage}
                      alt="Current cover"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <span className="bg-white px-4 py-2 rounded-lg text-xs font-bold text-[#2C3E6B]">Current Image</span>
                    </div>
                  </div>
                )}
                
                <label className="flex items-center gap-3 px-6 py-4 border-2 border-dashed border-gray-200 rounded-2xl cursor-pointer hover:border-[#3BBFBF] hover:bg-[#F0FDFD] transition-all">
                  <ImageIcon size={20} className="text-[#3BBFBF]" />
                  <span className="text-xs font-bold text-[#5A6A8A] truncate">
                    {imageFile ? imageFile.name : "Replace current image (optional)"}
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

            {/* CONTENT */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#2C3E6B] ml-1">Article Body</label>
              <textarea
                className="w-full border-2 border-gray-100 rounded-[2rem] px-8 py-8 min-h-[400px] text-base text-[#2C3E6B] leading-relaxed focus:outline-none focus:border-[#3BBFBF] transition-all bg-gray-50/30 shadow-inner"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            {/* PUBLISH STATUS */}
            <div className="flex items-center gap-4 bg-[#2C3E6B] p-6 rounded-2xl text-white">
              <input
                type="checkbox"
                id="publish-check"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="w-6 h-6 rounded-lg accent-[#3BBFBF] cursor-pointer"
              />
              <label htmlFor="publish-check" className="flex flex-col cursor-pointer">
                <span className="text-sm font-black uppercase tracking-wider">Public Visibility</span>
                <span className="text-[10px] text-white/60">Toggle to publish or hide this article from the live blog</span>
              </label>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-100 gap-4">
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-[#3BBFBF]" />
                <span className="text-[10px] font-black text-[#5A6A8A] uppercase tracking-widest">
                  Live Update Sync
                </span>
              </div>

              <div className="flex w-full sm:w-auto gap-3">
                <button
                  onClick={() => router.push("/admin/blogs")}
                  className="flex-1 sm:flex-none px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs text-[#5A6A8A] border border-gray-200 hover:bg-gray-50 transition-all"
                >
                  Discard
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-3 bg-[#3BBFBF] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#2da9a9] transition-all disabled:opacity-50 shadow-xl shadow-[#3BBFBF]/20"
                >
                  {saving ? "Updating..." : "Save Changes"}
                  {!saving && <Save size={18} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}