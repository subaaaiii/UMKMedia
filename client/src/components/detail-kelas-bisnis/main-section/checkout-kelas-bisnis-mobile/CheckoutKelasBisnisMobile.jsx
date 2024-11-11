import React, { useEffect } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import ButtonBlack500 from "../../../global-component/button/button-black500/ButtonBlack500";

function CheckoutKelasBisnisMobile({ isShowCheckOut, dataDetail }) {
  useEffect(() => {
    console.log(dataDetail);
  }, [dataDetail]);
  return (
    <div
      className={`w-full gap-[32px] sticky  h-screen top-0 bg-transparant pointer-events-auto flex flex-col justify-end items-center`}
    >
      <div
        className={` ${
          isShowCheckOut ? "translate-y-0" : "translate-y-full"
        } absolute bottom-0 w-full bg-whiteSmoke500 px-[16px] flex flex-col justify-center items-center shadow-customSm h-[122px]  duration-300`}
      >
        <div className="flex w-full h-full justify-between items-center">
          <div className="flex flex-col gap-[4px]">
            <div className="flex items-center">
              <p className="text-[12px] font-light leading-[20px] line-through">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(dataDetail?.kelas_bisni?.harga || 0)}
              </p>
              <p className="text-red-600 text-[12px] font-light ledaing-[20px]">
                {dataDetail?.kelas_bisni?.kelas_diskons[0]?.jumlah_persen || 0}{" "}
                %
              </p>
            </div>
            <div className="flex ">
              <p className="text-[16px] font-bold leading-[24px]">
                {dataDetail?.kelas_bisni?.kelas_diskons[0]?.jumlah_persen > 0
                  ? new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(
                      dataDetail?.kelas_bisni?.harga -
                        ((dataDetail?.kelas_bisni?.harga || 0) / 100) *
                          dataDetail?.kelas_bisni?.kelas_diskons[0]
                            ?.jumlah_persen
                    )
                  : new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(dataDetail?.kelas_bisni?.harga || 0)}
              </p>
            </div>
          </div>

          <div className="flex gap-[16px] items-center">
            <button className="w-[48px] h-[48px] flex justify-center items-center border-[1px] border-black500 rounded-[10px]">
              <HiOutlineHeart className="text-[32px] text-black500" />
            </button>
            <ButtonBlack500 TEXT_BUTTON={"Beli kelas"} WIDTH={"w-[178px]"} />
          </div>
        </div>
        <div className="flex pb-[8px] flex-col justify-end w-full items-center">
          <div className="h-[5px] w-[120px] bg-black500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutKelasBisnisMobile;
