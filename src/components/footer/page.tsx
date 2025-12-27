import Image from "next/image";
import logo from "@/images/logo-about.png";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        bg-[#0b0b12]
        border-t border-white/5
        text-white
        mt-12
      "
    >
      <div
        className="
          container mx-auto max-w-7xl
          px-4 sm:px-6 lg:px-8
          py-8 sm:py-10
        "
      >
        <div
          className="
            flex flex-col md:flex-row
            items-center md:items-center
            justify-between
            gap-6
            responsive-footer
          "
        >
          
          <div className="flex items-center gap-4 text-center md:text-left">
            <a
              href="https://www.linkedin.com/in/jadson-tavares-santos-7aba7b24b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center flex-shrink-0"
            >
              <Image
                src={logo}
                width={140}
                height={40}
                alt="Logo JadsonDev"
                className="h-10 w-auto"
              />
            </a>
            <div className="hidden sm:block">
              <p className="text-xs sm:text-sm text-white/60">
                Portfólio desenvolvido com React, Next.js e muito café.
              </p>
              <p className="text-xs sm:text-sm text-[#fca61e]/80">
                Focado em performance, UX e código limpo.
              </p>
            </div>
          </div>

        
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://www.linkedin.com/in/jadson-tavares-santos-7aba7b24b/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-9 h-9 sm:w-10 sm:h-10
                flex items-center justify-center
                rounded-full border border-[#fca61e]
                text-[#fca61e]
                hover:bg-[#fca61e] hover:text-[#17171d]
                transition duration-300
              "
            >
              <FaLinkedinIn className="text-lg" />
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=5579999059254&text&type=phone_number&app_absent=0"
              title="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-9 h-9 sm:w-10 sm:h-10
                flex items-center justify-center
                rounded-full border border-[#fca61e]
                text-[#fca61e]
                hover:bg-[#fca61e] hover:text-[#17171d]
                transition duration-300
              "
            >
              <FaWhatsapp className="text-lg" />
            </a>

            <a
              href="https://github.com/TSjadness"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-9 h-9 sm:w-10 sm:h-10
                flex items-center justify-center
                rounded-full border border-[#fca61e]
                text-[#fca61e]
                hover:bg-[#fca61e] hover:text-[#17171d]
                transition duration-300
              "
            >
              <IoLogoGithub className="text-lg" />
            </a>

            <a
              href="https://www.instagram.com/jadson_ts/"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-9 h-9 sm:w-10 sm:h-10
                flex items-center justify-center
                rounded-full border border-[#fca61e]
                text-[#fca61e]
                hover:bg-[#fca61e] hover:text-[#17171d]
                transition duration-300
              "
            >
              <FaInstagram className="text-lg" />
            </a>
          </div>
        </div>

        
        <div className="mt-6 border-t border-[#fca61e]/30 pt-4 text-center">
          <p className="text-xs sm:text-sm text-white/60">
            &copy; {year} <span className="font-semibold">JadsonDev™</span>.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
