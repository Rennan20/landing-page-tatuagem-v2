"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
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

const MemberSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className=" my-auto md:h-full flex justify-center items-center flex-col flex-1 p-8">
      <div className="h-1/2 md:w-[280px] bg-white py-1 rounded-xl shadow-xl shadow-black flex-col flex items-center justify-center ">
        <Image
          src="/pexels-marcelo-dias-2089530.jpg"
          alt="Membro 1"
          height={200}
          width={200}
          className={` border rounded-md shadow-lg shadow-black z-0${
            isHovered ? "colored" : "black-and-white"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />

        <div className="p-4">
          <h1
            className={`${marcellus.variable} font-marcellus text-[#FFD700] text-shadow text-center text-3xl font-bold mb-2`}
          >
            Nome do Membro
          </h1>
          <div className=" py-4 px-6 bg-[#B04513]/20 rounded-xl hover:scale-110">
            <p
              className={`font-raleway ${raleway.variable} text-[#B22222] text-base md:text-xl text-center`}
            >{`Fale um pouco sobre o profissional e suas especialidades`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberSection;
