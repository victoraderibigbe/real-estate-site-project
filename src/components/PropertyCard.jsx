const PropertyCard = ({ title, size, desc, location, price, image }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md md:min-w-96 min-w-48">
      <div>
        <img src={image} className="rounded-lg" alt="Property image" />
      </div>
      <div className="p-4">
        <h2 className="mb-2 text-lg font-semibold">{title}</h2>
        <div className="flex justify-between font-semibold">
          <h3 className="text-sm text-black md:text-lg">{size}</h3>
          <h3 className="text-sm text-black md:text-lg">{price}</h3>
        </div>
        <h3 className="text-sm md:text-lg text-slate-700">{location}</h3>
        <p className="my-1 text-sm leading-none tracking-tight md:text-lg">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
