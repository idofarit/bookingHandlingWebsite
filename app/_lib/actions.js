"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { getBookings } from "./data-service";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";

export async function updateProfile(formData) {
  const session = await auth();

  if (!session) throw new Error("Please log In");

  const nationalID = formData.get("nationalID");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Provide a valid ID");

  const updateData = { nationalID };

  const { data, error } = await supabase
    .from("customers")
    .update(updateData)
    .eq("id", session.user.customerId);

  if (error) {
    throw new Error("Customer could not be updated");
  }

  revalidatePath("/account/profile");
}

export async function createBooking(bookingData, formData) {
  console.log(formData);

  const session = await auth();

  if (!session) throw new Error("Please log In");

  const newBooking = {
    ...bookingData,
    customerId: session.user.customerId,
    numberCustomers: Number(formData.get("numberCustomers")),
    observations: formData.get("observations").slice(0, 1000),
    extraPrice: 0,
    totalPrice: bookingData.carPrice,
    isPaid: false,
    hasInsurance: false,
    status: "unconfirmed",
  };
  const { error } = await supabase.from("bookings").insert([newBooking]);

  if (error) throw new Error("Booking could not be created");
}

export async function deleteBooking(bookingId) {
  const session = await auth();

  if (!session) throw new Error("Please log In");

  const customerBookings = await getBookings(session.user.customerId);

  const customerBookingIds = customerBookings.map((booking) => booking.id);

  if (!customerBookingIds.includes(bookingId))
    throw new Error("You're not allowed to delete!");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) throw new Error("Booking could not be deleted");

  revalidatePath("/account/reservations");
}

export async function updateBooking(formData) {
  const bookingId = Number(formData.get("bookingId"));

  const session = await auth();

  if (!session) throw new Error("Please log In");

  const customerBookings = await getBookings(session.user.customerId);

  const customerBookingIds = customerBookings.map((booking) => booking.id);

  if (!customerBookingIds.includes(bookingId))
    throw new Error("You're not allowed to delete!");

  const updateData = {
    numberCustomers: Number(formData.get("numberCustomers")),
    observations: formData.get("observations").slice(0, 1000),
  };

  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }

  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath("/account/reservations");

  redirect("/account/reservations");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
