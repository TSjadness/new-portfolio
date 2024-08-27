// "use client";
// import React, { useState } from "react";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import foto1 from "@/images/foto-teste.jpg";

// const Jobspage = () => {
//   // Experiência profissional
//   const jobs = [
//     {
//       title: "Desenvolvedor Front-end JR",
//       company: "Luck Viagens",
//       period: "outubro de 2022 - janeiro de 2023 (4 meses)",
//       location: "Caruaru, Pernambuco, Brasil",
//       description: `
//         Na Luck Viagens, atuei como desenvolvedor frontend Jr., criando e mantendo a aplicação web de pacotes de viagens com ReactTS e TypeScript. Realizei integrações com várias APIs externas para manter a plataforma atualizada e assegurei a segurança dos dados dos usuários, focando em autenticação e autorização. Aprendi a importância de escrever código limpo e modular e a seguir as melhores práticas de segurança, o que foi crucial para meu crescimento profissional e me preparou para futuros desafios.
//       `,
//       image: foto1,
//     },
//     {
//       title: "Desenvolvedor Front-end JR",
//       company: "Otur Viagens",
//       period: "janeiro de 2023 - fevereiro de 2024 (1 ano 2 meses)",
//       location: "Caruaru, Pernambuco, Brasil",
//       description: `
//         Na Otur Viagens, desenvolvi e mantive a aplicação web de pacotes de viagens, utilizando ReactTS e TypeScript para criar interfaces dinâmicas e integrar APIs externas. Criei interfaces específicas para usuários finais e administradores, implementando sistemas de autenticação seguros e rotas privadas para garantir o acesso autorizado. A estilização responsiva foi feita com Tailwind CSS e a usabilidade aprimorada.
//       `,
//       image: foto1,
//     },
//     {
//       title: "Desenvolvedor Front-end JR",
//       company: "Alpha Sistema",
//       period: "março de 2024 - abril de 2024 (2 meses)",
//       location: "Caruaru, Pernambuco, Brasil",
//       description: `
//         No final do ciclo de desenvolvimento na Alpha Sistemas, fui convidado a integrar o time de desenvolvimento, focando em novas funcionalidades e correção de bugs em áreas críticas como produtos, clientes, fornecedores, estoque, vendas, finanças e relatórios. Assegurei a responsividade do site com Tailwind CSS e melhorei a acessibilidade em dispositivos móveis. Otimizei rotas e integrei APIs externas, utilizando bibliotecas JavaScript como axios, react-router-dom, e react-pdf.
//       `,
//       image: foto1,
//     },
//     {
//       title: "Desenvolvedor Front-end JR",
//       company: "D-GYM",
//       period: "abril de 2024 - abril de 2024 (1 mês)",
//       location: "São Paulo, Brasil",
//       description:
//         "Trabalhei na criação e manutenção de interfaces responsivas com React e Tailwind CSS, colaborando com equipes de design para implementar soluções inovadoras. Como membro chave da equipe de desenvolvimento, defini a estrutura e arquitetura do repositório do projeto com ReactJS e TypeScript, integrando APIs externas. Criei interfaces intuitivas para membros, instrutores e administradores, facilitando cadastro de aulas, agendamento de sessões e exibição de atividades em um calendário interativo.",
//       image: foto1,
//     },
//   ];

//   const [currentJobIndex, setCurrentJobIndex] = useState(0);

//   const handleNext = () => {
//     if (currentJobIndex < jobs.length - 1) {
//       setCurrentJobIndex(currentJobIndex + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentJobIndex > 0) {
//       setCurrentJobIndex(currentJobIndex - 1);
//     }
//   };

//   const { title, company, period, location, description, image } =
//     jobs[currentJobIndex];

//   return (
//     <section
//       className="container mx-auto p-6 max-w-6xl text-white bg-gradient-to-r from-[#2c2c34] to-[#1e1e28] rounded-lg shadow-lg"
//       id="trabalhos"
//     >
//       <h2 className="text-4xl font-bold text-center mb-6">
//         <span className="text-[#fca61e]">Minhas</span> Experiências
//       </h2>

//       <div className="flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:space-x-6">
//         <button
//           onClick={handlePrevious}
//           className="text-[#17171d] bg-[#fca61e] p-3 rounded-full shadow-md hover:bg-opacity-90 transition duration-300 disabled:opacity-50"
//           disabled={currentJobIndex === 0}
//         >
//           <IoIosArrowBack className="text-3xl" />
//         </button>

//         <motion.div
//           key={currentJobIndex}
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.8 }}
//           transition={{ duration: 0.5 }}
//           className="bg-[#1c1c22] p-6 rounded-lg shadow-lg flex flex-col items-center"
//         >
//           <div className="w-full mb-4">
//             <Image
//               src={image}
//               alt={title}
//               width={800}
//               height={450}
//               className="rounded-lg"
//             />
//           </div>

//           <div className="text-center">
//             <h3 className="text-2xl font-bold mb-1 text-[#fca61e]">{title}</h3>
//             <h4 className="text-xl text-gray-400 mb-2">{company}</h4>
//             <p className="text-sm text-gray-500">{period}</p>
//             <p className="text-sm text-gray-500 mb-4">{location}</p>
//             <p className="text-lg text-gray-300">{description}</p>
//           </div>
//         </motion.div>

//         <button
//           onClick={handleNext}
//           className="text-[#17171d] bg-[#fca61e] p-3 rounded-full shadow-md hover:bg-opacity-90 transition duration-300 disabled:opacity-50"
//           disabled={currentJobIndex === jobs.length - 1}
//         >
//           <IoIosArrowForward className="text-3xl" />
//         </button>
//       </div>

//       <div className="flex justify-center mt-6 space-x-2">
//         {jobs.map((_, index) => (
//           <div
//             key={index}
//             className={`w-3 h-3 rounded-full ${
//               index === currentJobIndex
//                 ? "bg-[#fca61e]"
//                 : "bg-gray-600 hover:bg-gray-400"
//             } cursor-pointer transition-all duration-300`}
//             onClick={() => setCurrentJobIndex(index)}
//           ></div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Jobspage;


// "use client";
// import React, { useState } from "react";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import foto1 from "@/images/foto-teste.jpg";

// const Jobspage = () => {
//   // Experiência profissional
//   const jobs = [
//     {
//       title: "Desenvolvedor Front-end JR",
//       company: "Luck Viagens",
//       period: "outubro de 2022 - janeiro de 2023 (4 meses)",
//       location: "Caruaru, Pernambuco, Brasil",
//       description: `
//         Na Luck Viagens, atuei como desenvolvedor frontend Jr., criando e mantendo a aplicação web de pacotes de viagens com ReactTS e TypeScript. Realizei integrações com várias APIs externas para manter a plataforma atualizada e assegurei a segurança dos dados dos usuários, focando em autenticação e autorização. Aprendi a importância de escrever código limpo e modular e a seguir as melhores práticas de segurança, o que foi crucial para meu crescimento profissional e me preparou para futuros desafios.
//       `,
//       image: foto1,
//     },
//     {
//       title: "Desenvolvedor Front-end JR",
//       company: "Otur Viagens",
//       period: "janeiro de 2023 - fevereiro de 2024 (1 ano 2 meses)",
//       location: "Caruaru, Pernambuco, Brasil",
//       description: `
//         Na Otur Viagens, desenvolvi e mantive a aplicação web de pacotes de viagens, utilizando ReactTS e TypeScript para criar interfaces dinâmicas e integrar APIs externas. Criei interfaces específicas para usuários finais e administradores, implementando sistemas de autenticação seguros e rotas privadas para garantir o acesso autorizado. A estilização responsiva foi feita com Tailwind CSS e a usabilidade aprimorada.
//       `,
//       image: foto1,
//     },
//     {
//       title: "Desenvolvedor Front-end JR",
//       company: "Alpha Sistema",
//       period: "março de 2024 - abril de 2024 (2 meses)",
//       location: "Caruaru, Pernambuco, Brasil",
//       description: `
//         No final do ciclo de desenvolvimento na Alpha Sistemas, fui convidado a integrar o time de desenvolvimento, focando em novas funcionalidades e correção de bugs em áreas críticas como produtos, clientes, fornecedores, estoque, vendas, finanças e relatórios. Assegurei a responsividade do site com Tailwind CSS e melhorei a acessibilidade em dispositivos móveis. Otimizei rotas e integrei APIs externas, utilizando bibliotecas JavaScript como axios, react-router-dom, e react-pdf.
//       `,
//       image: foto1,
//     },
//     {
//       title: "Desenvolvedor Front-end JR",
//       company: "D-GYM",
//       period: "abril de 2024 - abril de 2024 (1 mês)",
//       location: "São Paulo, Brasil",
//       description:
//         "Trabalhei na criação e manutenção de interfaces responsivas com React e Tailwind CSS, colaborando com equipes de design para implementar soluções inovadoras. Como membro chave da equipe de desenvolvimento, defini a estrutura e arquitetura do repositório do projeto com ReactJS e TypeScript, integrando APIs externas. Criei interfaces intuitivas para membros, instrutores e administradores, facilitando cadastro de aulas, agendamento de sessões e exibição de atividades em um calendário interativo.",
//       image: foto1,
//     },
//   ];

//   const [currentJobIndex, setCurrentJobIndex] = useState(0);

//   const handleNext = () => {
//     if (currentJobIndex < jobs.length - 1) {
//       setCurrentJobIndex(currentJobIndex + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentJobIndex > 0) {
//       setCurrentJobIndex(currentJobIndex - 1);
//     }
//   };

//   const { title, company, period, location, description, image } =
//     jobs[currentJobIndex];

//   return (
//     <section
//       className="container mx-auto p-6 max-w-6xl text-white bg-gradient-to-r from-[#2c2c34] to-[#1e1e28] rounded-lg shadow-lg"
//       id="trabalhos"
//     >
//       <h2 className="text-4xl font-bold text-center mb-6">
//         <span className="text-[#fca61e]">Minhas</span> Experiências
//       </h2>

//       <div className="flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:space-x-6">
//         <button
//           onClick={handlePrevious}
//           className="text-[#17171d] bg-[#fca61e] p-3 rounded-full shadow-md hover:bg-opacity-90 transition duration-300 disabled:opacity-50"
//           disabled={currentJobIndex === 0}
//         >
//           <IoIosArrowBack className="text-3xl" />
//         </button>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentJobIndex}
//             initial={{ opacity: 0, rotateY: -90 }}
//             animate={{ opacity: 1, rotateY: 0 }}
//             exit={{ opacity: 0, rotateY: 90 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             className="bg-[#1c1c22] p-6 rounded-lg shadow-lg flex flex-col items-center"
//           >
//             <div className="w-full mb-4">
//               <Image
//                 src={image}
//                 alt={title}
//                 width={800}
//                 height={450}
//                 className="rounded-lg"
//               />
//             </div>

//             <div className="text-center">
//               <h3 className="text-2xl font-bold mb-1 text-[#fca61e]">
//                 {title}
//               </h3>
//               <h4 className="text-xl text-gray-400 mb-2">{company}</h4>
//               <p className="text-sm text-gray-500">{period}</p>
//               <p className="text-sm text-gray-500 mb-4">{location}</p>
//               <p className="text-lg text-gray-300">{description}</p>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         <button
//           onClick={handleNext}
//           className="text-[#17171d] bg-[#fca61e] p-3 rounded-full shadow-md hover:bg-opacity-90 transition duration-300 disabled:opacity-50"
//           disabled={currentJobIndex === jobs.length - 1}
//         >
//           <IoIosArrowForward className="text-3xl" />
//         </button>
//       </div>

//       <div className="flex justify-center mt-6 space-x-2">
//         {jobs.map((_, index) => (
//           <div
//             key={index}
//             className={`w-3 h-3 rounded-full ${
//               index === currentJobIndex
//                 ? "bg-[#fca61e]"
//                 : "bg-gray-600 hover:bg-gray-400"
//             } cursor-pointer transition-all duration-300`}
//             onClick={() => setCurrentJobIndex(index)}
//           ></div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Jobspage;

// "use client";
// import React, { useState } from "react";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import foto1 from "@/images/foto-teste.jpg";

// const Jobspage = () => {
//   // Experiências profissionais
//   const jobs = [
//     {
//       id: 1,
//       title: "Desenvolvedor Front-end JR",
//       company: "Luck Viagens",
//       period: "Outubro de 2022 - Janeiro de 2023 (4 meses)",
//       location: "Caruaru, Pernambuco, Brasil",
//       description: `
//         Na Luck Viagens, atuei como desenvolvedor Front-end Jr., criando e mantendo a aplicação web de pacotes de viagens com React e TypeScript. Realizei integrações com várias APIs externas para manter a plataforma atualizada e assegurei a segurança dos dados dos usuários, focando em autenticação e autorização. Aprendi a importância de escrever código limpo e modular e a seguir as melhores práticas de segurança, o que foi crucial para meu crescimento profissional e me preparou para futuros desafios.
//       `,
//       image: foto1,
//     },
//     {
//       id: 2,
//       title: "Desenvolvedor Front-end JR",
//       company: "Otur Viagens",
//       period: "Janeiro de 2023 - Fevereiro de 2024 (1 ano e 2 meses)",
//       location: "Caruaru, Pernambuco, Brasil",
//       description: `
//         Na Otur Viagens, desenvolvi e mantive a aplicação web de pacotes de viagens, utilizando React e TypeScript para criar interfaces dinâmicas e integrar APIs externas. Criei interfaces específicas para usuários finais e administradores, implementando sistemas de autenticação seguros e rotas privadas para garantir o acesso autorizado. A estilização responsiva foi feita com Tailwind CSS, aprimorando a usabilidade.
//       `,
//       image: foto1,
//     },
//     {
//       id: 3,
//       title: "Desenvolvedor Front-end JR",
//       company: "Alpha Sistemas",
//       period: "Março de 2024 - Abril de 2024 (2 meses)",
//       location: "Caruaru, Pernambuco, Brasil",
//       description: `
//         Na Alpha Sistemas, participei do desenvolvimento de novas funcionalidades e correção de bugs em áreas críticas como produtos, clientes, fornecedores, estoque, vendas, finanças e relatórios. Assegurei a responsividade do site com Tailwind CSS e melhorei a acessibilidade em dispositivos móveis. Otimizei rotas e integrei APIs externas, utilizando bibliotecas como Axios e React Router.
//       `,
//       image: foto1,
//     },
//     {
//       id: 4,
//       title: "Desenvolvedor Front-end JR",
//       company: "D-GYM",
//       period: "Abril de 2024 - Abril de 2024 (1 mês)",
//       location: "São Paulo, Brasil",
//       description: `
//         Na D-GYM, criei e mantive interfaces responsivas com React e Tailwind CSS, colaborando com equipes de design para implementar soluções inovadoras. Defini a estrutura e arquitetura do projeto com React e TypeScript, integrando APIs externas. Desenvolvi interfaces intuitivas para membros, instrutores e administradores, facilitando o cadastro de aulas, agendamento de sessões e exibição de atividades em um calendário interativo.
//       `,
//       image: foto1,
//     },
//   ];

//   const [currentJobIndex, setCurrentJobIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const variants = {
//     enter: (direction: any) => ({
//       x: direction > 0 ? 100 : -100,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction: any) => ({
//       x: direction < 0 ? 100 : -100,
//       opacity: 0,
//     }),
//   };

//   const paginate = (newDirection: any) => {
//     if (
//       (newDirection === -1 && currentJobIndex === 0) ||
//       (newDirection === 1 && currentJobIndex === jobs.length - 1)
//     ) {
//       return;
//     }
//     setDirection(newDirection);
//     setCurrentJobIndex(currentJobIndex + newDirection);
//   };

//   return (
//     <section
//       className="container mx-auto p-6 max-w-4xl text-white bg-gradient-to-r from-[#2c2c34] to-[#1e1e28] rounded-lg shadow-lg"
//       id="trabalhos"
//     >
//       <h2 className="text-4xl font-bold text-center mb-8">
//         <span className="text-[#fca61e]">Minhas</span> Experiências
//       </h2>

//       <div className="relative flex items-center justify-center">
//         <button
//           onClick={() => paginate(-1)}
//           className="absolute left-0 text-[#17171d] bg-[#fca61e] p-3 rounded-full shadow-md hover:bg-opacity-90 transition duration-300 disabled:opacity-50"
//           disabled={currentJobIndex === 0}
//         >
//           <IoIosArrowBack className="text-2xl" />
//         </button>

//         <div className="w-full px-6">
//           <AnimatePresence initial={false} custom={direction}>
//             <motion.div
//               key={jobs[currentJobIndex].id}
//               custom={direction}
//               variants={variants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{
//                 x: { type: "spring", stiffness: 300, damping: 30 },
//                 opacity: { duration: 0.2 },
//               }}
//               className="bg-[#1c1c22] p-6 rounded-lg shadow-lg flex flex-col items-center"
//             >
//               <div className="w-full mb-6">
//                 <Image
//                   src={jobs[currentJobIndex].image}
//                   alt={jobs[currentJobIndex].title}
//                   width={800}
//                   height={450}
//                   className="rounded-lg object-cover w-full h-64"
//                 />
//               </div>

//               <div className="text-center">
//                 <h3 className="text-2xl font-bold mb-2 text-[#fca61e]">
//                   {jobs[currentJobIndex].title}
//                 </h3>
//                 <h4 className="text-xl text-gray-300 mb-1">
//                   {jobs[currentJobIndex].company}
//                 </h4>
//                 <p className="text-sm text-gray-400 mb-4">
//                   {jobs[currentJobIndex].period} |{" "}
//                   {jobs[currentJobIndex].location}
//                 </p>
//                 <p className="text-base text-gray-200 leading-relaxed">
//                   {jobs[currentJobIndex].description}
//                 </p>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <button
//           onClick={() => paginate(1)}
//           className="absolute right-0 text-[#17171d] bg-[#fca61e] p-3 rounded-full shadow-md hover:bg-opacity-90 transition duration-300 disabled:opacity-50"
//           disabled={currentJobIndex === jobs.length - 1}
//         >
//           <IoIosArrowForward className="text-2xl" />
//         </button>
//       </div>

//       <div className="flex justify-center mt-6 space-x-2">
//         {jobs.map((job, index) => (
//           <button
//             key={job.id}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === currentJobIndex
//                 ? "bg-[#fca61e] scale-125"
//                 : "bg-gray-600 hover:bg-gray-500"
//             }`}
//             onClick={() => {
//               setDirection(index > currentJobIndex ? 1 : -1);
//               setCurrentJobIndex(index);
//             }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Jobspage;

"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import foto1 from "@/images/foto-teste.jpg";

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
      image: foto1,
    },
    {
      title: "Desenvolvedor Front-end JR",
      company: "Otur Viagens",
      period: "janeiro de 2023 - fevereiro de 2024 (1 ano 2 meses)",
      location: "Caruaru, Pernambuco, Brasil",
      description: `
        No projeto da Otur Viagens, desenvolvi e mantive a aplicação web de pacotes de viagens, utilizando ReactTS e TypeScript para criar interfaces dinâmicas e integrar APIs externas. Criei interfaces específicas para usuários finais e administradores, implementando sistemas de autenticação seguros e rotas privadas para garantir o acesso autorizado. A estilização responsiva foi feita com Tailwind CSS e a usabilidade aprimorada.
      `,
      image: foto1,
    },
    {
      title: "Desenvolvedor Front-end JR",
      company: "Alpha Sistema",
      period: "março de 2024 - abril de 2024 (2 meses)",
      location: "Caruaru, Pernambuco, Brasil",
      description: `
        No projeto da Alpha sistema, fui intregado no time na etapa final do ciclo de desenvolvimento , focando em novas funcionalidades e correção de bugs em áreas críticas como produtos, clientes, fornecedores, estoque, vendas, finanças e relatórios. Assegurei a responsividade do site com Tailwind CSS e melhorei a acessibilidade em dispositivos móveis. Otimizei rotas e integrei APIs externas, utilizando bibliotecas JavaScript como axios, react-router-dom, e react-pdf.
      `,
      image: foto1,
    },
    {
      title: "Desenvolvedor Front-end JR",
      company: "D-GYM",
      period: "abril de 2024 - abril de 2024 (1 mês)",
      location: "São Paulo, Brasil",
      description:
        "Trabalhei na criação e manutenção de interfaces responsivas com React e Tailwind CSS, colaborando com equipes de design para implementar soluções inovadoras. Como membro chave da equipe de desenvolvimento, defini a estrutura e arquitetura do repositório do projeto com ReactJS e TypeScript, integrando APIs externas. Criei interfaces intuitivas para membros, instrutores e administradores, facilitando cadastro de aulas, agendamento de sessões e exibição de atividades em um calendário interativo.",
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
      className="container mx-auto p-6 max-w-6xl text-white bg-gradient-to-r from-[#2c2c34] to-[#1e1e28] rounded-lg shadow-lg"
      id="trabalhos"
    >
      <h2 className="text-4xl font-bold text-center mb-6">
        <span className="text-[#fca61e]">Minhas</span> Experiências
      </h2>

      <div className="flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:space-x-6">
        {/* <button
          onClick={handlePrevious}
          className="text-[#17171d] bg-[#fca61e] p-3 rounded-full shadow-md hover:bg-opacity-90 transition duration-300 disabled:opacity-50"
          disabled={currentJobIndex === 0}
        >
          <IoIosArrowBack className="text-3xl" />
        </button> */}

        {/* <div className="w-full overflow-hidden"> */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentJobIndex}
            custom={direction}
             initial={{ x: direction > 40 ? 80 : -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          // exit={{ x: direction > 40 ? 80 : -20, opacity: 0 }}
            transition={{ duration: 0.8 }}

            className="bg-[#1c1c22] p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <div className="flex flex-row items-center space-y-6 md:space-y-0 md:flex-row md:space-x-6">
              <div className="w-full mb-4 p-5 bg-red-900">
                <Image
                  src={image}
                  alt={title}
                  width={800}
                  height={450}
                  className="rounded-lg"
                />
              </div>

              <div className="max-w-xl">
                <h3 className="text-2xl font-bold mb-1 text-[#fca61e]">
                  {title}
                </h3>
                <h4 className="text-xl text-gray-400 mb-2">{company}</h4>
                <p className="text-sm text-gray-500">{period}</p>
                <p className="text-sm text-gray-500 mb-4">{location}</p>
                <p className="text-lg text-gray-300 bg-blue-700">
                  {description}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* </div> */}

        {/* <button
          onClick={handleNext}
          className="text-[#17171d] bg-[#fca61e] p-3 rounded-full shadow-md hover:bg-opacity-90 transition duration-300 disabled:opacity-50"
          disabled={currentJobIndex === jobs.length - 1}
        >
          <IoIosArrowForward className="text-3xl" />
        </button> */}
      </div>

      <div className="bg-red-100 w-full flex justify-center items-center gap-8">
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

      <div className="flex justify-center mt-6 space-x-2">
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

