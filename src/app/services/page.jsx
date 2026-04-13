import PageHero from "@/components/pageshero";
import ServicesCatalog from "@/components/services/services-catalog";
import CTA from "@/components/homepage/cta";
import Blogs from "@/components/homepage/blogs";

export default function Services() {
  return (
    <main>
      <PageHero
        title="Comprehensive Solutions"
        titleAccent="  For Every Home"
        subtitle="From rapid AC repairs to full-scale electrical and plumbing installations, our certified technicians deliver excellence across every trade. Explore our specialized services designed to keep your home safe, cool, and efficient."
        image="/aivan.png"
        imageAlt="Professional technician with a toolkit ready to provide various home services"
      />
      <ServicesCatalog />
      <CTA />
      <Blogs />
    </main>
  );
}
