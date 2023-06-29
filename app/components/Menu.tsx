"use client";
import { useState } from "react";
import { Marcellus, Raleway, Open_Sans } from "@next/font/google";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { MdEditNote } from "react-icons/md";
import { motion } from "framer-motion";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-raleway",
});

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed top-0 right-0 bottom-0 w-3/4 md:w-64 bg-[#B22222] text-white p-4 flex flex-col shadow-black shadow-xl justify-end z-99999">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`${raleway.variable} font-raleway text-white text-sm text-center px-2 py-2 md:px-4 md:py-2 bg-gradient-to-r from-[#404040] to-[#B22222] rounded-full shadow-xl shadow-black outline hover:outline-none transform mb-4 outline-white flex items-center`}
        >
          <span className="mr-2">Chamada para ação</span>
          <MdEditNote className="h-8 w-8 mx-auto my-auto" />
        </motion.button>

        <h3
          className={`$marcellus.variable} font-marcellus text-xl md:text-2xl mb-4`}
        >
          Navegue pelo site
        </h3>
        <ul className={`space-y-2 mb-2 ${raleway.variable} font-raleway`}>
          <li className="hover:underline">
            <Link href="/#equipe">Nossa Equipe</Link>
          </li>

          <li className="hover:underline">
            <Link href="/#estudio">O Estúdio</Link>
          </li>
          <li className="hover:underline">
            <Link href="/#depoimentos">Depoimentos</Link>
          </li>

          <li className="hover:underline">
            <Link href="/#faq">F.A.Q</Link>
          </li>

          <li className="hover:underline">
            <Link href="/#contatos">Contatos</Link>
          </li>
        </ul>
        <div className="flex items-center">
          <Link
            href="https://www.instagram.com/r_ennan_silva/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-[#C13584] h-8 w-8" />
          </Link>
          <p className="text-base sm:text-lg text-white ml-4">Instagram</p>
        </div>

        <div className="flex items-center mt-4">
          <Link
            href="https://github.com/Rennan20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-700 h-8 w-8" />
          </Link>{" "}
          <p className="text-base sm:text-lg text-white ml-4">GitHub</p>
        </div>
        <div className="flex items-center mt-4">
          <Link
            href="https://www.linkedin.com/in/rennan-silva-47831a186/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-[#0A66C2] h-8 w-8" />
          </Link>
          <p className="text-base sm:text-lg text-white ml-4">LinkedIn</p>
        </div>
      </div>
    </>
  );
};

export default Menu;
