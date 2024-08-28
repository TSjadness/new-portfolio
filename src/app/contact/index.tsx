"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn, FaInstagram, FaWhatsapp, FaMapMarkerAlt  } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import "animate.css/animate.min.css";

const ContactPage = () => {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = "service_ja3fwu8";
    const templateId = "template_oeja6ur";
    const publicKey = "gduhDXS1xDFUQuU_j";
    const templateParams: Record<string, unknown> = {
      from_name: name,
      from_email: email,
      to_name: "Jadson Tavares",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams as any, publicKey)
      .then((response) => {
        // console.log("Email sent successfully!", response);
        alert("Email enviado com sucesso!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        // console.error("Error sending email:", error);
      });
  };


  return (
    <div className="container mb-24 mt-20 p-5 w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white rounded-lg bg-[#1e1e28] transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-10">
      <div className="p-2">
        <section
          className="container mb-10 mt-20 w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-10 animate__animated animate__fadeInUp "
          id="contato"
        >
          <div className="flex flex-row gap-10 responsive-about ">
            <div className="w-full flex flex-col responsive-about-text">
              <div className="responsive-contact">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 ">
                  Entre em Contato
                </h1>
                <p className="mb-4 text-lg max-w-md font-semibold leading-6 text-start">
                  Gostaria de fechar um trabalhar ou tem alguma dúvida? Envie
                  uma mensagem ou entre em contato através das redes sociais
                  abaixo.
                </p>
              </div>

              <form
                className="mb-4 responsive-about-list"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  value={name}
                  placeholder="Seu nome"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mb-4 p-2 rounded-lg bg-[#1e1e28] text-white border border-[#fca61e] focus:outline-none"
                  required
                />
                <input
                  type="email"
                  value={email}
                  placeholder="Seu email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mb-4 p-2 rounded-lg bg-[#1e1e28] text-white border border-[#fca61e] focus:outline-none"
                  required
                />
                <textarea
                  value={message}
                  placeholder="Sua mensagem"
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full mb-4 p-2 rounded-lg bg-[#1e1e28] text-white border border-[#fca61e] focus:outline-none"
                  rows={5}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="text-[#fca61e] py-4 px-8 font-semibold rounded-full border border-[#fca61e] hover:bg-[#fca61e] hover:text-[#17171d] transition duration-500 ease-in-out "
                >
                  Enviar Mensagem
                </button>
              </form>

              <div className="flex flex-row gap-5 justify-start items-center responsive-about-list">
                <div>
                  <ul className="flex flex-row gap-5 justify-center items-center">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/jadson-tavares-santos-7aba7b24b/"
                        title="Ir para o LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn className="text-4xl text-[#fca61e] border border-[#fca61e] rounded-full py-2 hover:bg-[#fca61e] hover:text-[#17171d] transition duration-500 ease-in-out" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://api.whatsapp.com/send/?phone=5579999059254&text&type=phone_number&app_absent=0"
                        title="Enviar mensagem no WhatsApp"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp className="text-4xl text-[#fca61e] border border-[#fca61e] rounded-full py-2 hover:bg-[#fca61e] hover:text-[#17171d] transition duration-500 ease-in-out" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/TSjadness"
                        title="Ir para o GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IoLogoGithub className="text-4xl text-[#fca61e] border border-[#fca61e] rounded-full py-2 hover:bg-[#fca61e] hover:text-[#17171d] transition duration-500 ease-in-out" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/jadson_ts/"
                        title="Ir para o Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram className="text-4xl text-[#fca61e] border border-[#fca61e] rounded-full py-2 hover:bg-[#fca61e] hover:text-[#17171d] transition duration-500 ease-in-out" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className=" w-full flex flex-col justify-start items-start p-5 responsive-contact-image animate__animated animate__fadeIn responsive-contact-item ">
              <div className="flex items-center mb-8 gap-5 responsive-about-Text exclusive">
                <BsTelephoneFill className="w-20 h-20  text-3xl text-[#fca61e]  bg-[#27272c] p-4 rounded-lg " />

                <div className="flex flex-col">
                  <span className="text-lg text-white/60 font-semibold">
                    Telefone e WhatsApp
                  </span>
                  <span className="text-2xl sm:text-xl text-white font-semibold">
                    (+55) 19 99826-0330
                  </span>
                </div>
              </div>

              <div className="flex items-center mb-8 gap-5 responsive-about-Text">
                <MdEmail className="w-20 h-20  text-3xl text-[#fca61e]  bg-[#27272c] p-4 rounded-lg " />

                <div className="flex flex-col">
                  <span className="text-lg text-white/60 font-semibold">
                    Email
                  </span>
                  <span className="text-2xl sm:text-xl text-white font-semibold">
                    jadsonts2012@gmail.com
                  </span>
                </div>
              </div>

              <div className="flex items-center mb-8 gap-5 responsive-about-Text ">
                <FaMapMarkerAlt className="w-24 h-20  text-3xl text-[#fca61e]  bg-[#27272c] p-4 rounded-lg " />

                <div className="flex flex-col">
                  <span className="text-lg text-white/60 font-semibold">
                    Endereço
                  </span>
                  <span className="text-2xl sm:text-xl text-white font-semibold">
                    Rua Paulo Pereira da Silva, 33, 49503-220, Itabaiana,
                    Sergipe
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
