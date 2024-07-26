import Image from "next/image";
import React from "react";

const Greet = () => {
  return (
    <div className="grid xl:mt-0 lg:mt-[10rem] md:-mt-[18rem] xs:mt-[12rem] xsm:mt-[7rem] s:-mt-[2rem]  mt-24 h-screen w-screen bg-center bg-pattern-2 bg-no-repeat">
      <div className="grid grid-cols-3 items-center">
        <h1 className="col-span-2 xs:col-span-3 lg:pl-[5rem] md:pl-[12rem] xs:pl-[2.5rem] lg:text-6xl text-4xl pt-36">
          Welcome to CarStop
        </h1>
      </div>
      <div className="grid lg:w-[50vw] md:w-[100vw] grid-cols-3 grid-flow-row-dense grid-rows-3">
        <div className="m-auto col-span-1 ">
          <Image
            src="/gr-1.png"
            width={50}
            height={50}
            alt="gr1 icon"
            className="m-auto"
          />
        </div>
        <div className="col-span-2 w-[68vw] md:w-[35vw] pr-8 pt-8">
          <h1 className="text-2xl pb-2">Largest Dealership of Cars</h1>
          <p className="text-gray-400">
            CarStop is one of the largest car rental service provider in the
            country. Explore our website for more details.
          </p>
        </div>
        <div className="m-auto  col-span-1">
          <Image
            src="/gr-2.png"
            width={50}
            height={50}
            alt="gr2 icon"
            className="m-auto"
          />
        </div>
        <div className="col-span-2 w-[68vw] md:w-[35vw] pr-8 pt-8">
          <h1 className="text-2xl pb-2">We Offers Lower Cars Prices</h1>
          <p className="text-gray-400">
            CarStop is the cheapest among all other competetors in this market.
            Lower car, better deals thats what we focus.
          </p>
        </div>
        <div className="m-auto col-span-1">
          <Image
            src="/gr-3.png"
            width={50}
            height={50}
            alt="gr3 icon"
            className="m-auto"
          />
        </div>
        <div className="col-span-2 w-[68vw] md:w-[35vw] pr-8 pt-8">
          <h1 className="text-2xl pb-2">Multipoint Safety Checks</h1>
          <p className="text-gray-400">
            Our experts always do pre-delivery checking and also we care for our
            customers who wants extra supports from us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Greet;
