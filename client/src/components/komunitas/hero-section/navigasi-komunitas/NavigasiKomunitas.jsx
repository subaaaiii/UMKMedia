import React from "react";
import { icon } from "../../../../constants";
import { useParams } from "react-router-dom";
import { dataKomunitas } from "../../../../constants/data";

function NavigasiKomunitas() {
  const { title } = useParams();
  let index = 1;
  if (title === "komunitas-bisnis"){
    index = 0;
  }
  return (
    <div className=" flex max-w-[358px] md:max-w-[1080px] px-[5px] xl:px-0  w-full justify-start items-center mt-[24px]">
      <nav className="gap-[8px]   flex justify-start items-center list-none">
        <li>
          <p
            className="text-[14px] text-whiteSmoke500 font-[Heebo] font-light leading-[20px] cursor-pointer"
          >
            Komunitas
          </p>
        </li>
        <li className=" w-[16px] h-[16px] flex justify-center items-center">
          <img
            src={icon.chevronSmallDownDark}
            alt="icon"
          />
        </li>
        <li>
          <p className="text-[14px] text-whiteSmoke500 font-[Heebo] font-medium leading-[20px] cursor-pointer">
            {dataKomunitas[index].title}
          </p>
        </li>
      </nav>
    </div>
  );
}

export default NavigasiKomunitas;
