"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import foto1 from "@/images/foto-teste.jpg";
import LuckyViagens from "@/image-projects/foto-luckyviagens.jpg";
import OturViagem from "@/image-projects/foto-oturViagens.png";
import AlphaWeb from "@/image-projects/foto-alphaWeb.png";
import DgymWeb from "@/image-projects/foto-dgym.png";


const Jobspage = () => {
  // Experiência profissional
  const jobs = [
    {
      title: "Desenvolvedor Front-end JR",
      company: "Luck Viagens",
      period: "outubro de 2022 - janeiro de 2023 (4 meses)",
      location: "Caruaru, Pernambuco, Brasil",
      description: `
        No projeto da Luck Viagens, atuei como desenvolvedor frontend Jr., criando e mantendo a aplicação web de pacotes de viagens com ReactTS e TypeScript. Realizei integrações com várias APIs externas para manter a plataforma atualizada e assegurei a segurança dos dados dos usuários, focando em autenticação e autorização. Aprendi a importância de escrever código limpo e modular e a seguir as melhores práticas de segurança, o que foi crucial para meu crescimento profissional e me preparou para futuros desafios.
      `,
      image: LuckyViagens,
    },
    {
      title: "Desenvolvedor Front-end JR",
      company: "Otur Viagens",
      period: "janeiro de 2023 - fevereiro de 2024 (1 ano 2 meses)",
      location: "Caruaru, Pernambuco, Brasil",
      description: `
        No projeto da Otur Viagens, desenvolvi e mantive a aplicação web de pacotes de viagens, utilizando ReactTS e TypeScript para criar interfaces dinâmicas e integrar APIs externas. Criei interfaces específicas para usuários finais e administradores, implementando sistemas de autenticação seguros e rotas privadas para garantir o acesso autorizado. A estilização responsiva foi feita com Tailwind CSS e a usabilidade aprimorada.
      `,
      image: OturViagem,
    },
    {
      title: "Desenvolvedor Front-end JR",
      company: "Alpha Sistema",
      period: "março de 2024 - abril de 2024 (2 meses)",
      location: "Caruaru, Pernambuco, Brasil",
      description: `
        No projeto da Alpha sistema, fui intregado no time na etapa final do ciclo de desenvolvimento , focando em novas funcionalidades e correção de bugs em áreas críticas como produtos, clientes, fornecedores, estoque, vendas, finanças e relatórios. Assegurei a responsividade do site com Tailwind CSS e melhorei a acessibilidade em dispositivos móveis. Otimizei rotas e integrei APIs externas, utilizando bibliotecas JavaScript como axios, react-router-dom, e react-pdf.
      `,
      image: AlphaWeb,
    },
    {
      title: "Desenvolvedor Front-end JR",
      company: "D-GYM",
      period: "abril de 2024 - abril de 2024 (1 mês)",
      location: "São Paulo, Brasil",
      description:
        "Trabalhei na criação e manutenção de interfaces responsivas com React e Tailwind CSS, colaborando com equipes de design para implementar soluções inovadoras. Como membro chave da equipe de desenvolvimento, defini a estrutura e arquitetura do repositório do projeto com ReactJS e TypeScript, integrando APIs externas. Criei interfaces intuitivas para membros, instrutores e administradores, facilitando cadastro de aulas, agendamento de sessões e exibição de atividades em um calendário interativo.",
      image: DgymWeb,
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

  const { title, company, period, location, description, image } =
    jobs[currentJobIndex];

  return (
    <section
      className="container mx-auto p-6 max-w-7xl text-white bg-gradient-to-r bg-[#1e1e28]  rounded-lg shadow-lg ransform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-10 h-auto"
      id="trabalhos"
    >
      <h2 className="text-4xl font-bold text-center mb-6">
        <span className="text-[#fca61e]">Minhas</span> Experiências
      </h2>

      <div className="flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:space-x-6 mx-auto  p-2">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentJobIndex}
            custom={direction}
            initial={{ x: direction > 40 ? 80 : -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-[#1e1e28] h-auto  p-4 rounded-lg flex flex-col items-center responsive-work-container"
          >
            <div className="flex flex-row items-centerjustify-center space-y-6 responsive-work gap-5 mb-5 ">
              <div className="w-full mb-4  bg-white">
                <Image
                  src={image}
                  alt={title}
                  width={600}
                  className="rounded-lg"
                />
              </div>

              <div className="max-w-xl responsive-work-text">
                <h3 className="text-2xl font-bold mb-1 text-[#fca61e] ">
                  {title}
                </h3>
                <h4 className="text-xl text-gray-400 mb-2">{company}</h4>
                <p className="text-sm text-gray-500">{period}</p>
                <p className="text-sm text-gray-500 mb-4">{location}</p>
                <p className="text-lg text-gray-300 ">{description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="w-full flex justify-center items-center gap-8 p-4 mt-7 ">
        <button
          onClick={handlePrevious}
          className="text-[#17171d] bg-[#fca61e] p-3 rounded-full shadow-md hover:bg-opacity-90 transition duration-300 disabled:opacity-50"
          disabled={currentJobIndex === 0}
        >
          <IoIosArrowBack className="text-3xl" />
        </button>

        <button
          onClick={handleNext}
          className="text-[#17171d] bg-[#fca61e] p-3 rounded-full shadow-md hover:bg-opacity-90 transition duration-300 disabled:opacity-50"
          disabled={currentJobIndex === jobs.length - 1}
        >
          <IoIosArrowForward className="text-3xl" />
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-2 ">
        {jobs.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentJobIndex
                ? "bg-[#fca61e]"
                : "bg-gray-600 hover:bg-gray-400"
            } cursor-pointer transition-all duration-300`}
            onClick={() => setCurrentJobIndex(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Jobspage;
