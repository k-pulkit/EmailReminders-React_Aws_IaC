import React, { useState, lazy } from "react";
import architecture from "@assets/architecture.png";
import { IoClose } from "react-icons/io5";

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <div
        className={`flex-0 fixed top-0 z-50 h-full w-full items-center justify-center overflow-scroll bg-gray-600 bg-opacity-75 p-20 max-xl:p-5 ${modalOpen ? "flex" : "hidden"}`}
      >
        <div className="relative h-0 w-[80%] grow-0 overflow-hidden pb-[44%] max-lg:w-[95%] max-lg:pb-[55%]">
          <p
            className="absolute right-1 top-0 z-50 px-1 text-3xl font-bold text-black underline hover:cursor-pointer"
            onClick={() => setModalOpen(false)}
          >
            <IoClose />
          </p>
          <img
            src={architecture}
            loading="lazy"
            className="absolute z-40 h-full w-full rounded-xl object-cover object-top antialiased shadow-xl shadow-primary"
          />
        </div>
      </div>

      <div className="relative my-auto flex h-[70vh] w-full grow flex-row items-center justify-between gap-2 p-5 max-lg:mt-10 max-lg:flex-col max-lg:items-center max-lg:justify-around">
        <h1 className="flex animate-fade flex-col px-4 py-2 pt-0 text-center font-serif text-4xl tracking-widest text-gray-700 animate-delay-300 animate-once lg:grow">
          Architecture
          <span className="text-primary">Diagram</span>
        </h1>
        <div
          className="flex w-[60%] animate-fade-up flex-col items-center justify-center animate-delay-300 animate-once hover:cursor-pointer max-lg:w-[90%] max-lg:grow"
          onClick={() => setModalOpen(true)}
        >
          <div className="relative h-0 w-[80%] grow-0 overflow-hidden rounded-xl pb-[44%] shadow-md shadow-primary max-lg:w-[95%] max-lg:pb-[55%] ">
            <img
              src={architecture}
              className="absolute z-40 h-full w-full object-cover object-top antialiased"
            />
          </div>
          <p className="py-2 font-normal italic text-primary">
            Click image to enlarge
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
