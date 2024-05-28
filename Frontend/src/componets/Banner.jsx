import React from "react";
import banner from "../../public/Banner.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="  w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="font-bold text-4xl">
              Hello, welcomes here to learn somthing{" "}
              <span className="text-blue-500">new everyday!!!</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur dolorem optio alias nam in, eligendi error voluptas
              veniam saepe nihil esse! Quibusdam molestiae, illo eos minima
              natus beatae eveniet maxime!
            </p>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                type="text"
                className="grow"
                placeholder="daisy@site.com"
              />
            </label>
          </div>
          <button className="btn btn-secondary mt-3">Secondary</button>
        </div>
        <div className="  w-full order-1 md:w-1/2">
          <img src={banner} className="w-91 h-91" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
