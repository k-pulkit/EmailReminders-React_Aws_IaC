import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-4 text-white">
      <div className="mx-auto text-center">
        <div className="mx-auto flex flex-col items-center justify-center gap-1">
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
