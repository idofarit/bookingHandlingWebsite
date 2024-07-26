import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();

  console.log(session);

  return (
    <nav className="z-10 md:text-xl text-sm">
      <ul className="flex md:gap-16 gap-[1rem] items-center ">
        <li>
          <Link
            href="/cars"
            className="hover:text-accent-400 transition-colors"
          >
            Cars
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="flex items-center gap-4 hover:text-accent-400 transition-colors"
            >
              {session?.user ? (
                <span className="md:text-sm text-xs">
                  {session.user.name.substring(0, 6)}..
                </span>
              ) : (
                <span className="md:text-sm text-xs">Join Us</span>
              )}
              <img
                referrerPolicy="no-referrer"
                alt={session.user.name}
                src={session.user.image}
                className="md:h-8 h-6 rounded-full"
              />
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors md:text-sm text-xs"
            >
              SignIn
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
