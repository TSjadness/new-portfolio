
"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import foto1 from "@/images/foto-teste.jpg";

const PersonalPage = () => {
  // sobre mim
  const experiences = [
    {
      title: "Desenvolvedor Frontend",
      company: "Empresa 1",
      period: "Jan 2020 - Dez 2021",
      description:
        "Trabalhei na criação e manutenção de interfaces responsivas usando React e Tailwind CSS. Colaborei com equipes de design para implementar soluções amigáveis e inovadoras.",
      image: foto1,
    },
    {
      title: "Desenvolvedor Full Stack",
      company: "Empresa 2",
      period: "Jan 2022 - Presente",
      description:
        "Atuo no desenvolvimento de aplicações completas usando Next.js e Node.js, focando em performance e segurança. Implementação de APIs RESTful e integração com bancos de dados.",
      image: foto1,
    },
  ];

  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    if (currentExperienceIndex < experiences.length - 1) {
      setDirection(1);
      setCurrentExperienceIndex(currentExperienceIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentExperienceIndex > 0) {
      setDirection(-1);
      setCurrentExperienceIndex(currentExperienceIndex - 1);
    }
  };

  const { title, company, period, description, image } =
    experiences[currentExperienceIndex];

  return (
    <section
      className="container mb-24 p-5 w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white rounded-lg bg-[#131318] transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-10"
      id="about-me"
    >
      <h2 className="text-3xl font-bold tracking-tight mt-5">
        <span className="text-[#fca61e]">Sobre</span> Mim
      </h2>
      <p className="text-gray-400">
        Um pouco sobre minha trajetória profissional e habilidades.
      </p>
      <div className="space-y-4 mt-5 flex flex-col md:flex-row justify-center items-start">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentExperienceIndex}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={{
              enter: (direction: any) => ({
                x: direction > 0 ? 200 : -200,
                opacity: 0,
              }),
              center: {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1.1,
                  ease: "linear",
                },
              },
            }}
            className="w-full md:w-1/2 flex flex-col justify-center items-start mt-4 p-4"
          >
            <h3 className="text-2xl font-bold mb-1">{title}</h3>
            <h4 className="text-xl text-gray-400 mb-3">{company}</h4>
            <p className="text-sm text-gray-500 mb-5">{period}</p>
            <p className="text-lg">{description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-row gap-5 mt-4">
        <button
          onClick={handlePrevious}
          className="text-[#17171d] bg-[#fca61e] py-2 px-8 font-semibold flex justify-center items-center rounded border border-[#fca61e] hover:bg-opacity-80 transition duration-500 ease-in-out cursor-pointer"
          disabled={currentExperienceIndex === 0}
        >
          <IoIosArrowBack className="text-3xl" />
        </button>
        <button
          onClick={handleNext}
          className="text-[#17171d] bg-[#fca61e] py-2 px-8 font-semibold flex justify-center items-center rounded border border-[#fca61e] hover:bg-opacity-80 transition duration-500 ease-in-out cursor-pointer"
          disabled={currentExperienceIndex === experiences.length - 1}
        >
          <IoIosArrowForward className="text-3xl" />
        </button>
      </div>
    </section>
  );
};

export default PersonalPage;

