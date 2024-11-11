import React from "react";
import Marquee from "react-fast-marquee";
import { clientPic, newsPic } from "../../../../constants";

const dataImg = [
  clientPic.client01,
  clientPic.client02,
  clientPic.client03,
  clientPic.client04,
  clientPic.client05,
  clientPic.client06,
  clientPic.client07,
  clientPic.client08,
  clientPic.client09,
  clientPic.client10,
  clientPic.client11,
  clientPic.client12,
];

function ClientCarousel() {
  return (
    <>
      <Marquee
        gradient
        gradientColor="#F4F4F4"
        gradientWidth={200}
        autoFill
        className=""
      >
        {dataImg?.map((pic, index) => (
          <img
            loading="lazy"
            key={index}
            src={pic}
            className="object-cover  w-[120px] mx-[12px] sm:w-[240px] h-[90px] sm:h-[180px] rounded-[10px] "
            alt="client1"
          />
        ))}
      </Marquee>
    </>
  );
}

export default ClientCarousel;
