import Image from "next/image";
import React, { Component } from "react";
import animation from "../styles/Animation.module.css";
import { motion } from "framer-motion";
import { fadeInUp, stagger, fadeInRight } from "../animations/index.js";

export const Features = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      variants={stagger}
      className="relative flex flex-col items-center w-full"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-3xl text-theme-blue font-semibold xs:mb-20 md:mb-32"
      >
        Funcionalidades
      </motion.h2>

      <motion.div
        variants={stagger}
        className="relative flex md:flex-row xs:flex-col-reverse justify-center items-center xs:mb-20 md:mb-48"
      >
        <motion.div
          variants={fadeInRight}
          whileHover={{ scale: 1.05 }}
          className="card flex justify-center items-center xs:w-80 sm:w-auto bg-white rounded-lg shadow-simple p-1 "
        >
          <Image
            className="rounded-md pointer-events-none"
            src="/assets/create.png"
            alt="create screen"
            objectFit="cover"
            width={520}
            height={300}
          />
        </motion.div>
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`${animation.anime2} left-0 xs:w-10 md:w-20 xs:h-10 md:h-20`}
        ></motion.div>

        <motion.div
          variants={stagger}
          className="flex flex-col justify-center items-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="xs:text-5xl md:text-6xl text-theme-gray font-extrabold mb-5"
          >
            CRIAR
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="sm:text-sm md:text-lg xs:mb-10 md:mb-0 text-theme-blue font-semibold text-justify max-w-md px-10"
          >
            Com o OnDisplay pode criar um ecrã, escolhendo um dos diferentes
            templates, disponíveis, basta selecionar o template e atribuir um
            nome ao seu ecrã.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={stagger}
        className="relative flex md:flex-row xs:flex-col justify-center items-center xs:mb-20 md:mb-48"
      >
        <motion.div
          variants={stagger}
          className="flex flex-col justify-center items-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="xs:text-5xl md:text-6xl text-theme-gray  font-extrabold mb-5"
          >
            EDITAR
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="sm:text-sm md:text-lg xs:mb-10 md:mb-0 text-theme-blue font-semibold text-justify max-w-md px-10 "
          >
            Após criar o seu ecrã, pode agora personalizá-lo, escolher que
            notícias quer que sejam apresentadas, que imagens quer que apareçam
            bem como o tempo que estas são apresentadas. Pode também definir a
            cidade para a meteorologia, bem como definir se quer um relógio
            digital ou analógico, por fim pode também alterar o tema do seu
            ecrã.
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeInRight}
          whileHover={{ scale: 1.05 }}
          className="card flex justify-center items-center xs:w-80 sm:w-auto bg-white rounded-lg shadow-simple p-1 "
        >
          <Image
            className="rounded-md pointer-events-none"
            src="/assets/edit.png"
            alt="edit screen"
            objectFit="cover"
            width={520}
            height={300}
          />
        </motion.div>
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`${animation.anime1} right-0 xs:w-10 md:w-20 xs:h-10 md:h-20`}
        ></motion.div>
      </motion.div>

      <motion.div
        variants={stagger}
        className="relative flex md:flex-row xs:flex-col-reverse justify-center items-center xs:mb-20 md:mb-48"
      >
        <motion.div
          variants={fadeInRight}
          whileHover={{ scale: 1.05 }}
          className="card flex justify-center items-center xs:w-80 sm:w-auto bg-white rounded-lg shadow-simple p-1 "
        >
          <Image
            className="rounded-md pointer-events-none"
            src="/assets/present.png"
            alt="screen"
            objectFit="cover"
            width={520}
            height={300}
          />
        </motion.div>
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`${animation.anime2} left-0 xs:w-10 md:w-20 xs:h-10 md:h-20`}
        ></motion.div>
        <motion.div
          variants={stagger}
          className="flex flex-col justify-center items-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="xs:text-5xl md:text-6xl text-theme-gray  font-extrabold mb-5"
          >
            APRESENTAR
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="sm:text-sm md:text-lg xs:mb-10 md:mb-0 text-theme-blue font-semibold text-justify max-w-md px-10"
          >
            Após completar as etapas anteriores o seu ecrã está agora à
            distância de um clique para ser apresentado. Pode apresentar o mesmo
            ecrã num número ilimitado de ecrãs de diferentes tamanhos, tudo isto
            apartir do seu browser.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
