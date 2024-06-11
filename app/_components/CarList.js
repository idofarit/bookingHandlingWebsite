import React from "react";
import CarCard from "../_components/CarCard";
import { getCars } from "../_lib/data-service";
import { unstable_noStore as noStore } from "next/cache";

async function CarList({ filter }) {
  // noStore();

  const cars = await getCars();

  if (!cars.length) return null;

  let displayedCars;
  if (filter === "all") {
    displayedCars = cars;
  } else if (filter === "sedan") {
    displayedCars = cars.filter((cars) => cars.maxCapacity <= 4);
  } else if (filter === "6 seater") {
    displayedCars = cars.filter(
      (cars) => cars.maxCapacity >= 5 && cars.maxCapacity <= 6
    );
  } else if (filter === "motorhome") {
    displayedCars = cars.filter((cars) => cars.maxCapacity >= 8);
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCars.map((car) => (
        <CarCard car={car} key={car.id} />
      ))}
    </div>
  );
}

export default CarList;
