import React from "react";
import { images } from "../../../constants";
import ButtonWhiteSmoke500 from "../../global-component/button/button-whitesmoke500/ButtonWhiteSmoke500";
import ButtonBorderWhitesmoke500 from "../../global-component/button/button-borderwhitesmoke500/ButtonBorderWhitesmoke500";

function JoinKerjaSection() {
  return (
    <>
      <div className=" relative hidden md:flex justify-end items-center  w-full 2xl:max-w-[1280px] h-[484px]">
        <img
          src={images.ellipse9}
          alt="ellipse"
          className="absolute w-fit left-0 "
        />
        <div className="relative bg-gradient-radial w-full 2xl:max-w-[1280px] h-[484px]  pt-[80px]" style={{ background: "radial-gradient(circle at left, rgba(63, 64, 65, 0.35) 29%, #3f4041 30.5%)"}}>
          <div className="pr-[100px] flex flex-col  items-end ">
            <div className="space-y-[52px]">
              <div className="flex flex-col items-start gap-[16px]">
                <h1 className="text-[48px] font-bold leading-[72px] max-w-[632px] text-whiteSmoke500">
                  Tertarik menjadi bagian tim kami?
                </h1>
                <p className="text-[18px] font-light leading-[28px] text-whiteSmoke600 w-[640px]">
                  Kamu akan menemukan banyak lowongan yang sesuai dengan minat dan passion kamu
                </p>
              </div>
              <div className="flex w-full items-start gap-[24px] ">
                {/* <button className="px-[64px] py-[16px] w-[200px] flex justify-center items-center rounded-[10px] border-[1px] text-whiteSmoke500 bg-black400 hover:bg-whiteSmoke600 hover:text-black500 border-whiteSmoke500">
                  <p className="shrink-0 text-[16px] font-medium leading-[24px] ">
                    Hubungi Kami
                  </p>
                </button> */}
                <button className="px-[64px] py-[16px] w-[232px] flex justify-center items-center rounded-[10px] bg-whiteSmoke500 border-[1px] ">
                  <p className="shrink-0 text-[16px] font-medium leading-[24px] text-black500">
                    Lihat Semua Lowongan
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative flex flex-col md:hidden justify-center items-center w-full 2xl:max-w-[1280px] min-h-[484px] ">
        <img
          src={images.rectangleJoin}
          alt="ellipse"
          className=" w-full top-0 "
        />
        <div className="relative flex justify-center bg-black400  w-full 2xl:max-w-[1280px] min-h-[484px]  pt-[80px]  pb-[32px]">
          <div className="mt-[32px] flex flex-col  items-center ">
            <div className="space-y-[52px]  flex flex-col items-center">
              <div className="flex flex-col items-start gap-[16px] px-[16px]">
                <h1 className="text-[22px] text-start font-bold leading-[32px]   text-whiteSmoke500">
                Tertarik menjadi bagian tim kami?
                </h1>
                <p className="text-[14px] md:text-center font-light leading-[20px] text-whiteSmoke600 max-w-[358px]">
                Kamu akan menemukan banyak lowongan yang sesuai dengan minat dan passion kamu
                </p>
              </div>
              <div className="flex w-screen items-start justify-center overflow-y-scroll gap-[16px] ">
                {/* <button className="px-[64px] py-[16px] max-w-[152px] flex justify-center items-center rounded-[10px] border-[1px] text-whiteSmoke500 border-whiteSmoke500 bg-black400 hover:bg-whiteSmoke600 hover:text-black500">
                  <p className="shrink-0 text-[16px] font-medium leading-[24px] ">
                    Hubungi Kami
                  </p>
                </button> */}
                {/* <button className="px-[64px] py-[16px] max-w-[190px] flex justify-center items-center rounded-[10px] bg-whiteSmoke500 border-[1px] ">
                  <p className="shrink-0 text-[16px] font-medium leading-[24px] text-black500">
                    Gabung Sekarang
                  </p>
                </button> */}
                <ButtonWhiteSmoke500
                  TEXT_BUTTON={"Lihat Semua Lowongan"}
                  WIDTH={"w-[190px]"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinKerjaSection;
