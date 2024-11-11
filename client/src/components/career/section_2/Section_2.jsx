import React from "react";
import { icon } from "../../../constants";

function CareerService() {
  const inlineSquare = {
    width: "850px", // Sesuaikan dengan lebar yang diinginkan
    height: "50px", // Sesuaikan dengan tinggi yang diinginkan
    backgroundColor: "#222", // Warna latar belakang abu-abu
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  };

  const outlineSquare = {
    width: "1050px", // Sesuaikan dengan lebar yang diinginkan
    height: "450px", // Sesuaikan dengan tinggi yang diinginkan
    backgroundColor: "#444", // Warna latar belakang abu-abu
    borderRadius: "10px",
  };

  const contentStyle = {
    flex: "1", // Menyesuaikan agar konten memanfaatkan sisa ruang
    padding: "40px", // Menambahkan padding untuk memberikan ruang di dalam kotak
    textAlign: "left", // Menempatkan teks ke kiri
  };

  const imageStyle = {
    backgroundImage: `url(${icon.prinsip_icon})`,
    width: "200px",
    height: "200px",
    marginLeft: "20px",
  };

  return (
    <div className=" flex flex-col  bg-serviceSection w-full 2xl:max-w-[1280px]  bg-cover h-full xl:h-[800px] items-center relative    xl:overflow-y-visible">
      <div className="flex flex-col items-center justify-center  mt-[80px] gap-[16px] w-full lg:w-[564px] mb-[52px]">
        <h1 className="text-[22px] lg:text-[40px] font-bold  text-center leading-[32px] lg:leading-[60px] text-whiteSmoke500">
          Memiliki prinsip menjadikan kita tetap kompak
        </h1>
      </div>
      <div
        className="flex flex-col lg:flex-row justify-start items-center xl:justify-center shrink-0  " //mt-[30px] sm:mt-[80px] mb-[60px] lg:mb-[80px]
        style={inlineSquare}
      ></div>
      <div className style={outlineSquare}>
        <div style={contentStyle}>
          {/* Judul dan isi di sebelah kiri */}
          <h2
            className="max-w-[564px] text-[22px] lg:text-[40px] font-bold leading-[32px] lg:leading-[60px] text-whiteSmoke500"
            style={{ marginBottom: "15px" }}
          >
            Visi
          </h2>
          <p
            className="max-w-[564px] text-[14px] lg:text-[18px] font-light leading-[20px] lg:leading-[28px] text-whiteSmoke600"
            style={{ textAlign: "justify" }}
          >
            
          </p>
          <div className="justify-center">
            <h2
              className="max-w-[564px] text-[22px] lg:text-[40px] font-bold leading-[32px] lg:leading-[60px] text-whiteSmoke500"
              style={{ marginBottom: "15px" }}
            >
              Misi
            </h2>
            <p
              className="max-w-[564px] text-[14px] lg:text-[18px] font-light leading-[20px] lg:leading-[28px] text-whiteSmoke600"
              style={{ textAlign: "justify" }}
            >
              We are the first end-to-end platform available for Indonesian MSMEs, with over 1000 MSME members spread across Indonesia. We have helped boost their business sales by 5 to 10 times through digital strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerService;
