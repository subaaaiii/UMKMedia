import React from "react";

function ContentArtikel({ children }) {
  return (
    <div className="flex flex-col max-w-[358px] md:max-w-[1080px]  w-full px-[5px] xl:px-0 justify-center items-start mt-[52px] ">
      <p className="text-[16px] md:text-[18px] font-light leading-[28px] whitespace-pre-wrap">
        {children}
      </p>
    </div>
  );
}

export default ContentArtikel;
