import HeroSection from "../components/HeroSection";
import heroBg from "../assets/img/hero-bg.jpg";
import FeaturedProperties from "../components/FeaturedProperties";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <HeroSection
        backgroundImg={heroBg}
        title={"Dominion Ocean Homes & Properties Ltd"}
        description={
          "Begin your journey towards land ownership today. Explore our listings or connect with our team to transform your vision into reality with us."
        }
        hasSearchbar={true}
        fullScreen={true}
      />
      <WhyChooseUs />
      <FeaturedProperties />
    </>
  );
};

export default Home;
