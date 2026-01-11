import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import ServicesOverview from "@/components/home/ServicesOverview";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Banner />
      <About />
      <ServicesOverview/>
      <Testimonials/>
    </>
  );
}
