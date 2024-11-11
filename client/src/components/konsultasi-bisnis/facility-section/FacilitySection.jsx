import React, { useEffect, useState } from "react";
import FacilityCard from "./facility-card/FacilityCard";
import consultationBusinessPic from "../../../constants/consultationBusinessPic";

export default function FacilitySection() {
  const [dataFacility] = useState([
    {
      title: "Business Consultation",
      deskripsi:
        "Kami bertindak sebagai partner yang akan membantu mengidentifikasi masalah, memberikan solusi serta membuat perencanaan bisnis ke depan melalui sesi diskusi bersama.",
      pic: consultationBusinessPic.CB_Card_1,
      link: null,
    },
    {
      title: "Business Research",
      deskripsi:
        "Kami juga akan membantu memberikan data yang detail dan terperinci melalui riset agar rencana yang dibuat lebih efektif.",
      pic: consultationBusinessPic.CB_Card_2,
      link: null,
    },
    {
      title: "Consult & Result",
      deskripsi:
        "Kami akan memberikan konklusi akhir dalam bentuk kesimpulan yang dapat langsung anda terapkan untuk bisnis anda.",
      pic: consultationBusinessPic.CB_Card_3,
      link: null,
    },
    {
      title: "E-Course",
      deskripsi:
        "Kami akan memberikan kursus online yang dapat diakses dengan waktu yang fleksibel untuk dapat membantu meningkatkan bisnis anda.",
      pic: consultationBusinessPic.CB_Card_4,
      link: "/kelas-bisnis",
    },
  ]);

  return (
    <div className="max-w-screen-2xl w-fit h-fit md:h-[992px] flex flex-col flex-wrap my-10 items-center justify-center gap-[52px]">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex flex-col gap-[8px] lg:gap-[16px] items-center "
      >
        <h1 className="text-[14px] md:text-[32px] lg:text-[40px] font-bold leading-[28px] lg:leading-[60px] text-center mb-10">
          Fasilitas apa saja yang kamu dapatkan?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[358px] md:w-fit gap-4 items-center mx-[20px]">
          {dataFacility.map((facility, index) => (
            <FacilityCard key={index} facility={facility} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
