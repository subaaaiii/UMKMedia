import React, { useEffect, useState } from "react";
import { api } from "../../../api/api";
import KelasCard from "../../global-component/card/kelas-card/KelasCard";
import { filter } from "lodash";

function DashboardProfile() {
  const [kelas, setKelas] = useState([]); // Array untuk daftar kelas
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null); // null untuk data tunggal
  const [submission, setSubmission] = useState([]);

  // Ambil token dari localStorage
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

  // Ambil data kelas
  const fetchKelas = async () => {
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
      setKelas(response.data.data || []); // Pastikan default ke array kosong jika tidak ada data
      console.log("kelas ",response.data.data)
    } catch (error) {
      console.error("Error saat mengambil data kelas:", error.message);
    }
  };

  // Ambil data user
  const fetchUser = async () => {
    try {
      const response = await api.get(
        `${process.env.REACT_APP_API_BASE_URL}/user/one-user`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      setUser(response.data.data || {});
    } catch (error) {
      console.error("Error saat mengambil data user:", error.message);
    }
  };

  // Ambil data submission
  const fetchSubmission = async (kelasId) => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasSubmission/submissionByUser`,
        { id_kelas: kelasId },
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

  // useEffect untuk mengambil token
  useEffect(() => {
    fetchToken();
  }, []);

  // useEffect untuk mengambil data kelas dan user setelah token tersedia
  useEffect(() => {
    if (token) {
      fetchKelas();
      fetchUser();
    }
  }, [token]);

  // useEffect untuk mengambil data submission setelah data kelas tersedia
  useEffect(() => {
    const getSubmissions = async () => {
      if (kelas.length > 0) {
        for (const kelasItem of kelas) {
          await fetchSubmission(kelasItem.id);
        }
      }
    };

    getSubmissions();
  }, [kelas, user]); // Tambahkan `user` agar data submission diperbarui jika user.id berubah


  return (
    <div className="justify-start lg:mt-[10px] lg:px-0 w-fit lg:w-[fit] h-full lg:h-full gap-[12px]">
      <div className="p-[28px] flex flex-col items-left justify-center w-[358px] sm:w-[500px] lg:w-[761px] h-[79px] lg:h-[112px] bg-black500 text-whiteSmoke500 border border-grey rounded-[10px] shadow-[1px_1px_3px_rgba(128,128,128,0.3) gap-[4px]">
        <h1 className="font-bold text-[18px] lg:text-[32px]">
          Halo, {user?.nama_lengkap || "Pengguna"}!
        </h1>
        <p className="font-medium text-[12px] lg:text-[18px]">
          Mulai belajar lagi dan selesaikan course kamu.
        </p>
      </div>

      <h2 className="mt-[12px] lg:mt-[37px] mb-[7px] lg:mb-[17px] text-[14px] lg:text-[26px] font-medium text-[#666]">
        Lanjutkan progress terakhir kelas
      </h2>

      {Array.isArray(kelas) && kelas.length > 0 ? (
        kelas.map((kelasItem, index) => {
          return (
            <KelasCard
              key={index}
              kelas={kelasItem}
              submission={submission} // Kirim hanya submission terkait
            />
          );
        })
      ) : (
        <p className="text-gray-500">Belum ada kelas yang tersedia.</p>
      )}
    </div>
  );
}

export default DashboardProfile;
