import Image from "next/image";
import React, { Component } from "react";
import animation from "../styles/Animation.module.css";

export const Features = () => {
  return (
    <div className="relative flex flex-col items-center w-full">
      <h2 className="text-3xl text-theme-blue font-semibold xs:mb-20 md:mb-32">
        Funcionalidades
      </h2>

      <div className="relative flex md:flex-row xs:flex-col-reverse justify-center items-center xs:mb-20 md:mb-48">
        <div className="card flex justify-center items-center xs:w-80 sm:w-auto bg-white rounded-lg shadow-simple p-1 ">
          <Image
            className="rounded-md pointer-events-none"
            src="/assets/create.png"
            alt="create screen"
            objectFit="cover"
            width={520}
            height={300}
          />
        </div>
        <div
          className={`${animation.anime2} left-0 xs:w-10 md:w-20 xs:h-10 md:h-20`}
        ></div>

        <div className="flex flex-col justify-center items-center">
          <h2 className="xs:text-5xl md:text-6xl text-theme-gray font-extrabold mb-5">
            CRIAR
          </h2>
          <p className="sm:text-sm md:text-lg xs:mb-10 md:mb-0 text-theme-blue font-semibold text-center max-w-md px-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
            Lorem Ipsum has been the standard dummy text ever since the.
          </p>
        </div>
      </div>

      <div className="relative flex md:flex-row xs:flex-col justify-center items-center xs:mb-20 md:mb-48">
        <div className="flex flex-col justify-center items-center">
          <h2 className="xs:text-5xl md:text-6xl text-theme-gray  font-extrabold mb-5">
            EDITAR
          </h2>
          <p className="sm:text-sm md:text-lg xs:mb-10 md:mb-0 text-theme-blue font-semibold text-center max-w-md px-10 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
            Lorem Ipsum has been the standard dummy text ever since the.
          </p>
        </div>
        <div className="card flex justify-center items-center xs:w-80 sm:w-auto bg-white rounded-lg shadow-simple p-1 ">
          <Image
            className="rounded-md pointer-events-none"
            src="/assets/edit.png"
            alt="edit screen"
            objectFit="cover"
            width={520}
            height={300}
          />
        </div>
        <div
          className={`${animation.anime1} right-0 xs:w-10 md:w-20 xs:h-10 md:h-20`}
        ></div>
      </div>

      <div className="relative flex md:flex-row xs:flex-col-reverse justify-center items-center xs:mb-20 md:mb-48">
        <div className="card flex justify-center items-center xs:w-80 sm:w-auto bg-white rounded-lg shadow-simple p-1 ">
          <Image
            className="rounded-md pointer-events-none"
            src="/assets/present.png"
            alt="screen"
            objectFit="cover"
            width={520}
            height={300}
          />
        </div>
        <div
          className={`${animation.anime2} left-0 xs:w-10 md:w-20 xs:h-10 md:h-20`}
        ></div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="xs:text-5xl md:text-6xl text-theme-gray  font-extrabold mb-5">
            APRESENTAR
          </h2>
          <p className="sm:text-sm md:text-lg xs:mb-10 md:mb-0 text-theme-blue font-semibold text-center max-w-md px-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
            Lorem Ipsum has been the standard dummy text ever since the.
          </p>
        </div>
      </div>
    </div>
  );
};
