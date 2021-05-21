import Head from "next/head";
import Link from "next/link";
import animation from "../styles/Blob.module.css";
import { Header } from "../components/UI/Header";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex flex-col justify-center items-center w-full h-full max-w-screen-2xl mt-5 mr-auto ml-auto">
        <Head>
          <title>OnDisplay</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <h1
          id="Header"
          className="text-4xl text-theme-blue font-semibold text-center p-10"
        >
          Cria os teus próprios incrivéis ecrãs
          <br /> de sinalização digital
        </h1>
        <div className="bg-white rounded-lg w-2/3 h-30 shadow-simple mb-24"></div>
        <div
          id="Services"
          className="flex flex-col justify-center items-center"
        >
          <h1 className="text-3xl text-theme-blue font-semibold mb-5">
            Serviços
          </h1>
          <p className="text-l text-theme-blue font-semibold text-center max-w-xl mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
            Lorem Ipsum has been the standard dummy text ever since the.
          </p>
          <div className="flex justify-between">
            <div className="relative bg-white rounded-lg w-80 h-10 shadow-simple m-6">
              Sinalização Digital
            </div>
            <div className="relative bg-white rounded-lg w-80 h-10 shadow-simple m-6">
              TV Corporativa
            </div>
          </div>
          <div className="flex justify-between mb-24">
            <div className="relative bg-white rounded-lg w-32 h-32 shadow-simple m-7">
              Relógio
            </div>
            <div className="relative bg-white rounded-lg w-32 h-32 shadow-simple m-7">
              Meteorologia
            </div>
            <div className="relative bg-white rounded-lg w-32 h-32 shadow-simple m-7">
              SlideShow
            </div>
            <div className="relative bg-white rounded-lg w-32 h-32 shadow-simple m-7">
              Notícias
            </div>
          </div>
        </div>

        <div
          id="Features"
          className="flex flex-col justify-center items-center mb-24"
        >
          <h1 className="text-3xl text-theme-blue font-semibold mb-24">
            Funcionalidades
          </h1>

          <div className="relative bg-white rounded-lg w-96 h-10 shadow-simple m-6">
            CRIAR
          </div>
          <div className={`${animation.blob} mr-80 w-20 h-20`}></div>

          <div className="relative bg-white rounded-lg w-96 h-10 shadow-simple m-6">
            EDITAR
          </div>
          <div className={`${animation.blob} ml-80 w-20 h-20`}></div>

          <div className="relative bg-white rounded-lg w-96 h-10 shadow-simple m-6">
            APRESENTAR
          </div>
          <div className={`${animation.blob}  w-20 h-20`}></div>
        </div>

        <div
          id="Features"
          className="flex flex-col justify-center items-center mb-52"
        >
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
          <div className={`${animation.blob} right-0 mt-80 w-20 h-20`}></div>
          <div className={`${animation.blob} right-0 mt-0 w-10 h-10`}></div>
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
      </div>
      <div className={`${animation.blob} right-1/4 top-6/15 w-20 h-20`}></div>
    </div>
  );
}
