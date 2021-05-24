import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="fixed flex items-center flex-wrap w-full top-0 z-50">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <Image src="/assets/logo.svg" alt="Logo" width={122} height={22} />
          </a>
        </Link>
        <button
          className=" inline-flex p-3 rounded lg:hidden text-theme-blue ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "bg-theme-primary bg-opacity-75" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto `}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-theme-blue font-semibold items-center justify-center hover:underline">
                Início
              </a>
            </Link>
            <Link href="/servicos">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-theme-blue font-semibold items-center justify-cente hover:underline">
                Serviços
              </a>
            </Link>
            <Link href="/funcionalidades">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-theme-blue font-semibold items-center justify-cente hover:underline">
                Funcionalidades
              </a>
            </Link>
            <Link href="/sobre">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-theme-blue font-semibold items-center justify-center hover:underline">
                Sobre nós
              </a>
            </Link>
            <Link href="/contactos">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-theme-blue font-semibold items-center justify-center hover:underline">
                Contactos
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
