"use client";
import { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { Marcellus, Raleway, Open_Sans } from "@next/font/google";
import Menu from "./Menu";
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

const MenuOpener = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className={`fixed right-0 top-0 rounded-bl-full bg-[#B22222] p-8 z-10 flex flex-col justify-center items-center ${
          isOpen ? "shadow-none" : "shadow-lg"
        } shadow-black `}
        onClick={toggleMenu}
      >
        <span
          className={`${marcellus.variable} font-marcellus text-white text-xl`}
        >
          Menu
        </span>
        {isOpen ? (
          <RiCloseLine className="h-8 w-8 text-white " />
        ) : (
          <RiMenu2Line className="h-8 w-8 text-white " />
        )}
      </motion.button>
      {isOpen && <Menu />}
    </>
  );
};

export default MenuOpener;
