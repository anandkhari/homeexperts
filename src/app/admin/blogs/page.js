"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Plus, Trash2, ArrowUpRight, Clock, LayoutGrid, FileText } from "lucide-react";

const PAGE_SIZE = 12;

export default function BlogAdmin() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("all");

useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true); // Ensure loading starts on every fetch

      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*");

        if (error) {
          // Detailed logging to catch RLS or Table issues
          console.error("Home Experts CMS - Database Error:", {
            message: error.message,
            details: error.details,
            hint: error.hint,
            code: error.code
          });
          
          // Optionally set an error state here to show a toast/alert to the admin
          return;
        }

        if (data) {
          setPosts(data);
        }
      } catch (err) {
        console.error("Unexpected System Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    if (!confirm("Are you sure you want to delete this article? This action cannot be undone.")) return;

    const { error } = await supabase
      .from("blog_posts")
      .delete()
      .eq("id", id);

    if (error) console.error(error);
    setPosts(posts.filter((post) => post.id !== id));
  };

  const categories = [
    { id: "all", name: "All Topics" },
    { id: "ac-tips", name: "AC & Cooling" },
    { id: "maintenance", name: "Home Maintenance" },
    { id: "safety", name: "Safety & Electrical" },
    { id: "lifestyle", name: "UAE Lifestyle" },
  ];

  /* FILTER LOGIC */
  const filteredPosts = posts.filter((post) => {
    if (filter === "published") return post.published === true;
    if (filter === "draft") return post.published === false;
    if (category !== "all" && post.category !== category) return false;
    return true;
  });

  /* SORT LOGIC */
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    const aDate = new Date(a.created_at || 0);
    const bDate = new Date(b.created_at || 0);
    return sort === "latest" ? bDate.getTime() - aDate.getTime() : aDate.getTime() - bDate.getTime();
  });

  const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const visiblePosts = sortedPosts.slice(start, start + PAGE_SIZE);

  return (
    <div className="space-y-8 pb-12">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="h-1 w-6 bg-[#3BBFBF] rounded-full" />
            <span className="text-[#3BBFBF] text-[10px] font-black uppercase tracking-[0.2em]">
              Expert Content CMS
            </span>
          </div>
          <h1 className="text-3xl font-black text-[#2C3E6B] tracking-tight">
            Blog Management
          </h1>
          <p className="text-[#5A6A8A] text-sm mt-1">
            Review, edit, and publish expert maintenance advice.
          </p>
        </div>

        <Link
          href="/admin/blogs/new"
          className="flex items-center gap-2 bg-[#2C3E6B] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#1a2642] transition-all shadow-lg shadow-[#2C3E6B]/10 group"
        >
          <Plus size={18} className="text-[#3BBFBF] group-hover:rotate-90 transition-transform" />
          Create New Article
        </Link>
      </div>

      {/* FILTER BAR */}
      <div className="flex flex-wrap items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 border-r border-gray-100 pr-4">
          <FileText size={16} className="text-[#5A6A8A]" />
          <select
            value={filter}
            onChange={(e) => { setFilter(e.target.value); setPage(1); }}
            className="bg-transparent font-bold text-xs text-[#2C3E6B] focus:outline-none cursor-pointer uppercase tracking-wider"
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Drafts Only</option>
          </select>
        </div>

        <div className="flex items-center gap-3 border-r border-gray-100 pr-4 pl-2">
          <LayoutGrid size={16} className="text-[#5A6A8A]" />
          <select
            value={category}
            onChange={(e) => { setCategory(e.target.value); setPage(1); }}
            className="bg-transparent font-bold text-xs text-[#2C3E6B] focus:outline-none cursor-pointer uppercase tracking-wider"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-3 pl-2">
          <Clock size={16} className="text-[#5A6A8A]" />
          <select
            value={sort}
            onChange={(e) => { setSort(e.target.value); setPage(1); }}
            className="bg-transparent font-bold text-xs text-[#2C3E6B] focus:outline-none cursor-pointer uppercase tracking-wider"
          >
            <option value="latest">Latest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {/* CONTENT */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#3BBFBF]"></div>
        </div>
      ) : visiblePosts.length === 0 ? (
        <div className="border-2 border-dashed border-gray-200 rounded-3xl p-20 text-center">
          <p className="text-[#5A6A8A] font-medium">No expert articles found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visiblePosts.map((post) => (
            <Link
              key={post.id}
              href={`/admin/blogs/${post.id}`}
              className="group"
            >
              <article className="relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-[#3BBFBF]/30 transition-all duration-500">
                {/* DELETE BUTTON */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    deletePost(post.id);
                  }}
                  className="absolute top-3 right-3 z-20 bg-white/90 hover:bg-red-500 hover:text-white text-red-500 p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all shadow-sm"
                >
                  <Trash2 size={16} />
                </button>

                {/* COVER IMAGE */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={post.cover_image || "https://images.pexels.com/photos/8960866/pexels-photo-8960866.jpeg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm ${
                    post.published ? "bg-[#3BBFBF] text-white" : "bg-[#2C3E6B] text-white"
                  }`}>
                    {post.published ? "Live" : "Draft"}
                  </div>
                </div>

                {/* INFO */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[#5A6A8A] text-[10px] font-bold uppercase tracking-wider mb-2">
                    <Clock size={12} className="text-[#3BBFBF]" />
                    {post.created_at ? new Date(post.created_at).toLocaleDateString() : "Pending"}
                  </div>

                  <h3 className="text-md font-bold text-[#2C3E6B] line-clamp-2 leading-snug group-hover:text-[#3BBFBF] transition-colors">
                    {post.title}
                  </h3>

                  <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[10px] font-black text-[#2C3E6B] uppercase tracking-widest">Edit Article</span>
                    <ArrowUpRight size={16} className="text-[#3BBFBF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 pt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setPage(i + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`w-10 h-10 rounded-xl text-xs font-black transition-all ${
                page === i + 1
                  ? "bg-[#2C3E6B] text-[#3BBFBF] shadow-lg"
                  : "bg-white border border-gray-100 text-[#5A6A8A] hover:border-[#3BBFBF]"
              }`}
            >
              {(i + 1).toString().padStart(2, '0')}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}