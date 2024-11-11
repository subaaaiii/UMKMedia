import React from "react";
import { images } from "../../../constants";

function HeadLogin() {
  return (
    <div className="flex  w-full h-[276px] 2xl:max-w-[1080px]">
      <img
        src={images.headerLogin}
        alt="head"
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default HeadLogin;
