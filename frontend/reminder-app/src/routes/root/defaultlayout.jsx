import React from "react";
import { Outlet } from "react-router-dom";
import MyNav from "@components/ui/nav";
import Footer from "@components/ui/footer";
import { useMemo } from "react";

const DefaultLayout = () => {
  return useMemo(() => (
    <div className="relative h-full min-h-screen w-full bg-white-400 max-lg:pb-20">
      <MyNav />
      <div className="max-container relative">
        <Outlet />
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  ));
};

export default DefaultLayout;
