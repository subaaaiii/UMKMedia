import React, { useEffect } from "react";
import HeroSection from "../../components/artikel/hero-section/HeroSection";
import MainSection from "../../components/artikel/main-section/MainSection";
import { Outlet } from "react-router-dom";
import ArtikelFilter from "../../components/artikel/artikel-filter/ArtikelFilter";

function Artikel() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center shrink-0 ">
      <HeroSection />
      {/* <ArtikelFilter /> */}
      <Outlet />
    </div>
  );
}

export default Artikel;
