import React from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { useParams } from "react-router-dom";
import ButtonWhiteSmoke500 from "./../../global-component/button/button-whitesmoke500/ButtonWhiteSmoke500";
import CarouselComunity from "./carousel-comunity/CarouselComunity";

export default function JoincomunitySection() {
  const { title } = useParams();

  let index = 1;
  if (title === "komunitas-bisnis") {
    index = 0;
  }
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <div className="bg-[#0F1011] bg-cover mt-[60px] lg:mt-[160px] max-w-screen-2xl  w-full h-[844px] lg:h-[612px] flex flex-col items-center gap-[56px] justify-center min-h-screen top-0 lg:sticky">
      <div className="z-10 flex flex-col items-center gap-[56px] justify-center min-h-screen">
        <div
          // data-aos="fade-up"
          // data-aos-duration="1000"
          className="flex flex-col gap-[8px] lg:gap-[16px] "
        >
          <h1 className="text-[24px] lg:text-[40px] w-[358px] font-bold leading-[36px] lg:leading-[60px] lg:w-[564px] text-center text-whiteSmoke500">
            Temukan Momen Berkualitas Bersama Komunitas
          </h1>
        </div>
        {/* <button className="flex bg-black500 hover:bg-whiteSmoke800 px-[64px] py-[16px] justify-center items-center rounded-[10px] w-[260px]">
        <p className="shrink-0 text-whiteSmoke500 text-[16px] font-medium leading-[24px]">
          
        </p>
      </button> */}
        <a
          href={
            index === 0
              ? "https://docs.google.com/forms/d/e/1FAIpQLSdtiVnJeZjVb6-tWc_HKKZZvi_ZppZeSYzgRcQCygOL7sp-5w/viewform"
              : "https://docs.google.com/forms/d/1GBs1hbfjfJTUjLnuBHK4nAaFg0o4npZp2tu-iXOjd9U/edit?sharingaction=ownershiptransfer&ts=64ef08b3"
          }
          target="_blank"
          rel="noreferrer"
        >
          <ButtonWhiteSmoke500
            TEXT_BUTTON={"Gabung Komunitas"}
            WIDTH={"w-[260px]"}
          />
        </a>
      </div>
      <CarouselComunity />
    </div>
  );
}
