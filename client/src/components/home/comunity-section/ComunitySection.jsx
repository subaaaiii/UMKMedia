import React, { useRef, useState } from "react";
import { data } from "../../../constants";
import ButtonWhiteSmoke500 from "../../global-component/button/button-whitesmoke500/ButtonWhiteSmoke500";
import { useNavigate } from "react-router-dom";

function ComunitySection() {
  const title = useRef();
  const [isScroll, setIsScroll] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navigate = useNavigate();


  const handleScroll = (e) => {
    if (isScroll) return;
    const currentWheelPos = e.deltaY;

    if (currentWheelPos > prevScrollPos) {
      setScrolled(true);
    } else if (currentWheelPos < prevScrollPos) {
      setScrolled(false);
    }

    setPrevScrollPos(currentWheelPos);

    setIsScroll(true);

    setTimeout(() => {
      setIsScroll(false);
    }, 500);
  };

  return (
    <div
      onWheel={handleScroll}
      className=" relative gap-[100px] flex flex-col  justify-start items-center  py-[80px] bg-komunitySection bg-no-repeat px-[5px] sm:px-[100px]  w-full 2xl:max-w-[1280px]  h-[836px] xl:h-[832px] bg-cover mt-[160px]  "
    >
      <div
        ref={title}
        className=" w-full  top-0 flex flex-col lg:flex-row gap-[32px] lg:gap-0 items-center lg:items-start justify-between  z-10"
      >
        <div className="flex flex-col h-[250px] lg:h-[340px]  overflow-hidden">
          {data.dataKomunitas.map((el, index) => (
            <div
              key={index}
              className={`${
                scrolled ? "-translate-y-full" : " translate-y-0"
              } gap-[52px] flex flex-col  items-center lg:items-start duration-300 min-h-[340px] `}
            >
              <div className="flex flex-col max-w-[472px] gap-[8px] lg:gap-[16px]">
                <h1 className=" text-whiteSmoke500 text-[22px] lg:text-[40px] text-center lg:text-start font-bold leading-[32px] lg:leading-[60px]">
                  {el.title}
                </h1>
                <p className="text-[16px] lg:text-[18px] font-light leading-[24px] lg:leading-[28px] text-whiteSmoke600 text-center lg:text-start">
                  Ayo bergabung dengan para penggerak industri kreatif untuk
                  bertukar ide, mendapatkan inspirasi, dan memperluas
                  jaringanmu.
                </p>
              </div>
              <div onClick={() => navigate(el.navi)}>
                <ButtonWhiteSmoke500
                  WIDTH={"w-[260px]"}
                  TEXT_BUTTON={"Selengkapnya"}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center  mx-[5px] xl:mx-0 max-w-[358px]  xl:max-w-[558px]  h-[432px] xl:h-[672px] overflow-hidden rounded-[10px]">
          {data.dataKomunitas.map((el, index) => (
            <div
              key={index}
              className={`${
                index !== 0
                  ? scrolled
                    ? "-translate-y-full opacity-100"
                    : " translate-y-0 opacity-0"
                  : scrolled
                  ? "translate-y-0 scale-95 opacity-50 "
                  : "translate-y-0 scale-100 opacity-100 "
              } flex flex-col duration-500 items-center  xl:w-[558px] rounded-[10px] min-h-[488px] xl:min-h-[672px] overflow-hidden`}
            >
              <img
                loading="lazy"
                src={el.pic}
                alt="komunitas"
                className={`object-cover gap-[52px] flex flex-col  w-full h-full rounded-[10px]`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComunitySection;
