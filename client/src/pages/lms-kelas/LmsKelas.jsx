import React, { useEffect, useState } from "react";
import MainSection from "../../components/lms-kelas/main-section/MainSection";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";

function LmsKelas() {
  const [isFull, setIsFull] = useState(false);
  return (
    <div
      className={`${
        isFull
          ? " absolute w-screen h-screen overflow-hidden top-0 left-0"
          : "static"
      } flex w-full h-full flex-col  justify-start overflow-x-hidden items-center shrink-0`}
    >
      <MainSection isFull={isFull} setIsFull={setIsFull} />
    </div>
  );
}

export default LmsKelas;
