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
      <nav className="flex items-center flex-wrap">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <Image src="/assets/logo.svg" alt="Logo" width={122} height={22} />
          </a>
        </Link>
        <button
          className=" inline-flex p-3 rounded lg:hidden text-blueApp ml-auto hover:text-white outline-none"
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
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blueApp font-semibold items-center justify-center hover:text-white ">
                Início
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blueApp font-semibold items-center justify-cente hover:text-white">
                Serviços
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blueApp font-semibold items-center justify-cente hover:text-white">
                Funcionalidades
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blueApp font-semibold items-center justify-center hover:text-white">
                Sobre nós
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blueApp font-semibold items-center justify-center hover:text-white">
                Contactos
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

/* fazer container 1400 */