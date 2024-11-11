import React from "react";

function ButtonWhiteSmoke500({ TEXT_BUTTON, WIDTH}) {
  return (
    <>
      <button
        className={`px-[64px] py-[16px] ${WIDTH}  flex justify-center items-center rounded-[10px] bg-whiteSmoke500 border-[1px] `}
      >
        <p className="shrink-0 text-[16px] font-medium leading-[24px] text-black500">
          {TEXT_BUTTON}
        </p>
      </button>
    </>
  );
}

export default ButtonWhiteSmoke500;
