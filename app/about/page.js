import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400;

export const metadata = {
  title: "about",
};

export default async function Page() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="rounded-xl relative overflow-hidden xs:flex xs:flex-col mx-auto lg:grid grid-cols-2 p-14">
        <div className="relative lg:h-[25rem] xs:h-[18rem] w-auto shadow-[-48px_54px_20px_-26px_rgba(0,0,0,0.9)] bg-[#ffffff]">
          <Image
            className="object-cover"
            fill
            src="/abt1.jpg"
            alt="Sunset in the mountains"
          />
        </div>
        <div className="relative lg:-mt-0 xs:-mt-16 px-10 xs:pt-5 pb-16 bg-white xs:m-10 lg:m-0">
          <p className="font-semibold text-xl inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
            The OG Van's are in Town!
          </p>
          <p className="text-gray-500 text-lg">
            CarStop is your One Stop destination where you could have your own
            Camper, suv or sedan for your next ride. We get your covered from
            all aspects. Hastle free booking and paperworks.
          </p>
          <p className="mt-5 text-gray-600 text-xs">
            By &nbsp;
            <span className="text-xs text-indigo-600 transition duration-500 ease-in-out">
              John Adams
            </span>{" "}
            | &nbsp;
            <span className="text-xs text-indigo-600 transition duration-500 ease-in-out">
              Managing Director
            </span>
            ,{" "}
            <span className="text-xs text-indigo-600 transition duration-500 ease-in-out">
              CarStop
            </span>
          </p>
        </div>
      </div>

      <div className="text-center lg:m-32 xs:m-8 ">
        <Link
          href="/cars"
          className="inline-block mt-4 rounded-xl bg-slate-400 px-8 py-4 text-white text-lg font-semibold hover:bg-gray-50 transition-all shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px]"
        >
          Pick your ride now
        </Link>
      </div>

      <div className="rounded-xl overflow-hidden xs:flex xs:flex-col mx-auto lg:grid grid-cols-2 mt-40 p-14 ">
        <div className="z-[999] relative lg:-mt-0 xs:-mt-16 px-10 lg:translate-y-0 xs:translate-y-[5rem] xs:pt-5 pb-16 bg-white xs:m-10 lg:m-0">
          <p className="font-semibold text-xl inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
            The Best in town and latest models of touring vehicle you could ask
            for!
          </p>
          <p className="text-gray-500 text-lg">
            We are the only solution of your suddent trip, 24/7 booking service
            available. In our world, customer satisfaction is the utmost
            priority. As we speak , we tend to get in touch with our onboard
            customers during their ride. Personal assist, guide and offline map
            is also provided.
          </p>
          <p className="mt-5 text-gray-600 text-xs">
            By &nbsp;
            <span className="text-xs text-indigo-600 transition duration-500 ease-in-out">
              Andrew Phill
            </span>{" "}
            | &nbsp;
            <span className="text-xs text-indigo-600 transition duration-500 ease-in-out">
              Senior Executive
            </span>
            , &nbsp;
            <span className="text-xs text-indigo-600 transition duration-500 ease-in-out">
              CarStop
            </span>
          </p>
        </div>
        <div className="relative lg:h-[25rem] xs:h-[18rem] w-auto shadow-[48px_54px_20px_-26px_rgba(0,0,0,0.9)] bg-[#ffffff]">
          <Image
            className="object-cover"
            fill
            src="/abt2.jpeg"
            alt="Sunset in the mountains"
          />
        </div>
      </div>
    </div>
  );
}
