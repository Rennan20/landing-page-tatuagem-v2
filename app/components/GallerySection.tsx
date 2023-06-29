"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

const GallerySection = () => {
  const galleryItems = [
    {
      image: "/pexels-cottonbro-studio-4125659.jpg",
      title: "Trabalho 1",
    },
    {
      image: "/pexels-cottonbro-studio-4123821.jpg",
      title: "Trabalho 2",
    },
    {
      image: "/pexels-cottonbro-studio-4123707.jpg",
      title: "Trabalho 3",
    },
    {
      image: "/button.jpg",
      title: "Trabalho 4",
    },
  ];

  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage("");
  };

  return (
    <div className="h-fit md:h-full p-4 md:flex justify-center items-center flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            className="h-64 flex items-center justify-center rounded-br-xl rounded-tl-xl border overflow-hidden"
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(item.image)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-4">
        <motion.button
          className={`bg-[#FFD700] border-2 border-white text-white text-base text-center font-semibold py-1 px-4`}
          onClick={closeModal}
          whileHover={{ scale: 1.05, border: "none" }}
          whileTap={{ scale: 0.95 }}
        >
          Faça um orçamento
        </motion.button>
      </div>

      {selectedImage && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-gray-800/70 rounded-lg p-4">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-3xl max-h-3xl mx-auto"
              style={{ width: "80%", height: "auto" }}
            />
            <div className="flex items-center justify-center">
              <button
                className={`mt-4 ${raleway.variable} bg-transparent font-raleway text-white text-base text-center font-semibold p-2 shadow-xl shadow-black outline flex items-center rounded-full `}
                onClick={closeModal}
              >
                X
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default GallerySection;
