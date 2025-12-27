"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaFigma,
  FaWordpress,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import {
  SiTypescript,
  SiTailwindcss,
  SiPresto,
  SiStyledcomponents,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import Image from "next/image";
import foto1 from "@/image-projects/new/perfil.png";

const PersonalPage = () => {
  const aboutMe = {
    title: "Sobre mim",
    description: `
      Estou na área há quase 2 anos profissionalmente, trabalhando para grandes empresas e utilizando as melhores tecnologias do mercado, sempre com foco em segurança e experiência do usuário.
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
      title: "Desenvolvedor Frontend JR",
      company: "Comeia Labs",
      period: "2022 - 2024",
      description:
        "Iniciei minha carreira como desenvolvedor por meio de um curso de desenvolvimento de software Fullstack na Comeia Labs. Atuei em projetos de alta performance e participei de reuniões com clientes para definição de requisitos e manutenção de sites e aplicativos.",
    },
    {
      title: "Desenvolvedor Frontend",
      company: "Luck Viagens - Comeia Labs",
      period: "Outubro 2022 - Janeiro 2023",
      description:
        "Desenvolvimento de aplicação web para pacotes de viagens, usando ReactTS, TypeScript, Axios, React Router e Tailwind CSS. Implementação de autenticação de usuários e rotas privadas.",
    },
    {
      title: "Desenvolvedor Frontend",
      company: "Otur Viagens - Comeia Labs",
      period: "Janeiro 2023 - Fevereiro 2024",
      description:
        "Desenvolvimento e manutenção de aplicação web para pacotes de viagens nacionais e internacionais. Criação de interfaces para usuários e administradores com autenticação e experiência responsiva.",
    },
    {
      title: "Desenvolvedor Frontend",
      company: "Alpha Web - Comeia Labs",
      period: "Março 2024 - Abril 2024",
      description:
        "Finalização de aplicação de gestão para fábricas de confecção. Implementação de funcionalidades como listagem de produtos, cadastro de clientes e controle de estoque, além de melhorias na responsividade e integrações com APIs.",
    },
    {
      title: "Desenvolvedor Frontend",
      company: "D-GYM - Comeia Labs",
      period: "Abril 2024",
      description:
        "Desenvolvimento de sistema para academia online focada no público feminino. Funcionalidades de cadastro de aulas, agendamento e visualização em calendário com FullCalendar e Tailwind CSS.",
    },
    {
      title: "Desenvolvedor Front-end Freelance",
      company: "Masterix Web",
      period: "Maio 2024",
      description:
        "Desenvolvimento completo de site responsivo utilizando ReactTS, TypeScript, Tailwind CSS, Material UI e NextJS.",
    },
    {
      title: "Desenvolvedor Frontend Freelance",
      company: "Portal Abri MEI",
      period: "Junho 2024",
      description:
        "Criação de landing page e tela de cadastro para MEIs, com foco em conversão e experiência do usuário, utilizando TypeScript, HTML/CSS, Tailwind CSS e NextJS.",
    },
  ];

  const education = [
    {
      title: "Graduação em Sistemas de Informação",
      institution: "Universidade Federal de Sergipe (UFS)",
      period: "2022 - Atual",
      description:
        "Formação focada em desenvolvimento de software, banco de dados, segurança da informação e análise de sistemas, conectando tecnologia e gestão para solução de problemas organizacionais.",
    },
    {
      title: "Curso Fullstack em Desenvolvimento de Software",
      institution: "Projeto Academy - Comeia Labs",
      period: "2021",
      description:
        "Programa intensivo remoto de 6 meses, abordando Git, HTML, CSS, JavaScript, TypeScript, bancos de dados, Node.js, engenharia de software e metodologias ágeis, com desenvolvimento de projetos práticos.",
    },
  ];

  const skills = [
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "NextJS", icon: <RiNextjsFill /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Styled Components", icon: <SiStyledcomponents /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "API REST", icon: <SiPresto /> },
    { name: "SQL", icon: <BsFiletypeSql /> },
    { name: "WordPress", icon: <FaWordpress /> },
    { name: "Figma", icon: <FaFigma /> },
  ];

  const sections = [
    {
      title: "Sobre Mim",
      content: (
        <div className="flex flex-col font-semibold gap-6">
          <p className="text-base sm:text-lg md:text-xl mb-2 text-justify">
            {aboutMe.description}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <ul className="space-y-3">
              <li className="flex gap-2">
                <strong className="text-sm sm:text-base text-gray-400">
                  Nome:
                </strong>
                <span className="text-sm sm:text-base text-white">
                  {aboutMe.details.nome}
                </span>
              </li>
              <li className="flex gap-2">
                <strong className="text-sm sm:text-base text-gray-400">
                  Telefone:
                </strong>
                <span className="text-sm sm:text-base text-white">
                  {aboutMe.details.telefone}
                </span>
              </li>
              <li className="flex gap-2">
                <strong className="text-sm sm:text-base text-gray-400">
                  Experiência:
                </strong>
                <span className="text-sm sm:text-base text-white">
                  {aboutMe.details.experiencia}
                </span>
              </li>
              <li className="flex gap-2">
                <strong className="text-sm sm:text-base text-gray-400">
                  Discord:
                </strong>
                <span className="text-sm sm:text-base text-white">
                  {aboutMe.details.discord}
                </span>
              </li>
            </ul>

            <ul className="space-y-3">
              <li className="flex gap-2">
                <strong className="text-sm sm:text-base text-gray-400">
                  Nacionalidade:
                </strong>
                <span className="text-sm sm:text-base text-white">
                  {aboutMe.details.nacionalidade}
                </span>
              </li>
              <li className="flex gap-2">
                <strong className="text-sm sm:text-base text-gray-400">
                  Email:
                </strong>
                <span className="text-sm sm:text-base text-white break-all">
                  {aboutMe.details.email}
                </span>
              </li>
              <li className="flex gap-2">
                <strong className="text-sm sm:text-base text-gray-400">
                  Freelance:
                </strong>
                <span className="text-sm sm:text-base text-white">
                  {aboutMe.details.freelance}
                </span>
              </li>
              <li className="flex gap-2">
                <strong className="text-sm sm:text-base text-gray-400">
                  Idiomas:
                </strong>
                <span className="text-sm sm:text-base text-white">
                  {aboutMe.details.idiomas}
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Experiências",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="
                h-full rounded-2xl border border-white/5
                bg-[#171721] p-5
                shadow-md shadow-black/30
                flex flex-col gap-2
              "
            >
              <h3 className="text-lg md:text-xl font-bold text-[#fca61e]">
                {exp.title}
              </h3>
              <h4 className="text-sm md:text-base text-gray-300">
                {exp.company}
              </h4>
              <p className="text-xs md:text-sm text-gray-500">{exp.period}</p>
              <p className="text-sm md:text-base text-white/90 mt-2">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Educação",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {education.map((edu, index) => (
            <div
              key={index}
              className="
                rounded-2xl border border-white/5
                bg-[#171721] p-5
                shadow-md shadow-black/30
                flex flex-col gap-2
              "
            >
              <h3 className="text-lg md:text-xl font-bold text-[#fca61e]">
                {edu.title}
              </h3>
              <h4 className="text-sm md:text-base text-gray-300">
                {edu.institution}
              </h4>
              <p className="text-xs md:text-sm text-gray-500">{edu.period}</p>
              <p className="text-sm md:text-base text-white/90 mt-2">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Minhas Habilidades",
      content: (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <li key={index}>
              <div
                className="
                  flex flex-col items-center justify-center
                  gap-2 rounded-2xl
                  bg-[#171721] border border-white/5
                  shadow-md shadow-black/30
                  px-3 py-4
                  transition-transform transition-shadow duration-300
                  hover:-translate-y-1 hover:shadow-xl
                "
              >
                <span className="text-3xl md:text-4xl text-[#fca61e]">
                  {skill.icon}
                </span>
                <span className="text-xs sm:text-sm text-white/90 text-center">
                  {skill.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleSectionClick = (index: number) => {
    setDirection(index > currentSectionIndex ? 1 : -1);
    setCurrentSectionIndex(index);
  };

  const { title, content } = sections[currentSectionIndex];

  return (
    <section
      id="sobre-mim"
      className="
        container mx-auto max-w-7xl
        px-4 sm:px-6 lg:px-0
        py-12 lg:py-16
        mb-24
      "
    >
      <div
        className="
          w-full rounded-lg
          bg-gradient-to-br from-[#101019] via-[#181828] to-[#101019]
          text-white
          p-5 sm:p-6 md:p-8 lg:p-10
          shadow-2xl shadow-black/40
        "
      >
       
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              <span className="text-[#fca61e]">Sobre</span> Mim
            </h2>
            <p className="text-sm sm:text-base text-white/60 mt-2">
              Um pouco sobre minha trajetória profissional, formação e
              habilidades técnicas.
            </p>
          </div>

          <div
            className="
              flex items-center gap-3
              bg-[#171721] border border-white/5
              rounded-2xl px-3 py-2 sm:px-4 sm:py-3
              self-start md:self-auto
            "
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden">
              <Image
                src={foto1}
                alt="Foto de Jadson Tavares"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-semibold">
                Jadson Tavares Santos
              </span>
              <span className="text-xs text-white/50">
                Desenvolvedor Front-end JR
              </span>
            </div>
          </div>
        </div>

        
        <div className="flex flex-wrap gap-3 mb-6">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => handleSectionClick(index)}
              className={`
                py-2 px-4 text-xs sm:text-sm md:text-base font-semibold rounded-full
                transition-colors duration-300
                ${
                  currentSectionIndex === index
                    ? "bg-[#fca61e] text-[#17171d]"
                    : "bg-transparent text-[#fca61e] border border-[#fca61e]/60 hover:bg-[#fca61e]/10"
                }
              `}
            >
              {section.title}
            </button>
          ))}
        </div>

        
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={currentSectionIndex}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={{
              enter: (dir: number) => ({
                x: dir > 0 ? 40 : -40,
                opacity: 0,
              }),
              center: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.45, ease: "easeOut" },
              },
              exit: (dir: number) => ({
                x: dir > 0 ? -40 : 40,
                opacity: 0,
                transition: { duration: 0.3, ease: "easeIn" },
              }),
            }}
            className="mt-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4">{title}</h3>
            {content}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PersonalPage;
