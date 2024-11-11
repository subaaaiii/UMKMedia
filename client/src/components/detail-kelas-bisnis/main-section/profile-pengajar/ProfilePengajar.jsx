import React from "react";
import { pengajarPic } from "../../../../constants";

function ProfilePengajar({ dataDetail }) {
  return (
    <div className="flex flex-col  w-full items-start gap-[24px] ">
      <h1 className="text-[18px] md:text-[24px] font-bold leading-[28px] md:leading-[36px]">
        Belajar Langsung dari Ahlinya
      </h1>
      <div className="flex  flex-col md:flex-row gap-[24px] p-[24px] justify-start items-center shadow-customSm w-full ">
        <div className=" w-[326px] md:w-[200px] md:min-w-[200px] h-[326px] md:h-[200px] overflow-hidden rounded-[10px] ">
          {dataDetail &&
          dataDetail.kelas_mentors &&
          dataDetail.kelas_mentors.length > 0 ? (
            <img
              src={`${process.env.REACT_APP_SERVER_URL}images/mentor/${dataDetail.kelas_mentors[0].image}`}
              alt="profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={pengajarPic.profilePengajar1}
              alt="profile"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="flex flex-col gap-[16px] items-start">
          <div className="flex flex-col gap-[8px] items-start ">
            <h1 className="text-[18px] md:text-[22px] text-black500 font-bold leading-[28px] md:leading-[32px]">
              {dataDetail?.kelas_mentors?.[0]?.nama || "no data"}
            </h1>
            <h2 className="text-[14px] md:text-[16px] font-medium text-indigoDye500 leading-[20px] md:leading-[24px]">
              {dataDetail?.kelas_mentors?.[0]?.jabatan || "no data"}
            </h2>
          </div>
          <div className=" h-[120px] overflow-hidden">
            <p className=" text-[14px] md:text-[16px]  max-w-[300px] md:max-w-[550px] font-light  leading-[20px] md:leading-[24px] text-black400 line-clamp-5 whitespace-pre-wrap">
              {dataDetail?.kelas_mentors?.[0]?.deskripsi || "no data"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePengajar;
