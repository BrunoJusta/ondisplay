import Head from "next/head";
import Link from "next/link";
import React, { Component } from "react";
import ReactPlayer from "react-player";
import animation from "../styles/Animation.module.css";
import { Header } from "../components/UI/Header";
import { Features } from "../components/Features";
import { Services } from "../components/Services";
import { Contacts } from "../components/Contacts";
import { animate, motion } from "framer-motion";
import { fadeInUp, home_stagger } from "../animations/index.js";

export default function Home() {
  const videoStyle = {
    borderRadius: "0.3rem",
    borderWidth: "5px",
    borderColor: "#FFFFFF",
    boxShadow: "0px 0px 11px -2px #a8a8a8",
    minWidth: "340px",
  };
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className="relative flex flex-col items-center w-full h-full pb-20 pt-24"
    >
      <Head>
        <title>OnDisplay - Sinalização Digital e TV Corporativa</title>
        <meta
          property="title"
          content="OnDisplay - Sinalização Digital e TV Corporativa"
          key="title"
        />
        <meta
          property="description"
          content="O OnDisplay é uma plataforma que permite criar e personalizar ecrãs de sinalização digital"
          key="description"
        />
        <meta
          property="keywords"
          content="OnDisplay, plataforma, criar, editar, apresentar, sinalização, personalizar, temas, widget, digital, tv, corporativa"
          key="keywords"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <motion.div
        variants={home_stagger}
        className="flex flex-col items-center w-full  max-w-screen-2xl"
      >
        <motion.div
          variants={fadeInUp}
          className="relative flex flex-col justify-center items-center xs:mb-20 md:mb-40"
        >
          <h1 className="xs:text-xl lg:text-4xl xl:text-5xl text-theme-blue font-semibold text-center mb-10">
            Cria os teus próprios incríveis ecrãs
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
            alt="screen samples"
          />
        </motion.div>
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`${animation.anime2} right-96 top-80 xs:w-10 md:w-20 xs:h-10 md:h-20`}
        ></motion.div>
        <Services />
        <Features />

        <motion.div
          variants={fadeInUp}
          className="relative flex flex-col justify-center items-center mb-32"
        >
          <h2 className="text-3xl text-theme-blue font-semibold mb-10">
            Sobre nós
          </h2>
          <p className="sm:text-sm md:text-lg text-theme-blue font-semibold text-center max-w-xl mb-10 p-2">
            A plataforma OnDisplay, permite criar, gerir, editar e apresentar
            diferentes Ecrãs de Sinalização Digital e TV Corporativa.
          </p>
          <Link href="/sobre">
            <div className="cursor-pointer bg-gray-200 border-theme-blue border-2 rounded-md text-theme-blue font-semibold px-6 py-2 hover:text-gray-200 hover:bg-theme-blue">
              Mais sobre nós
            </div>
          </Link>
          <div
            className={`${animation.anime1} -right-3/4 -bottom-2/5 xs:w-10 md:w-20 xs:h-10 md:h-20 xs:hidden md:block`}
          ></div>
          <div
            className={`${animation.anime2} -right-1/4 -bottom-2/5 w-10 h-10`}
          ></div>
        </motion.div>

        <Contacts />
      </motion.div>
    </motion.div>
  );
}
