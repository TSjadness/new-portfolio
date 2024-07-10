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
      title: "Desenvolvedor Front-end JR",
      company: "D-GYM",
      period: "abril de 2024 - abril de 2024 (1 mês)",
      location: "São Paulo, Brasil",
      description:
        "Trabalhei na criação e manutenção de interfaces responsivas com React e Tailwind CSS, colaborando com equipes de design para implementar soluções inovadoras. Como membro chave da equipe de desenvolvimento, defini a estrutura e arquitetura do repositório do projeto com ReactJS e TypeScript, integrando APIs externas. Criei interfaces intuitivas para membros, instrutores e administradores, facilitando cadastro de aulas, agendamento de sessões e exibição de atividades em um calendário interativo.",
      image: foto1,
    },
    {
      title: "Desenvolvedor Front-end JR",
      company: "Alpha Sistema",
      period: "março de 2024 - abril de 2024 (2 meses)",
      location: "Caruaru, Pernambuco, Brasil",
      description: `
        No final do ciclo de desenvolvimento na Alpha Sistemas, fui convidado a integrar o time de desenvolvimento, focando em novas funcionalidades e correção de bugs em áreas críticas como produtos, clientes, fornecedores, estoque, vendas, finanças e relatórios. Assegurei a responsividade do site com Tailwind CSS e melhorei a acessibilidade em dispositivos móveis. Otimizei rotas e integrei APIs externas, utilizando bibliotecas JavaScript como axios, react-router-dom, e react-pdf.
      `,
      image: foto1,
    },
    // {
    //   title: "Desenvolvedor Front-end JR",
    //   company: "COMEIA",
    //   period: "outubro de 2022 - abril de 2024 (1 ano 7 meses)",
    //   location: "Caruaru, Pernambuco, Brasil",
    //   description: `
    //     Sou desenvolvedor de software em início de carreira, formado em desenvolvimento Fullstack pela Comeia Labs, com destaque em web e backend (Node.js, React, TyperScript, Html e Css). Atuei como Desenvolvedor Frontend em projetos de alto desempenho, criando aplicações web, websites e bibliotecas personalizadas para otimizar o desempenho. Foco na excelência técnica e eficiência, seguindo normas e procedimentos rigorosos. Participei de discussões com clientes para esclarecer requisitos, mantendo monitoramento contínuo de sites e aplicativos.
    //   `,
    //   image: foto1,
    // },
    {
      title: "Desenvolvedor Front-end JR",
      company: "Otur Viagens",
      period: "janeiro de 2023 - fevereiro de 2024 (1 ano 2 meses)",
      location: "Caruaru, Pernambuco, Brasil",
      description: `
        Na Otur Viagens, desenvolvi e mantive a aplicação web de pacotes de viagens, utilizando ReactTS e TypeScript para criar interfaces dinâmicas e integrar APIs externas. Criei interfaces específicas para usuários finais e administradores, implementando sistemas de autenticação seguros e rotas privadas para garantir o acesso autorizado. A estilização responsiva foi feita com Tailwind CSS e a usabilidade aprimorada.
      `,
      image: foto1,
    },
    {
      title: "Desenvolvedor Front-end JR",
      company: "Luck Viagens",
      period: "outubro de 2022 - janeiro de 2023 (4 meses)",
      location: "Caruaru, Pernambuco, Brasil",
      description: `
        Na Luck Viagens, atuei como desenvolvedor frontend Jr., criando e mantendo a aplicação web de pacotes de viagens com ReactTS e TypeScript. Realizei integrações com várias APIs externas para manter a plataforma atualizada e assegurei a segurança dos dados dos usuários, focando em autenticação e autorização. Aprendi a importância de escrever código limpo e modular e a seguir as melhores práticas de segurança, o que foi crucial para meu crescimento profissional e me preparou para futuros desafios.
      `,
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

  const { title, company, period, location, description, image } =
    jobs[currentJobIndex];

  return (
    <section
      className="container mb-24 p-5 w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white rounded-lg bg-[#131318] transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-10   "
      id="trabalhos"
    >
      <h2 className="text-3xl font-bold tracking-tight">
        <span className="text-[#fca61e]">Minhas</span> Experiências
      </h2>
      <span className="text-gray-400 xs:p-2">
        Empresas em que atuei como desenvolvedor e minhas principais funções
      </span>

      <div className="responsive-box">
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
              className=" w-full md:w-1/2 flex flex-col justify-center items-start mt-4 "
            >
              {/* <h2 className="text-4xl text-stroke text-stroke-[#fca61e] text-stroke-fill-[#fca61e] font-bold mb-6">
              {title}
            </h2> */}

              <div className="flex flex-col w-full p-4">
                <h3 className="text-3xl font-bold mb-1 text-[#fca61e]">
                  {title}
                </h3>
                <h4 className="text-xl text-gray-400 mb-3">{company}</h4>
                <p className="text-sm text-gray-500 mb-1">{period}</p>
                <p className="text-sm text-gray-500 mb-2">{location}</p>
                <p className="text-lg text-justify whitespace-pre-line max-w-lg">
                  {description}
                </p>
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

        <div className="flex flex-row gap-5 mt-4 responsive-button-work ">
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
      </div>
    </section>
  );
};

export default Jobspage;
