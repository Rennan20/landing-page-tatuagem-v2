"use client";
import { motion } from "framer-motion";
import { Marcellus, Raleway } from "@next/font/google";
import Image from "next/image";
import { MdEditNote } from "react-icons/md";
import { BsBoxArrowDown } from "react-icons/bs";
import MenuOpener from "./MenuOpener";

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

const Hero = () => {
  const scrollToNextSection = () => {
    const section = document.getElementById("equipe");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <motion.main
        className="hero-bg h-screen w-screen flex flex-col justify-center p-2"
        initial={{ opacity: 0 }} // Initial animation properties
        animate={{ opacity: 1 }} // Animation properties when component mounts
        transition={{ duration: 1 }} // Transition duration
      >
        <MenuOpener />
        <div className="flex justify-start items-center">
          <Image src="/icone.png" alt="icon" width={250} height={250} />
        </div>

        <motion.div
          className="flex flex-col justify-center items-center bg-[#404040]/40 p-6 space-y-6 w-fit mx-auto my-auto"
          initial={{ y: -100 }} // Initial animation properties
          animate={{ y: 0 }} // Animation properties when component mounts
          transition={{ duration: 0.8, delay: 0.2 }} // Transition duration and delay
        >
          <h1
            className={`text-white text-center font-marcellus ${marcellus.variable} text-4xl md:text-6xl`}
          >
            Destaque o nome do seu Estúdio
          </h1>
          <p
            className={`${marcellus.variable} font-marcellus text-white text-center text-xl md:text-4xl`}
          >
            Diga porquê o seu estúdio é a melhor escolha
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center flex-col md:flex-row space-x-20 space-y-4 items-center md:w-full mb-8"
          initial={{ opacity: 0 }} // Initial animation properties
          animate={{ opacity: 1 }} // Animation properties when component mounts
          transition={{ duration: 1, delay: 0.4 }} // Transition duration and delay
        >
          <motion.button
            className={`${raleway.variable} hero-button-bg font-raleway text-white md:text-xl text-base text-center font-semibold px-2 py-2 md:px-12 md:py-4 shadow-xl shadow-black outline flex items-center `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToNextSection} // Animation properties on hover
          >
            <span className="mr-2">Conheça nosso trabalho</span>
            <BsBoxArrowDown className="h-4 w-4 mx-auto my-auto" />
          </motion.button>
          <motion.button
            className={`${raleway.variable} font-raleway text-white font-semibold text-base md:text-xl text-center px-2 py-2 md:px-12 md:py-4 bg-gradient-to-r from-[#404040] to-[#B22222] shadow-xl shadow-black outline md:hover:scale-105 md:transform outline-white flex items-center`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">Chamada para ação</span>
            <MdEditNote className="h-8 w-8 mx-auto my-auto" />
          </motion.button>
        </motion.div>
      </motion.main>
    </>
  );
};

export default Hero;
