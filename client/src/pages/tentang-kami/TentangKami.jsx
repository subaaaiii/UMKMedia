import React from "react";
import HeroSection from "../../components/tentang-kami/hero-section/HeroSection";
import TeamSection from "../../components/tentang-kami/team-section/TeamSection";

function TentangKami() {
    return (
    <div className=" flex flex-col justify-center items-center shrink-0">
        <HeroSection/>
        <TeamSection/>
    </div>
  );
}

export default TentangKami;