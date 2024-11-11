import React, { useMemo } from "react";
import { images } from "../../../constants";
import { useNavigate, useParams } from "react-router-dom";

function HeadSection({ imageKelas, deskripsi, kelas }) {
  const getKelas = useMemo(() => {
    return kelas;
  }, [kelas]);

  const { id } = useParams();
  const navigate = useNavigate();
  const navigateToLms = () => {
    if (getKelas[0]?.id) navigate(`/lms?kelas=${id}&materi=${getKelas[0].id}`);
  };

  return (
    <div className="flex flex-col max-w-[358px] md:max-w-[1080px]  w-full px-[5px] xl:px-0 justify-start items-center mt-[52px] ">
      <div className="w-full flex flex-col-reverse gap-[20px]  lg:gap-0 xl:flex-row justify-between items-center xl:items-start ">
        <div className="w-full max-w-[345px] sm:max-w-[453px] md:max-w-[595px] xl:max-w-[453px]   flex-col items-start justify-center">
          <h1 className="hidden xl:block text-[32px] font-bold elading-[30px] lg:leading-[50px] mb-[43px]">
            Tentang Kelas
          </h1>
          <p className="text-[12px] mt-[20px] md:text-[24px] font-normal leading-[20px] md:leading-[30px] text-black400 whitespace-pre-wrap">
            {deskripsi || "no data"}
          </p>
          <button
            onClick={() => navigateToLms()}
            className=" w-full lg:w-fit mt-[30px] px-[32px] py-[16px] flex justify-center items-center rounded-[10px] bg-black500"
          >
            <p className="text-[16px] font-medium leading-[24px] text-white">
              Mulai Belajar
            </p>
          </button>
        </div>
        <div className="w-[358px] h-[242px] md:w-[595px] md:h-[464px] flex justify-center items-center overflow-hidden rounded-[10px]">
          <img
            src={
              imageKelas.length > 0
                ? `${process.env.REACT_APP_SERVER_URL}images/kelas/${imageKelas}`
                : images.konsultasiBisnis
            }
            alt="kelas"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex xl:hidden w-full  justify-start  mb-[20px]">
          <h1 className=" text-[14px] lg:text-[32px] font-bold leading-[30px] lg:leading-[50px] ">
            Tentang Kelas
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HeadSection;
