import React from "react";
import { images } from "../../../constants";
import ButtonWhiteSmoke500 from "../../global-component/button/button-whitesmoke500/ButtonWhiteSmoke500";
import ButtonBorderWhitesmoke500 from "../../global-component/button/button-borderwhitesmoke500/ButtonBorderWhitesmoke500";

function JoinSection() {
  return (
    <>
      <div className=" relative hidden md:flex justify-end items-center mt-[160px]  w-full 2xl:max-w-[1280px] h-[484px] overflow-hidden">
        <div className="absolute overflow-hidden w-[684px] h-[684px] rounded-full -left-[100px] flex items-center justify-center">
          <img
            loading="lazy"
            src={images.joinOri}
            alt="ellipse"
            className="object-cover w-full h-full absolute -left-[15px] "
          />
        </div>

        <div className="relative bg-gradient-radial  w-full 2xl:max-w-[1280px] h-[484px]  pt-[80px]">
          <div className="pr-[100px] flex flex-col  items-end ">
            <div className="space-y-[52px]">
              <div className="flex flex-col items-start gap-[16px]">
                <h1 className="text-[48px] font-bold leading-[72px] max-w-[632px] text-whiteSmoke500">
                  Tertarik untuk bergabung bersama kami?
                </h1>
                <p className="text-[18px] font-light leading-[28px] text-whiteSmoke600 w-[640px]">
                  Jangan lewatkan kesempatan untuk meningkatkan potensi bisnis
                  kamu dan memperoleh peningkatan pendapatan
                </p>
              </div>
              <div className="flex w-full items-start gap-[24px] ">
              <a href="https://wa.me/6282335676172" target="_blank" rel="noreferrer">
                <ButtonBorderWhitesmoke500
                  TEXT_BUTTON={"Hubungi Kami"}
                  WIDTH={"max-w-[200px]"}
                  RESPONSIF={"flex"}
                />
              </a>
                <a href="https://wa.me/6282335676172" target="_blank" rel="noreferrer" className="px-[64px] py-[16px] w-[232px] flex justify-center items-center rounded-[10px] bg-whiteSmoke500 border-[1px] ">
                  <p className="shrink-0 text-[16px] font-medium leading-[24px] text-black500">
                    Gabung Sekarang
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative flex flex-col md:hidden justify-center items-center mt-[160px] w-full 2xl:max-w-[1280px] min-h-[484px] ">
        <div className="relative  w-full top-0  flex justify-center items-center h-[196px] ">
          <div className="absolute h-full w-full bg-gradient-to-t from-black400 to-transparent"></div>
          <img
            loading="lazy"
            src={images.joinOri}
            alt="ellipse"
            className=" object-cover w-full h-full"
          />
        </div>
        <div className="relative flex justify-center bg-black400  w-full 2xl:max-w-[1280px] min-h-[484px]  pt-[80px]  pb-[32px]">
          <div className="mt-[32px] flex flex-col  items-center ">
            <div className="space-y-[52px]  flex flex-col items-center">
              <div className="flex flex-col items-start gap-[16px] px-[16px]">
                <h1 className="text-[22px] text-start font-bold leading-[32px]   text-whiteSmoke500">
                  Tertarik untuk bergabung bersama kami?
                </h1>
                <p className="text-[14px] md:text-center font-light leading-[20px] text-whiteSmoke600 max-w-[358px]">
                  Jangan lewatkan kesempatan untuk meningkatkan potensi bisnis
                  kamu dan memperoleh peningkatan pendapatan
                </p>
              </div>
              <div className="flex w-screen items-start justify-center overflow-y-scroll gap-[16px] ">
                <ButtonBorderWhitesmoke500
                  TEXT_BUTTON={"Hubungi Kami"}
                  WIDTH={"max-w-[152px]"}
                  RESPONSIF={"flex"}
                />

                <ButtonWhiteSmoke500
                  TEXT_BUTTON={"Gabung Sekarang"}
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

export default JoinSection;
