import React from "react";
import Home from "./home/home";
import Course from "./courses/Courses";
import Signup from "./componets/Signup";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/course" element={<Course></Course>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
