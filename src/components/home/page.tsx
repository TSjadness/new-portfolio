import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import aboutfoto from "@/images/logo-about.png";
import photo from "@/images/foto-person.png";

const user = {
  name: "Jadson Tavares Santos",
  email: "jadsonts2012@gmail.com",
};

const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "Projetos", href: "#projetos", current: false },
  { name: "Trabalhos", href: "#trabalhos", current: false },
  { name: "Sobre mim", href: "#sobre-mim", current: false },
  { name: "Contato", href: "#contato", current: false },
];

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function HomePage() {
  return (
    <div className="min-h-full">
      <Disclosure
        as="nav"
        className="
          sticky top-0 z-50
          bg-[#0b0b12]/90
          backdrop-blur-md
          border-b border-white/5
          text-[#fca61e]
        "
      >
        {({ open }) => (
          <>
            {/* DESKTOP BAR */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* ESQUERDA – LOGO + NAV */}
                <div className="flex items-center gap-6">
                  {/* Logo */}
                  <a href="/" className="flex items-center flex-shrink-0">
                    <Image
                      src={aboutfoto}
                      alt="Logo Jadson"
                      width={100}
                      height={32}
                      className="h-8 w-auto"
                    />
                  </a>

                  {/* Links desktop */}
                  <div className="hidden md:block">
                    <div className="flex items-center space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "text-[#fca61e]"
                              : "text-gray-300 hover:text-[#fca61e]",
                            "px-3 py-2 text-sm font-medium transition-colors"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* DIREITA – BOTÃO MOBILE */}
                <div className="-mr-2 flex md:hidden">
                  <Disclosure.Button
                    className="
                      relative inline-flex items-center justify-center
                      rounded-md p-2
                      border border-[#fca61e]
                      text-[#fca61e]
                      hover:bg-[#fca61e] hover:text-[#17171d]
                      focus:outline-none focus:ring-2 focus:ring-white
                      focus:ring-offset-2 focus:ring-offset-gray-800
                      transition duration-300
                    "
                  >
                    <span className="sr-only">Abrir menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* MOBILE PANEL */}
            <Disclosure.Panel
              className="
                md:hidden
                bg-[#131318]
                border-t border-white/10
                shadow-xl shadow-black/40
              "
            >
              {/* Links mobile */}
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 text-[#fca61e]">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-[#fca61e]/10 text-[#fca61e]"
                        : "text-[#fca61e] hover:bg-white/5 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>

              {/* Perfil resumido */}
              {/* <div className="border-t border-white/10 pb-3 pt-4">
                <div className="flex items-center px-5 gap-3">
                  <div className="flex-shrink-0">
                    <Image
                      src={photo}
                      width={48}
                      height={48}
                      alt="Foto de Jadson"
                      className="rounded-full border border-[#fca61e]/60"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold leading-none text-white">
                      {user.name}
                    </div>
                    <div className="text-xs font-medium leading-none text-gray-400 break-all">
                      {user.email}
                    </div>
                  </div>
                </div>
              </div> */}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
