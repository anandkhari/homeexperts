import PageHero from "@/components/pageshero";
import ServicesCatalog from "@/components/services/services-catalog";
import CTA from "@/components/homepage/cta";
import Blogs from "@/components/homepage/blogs";

export const metadata = {
  title: "Our Services",
  description:
    "Explore AC, electrical, plumbing, cleaning, and repair services delivered by certified technicians across the UAE.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/services`,
  },
  openGraph: {
    title: "Our Services | Home Experts",
    description:
      "AC, electrical, plumbing, cleaning, and repair services by certified technicians across the UAE.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/services`,
    type: "website",
    images: [
      {
        url: "/aivan2.png",
        width: 1200,
        height: 630,
        alt: "Home Experts Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Home Experts",
    description:
      "AC, electrical, plumbing, cleaning, and repair services across the UAE.",
    images: ["/aivan2.png"],
  },
};

export default function Services() {
  return (
    <main>
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
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: `${process.env.NEXT_PUBLIC_SITE_URL}/services`,
              },
            ],
          }),
        }}
      />
      <PageHero
        title="Our Services"
        // titleAccent="  For Every Home"
        subtitle="From rapid AC repairs to full-scale electrical and plumbing installations, our certified technicians deliver excellence across every trade. Explore our specialized services designed to keep your home safe, cool, and efficient."
        image="/aivan2.png"
        imageAlt="Professional technician with a toolkit ready to provide various home services"
      />
      <ServicesCatalog />
      <CTA />
      <Blogs />
    </main>
  );
}
