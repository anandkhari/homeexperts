import Blogs from "@/components/homepage/blogs";
import Hero from "@/components/homepage/hero";
import Reviews from "@/components/homepage/reviews";
import Services from "@/components/homepage/services";
import Stats from "@/components/homepage/stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />

      <Blogs />
    </>
  );
}
