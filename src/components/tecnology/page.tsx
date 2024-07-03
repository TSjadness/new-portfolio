// import React from 'react'

// const TecnologyPage = () => {
//   return (
//     <div>TecnologyPage</div>
//   )
// }

// export default TecnologyPage

// components/TecnologyPage.js
// components/Carousel.js
// components/Carousel.js
import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";


const icons = [
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <FaNode />, name: 'Node.js' },
  {icon: <SiTypescript/> , name: 'Typescript'},
  {icon: <FaDocker />, name: 'Docker'},
  {icon: <SiTailwindcss/>, name: 'Tailwindcss'},
  {icon: < FaGithub />, name: ' Github'},
];

const TecnologyPage = () => {
  return (
    <div className="overflow-hidden relative mt-2 mb-2 w-full h-20 flex items-center justify-end bg-white">
      <div className="flex w-[200%] animate-marquee items-center justify-end">
        {icons.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-start  w-20 h-20 text-4xl mx-4 text-[#fca61e]"
          >
            {item.icon}
          </div>
        ))}
        {icons.map((item, index) => (
          <div
            key={index + icons.length}
            className="flex items-center justify-end w-20 h-20 text-4xl mx-4 text-blue-700"
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TecnologyPage;

