import Blogs from "@/components/homepage/blogs";
import Hero from "@/components/homepage/hero";
import Reviews from "@/components/homepage/reviews";
import Services from "@/components/homepage/services";
import Stats from "@/components/homepage/stats";
import About from "@/components/homepage/about";
import CTA from "@/components/homepage/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Reviews />
      <CTA />
  

      <Blogs />
    </>
  );
}
