import { notFound } from "next/navigation";
import ServicePage from "@/components/services/service-page";
import { ALL_SERVICES } from "@/data/all-services";
import { getServicePageBySlug } from "@/data/service-page-content";

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
