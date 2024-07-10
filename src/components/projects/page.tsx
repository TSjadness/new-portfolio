// import React from 'react'

// const ProjectList = () => {
//   return (
//     <div>ProjectList</div>
//   )
// }

// export default ProjectList


import React from 'react';

const Card = ({
  href,
  imgSrc,
  imgAlt,
  title,
  description,
}: {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}) => (
  <div className="mx-3 mt-6 mb-6 flex flex-col self-start rounded-lg bg-[#2d2d2d] text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 max-w-md transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-10 ">
    <a href={href}>
      <img className="rounded-t-lg" src={imgSrc} alt={imgAlt} />
    </a>
    <div className="p-6">
      <h5 className="mb-2 text-2xl font-medium leading-tight text-white">
        {title}
      </h5>
      <p className="mb-4 text-base text-white">{description}</p>
    </div>
  </div>
);

const ProjectList = () => (
  <section
    className="container mb-24 p-5 w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white bg-[#131318] responsive-projects "
    id="projetos"
  >
    <h2 className="text-3xl font-bold tracking-tight mt-5">
      <span className="text-[#fca61e]">Ùltimos</span> Projetos
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 ">
      <Card
        href="#!"
        imgSrc="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
        imgAlt="Hollywood Sign on The Hill"
        title="Card title"
        description="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      />
      <Card
        href="#!"
        imgSrc="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
        imgAlt="Palm Springs Road"
        title="Card title"
        description="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      />
      <Card
        href="#!"
        imgSrc="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
        imgAlt="Skyscrapers"
        title="Card title"
        description="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      />
      <Card
        href="#!"
        imgSrc="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
        imgAlt="Los Angeles Skyscrapers"
        title="Card title"
        description="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      />
    </div>
  </section>
);

export default  ProjectList;
