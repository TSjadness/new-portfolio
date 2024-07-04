import React from "react";
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

const IconListItem = ({ Icon }: { Icon: React.ComponentType }) => (
  <li className="text-5xl text-[#fca61e]">
    <Icon />
  </li>
);

const StockTicker = () => {
  return (
    <div className="stock-ticker flex  items-center justify-center">
      <ul className="flex  ">
        {[FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDocker, FaGithub].map(
          (Icon, index) => (
            <IconListItem key={index} Icon={Icon} />
          )
        )}
      </ul>

      <ul className="flex  mr-48">
        <p className="bg-blue-500 text-white w-1">{" "}</p>
        {[
          FaNode,
          FaReact,
          FaGithub,
          FaJs,
          SiTypescript,
          FaHtml5,
          SiTailwindcss,
          FaCss3Alt,
        ].map((Icon, index) => (
          <IconListItem key={index} Icon={Icon} />
        ))}
      </ul>
    </div>
  );
};

export default StockTicker;
