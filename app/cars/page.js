import { Suspense } from "react";
import CarList from "../_components/CarList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const metadata = {
  title: "Cars",
};

export const revalidate = 3600;

export default async function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div>
      <div className="px-4 md:px-14">
        <h1 className="text-4xl mb-2 text-gray-30 font-medium p-4">
          Explore Our Camper Cars
        </h1>
        <p className="text-primary-200 text-lg mb-10 p-4">
          Camper vans can be ideal for adventurous road trips, whether you're
          navigating mountain roads or cruising along the coast. They can also
          provide ample storage space for equipment and gear, such as food,
          clothes, and recreational items. Here we are to make you ride with
          some of our vehicle...
        </p>
      </div>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CarList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
