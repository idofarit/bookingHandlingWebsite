import { getBookedDatesByCarId, getCar } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { carId } = params;

  try {
    const [car, bookedDates] = await Promise.all([
      getCar(carId),
      getBookedDatesByCarId(carId),
    ]);
    return Response.json({ car, bookedDates });
  } catch (error) {
    return Response.json({ message: "Car not found" });
  }
}

// export async function POST() {}
