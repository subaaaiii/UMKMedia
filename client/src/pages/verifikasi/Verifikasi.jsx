import React from "react";
import MainSection from "../../components/verifikasi/main-section/MainSection";
import { api } from "../../api/api";
import Logo from "../../components/global-component/logo/Logo";

function Verifikasi() {
  const getUser = async () => {
    try {
      // const response = await api.get("")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex  flex-col justify-center items-center shrink-0">
      <Logo />
      <MainSection />
    </div>
  );
}

export default Verifikasi;
