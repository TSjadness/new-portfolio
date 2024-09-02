import Image from 'next/image';
import profile from "@/images/foto-perfil2.png";

const RotatingImage = () => {
  return (
    <div className="relative  flex items-center justify-center ">
      <div className="absolute w-[25rem] h-[25rem] border-4 border-[#fca61e] border-dashed rounded-full animate-spin-slow"></div>
      <div className="">
        <Image
          src={profile}
          alt="Profile Picture"
          className="rounded-full  w-[24rem] h-auto p-5"
        />
      </div>
    </div>
  );
};

export default RotatingImage;
