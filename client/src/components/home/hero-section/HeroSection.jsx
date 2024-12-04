import React from "react";
import { images, clientPic } from "../../../constants";

import ButtonBlack500 from "../../global-component/button/button-black500/ButtonBlack500";
import { IoMdStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col px-[5px] lg:px-[100px]  gap-[0px] justify-center items-center xl:items-start xl:justify-center shrink-0 mt-[23px] sm:mt-[30px] mb-[80px] lg:mb-[80px]">
      <div className="w-full flex lg:px-0 flex-initial flex-col  items-center lg:items-center gap-[18px] ">
        <div className="flex  flex-col items-center lg:items-center gap-[0px] w-full  xl:w-[728px]">
          <h1 className="px-8 pt-4 text-[20px] lg:text-[24px]  text-center lg:text-center xl:text-[36px] font-bold uppercase leading-[36px] xl:leading-[46px]">
            Raih <span className="text-indigoDye500">Peluang</span> Besar
            Tingkatkan Pendapatan Untuk{" "}
            <span className="text-indigoDye500">UMKM</span>
          </h1>
          <p className="lg:block mt-2 text-center lg:text-center text-[14px] lg:text-[18px] leading:-[20px] lg:leading-[28px] font-light max-w-[536px]">
            UMKMedia adalah end to end platform yang berfungsi untuk mewadahi
            pebisnis UMKM di Indonesia untuk tumbuh dan berkembang bersama.
          </p>
        </div>

        <a href="https://wa.me/6282335676172" target="_blank" rel="noreferrer">
          <ButtonBlack500 WIDTH={"w-[260px]"} TEXT_BUTTON={"Gabung Sekarang"} />
        </a>
      </div>
      <div className="relative lg:-mt-16 z-20 xl:w-[1200px] flex flex-col lg:flex-row self-center justify-between items-center">
        <div className="p-6">
          <div className="relative w-[200px] h-[300px] bg-black rounded-xl flex flex-col items-center justify-center text-whiteSmoke500">
            <h2 className="text-lg font-semibold mb-4">Peningkatan Omset</h2>
            <div className="relative mb-4">
              <div className="w-24 h-24 border-8  border-[#FCF853] rounded-full flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl">80%</span>
                </div>
                <div
                  className="absolute w-full h-full rounded-full border-8 border-indigoDye500"
                  style={{ clipPath: "inset(0 0 80% 0)" }}
                ></div>
              </div>
            </div>
            <h3 className="text-3xl font-bold">300+</h3>
            <p className="text-sm text-center">
              Pengguna Berhasil Meningkatkan Omset Tahun Terakhir
            </p>
          </div>
        </div>
        <div className="lg:absolute -mt-16 lg:mt-0 bottom-0 left-0 lg:w-[40%] px-8 pt-12 pb-8 lg:p-0 h-[50%] bg-[#65D5E3] rounded-xl z-[-1] flex justify-center items-center">
          <div className="flex flex-col  lg:ml-[250px] items-center lg:items-start">
            <p className="text-3xl flex font-bold">
              4.7 <IoMdStar className="ml-1" />
            </p>
            <p className="font-medium">Rating Modul Oleh Pengguna</p>
          </div>
        </div>
        <div className="hidden lg:block mt-16 absolute left-1/2 transform -translate-x-1/2 top-8 ">
          <img
            loading="lazy"
            className="object-cover h-full w-full object-center"
            src={images.orang}
            alt="orang"
          />
        </div>
        <div className="relative flex flex-col z-20 -bottom-8 lg:bottom-4 ">
          <div className="ml-16">
            <div className="absolute  left-[90px] ml-2 z-19 w-[200px] h-[200px] bg-gray-500 rounded-xl"></div>
            <div className="rotate-[-15deg] py-8 flex flex-col items-center justify-between origin-bottom-right w-[200px] h-[200px] bg-black rounded-xl">
              <div className="flex flex-col items-center text-whiteSmoke500">
                <h3 className="text-3xl font-bold">400+</h3>
                <p className="text-md text-center">Total UMKM</p>
              </div>
              <div className="flex">
                <div className=" w-16 h-16 bg-whiteSmoke500 p-1 -mx-2 rounded-full flex items-center justify-center shadow-lg z-30">
                  <img
                    src={clientPic.client01}
                    alt="Icon 1"
                    className="w-12 h-12 rounded-full"
                  />
                </div>

                <div className="w-16 h-16 bg-whiteSmoke500 p-2 -mx-2 rounded-full flex items-center justify-center shadow-lg z-20">
                  <img
                    src={clientPic.client02}
                    alt="Icon 2"
                    className="w-12 h-12 rounded-full"
                  />
                </div>

                <div className="w-16 h-16 bg-whiteSmoke500 rounded-full -mx-2 flex items-center justify-center shadow-lg z-10">
                  <span className="text-xl font-bold">+399</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap w-[365px]">
            <a
              onClick={() => navigate("/kelas-bisnis")}
              className="px-4 text-lg font-medium py-1 my-1 mr-1 border border-black rounded-full transition duration-300 ease-in-out hover:bg-black hover:text-white cursor-pointer"
            >
              Kelas Bisnis
            </a>
            <a
              onClick={() => navigate("/buat-website-dan-aplikasi")}
              className="px-4 text-lg font-medium py-1 my-1 mr-1 border border-black rounded-full transition duration-300 ease-in-out hover:bg-black hover:text-white cursor-pointer"
            >
              Buat Website & Aplikasi
            </a>
            <a
              onClick={() => navigate("/desain-logo")}
              className="px-4 text-lg font-medium py-1 my-1 mr-1 border border-black rounded-full transition duration-300 ease-in-out hover:bg-black hover:text-white cursor-pointer"
            >
              Desain Logo
            </a>
            <a
              onClick={() => navigate("/konsultasi-bisnis")}
              className="px-4 text-lg font-medium py-1 my-1 mr-1 border border-black rounded-full transition duration-300 ease-in-out hover:bg-black hover:text-white cursor-pointer"
            >
              Konsultasi Bisnis
            </a>
            <a
              onClick={() => navigate("/desain-logo")}
              className="px-4 text-lg font-medium py-1 my-1 mr-1 border border-black rounded-full transition duration-300 ease-in-out hover:bg-black hover:text-white cursor-pointer"
            >
              Social Media Management
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
