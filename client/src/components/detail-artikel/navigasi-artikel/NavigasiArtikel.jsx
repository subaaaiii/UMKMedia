import React from "react";
import { icon } from "../../../constants";
import { useNavigate, useParams } from "react-router-dom";

function NavigasiArtikel() {
  const navigate = useNavigate();
  const { kategori, title } = useParams();
  return (
    <div className=" flex max-w-[358px] md:max-w-[1080px] px-[5px] xl:px-0  w-full justify-start items-center mt-[24px]">
      <nav className="gap-[8px]   flex justify-start items-center list-none">
        <li>
          <p
            onClick={() => navigate(`/artikel/1/Semua`)}
            className="text-[14px] font-light leading-[20px] cursor-pointer"
          >
            Artikel
          </p>
        </li>
        <li className=" w-[16px] h-[16px] flex justify-center items-center">
          <img
            src={icon.chevronSmallDownLight}
            alt="icon"
            className="-rotate-90 "
          />
        </li>
        <li>
          <p
            onClick={() => navigate(`/artikel/1/${kategori}`)}
            className="text-[14px] font-light leading-[20px] cursor-pointer"
          >
            {kategori}
          </p>
        </li>
        <li className=" w-[16px] h-[16px] flex justify-center items-center">
          <img
            src={icon.chevronSmallDownLight}
            alt="icon"
            className="-rotate-90 "
          />
        </li>
        <li>
          <p className="w-[160px] md:w-full  line-clamp-1 text-[14px] font-medium leading-[20px] cursor-pointer">
            {title}
          </p>
        </li>
      </nav>
    </div>
  );
}

export default NavigasiArtikel;
