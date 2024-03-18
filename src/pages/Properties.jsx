import HeroSection from "../components/home/HeroSection";
import heroBg from "../assets/img/property.jpg";

const Properties = () => {
  return (
    <>
      <HeroSection
        backgroundImg={heroBg}
        title={"Landed Properties Available"}
        description={"Browse our curated selection of prime properties. Find your ideal home or investment opportunity effortlessly."}
        hasSearchbar={false}
        fullScreen={false}
      />
    </>
  )
}

export default Properties