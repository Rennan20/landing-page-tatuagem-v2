"use client";

import Image from "next/image";
import { useState } from "react";
import { Marcellus, Raleway, Open_Sans } from "@next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import React from "react";

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

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -23.55052,
  lng: -46.633308,
};
const Contatos = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
  });
  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);
  return (
    <>
      <motion.main className="contatos-bg h-screen w-screen flex flex-1 flex-col">
        <h1
          className={`${marcellus.variable} font-marcellus text-black  text-center text-shadow  text-3xl md:text-5xl font-bold my-8`}
        >
          Forneça informações sobre contato
        </h1>

        <motion.section className="flex flex-1 flex-col md:flex-row justify-between  mx-8 my-4">
          <div>
            <h1
              className={`${marcellus.variable} font-marcellus text-[#B22222] text-center text-shadow text-2xl md:text-4xl font-bold my-4`}
            >
              Endereço
            </h1>
            <h3 className="text-lg md:text-xl font-normal text-white my-2">
              Localização do seu estúdio
            </h3>
            <h1
              className={`${marcellus.variable} font-marcellus text-[#B22222]  text-center text-shadow  text-2xl md:text-4xl font-bold my-4`}
            >
              Horários de funcionamento
            </h1>
            <h4 className="text-lg md:text-xl font-normal text-white my-2">
              Segunda - Sexta: 00:00 - 00:00
            </h4>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`${raleway.variable} font-raleway button-contatos border shadow-lg shadow-black px-12 py-2 bg-[#B22222] text-white rounded-lg mt-4 hover:scale-105 hover:border-none`}
            >
              Chamada para ação
            </motion.button>
          </div>

          <div className="flex-col flex items-center justify-center">
            <h1
              className={`${marcellus.variable} font-marcellus text-[#B22222]  text-center text-shadow text-2xl md:text-4xl font-bold my-4`}
            >
              Suas redes sociais
            </h1>
            <h3 className="text-lg md:text-xl font-normal text-white my-2">
              email: jrennan99@gmail.com
            </h3>
            <div className="flex items-center flex-col md:flex-row">
              <Link
                href="https://www.instagram.com/r_ennan_silva/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-[#C13584] h-8 w-8" />
              </Link>
              <p className="font-bold text-base sm:text-lg text-[#C13584] ml-4 ">
                Instagram
              </p>
            </div>

            <div className="flex items-center mt-4">
              <Link
                href="https://github.com/Rennan20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-gray-700 h-8 w-8" />
              </Link>{" "}
              <p className="text-base sm:text-lg text-gray-700 ml-4 font-bold">
                GitHub
              </p>
            </div>
            <div className="flex items-center mt-4">
              <Link
                href="https://www.linkedin.com/in/rennan-silva-47831a186/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-[#0A66C2] h-8 w-8" />
              </Link>
              <p className="text-base sm:text-lg text-[#0A66C2] font-bold  ml-4">
                LinkedIn
              </p>
            </div>
          </div>
        </motion.section>

        {isLoaded && (
          <div className="flex flex-1 justify-center items-center mt-8">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              <></>
            </GoogleMap>
          </div>
        )}
      </motion.main>
    </>
  );
};

export default Contatos;
