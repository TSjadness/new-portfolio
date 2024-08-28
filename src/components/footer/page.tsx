import logo from "@/images/logo-about.png";
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#131318] text-white p-4">
      <div className="w-full text-center">
        <div className="w-full justify-center items-center sm:flex sm:items-center sm:justify-center responsive-footer">
          <a
            href="https://www.linkedin.com/in/jadson-tavares-santos-7aba7b24b/"
            target="_blank"
            className="flex items-center"
          >
            <Image
              src={logo}
              width={150}
              height={150}
              alt="Picture of the author"
            />
          </a>
        </div>
        <div className="border-t border-[#fca61e] my-4" />
        <p className="text-sm">
          &copy; {new Date().getFullYear()} JadsonDev™. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
