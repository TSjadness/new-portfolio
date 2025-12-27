import Image from "next/image";
import profile from "@/image-projects/new/perfil.png";

const RotatingImage = () => {
  return (
    <div className="relative inline-flex items-center justify-center">
      
      <div
        className="
          absolute
          w-52 h-52          /* antes 40 */
          sm:w-64 sm:h-64    /* antes 52 */
          md:w-72 md:h-72    /* antes 60 */
          border-4 border-[#fca61e] border-dashed
          rounded-full
          animate-spin-slow
        "
      />

      
      <div
        className="
          absolute
          w-40 h-40
          sm:w-48 sm:h-48
          md:w-56 md:h-56
          rounded-full
          bg-[#fca61e]/12
          blur-xl
        "
      />

      
      <div
        className="
          relative
          w-40 h-40          /* antes 28 */
          sm:w-48 sm:h-48    /* antes 36 */
          md:w-56 md:h-56    /* antes 44 */
          rounded-full
          overflow-hidden
          bg-[#050509]
          shadow-xl shadow-black/50
        "
        style={{ borderRadius: "9999px", overflow: "hidden" }}
      >
        <Image
          src={profile}
          alt="Foto de perfil"
          fill
          sizes="(min-width: 1024px) 14rem, (min-width: 640px) 12rem, 10rem"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default RotatingImage;
