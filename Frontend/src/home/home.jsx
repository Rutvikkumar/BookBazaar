import React from "react";
import Navbar from "../componets/navbar";
import Banner from "../componets/Banner";
import Freebook from "../componets/Freebook";
import Footer from "../componets/Footer";

function home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Freebook></Freebook>
      <Footer></Footer>
    </div>
  );
}

export default home;
