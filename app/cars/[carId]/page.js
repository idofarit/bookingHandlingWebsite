import TextExpander from "@/app/_components/TextExpander";
import { getCar, getCars } from "@/app/_lib/data-service";
import { UsersIcon, BanknotesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { name } = await getCar(params.carId);
  return { title: `Car ${name}` };
}

export async function generateStaticParams() {
  const cars = await getCars();

  const ids = cars.map((car) => ({ carId: String(car.id) }));
  console.log(ids);
  return ids;
}

export default async function Page({ params }) {
  const car = await getCar(params.carId);

  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    car;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.15] -translate-x-3">
          <Image
            fill
            className="object-cover"
            src={image}
            alt={`Car ${name}`}
          />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
            Car {name}
          </h3>

          <p className="text-lg text-primary-300 mb-10">
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                Persons
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

      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
