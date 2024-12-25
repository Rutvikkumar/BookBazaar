import React from "react";
import Home from "./home/home";
import Course from "./courses/Courses";
import Signup from "./componets/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/Authprovider";
import Login from "./componets/Login";
import Card from "./componets/Card";

function App() {
  const [authUser, setAuthUser] = useAuth();
  const books = [
    {
      category: "LIFE",
      title: "The light we can’t see",
      author: "Anthony Doerr",
      price: 25.0,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91NfWpmdAFL.jpg", // Replace with your image URL
    },
    {
      category: "NOVEL",
      title: "Where The Crawdads Sing",
      author: "Delia Owens",
      price: 50.0,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81Fxtj+hhNL.jpg", // Replace with your image URL
    },
  ];
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/course" element={authUser ? <Course/>:<Navigate to="/signup"/>}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/test" element={<Card />}></Route>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
