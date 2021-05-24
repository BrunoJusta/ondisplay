import Image from "next/image";
import React, { Component } from "react";

export const Services = () => {
  return (
    <div className="relative flex flex-col justify-center items-center mb-32">
      <h1 className="text-3xl text-theme-blue font-semibold mb-5">Serviços</h1>
      <p className="text-l text-theme-blue font-semibold text-center max-w-xl mb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem
        Ipsum has been the standard dummy text ever since the.
      </p>

      <div className="flex md:flex-row xs:flex-col  justify-between">
        <div className="card relative flex flex-col justify-center items-center bg-white rounded-lg w-96 h-80 shadow-simple m-5">
          <Image
            src="/assets/signage.svg"
            alt="Logo"
            width={310}
            height={210}
          />
          <h1 className="text-2xl text-theme-blue mt-1">Sinalização Digital</h1>
        </div>
        <div className="card relative flex flex-col justify-center items-center bg-white rounded-lg w-96 h-80 shadow-simple m-5">
          <Image
            src="/assets/corporative.svg"
            alt="Logo"
            width={310}
            height={210}
          />
          <h1 className="text-2xl text-theme-blue mt-1">TV Corporativa</h1>
        </div>
      </div>

      <div className="grid md:grid-cols-4 xs:grid-cols-2">
        <div className="card relative flex flex-col justify-center items-center bg-white rounded-lg w-40 h-40 shadow-simple m-7">
          <Image src="/assets/clock.svg" alt="Logo" width={65} height={65} />
        </div>
        <div className="card relative flex flex-col justify-center items-center bg-white rounded-lg w-40 h-40 shadow-simple m-7">
          <Image src="/assets/sun.svg" alt="Logo" width={70} height={70} />
        </div>
        <div className="card relative flex flex-col justify-center items-center bg-white rounded-lg w-40 h-40 shadow-simple m-7">
          <Image src="/assets/img.svg" alt="Logo" width={70} height={70} />
        </div>
        <div className="card relative flex flex-col justify-center items-center bg-white rounded-lg w-40 h-40 shadow-simple m-7">
          <Image src="/assets/feeds.svg" alt="Logo" width={70} height={70} />
        </div>
      </div>
    </div>
  );
};
