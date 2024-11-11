import React from "react";

function ButtonBorderWhitesmoke500({ TEXT_BUTTON, WIDTH, RESPONSIF }) {
  return (
    <>
      <button
        className={`${RESPONSIF} flex-auto ${WIDTH} px-[32px] py-[16px] justify-center items-center rounded-[10px] border-[1px] text-whiteSmoke500 hover:text-black500 hover:bg-whiteSmoke500 border-whiteSmoke500 bg-transparent`}
      >
        <p className="w-[116px] flex-auto shrink-0 leading-[24px] font-medium text-[16px]  text-center ">
          {TEXT_BUTTON}
        </p>
      </button>
    </>
  );
}

export default ButtonBorderWhitesmoke500;
