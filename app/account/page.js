import { getBookings } from "@app/_lib/data-service";
import Link from "next/link";
import { auth } from "../_lib/auth";

export const metadata = {
  title: "account",
};

export default async function Page() {
  const session = await auth();
  const bookings = await getBookings(session.user.customerId);

  const firstName = session.user.name.split(" ").at(0);
  return (
    <>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7 p-8">
        Welcome,&nbsp; {firstName}
      </h2>
      <span className="flex flex-col text-center mt-20">
        You have {bookings.length}
        {bookings.length < 1 ? "reservation" : "reservations"} with Us!
        <Link
          className="text-sky-600 underline text-sm"
          href="/account/reservations"
        >
          Go to reservations &rarr;
        </Link>
      </span>
    </>
  );
}
