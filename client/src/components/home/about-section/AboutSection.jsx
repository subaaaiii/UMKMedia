import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" w-full mt-[44px] lg:mt-[80px] flex justify-center">
      <div className="bg-aboutSection bg-cover px-[16px] sm:px-[100px] w-full 2xl:max-w-[1280px] h-[584px] lg:h-[832px] flex justify-center items-center bg-fixed">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className=" w-full sm:max-w-[1080px] flex flex-col  justify-center items-start gap-[16px] mb-[52px]"
        >
          <h1 className="max-w-[564px] text-[22px] lg:text-[40px] font-bold leading-[32px] lg:leading-[60px] text-whiteSmoke500">
            Sebuah perjalanan panjang dengan satu mimpi yang besar
          </h1>
          <p className="max-w-[564px] text-[14px] lg:text-[18px] font-light leading-[20px] lg:leading-[28px] text-whiteSmoke600">
            Growlab adalah end to end platform yang membantu bisnis dan UMKM
            mengembangkan usaha dan menaikkan omset melalui program
            pembelajaran, pendampingan, layanan jasa hingga evaluasi
            <br />
            <br />
            Mempertemukan UMKM dan Pendamping UMKM dengan lebih mudah melalui
            komunitas kami yang tersebar di seluruh Indonesia dari berbagai
            jenis industri.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
