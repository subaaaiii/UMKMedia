import React, { useEffect, useRef, useState } from "react";
import HeadSection from "../../components/tentang-kelas/head-section/HeadSection";
import MainMateri from "../../components/tentang-kelas/main-materi/MainMateri";
import UlasanSection from "../../components/tentang-kelas/ulasan-section/UlasanSection";
import { api } from "../../api/api";
import { useParams } from "react-router-dom";

function TentangKelas() {
  const [kelas, setKelas] = useState([]);
  const [imageKelas, setImageKelas] = useState("");
  const [ulasan, setUlasan] = useState([]);
  const [deskripsi, setDeskripsi] = useState("");
  const [title, setTitle] = useState("");
  const [progress, setProgress] = useState(0);
  const { id } = useParams();

  const abortControllerRef = useRef(null);

  const fetchKelasUser = async () => {
    abortControllerRef.current?.abort();

    abortControllerRef.current = new AbortController();
    const token = JSON.parse(localStorage.getItem("auth"));
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/userKelas/detail`,
        {
          kelasID: Number(id),
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
          signal: abortControllerRef.current.signal,
        }
      );

      console.log(response);
      setImageKelas(response.data.image);
      setKelas(response.data.kelas_detail.kelas_materis);
      setUlasan(response.data.kelas_ratings);
      setTitle(response.data.nama);
      setDeskripsi(response.data.kelas_detail.deskripsi);
      setProgress(response.data.persentase);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchKelasUser();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center shrink-0">
      <HeadSection
        imageKelas={imageKelas}
        kelas={kelas}
        deskripsi={deskripsi}
      />
      <MainMateri kelas={kelas} progress={progress} />
      <UlasanSection ulasan={ulasan} />
    </div>
  );
}

export default TentangKelas;
