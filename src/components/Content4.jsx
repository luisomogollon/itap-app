import React from "react";
import imagenes from "../assets/imagenes";

const Content4 = () => {
  return (
    <section className="px- pt-2  md:px-0 bg-fixed bg-gray-200 ">
    <div className="max-w-7xl  sm:py-14 py-6 sm:px-4 lg:px-6 font-momo font-semibold sm:text-center">
        <p className=" lg:text-7xl sm:text-2xl text-2xl  text-center  text-gray-900 s">
        
          Como comprar{" "}
        </p>
      </div>
      <div className="container items-center max-w-6xl px-5 mx-auto   text-center"></div>
      <div className=" max-w-2xl px-1 mx-auto mt- text-center">
        <img alt="hero" src={imagenes.img5} />
        
      </div>
      
    </section>
  );
};

export default Content4;
