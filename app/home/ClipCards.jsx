"use client";
import Image from "next/image";
import { CardStack } from "./ui/card-stack";
import { cn } from "../utils/cn";
export function CardStackItem() {
  return (
    <div className=" h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-white-100 text-emerald-700 bg-white-700 dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    content: (
      <div className="flex-1 h-full relative ">
        <div className="w-[100%] h-auto ">
          <Image
            src="/sl1.jpg"
            fill
            alt="card image"
            className="p-[0.35rem] object-cover  rounded-3xl sliderImg"
          />
        </div>

        <div className="absolute bottom-2 p-4 text-white italic  font-serif">
          <p className="md:text-sm lg:text-lg px-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore,
            enim1111? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo earum tempore ipsam dolorem soluta modi.
          </p>
          <div className="flex gap-4 px-8">
            <Image src="quote.svg" width={30} height={30} alt="quote icon" />
            <div className="flex">
              <Image
                src="/person1.jpg"
                width={40}
                height={40}
                alt="person"
                className="rounded-full mt-8"
              />
              <h3 className="flex flex-col-reverse pl-4">Nilesh T.</h3>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    content: (
      <div className="flex-1 h-full  relative">
        <div className="w-[100%] h-auto ">
          <Image
            src="/sl2.jpg"
            fill
            alt="card image"
            className="p-[0.35rem] object-cover  rounded-3xl sliderImg"
          />
        </div>

        <div className="absolute bottom-2 p-4 text-white italic  font-serif">
          <p className="md:text-sm lg:text-xl px-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore,
            enim1111? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo earum tempore ipsam dolorem soluta modi.
          </p>
          <div className="flex gap-4 px-8">
            <Image src="quote.svg" width={30} height={30} alt="quote icon" />
            <div className="flex">
              <Image
                src="/person2.jpg"
                width={40}
                height={40}
                alt="person"
                className="rounded-full mt-8"
              />
              <h3 className="flex flex-col-reverse pl-4">Justin B.</h3>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="flex-1 h-full relative ">
        <div className="w-[100%] h-auto ">
          <Image
            src="/sl3.jpg"
            fill
            alt="card image"
            className="p-[0.35rem] object-cover  rounded-3xl sliderImg"
          />
        </div>

        <div className="absolute bottom-2 p-4 text-white italic  font-serif">
          <p className="md:text-sm lg:text-xl px-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore,
            enim1111? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo earum tempore ipsam dolorem soluta modi.
          </p>
          <div className="flex gap-4 px-8">
            <Image src="quote.svg" width={30} height={30} alt="quote icon" />
            <div className="flex">
              <Image
                src="/person3.jpg"
                width={40}
                height={40}
                alt="person"
                className="rounded-full mt-8"
              />
              <h3 className="flex flex-col-reverse pl-4">Cardi B.</h3>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="flex-1 h-full relative ">
        <div className="w-[100%] h-auto ">
          <Image
            src="/sl4.png"
            fill
            alt="card image"
            className="p-[0.35rem] object-cover  rounded-3xl sliderImg"
          />
        </div>

        <div className="absolute bottom-2 p-4 text-white italic  font-serif">
          <p className="md:text-sm lg:text-xl px-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore,
            enim1111? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo earum tempore ipsam dolorem soluta modi.
          </p>
          <div className="flex gap-4 px-8">
            <Image src="quote.svg" width={30} height={30} alt="quote icon" />
            <div className="flex">
              <Image
                src="/person4.jpg"
                width={50}
                height={50}
                alt="person"
                className="rounded-full mt-8"
              />
              <h3 className="flex flex-col-reverse pl-4">Bernold L.</h3>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];
