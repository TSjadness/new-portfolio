import React from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  Transition,
} from "@headlessui/react";
import { Bars3Icon,  XMarkIcon } from "@heroicons/react/24/outline";
import aboutfoto from "@/images/logo-about.png";
import Image from 'next/image';
import photo from "@/images/foto-person.png"

const user = {
  name: "Jadson Tavares Santos",
  email: "jadsonts2012@gmail.com",
};

const navigation = [
  { name: "Home", href: "#home", current: false },
  { name: "Projetos", href: "#projetos", current: false },
  {name: "Trabalhos", href: "#trabalhos", current: false},
  { name: "Sobre mim", href: "#sobre-mim", current: false },
  { name: "Contato", href: "#contato", current: false },
];


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function HomePage() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-[#131318] text-[#fca61e]">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="hidden sm:flex items-center flex-shrink-0">
                      <a href="/">
                        <Image
                          src={aboutfoto}
                          alt="about foto"
                          width={100}
                          height={100}
                        />
                      </a>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? " text-[#fca61e]"
                                : "text-gray-300 hover:border-b hover:border-[#fca61e] hover:text-[#fca61e]",
                              "px-3 py-2 text-md font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <Menu as="div" className="relative ml-3">
                        <Transition
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        ></Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    <DisclosureButton className="relative inline-flex items-center justify-center rounded-md  p-2 border border-[#fca61e] text-[#fca61e] hover:bg-[#fca61e] hover:text-[#17171d] transition duration-500 ease-in-outfocus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Abrir menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </DisclosureButton>
                  </div>
                </div>
              </div>

              <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 text-[#fca61e]">
                  {navigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-[#fca61e]"
                          : "text-[#fca61e] hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <Image
                        src={photo}
                        width={50}
                        height={50}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none ">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                  </div>
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}