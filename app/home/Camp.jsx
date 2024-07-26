import Image from "next/image";
import { CardStackItem } from "./ClipCards";

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 xs:py-36 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar md:mt-28 xs:mt-16 p-[1.2rem] flex w-full items-start justify-start gap-8 lg:h-[520px] xl:h-[640px]">
        <CardStackItem />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-16 xl:-mt-[7rem] s:mt-[5rem] lg:mr-6">
        <div className="bg-gradient-to-b from-sky-100 via-purple-400 to-sky-600 z-[100] p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-gray-20">
            <strong className="text-purple-700">Weekend Planned</strong>{" "}
            <p className="text-violet-600 font-mono">But No cars?</p>
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-gray-100">
            Come to Us, Whenever you feel the urge to ride. We have variety of
            car ranges that can well serve you and your desire to roam around
            the city, forest, hill or camping resorts!
          </p>
          <Image
            src="/wheel.svg"
            alt="camp-2"
            width={350}
            height={219}
            className="camp-quote z-[-1]"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
