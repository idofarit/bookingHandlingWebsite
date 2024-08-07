import SubmitButton from "@/app/_components/SubmitButton";
import { updateBooking } from "@/app/_lib/actions";
import { getBooking, getCar } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const { bookingId } = params;

  const { numberCustomers, carId, observations } = await getBooking(bookingId);

  const { maxCapacity } = await getCar(carId);

  return (
    <div>
      <h2 className="font-semibold lg:text-2xl xs:text-lg text-center text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>

      <form
        action={updateBooking}
        className="bg-primary-50 py-8 px-12 text-lg flex gap-6 flex-col"
      >
        <input type="hidden" value={bookingId} name="bookingId" />

        <div className="space-y-2">
          <label htmlFor="numberCustomers">How many persons?</label>
          <select
            defaultValue={numberCustomers}
            name="numberCustomers"
            id="numberCustomers"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            defaultValue={observations}
            name="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton pendingText="...udpating">
            Update Reservation
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
