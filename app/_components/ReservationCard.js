import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import DeleteReservation from "./DeleteReservation";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,

    startDate,
    endDate,
    numberDays,
    totalPrice,
    numberCustomers,

    created_at,
    cars: { name, image },
  } = booking;

  return (
    <div className="flex border border-primary-800 w-[80vw] lg:flex-row xs:flex-col">
      <div className="relative h-32 aspect-square">
        <Image
          fill
          src={image}
          alt={`Car ${name}`}
          className="xs:object-cover md:object-contain"
        />
      </div>

      <div className="flex-grow px-2 py-3 gap-y-3 flex flex-col">
        <div className="flex items-center lg:gap-12 justify-center xs:gap-4 lg:m-0 xs:m-auto">
          <h3 className="text-xl font-semibold">
            {numberDays} nights in Car {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              upcoming
            </span>
          )}
        </div>

        <p className="lg:text-lg xs:text-sm text-primary-300 xs:text-center">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex lg:flex-row xs:flex-col xs:items-center lg:gap-5 xs:gap-1 mt-auto items-baseline xs:justify-center">
          <p className="lg:text-xl xs:text-sm font-semibold text-accent-400">
            ${totalPrice}
          </p>
          <p className="text-primary-300 lg:block xs:hidden">|</p>
          <p className="lg:text-lg xs:text-sm text-primary-300">
            {numberCustomers} customer{numberCustomers > 1 && "s"}
          </p>
          <p className="text-primary-300 lg:block xs:hidden">|</p>
          <p className="lg:text-sm xs:text-xs text-primary-400">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="flex lg:flex-col xs:flex-row lg:border-l lg:border-t-0 xs:border-t border-primary-300 lg:w-[100px] xs:w-[100%] lg:h-auto md:h-[20vh] xs:h-[10vh] xs:align-middle">
        {!isPast(startDate) ? (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group justify-center lg:border-none xs:border-r border-primary-300 flex items-center gap-2 uppercase text-xs font-bold text-primary-300  flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ReservationCard;
