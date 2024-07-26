import { MovingBorder } from "@app/home/MovingBorder";
import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CarCard({ car }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = car;

  return (
    <div className="lg:flex xs:grid xs:grid-rows-2 xs:border-b-2 xs:rounded-b-2xl lg:border-none pb-4">
      <div className="flex-[4_2_0%] relative sm:col-span-1">
        <Image
          src={image}
          fill
          alt={`Car ${name}`}
          className="object-contain"
        />
      </div>

      <div className="flex-grow pr-6 xs:grid xs:grid-cols-2">
        <div className="pt-5 pb-4 ">
          <h3 className="text-gray-30 font-semibold text-2xl mb-3 md:mt-8 text-right">
            Car {name}
          </h3>

          <div className="flex gap-3 items-center mb-2 justify-end">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <p className="text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> person
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>

        <div className="text-right lg:pt-4 xs:m-auto xs:pt-16 pl-4">
          <MovingBorder className="bg-gray-10 text-sm text-purple-700">
            <Link
              href={`/cars/${id}`}
              className="py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
            >
              Details & reservation &rarr;
            </Link>
          </MovingBorder>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
