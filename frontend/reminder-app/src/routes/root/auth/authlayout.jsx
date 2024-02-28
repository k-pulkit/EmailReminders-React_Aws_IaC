import React from "react";
import { Outlet } from "react-router-dom";
import MyNav from "@components/ui/nav";
import Footer from "@components/ui/footer";

const AuthLayout = () => {
  return (
    <div className="relative h-[100vh] w-screen">
      <MyNav hideSignout={true} />
      <div className="max-container relative">
        <Outlet />
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default AuthLayout;
