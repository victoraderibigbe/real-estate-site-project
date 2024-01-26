import HeroSection from "../components/HeroSection";
import HomeMainSection from "../components/HomeMainSection";
import heroBg from "../assets/img/hero-bg.jpg";

const Home = () => {
  return (
    <>
      <HeroSection
        backgroundImg={heroBg}
        title={"Dominion Ocean Homes & Properties Ltd"}
        description={"Begin your journey towards land ownership today. Explore our listings or connect with our team to transform your vision into reality with us."}
        hasSearchbar={true}
        fullScreen={true}
      />
      <HomeMainSection />
    </>
  );
};

export default Home;
