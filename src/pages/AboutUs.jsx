import HeroSection from "../components/HeroSection"
import heroBg from "../assets/img/hero-bg.jpg";

const AboutUs = () => {
  return (
    <>
      <HeroSection
        backgroundImg={heroBg}
        title={"About Us"}
        description={"Discover our story. Rooted in expertise, committed to your dreams. Learn more about Dominion Homes and Properties."}
        hasSearchbar={false}
        fullScreen={false}
      />
    </>
  )
}

export default AboutUs