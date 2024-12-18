import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../../../api/api";
import { Progress } from "@chakra-ui/react";
import { images } from "../../../../constants";
import { Spinner } from "@chakra-ui/react";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

export default function KelasCard(kelas) {
  const [token, setToken] = useState("");
  const dataKelas = useState(kelas);
  const idKelas = dataKelas[0].kelas.id
  const [submission, setSubmission] = useState([]);
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

  const fetchToken = () => {
    try {
      const storedToken = localStorage.getItem("auth");
      if (!storedToken) throw new Error("Token tidak ditemukan. Silakan login kembali.");
      const parsedToken = JSON.parse(storedToken);
      setToken(parsedToken);
    } catch (error) {
      console.error("Error saat mengambil token:", error.message);
      alert("Token tidak valid atau sudah kadaluarsa. Silakan login kembali.");
    }
  };

  const fetchSubmission = async (kelasId) => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasSubmission/submissionByUser`,
        { id_kelas: idKelas },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const submissions = response.data || [];
      setSubmission(submissions);
    } catch (error) {
      console.error("Error saat mengambil data submission:", error.message);
    }
  };

  const handleCertificate = () => {
    navigate("/certificate", { state: { kelasName: kelas.kelas.nama } });
  };


  // useEffect untuk mengambil token
  useEffect(() => {
    fetchToken();
  }, []);

  // useEffect untuk mengambil data kelas dan user setelah token tersedia
  useEffect(() => {
    if (token) {
      fetchSubmission();
    }
  }, [token]);

  useEffect(() => {
    if (submission[0]) {
      console.log("ini adlaah submission ", submission[0].is_accepted)
    }
  }, [submission]);

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
          <p className="text-[11px] lg:text-[18px] font-normal leading-[28px] text-black">
            {
              // Tampilkan status tugas berdasarkan submission
              submission[0]
                ? (submission[0].is_accepted === 0 || submission[0].is_accepted === false)
                  ? "0 / 1 Tugas"
                  : "1 / 1 Tugas"
                : "0 / 1 Tugas"
            }
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
              to={`/tugas/${kelas.kelas.id}`}
              className="font-medium text-md leading-[24px] lg:leading-[28px] font-[#0F1011]"
            >
              Lihat Tugas
            </Link>
          </div>
          {kelas.kelas.persentase == 100 &&
            submission[0] &&
            submission[0].is_accepted !== 0 &&
            submission[0].is_accepted !== false && (
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

