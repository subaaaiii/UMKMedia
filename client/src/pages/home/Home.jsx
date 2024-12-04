import React, { useEffect } from "react";
import HeroSection from "../../components/home/hero-section/HeroSection";
import PilarCaousel from "../../components/home/pilar_section/PilarCarousel";
import ClientSection from "../../components/home/client-section/ClientSection";
import AboutSection from "../../components/home/about-section/AboutSection";
import ServiceSection from "../../components/home/service-section/ServiceSection";
import ReviewSection from "../../components/home/review-section/ReviewSection";
import NewsSection from "../../components/home/news-section/NewsSection";
import ComunitySection from "../../components/home/comunity-section/ComunitySection";
import Faq from "../../components/home/faq/Faq";
import OurPartner from "../../components/home/our-partner/OurPartner";
import UlasanSection from "../../components/home/ulasan-section/ulasan";
import JoinSection from "../../components/home/join-section/JoinSection";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" flex flex-col justify-center items-center shrink-0">
      <HeroSection />
      <ClientSection />
      <AboutSection />
      <ServiceSection />
      <ReviewSection />
      <NewsSection />
      <ComunitySection />
      <Faq />
      <JoinSection />
    </div>
  );
}

export default Home;
