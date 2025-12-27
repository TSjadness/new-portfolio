"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import LuckyViagens from "@/image-projects/new/image_32.png";
import OturViagem from "@/image-projects/new/image_34.png";
import AlphaWeb from "@/image-projects/new/image_30.png";
import DgymWeb from "@/image-projects/new/image_31.png";

const jobs = [
  {
    title: "Desenvolvedor Front-end JR",
    company: "Luck Viagens",
    period: "Outubro de 2022 - Janeiro de 2023 (4 meses)",
    location: "Caruaru, Pernambuco, Brasil",
    description: `
      Atuei como desenvolvedor front-end Jr. na criação e manutenção da plataforma de pacotes de viagens.
      Trabalhei com React TS e TypeScript, integrações com APIs externas e foco em segurança (autenticação e autorização),
      além de boas práticas de código limpo e arquitetura modular.
    `,
    image: LuckyViagens,
  },
  {
    title: "Desenvolvedor Front-end JR",
    company: "Otur Viagens",
    period: "Janeiro de 2023 - Fevereiro de 2024 (1 ano e 2 meses)",
    location: "Caruaru, Pernambuco, Brasil",
    description: `
      Desenvolvi e mantive a aplicação web de pacotes de viagens utilizando React TS e TypeScript.
      Criei interfaces para usuários finais e administradores, implementei rotas privadas,
      autenticação segura e layout totalmente responsivo com Tailwind CSS.
    `,
    image: OturViagem,
  },
  {
    title: "Desenvolvedor Front-end JR",
    company: "Alpha Sistema",
    period: "Março de 2024 - Abril de 2024 (2 meses)",
    location: "Caruaru, Pernambuco, Brasil",
    description: `
      Fui integrado ao time na fase final do ciclo de desenvolvimento,
      focando em novas funcionalidades e correção de bugs em módulos de produtos, clientes, estoque,
      vendas, finanças e relatórios. Otimizei rotas, integrei APIs externas e garanti responsividade com Tailwind CSS.
    `,
    image: AlphaWeb,
  },
  {
    title: "Desenvolvedor Front-end JR",
    company: "D-GYM",
    period: "Abril de 2024 - Abril de 2024 (1 mês)",
    location: "São Paulo, Brasil",
    description: `
      Participei da criação da plataforma para academias com React e TypeScript,
      definindo a estrutura do projeto e integrando APIs externas.
      Desenvolvi interfaces para membros, instrutores e administradores, incluindo agendamento de aulas
      e visualização em calendário interativo, sempre com foco em usabilidade e responsividade.
    `,
    image: DgymWeb,
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

const Jobspage = () => {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    if (currentJobIndex < jobs.length - 1) {
      setDirection(1);
      setCurrentJobIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentJobIndex > 0) {
      setDirection(-1);
      setCurrentJobIndex((prev) => prev - 1);
    }
  };

  const currentJob = jobs[currentJobIndex];

  return (
    <section
      id="trabalhos"
      className="
        container mx-auto max-w-7xl
        px-4 sm:px-6 lg:px-8
        py-10 sm:py-12 lg:py-16
        text-white bg-[#1e1e28]
        rounded-none sm:rounded-lg
      "
    >
      {/* TÍTULO */}
      <div className="flex flex-col items-center gap-3 mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          <span className="text-[#fca61e]">Minhas</span> Experiências
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-white/60 max-w-2xl">
          Um resumo das empresas em que atuei como desenvolvedor front-end JR,
          com foco em produtos digitais, performance e experiência do usuário.
        </p>
      </div>

      {/* CARD PRINCIPAL */}
      <div className="flex flex-col items-center">
        <div className="w-full">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={currentJobIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="
                rounded-2xl 
                p-4 sm:p-6 md:p-8
                flex flex-col md:flex-row
                gap-6 md:gap-8
              "
            >
            
              <div className="md:w-1/2 w-full">
                <div
                  className="
                    relative w-full
                    aspect-[16/9]   /* mesmo tamanho para todas as imagens */
                    overflow-hidden rounded-2xl
                    shadow-lg shadow-black/40
                  "
                >
                  <Image
                    src={currentJob.image}
                    alt={currentJob.title}
                    fill
                    sizes="(min-width:1024px) 40vw, 100vw"
                    className="object-cover"
                    priority={currentJobIndex === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              
              <div className="md:w-1/2 w-full flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#fca61e]">
                    {currentJob.title}
                  </h3>
                  <h4 className="text-lg md:text-xl text-white font-semibold">
                    {currentJob.company}
                  </h4>

                  <div className="flex flex-wrap gap-2 mt-2 text-[11px] sm:text-xs md:text-sm">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                      {currentJob.period}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#fca61e]/10 border border-[#fca61e]/40 text-[#fca61e]">
                      {currentJob.location}
                    </span>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-white/80 whitespace-pre-line">
                    {currentJob.description}
                  </p>
                </div>

              
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] sm:text-xs md:text-sm text-white/40">
                    {currentJobIndex + 1} de {jobs.length} experiências
                  </span>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <button
                      onClick={handlePrevious}
                      className="
                        flex items-center justify-center
                        text-[#17171d] bg-[#fca61e]
                        w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11
                        rounded-full shadow-md hover:bg-[#fbb244]
                        transition duration-300 disabled:opacity-40
                      "
                      disabled={currentJobIndex === 0}
                      aria-label="Experiência anterior"
                    >
                      <IoIosArrowBack className="text-xl sm:text-2xl" />
                    </button>

                    <button
                      onClick={handleNext}
                      className="
                        flex items-center justify-center
                        text-[#17171d] bg-[#fca61e]
                        w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11
                        rounded-full shadow-md hover:bg-[#fbb244]
                        transition duration-300 disabled:opacity-40
                      "
                      disabled={currentJobIndex === jobs.length - 1}
                      aria-label="Próxima experiência"
                    >
                      <IoIosArrowForward className="text-xl sm:text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {jobs.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentJobIndex ? 1 : -1);
                setCurrentJobIndex(index);
              }}
              className={`
                h-2.5 rounded-full transition-all duration-300
                ${
                  index === currentJobIndex
                    ? "w-6 bg-[#fca61e]"
                    : "w-2.5 bg-gray-600 hover:bg-gray-400"
                }
              `}
              aria-label={`Ir para experiência ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobspage;
