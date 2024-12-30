import React from "react";
import { useLocation } from "react-router-dom";

const DetailsPage = () => {
  const location = useLocation();
  const { item } = location.state || {};
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
  const description = volumeInfo.description?.length > 200? `${volumeInfo.description.slice(0, 200)}...`
      : volumeInfo.description || "No description available.";
  const publisher = volumeInfo.publisher || "Unknown Publisher";
  const publishedDate = volumeInfo.publishedDate || "N/A";
  const pageCount = volumeInfo.pageCount || "Unknown";
  const language = volumeInfo.language || "N/A";
  const isbn = volumeInfo.industryIdentifiers?.[0]?.identifier || "N/A";

  return (
    <div className="p-8 bg-gray-50 min-h-screen flex flex-col items-center">
      <div className="bg-white shadow-md rounded-lg p-6 flex w-full max-w-4xl">
        {/* Image Section */}
        <div className="w-1/3">
          <img
            src={thumbnail}
            alt={title}
            className="rounded-lg shadow-md w-full h-auto"
          />
          <span className="inline-block bg-green-500 text-white text-xs font-bold rounded-full px-2 py-1 mt-2">
            New
          </span>
        </div>

        {/* Details Section */}
        <div className="w-2/3 pl-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
          <p className="text-sm text-gray-600 mb-1">
            <strong>By:</strong> {author}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong>Category:</strong> {category}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong>Price:</strong> {price}
          </p>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 text-sm">★★★★☆</span>
            <span className="ml-2 text-gray-500 text-sm">4.5 | 50 Reviews</span>
          </div>
          <p className="text-sm text-gray-700 mt-4">{description}</p>

          {/* Additional Info */}
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              <strong>Publisher:</strong> {publisher}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Publication Date:</strong> {publishedDate}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Print Length:</strong> {pageCount} pages
            </p>
            <p className="text-sm text-gray-600">
              <strong>ISBN:</strong> {isbn}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Language:</strong> {language}
            </p>
          </div>

          {/* Action Buttons */}
 

          {/* Format Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              Add to Cart
            </button>
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
