import React from "react";
import { images } from "../../../constants";

function HeadRegister() {
  return (
    <div className="flex bg-black500 w-full h-[276px] 2xl:max-w-[1080px]">
      <img
        src={images.headerLogin}
        alt="head"
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default HeadRegister;
