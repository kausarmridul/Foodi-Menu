import Categories from "@/components/Categories";
import DishMenu from "@/components/DishMenu";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <DishMenu />
      <Testimonials />
      <Services />
    </>
  );
}
