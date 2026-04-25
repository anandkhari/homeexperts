import Blogs from "@/components/homepage/blogs";
import Hero from "@/components/homepage/hero";
import Reviews from "@/components/homepage/reviews";
import Services from "@/components/homepage/services";
import Stats from "@/components/homepage/stats";
import About from "@/components/homepage/about";
import LandingCTA from "@/components/homepage/landing-cta"; 
import LandingTestimonials from "@/components/homepage/landing-testimonials";

export const metadata = {
  title: "Home Experts | Home Maintenance & AMC Services in UAE",
  description:
    "Reliable home maintenance, repair, and renovation services across the UAE. AC, plumbing, electrical, cleaning and AMC packages.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  },
  openGraph: {
    title: "Home Experts | Home Maintenance & AMC Services in UAE",
    description:
      "Reliable home maintenance, repair, and renovation services across the UAE.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    type: "website",
    images: [
      { url: "/aivan2.png", width: 1200, height: 630, alt: "Home Experts" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Experts | Home Maintenance & AMC Services in UAE",
    description:
      "Reliable home maintenance, repair, and renovation services across the UAE.",
    images: ["/aivan2.png"],
  },
};

export default function Home() {
  return (
  <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: process.env.NEXT_PUBLIC_SITE_URL,
              },
            ],
          }),
        }}
      />
      <Hero />
      <Stats />
      <About />
      <Services />
      <LandingTestimonials />
      <LandingCTA />
  

      <Blogs />
    </>
  );
}
