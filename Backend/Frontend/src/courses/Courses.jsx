import React from "react";
import Navbar from "../componets/navbar";
import Course from "../componets/Course";
import Footer from "../componets/Footer";

function Courses() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
