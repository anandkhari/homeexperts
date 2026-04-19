import { ALL_SERVICES } from "@/data/all-services";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://homeexperts.ae";

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

  return [...routes, ...services];
}
