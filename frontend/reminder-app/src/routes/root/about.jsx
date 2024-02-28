import React from "react";
import architecture from "@assets/architecture.png";

const About = () => {
  return (
    <div className="mt-4 flex h-full flex-col items-center justify-center gap-4 p-3">
      <h1 className="font-mono text-3xl text-primary">Architecture Diagram</h1>
      <img
        src={architecture}
        className="rounded-xl p-2 outline outline-primary"
      />
    </div>
  );
};

export default About;
