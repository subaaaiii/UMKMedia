import React from "react";
import Marquee from "react-fast-marquee";
import carouselComunityPic from "./../../../../constants/carouselComunityPic";

const dataImg = [
  carouselComunityPic.carouselComunityPic01,
  carouselComunityPic.carouselComunityPic02,
  carouselComunityPic.carouselComunityPic03,
  carouselComunityPic.carouselComunityPic04,
  carouselComunityPic.carouselComunityPic05,
  carouselComunityPic.carouselComunityPic06,
  carouselComunityPic.carouselComunityPic07,
  carouselComunityPic.carouselComunityPic08,
  carouselComunityPic.carouselComunityPic09,
  carouselComunityPic.carouselComunityPic10,
  carouselComunityPic.carouselComunityPic11,
  carouselComunityPic.carouselComunityPic12,
];

function carouselComunity() {
  return (
    <div className="absolute z-0 w-full h-[844px] lg:h-[612px]">
      <div className="hidden lg:flex lg:flex-col h-[844px] lg:h-[612px] justify-center">
        <Marquee
          direction="right"
          play="true"
          className="brightness-[0.2] mb-[60px] "
        >
          {dataImg?.map((pic, index) => (
            <div key={index}>
              <img
                src={pic}
                className="w-[164px] h-[164px] lg:w-[200px] lg:h-[200px] mr-[240px] rounded-lg object-cover "
                alt="client1"
              />
            </div>
          ))}
        </Marquee>
        <Marquee play="true" className="brightness-[0.2]">
          {dataImg?.map((pic, index) => (
            <div key={index}>
              <img
                src={pic}
                className="w-[164px] h-[164px] lg:w-[200px] lg:h-[200px] mr-[240px] rounded-lg object-cover"
                alt="client1"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="lg:hidden flex flex-row flex-nowrap w-full h-full justify-center items-center">
        <Marquee
          direction="up"
          play="true"
          className="brightness-[0.2] mr-[5%] w-50"
        >
          {dataImg?.map((pic, index) => (
            <div key={index}>
              <img
                src={pic}
                className="w-[164px] h-[164px] m-[30px] rounded-lg object-cover"
                alt="client1"
              />
            </div>
          ))}
        </Marquee>
        <Marquee
          direction="down"
          play="true"
          className="brightness-[0.2] w-50"
        >
          {dataImg?.map((pic, index) => (
            <div key={index}>
              <img
                src={pic}
                className="w-[164px] h-[164px] m-[30px] rounded-lg object-cover"
                alt="client1"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default carouselComunity;
