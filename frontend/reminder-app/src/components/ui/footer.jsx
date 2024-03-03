import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-4 text-white">
      <div className="mx-auto text-center">
        <div className="mx-auto flex flex-col items-center justify-center gap-1">
          <div className="flex flex-row items-center justify-center gap-2 text-sm">
            <FaGithub />
            <p>Checkout the repository :</p>
            <a
              className="text-white underline hover:cursor-pointer hover:font-bold active:text-white"
              href="https://github.com/k-pulkit/EmailReminders-React_Aws_IaC"
              target="_blank"
            >
              Link
            </a>
          </div>
          <p className="text-sm">
            &copy; 2024 PULKIT KAPOOR. Made with{" "}
            <span role="img" aria-label="Heart">
              ❤️
            </span>{" "}
            in Canada. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
