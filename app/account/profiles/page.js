import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getCustomer } from "@/app/_lib/data-service";

export const metadata = {
  title: "Update Profile",
};

export default async function Page() {
  const session = await auth();
  const customer = await getCustomer(session.user.email);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4 p-8">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-primary-200 p-8">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm customer={customer} />
    </div>
  );
}
