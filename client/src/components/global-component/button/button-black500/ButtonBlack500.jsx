import React from "react";

function ButtonBlack500({ WIDTH, TEXT_BUTTON }) {
  return (
    <>
      <button
        className={`flex mx-[5px] sm:mx-0 ${WIDTH} px-[64px] py-[16px] justify-center items-center bg-black500 hover:bg-whiteSmoke800 rounded-[10px]`}
      >
        <p className="text-whiteSmoke500 shrink-0 font-medium text-[16px] leading-[24px]">
          {TEXT_BUTTON}
        </p>
      </button>
    </>
  );
}

export default ButtonBlack500;
