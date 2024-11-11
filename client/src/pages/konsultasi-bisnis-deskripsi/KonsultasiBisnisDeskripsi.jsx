import React from "react";
import HeroSection from './../../components/konsultasi-bisnis-deskripsi/hero-section/HeroSection';
import DescriptionSection from './../../components/konsultasi-bisnis-deskripsi/description-section/DescriptionSection';

export default function KonsultasiBisnisDeskripsi() {
  return (
    <div className="flex flex-col justify-center items-center shrink-0">
      <HeroSection />
      <DescriptionSection />
    </div>
  );
}
