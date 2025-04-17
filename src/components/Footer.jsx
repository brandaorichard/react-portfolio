import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-8" id="contact">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div>
            <h2 className="md:text-4xl text-2xl font-bold mb-6 text-white/50">
              Entre em <span className="text-gray-400">contato</span>
            </h2>
            <a
              className="md:text-4xl text-2xl font-semibold text-white underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-300"
              href="mailto:rbrandao98@hotmail.com"
            >
              rbrandao98@hotmail.com
            </a>
          </div>

          <div className="text-white/50 mt-12">
            <div className="mb-8">
              <p className="text-base mb-1">Telefone</p>
              <a
                href="tel:+5567996101874"
                className="text-xl font-semibold underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-400 transition duration-300"
              >
                +55 (67) 99610-1874
              </a>

          <ul className="flex gap-5 flex-wrap">
            <li>
              <a
                href="https://github.com/brandaorichard"
                aria-label="GitHub"
                className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
              >
                <AiFillGithub size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/brandaojpg"
                aria-label="Instagram"
                className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
              >
                <AiFillInstagram size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ricardo-brandao-dev/"
                aria-label="LinkedIn"
                className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
              >
                <AiFillLinkedin size={30} />
              </a>
            </li>
          </ul>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center mt-8 py-12">
          <h1 className="hidden md:block text-[6rem] md:text-[7rem] lg:text-[7rem] font-bold text-white opacity-10">
            RICARDO BRANDÃO
          </h1>

          <h1 className="md:hidden relative text-5xl font-bold text-white opacity-10">
            RICARDO
            <br />
            BRANDÃO
          </h1>
        </div>

        <div className="relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
          <p className="text-gray-200 text-sm lg:block">
            © 2025. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
