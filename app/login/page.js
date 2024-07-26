import SignInButton from "../_components/SignInButton";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center px-4">
      <h2 className="lg:text-3xl text-xl font-semibold">
        Sign in to explore our website
      </h2>

      <SignInButton />
    </div>
  );
}
