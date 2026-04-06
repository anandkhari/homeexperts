import Blogs from "@/components/homepage/blogs";
import Hero from "@/components/homepage/hero";
import Reviews from "@/components/homepage/reviews";
import Services from "@/components/homepage/services";
import Stats from "@/components/homepage/stats";
import About from "@/components/homepage/about";
import LandingCTA from "@/components/homepage/landing-cta"; 
import LandingTestimonials from "@/components/homepage/landing-testimonials";

export default function Home() {
  return (
    <>
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
