import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-dark.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        width="60"
        alt="Car Stop logo"
        className="md:w-16 w-12"
      />
      <span className=" md:flex hidden text-xl font-semibold text-primary-100">
        Car Stop
      </span>
    </Link>
  );
}

export default Logo;
