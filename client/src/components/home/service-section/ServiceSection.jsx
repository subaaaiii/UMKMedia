import React, { useEffect, useState } from "react";
import { data } from "../../../constants";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceCard from "./service-card/ServiceCard";

function ServiceSection() {
  const [onHover, setOnHover] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" flex flex-col  bg-serviceSection w-full 2xl:max-w-[1280px]  bg-cover h-full xl:h-[1448px] items-center relative    xl:overflow-y-visible">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex flex-col items-center justify-center  mt-[80px] gap-[16px] w-full lg:w-[564px] mb-[52px]"
      >
        <h1 className="text-[22px] lg:text-[40px] font-bold  text-center leading-[32px] lg:leading-[60px] text-whiteSmoke500">
          Layanan Kami
        </h1>
        <p className="text-[14px] lg:text-[20px] font-light text-center leading-[20px] lg:leading-[28px] text-whiteSmoke600">
          Kami memiliki beragam layanan yang tepat untuk membantu mewujudkan
          kesuksesan dalam bisnis kamu
        </p>
      </div>
      <div className="w-fit flex justify-center">
        <div className="w-full xl:w-[1080px]  mb-[100px]  grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-y-[52px] gap-x-[24px]">
          {data?.dataService?.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              onHover={onHover}
              setOnHover={setOnHover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
