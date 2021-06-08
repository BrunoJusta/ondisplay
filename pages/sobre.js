import Image from "next/image";
import animation from "../styles/Animation.module.css";
import { fadeInUp, stagger, fadeInRight } from "../animations/index.js";
import { motion } from "framer-motion";

/* initial={{ x: 200, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
transition={{ delay: 0.2 }} */

export default function About() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className="flex items-center mt-10 w-full max-w-screen-2xl mr-auto ml-auto"
    >
      <motion.div
        variants={stagger}
        className="mt-20 relative flex flex-col items-center w-full"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl text-theme-blue font-semibold mb-12"
        >
          Sobre nós
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="sm:text-sm md:text-lg text-theme-blue font-semibold text-justify xs:max-w-xl md:max-w-2xl lg:max-w-4xl mb-10 p-2"
        >
          A plataforma OnDisplay, permite criar, gerir, editar e apresentar
          diferentes Ecrãs de Sinalização Digital e TV Corporativa.
        </motion.p>
        <motion.div
          variants={fadeInRight}
          whileHover={{ scale: 1.05 }}
          className="card flex justify-center items-center xs:w-96 sm:w-auto bg-white rounded-lg shadow-simple p-1 mb-10"
        >
          <Image
            className="rounded-md pointer-events-none"
            src="/assets/present.png"
            alt="screen"
            objectFit="cover"
            width={620}
            height={360}
          />
        </motion.div>
        <motion.p
          variants={fadeInUp}
          className="sm:text-sm md:text-lg text-theme-blue font-semibold text-justify xs:max-w-xl md:max-w-2xl lg:max-w-4xl p-2"
        >
          A Sinalização Digital é uma forma de comunicação que usa tecnologias
          como LCD, LED e projeção para mostrar conteúdos multimédia e
          informativos. Atualmente a Sinalização Digital pode ser encontrada em
          diferentes espaços públicos, lojas, museus, hotéis, etc. e traz uma
          nova vida a qualquer ambiente comercial, estando projetada para expor
          e publicitar conteúdos de forma a chamar a atenção dos consumidores.
        </motion.p>
        <motion.p
          variants={fadeInUp}
          className="sm:text-sm md:text-lg text-theme-blue font-semibold text-justify xs:max-w-xl md:max-w-2xl lg:max-w-4xl mb-10 p-2"
        >
          Assim com o OnDisplay pertendemmos proporcionar-lhe uma experiência
          simples e intuitiva para que o seu espaço ganhe outra vida!
        </motion.p>
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`${animation.anime2} right-1/4 -bottom-2/5 w-20 h-20`}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}
