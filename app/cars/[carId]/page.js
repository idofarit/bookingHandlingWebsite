import Car from "@/app/_components/Car";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCar, getCars } from "@/app/_lib/data-service";
import { Suspense } from "react";

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { name } = await getCar(params.carId);
  return { title: `Car ${name}` };
}

export async function generateStaticParams() {
  const cars = await getCars();

  const ids = cars.map((car) => ({ carId: String(car.id) }));

  return ids;
}

export default async function Page({ params }) {
  const car = await getCar(params.carId);

  return (
    <div className="max-w-6xl mx-auto md:mt-8 p-[0.75rem]">
      <Car car={car} />
      <div>
        <h2 className="text-2xl md:text-5xl font-semibold text-center mb-10 text-gray-600">
          Reserve {car.name} now. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation car={car} />
        </Suspense>
      </div>
    </div>
  );
}
