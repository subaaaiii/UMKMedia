import React, { useEffect, useState } from "react";
import { icon, clientPic } from "../../../constants";
import AOS from "aos";
import "aos/dist/aos.css";
function ReviewSection() {
  const [dataMessenger, setDataMessenger] = useState([
    {
      nama: "Alycia",
      perushaaan: "Leiron Skincare",
      deskripsi:
        "Bisnisku sekarang lebih banyak audience, akhirnya berpengaruh juga ke live shopee dan menambah customer baru.",
      bigPic: clientPic.client07,
      smallPic: clientPic.client07,
    },
    {
      nama: "Astri",
      perushaaan: "Bites Gummy World",
      deskripsi:
        "Puas sama hasil kerja Growlab, kerjanya cepat khususnya saat revisi konten, ada service live streaming di marketplace dan hasilnya oke.",
      bigPic: clientPic.client04,
      smallPic: clientPic.client04,
    },
    {
      nama: "Afwi",
      perushaaan: "Barokah Herbal Center",
      deskripsi:
        "Di Growlab kita mau tanya apa, perlu apa, semuanya bisa dibantu, ilmunya dikasih semua juga, alhamdulilah.",
      bigPic: clientPic.client03,
      smallPic: clientPic.client03,
    },
    {
      nama: "Hendra",
      perushaaan: "Yesamalika",
      deskripsi:
        "Growlab memegang komitmen yang dijanjikan, tidak muluk-muluk, prosesnya terukur,sistematis dan selalu di monitor, jadi kami merasa selalu didampingi. Setelah dibantu growlab bisnis saya terasa perubahan yang signifikan, contohnya ada kenaikan GMV yang diimbangi dengan ROAS yang bagus.",
      bigPic: clientPic.client12,
      smallPic: clientPic.client12,
    },
    {
      nama: "Anton",
      perushaaan: "Pecel Kawi",
      deskripsi:
        "Pelayanannya baik, dari sisi tim juga mengusahakan yang terbaik sehingga dari sisi client merasa ditemani untuk berkembang bersama.",
      bigPic: clientPic.client09,
      smallPic: clientPic.client09,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const updateStateWithIndex = () => {
    if (currentIndex < dataMessenger.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateStateWithIndex();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, dataMessenger]);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" flex flex-col items-center mt-[66px] lg:mt-[160px] px-[16px] xl:px-0 max-w-[952px] gap-[52px]">
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="max-w-[564px] text-black500 text-[24px] lg:text-[40px] font-bold leading-[36px] lg:leading-[60px] text-center"
      >
        Pendapat Mereka Tentang Growlab
      </h1>
      <div className="w-full gap-[24px] flex flex-col lg:flex-row justify-center ">
        <div className="w-full gap-[24px] p-[24px] flex flex-col lg:flex-row items-center shadow-customSm rounded-[10px]">
          <div className="w-[326px] h-[260px] lg:min-w-[384px] lg:min-h-[288px] rounded-[10px] overflow-hidden ">
            <img
              src={dataMessenger[currentIndex].bigPic}
              alt="mesengger"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="w-full ">
            <div className="gap-[8px]">
              <h1 className=" text-[18px]  lg:text-[22px] font-bold leading-[28px] lg:leading-[32px]">
                {dataMessenger[currentIndex].nama}
              </h1>
              <p className=" text-[14px] lg:text-[16px] font-medium leading-[20px] lg:leading-[24px] text-indigoDye500">
                {dataMessenger[currentIndex].perushaaan}
              </p>
            </div>
            <div className="relative mt-[52px]">
              <p className="absolute -top-[40px] text-[32px] lg:text-[70px] font-bold leading-normal lg:leading-[72px]  opacity-[0.25] text-black500">
                "
              </p>
              <p className="text-[14px] lg:text-[16px] font-light leading-[20px] lg:leading-[24px] ">
                {dataMessenger[currentIndex].deskripsi}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row lg:flex-col gap-[16px]">
          {dataMessenger.map((data, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="relative w-[48px] h-[48px] lg:w-[60px] lg:h-[60px]  cursor-pointer"
            >
              <img
                src={icon.vector5}
                alt="icon"
                className={`${
                  currentIndex === index ? "flex" : "hidden"
                } absolute -right-[1px] -top-[1px]`}
              />
              <div className="w-full h-full rounded-[10px] border-[4px] border-whiteSmoke600 flex justify-center items-center">
                <img
                  src={data.smallPic}
                  alt="small-messenger"
                  className="object-cover  w-[34px] h-[34px] lg:w-[44px] lg:h-[44px] rounded-[4px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
