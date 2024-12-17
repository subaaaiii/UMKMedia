import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Progress } from "@chakra-ui/react";
import { images } from "../../../../constants";
import { Spinner } from "@chakra-ui/react";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

export default function KelasCard(kelas, data) {
  const navigate = useNavigate();

  const theme = extendTheme({
    components: {
      Progress: {
        baseStyle: {
          filledTrack: {
            bg: "#184C7B",
          },
          track: {
            bg: "#66666633",
          },
        },
      },
    },
  });

  const handleCertificate = () => {
    navigate("/certificate", { state: { kelasName: kelas.kelas.nama } });
  };

  return (
    <ChakraProvider theme={theme}>
      <div className="flex flex-col px-[11px] lg:px-2 lg:flex-row w-[358px] h-[216px] sm:w-[500px] lg:w-[761px] lg:h-[228px] flex-shrink pt-[17px] border rounded-[10px] border-[rgba(102,102,102,0.2)] mb-[30px] shadow-md shadow-gray-300">
        <div className="flex w-[78px] h-[78px] lg:w-[150px] lg:h-[150px] lg:ml-[2px] lg:mr-[28px]">
          <img
            src={
              `${process.env.REACT_APP_SERVER_URL}images/kelas/${kelas.kelas.image}` ||
              images.Linkedin
            }
            alt={kelas.kelas.nama || "No Data"}
            className="w-full h-full object-cover rounded-[10px]"
          />
          <h1 className="lg:hidden ml-[11px] font-medium text-[14px] lg:text-[24px] leading-[20px] lg:leading-[28px] text-black500 w-[234px] h-[56px] flex-shrink-0 mb-[43px]">
            {kelas.kelas.nama || "No Data"}
          </h1>
        </div>
        <div className="py-[4px] w-fit sm:w-full lg:w-[424px]">
          <h1 className="hidden lg:block font-medium text-[14px] lg:text-[24px] leading-[20px] lg:leading-[28px] text-black500 w-[234px] lg:w-[300px] h-[56px] flex-shrink-0 mb-[43px]">
            {kelas.kelas.nama || "No Data"}
          </h1>
          <div className="flex items-center justify-center lg:justify-start">
            <Progress
              className="w-[311px] h-[8px] lg:w-[372px] lg:h-[14px] sm:w-full"
              borderRadius="50px"
              value={kelas.kelas.persentase}
            />
            <p className="ml-[4px] lg:ml-[8px] text-[11px] lg:text-[18px] leading-[28px]">
              {kelas.kelas.persentase}%
            </p>
          </div>
          <p className="text-[11px] lg:text-[18px] font-normal leading-[28px] text-black">
            {kelas.kelas.kelas_regists[0].progress} /{" "}
            {kelas.kelas.total_materi || "No Data"} Submateri
          </p>
          {/* <p className="text-[11px] lg:text-[18px] font-normal leading-[28px] text-black">
            {kelas.kelas.kelas_regists[0].progress} /{" "}
            {kelas.kelas.total_materi || "No Data"} Tugas
          </p> */}
          <p className="text-[11px] lg:text-[18px] font-normal leading-[28px] text-black">
            0 / 1 Tugas
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-32 h-fit p-[10px] lg:ml-[23px] bg-whiteSmoke500 border border-[#66666680] rounded-[10px] mb-2">
            <Link
              to={`/tentang-kelas/${kelas.kelas.id}`}
              className="font-medium text-md leading-[24px] lg:leading-[28px] font-[#0F1011]"
            >
              Lihat Kelas
            </Link>
          </div>
          <div className="flex items-center justify-center w-32 h-fit p-[10px] lg:ml-[23px] bg-whiteSmoke500 border border-[#66666680] rounded-[10px] mb-2 px-4">
            <Link
              to={`/tugas`}
              className="font-medium text-md leading-[24px] lg:leading-[28px] font-[#0F1011]"
            >
              Lihat Tugas
            </Link>
          </div>
          {kelas.kelas.persentase == 100 && (
            <div className="flex items-center justify-center w-32 h-fit p-[10px] lg:ml-[23px] bg-whiteSmoke500 border border-[#66666680] rounded-[10px] mb-2 px-4">

              <button
                onClick={handleCertificate}
                className="font-medium text-md leading-[24px] lg:leading-[28px] font-[#0F1011]"
              >
                Sertifikat
              </button>
            </div>
          )}
        </div>
      </div>
    </ChakraProvider>
  );
}

