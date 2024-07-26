import { BanknotesIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import TextExpander from "./TextExpander";

export default function Car({ car }) {
  const { name, maxCapacity, image, description } = car;

  return (
    <div className="grid auto-rows-[20rem] lg:grid-cols-[3fr_4fr] xs:grid-cols-1 gap-1 md:gap-20 md:py-3 px-10 mb-8 md:mb-24">
      <div className="relative scale-[1.15] lg:-translate-x-3">
        <Image
          fill
          className="object-contain "
          src={image}
          alt={`Car ${name}`}
        />
      </div>

      <div className="text-center">
        <h3 className="font-black text-2xl md:text-7xl border-2 border-white mb-5 lg:text-left xs:text-center lg:translate-x-[-254px] bg-primary-50 rounded-xl p-4 lg:w-[150%] xs:w-[50vw] xs:mx-auto mt-8">
          Car {name}
        </h3>

        <p className="text-lg text-primary-300 mb-10 lg:text-left xs:text-center">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7 lg:items-start xs:items-center">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> Persons
            </span>
          </li>

          <li className="flex gap-3 items-center">
            <BanknotesIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Insurance <span className="font-bold">100%</span> completed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
