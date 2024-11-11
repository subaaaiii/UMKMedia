import React from "react";
import { logo } from "../../../constants";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className="w-full   flex    justify-start   items-center     px-[5px] lg:px-[100px] 2xl:p-0  2xl:max-w-[1080px]"
    >
      <div className="w-[100px] h-[100px] cursor-pointer  flex    justify-center  items-center">
        <img
          src={logo.growlab}
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Logo;
