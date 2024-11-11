import React from "react";
import teamPic from "../../../constants/teamPic";

function HeroSection() {
  return (
    <div
      className="bg-cover bg-center px-[16px] sm:px-[100px] max-w-screen-2xl w-full h-[512px] md:h-[712px] flex flex-col flex-initial"
      style={{ backgroundImage: `url(${teamPic.heroPic})` }}
    >
      <div className="bg-[rgba(8,34,52,0.9)] w-[360px] h-[512px] md:h-[712px] md:w-[525px] flex flex-initial flex-shrink items-center justify-center">
        <div className="w-[350px] h-[510px] md:h-[528px] md:w-[477px] flex flex-col flex-initial gap-[16px] justify-center items-center">
          <p className="text-[28px] md:text-[38px] lg:text-[48px] font-bold font-[Heebo] leading-[35px] md:leading-[52px] lg:leading-[72px] text-whiteSmoke500">
            Sebuah perjalanan panjang dengan satu mimpi yang besar
          </p>
          <p className="text-[16px] lg:text-[18px] font-light font-[Heebo] leading-[28px] text-whiteSmoke500">
            Growlab adalah end to end platform yang membantu bisnis dan UMKM
            mengembangkan usaha dan menaikkan omset melalui program
            pembelajaran, pendampingan, layanan jasa hingga evaluasi
          </p>
          <p className="text-[16px] lg:text-[18px] font-light font-[Heebo] leading-[28px] text-whiteSmoke500">
            Mempertemukan UMKM dan Pendamping UMKM dengan lebih mudah melalui
            komunitas kami yang tersebar di seluruh Indonesia dari berbagai
            jenis industri.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
