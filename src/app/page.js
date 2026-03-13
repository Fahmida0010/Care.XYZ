import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import HowItWorks from "@/components/home/HowitWorks";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhychooseUs";
import CareTips from "@/components/home/CareTips";
import ExpertCaretaker from "@/components/home/Expertcaretaker";


export default function HomePage() {
  return (
    <>
      <Banner />
      <About />
      <ServicesOverview/>
      <HowItWorks/>
      <WhyChooseUs/>
      <CareTips/>
      <ExpertCaretaker/>
    </>
  );
}
