"use client";
import { Route } from "next";
import { useRouter } from "next/navigation";
import Image from "next/image";
import foto from "@/images/404.jpg";

const NotFound = () => {
  const router = useRouter();
  const handleHome = () => {
    console;
    router.push("/" as Route);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center text-[#fca61e]">
        <div className=" w-full flex justify-center items-center mb-5">
          <Image src={foto} alt="404" width={300} height={300} />
        </div>
        <h1 className="text-2xl font-bold mb-4">404 - Página não encontrada</h1>
        <p className="text-white">
          A página que você está procurando não existe.
        </p>
      </div>

      <div className="pt-8">
        <a href="/" className="hover:underline">
          <button
            className="border border-[#fca61e] hover:bg-[#fca61e] hover:text-[#17171d] transition duration-500 ease-in-out text-white px-8 py-2 rounded-xl"
            type="submit"
            onClick={() => handleHome()}
          >
            Retorne a Página Inicial
          </button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
