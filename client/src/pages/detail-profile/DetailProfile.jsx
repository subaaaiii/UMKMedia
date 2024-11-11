import React, { useEffect } from "react";
import MainSection from "../../components/detail-profile/main-section/MainSection";

function DetailProfile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col justify-start   w-full max-w-[687px] items-center shrink-0">
      <MainSection />
    </div>
  );
}

export default DetailProfile;
