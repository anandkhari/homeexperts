import { notFound } from "next/navigation";
import ServicePage from "@/components/services/service-page";
import { ALL_SERVICES } from "@/data/all-services";
import { getServicePageBySlug } from "@/data/service-page-content";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServicePageBySlug(slug) || ALL_SERVICES.find(s => s.slug === slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    };
  }

  const description = service.description || service.introText || "";

  return {
    title: service.title,
    description: description || `Professional ${service.title} services.`,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Home Experts`,
      description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/${slug}`,
      type: "website",
      images: service.heroImage
        ? [
            {
              url: service.heroImage,
              width: 1200,
              height: 630,
              alt: service.title,
            },
          ]
        : [
            {
              url: "/aivan2.png",
              width: 1200,
              height: 630,
              alt: "Home Experts",
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Home Experts`,
      description,
      images: service.heroImage ? [service.heroImage] : ["/aivan2.png"],
    },
  };
}

export async function generateStaticParams() {
  return ALL_SERVICES.map((service) => ({ slug: service.slug }));
}

export default async function DynamicServicePage({ params }) {
  const { slug } = await params;
  const service = getServicePageBySlug(slug);

  if (!service) {
    notFound();
  }

  const description = service.description || service.introText;
  const serviceUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/services/${slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description,
            provider: {
              "@type": "HomeAndConstructionBusiness",
              name: "Home Experts",
              url: process.env.NEXT_PUBLIC_SITE_URL,
            },
            areaServed: "UAE",
            url: serviceUrl,
          }),
        }}
      />

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
              {
                "@type": "ListItem",
                position: 3,
                name: service.title,
                item: serviceUrl,
              },
            ],
          }),
        }}
      />

      {Array.isArray(service.faqs) && service.faqs.length > 0 ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: service.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      ) : null}

      <ServicePage service={service} />
    </>
  );
}
