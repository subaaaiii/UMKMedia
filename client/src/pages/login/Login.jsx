import React, { useEffect } from "react";
import HeadLogin from "../../components/login/head-login/HeadLogin";
import MainSection from "../../components/login/main-section/MainSection";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center shrink-0">
      <HeadLogin />
      <MainSection />
    </div>
  );
}

export default Login;
