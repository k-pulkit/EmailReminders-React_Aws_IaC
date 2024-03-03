import React from "react";
import architecture from "@assets/architecture3.png";

const About = () => {
  return (
    <div className="max-lg:[75vh] relative my-auto flex h-[70vh] w-full flex-row items-center justify-between gap-2 p-5 max-lg:mt-10 max-lg:flex-col max-lg:items-center max-lg:justify-around">
      <h1 className="flex animate-fade flex-col px-4 py-2 pt-0 text-center font-serif text-4xl tracking-widest text-gray-700 animate-delay-300 animate-once lg:grow">
        Architecture
        <span className="text-primary">Diagram</span>
      </h1>
      <div className="flex w-[60%] animate-fade-up items-center justify-center animate-delay-300 animate-once max-lg:w-[90%] max-lg:grow">
        <img
          src={architecture}
          loading="lazy"
          className="rounded-4xl h-[92%] w-full object-cover object-center antialiased shadow-2xl shadow-primary"
        />
      </div>
    </div>
  );
};

export default About;
