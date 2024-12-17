import React, { useEffect } from "react";
import SoalTugas from "../../components/tugas-kelas/Soal-Tugas";
import { useParams } from "react-router-dom";

function Tugas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  return (
    <div className="flex flex-col justify-center items-center shrink-0">
      <SoalTugas id={id} >
        
      </SoalTugas>
    </div>
  );
}

export default Tugas;
