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
      description: "Trabalhei na criação e manutenção de interfaces responsivas usando React e Tailwind CSS. Colaborei com equipes de design para implementar soluções amigáveis e inovadoras.",
      // description: `
      //   Como membro chave da equipe de desenvolvimento, defini a estrutura e a arquitetura do repositório do projeto, utilizando ReactJS e TypeScript, além de estabelecer integrações com APIs externas.
      //   Criei interfaces intuitivas e amigáveis para três grupos distintos de usuários: membros, instrutores e administradores. Essas interfaces foram projetadas para facilitar o acesso e a interação com o sistema, permitindo que cada grupo realizasse suas funções de maneira eficiente. Entre as funcionalidades implementadas, destaquei o sistema de cadastro de aulas, o agendamento de sessões e a exibição dessas atividades em um calendário interativo.
      // `,
      image: foto1,
    },
    {
     title: "Desenvolvedor Front-end JR",
      company: "Alpha Sistema",
      period: "março de 2024 - abril de 2024 (2 meses)",
      location: "Caruaru, Pernambuco, Brasil",
      description: `
        No final do ciclo de desenvolvimento do projeto na Alpha Sistemas, uma empresa líder no desenvolvimento de softwares de gestão para indústrias de confecção, fui convidado a integrar o time de desenvolvimento. Minha principal responsabilidade era desenvolver novas funcionalidades e corrigir bugs na aplicação, cobrindo áreas críticas como listagem de produtos, registro de clientes, fornecedores e funcionários, controle de estoque, operações de vendas, finanças e geração de relatórios.
        Também me concentrei em garantir a responsividade do site utilizando Tailwind CSS, melhorando a acessibilidade e a experiência do usuário em dispositivos móveis. Trabalhei na otimização das rotas da aplicação e estabeleci integrações com APIs externas para expandir as funcionalidades. Utilizei várias bibliotecas JavaScript, como axios, react-router-dom, react-toastify, react-icons, react-hook-form, zod e react-pdf, para suportar essas tarefas.
        Esta experiência na Alpha Sistemas foi especialmente gratificante, pois me permitiu aplicar e aprofundar minhas habilidades em desenvolvimento web, enquanto contribuía diretamente para o sucesso do projeto. Trabalhar em um ambiente dinâmico e desafiador me proporcionou insights valiosos sobre o desenvolvimento de software de alto desempenho e a importância de fornecer soluções tecnológicas eficientes para as necessidades empresariais.
      `,
      image: foto1,
    },
    {
     title: "Desenvolvedor Front-end JR",
      company: "COMEIA",
      period: "outubro de 2022 - abril de 2024 (1 ano 7 meses)",
      location: "Caruaru, Pernambuco, Brasil",
      description: `
        Sou um desenvolvedor de software iniciando minha carreira após um curso intensivo de desenvolvimento Fullstack na Comeia Labs, onde me destaquei tanto em desenvolvimento web quanto em tecnologias de backend, como Node.js, MySQL e PostgreSQL. Minha experiência profissional incluiu um papel como Desenvolvedor Frontend em uma empresa focada em projetos de alto desempenho. Nesse papel, trabalhei na criação de aplicações web, websites, páginas de destino e bibliotecas personalizadas para otimizar o desempenho.
        Sempre enfatizei a importância da excelência técnica e eficiência, seguindo rigorosamente as normas e procedimentos estabelecidos. Participei ativamente das discussões com clientes para esclarecer requisitos e mantive sites e aplicativos sob constante monitoramento e ajuste conforme necessário. Essa experiência reforçou minhas habilidades técnicas e meu entendimento da comunicação eficaz com stakeholders, além da capacidade de adaptar soluções tecnológicas às necessidades dos usuários finais.
      `,
      image: foto1,
    },
    {
      title: "Desenvolvedor Front-end JR",
      company: "Otur Viagens",
      period: "janeiro de 2023 - fevereiro de 2024 (1 ano 2 meses)",
      location: "Caruaru, Pernambuco, Brasil",
      description: `
        Na Otur Viagens, uma empresa do setor de turismo, desempenhei um papel crucial no desenvolvimento e manutenção da aplicação web destinada à oferta de pacotes de viagens nacionais e internacionais. Durante minha gestão nesta posição, foquei no uso de ReactTS e TypeScript para construir interfaces ricas e dinâmicas e estabelecer integrações robustas com diversas APIs externas.
        Foi enriquecedor criar e implementar interfaces específicas tanto para os usuários finais quanto para os administradores. Isso envolveu a implementação de sistemas de autenticação seguros e a configuração de rotas privadas, garantindo que apenas usuários autorizados tivessem acesso a determinadas funcionalidades. A estilização responsiva dos componentes foi alcançada com Tailwind CSS, enquanto ícones de alta qualidade do FontAwesome melhoraram a usabilidade e a estética geral da plataforma.
      `,
      image: foto1,
    },
    {
     title: "Desenvolvedor Front-end JR",
      company: "Luck Viagens",
      period: "outubro de 2022 - janeiro de 2023 (4 meses)",
      location: "Caruaru, Pernambuco, Brasil",
      description: `
        Na Luck Viagens, uma empresa especializada em agências de viagens tanto nacionais quanto internacionais, tive a oportunidade de atuar como desenvolvedor frontend Jr., sendo responsável pelo desenvolvimento e manutenção da aplicação web que oferece aos clientes diversos pacotes de viagens. Durante minha jornada, utilizei ReactTS junto com TypeScript, duas ferramentas poderosas que me permitiram criar interfaces ricas e interativas para nossos usuários.
        Minha função envolvia a realização de integrações com várias APIs externas, garantindo assim que nossa plataforma permanecesse atualizada com as informações mais recentes disponíveis no mercado de viagens. Um dos maiores desafios que enfrentei durante meu trabalho foi garantir a segurança dos dados dos usuários, especialmente ao lidar com a autenticação e autorização.
        Ao longo deste projeto, aprendi valiosas lições sobre o desenvolvimento frontend, desde a importância de escrever código limpo e modular até a necessidade de estar sempre atualizado com as melhores práticas de segurança. Essa experiência foi fundamental para o meu crescimento profissional e me preparou para enfrentar futuros desafios com confiança.
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
            <h2 className="text-4xl text-stroke text-stroke-[#fca61e] text-stroke-fill-[#fca61e] font-bold mb-6">
              {title}
            </h2>

            <div className="flex flex-col w-full p-4">
              <h3 className="text-2xl font-bold mb-1">{title}</h3>
              <h4 className="text-xl text-gray-400 mb-3">{company}</h4>
              <p className="text-sm text-gray-500 mb-1">{period}</p>
              <p className="text-sm text-gray-500 mb-5">{location}</p>
              <p className="text-lg whitespace-pre-line max-w-lg">{description}</p>
              {/* <p className="text-4xl font-bold mb-5">{text}</p>
              <span className="text-xl mb-5">{subtext}</span>
              <span className="text-[#fca61e]">{desc}</span> */}
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
