import React, { useEffect } from "react";
import HeadRegister from "../../components/register/head-register/HeadRegister";
import MainSection from "../../components/register/main-section/MainSection";

function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center shrink-0">
      <HeadRegister />
      <MainSection />
    </div>
  );
}

export default Register;
