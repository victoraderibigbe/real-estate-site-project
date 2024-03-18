import HeroSection from "../components/home/HeroSection";
import heroBg from "../assets/img/hero-bg.jpg";

const Faqs = () => {
  return (
    <>
      <HeroSection
        backgroundImg={heroBg}
        title={"Frequently Asked Questions"}
        description={
          "Get answers to common questions. Explore our FAQs for insights and guidance on your real estate journey."
        }
        hasSearchbar={false}
        fullScreen={false}
      />
    </>
  );
};

export default Faqs;
