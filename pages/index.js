import Head from "next/head";
import blobs from "../styles/Blob.module.css";
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
        <div
          id="Services"
          className="flex flex-col justify-center items-center"
        >
          <h1 className="text-3xl text-theme-blue font-semibold mb-5">
            Serviços
          </h1>
          <p className="text-l text-theme-blue font-semibold text-center max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
            Lorem Ipsum has been the standard dummy text ever since the.
          </p>
        </div>
      </div>
      <div className={blobs.first}></div>
      <div className={blobs.second}></div>
    </div>
  );
}
