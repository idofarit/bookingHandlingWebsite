import Image from "next/image";
import React from "react";

const Accordian = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen pb-[10rem]">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl xs:text-3xl mt-5 tracking-tight">
          WHAT WE OFFERS
        </h2>
      </div>
      <div className="grid divide-y divide-neutral-200 lg:max-w-[60vw] xs:max-w-[90vw] mx-auto mt-8">
        <div className="py-5 xs:py-2 rounded-md bg-gray-100 p-8 lg:my-4 xs:my-1">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span className="lg:text-2xl xs:text-base py-4 lg:m-auto xs:ml-0">
                {" "}
                Special Rates on Car or Van?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="grid grid-cols-2 py-4 lg:w-[50vw] xs:w-auto">
              <Image
                alt="ac"
                src="/fa1.png"
                width={250}
                height={300}
                className="pt-2 xl:ml-[4.25rem] lg:ml-[0.25rem] xs:m-auto"
              />
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn p-4 leading-6">
                You would get a fantastic rate of deals with us, along with it ,
                we will provide extra facilities like drone help, location
                finder and offline map!
              </p>
            </div>
          </details>
        </div>
        <div className="py-5 xs:py-2 rounded-md bg-gray-100 p-8 lg:my-4 xs:my-1">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span className="lg:text-2xl xs:text-base py-4 lg:m-auto xs:ml-0">
                Reservation over Phone Call?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="grid grid-cols-2 py-4 lg:w-[50vw] xs:w-auto">
              <Image
                alt="ac"
                src="/fa2.jpeg"
                width={250}
                height={300}
                className="pt-2 xl:ml-[4.25rem] lg:ml-[0.25rem] xs:m-auto"
              />
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn p-4 leading-6">
                With us, you don't need to worry about booking immidietly. Just
                a phone call and our executives are there to assist you 24X7!
              </p>
            </div>
          </details>
        </div>

        <div className="py-5 xs:py-2 rounded-md bg-gray-100 p-8 lg:my-4 xs:my-1">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span className="lg:text-2xl xs:text-base py-4 lg:m-auto xs:ml-0">
                {" "}
                One Way Car Rental?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="grid grid-cols-2 py-4 lg:w-[50vw] xs:w-auto">
              <Image
                alt="ac"
                src="/fa3.png"
                width={250}
                height={10}
                className="pt-2 xl:ml-[4.25rem] lg:ml-[0.25rem] xs:m-auto"
              />
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn p-4 leading-6">
                Renting with us is even more special which gives you one way
                rental, you do't need to pay upfront. Pay only when you checkOut
                from Us!
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
