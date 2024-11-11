import React from "react";
import { data } from "../../../constants";
import { dataLogoShare } from "../../../constants/data";

function ShareArtikel() {
  return (
    <div className="flex max-w-[358px] md:max-w-[1080px]  w-full px-[5px] xl:px-0  justify-start items-center mt-[52px]">
      <div className="flex flex-col items-start justify-center gap-[16px]">
        <p className="text-[16px] font-medium leading-[24px]">
          Bagikan Artikel
        </p>
        <div className="flex justify-start item  gap-[16px]">
          {dataLogoShare.map((lin, index) => (
            <div
              key={index}
              className={`${lin.background} w-[36px] h-[36px] md:w-[56px] md:h-[56px] flex justify-center items-center rounded-[10px] overflow-hidden cursor-pointer`}
            >
              <img src={lin.images} alt={lin.title} className=" " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShareArtikel;
