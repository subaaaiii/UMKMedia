import React, { useEffect, useState } from "react";
import { partnerLogo } from "../../../constants";
import AOS from "aos";
import "aos/dist/aos";
function OurPartner() {
  const [partner, setPartner] = useState([
    {
      pic: partnerLogo.modalku,
      alt: "partner"
    },
    {
      pic: partnerLogo.Datapinter,
      alt: "partner"
    },
    {
      pic: partnerLogo.Kalodata,
      alt: "partner"
    }
  ]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" mt-[160px] hidden lg:flex flex-col justify-center items-center gap-[52px]">
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-[40px] font-bold leading-[60px]"
      >
        Partner Kami
      </h1>
      <div className="flex gap-[24px] ">
        {partner.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-[24px] rounded-[10px] shadow-customSm bg-whiteSmoke500"
          >
            <img
              src={logo.pic}
              alt="partner"
              className="object-contain w-[256px] h-[92px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurPartner;
