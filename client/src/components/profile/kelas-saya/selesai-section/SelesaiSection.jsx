import React, { useEffect, useState } from "react";
import { api } from "../../../../api/api";
import KelasCard from "../../../global-component/card/kelas-card/KelasCard";

export default function SelesaiSection() {
  const [kelas, setKelas] = useState([]);

  const fetchKelas = async () => {
    const token = JSON.parse(localStorage.getItem("auth"));
    try {
      const response = await api.get(
        `${process.env.REACT_APP_API_BASE_URL}/userKelas/complete`,
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
      <div>
      {kelas.map((kelas,  index) => (
        <KelasCard key={index} kelas={kelas} />
      ))}
    </div>
  );
}
