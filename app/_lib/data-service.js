import { eachDayOfInterval } from "date-fns";
import { supabase } from "./supabase";
import { notFound } from "next/navigation";

/////////////
// GET

export async function getCar(id) {
  const { data, error } = await supabase
    .from("cars")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getCarPrice(id) {
  const { data, error } = await supabase
    .from("cars")
    .select("regularPrice, discount")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
  }

  return data;
}

export const getCars = async function () {
  const { data, error } = await supabase
    .from("cars")
    .select("id, name, maxCapacity, regularPrice, discount, image")
    .order("name");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
};

// customers are uniquely identified by their email address
export async function getCustomer(email) {
  const { data, error } = await supabase
    .from("customers")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}

export async function getBooking(id) {
  const { data, error, count } = await supabase
    .from("bookings")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not get loaded");
  }

  return data;
}

export async function getBookings(customerId) {
  const { data, error, count } = await supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numberDays, numberCustomers, totalPrice, customerId, carId, cars(name, image)"
    )
    .eq("customerId", customerId)
    .order("startDate");

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

export async function getBookedDatesByCarId(carId) {
  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  // Getting all bookings
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("carId", carId)
    .or(`startDate.gte.${today},status.eq.checked-in`);

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  // Converting to actual dates to be displayed in the date picker
  const bookedDates = data
    .map((booking) => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
    })
    .flat();

  return bookedDates;
}

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }

  return data;
}

/////////////
// CREATE

export async function createCustomer(newCustomer) {
  const { data, error } = await supabase
    .from("customers")
    .insert([newCustomer]);

  if (error) {
    console.error(error);
    throw new Error("Customer could not be created");
  }

  return data;
}

export async function getAllImages() {
  const { data, error } = await supabase.storage
    .from("car-images")
    .list("folder", {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });
  return data;
}
