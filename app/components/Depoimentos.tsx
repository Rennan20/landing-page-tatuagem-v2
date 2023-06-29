"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ReviewCard from "./ReviewCard";
import { Marcellus, Raleway } from "@next/font/google";
import { useMediaQuery } from "react-responsive";

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

const Reviews = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const renderCircularDivs = () => {
    const circularDivs = [];
    const numCircles = isMobile ? 7 : 31;

    for (let i = 0; i < numCircles; i++) {
      circularDivs.push(
        <div
          key={i}
          className="w-4 h-4 mx-4 my-4 bg-black rounded-full md:my-10 shadow-lg shadow-black"
        />
      );
    }
    return circularDivs;
  };
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-screen h-fit p-4 bg-[#FFD700] flex flex-col flex-1 justify-between shadow-2xl shadow-black"
      >
        <motion.section className="w-full h-full md:h-1/2 flex flex-1 flex-col justify-between items-center">
          <div className="flex flex-1 justify-center items-center">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={`font-marcellus marcellus.variable text-center text-shadow text-black text-4xl md:text-6xl`}
            >
              Mostre a{" "}
              <span className={`text-[#B04513]`}>
                satisfação dos seus clientes
              </span>{" "}
              com depoimentos
            </motion.h1>
          </div>
          <div className="flex justify-center my-4 max-w-full  overflow-hidden">
            {renderCircularDivs()}
          </div>
          <div className="flex flex-col flex-1 p-4 md:flex-row justify-between">
            <div>
              <ReviewCard
                rating={5}
                comment="Compartilhe um depoimento real que atinja alguns de seus benefícios (mas não seja muito comercial)."
                userImage="/pexels-rachel-claire-4846404.jpg"
                userName="Rennan Silva"
                data="10-02-2023"
              />
            </div>
            <div>
              <ReviewCard
                rating={4}
                comment="Inclua alguém falando sobre como teve um ótimo atendimento."
                userImage="/pexels-darrel-und-1023828.jpg"
                userName="Marcelo"
                data="20-03-2023"
              />
            </div>
          </div>
        </motion.section>
        <motion.section className="w-full h-full md:h-1/2 flex flex-1 flex-col md:flex-row justify-between items-center">
          <motion.div className="flex flex-1 flex-col p-4 space-y-2 justify-center items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`${raleway.variable} font-raleway px-12 py-2 bg-[#B04513] text-center text-white text-2xl flex rounded-3xl shadow-xl shadow-black outline hover:scale-105 hover:outline-none `}
            >
              Link para ver mais reviews no Google
            </motion.button>
          </motion.div>
        </motion.section>
      </motion.main>
    </>
  );
};

export default Reviews;
