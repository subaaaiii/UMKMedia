import React from "react";

function DescriptionKelasBisnis({ dataDetail }) {
  return (
    <div className="gap-[24px] flex flex-col items-start  w-full">
      <h1 className="text-[18px] md:text-[24px] font-bold leading-[28px] md:leading-[36px]">
        Deskripsi Kelas
      </h1>
      <p className="text-[16px] md:text-[18px] font-light leading-[24px] md:leading-[28px] text-black400  flex  flex-1 whitespace-pre-wrap">
        {dataDetail?.deskripsi || "no data"}
      </p>
    </div>
  );
}

export default DescriptionKelasBisnis;
