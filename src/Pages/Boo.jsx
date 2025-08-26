import React from "react";

const Boo = () => {
  return (
    <main className="h-dvh w-dvw flex flex-col justify-center items-center gap-6">
      {/* Upper Container */}
      <div className="upper-Container fit-size flex justify-center items-center gap-3 sm:gap-4">
        <span className="fit-size text-8xl md:text-9xl font-bold ">4</span>
        <img
          src="/Ghost.svg"
          alt="Ghost"
          className="Ghost-Img h-auto sm:h-full w-[130px] sm:w-auto"
        />
        <span className="fit-size text-8xl md:text-9xl font-bold ">4</span>
      </div>

      {/* Lower Container */}
      <div className="lower-Container fit-size text-center flex flex-col gap-4">
        {/* Heading Text */}
        <div className="missing-Text h-fit w-full font-bold text-3xl sm:text-4xl md:text-5xl">
          Boo! Page missing!
        </div>
        {/* Sub Text */}
        <div className="missing-Subtext h-fit w-full font-medium text-base sm:text-lg md:text-xl text-neutral-500">
          Whoops! This page must be a ghost - it's not here!
        </div>
      </div>
    </main>
  );
};

export default Boo;
