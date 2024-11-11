import React from "react";

function ButtonBorderBlack500({ TEXT_BUTTON, WIDTH, RESPONSIF }) {
  return (
    <>
      <button
        className={`${RESPONSIF} flex-auto ${WIDTH} px-[32px] py-[16px] justify-center items-center rounded-[10px] border-[1px] border-black500 bg-whiteSmoke500`}
      >
        <p className="w-[116px] flex-auto shrink-0 leading-[24px] font-medium text-[16px] text-[#0F1011] text-center ">
          {TEXT_BUTTON}
        </p>
      </button>
    </>
  );
}

export default ButtonBorderBlack500;
