"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FaqCards from "./FaqCards";
import { Marcellus, Raleway } from "@next/font/google";

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
const Faq = () => {
  return (
    <>
      <motion.main className="faq-bg w-screen h-fit p-4">
        <h1
          className={`${marcellus.variable} font-marcellus text-white text-center text-3xl md:text-5xl font-bold my-8`}
        >
          Uma sessão de perguntas frequentes para mostrar seu conhecimento
          sempre passa{" "}
          <span className="text-[#B22222] underline text-4xl md:text-6xl">
            confiança
          </span>
        </h1>
        <FaqCards />
        <div className="flex justify-center mt-8">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`${raleway.variable} font-raleway px-4 py-2 bg-black shadow-lg shadow-black text-base hover:scale-105 outline hover:outline-none text-white rounded-lg`}
          >
            Chamada para suas redes sociais
          </motion.button>
        </div>
      </motion.main>
    </>
  );
};

export default Faq;
