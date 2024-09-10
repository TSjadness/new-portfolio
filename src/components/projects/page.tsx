import React from 'react';
import Image, { StaticImageData } from "next/image";
import MasterixWeb from "@/image-projects/foto-Masterix.png";
import AbrirMei from "@/image-projects/foto-AbriMei.png";
import EmBreve from "@/image-projects/EmBreve.png";

const Card = ({
  href,
  imgSrc,
  imgAlt,
  title,
  description,
}: {
  href: string;
  imgSrc: string | StaticImageData;
  imgAlt: string;
  title: string;
  description: string;
}) => (
  <div className="mx-3 mt-6 mb-6 flex flex-col self-start rounded-lg bg-[#2d2d2d] text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 max-w-md transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-10 ">
    <a href={href}>
      <Image
        className="rounded-t-lg max-h-80"
        src={imgSrc}
        alt={imgAlt}
        width={600} 
        height={600}  
        layout="responsive"
      />
      {/* <img className="rounded-t-lg" src={imgSrc} alt={imgAlt} /> */}
    </a>
    <div className="p-6">
      <h5 className="mb-2 text-2xl font-medium leading-tight text-white">
        {title}
      </h5>
      <p className="mb-4 text-base text-white">{description}</p>
    </div>
  </div>
);

const ProjectList = () => (
  <section
    className="container mb-24 p-5 w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white bg-[#1e1e28] responsive-projects "
    id="projetos"
  >
    <h2 className="text-3xl font-bold tracking-tight mt-5">
      <span className="text-[#fca61e]">Ùltimos</span> Projetos
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 ">
      <Card
        href="#!"
        imgSrc={MasterixWeb}
        imgAlt="Hollywood Sign on The Hill"
        title="Masterix Web"
        description="aplicação web interativa que permita aos usuários gerenciar suas tarefas diárias de forma eficiente."
      />
      <Card
        href="#!"
        imgSrc={AbrirMei}
        imgAlt="Palm Springs Road"
        title="Portal Abrir MEI"
        description="Aplicação web que facilita o processo de abertura de Microempreendedor Individual (MEI) no Brasil."
      />
      <Card
        href="#!"
        imgSrc={EmBreve}
        imgAlt="Skyscrapers"
        title="EM BREVE"
        description="</>."
      />
    </div>
  </section>
);

export default  ProjectList;
