import HeroSection from "../components/home/HeroSection";
import heroBg from "../assets/img/services-img.jpg";

const Services = () => {
  return (
    <>
      <HeroSection
        backgroundImg={heroBg}
        title={"What We Do"}
        description={
          "Tailored solutions for your real estate needs. Explore our services, designed to exceed expectations"
        }
        hasSearchbar={false}
        fullScreen={false}
      />
    </>
  );
};

export default Services;
