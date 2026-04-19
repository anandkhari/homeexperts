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

  return {
    title: service.title,
    description: service.description || service.introText || `Professional ${service.title} services.`,
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

  return <ServicePage service={service} />;
}
