import React from "react";

const Card = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4 w-80">
    <img
      src={item.image}
      alt="All the Light We Cannot See"
      className="w-32 h-48 rounded-md"
    />
    <div>
      <span className="text-sm font-bold text-orange-500">item.category</span>
      <h2 className="text-lg font-bold mt-2">
        item.titale
      </h2>
      <p className="text-gray-500">by Anthony Doerr</p>
      <p className="text-xl font-bold mt-2">₹item.price</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        BUY NOW
      </button>
    </div>
  </div>
  );
};

export default Card;
