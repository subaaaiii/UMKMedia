import React from "react";
import { dataBenefit } from "./constant/data";

function BenefitKelasBisnis({ dataDetail }) {
  return (
    <div className="flex flex-col items-start gap-[24px]">
      <h1 className="text-[18px] md:text-[24px] font-bold leading-[28px] md:leading-[36px]">
        Apa yang Akan Kamu Dapatkan?
      </h1>
      <div className="flex flex-col items-start gap-[24px]">
        {dataDetail?.kelas_benefits?.map((el, index) => (
          <div
            key={index}
            className="flex justify-center w-full items-center gap-[24px] p-[24px] rounded-[10px] shadow-customSm"
          >
            <div className="w-[100px]">
              <div className="p-[8px] w-[100px] h-[100px] flex justify-center items-center">
                <img
                  src={`${process.env.REACT_APP_SERVER_URL}images/benefit/${el?.image}`}
                  alt="icon"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="gap-[16px] flex flex-col items-start w-full">
              <h1 className="text-[16px] md:text-[22px] font-bold leading-[24px] md:leading-[32px]">
                {el.benefit || "no data"}
              </h1>
              <p className="text-[14px] md:text-[16px] text-black400 font-light leading-[20px] md:leading-[24px]">
                {el.deskripsi || "no data"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BenefitKelasBisnis;
