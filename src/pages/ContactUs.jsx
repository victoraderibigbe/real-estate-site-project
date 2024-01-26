import HeroSection from "../components/HeroSection"
import heroBg from "../assets/img/hero-bg.jpg";

const ContactUs = () => {
  return (
    <>
      <HeroSection
        backgroundImg={heroBg}
        title={"Let's Hear From You"}
        description={"Connect with us effortlessly. Questions, inquiries, or consultations—your journey in real estate starts with a conversation."}
        hasSearchbar={false}
        fullScreen={false}
      />
    </>
  )
}

export default ContactUs