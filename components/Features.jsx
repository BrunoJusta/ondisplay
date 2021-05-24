import Image from "next/image";
import React, { Component } from "react";
import animation from "../styles/Animation.module.css";

export const Features = () => {
  return (
    <div className="relative flex flex-col items-center w-full">
      <h1 className="text-3xl text-theme-blue font-semibold mb-32">
        Funcionalidades
      </h1>

      <div className="relative flex md:flex-row xs:flex-col  justify-center items-center mb-56">
        <div className="card flex justify-center items-center bg-white rounded-lg shadow-simple p-1 ">
          <Image
            className="rounded-md"
            src="/assets/create.png"
            alt="Logo"
            objectFit="cover"
            width={520}
            height={300}
          />
        </div>
        <div className={`${animation.anime2} left-0 w-20 h-20`}></div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl text-theme-gray font-extrabold mb-5">
            CRIAR
          </h1>
          <p className="text-l text-theme-blue font-semibold text-center max-w-md px-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
            Lorem Ipsum has been the standard dummy text ever since the.
          </p>
        </div>
      </div>

      <div className="relative flex md:flex-row xs:flex-col justify-center items-center mb-56">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl text-theme-gray  font-extrabold mb-5">
            EDITAR
          </h1>
          <p className="text-l text-theme-blue font-semibold text-center max-w-md px-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
            Lorem Ipsum has been the standard dummy text ever since the.
          </p>
        </div>
        <div className="card flex justify-center items-center bg-white rounded-lg shadow-simple p-1 ">
          <Image
            className="rounded-md"
            src="/assets/edit.png"
            alt="Logo"
            objectFit="cover"
            width={520}
            height={300}
          />
        </div>
        <div className={`${animation.anime1} right-0 w-20 h-20`}></div>
      </div>

      <div className="relative flex md:flex-row xs:flex-col justify-center items-center mb-48">
        <div className="card flex justify-center items-center bg-white rounded-lg shadow-simple p-1 ">
          <Image
            className="rounded-md"
            src="/assets/present.png"
            alt="Logo"
            objectFit="cover"
            width={520}
            height={300}
          />
        </div>
        <div className={`${animation.anime2} left-0 w-20 h-20`}></div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl text-theme-gray  font-extrabold mb-5">
            APRESENTAR
          </h1>
          <p className="text-l text-theme-blue font-semibold text-center max-w-md px-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
            Lorem Ipsum has been the standard dummy text ever since the.
          </p>
        </div>
      </div>
    </div>
  );
};
