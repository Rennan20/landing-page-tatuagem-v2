"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Marcellus, Raleway } from "@next/font/google";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

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

enum Member {
  Membro1 = 1,
  Membro2 = 2,
  Membro3 = 3,
}

const Equipe = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(
    Member.Membro1
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (member: Member) => {
    setSelectedMember(member);
  };

  const handleClick1 = () => {
    setIsClicked1(!isClicked1);
  };

  const handleClick2 = () => {
    setIsClicked2(!isClicked2);
  };

  const handleClick3 = () => {
    setIsClicked3(!isClicked3);
  };
  return (
    <motion.main
      className="equipe-bg h-screen w-screen flex flex-col md:flex-row justify-between z-0 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section className="flex flex-1 w-full md:w-1/2 flex-col">
        <motion.div className="flex flex-1 items-center justify-center">
          <h1
            className={`${marcellus.variable} font-marcellus text-white text-center text-4xl md:text-6xl`}
          >
            Mostre sua equipe com imagens atrativas
          </h1>
        </motion.div>
        <motion.div className="flex flex-1 p-2 flex-col items-center justify-between space-y-4 mb-20">
          <div className="border-r-4 border-red-600 h-fit w-fit">
            <motion.div
              className={`flex flex-1 justify-center items-center px-40 py-1 bg-[#404040]/70 ${
                selectedMember === 1 ? "clicked" : ""
              }`}
              onClick={() => handleClick(1)}
              whileHover={{
                backgroundColor: "#B22222",
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <p
                className={`${marcellus.variable} font-marcellus text-base md:text-xl text-center`}
              >
                Membro 1
              </p>
              {selectedMember === 1 && (
                <HiOutlineArrowNarrowRight
                  className="ml-2 text-white"
                  size={24}
                />
              )}
            </motion.div>

            <motion.div
              className={`flex flex-1 justify-center items-center px-40 py-1  bg-[#404040]/70 ${
                selectedMember === 2 ? "clicked" : ""
              }`}
              onClick={() => handleClick(2)}
              whileHover={{
                backgroundColor: "#B22222",
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <p
                className={`${marcellus.variable} font-marcellus text-base md:text-xl text-center`}
              >
                Membro 2
              </p>
              {selectedMember === 2 && (
                <HiOutlineArrowNarrowRight
                  className="ml-2 text-white"
                  size={24}
                />
              )}
            </motion.div>
            <motion.div
              className={`flex flex-1 justify-center items-center px-40 py-1 bg-[#404040]/70  ${
                selectedMember === 3 ? "clicked" : ""
              }`}
              onClick={() => handleClick(3)}
              whileHover={{
                backgroundColor: "#B22222",
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <p
                className={`${marcellus.variable} font-marcellus text-base md:text-xl text-center`}
              >
                Membro 3
              </p>
              {selectedMember === 3 && (
                <HiOutlineArrowNarrowRight
                  className="ml-2 text-white"
                  size={24}
                />
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
      <motion.section className="w-full md:w-1/2 flex flex-1 flex-col items-center justify-center relative h-1/2 md:h-full">
        {isMenuOpen ? null : (
          <div
            className={`relative border  ${
              isHovered ? "colored" : "black-and-white"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {selectedMember === 1 && (
              <Image
                src="/pexels-marcelo-dias-2089530.jpg" // Replace with the actual image path for member 1
                alt="Membro 1"
                height={250}
                width={250}
                className={`relative border ${
                  isHovered ? "colored" : "black-and-white"
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            )}
            {selectedMember === 2 && (
              <Image
                src="/pexels-antoni-shkraba-7005797.jpg" // Replace with the actual image path for member 2
                alt="Membro 2"
                height={250}
                width={250}
                className={`relative border ${
                  isHovered ? "colored" : "black-and-white"
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            )}
            {selectedMember === 3 && (
              <Image
                src="/pexels-julia-volk-5112343.jpg"
                alt="Membro 3"
                height={250}
                width={250}
                className={`relative border ${
                  isHovered ? "colored" : "black-and-white"
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            )}

            <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center h-16 bg-[#404040]/40 cursor-pointer">
              <p
                className={`${marcellus.variable} font-marcellus text-base md:text-xl text-center text-white`}
              >
                Bio e Trabalhos
              </p>
            </div>
          </div>
        )}
      </motion.section>
      <motion.div className="bg-[#B22222] absolute bottom-0 flex w-full flex-1 h-8"></motion.div>
    </motion.main>
  );
};

export default Equipe;
