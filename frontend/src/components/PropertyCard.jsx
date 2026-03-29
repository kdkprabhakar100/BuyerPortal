import React from "react";
import { FaHeart } from "react-icons/fa";

function PropertyCard({ property, isFav, toggleFav }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">

      <img
        src={property.image || "https://via.placeholder.com/300"}
        alt="property"
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{property.title}</h2>
        <p className="text-gray-500">${property.price}</p>

        <FaHeart
          className={`cursor-pointer text-xl transition ${
            isFav ? "text-red-500" : "text-gray-400"
          }`}
          onClick={() => toggleFav(property._id)}
        />
      </div>
    </div>
  );
}

export default PropertyCard;