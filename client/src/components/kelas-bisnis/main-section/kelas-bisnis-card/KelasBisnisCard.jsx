import React from "react";
import { icon, kelasBisnisPic } from "../../../../constants";
import { Link } from "react-router-dom";

function KelasBisnisCard({ el, index, star }) {
  // console.log({ el, star: Number(star) });
  return (
    <>
      <Link
        to={`/kelas-bisnis/${el.id}`}
        key={index}
        className="w-[358px] md:w-[232px] h-[436px] flex flex-col items-center justify-start overflow-hidden rounded-[10px] bg-whiteSmoke500 shadow-customSm"
      >
        <div className="w-full h-[176px]">
          <img
            // src={kelasBisnisPic.pic1}
            loading="lazy"
            src={
              `${process.env.REACT_APP_SERVER_URL}/kelas/${el.image}` ||
              kelasBisnisPic.pic1
            }
            alt="main"
            className=" object-cover w-full h-full md:flex"
          />
          {/* <img
            src={kelasBisnisPic.heroKelasBisnis1}
            alt="main"
            className="flex md:hidden "
          /> */}
        </div>
        <div className="w-[326px] md:w-[200px] flex flex-col items-center gap-[16px]">
          <h1 className=" line-clamp-2 text-[18px] font-bold leading-[28px] mt-[16px]">
            {el?.nama
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ") ?? "no data"}
          </h1>
          <div className="w-full flex justify-center items-center">
            <div className="w-fit flex md:grid grid-cols-2 gap-x-[8px] md:gap-x-[50px] gap-y-[8px] ">
              <div className=" w-max flex items-center  gap-1">
                <img
                  src={icon.bookOpenSold}
                  alt="bok"
                  className=" w-[16px] h-[16px]"
                />
                <p className="text-[14px] font-light leading-[20px] shrink-0">
                  {el.tipe || "Materi Eksklusif"}
                </p>
              </div>
              <div className=" w-max flex items-center gap-1 ">
                <img
                  src={icon.signal}
                  alt="bok"
                  className="w-[16px] h-[16px]"
                />
                <p className="text-[14px] font-light leading-[20px] shrink-0">
                  {el.kelas_level.nama}
                </p>
              </div>
              <div className=" w-max flex items-center gap-1 ">
                <img
                  src={icon.userCircle}
                  alt="bok"
                  className="w-[16px] h-[16px]"
                />
                <p className="text-[14px] font-light leading-[20px] shrink-0">
                  {el.kelas_regists.length} Pendaftar
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-start items-center  gap-[8px]">
            {/* <div className="rating rating-md md:rating-sm gap-[4px] ">
              {[...Array(5)].map((_, index) => (
                <input
                  key={index}
                  type="radio"
                  name={`rating-${index + 1}`}
                  className="mask mask-star-2 bg-yellow-400"
                  defaultChecked={index + 1 === el.star}
                />
              ))}
            </div> */}
            <div className="rating rating-sm rating-half gap-0">
              {Number(star) === Number(0) ? (
                <>
                  <input
                    type="radio"
                    name={index + 1}
                    className="rating-hidden"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name={`rating-${index + 1}`}
                    className="bg-yellow-500 mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name={`rating-${index + 1}`}
                    className="bg-yellow-500 mask mask-star-2 mask-half-2"
                  />
                  <input
                    type="radio"
                    name={`rating-${index + 1}`}
                    className="bg-yellow-500 mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name={`rating-${index + 1}`}
                    className="bg-yellow-500 mask mask-star-2 mask-half-2"
                  />
                  <input
                    type="radio"
                    name={`rating-${index + 1}`}
                    className="bg-yellow-500 mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name={`rating-${index + 1}`}
                    className="bg-yellow-500 mask mask-star-2 mask-half-2"
                  />
                  <input
                    type="radio"
                    name={`rating-${index + 1}`}
                    className="bg-yellow-500 mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name={`rating-${index + 1}`}
                    className="bg-yellow-500 mask mask-star-2 mask-half-2"
                  />
                  <input
                    type="radio"
                    name={`rating-${index + 1}`}
                    className="bg-yellow-500 mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name={`rating-${index + 1}`}
                    className="bg-yellow-500 mask mask-star-2 mask-half-2"
                  />
                </>
              ) : (
                <>
                  <input
                    type="radio"
                    name={`rating-${index + 1}`}
                    className="bg-yellow-500 mask mask-star-2 mask-half-1"
                    defaultChecked={Number(star) * 2 === 1}
                  />
                  <input
                    type="radio"
                    name={`rating-${index + 1}`}
                    className="bg-yellow-500 mask mask-star-2 mask-half-2"
                    defaultChecked={Number(star) * 2 === 2}
                  />
                  <input
                    type="radio"
                    name={`rating-${index + 1}`}
                    className="bg-yellow-500 mask mask-star-2 mask-half-1"
                    defaultChecked={Number(star) * 2 === 3}
                  />
                  <input
                    type="radio"
                    name={`rating-${index + 1}`}
                    className="bg-yellow-500 mask mask-star-2 mask-half-2"
                    defaultChecked={Number(star) * 2 === 4}
                  />
                  <input
                    type="radio"
                    name={`rating-${index + 1}`}
                    className="bg-yellow-500 mask mask-star-2 mask-half-1"
                    defaultChecked={Number(star) * 2 === 5}
                  />
                  <input
                    type="radio"
                    name={`rating-${index + 1}`}
                    className="bg-yellow-500 mask mask-star-2 mask-half-2"
                    defaultChecked={Number(star) * 2 === 6}
                  />
                  <input
                    type="radio"
                    name={`rating-${index + 1}`}
                    className="bg-yellow-500 mask mask-star-2 mask-half-1"
                    defaultChecked={Number(star) * 2 === 7}
                  />
                  <input
                    type="radio"
                    name={`rating-${index + 1}`}
                    className="bg-yellow-500 mask mask-star-2 mask-half-2"
                    defaultChecked={Number(star) * 2 === 8}
                  />
                  <input
                    type="radio"
                    name={`rating-${index + 1}`}
                    className="bg-yellow-500 mask mask-star-2 mask-half-1"
                    defaultChecked={Number(star) * 2 === 9}
                  />
                  <input
                    type="radio"
                    name={`rating-${index + 1}`}
                    className="bg-yellow-500 mask mask-star-2 mask-half-2"
                    defaultChecked={Number(star) * 2 === 10}
                  />
                </>
              )}
            </div>
            <div className="flex items-center justify-center mt-1">
              <p className="text-[14px] font-light leading-[20px]">
                {star ?? 0}
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col items-start gap-[4px]">
            {true ? (
              <div className="w-full flex justify-start gap-[2px]">
                <p className="text-[14px] font-light leading-[20px] line-through">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(el.harga)}
                </p>
                <p className="text-[14px] font-medium leading-[20px] text-[#BA0000]">
                  {100}%
                </p>
              </div>
            ) : null}
            <p className="text-[22px] font-bold leading-[32px] text-indigoDye500">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(el.harga - (el.harga * 100) / 100)}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default KelasBisnisCard;
