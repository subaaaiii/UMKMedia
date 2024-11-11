import React, { useEffect } from "react";
import ClientCarousel from "./clientCarousel/ClientCarousel";
import AOS from "aos";
import "aos/dist/aos.css";

function ClientSection() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" lg:my-[80px] gap-[32px] lg:gap-[52px] flex flex-col items-center">
      <h1
        className="max-w-[488px] text-[14px] lg:text-[24px] font-medium leading-[20px] lg:leading-[36px] text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Kami dipercaya oleh{" "}
        <span className="font-bold text-indigoDye500"> 500+</span> UMKM dalam
        mencapai kesuksan mereka
      </h1>
      <div className=" max-w-full 2xl:max-w-[1080px] overflow-hidden   ">
        <ClientCarousel />
      </div>
    </div>
  );
}

export default ClientSection;
