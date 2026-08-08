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
  const isAcPage = slug === "ac-servicing-repair-replacement";

  return (
    <>
      {isAcPage ? (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "AC Repair, Servicing and Replacement",
                name: "AC Repair Dubai",
                description:
                  "AC repair, servicing, and replacement across Dubai with 60-minute emergency response, certified technicians, and no call-out fees.",
                provider: {
                  "@type": "HomeAndConstructionBusiness",
                  name: "Home Experts",
                  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.homeexperts.ae",
                  telephone: "+971554753102",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Dubai",
                    addressCountry: "AE",
                  },
                },
                areaServed: { "@type": "City", name: "Dubai" },
              }),
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How often should I service my AC in Dubai?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Twice a year is the practical minimum for Dubai's climate — once before summer (March–April) and once after peak season. Homes with heavy usage, pets, or dust exposure benefit from quarterly checks, which is what our Residential AMC provides.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why is my AC still not cooling even though I service it every year?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The most common causes are dirty coils and ducts (not covered by basic servicing), low refrigerant from a slow leak, or an ageing compressor. A proper diagnosis identifies which one — guessing leads to paying for the wrong fix.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I know if I need a repair or a full replacement?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "As a rule of thumb: if the unit is over 8–10 years old and the repair costs a large share of a new unit's price, replacement usually wins on running costs alone. Our technician will show you the numbers for your specific unit so the decision is yours.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you charge a call-out fee?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. There is no call-out fee for standard or emergency visits. You receive a clear quote before any work begins, and you only pay for work you approve.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is emergency AC repair really available 24/7?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes — including weekends and public holidays, with a 60-minute response target across Dubai.",
                    },
                  },
                ],
              }),
            }}
          />
        </>
      ) : (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                name: service.title,
                serviceType: service.title,
                description,
                provider: {
                  "@type": "HomeAndConstructionBusiness",
                  name: "Home Experts",
                  url: process.env.NEXT_PUBLIC_SITE_URL,
                  telephone: "+971554753102",
                },
                areaServed: {
                  "@type": "Place",
                  name: "Dubai",
                },
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
        </>
      )}

      <ServicePage service={service} />
    </>
  );
}
