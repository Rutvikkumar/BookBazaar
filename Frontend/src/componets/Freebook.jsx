import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Card";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get(
          "https://bookbazaar-e1qc.onrender.com/api/books/search?query=book&orderBy=newest"
        );
        const data = res.data.items || [];

        // Limit to 9 books
        const limitedBooks = data.slice(0, 9);
        setBook(limitedBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    getbook();
  }, []);

  return (
    <div className="bg-gray-50 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-black">New Arrivals</h1>
        <p className="text-black">
          Reading books helps you develop your communication skills
        </p>
      </div>

      {/* Grid Layout */}
      <div className="ml-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-16 justify-center">
        {book.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Freebook;
