import Image from "next/image";
import React, { Component } from "react";

export const Services = () => {
  return (
    <div className="relative flex flex-col justify-center items-center mb-32">
      <h1 className="text-3xl text-theme-blue font-semibold mb-5">Serviços</h1>
      <p className="text-l text-theme-blue font-semibold text-center max-w-xl mb-10 p-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem
        Ipsum has been the standard dummy text ever since the.
      </p>

      <div className="flex md:flex-row xs:flex-col md:justify-between xs:items-center">
        <div className="card relative flex flex-col justify-center items-center bg-white rounded-lg md:w-96 xs:w-16 xs:px-5 h-80 shadow-simple m-5">
          <Image
            src="/assets/signage.svg"
            alt="signage"
            width={310}
            height={210}
          />
          <h1 className="text-2xl text-theme-blue mt-1">Sinalização Digital</h1>
        </div>
        <div className="card relative flex flex-col justify-center items-center bg-white rounded-lg md:w-96 xs:w-16 xs:px-5 h-80 shadow-simple m-5">
          <Image
            src="/assets/corporative.svg"
            alt="corporative"
            width={310}
            height={210}
          />
          <h1 className="text-2xl text-theme-blue mt-1">TV Corporativa</h1>
        </div>
      </div>

      <div className="grid md:grid-cols-4 xs:grid-cols-2">
        <div className="card relative flex flex-col justify-center items-center bg-white rounded-lg md:w-40 xs:w-36 h-40 shadow-simple my-7 md:mx-7 xs:mx-2">
          <Image src="/assets/clock.svg" alt="clock" width={65} height={65} />
        </div>
        <div className="card relative flex flex-col justify-center items-center bg-white rounded-lg md:w-40 xs:w-36 h-40 shadow-simple my-7 md:mx-7 xs:mx-2">
          <Image src="/assets/sun.svg" alt="sun" width={70} height={70} />
        </div>
        <div className="card relative flex flex-col justify-center items-center bg-white rounded-lg md:w-40 xs:w-36 h-40 shadow-simple my-7 md:mx-7 xs:mx-2">
          <Image src="/assets/img.svg" alt="image" width={70} height={70} />
        </div>
        <div className="card relative flex flex-col justify-center items-center bg-white rounded-lg md:w-40 xs:w-36 h-40 shadow-simple my-7 md:mx-7 xs:mx-2">
          <Image src="/assets/feeds.svg" alt="feeds" width={70} height={70} />
        </div>
      </div>
    </div>
  );
};
