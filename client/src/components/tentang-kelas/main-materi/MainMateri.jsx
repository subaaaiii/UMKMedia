import React, { useEffect, useState } from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { api } from "../../../api/api";
import { useNavigate, useParams } from "react-router-dom";

function MainMateri({ kelas, progress }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const tmpMateri = [
    "Borem ipsum dolor",
    "Borem ipsum dolor",

    "Borem ipsum dolor",
    "Borem ipsum dolor",
    "Borem ipsum dolor",
    "Borem ipsum dolor",
    "Borem ipsum dolor",
    "Borem ipsum dolor",
    "Borem ipsum dolor",
    "Borem ipsum dolor",
    "Borem ipsum dolor",
    "Borem ipsum dolor",
  ];

  return (
    <div className="flex flex-col max-w-[358px] md:max-w-[1080px]  w-full px-[5px] xl:px-0 justify-start items-center mt-[52px] ">
      <div className="w-full ">
        <div className="w-full flex flex-col items-start ">
          <h1 className="text-[16px] lg:text-[32px] font-medium leading-[30px] lg:leading-[72px]">
            Modul
          </h1>
          <div className="w-full flex flex-col  lg:flex-row mt-[21px] justify-center items-start gap-[32px]">
            <div className=" p-[15px] lg:p-[32px] flex w-full lg:w-auto lg:flex-1 flex-col justify-center items-center border-[1px] border-whiteSmoke700 gap-[22px] rounded-[10px]">
              {kelas?.map((el, index) => {
                return (
                  <div className="bg-black50 rounded-[10px] cursor-pointer px-[10px] py-[10px] lg:py-[23px] flex justify-start items-center w-full">
                    <p className="text-[12px] lg:text-[18px] leading-[24px]">
                      {index + 1}. {el.materi}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="w-full lg:w-[385px] h-[385px] flex flex-col justify-center items-center gap-[16px] border-[1px] border-whiteSmoke700 rounded-[10px]">
              <h1 className="text-[24px] font-bold leading-[2px]">Progress</h1>
              <div className="p-[20px] flex justify-center items-center">
                <CircularProgress
                  value={progress > 0 ? Number(progress) : Number(0)}
                  color="green.400"
                  size={"181px"}
                >
                  <CircularProgressLabel>{progress}%</CircularProgressLabel>
                </CircularProgress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMateri;
