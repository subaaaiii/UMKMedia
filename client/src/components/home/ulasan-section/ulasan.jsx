import React, { useEffect, useState } from "react";
import AOS from "aos";
import ulasanLogo from "../../../constants/ulasanLogo";
import "aos/dist/aos";

function UlasanSection() {
  const [ulasan, setUlasan] = useState([
    {
      pic: ulasanLogo.kumparan,
      alt: "Kumparan",
      href: "https://kumparan.com/millennial/growlab-dorong-pertumbuhan-umkm-melalui-digitalisasi-yang-berkelanjutan-22dsAk6wBaL"
    },
    {
      pic: ulasanLogo.wartaEkonomi,
      alt: "Warta Ekonomi",
      href: "https://wartaekonomi.co.id/tag/growlab"
    },
    {
      pic: ulasanLogo.cnbc,
      alt: "CNBC Indonesia",
      href: "https://www.cnbcindonesia.com/entrepreneur/20240429172022-25-534389/pengusaha-umkm-simak-platform-ini-bisa-dongkrak-bisnis-10x-lipat"
    },
    {
      pic: ulasanLogo.startmeup,
      alt: "Startmeup",
      href: "https://www.startsmeup.id/2024/04/pengusaha-umkm-simak-platform-ini-bisa.html"
    },
    {
      pic: ulasanLogo.gaptekin,
      alt: "Gaptekin",
      href: "https://gaptekin.com/berita/8588/pengusaha-umkm-simak-platform-ini-bisa-dongkrak-bisnis-10x-lipat/"
    },
  ])

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" mt-[160px] flex flex-col justify-center items-center gap-[52px] pb-[52px]">
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-[40px] font-bold leading-[60px]"
      >
        Telah diulas oleh
      </h1>
      <div className="grid grid-cols-3 gap-[24px]">
        {ulasan.slice(0, 3).map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-[24px] rounded-[10px] shadow-customSm bg-whiteSmoke500 hover:bg-white transition-all duration-150"
          >
            <a href={logo.href} target="blank" rel="noopener noreferrer">
              <img
                src={logo.pic}
                alt={logo.alt}
                className="object-contain w-[256px] h-[92px]"
              />
            </a>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-[24px]">
        {ulasan.slice(3, 5).map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-[24px] rounded-[10px] shadow-customSm bg-whiteSmoke500 hover:bg-white transition-all duration-150"
          >
            <a href={logo.href} target="blank" rel="noopener noreferrer">
              <img
                src={logo.pic}
                alt={logo.alt}
                className="object-contain w-[256px] h-[92px]"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UlasanSection;