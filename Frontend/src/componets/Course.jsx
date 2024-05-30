import React, { useEffect, useState } from "react";
// import list from "../../public/list.json";
import Card from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get("http://localhost:5000/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getbook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center-justify-center text-center">
          <h1 className="text-2xl ">We're delighted to have you Here!:)</h1>
          <p className="mt-12 md:">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            adipisci eum quaerat ut nulla nostrum cupiditate natus iusto, fugiat
            mollitia officia optio ea ratione aspernatur nam molestias neque
            itaque laborum!
          </p>

          <Link to="/">
            <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
