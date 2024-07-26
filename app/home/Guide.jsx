import Image from "next/image";
import React from "react";
import { FlipWordsComp } from "../home/FlipWords";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="regular-16 text-gray-30 md:text-xl text-sm xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>

      {/* parallax */}
      <div className="w-[90vw]  opacity-[0.75] rounded-2xl  parallax flex items-center justify-center">
        <div className="text-white text-center relative">
          <FlipWordsComp />
        </div>
      </div>

      {/* parallax */}
    </section>
  );
};

export default Guide;
