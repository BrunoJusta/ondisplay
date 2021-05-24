import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import useScrollPosition from "../../hooks/useScrollPosition.js";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const burgerStyle = {
    outline: "none",
  };

  const scrollPos = useScrollPosition();

  return (
    <>
      <nav
        className={`${
          scrollPos >= 200
            ? "bg-theme-primary "
            : "md:bg-transparent xs:bg-theme-primary"
        } fixed flex items-center flex-wrap w-full top-0 z-50 transition-all duration-200 ease-in-out`}
      >
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <Image src="/assets/logo.svg" alt="Logo" width={122} height={22} />
          </a>
        </Link>
        <button
          className="inline-flex p-3 rounded md:hidden text-theme-blue ml-auto"
          style={burgerStyle}
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
            active ? "bg-theme-primary " : "hidden"
          }   w-full md:inline-flex md:flex-grow md:w-auto `}
        >
          <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto">
            <Link href="/">
              <a
                onClick={handleClick}
                className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-theme-blue font-semibold items-center justify-center hover:underline"
              >
                Início
              </a>
            </Link>
            <Link href="/servicos">
              <a
                onClick={handleClick}
                className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-theme-blue font-semibold items-center justify-cente hover:underline"
              >
                Serviços
              </a>
            </Link>
            <Link href="/funcionalidades">
              <a
                onClick={handleClick}
                className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-theme-blue font-semibold items-center justify-cente hover:underline"
              >
                Funcionalidades
              </a>
            </Link>
            <Link href="/sobre">
              <a
                onClick={handleClick}
                className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-theme-blue font-semibold items-center justify-center hover:underline"
              >
                Sobre nós
              </a>
            </Link>
            <Link href="/contactos">
              <a
                onClick={handleClick}
                className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-theme-blue font-semibold items-center justify-center hover:underline"
              >
                Contactos
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
