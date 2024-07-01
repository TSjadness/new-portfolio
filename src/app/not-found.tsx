"use client";
import { Route } from "next";
import { useRouter } from "next/navigation";
import Image from "next/image";
import foto from "@/images/not-found.jpg";

const NotFound = () => {
  const router = useRouter();
  const handleHome = () => {
    console;
    router.push("/" as Route);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center text-[blue]">
        <div className=" w-full flex justify-center items-center mb-5">
        <Image src={foto} alt="404" width={300} height={300} />
        </div>
        <h1 className="text-2xl font-bold mb-4">404 - Página não encontrada</h1>
        <p className="text-gray-400">
          A página que você está procurando não existe.
        </p>
      </div>

      <div className="pt-8">
        <a href="/" className="hover:underline">
          <button
            className="bg-blue-700 hover:bg-blue-900 text-white px-8 py-2"
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
