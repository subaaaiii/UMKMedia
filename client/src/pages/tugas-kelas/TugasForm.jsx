import React, { useEffect } from "react";
import TugasForm from "../../components/tugas-kelas/Tugas-submit";
// import { useParams } from "react-router-dom";

function TugasSubmit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center shrink-0">
      <TugasForm>

      </TugasForm>
    </div>
  );
}

export default TugasSubmit;
