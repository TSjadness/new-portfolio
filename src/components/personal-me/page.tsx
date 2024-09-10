"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiPresto,
  SiStyledcomponents,
} from "react-icons/si";
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
  
  //   {
  //     title: "Desenvolvedor Frontend",
  //     company: "Empresa 1",
  //     period: "Jan 2020 - Dez 2021",
  //     description:
  //       "Trabalhei na criação e manutenção de interfaces responsivas usando React e Tailwind CSS. Colaborei com equipes de design para implementar soluções amigáveis e inovadoras.",
  //     image: foto1,
  //   },
  //   {
  //     title: "Desenvolvedor Full Stack",
  //     company: "Empresa 2",
  //     period: "Jan 2022 - Presente",
  //     description:
  //       "Atuo no desenvolvimento de aplicações completas usando Next.js e Node.js, focando em performance e segurança. Implementação de APIs RESTful e integração com bancos de dados.",
  //     image: foto1,
  //   },
  //   {
  //     title: "Desenvolvedor Full Stack",
  //     company: "Empresa 2",
  //     period: "Jan 2022 - Presente",
  //     description:
  //       "Atuo no desenvolvimento de aplicações completas usando Next.js e Node.js, focando em performance e segurança. Implementação de APIs RESTful e integração com bancos de dados.",
  //     image: foto1,
  //   },
  //   {
  //     title: "Desenvolvedor Full Stack",
  //     company: "Empresa 2",
  //     period: "Jan 2022 - Presente",
  //     description:
  //       "Atuo no desenvolvimento de aplicações completas usando Next.js e Node.js, focando em performance e segurança. Implementação de APIs RESTful e integração com bancos de dados.",
  //     image: foto1,
  //   },
  // ];
  const experiences = [
    {
      title: "Desenvolvedor Frontend JR",
      company: "Comeia Labs",
      period: "2022 - 2024",
      description:
        "Iniciei minha carreira como desenvolvedor por meio de um curso de desenvolvimento de software Fullstack na Comeia Labs. Participei ativamente da equipe de desenvolvimento focada em projetos de alta performance e contribui em reuniões com clientes para definição de requisitos e manutenção de sites e aplicativos.",
      image: foto1,
    },
    {
      title: "Desenvolvedor Frontend",
      company: "Luck Viagens - Comeia Labs",
      period: "Outubro 2022 - Janeiro 2023",
      description:
        "Desenvolvimento de uma aplicação web para pacotes de viagens. Tecnologias: ReactTS, TypeScript, Axios, React Router, Tailwind CSS. Implementação de autenticação de usuários e rotas privadas.",
      image: foto1,
    },
    {
      title: "Desenvolvedor Frontend",
      company: "Otur Viagens - Comeia Labs",
      period: "Janeiro 2023 - Fevereiro 2024",
      description:
        "Desenvolvimento e manutenção de uma aplicação web para pacotes de viagens nacionais e internacionais. Tecnologias: ReactTS, TypeScript, Axios, React Router, Tailwind CSS, FontAwesome. Criação de interfaces para usuários e administradores com autenticação.",
      image: foto1,
    },
    {
      title: "Desenvolvedor Frontend",
      company: "Alpha Web - Comeia Labs",
      period: "Março 2024 - Abril 2024",
      description:
        "Finalização de projeto em uma aplicação de gestão para fábricas de confecção. Implementação de funcionalidades como listagem de produtos, cadastro de clientes e controle de estoque. Melhorias na responsividade e interações com APIs.",
      image: foto1,
    },
    {
      title: "Desenvolvedor Frontend",
      company: "D-GYM - Comeia Labs",
      period: "Abril 2024",
      description:
        "Desenvolvimento de um sistema de academia online focado no público feminino. Tecnologias: ReactJS, TypeScript, FullCalendar. Funcionalidades incluem cadastro de aulas, agendamento e desenvolvimento de design responsivo com Tailwind CSS.",
      image: foto1,
    },
    {
      title: "Desenvolvedor Front-end Freelance",
      company: "Masterix Web",
      period: "Maio 2024 - Presente",
      description:
        "Desenvolvimento e finalização completa de site totalmente responsivo, utilizando tecnologias como ReactTS, TypeScript, Tailwind CSS, MaterialUI e NextJS.",
      image: foto1,
    },
    {
      title: "Desenvolvedor Frontend Freelance",
      company: "Portal Abri MEI",
      period: "Junho 2024 - Presente",
      description:
        "Desenvolvimento e finalização de uma landing page de portal e tela de cadastro para MEIs, utilizando tecnologias como TypeScript, HTML/CSS, Tailwind CSS e NextJS.",
      image: foto1,
    },
  ];

  const education = [
    {
      title: "Graduação em Sistemas de Informação",
      institution: "Universidade Federal de Sergipe (UFS)",
      period: "2022 - Atual",
      description:
        "Curso voltado para a integração entre tecnologia da informação e gestão, com ênfase em análise de sistemas, desenvolvimento de software, banco de dados e segurança da informação. Durante a graduação, adquiri habilidades em programação, design de arquitetura de sistemas e análise de requisitos, visando preparar profissionais para atuar na solução de problemas organizacionais através da tecnologia.",
    },
    {

    title: "Curso Fullstack em Desenvolvimento de Software",  
    institution: "Projeto Academy do Comeia Labs",  
    period: "2021",  
    description: "Participação em um programa intensivo e remoto de 6 meses dedicado ao desenvolvimento fullstack. Durante o curso, adquiri competências práticas em tecnologias essenciais, incluindo Git, HTML, CSS, JavaScript e TypeScript. Além disso, aprofundei meus conhecimentos em bancos de dados, Node.js, engenharia de software e metodologias ágeis, desenvolvendo projetos que reforçaram as habilidades adquiridas."  
  
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
    { name: "Styled components", icon: <SiStyledcomponents /> },
  ];

  const sections = [
    {
      title: "Sobre Mim",
      content: (
        <div className="flex flex-col font-semibold">
          <p className="text-2xl mb-5 text-justify responsive-aboutMe">
            {aboutMe.description}
          </p>
          <div className="flex flex-row gap-5 items-start justify-start responsive-ul">
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

            <ul className="list-none ">
              <li className="flex flex-row items-center justify-start gap-2 mb-4">
                <strong className="text-lg text-gray-400">
                  Nacionalidade:
                </strong>{" "}
                <p className="text-xl font-semibold text-white">
                  {aboutMe.details.nacionalidade}
                </p>
              </li>
              <li className="flex flex-row items-center justify-start gap-2 mb-4">
                <strong className="text-lg text-gray-400">Email:</strong>{" "}
                <p className="text-xl font-semibold text-white">
                  {aboutMe.details.email}
                </p>
              </li>

              <li className="flex flex-row items-center justify-start gap-2 mb-4">
                <strong className="text-lg text-gray-400">Freelance:</strong>{" "}
                <p className="text-xl font-semibold text-white">
                  {aboutMe.details.freelance}
                </p>
              </li>

              <li className="flex flex-row items-center justify-start gap-2 mb-4">
                <strong className="text-lg text-gray-400">Idiomas:</strong>{" "}
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
      title: "Experiências",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="p-4 border border-[#fca61e] rounded-lg h-80">
                <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                <h4 className="text-xl text-gray-400 mb-1">{exp.company}</h4>
                <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                <p className="text-lg">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Educação",
      content: (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className="mb-4 p-4 border border-[#fca61e] rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-1">{edu.title}</h3>
              <h4 className="text-xl text-gray-400 mb-1">{edu.institution}</h4>
              <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
              <p className="text-lg">{edu.description}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Minhas Habilidades",
      content: (
        <ul className="flex flex-wrap gap-4 responsive-skills">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="text-lg mb-1 relative group text-[#fca61e] transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-10"
              title={skill.name}
            >
              <div className="text-4xl">
                <div className="text-6xl p-5 bg-[#131318]">{skill.icon}</div>
              </div>
              <span className="absolute w-full bottom-full left-1/2 transform -translate-x-1/2 bg-black text-[#fca61e] text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
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

  const handleSectionClick = (index: any) => {
    setDirection(index > currentSectionIndex ? 1 : -1);
    setCurrentSectionIndex(index);
  };

  const { title, content } = sections[currentSectionIndex];

  return (
    <section
      className="container mb-24 p-5 w-full min-h-[38rem] h-auto mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white rounded-lg bg-[#1e1e28] transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-10"
      id="sobre-mim"
    >
      <h2 className="text-3xl font-bold tracking-tight mt-5">
        <span className="text-[#fca61e]">Sobre</span> Mim
      </h2>
      <p className="text-gray-400">
        Um pouco sobre minha trajetória profissional e habilidades.
      </p>
      <div className="flex flex-col gap-5 mt-4 md:flex-row">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => handleSectionClick(index)}
            className={`py-2 px-4 font-semibold rounded ${
              currentSectionIndex === index
                ? "bg-[#fca61e] text-[#17171d]"
                : "bg-transparent text-[#fca61e] border border-[#fca61e]"
            } hover:bg-opacity-80 transition duration-500 ease-in-out cursor-pointer`}
          >
            {section.title}
          </button>
        ))}
      </div>

      <div className="space-y-4 p-2 flex flex-col md:flex-row justify-start items-center">
        <div className="flex flex-col w-full">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSectionIndex}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              variants={{
                enter: (direction) => ({
                  y: direction > 0 ? 100 : -10,
                  opacity: 0,
                }),
                center: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                    duration: 0.7,
                    ease: "linear",
                  },
                },
              }}
              className="w-full md:w-2/3 flex flex-col justify-center items-start mt-4 p-4 "
            >
              <h3 className="text-2xl font-bold mb-1">{title}</h3>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSectionIndex}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              variants={{
                enter: (direction) => ({
                  y: direction > 0 ? 100 : -10,
                  opacity: 0,
                }),
                center: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.8,
                    duration: 0.7,
                    ease: "linear",
                  },
                },
              }}
              className="w-full md:w-3/3 flex flex-col justify-center items-start p-4 "
            >
              {content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PersonalPage;
