import React from "react";
import HeroSection from "../../components/konsultasi-bisnis/hero-section/HeroSection";
import FacilitySection from "../../components/konsultasi-bisnis/facility-section/FacilitySection";
import MentorSection from "../../components/konsultasi-bisnis/mentor-section/MentorSection";
import OfferSection from "../../components/konsultasi-bisnis/offer-section/OfferSection";
import FaqSectionKonsultasiBisnis from "../../components/konsultasi-bisnis/faq-section/faqSectionKonsultasiBisnis";


export default function KonsultasiBisnis() {
  return (
    <div className="flex flex-col justify-center items-center shrink-0">
      <HeroSection />
      <FacilitySection />
      <MentorSection />
      <OfferSection />
      <FaqSectionKonsultasiBisnis />
    </div>
  );
}
