import ReservationList from "@/app/_components/ReservationList";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import Link from "next/link";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await auth();

  const bookings = await getBookings(session.user.customerId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7 lg:text-left xs:text-center">
        Your reservations
      </h2>

      <div className="lg:h-[70vh] xs:h-screen overflow-x-scroll no-scrollbar ">
        {bookings.length === 0 ? (
          <p className="text-lg">
            You have no reservations yet. Check out our{" "}
            <Link className="underline text-accent-500" href="/cabins">
              rides &rarr;
            </Link>
          </p>
        ) : (
          <ReservationList bookings={bookings} />
        )}
      </div>
    </div>
  );
}
