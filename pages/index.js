import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import ReactPlayer from "react-player";
import animation from "../styles/Animation.module.css";
import { Header } from "../components/UI/Header";

export default function Home() {
  const videoStyle = {
    borderRadius: "0.3rem",
    borderWidth: "5px",
    borderColor: "#FFFFFF",
    boxShadow: "0px 0px 11px -2px #a8a8a8",
  };
  return (
    <div className="relative flex flex-col items-center w-full h-full pb-20 pt-24">
      <Head>
        <title>OnDisplay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col items-center w-full  max-w-screen-2xl">
        <div className="relative flex flex-col justify-center items-center mb-56">
          <h1 className="sm:text-sm md:text-2xl lg:text-4xl xl:text-5xl text-theme-blue font-semibold text-center mb-10">
            Cria os teus próprios incrivéis ecrãs
            <br /> de sinalização digital
          </h1>
          <ReactPlayer
            className="react-player fixed-bottom rounded border-white "
            url="videos/screen.mp4"
            controls={false}
            volume={0}
            muted={true}
            loop={true}
            playing={true}
            height="100%"
            width="65%"
            style={videoStyle}
          />
          <div
            className={`${animation.anime2} right-28 bottom-0 w-20 h-20`}
          ></div>
        </div>
        <div className="relative flex flex-col justify-center items-center mb-32">
          <h1 className="text-3xl text-theme-blue font-semibold mb-5">
            Serviços
          </h1>
          <p className="text-l text-theme-blue font-semibold text-center max-w-xl mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
            Lorem Ipsum has been the standard dummy text ever since the.
          </p>

          <div className="flex justify-between">
            <div className="relative flex flex-col justify-center items-center bg-white rounded-lg w-96 h-80 shadow-simple m-5">
              <Image
                src="/assets/signage.svg"
                alt="Logo"
                width={310}
                height={210}
              />
              <h1 className="text-2xl text-theme-blue mt-1">
                Sinalização Digital
              </h1>
            </div>
            <div className="relative flex flex-col justify-center items-center bg-white rounded-lg w-96 h-80 shadow-simple m-5">
              <Image
                src="/assets/corporative.svg"
                alt="Logo"
                width={310}
                height={210}
              />
              <h1 className="text-2xl text-theme-blue mt-1">TV Corporativa</h1>
            </div>
          </div>

          <div className="flex mb-24">
            <div className="relative flex flex-col justify-center items-center bg-white rounded-lg w-40 h-40 shadow-simple m-7">
              <Image
                src="/assets/clock.svg"
                alt="Logo"
                width={65}
                height={65}
              />
            </div>
            <div className="relative flex flex-col justify-center items-center bg-white rounded-lg w-40 h-40 shadow-simple m-7">
              <Image src="/assets/sun.svg" alt="Logo" width={70} height={70} />
            </div>
            <div className="relative flex flex-col justify-center items-center bg-white rounded-lg w-40 h-40 shadow-simple m-7">
              <Image src="/assets/img.svg" alt="Logo" width={70} height={70} />
            </div>
            <div className="relative flex flex-col justify-center items-center bg-white rounded-lg w-40 h-40 shadow-simple m-7">
              <Image
                src="/assets/feeds.svg"
                alt="Logo"
                width={70}
                height={70}
              />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center w-full">
          <h1 className="text-3xl text-theme-blue font-semibold mb-48">
            Funcionalidades
          </h1>

          <div className="relative flex justify-center items-center mb-80">
            <div className="shadow-simple rounded-2xl inline-block overflow-hidden">
              <Image
                src="/assets/create.png"
                alt="Logo"
                width={500}
                height={250}
              />
            </div>

            <div className={`${animation.anime2} left-0 w-20 h-20`}></div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-6xl text-theme-gray font-extrabold mb-5">
                CRIAR
              </h1>
              <p className="text-l text-theme-blue font-semibold text-center max-w-xl mb-10">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting. Lorem Ipsum has been the standard dummy text ever
                since the.
              </p>
            </div>
          </div>

          <div className="relative flex justify-center items-center mb-80">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-6xl text-theme-gray  font-extrabold mb-5">
                EDITAR
              </h1>
              <p className="text-l text-theme-blue font-semibold text-center max-w-xl mb-10">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting. Lorem Ipsum has been the standard dummy text ever
                since the.
              </p>
            </div>{" "}
            <div className="shadow-simple rounded-2xl inline-block overflow-hidden">
              <Image
                src="/assets/edit.png"
                alt="Logo"
                width={500}
                height={250}
              />
            </div>
            <div className={`${animation.anime1} right-0 w-20 h-20`}></div>
          </div>

          <div className="relative   flex justify-center items-center mb-48">
            <div className="shadow-simple rounded-2xl inline-block overflow-hidden">
              <Image
                src="/assets/present.png"
                alt="Logo"
                width={500}
                height={240}
              />
            </div>
            <div className={`${animation.anime2} left-0 w-20 h-20`}></div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-6xl text-theme-gray  font-extrabold mb-5">
                APRESENTAR
              </h1>
              <p className="text-l text-theme-blue font-semibold text-center max-w-xl mb-10">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting. Lorem Ipsum has been the standard dummy text ever
                since the.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-center items-center mb-32">
          <h1 className="text-3xl text-theme-blue font-semibold mb-10">
            Sobre nós
          </h1>
          <p className="text-l text-theme-blue font-semibold text-center max-w-xl mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
            Lorem Ipsum has been the standard dummy text ever since the.
          </p>
          <Link href="/sobre">
            <div className="cursor-pointer bg-gray-200 border-theme-blue border-2 rounded-md text-theme-blue font-semibold px-6 py-2">
              Mais sobre nós
            </div>
          </Link>
        </div>
        <div
          className={`${animation.anime1} right-0 bottom-1/10 mt-80 w-20 h-20`}
        ></div>
        <div
          className={`${animation.anime2} right-0 bottom-1/10  w-10 h-10`}
        ></div>
        <div className="relative flex flex-col justify-center items-center mb-32">
          <h1 className="text-3xl text-theme-blue font-semibold mb-10">
            Entre em contacto
          </h1>
        </div>
      </div>
      {/*  
       
      

        <div
          id="Features"
          className="flex flex-col justify-center items-center mb-24"
        >
          <h1 className="text-3xl text-theme-blue font-semibold mb-24">
            Funcionalidades
          </h1>

          
        </div>

        <div
          id="Features"
          className="flex flex-col justify-center items-center mb-52"
        >
          
        </div>

        <div
          id="Contacts"
          className="flex flex-col justify-center items-center mb-24"
        >
          <h1 className="text-3xl text-theme-blue font-semibold mb-10">
            Entre em Contacto
          </h1>

          <div className="relative bg-white rounded-lg w-96 h-96 shadow-simple m-6"></div>
        </div>
       
      </div> */}
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 200%;
          width: 100vw;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}
