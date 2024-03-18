import PropertyCard from "../PropertyCard";
import propertyImg from "../../assets/img/property.jpg";
import HorizontalScrollCards from "../HorizontalScrollCards";


const FeaturedProperties = () => {
  const properties = [
    {
      title: "Brookline Estate",
      size: "600SQM",
      desc: "Dry Land | Gatehouse | Registered Survey | 600sqft",
      location: "Ketu, Epe, Lagos.",
      price: "$900",
      img: propertyImg,
    },
    {
      title: "Brookline Estate",
      size: "600SQM",
      desc: "Dry Land | Gatehouse | Registered Survey | 600sqft",
      location: "Ketu, Epe, Lagos.",
      price: "$900",
      img: propertyImg,
    },
    {
      title: "Brookline Estate",
      size: "600SQM",
      desc: "Dry Land | Gatehouse | Registered Survey | 600sqft",
      location: "Ketu, Epe, Lagos.",
      price: "$900",
      img: propertyImg,
    },
    {
      title: "Brookline Estate",
      size: "600SQM",
      desc: "Dry Land | Gatehouse | Registered Survey | 600sqft",
      location: "Ketu, Epe, Lagos.",
      price: "$900",
      img: propertyImg,
    },
    {
      title: "Brookline Estate",
      size: "600SQM",
      desc: "Dry Land | Gatehouse | Registered Survey | 600sqft",
      location: "Ketu, Epe, Lagos.",
      price: "$900",
      img: propertyImg,
    },
  ];
  return (
    <div className="w-full px-5 my-10 md:px-72">
      <div className="mb-10 text-center">
        <h2>Featured Properties</h2>
        <p>Check out our top properties</p>
      </div>

      <HorizontalScrollCards>
        {properties.map((property, index) => (
          <div key={index}>
            <PropertyCard
              title={property.title}
              size={property.size}
              desc={property.desc}
              location={property.location}
              price={property.price}
              image={property.img}
            />
          </div>
        ))}
      </HorizontalScrollCards>
    </div>
  );
};

export default FeaturedProperties;
