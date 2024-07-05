"use client";
import React from "react";
import CountUp from "react-countup";

interface StatisticProps {
  value: number;
  label: string;
}

const Statistic = ({ value, label }: StatisticProps) => (
  <div className="flex flex-col items-center m-4 w-72 responsive-statics ">
    <CountUp
      end={value}
      duration={3}
      className="text-6xl font-bold text-[#fca61e]"
    />
    <div className="text-2xl font-medium mt-2 text-white text-center">
      {label}
    </div>
  </div>
);

const Statistics = () => {
  return (
    <div className="container mb-28 mt-28 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-10 ">
      <div className="flex flex-wrap justify-center ">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 responsive-statistic">
          <Statistic value={1} label="Anos de Experiências" />
          <Statistic value={3} label="+ Projetos Concluídos" />
          <Statistic value={5} label="+ Tecnologias" />
          <Statistic value={100} label="+ Commits realizados" />
        </div>
      </div>
    </div>
  );
};

export default Statistics;