import React, { useEffect, useState } from "react";
import HeroSection from "../../components/kelas-bisnis/hero-section/HeroSection";
import MainSection from "../../components/kelas-bisnis/main-section/MainSection";

function KelasBisnis() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center shrink-0">
      <HeroSection search={search} setSearch={setSearch} />
      <MainSection search={search} setSearch={setSearch} />
    </div>
  );
}

export default KelasBisnis;
