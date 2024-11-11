import React from "react";
import { icon } from "../../../../constants";
import { useParams } from "react-router-dom";

function NavigasiKelasBisnis() {
  const { tipe } = useParams();

  return (
    <div className="hidden lg:flex  px-[8px] xl:px-0 justify-start  items-center ">
      <nav className="gap-[8px]   flex justify-start items-center list-none">
        {/* <li>
          <p className="text-[14px] text-whiteSmoke500 font-[Heebo] font-light leading-[20px] cursor-pointer">
            Layanan
          </p>
        </li>
        <li className=" w-[16px] h-[16px] flex justify-center items-center">
          <img src={icon.chevronSmallDownDark} alt="icon" />
        </li> */}
        <li>
          <p className="text-[14px] text-whiteSmoke500 font-[Heebo] font-medium leading-[20px] cursor-pointer">
            Kelas Bisnis
          </p>
        </li>
      </nav>
    </div>
  );
}

export default NavigasiKelasBisnis;
