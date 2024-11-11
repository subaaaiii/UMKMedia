import React from "react";
import { useNavigate } from "react-router-dom";

export default function FacilityCard({ facility }) {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col w-[358px] h-[243px] md:w-[255px] md:h-[530px] shrink-0 rounded-[10px] gap-[12px] shadow-customSm md:items-center p-5 ">
      <img
        src={facility.pic}
        alt=""
        className="w-[40px] h-[40px] md:w-[125px] md:h-[125px]"
      />
      <div>
        <p className="w-fit md:w-full text-[14px] md:text-[20px] font-medium leading-[28px] md:leading-[40px] mb-[10px] text-black500 text-center">
          {facility.title}
        </p>
        <p className="w-fit text-[12px] md:text-[18px] font-light leading-[20px] md:leading-[35px] mb-1 md:mb-[10px] text-black400 text-justify">
          {facility.deskripsi}
        </p>
      </div>
      {facility.link === null ? (
        ""
      ) : (
        <button
          onClick={() => navigate(facility.link)}
          className="w-full md:w-[160px] py-[6px] px-[32px] rounded-[10px] bg-black500 text-whiteSmoke500 text-[12px] md:text-[16px] leading-[24px] font-normal hover:bg-whiteSmoke500 hover:text-black500 hover:shadow-lg border-black500 border-2"
        >
          Lihat
        </button>
      )}
    </div>
  );
}
