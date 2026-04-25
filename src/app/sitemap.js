import { ALL_SERVICES } from "@/data/all-services";
import { createServerClient } from "@/lib/supabase/server";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const serverSupabase = createServerClient();
  const { data: blogPosts } = await serverSupabase
    .from("blog_posts")
    .select("id, slug, created_at")
    .eq("published", true);

  const services = ALL_SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const routes = ["", "/about", "/services", "/packages", "/blog", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.9,
  }));

  const blogRoutes = (blogPosts || []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.created_at ? new Date(post.created_at) : new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...routes, ...services, ...blogRoutes];
}
