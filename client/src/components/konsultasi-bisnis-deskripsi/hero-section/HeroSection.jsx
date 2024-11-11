import React from "react";
import consultationBusinessPic from "../../../constants/consultationBusinessPic";

export default function HeroSection() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-[center_top_-20px] px-[16px] sm:px-[100px] w-full max-w-screen-2xl h-[287px] lg:h-[853px] flex flex-col text-black500"
      style={{ backgroundImage: `url(${consultationBusinessPic.CB_Hero_1})` }}
    ></div>
  );
}
