"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiPresto } from "react-icons/si";
import foto1 from "@/images/foto-teste.jpg";

const PersonalPage = () => {
  const aboutMe = {
    title: "Sobre mim",
    description: `
      Estou na área há quase 2 anos profissionalmente, Trabalhando para grandes empresas e utilizando as melhores Tecnologias do mercado, com Segurança e foco na Experiência do usuário.
    `,
    details: {
      nome: "Jadson Tavares Santos",
      telefone: "(+55) 79 99905-9254",
      experiencia: "1 Ano",
      discord: "jadsonts",
      nacionalidade: "Brasileiro",
      email: "jadsonts2012@gmail.com",
      freelance: "Avaliando",
      idiomas: "Português, Inglês",
    },
  };

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

  const education = [
    {
      title: "Bacharel em Ciência da Computação",
      institution: "Universidade X",
      period: "2016 - 2020",
      description:
        "Curso focado em algoritmos, estruturas de dados, sistemas operacionais e desenvolvimento de software.",
    },
    {
      title: "Curso Fullstack",
      institution: "Bootcamp Y",
      period: "2021",
      description:
        "Programa intensivo de 6 meses cobrindo desenvolvimento frontend e backend com projetos práticos.",
    },
  ];

  const skills = [
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "API REST", icon: <SiPresto /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ];

  const sections = [
    {
      // title: "Sobre mim",
      content: (
        <div className="flex flex-col font-semibold">
          <p className="text-2xl mb-4">{aboutMe.description}</p>

          <div className="bg-black flex flex-row gap-5 items-start justify-start">
            <ul className="list-none ">
              <li className="flex flex-row items-center justify-start gap-2 mb-4">
                <strong className="text-lg text-gray-400">Nome:</strong>{" "}
                <p className="text-xl font-semibold text-white">
                  {aboutMe.details.nome}
                </p>
              </li>

              <li className="flex flex-row items-center justify-start gap-2 mb-4">
                <strong className="text-lg text-gray-400">Telefone:</strong>{" "}
                <p className="text-xl font-semibold text-white">
                  {aboutMe.details.telefone}
                </p>
              </li>

              <li className="flex flex-row items-center justify-start gap-2 mb-4">
                <strong className="text-lg text-gray-400">Experiência:</strong>{" "}
                <p className="text-xl font-semibold text-white">

                {aboutMe.details.experiencia}
                </p>
               
              </li>

              <li className="flex flex-row items-center justify-start gap-2 mb-4">
                <strong className="text-lg text-gray-400">Discord:</strong>{" "}
                 <p className="text-xl font-semibold text-white">

                {aboutMe.details.discord}
                 </p>
                
              </li>
            </ul>

            <ul className="list-none">
              <li className="flex flex-row items-center justify-start gap-2 mb-4">
                <strong className="text-lg text-gray-400">Nacionalidade:</strong> 
                 <p className="text-xl font-semibold text-white">

                {aboutMe.details.nacionalidade}
                 </p>
              </li>

              <li className="flex flex-row items-center justify-start gap-2 mb-4">
                <strong className="text-lg text-gray-400">Email:</strong>
                 <p className="text-xl font-semibold text-white">

                 {aboutMe.details.email}
                 </p>
              </li>


              <li className="flex flex-row items-center justify-start gap-2 mb-4">
                <strong className="text-lg text-gray-400">Freelance:</strong>
                 <p className="text-xl font-semibold text-white">

                 {aboutMe.details.freelance}
                 </p>
              </li>


              <li className="flex flex-row items-center justify-start gap-2 mb-4">
                <strong className="text-lg text-gray-400">Idiomas:</strong>
                 <p className="text-xl font-semibold text-white">

                 {aboutMe.details.idiomas}
                 </p>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Experiência",
      content: experiences.map((exp, index) => (
        <div key={index} className="mb-4 grid grid-cols-1">
          <div className="bg-gray-600 p-2 rounded-lg">
          <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
          <h4 className="text-xl text-gray-400 mb-1">{exp.company}</h4>
          <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
          <p className="text-lg">{exp.description}</p>
          </div>
        </div>
      )),
    },
    {
      title: "Educação",
      content: education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-2xl font-bold mb-1">{edu.title}</h3>
          <h4 className="text-xl text-gray-400 mb-1">{edu.institution}</h4>
          <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
          <p className="text-lg">{edu.description}</p>
        </div>
      )),
    },
    {
      title: "Minhas Habilidades",
      content: (
        <ul className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="text-lg mb-1 relative group text-[#fca61e]"
              title={skill.name}
            >
              <div className="text-4xl  bg-red-700">
                <div className="text-5xl p-5 bg-gray-700">
                {skill.icon}
                </div>
              </div>
              <span className="absolute w-full bottom-full left-1/2 transform -translate-x-1/2 bg-black text-[#fca61e]
               text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.name}
              </span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    if (currentSectionIndex < sections.length - 1) {
      setDirection(1);
      setCurrentSectionIndex(currentSectionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setDirection(-1);
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };

  const { title, content } = sections[currentSectionIndex];

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
      <div className="space-y-4 p-2 flex flex-col md:flex-row justify-start items-center bg-blue-700">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSectionIndex}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={{
              enter: (direction: any) => ({
                x: direction > 0 ? 100 : -100,
                opacity: 0,
              }),
              center: {
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.1,
                  duration: 0.7,
                  ease: "linear",
                },
              },
            }}
            // initial={{ opacity: 0 }}
            // animate={{
            //   opacity: 1,
            //   transition: {
            //     delay: 2.4,
            //     duration: 0.4,
            //     ease: "easeIn",
            //   },
            // }}
            className="w-full md:w-2/3 flex flex-col justify-center items-start mt-4 p-4 bg-red-600"
          >
            <h3 className="text-2xl font-bold mb-1">{title}</h3>
            {content}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-row gap-5 mt-4">
        <button
          onClick={handlePrevious}
          className="text-[#17171d] bg-[#fca61e] py-2 px-8 font-semibold flex justify-center items-center rounded border border-[#fca61e] hover:bg-opacity-80 transition duration-500 ease-in-out cursor-pointer"
          disabled={currentSectionIndex === 0}
        >
          <IoIosArrowBack className="text-3xl" />
        </button>
        <button
          onClick={handleNext}
          className="text-[#17171d] bg-[#fca61e] py-2 px-8 font-semibold flex justify-center items-center rounded border border-[#fca61e] hover:bg-opacity-80 transition duration-500 ease-in-out cursor-pointer"
          disabled={currentSectionIndex === sections.length - 1}
        >
          <IoIosArrowForward className="text-3xl" />
        </button>
      </div>
    </section>
  );
};

export default PersonalPage;
