"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import foto1 from "@/images/foto-teste.jpg";
import Image from "next/image";

const Jobspage = () => {
  // Experiência profissional
  const jobs = [
    {
      title: "01",
      text: "Descrição do trabalho 1",
      subtext:
        "Lorem Ipsum Generator Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!",
      desc: "descrição 1",
      image: foto1,
    },
    {
      title: "02",
      text: "Descrição do trabalho 2",
      subtext:
        "Lorem Ipsum Generator Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!",
      desc: "descrição 2",
      image: foto1,
    },
    {
      title: "03",
      text: "Descrição do trabalho 3",
      subtext:
        "Lorem Ipsum Generator Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!",
      desc: "descrição 3",
      image: foto1,
    },
    {
      title: "04",
      text: "Descrição do trabalho 4",
      subtext:
        "Lorem Ipsum Generator Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!",
      desc: "descrição 4",
      image: foto1,
    },
  ];

  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    if (currentJobIndex < jobs.length - 1) {
      setDirection(1);
      setCurrentJobIndex(currentJobIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentJobIndex > 0) {
      setDirection(-1);
      setCurrentJobIndex(currentJobIndex - 1);
    }
  };

  const { title, text, subtext, desc, image } = jobs[currentJobIndex];

  return (
    <section
      className="container mb-24 p-5 w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white rounded-lg bg-[#131318] transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-10   "
      id="trabalhos"
    >
      <h2 className="text-3xl font-bold tracking-tight mt-5">
        <span className="text-[#fca61e]">Minhas</span> Experiências
      </h2>
      <span className="text-gray-400">
        Empresas em que atuei como desenvolvedor e minhas principais funções
      </span>
      <div className="space-y-4 mt-5  flex flex-col md:flex-row justify-center items-start responsive-job">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentJobIndex}
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
                x: 1,
                opacity: 1,
                transition: {
                  duration: 1.1,
                  ease: "linear",
                },
              },
            }}
            className=" w-full md:w-1/2 flex flex-col justify-center items-start mt-4 p-4"
          >
            <h2 className="text-6xl text-stroke text-stroke-[#fca61e] text-stroke-fill-[#fca61e] font-bold mb-6">
              {title}
            </h2>

            <div className="flex flex-col w-full p-4">
              <p className="text-4xl font-bold mb-5">{text}</p>
              <span className="text-xl mb-5">{subtext}</span>
              <span className="text-[#fca61e]">{desc}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className=" w-full md:w-1/2 ">
          <Image
            src={image}
            alt={title}
            width={1400}
            height={900}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="flex flex-row gap-5 mt-4 responsive-button-job ">
        <button
          onClick={handlePrevious}
          className="text-[#17171d] bg-[#fca61e] py-2 px-8 font-semibold flex justify-center items-center rounded border border-[#fca61e] hover:bg-opacity-80 transition duration-500 ease-in-out cursor-pointer"
          disabled={currentJobIndex === 0}
        >
          <IoIosArrowBack className="text-3xl" />
        </button>
        <button
          onClick={handleNext}
          className="text-[#17171d] bg-[#fca61e] py-2 px-8 font-semibold flex justify-center items-center rounded border border-[#fca61e] hover:bg-opacity-80 transition duration-500 ease-in-out cursor-pointer"
          disabled={currentJobIndex === jobs.length - 1}
        >
          <IoIosArrowForward className="text-3xl" />
        </button>
      </div>
    </section>
  );
};

export default Jobspage;
