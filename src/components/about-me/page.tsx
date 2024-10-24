import React from "react";

import { GoDownload } from "react-icons/go";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "animate.css/animate.min.css";
import RotatingImage from "../profile/page";


const AboutPage = () => {
  return (
    <div>
      <div>
        <section
          className="container mb-10 mt-20 w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-10 animate__animated animate__fadeInUp"
          id="home"
        >
          <div className="flex flex-row  responsive-about ">
            <div className="w-full flex flex-col responsive-about-Text">
              <p className="text-xl font-normal mb-2 f">Front-end Developer</p>
              <h1 className="text-5xl md:text-6xl font-bold">Olá eu sou</h1>
              <h1 className="text-4xl md:text-7xl font-bold mb-4 text-[#fca61e]">
                Jadson Santos
              </h1>
              <p className="mb-4 text-lg max-w-md font-semibold leading-6 text-start">
                Estou na área há quase 2 anos profissionalmente. Atualmente
                estou estudando e me aprimorando em tecnologias como{" "}
                <strong className="text-[#fca61e]">TypeScript</strong>, {""}
                <strong className="text-[#fca61e]">ReactTS</strong>, {""}
                <strong className="text-[#fca61e]">NextJS</strong>, {""}
                <strong className="text-[#fca61e]">NodeJS</strong> {""}e entre
                outras.
              </p>
              <p className="mb-4 text-lg max-w-md leading-6 font-semibold text-start">
                Estou em busca de novos desafios e oportunidades para aplicar
                meus conhecimentos e habilidades, sempre utilizando as melhores
                tecnologias do mercado, com segurança e foco em qualidade.
              </p>

              <div className="flex flex-row gap-5 justify-start items-center responsive-about-list">
                <a
                  href="/curriculo/Jadson_Cv.pdf"
                  download="Jadsonts_Cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fca61e] py-4 px-8 font-semibold flex justify-center items-center rounded-full border border-[#fca61e] hover:bg-[#fca61e] hover:text-[#17171d] transition duration-500 ease-in-out"
                >
                  <div className="flex flex-row gap-2 justify-center items-center">
                    Download CV {"  "} <GoDownload className="text-2xl " />
                  </div>
                </a>
                <div>
                  {" "}
                  <ul className="flex flex-row gap-5 justify-center items-center">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/jadson-tavares-santos-7aba7b24b/"
                        title="Ir para o linkedin"
                        target="_blank"
                      >
                        <FaLinkedinIn className="text-4xl text-[#fca61e] border border-[#fca61e] rounded-full py-2 hover:bg-[#fca61e] hover:text-[#17171d] transition duration-500 ease-in-out" />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://api.whatsapp.com/send/?phone=5579999059254&text&type=phone_number&app_absent=0"
                        title="Enviar mensagem para whatsapp"
                        target="_blank"
                      >
                        <FaWhatsapp className="text-4xl text-[#fca61e] border border-[#fca61e] rounded-full py-2 hover:bg-[#fca61e] hover:text-[#17171d] transition duration-500 ease-in-out" />

                        <link
                          rel="stylesheet"
                          type="text/css"
                          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
                        />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://github.com/TSjadness"
                        title="Ir para o github"
                        target="_blank"
                      >
                        <IoLogoGithub className="text-4xl text-[#fca61e] border border-[#fca61e] rounded-full py-2 hover:bg-[#fca61e] hover:text-[#17171d] transition duration-500 ease-in-out" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/jadson_ts/"
                        title="Ir para o instagram"
                        target="_blank"
                      >
                        <FaInstagram className="text-4xl text-[#fca61e] border border-[#fca61e] rounded-full py-2 hover:bg-[#fca61e] hover:text-[#17171d] transition duration-500 ease-in-out" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className=" w-full flex justify-center items-center responsive-about-Image animate__animated animate__fadeIn mb-4">
              <RotatingImage />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
