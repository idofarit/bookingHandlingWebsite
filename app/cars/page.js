import { Suspense } from "react";
import CarList from "../_components/CarList";
import Spinner from "../_components/Spinner";

export const metadata = {
  title: "Cars",
};

export default async function Page() {
  // CHANGE

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Camper Cars
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Our Peugeot Camper vans comes in larger, measuring 5.41 metres in
        length, designed for adventure enthusiasts seeking both comfort and
        mobility. This versatile camper boasts a thoughtfully crafted interior
        with a host of amenities including a comfortable sleeping area with
        additional sleeping in the pop-top, along with a compact kitchenette
        equipped with modern appliances. The ingenious use of space ensures a
        comfortable travel experience without compromising on functionality,
        making every trip memorable.
      </p>
      <Suspense fallback={<Spinner />}>
        <CarList />
      </Suspense>
    </div>
  );
}
