import Image from "next/image";

export default function About() {
  return (
    <div className="flex items-center mt-10 w-full max-w-screen-2xl mr-auto ml-auto">
      <div className="mt-20 relative flex flex-col items-center w-full">
        <h1 className="text-3xl text-theme-blue font-semibold mb-12">
          Sobre nós
        </h1>
        <p className="text-l text-theme-blue font-semibold text-center max-w-xl mb-10 p-2">
          A plataforma OnDisplay, permite criar, gerir, editar e apresentar
          diferentes Ecrãs de Sinalização Digital e TV Corporativa.
        </p>
        <div className="card flex justify-center items-center xs:w-80 sm:w-auto bg-white rounded-lg shadow-simple p-1 mb-10">
          <Image
            className="rounded-md"
            src="/assets/present.png"
            alt="screen"
            objectFit="cover"
            width={520}
            height={300}
          />
        </div>
        <p className="text-l text-theme-blue font-semibold text-center max-w-xl mb-10 p-2">
          A plataforma OnDisplay, permite criar, gerir, editar e apresentar
          diferentes Ecrãs de Sinalização Digital e TV Corporativa.
        </p>
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
