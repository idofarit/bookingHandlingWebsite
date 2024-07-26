import React from "react";
import { FlipWords } from "../home/ui/flip-words";

export function FlipWordsComp() {
  const words = ["LandScapes", "Mountain", "Desert", "many more.."];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl xl:text-6xl leading-tight font-serif font-black mx-auto text-neutral-100 dark: from-purple-600 via-red-600 to-gray-800 bg-gradient-to-r bg-clip-text text-transparent">
        Explore <br />
        <FlipWords words={words} /> <br />
        with CarStop.
      </div>
    </div>
  );
}
