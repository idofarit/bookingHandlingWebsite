import Link from "next/link";

function LoginMessage() {
  return (
    <div className="grid bg-primary-200 ">
      <p className="text-center text-xl py-12 self-center">
        Please{" "}
        <Link href="/login" className="underline text-accent-500">
          login
        </Link>{" "}
        to reserve this
        <br /> car right now
      </p>
    </div>
  );
}

export default LoginMessage;
