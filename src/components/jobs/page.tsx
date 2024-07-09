"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";

const Jobspage = () => {
  const jobs = [
    {
      title: "01",
      text: "Descrição do trabalho 1",
      subtext: "Subtexto do trabalho 1",
      desc: "descrição 1",
      image: "url_da_imagem_1",
    },
    {
      title: "02",
      text: "Descrição do trabalho 2",
      subtext: "subtexto do trabalho 2",
      desc: "descrição 2",
      image: "url_da_imagem_2",
    },
    {
      title: "03",
      text: "Descrição do trabalho 3",
      subtext: "subtexto do trabalho 3",
      desc: "descrição 3",
      image: "url_da_imagem_3",
    },
    {
      title: "04",
      text: "Descrição do trabalho 4",
      subtext: "subtexto do trabalho 4",
      desc: "descrição 4",
      image: "url_da_imagem_4",
    },
  ];

  const [currentJobIndex, setCurrentJobIndex] = useState(0);

  const handleNext = () => {
    if (currentJobIndex < jobs.length - 1) {
      setCurrentJobIndex(currentJobIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentJobIndex > 0) {
      setCurrentJobIndex(currentJobIndex - 1);
    }
  };

  const { title, text, subtext, desc, image } = jobs[currentJobIndex];

  return (
    <section
      className="container mb-24 w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white bg-orange-700"
      id="trabalhos"
    >
      <div className="space-y-4 bg-gray-700 flex flex-row items-center justify-center">
        <div className="bg-red-700 w-full">
          <h2 className="text-6xl font-bold mb-6">{title}</h2>
          <div className="bg-black flex flex-col">
            <p className="text-4xl font-bold mb-5">{text}</p>
            <span>{subtext}</span>
            <span className="text-[#fca61e]">{desc}</span>
          </div>
        </div>

        <div className="bg-green-400 w-full">
          <img src={image} alt={title} className="w-full h-auto" />
        </div>
      </div>

      <div className="flex flex-row gap-5 mt-4">
        <button
          onClick={handlePrevious}
          // className="bg-white text-[#fca61e] px-4 py-2 rounded"
          className="text-[#17171d] bg-[#fca61e] py-2 px-8 font-semibold flex justify-center items-center rounded border border-[#fca61e] hover:bg-opacity-80 hover:text-[#17171d] transition duration-500 ease-in-out cursor-pointer"
          disabled={currentJobIndex === 0}
        >
          <IoIosArrowBack className="text-3xl" />
        </button>
        <button
          onClick={handleNext}
          className="text-[#17171d] bg-[#fca61e] py-2 px-8 font-semibold flex justify-center items-center rounded border border-[#fca61e] hover:bg-opacity-80 hover:text-[#17171d] transition duration-500 ease-in-out cursor-pointer"
          disabled={currentJobIndex === jobs.length - 1}
        >
          <IoIosArrowForward className="text-3xl" />
        </button>
      </div>
    </section>
  );
};

export default Jobspage;
