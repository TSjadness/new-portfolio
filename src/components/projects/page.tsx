import React from "react";
import Image, { StaticImageData } from "next/image";
import AbrirMei from "@/image-projects//new/image_26.png";
import MasterixWeb from "@/image-projects/new/image_33.png";

import EmBreve from "@/image-projects/new/image_29.png";
import ControleFinanca from "@/image-projects/new/image_28.png";
import GerenciadorTarefas from "@/image-projects/new/image_27.png";
import PowpixHubImage from "@/image-projects/new/image_36.png";
import VeriplacaImage from "@/image-projects/new/image_25.png";

type CardProps = {
  href: string;
  imgSrc: string | StaticImageData;
  imgAlt: string;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({
  href,
  imgSrc,
  imgAlt,
  title,
  description,
}) => {
  const isLinkAvailable = href && href.trim() !== "" && href.trim() !== "#!";

  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    isLinkAvailable ? (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="relative block overflow-hidden rounded-2xl"
      >
        {children}
      </a>
    ) : (
      <div className="relative block overflow-hidden rounded-2xl cursor-not-allowed">
        {children}
      </div>
    );

  return (
    <div
      className="
        group mx-3 my-6 flex flex-col sm:max-w-md
        rounded-2xl border border-white/5
        bg-gradient-to-b from-[#262635] to-[#15151f]
        text-white shadow-lg shadow-black/40
        transform transition duration-300
        hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60
      "
    >
      <Wrapper>
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={1200}
          height={675}
          className="w-full h-auto rounded-t-2xl"
        />

        
        <div
          className="
            pointer-events-none absolute inset-0 flex items-center justify-center
            bg-black/60 opacity-0
            transition-opacity duration-300
            group-hover:opacity-100
          "
        >
          <span
            className="
              px-4 py-2 text-sm font-medium
              text-white bg-black/70
              rounded-full border border-white/20
              backdrop-blur-sm
            "
          >
            {isLinkAvailable
              ? "Clique para ver mais"
              : "Link não disponível no momento"}
          </span>
        </div>
      </Wrapper>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1 w-10 rounded-full bg-[#fca61e]" />
          <h5 className="text-xl font-semibold leading-tight">{title}</h5>
        </div>
        <p className="mb-2 text-sm text-white/80 min-h-20">{description}</p>

        {isLinkAvailable ? (
          <p className="mt-3 text-xs text-[#fca61e]/80">
            Projeto disponível para visualização
          </p>
        ) : (
          <p className="mt-3 text-xs text-white/40">
            Em breve este projeto estará disponível para acesso.
          </p>
        )}
      </div>
    </div>
  );
};

const ProjectSection: React.FC<{
  title: string;
  subtitle?: string;
  projects: CardProps[];
}> = ({ title, subtitle, projects }) => (
  <div className="mt-10">
    <div className="mb-4">
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
      {subtitle && <p className="text-sm text-white/60 mt-1">{subtitle}</p>}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.title} {...project} />
      ))}
    </div>
  </div>
);

const ProjectList: React.FC = () => {
  const personalProjects: CardProps[] = [
   
    {
      href: "https://controles-de-despesas.vercel.app/",
      imgSrc: ControleFinanca,
      imgAlt: "Controle de Finanças",
      title: "Controle de Finanças",
      description:
        "Aplicação web para controle de finanças pessoais de forma simples, visual e prática.",
    },
    {
      href: "https://gerenciador-de-tarefas-olive.vercel.app/",
      imgSrc: GerenciadorTarefas,
      imgAlt: "Gerenciador de Tarefas",
      title: "Gerenciador de Tarefas",
      description:
        "Aplicação web para organização de tarefas diárias com foco em clareza e facilidade de uso.",
    },
    {
      href: "#!",
      imgSrc: EmBreve,
      imgAlt: "Em breve",
      title: "Em Breve",
      description:
        "Novo projeto em desenvolvimento. Fique de olho para acompanhar as próximas novidades.",
    },
  ];

  const collabProjects: CardProps[] = [

     {
      href: "#!",
      imgSrc: MasterixWeb,
      imgAlt: "Masterix Web",
      title: "Masterix Web",
      description:
        "Aplicação web interativa para gerenciamento eficiente de tarefas diárias com foco em produtividade.",
    },
      {
      href: "https://portaldomeibrasil.com.br/",
      imgSrc: AbrirMei,
      imgAlt: "Portal MEI Brasil",
      title: "Portal MEI Brasil",
      description:
        "Aplicação web que facilita todo o processo de abertura de MEI no Brasil, com fluxo guiado e intuitivo. Projeto desenvolvido enquanto colaborador.",
    },
    {
  href: "https://grupopowpix.vercel.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnNXiTepUTISowBDYOTlBVN2mYjIMtmuJ-bXptTRm0BQR41V0f9DvqbUp7TKY_aem_NxuZ6VkOfWNHw45bsFuvdw",
  imgSrc: PowpixHubImage, 
  imgAlt: "Hub de Links Grupo Powpix",
  title: "Hub de Links Grupo Powpix",
  description:
    "LP estilo Linktree desenvolvida como freelancer para o Grupo Powpix, centralizando links de WhatsApp, site, Instagram e Reclame Aqui em um único portfólio digital."
},
{
  href: "https://veriplaca.com.br/",
  imgSrc: VeriplacaImage, 
  imgAlt: "Veriplaca - Consulta veicular pela placa",
  title: "Veriplaca – Consulta pela Placa",
  description:
    "Plataforma de consulta veicular desenvolvida como freelancer, permitindo ao usuário inserir a placa e acessar informações detalhadas do veículo, com fluxo de formulário e pagamento para liberação dos relatórios."
},


  ];

  return (
    <section
      className="
        container mb-24 p-5 w-full mx-auto max-w-7xl rounded-lg
        px-2 sm:px-6 lg:px-8 text-white bg-[#1e1e28]
        responsive-projects
      "
      id="projetos"
    >
      <h2 className="text-3xl font-bold tracking-tight mt-5 mb-6">
        <span className="text-[#fca61e]">Últimos</span> Projetos
      </h2>

      <ProjectSection
        title="Projetos Pessoais"
        subtitle="Soluções que desenvolvi de forma independente, explorando produto, UX e performance."
        projects={personalProjects}
      />

      <ProjectSection
        title="Projetos como Colaborador"
        subtitle="Projetos em que atuei como desenvolvedor em empresas que me proporcionaram oportunidades de crescimento e aprendizado."
        projects={collabProjects}
      />
    </section>
  );
};

export default ProjectList;
