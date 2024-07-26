import Link from "next/link";
import { MovingBorder } from "./MovingBorder";

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-screen ">
      <main className=" w-full h-full relative   ">
        <div className="flex flex-col-reverse lg:flex-row mt-8">
          <section className="w-full lg:w-[60%] flex flex-col lg:translate-x-10 md:px-2 lg:px-0 ">
            <div className="w-full mt-8 h-auto p-8 lg:pt-16  ">
              <h1 className=" md:text-5xl text-4xl text-gray-20 lg:text-6xl py-1.5 lg:flex xs:text-center">
                BOOK A CAR NOW
              </h1>
              <h1 className=" text-2xl lg:text-5xl font-extrabold py-1.5 lg:flex xs:text-center">
                SAVE UP TO{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text md:text-5xl text-3xl">
                  &nbsp;50 % &nbsp;
                </span>
                Discount
              </h1>
              <p className="w-auto py-12 font-sans text-gray-400 text-xl md:text-2xl lg:text-2xl tracking-wider xs:text-center xs:text-balance lg:text-start ">
                For rent we offer only new models of cars in perfect technical
                condition. All cars have full motor hull and diagnosed, we will
                select the best cars.
              </p>
              <div className="w-full flex items-center lg:justify-start xs:justify-center text-lg gap-2">
                <Link href="/cars">
                  <MovingBorder className="bg-gray-10 text-purple-700 text-xl">
                    Book Now
                  </MovingBorder>
                </Link>
              </div>
              <div className="pt-8  flex items-center gap-2 lg:gap-5 lg:justify-start xs:justify-center">
                <div className="flex flex-col items-center gap-2">
                  <h2 className="text-2xl font-bold">10+</h2>
                  <p className="text-gray-500 text-sm lg:text-base">
                    Years Experience
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <h2 className="text-2xl font-bold">562+</h2>
                  <p className="text-gray-500 text-sm lg:text-base">
                    Cases solved
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <h2 className="text-2xl font-bold">70+</h2>
                  <p className="text-gray-500 text-sm lg:text-base">
                    Business Partners
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative w-full lg:w-[67%] flex items-center ">
            <div className="lg:hidden absolute left-[50%] -top-[3%] -translate-x-1/2 h-[100%] w-[67%] bg-gradient-to-t dark:from-indigo-500 via-fuchsia-700 to-sky-50 dark:to-transparent rounded-full "></div>
            <img
              src="/heroo.png"
              alt="Hero Image"
              className="h-full w-full object-contain z-10"
            />

            <div className="hidden lg:block absolute left-1/4 top-[-18rem] md:top-[-16rem] bottom-1/4  w-[50%] h-[90%] rounded-[70px] rotate-[60deg] origin-bottom-left lg:-translate-x-10  bg-gradient-to-t dark:from-indigo-500 via-fuchsia-300 to-sky-50 dark:to-transparent"></div>
          </section>
        </div>
      </main>
    </section>
  );
};

export default Hero;
