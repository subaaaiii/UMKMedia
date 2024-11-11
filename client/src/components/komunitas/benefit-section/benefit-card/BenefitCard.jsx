import React from "react";

export default function BenefitCard({ benefits }){
    return (
        <div className="relative flex md:flex-col w-full md:w-[252px] h-fit md:h-[400px] shrink-0 rounded-[10px] gap-[12px] shadow-customSm items-center p-5 ">
             <img src={benefits.pic} alt="" className="w-[49.5px] h-[39.75px] md:w-[160px] md:h-[160px] " />
             <div>
              <p className="w-fit text-[16px] md:text-[18px] font-bold leading-[24px] md:leading-[28px] mb-[10px] text-black500">{benefits.title}</p>
              <p className="w-fit text-[14px] md:text-[16px] font-light leading-[20px] md:leading-[24px] mb-[10px] text-black400 ">{benefits.deskripsi}</p>
             </div>
             
        </div>
      );
}