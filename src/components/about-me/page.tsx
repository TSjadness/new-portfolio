"use client";
import React from "react";

import { GoDownload } from "react-icons/go";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "animate.css/animate.min.css";
import RotatingImage from "../profile/page";

const AboutPage = () => {
  return (
    <div>
      <section
        id="home"
        className="
          container mx-auto max-w-7xl
          
          mt-16 mb-16
          text-white
          animate__animated animate__fadeInUp
        "
      >
        <div
          className="
            flex flex-col md:flex-row
            items-center md:items-stretch
            gap-10 md:gap-12
            rounded-3xl
            bg-gradient-to-br from-[#101018] via-[#171727] to-[#101018]
            p-6 sm:p-8 lg:p-10
            shadow-2xl shadow-black/40
          "
        >
          {/* TEXTO */}
          <div className="w-full flex flex-col gap-6 responsive-about-Text">
            <div>
              <p className="text-sm sm:text-base font-medium text-[#fca61e]/80 mb-1">
                Front-end Developer
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Olá, eu sou
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-[#fca61e]">
                Jadson Santos
              </h1>
            </div>

            <div className="space-y-3">
              <p className="text-sm sm:text-base md:text-lg max-w-xl font-semibold leading-relaxed text-start">
                Estou na área há quase 2 anos profissionalmente. Atualmente
                estou estudando e me aprimorando em tecnologias como{" "}
                <strong className="text-[#fca61e]">TypeScript</strong>,{" "}
                <strong className="text-[#fca61e]">ReactTS</strong>,{" "}
                <strong className="text-[#fca61e]">NextJS</strong>,{" "}
                <strong className="text-[#fca61e]">NodeJS</strong> e outras.
              </p>
              <p className="text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-semibold text-start text-white/80">
                Estou em busca de novos desafios e oportunidades para aplicar
                meus conhecimentos e habilidades, sempre utilizando as melhores
                tecnologias do mercado, com segurança e foco em qualidade.
              </p>
            </div>

            {/* BOTÃO + REDES */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center responsive-about-list">
              {/* Botão CV */}
              <a
                href="/curriculo/Jadson_Cv.pdf"
                download="Jadsonts_Cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center
                  gap-2
                  text-sm sm:text-base font-semibold
                  py-3 sm:py-3.5 px-6 sm:px-8
                  rounded-full border border-[#fca61e]
                  text-[#fca61e]
                  hover:bg-[#fca61e] hover:text-[#17171d]
                  transition-colors duration-300
                "
              >
                Download CV
                <GoDownload className="text-xl" />
              </a>

              {/* Redes sociais */}
              <div>
                <ul className="flex flex-row flex-wrap gap-4 sm:gap-5 justify-start items-center">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/jadson-tavares-santos-7aba7b24b/"
                      title="Ir para o LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-11 h-11 sm:w-12 sm:h-12
                        flex items-center justify-center
                        rounded-full border border-[#fca61e]
                        text-[#fca61e]
                        hover:bg-[#fca61e] hover:text-[#17171d]
                        transition duration-300
                      "
                    >
                      <FaLinkedinIn className="text-xl" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://api.whatsapp.com/send/?phone=5579999059254&text&type=phone_number&app_absent=0"
                      title="Enviar mensagem para WhatsApp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-11 h-11 sm:w-12 sm:h-12
                        flex items-center justify-center
                        rounded-full border border-[#fca61e]
                        text-[#fca61e]
                        hover:bg-[#fca61e] hover:text-[#17171d]
                        transition duration-300
                      "
                    >
                      <FaWhatsapp className="text-xl" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://github.com/TSjadness"
                      title="Ir para o GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-11 h-11 sm:w-12 sm:h-12
                        flex items-center justify-center
                        rounded-full border border-[#fca61e]
                        text-[#fca61e]
                        hover:bg-[#fca61e] hover:text-[#17171d]
                        transition duration-300
                      "
                    >
                      <IoLogoGithub className="text-xl" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/jadson_ts/"
                      title="Ir para o Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-11 h-11 sm:w-12 sm:h-12
                        flex items-center justify-center
                        rounded-full border border-[#fca61e]
                        text-[#fca61e]
                        hover:bg-[#fca61e] hover:text-[#17171d]
                        transition duration-300
                      "
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* IMAGEM / LADO DIREITO */}
          <div className="w-full flex justify-center items-center responsive-about-Image animate__animated animate__fadeIn">
            <div
              className="
                w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72
                rounded-full
                flex items-center justify-center
              "
            >
              <RotatingImage />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
