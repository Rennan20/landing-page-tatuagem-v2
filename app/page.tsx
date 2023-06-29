import Image from "next/image";
import Hero from "./components/Hero";
import Equipe from "./components/Equipe";
import Estudio from "./components/Estudio";
import Depoimentos from "./components/Depoimentos";
import Faq from "./components/Faq";
import Contatos from "./components/Contatos";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="equipe">
        <Equipe />
      </section>
      <section id="estudio">
        <Estudio />
      </section>
      <section id="depoimentos">
        <Depoimentos />
      </section>
      <section id="faq">
        <Faq />
      </section>
      <section id="contatos">
        <Contatos />
      </section>
    </>
  );
}
