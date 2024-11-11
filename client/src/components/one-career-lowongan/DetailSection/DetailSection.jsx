import React from "react";
import { images } from "../../../constants";


function DetailSection(props) {
  return (
    <div className="xl:m-20 p-10 grid grid-cols-3 xl:gap-20 lg:gap-10 gap-5 font-heebo text-[#3F4041]">
      <div className="md:col-span-2 col-span-3">
        <div className="grid grid-cols-1 divide-y lg:text-[18px] ">
          <div>
            <h1 className="lg:text-[24px] font-bold text-black">Deskripsi Pekerjaan </h1> <br />
            {props.lowongan.deskripsi_lowongan_pekerjaan}
          </div>
          <div>
            <h1 className="lg:text-[24px] font-bold mt-20 text-black">Persyaratan  </h1> <br />
            {props.lowongan.persyaratan_lowongan_pekerjaan}
          </div>
        </div>
      </div>
      <div className="col-span-1 xl:ml-[10px] md:flex hidden ">
        <div
            className="p-5 rounded-lg border-none w-full lg:h-[230px] h-[200px] text-[16px] lg:max-w-[300px] max-w-[250px]"
            style={{
            boxShadow: "2px 2px 12px 0px #0101011A",
            }}
        >
            <button className="py-3 px-5 rounded-md bg-black text-white w-full">
            Lamar sekarang
            </button>
            <hr className="border-t border-gray-300 my-5" />
            <h1 className="font-semibold">Bagikan Lowongan </h1>
            <div className="flex justify-between items-center pt-2 gap-2">
                <button className="rounded-md flex items-center justify-center w-full">
                    <img
                    src={images.copy_link}
                    alt="Career Momen 2"
                    className=" xl:w-[55px] xl:h-[55px] lg:w-[50px] w-[40px]"
                    />
                </button>
                <button className="rounded-md flex items-center justify-center w-full">
                    <img
                    src={images.Linkedin}
                    alt="Career Momen 2"
                    className="xl:w-[55px] xl:h-[55px] lg:w-[50px] w-[40px]"
                    />
                </button>
                <button className="rounded-md flex items-center justify-center w-full">
                    <img
                    src={images.Whatsapp}
                    alt="Career Momen 2"
                    className="xl:w-[55px] xl:h-[55px] lg:w-[50px] w-[40px]"
                    />
                </button>
                <button className="rounded-md flex items-center justify-center w-full">
                    <img
                    src={images.Telegram}
                    alt="Career Momen 2"
                    className="xl:w-[55px] xl:h-[55px] lg:w-[50px] w-[40px]"
                    />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSection;
