import { auth } from "../_lib/auth";

export const metadata = {
  title: "account",
};

export default async function Page() {
  const session = await auth();
  console.log(session);

  const firstName = session.user.name.split(" ").at(0);
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome,&nbsp; {firstName}
    </h2>
  );
}
