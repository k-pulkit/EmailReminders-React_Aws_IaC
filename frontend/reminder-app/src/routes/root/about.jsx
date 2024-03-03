import React, { useState, lazy } from "react";
import architecture from "@assets/architecture3.png";
import { IoClose } from "react-icons/io5";

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed z-50 mx-10 h-full w-full flex-1 items-center justify-center bg-gray-600 bg-opacity-75 p-20 max-lg:p-5 ${modalOpen ? "flex" : "hidden"}`}
      >
        <div className="relative h-fit max-h-[80vh] w-fit overflow-scroll">
          <p
            className="absolute right-1 top-0 px-1 text-3xl font-bold underline hover:cursor-pointer"
            onClick={() => setModalOpen(false)}
          >
            <IoClose />
          </p>
          <img
            src={architecture}
            loading="lazy"
            className="h-[80vh] w-full rounded-xl object-contain antialiased shadow-xl shadow-primary"
          />
        </div>
      </div>

      <div className="max-lg:[75vh] relative my-auto flex h-[70vh] w-full flex-row items-center justify-between gap-2 p-5 max-lg:mt-10 max-lg:flex-col max-lg:items-center max-lg:justify-around">
        <h1 className="flex animate-fade flex-col px-4 py-2 pt-0 text-center font-serif text-4xl tracking-widest text-gray-700 animate-delay-300 animate-once lg:grow">
          Architecture
          <span className="text-primary">Diagram</span>
        </h1>
        <div
          className="flex w-[60%] animate-fade-up flex-col items-center justify-center animate-delay-300 animate-once hover:cursor-pointer max-lg:w-[90%] max-lg:grow"
          onClick={() => setModalOpen(true)}
        >
          <img
            src={architecture}
            loading="lazy"
            className="rounded-4xl h-[92%] w-full object-cover object-center antialiased shadow-lg shadow-primary"
          />
          <p className="py-2 font-normal italic text-primary">
            Click image to enlarge
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
