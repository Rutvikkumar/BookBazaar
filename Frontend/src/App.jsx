import React from "react";
import Home from "./home/home";
import Course from "./courses/Courses";
import Signup from "./componets/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/Authprovider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/course" element={authUser ? <Course/>:<Navigate to="/signup"/>}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
