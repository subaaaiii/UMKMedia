import React from "react";
import HeroSection from "../../components/layanan/hero-section/HeroSection";
import ServiceSection from "../../components/layanan/service-section/ServiceSection";
import HowtodoitSection from "../../components/layanan/howtodoit-section/HowtodoitSection";
import FaqSection from "../../components/layanan/faq-section/FaqSection";
import JoinSection from "../../components/layanan/join-section/JoinSection";

// import LanggananSection from "../../components/layanan/webapp/langganan/LanggananSection";

const Layanan = () => {
  return (
    <div className=" flex flex-col justify-center items-center shrink-0">
      <HeroSection />
      <ServiceSection />
      <HowtodoitSection />
      {/* <LanggananSection /> */}
      <FaqSection />
      <JoinSection />
    </div>
  );
};

export default Layanan;
