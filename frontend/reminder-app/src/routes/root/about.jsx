import React from "react";
import architecture from "@assets/architecture.png";

const About = () => {
  return (
    <div className="mb-10 mt-10 flex h-[80vh] flex-col items-center justify-center gap-4 p-3">
      <h1 className="grow pt-10 font-serif text-4xl tracking-widest text-gray-700">
        Architecture Diagram
      </h1>
      <div className="flex h-full w-full items-start justify-center">
        <img
          src={architecture}
          className="h-[92%] w-full rounded-xl object-contain object-center outline outline-black"
        />
      </div>
    </div>
  );
};

export default About;
