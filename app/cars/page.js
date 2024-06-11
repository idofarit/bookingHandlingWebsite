import { Suspense } from "react";
import CarList from "../_components/CarList";
import Spinner from "../_components/Spinner";

export const metadata = {
  title: "Cars",
};

export const revalidate = 3600;

export default async function Page() {
  // CHANGE

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Camper Cars
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Camper vans can be ideal for adventurous road trips, whether you're
        navigating mountain roads or cruising along the coast. They can also
        provide ample storage space for equipment and gear, such as food,
        clothes, and recreational items.
      </p>
      <Suspense fallback={<Spinner />}>
        <CarList />
      </Suspense>
    </div>
  );
}
