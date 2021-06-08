import Image from "next/image";
import React, { Component } from "react";
import { motion } from "framer-motion";
import { fadeInUp, stagger, fadeInUpImg } from "../animations/index.js";

export const Services = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      variants={stagger}
      className="relative flex flex-col justify-center items-center mb-32"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-3xl text-theme-blue font-semibold mb-5"
      >
        Serviços
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        className="sm:text-sm md:text-lg text-theme-blue font-semibold text-justify xs:max-w-xl md:max-w-2xl lg:max-w-4xl mb-10 p-2"
      >
        O melhor da sinalização digital e TV corporativa numa única aplicação de
        fácil utilização. Com o OnDisplay pode criar os seus próprios ecrãs e
        pode usufruir dos seus diferentes widgets como: Relógio, Meteorologia,
        Slide Show de vídeos e imagens e um rodapé de notícias. Pode também
        escolher um de diveros temas para o seu ecrã.
      </motion.p>

      <motion.div
        variants={stagger}
        className="flex md:flex-row xs:flex-col md:justify-between xs:items-center"
      >
        <motion.div
          variants={fadeInUpImg}
          whileHover={{ scale: 1.05 }}
          className="card relative flex flex-col justify-center items-center bg-white rounded-lg md:w-96 xs:w-16 xs:px-5 h-80 shadow-simple m-5"
        >
          <Image
            src="/assets/signage.svg"
            alt="signage"
            className="pointer-events-none"
            width={310}
            height={210}
          />
          <h2 className="text-2xl text-theme-blue mt-1">Sinalização Digital</h2>
        </motion.div>
        <motion.div
          variants={fadeInUpImg}
          whileHover={{ scale: 1.05 }}
          className="card relative flex flex-col justify-center items-center bg-white rounded-lg md:w-96 xs:w-16 xs:px-5 h-80 shadow-simple m-5"
        >
          <Image
            src="/assets/corporative.svg"
            alt="corporative"
            className="pointer-events-none"
            width={310}
            height={210}
          />
          <h2 className="text-2xl text-theme-blue mt-1">TV Corporativa</h2>
        </motion.div>
      </motion.div>

      <motion.div
        variants={stagger}
        className="grid md:grid-cols-4 xs:grid-cols-2"
      >
        <motion.div
          variants={fadeInUpImg}
          whileHover={{ scale: 1.05 }}
          className="card relative flex flex-col justify-center items-center bg-white rounded-lg md:w-40 xs:w-36 h-40 shadow-simple my-7 md:mx-7 xs:mx-2"
        >
          <Image
            src="/assets/clock.svg"
            alt="clock"
            className="pointer-events-none"
            width={65}
            height={65}
          />
        </motion.div>
        <motion.div
          variants={fadeInUpImg}
          whileHover={{ scale: 1.05 }}
          className="card relative flex flex-col justify-center items-center bg-white rounded-lg md:w-40 xs:w-36 h-40 shadow-simple my-7 md:mx-7 xs:mx-2"
        >
          <Image
            src="/assets/sun.svg"
            alt="sun"
            className="pointer-events-none"
            width={70}
            height={70}
          />
        </motion.div>
        <motion.div
          variants={fadeInUpImg}
          whileHover={{ scale: 1.05 }}
          className="card relative flex flex-col justify-center items-center bg-white rounded-lg md:w-40 xs:w-36 h-40 shadow-simple my-7 md:mx-7 xs:mx-2"
        >
          <Image
            src="/assets/img.svg"
            alt="image"
            className="pointer-events-none"
            width={70}
            height={70}
          />
        </motion.div>
        <motion.div
          variants={fadeInUpImg}
          whileHover={{ scale: 1.05 }}
          className="card relative flex flex-col justify-center items-center bg-white rounded-lg md:w-40 xs:w-36 h-40 shadow-simple my-7 md:mx-7 xs:mx-2"
        >
          <Image
            src="/assets/feeds.svg"
            alt="feeds"
            className="pointer-events-none"
            width={70}
            height={70}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
