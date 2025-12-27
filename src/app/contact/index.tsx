"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import "animate.css/animate.min.css";

const ContactPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSending, setIsSending] = useState(false);

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

    setIsSending(true);

    emailjs
      .send(serviceId, templateId, templateParams as any, publicKey)
      .then(() => {
        alert("Email enviado com sucesso!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        alert("Ocorreu um erro ao enviar o e-mail. Tente novamente.");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section
      id="contato"
      className="
        bg-[#0f0f17]
        text-white
      "
    >
      <div
        className="
          container mx-auto max-w-7xl
          px-4 sm:px-6 lg:px-2
          py-16 lg:py-20
          animate__animated animate__fadeInUp
        "
      >
        {/* Título */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Entre em <span className="text-[#fca61e]">Contato</span>
          </h1>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
            Quer fechar um projeto, tirar uma dúvida ou trocar uma ideia sobre
            desenvolvimento? Preencha o formulário ou fale comigo pelos canais
            abaixo.
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid gap-10 lg:grid-cols-[3fr,2fr] items-start">
          {/* FORMULÁRIO */}
          <div
            className="
              bg-[#171721] border border-white/5
              rounded-2xl p-5 sm:p-6 md:p-8
              shadow-xl shadow-black/40
            "
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Fale comigo
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs sm:text-sm text-white/60 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  value={name}
                  placeholder="Seu nome"
                  onChange={(e) => setName(e.target.value)}
                  className="
                    w-full rounded-lg px-3 py-2.5 sm:py-3
                    bg-[#1e1e28] border border-white/10
                    text-sm sm:text-base
                    focus:outline-none focus:border-[#fca61e] focus:ring-2 focus:ring-[#fca61e]/40
                    transition
                  "
                  required
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm text-white/60 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  value={email}
                  placeholder="Seu e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    w-full rounded-lg px-3 py-2.5 sm:py-3
                    bg-[#1e1e28] border border-white/10
                    text-sm sm:text-base
                    focus:outline-none focus:border-[#fca61e] focus:ring-2 focus:ring-[#fca61e]/40
                    transition
                  "
                  required
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm text-white/60 mb-1">
                  Mensagem
                </label>
                <textarea
                  value={message}
                  placeholder="Conte um pouco sobre o que você precisa…"
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="
                    w-full rounded-lg px-3 py-2.5 sm:py-3
                    bg-[#1e1e28] border border-white/10
                    text-sm sm:text-base
                    focus:outline-none focus:border-[#fca61e] focus:ring-2 focus:ring-[#fca61e]/40
                    transition resize-none
                  "
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="
                  w-full sm:w-auto
                  inline-flex items-center justify-center
                  gap-2
                  text-sm sm:text-base font-semibold
                  px-6 sm:px-8 py-3
                  rounded-full border border-[#fca61e]
                  text-[#fca61e]
                  hover:bg-[#fca61e] hover:text-[#17171d]
                  disabled:opacity-60 disabled:cursor-not-allowed
                  transition duration-300
                "
              >
                {isSending ? "Enviando..." : "Enviar mensagem"}
              </button>
            </form>
          </div>

          {/* CONTATOS E REDES */}
          <div className="space-y-6">
            {/* Bloco telefone */}
            <div
              className="
                bg-[#171721] border border-white/5
                rounded-2xl p-5 sm:p-6
                flex items-center gap-4 sm:gap-5
                shadow-lg shadow-black/40
              "
            >
              <div
                className="
                  w-14 h-14 sm:w-16 sm:h-16
                  flex items-center justify-center
                  rounded-xl bg-[#27272c]
                "
              >
                <BsTelephoneFill className="text-2xl text-[#fca61e]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm text-white/60 font-semibold">
                  Telefone / WhatsApp
                </span>
                <a
                  href="https://api.whatsapp.com/send/?phone=5579999059254&text&type=phone_number&app_absent=0"
                  className="text-base sm:text-lg font-semibold hover:text-[#fca61e] transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (+55) 79 99905-9254
                </a>
              </div>
            </div>

            {/* Bloco e-mail */}
            <div
              className="
                bg-[#171721] border border-white/5
                rounded-2xl p-5 sm:p-6
                flex items-center gap-4 sm:gap-5
                shadow-lg shadow-black/40
              "
            >
              <div
                className="
                  w-14 h-14 sm:w-16 sm:h-16
                  flex items-center justify-center
                  rounded-xl bg-[#27272c]
                "
              >
                <MdEmail className="text-2xl text-[#fca61e]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm text-white/60 font-semibold">
                  E-mail
                </span>
                <a
                  href="mailto:jadsonts2012@gmail.com"
                  className="text-base sm:text-lg font-semibold hover:text-[#fca61e] transition break-all"
                >
                  jadsonts2012@gmail.com
                </a>
              </div>
            </div>

            {/* Redes sociais */}
            <div
              className="
                bg-[#171721] border border-white/5
                rounded-2xl p-5 sm:p-6
                shadow-lg shadow-black/40
              "
            >
              <span className="block text-xs sm:text-sm text-white/60 font-semibold mb-3">
                Redes sociais
              </span>

              <div className="flex flex-wrap gap-4">
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

                <a
                  href="https://api.whatsapp.com/send/?phone=5579999059254&text&type=phone_number&app_absent=0"
                  title="Enviar mensagem no WhatsApp"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
