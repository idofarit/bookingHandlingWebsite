"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { getBookings } from "./data-service";
import { supabase } from "./supabase";

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

export async function deleteReservation(bookingId) {
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

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
