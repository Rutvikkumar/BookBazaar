import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const { volumeInfo, saleInfo } = item;
  const thumbnail =
    volumeInfo.imageLinks?.thumbnail ||
    "https://via.placeholder.com/128x192.png?text=No+Image";
  const title = volumeInfo.title || "No Title Available";
  const category = volumeInfo.categories?.[0] || "General";
  const author = volumeInfo.authors?.[0] || "Unknown Author";
  const price = saleInfo?.listPrice?.amount
    ? `₹${saleInfo.listPrice.amount}`
    : "Free";

  const handleCardClick = () => {
    navigate(`/details`, { state: { item } });
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4 w-85 transform transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer"
    >
      <img src={thumbnail} alt={title} className="w-32 h-50 rounded-md" />
      <div className="overflow-hidden">
        <span className="text-sm font-bold text-orange-500">{category}</span>
        <h2 className="text-lg font-bold mt-2 text-black truncate w-48" title={title}>
          {title}
        </h2>
        <p className="text-black truncate w-44" title={author}>
          by {author}
        </p>
        <p className="text-xl font-bold mt-2 text-black">{price}</p>
      </div>
    </div>
  );
};

export default Card;
