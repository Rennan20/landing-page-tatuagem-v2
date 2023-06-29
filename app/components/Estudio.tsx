"use client";

import { useState } from "react";
import { Marcellus, Raleway, Open_Sans } from "@next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

const Estudio = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setSliderIndex(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => handleSlideChange(next),
  };

  const images = [
    "/pexels-brett-sayles-2121348.jpg",
    "/pexels-cottonbro-studio-4123829.jpg",
    "/pexels-gabriel-lara-3657562.jpg",
  ];

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="estudio-bg w-screen h-screen justify-between flex flex-col md:flex-row"
      >
        <motion.section className="flex flex-col items-center justify-center w-full md:w-1/2 h-1/2 md:h-full">
          <div className="flex flex-1 flex-col  text-center items-center justify-center p-1 ">
            <div className="flex flex-1 flex-col space-y-20 text-center items-center justify-center border">
              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="marcellus.variable font-marcellus border-t shadow-lg shadow-black bg-black p-2 text-white text-2xl md:text-4xl"
              >
                Mostre o seu estúdio com fotos de alta qualidade
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="raleway.variable bg-[#404040] p-2 font-raleway text-4xl md:text-6xl"
              >
                Fale um pouco sobre sua história, missão e valores, sobre o que
                torna o seu ambiente único
              </motion.p>
            </div>
          </div>
        </motion.section>
        <section className="flex items-center justify-center w-full md:w-1/2 h-1/2 md:h-full">
          <div className="flex items-center justify-center">
            <Slider
              {...settings}
              className="max-w-[250px] md:max-w-[550px] bg-[#2d3804] p-2 shadow-xl shadow-black z-0 overflow-hidden"
            >
              {images.map((image, index) => (
                <div key={index}>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="border-[#B22222] border-4 sm:h-125 sm:w-125"
                  >
                    <Image
                      src={image}
                      alt={`foto_estudio_${index}`}
                      height={250}
                      width={250}
                    />
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </motion.main>
    </>
  );
};

export default Estudio;
