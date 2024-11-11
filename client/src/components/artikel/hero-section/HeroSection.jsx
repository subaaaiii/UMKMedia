import React from "react";
import { images } from "../../../constants";

function HeroSection() {
  return (
    <div className="flex bg-black500 w-full  2xl:max-w-[1080px] ">
      <div className="relative flex  w-full justify-center md:justify-end items-center">
        <img
          src={images.geometricShapeArtikelDesktop}
          alt=""
          className="hidden md:block"
        />
        <img
          src={images.geometricShapeArtikelMobile}
          alt=""
          className="block md:hidden"
        />

        <div className="flex flex-col absolute w-full justify-center items-center md:left-0 md:w-fit md:ml-[100px] gap-[16px] z-10">
          <h1 className="flex justify-center md:justify-start items-center text-center md:text-start text-[24px] md:text-[48px] font-bold leading-[36px] md:leading-[72px] text-whiteSmoke500 left-[100px] max-w-[256px] md:max-w-[572px] ">
            Artikel Menarik untuk Kembangkan Bisnismu
          </h1>
          <p className="flex justify-center  md:justify-start items-center text-center md:text-start text-[16px] md:text-[18px] font-light text-whiteSmoke600 max-w-[358px] md:max-w-[572px] leading-[24px] md:leading-[28px]">
            Temukan wawasan mendalam, strategi terkini, dan tips praktis yang
            dapat langsung diterapkan untuk mengembangkan bisnismu ke level
            berikutnya
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
