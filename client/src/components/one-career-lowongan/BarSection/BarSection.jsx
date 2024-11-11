import React from "react";

function BarSection() {
  return (
    <div className="font-heebo text-[#3F4041]">
      <div className="md:hidden flex">
        <div
          className=" font-semibold p-7 rounded-lg border-none w-screen h-[120px] text-[18px] flex flex-row "
          style={{
            boxShadow: "2px 2px 12px 0px #0101011A",
          }}
        >
          <button className="py-3 px-5 rounded-lg bg-white text-black  w-full border-2 border-black">
            Bagikan
          </button>
          <button className="py-3 px-5 rounded-lg ml-10 bg-black text-white w-full border-2 border-black">
            Lamar sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

export default BarSection;
