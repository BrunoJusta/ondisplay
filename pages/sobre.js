import Image from "next/image";
import animation from "../styles/Animation.module.css";

export default function About() {
  return (
    <div className="flex items-center mt-10 w-full max-w-screen-2xl mr-auto ml-auto">
      <div className="mt-20 relative flex flex-col items-center w-full">
        <h2 className="text-3xl text-theme-blue font-semibold mb-12">
          Sobre nós
        </h2>
        <p className="text-l text-theme-blue font-semibold text-justify xs:max-w-xl md:max-w-2xl lg:max-w-4xl mb-10 p-2">
          A plataforma OnDisplay, permite criar, gerir, editar e apresentar
          diferentes Ecrãs de Sinalização Digital e TV Corporativa.
        </p>
        <div className="card flex justify-center items-center xs:w-96 sm:w-auto bg-white rounded-lg shadow-simple p-1 mb-10">
          <Image
            className="rounded-md pointer-events-none"
            src="/assets/present.png"
            alt="screen"
            objectFit="cover"
            width={620}
            height={360}
          />
        </div>
        <p className="text-l text-theme-blue font-semibold text-justify xs:max-w-xl md:max-w-2xl lg:max-w-4xl p-2">
          A Sinalização Digital é uma forma de comunicação que usa tecnologias
          como LCD, LED e projeção para mostrar conteúdos multimédia e
          informativos. Atualmente a Sinalização Digital pode ser encontrada em
          diferentes espaços públicos, lojas, museus, hotéis, etc. e traz uma
          nova vida a qualquer ambiente comercial, estando projetada para expor
          e publicitar conteúdos de forma a chamar a atenção dos consumidores.
        </p>
        <p className="text-l text-theme-blue font-semibold text-justify xs:max-w-xl md:max-w-2xl lg:max-w-4xl mb-10 p-2">
          Assim com o OnDisplay pertendemmos proporcionar-lhe uma experiência
          simples e intuitiva para que o seu espaço ganhe outra vida!
        </p>
        <div
          className={`${animation.anime2} right-1/4 -bottom-2/5 w-20 h-20`}
        ></div>
      </div>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
          width: 100vw;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}
