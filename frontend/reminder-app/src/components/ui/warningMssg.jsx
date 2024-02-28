import React from "react";
import { IoIosWarning } from "react-icons/io";

const WarningMssg = ({ children }) => {
  return (
    <div
      className="flex flex-row items-center justify-center rounded-xl 
                    bg-red-700 px-3 py-2 text-white"
    >
      <IoIosWarning className="text-3xl" />
      <p className="text-center font-mono text-sm">{children}</p>
    </div>
  );
};

export default WarningMssg;
