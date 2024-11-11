import React, { useEffect, useState } from "react";
import { api } from "../../../api/api";
import KelasCard from "../../global-component/card/kelas-card/KelasCard";

function DashboardProfile() {
  const [kelas, setKelas] = useState([]);

  const fetchKelas = async () => {
    const token = JSON.parse(localStorage.getItem("auth"));
    try {
      const response = await api.get(
        `${process.env.REACT_APP_API_BASE_URL}/userKelas/progress/last`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      setKelas(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchKelas();
  }, []);
  return (
    <div className="justify-start lg:mt-[10px] lg:px-0 w-fit lg:w-[fit] h-full lg:h-full gap-[12px]">
      <div className="p-[28px] flex flex-col items-left justify-center w-[358px] sm:w-[500px] lg:w-[761px] h-[79px] lg:h-[112px] bg-black500 text-whiteSmoke500 border border-grey rounded-[10px] shadow-[1px_1px_3px_rgba(128,128,128,0.3) gap-[4px]">
        <h1 className="font-bold text-[18px] lg:text-[32px]">Halo, Anonymus!</h1>
        <p className="font-medium text-[12px] lg:text-[18px]">
          Mulai belajar lagi dan selesaikan course kamu.
        </p>
      </div>
      <h2 className="mt-[12px] lg:mt-[37px] mb-[7px] lg:mb-[17px] text-[14px] lg:text-[32px] font-medium text-[#666]">
        Lanjutkan progres terakhir kelas
      </h2>
      
      {kelas.map((kelas,  index) => (
        <KelasCard key={index} kelas={kelas} />
      ))}
    </div>
  );
}

export default DashboardProfile;
