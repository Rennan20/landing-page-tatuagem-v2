"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

const FaqCards = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const faqData = [
    {
      pergunta: "Pergunta Comum",
      resposta: "Resposta Profissional",
    },
    {
      pergunta: "Pergunta Comum",
      resposta: "Resposta Profissional",
    },
    {
      pergunta: "Pergunta Comum",
      resposta: "Resposta Profissional",
    },
    {
      pergunta: "Pergunta Comum",
      resposta: "Resposta Profissional",
    },
    {
      pergunta: "Pergunta Comum",
      resposta: "Resposta Profissional",
    },
    {
      pergunta: "Pergunta Comum",
      resposta: "Resposta Profissional",
    },
    {
      pergunta: "Pergunta Comum",
      resposta: "Resposta Profissional",
    },
    {
      pergunta: "Pergunta Comum",
      resposta: "Resposta Profissional",
    },
  ];

  const mobileFaqData = faqData.slice(0, 4);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <motion.main
        className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-4"} gap-4`}
      >
        {isMobile
          ? mobileFaqData.map((faq, index) => (
              <motion.div
                key={index}
                className="rounded-lg flex flex-1 flex-row "
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="bg-[#B22222] text-white p-4 border shadow-lg shadow-black rounded-tl-3xl rounded-bl-3xl">
                  <h3
                    className={`text-center text-white text-base ${raleway.variable} font-raleway`}
                  >
                    {faq.pergunta}
                  </h3>
                </div>
                <div className="bg-[#000000] p-4 border shadow-lg shadow-white rounded-tr-3xl rounded-br-3xl">
                  <h3
                    className={`text-center text-white text-base ${raleway.variable} font-raleway`}
                  >
                    {faq.resposta}
                  </h3>
                </div>
              </motion.div>
            ))
          : faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="rounded-lg flex flex-1 flex-row "
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="bg-[#B22222] text-white p-4 border shadow-lg shadow-black rounded-tl-3xl rounded-bl-3xl">
                  <h3
                    className={`text-center text-white text-base ${raleway.variable} font-raleway`}
                  >
                    {faq.pergunta}
                  </h3>
                </div>
                <div className="bg-[#000000] p-4 border shadow-lg shadow-white rounded-tr-3xl rounded-br-3xl">
                  <h3
                    className={`text-center text-white text-base ${raleway.variable} font-raleway`}
                  >
                    {faq.resposta}
                  </h3>
                </div>
              </motion.div>
            ))}
      </motion.main>
    </>
  );
};

export default FaqCards;
