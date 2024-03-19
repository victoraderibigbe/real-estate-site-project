import { FaArrowRight } from "react-icons/fa";
import aboutImg from "../../assets/img/about.jpg";
import MyButton from "../MyButton";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="w-full grid-cols-3 p-5 my-10 md:grid md:relative md:px-72 bg-primarycolor">
      <div className="p-10 bg-white rounded-lg md:my-40 md:w-1/3 md:col-span-1 md:absolute left-72">
        <h2>Who we are</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi eaque
          ratione, vel corporis accusamus reprehenderit tempora nam quis
          voluptas incidunt dolores tenetur veniam aliquid, architecto
          blanditiis eius voluptatibus vitae corrupti excepturi consectetur. Ab
          praesentium, unde delectus dolor exercitationem eaque cupiditate
          beatae ipsam adipisci!
        </p>
        <Link to="/about">
          <MyButton title={"Learn More"} icon={<FaArrowRight />} />
        </Link>
      </div>

      <div className="py-5 md:col-span-2 md:col-start-2">
        <img src={aboutImg} alt="Our staffs at work" className="rounded-lg" />
      </div>
    </div>
  );
};

export default AboutUs;
