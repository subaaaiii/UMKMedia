import React from "react";
import ButtonWhiteSmoke500 from "../../global-component/button/button-whitesmoke500/ButtonWhiteSmoke500";
import { dataKomunitas } from "./../../../constants/data";
import NavigasiKomunitas from "./navigasi-komunitas/NavigasiKomunitas";
import { useParams, useNavigate } from "react-router-dom";

export default function HeroSection(props) {
  const { title } = useParams();
  const navigate = useNavigate();

  let index = 1;
  if (title === "komunitas-bisnis") {
    index = 0;
  }
  return (
    <div
      className="bg-cover bg-[center_top_-20px] px-[16px] sm:px-[100px] w-full max-w-screen-2xl h-[540px] lg:h-[544px] flex flex-col items-center"
      style={{ backgroundImage: `url(${dataKomunitas[index].pic})` }}
    >
      <div className="bg-[rgba(15,16,17,0.95)] bg-cover px-[16px] sm:px-[100px] w-full max-w-screen-2xl h-[540px] lg:h-[544px] absolute z-0 "></div>
      <div className="z-10">
        <div className="mt-[24px] gap-[8px]">
          {/* <h1 className="text-whiteSmoke500">Breadcrumb</h1> */}
          <NavigasiKomunitas />
        </div>
        <div className="flex flex-col lg:flex-row gap-[32px] lg:gap[80px] mt-[40px] lg:mt-[70px] items-center justify-center lg:items-start lg:justify-start">
          <div className="flex flex-col w-full lg:w-[568px]  overflow-hidden gap-[32px] items-center lg:items-start">
            <div className="flex flex-col max-w-[568px] gap-[16px] lg:gap[52px]">
              <h1 className=" lg:w-[568px] text-whiteSmoke500 text-[24px] lg:text-[48px] text-center lg:text-start font-bold leading-[36px] lg:leading-[72px]">
                {dataKomunitas[index].title}
              </h1>
              <p className="lg:w-[568px] text-[16px] lg:text-[18px] font-light leading-[24px] lg:leading-[28px] text-whiteSmoke500 text-center lg:text-start">
                Ayo bergabung dengan para penggerak industri kreatif untuk
                bertukar ide, mendapatkan inspirasi, dan memperluas jaringanmu.
              </p>
            </div>

            {/* <button className=" h-[54px] px-[64px] py-[16px] flex items-center rounded-[10px] justify-center bg-whiteSmoke500">
                <p className="text-black500 text-[16px] font-medium leading-[24px]">
                  Selengkapnya
                </p>
              </button> */}
            <a
              href={
                index === 0
                  ? "https://docs.google.com/forms/d/e/1FAIpQLSdtiVnJeZjVb6-tWc_HKKZZvi_ZppZeSYzgRcQCygOL7sp-5w/viewform"
                  : "https://docs.google.com/forms/d/1GBs1hbfjfJTUjLnuBHK4nAaFg0o4npZp2tu-iXOjd9U/edit?sharingaction=ownershiptransfer&ts=64ef08b3"
              }
              target="_blank"
              rel="noreferrer"
            >
              <ButtonWhiteSmoke500
                WIDTH={"w-[220px] lg:w-[260px]"}
                TEXT_BUTTON={"Selengkapnya"}
              />
            </a>
          </div>
          <div
            style={{ backgroundImage: `url(${dataKomunitas[index].pic})` }}
            className="flex flex-col items-center bg-center bg-cover w-[358px] lg:w-[432px] h-[188px] lg:h-[352px]  sm:min-w-[352px] overflow-hidden rounded-[10px]"
          ></div>
        </div>
      </div>
    </div>
  );
}
