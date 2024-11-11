import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../App.css";
import arrowImage from "../../../assets/pilar/Right.png";

const PilarCarousel = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full mt-[5px] lg:mt-[30px] flex justify-center">
      <div className="w-full max-w-[1280px] h-[830px] relative gap-[16px]">
        <Carousel
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute bottom-20 left-4 transform -translate-y-1/2 bg-transparent border-none cursor-pointer focus:outline-none"
              >
                <img
                  src={arrowImage}
                  alt="Previous"
                  className="rotate-180 w-full h-[830px]"
                />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute bottom-14 right-9 transform -translate-y-1/2 bg-transparent border-none cursor-pointer focus:outline-none"
              >
                <img
                  src={arrowImage}
                  alt="Next"
                  className="w-[56px] h-[48px] top-[14px] left-[9px]"
                />
              </button>
            )
          }
        >
          <div className="bg-pilarSection1 bg-cover px-[16px] sm:px-[100px] w-full h-[830px] bg-fixed relative gap-[10px] flex flex-col">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="ax-w-[564px] text-[40px] lg:text-[40px] font-bold leading-[60px] lg:leading-[60px] text-white mt-20"
            >
              <h1>Melalui 3 Pilar Program Utama Kami Yaitu</h1>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="max-w-[564px] text-[24px] lg:text-[18px] font-light leading-[36px] lg:leading-[36px] text-white text-left mt-[130px]"
            >
              <h2 className="max-w-[564px] text-[40px] lg:text-[36px] font-bold leading-[30px] lg:leading-[60px] text-white flex items-center">
                1. Pembelajaran
              </h2>
              <p>
                Growlab menyediakan berbagai jenis program <br />
                pembelajaran seputar bisnis khususnya
                <br />
                bisnis digital. Mulai dari digital course hingga
                <br />
                berbagai jenis event seperti seminar, webinar
                <br />
                dan bootcamp.
              </p>
            </div>
          </div>
          <div className="bg-pilarSection2 bg-cover px-[16px] sm:px-[100px] w-full h-[830px] bg-fixed relative gap-[10px] flex items-center">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="max-w-[873px] text-[14px] lg:text-[18px] font-light leading-[36px] lg:leading-[36px] text-whiteSmoke600 text-left"
            >
              <h2 className="max-w-[873px] text-[40px] lg:text-[36px] font-bold leading-[30px] lg:leading-[60px] text-white">
                2. Pendampingan
              </h2>
              <p className="text-[24px] lg:text-[24px] font-medium leading-[36px] lg:leading-[36px] text-white">
                Growlab memiliki 2 program pendampingan efektif yaitu :
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="max-w-[873px] text-[14px] lg:text-[18px] lg:leading-[36px] text-whiteSmoke600" 
              >
                <h3 className="font-bold mt-[30px]">
                  Growlab Business Accelerator (GBA)
                </h3>
                <p>
                  GBA merupakan program bimbingan intensif dengan sistem belajar
                  dan praktek
                  <br />
                  yang disusun secara terstruktur sehingga semua rangkaian
                  program tersebut akan
                  <br />
                  langsung berdampak pada bisnis secara menyeluruh.
                </p>
                <h3 className="font-bold mt-[30px]">
                  Performance Marketing Partnership
                </h3>
                <p>
                  Program ini merupakan program kolaborasi untuk membantu
                  mengembangkan
                  <br />
                  bisnis para anggota komunitas melalui bantuan strategi
                  optimasi toko, iklan hingga
                  <br />
                  pembuatan konten dengan sistem profit sharing atau bagi hasil.
                  Program ini
                  <br />
                  bersifat kolaborasi sehingga tidak ada biaya jasa tambahan
                  (gratis biaya layanan).
                </p>
              </div>
            </div>
          </div>
          <div className="bg-pilarSection3 bg-cover px-[16px] sm:px-[100px] w-full h-[830px] bg-fixed relative gap-[10px] flex items-center">
            <div 
              data-aos="fade-up"
              data-aos-duration="1000"
              className="max-w-[564px] text-[14px] lg:text-[18px] font-light leading-[36px] lg:leading-[36px] text-whiteSmoke600 text-left"
            >
              <h2 className="max-w-[564px] text-[40px] lg:text-[36px] font-bold leading-[30px] lg:leading-[60px] text-white">
                3. Pendanaan
              </h2>
              <p>
                Kami juga menyediakan program pendanaan baik dalam bentuk{" "}
                <br></br>
                pinjaman maupun investasi kepada para anggota komunitas yang{" "}
                <br></br>
                memiliki bisnis dengan potensi dan pertumbuhan yang baik.{" "}
                <br></br>
                Melalui program pendanaan yang tepat sasaran, diharapkan terjadi{" "}
                <br></br>
                pertumbuhan bisnis yang signifikan dan eksponensia
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PilarCarousel;
