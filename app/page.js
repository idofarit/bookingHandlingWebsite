import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg1.jpg";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        quality={80}
        placeholder="blur"
        className="object-cover object-center"
        alt="Car Stop"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to CarStop
        </h1>
        <Link
          href="/cars"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Ease Your road-trips
        </Link>
      </div>
    </main>
  );
}
