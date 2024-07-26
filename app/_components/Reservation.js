import { auth } from "../_lib/auth";
import { getBookedDatesByCarId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ car }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCarId(car.id),
  ]);

  const session = await auth();

  return (
    <div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-y-4 border min-h-[400px]">
      <DateSelector settings={settings} bookedDates={bookedDates} car={car} />
      {session?.user ? (
        <ReservationForm car={car} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
