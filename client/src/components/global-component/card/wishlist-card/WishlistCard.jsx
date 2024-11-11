import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../../../constants";
import { icon } from "../../../../constants";
// import { FaBook, FaSignal, FaUser, FaBookmark } from "react-icons/fa";

export default function WishlistCard({wishlist, index, star}) {
  console.log(wishlist);
  
  return (
    <div className="flex" >
      <div className="w-[250px] h-[432px] bg-white-200 mr-[20px]  " style={{ boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
      <Link
        to={`/kelas-bisnis/${wishlist.kelas_bisni?.id}`}
        key={index}
        //className="w-[358px] md:w-[232px] h-[436px] flex flex-col items-center justify-start overflow-hidden rounded-[10px] bg-whiteSmoke500 shadow-customSm"
      >
      <img
          src={`${process.env.REACT_APP_SERVER_URL}images/kelas/${wishlist.kelas_bisni?.image}`|| images.Linkedin}
          alt={wishlist.kelas_bisni?.nama || "No Data"}
          className="w-[250px] h-[176px] object-cover rounded-[10px]"
        />
        <div className="ml-[20px] mt-[20px]">
          <h2 className="font-bold mb-[10px]">
          {wishlist.kelas_bisni?.nama || "No Data"}
          </h2>
          <p className="mb-[10px]" style={{ display: "flex", alignItems: "center", color: " #3F4041", fontSize: "14px" }}>
          <img
                  src={icon.bookOpenSold}
                  alt="bok"
                  className=" w-[16px] h-[16px] mr-[5px]"
              />
            {wishlist.kelas_bisni?.kelas_kategori?.nama || "No Data"}
            <img
                  src={icon.signal}
                  alt="sig"
                  className=" w-[16px] h-[16px] ml-[5px] "
                />
            {wishlist.kelas_bisni?.kelas_level?.nama || "No Data"}
          </p>
          <p className="mb-[10px]" style={{ display: "flex", alignItems: "center", color: " #3F4041", fontSize: "14px" }}>
          <img
                  src={icon.userCircle}
                  alt="bok"
                  className="w-[16px] h-[16px] mr-[5px]"
                /> 
            {wishlist.kelas_bisni?.kelas_regists?.length || "0"}
          </p>
          <div className="mb-[10px]" style={{ display: "flex", alignItems: "center" }}>
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
          <p>
            {wishlist.kelas_bisni?.kelas_ratings?.nilai || ""}
            </p>
          </div>
          <div className="w-full flex flex-col items-start gap-[4px] ml-[20px]">
            {true ? (
              <div className="w-full flex justify-start gap-[2px]">
                <p className="text-[14px] font-light leading-[20px] line-through">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(wishlist.kelas_bisni?.harga)}
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
              }).format(wishlist.kelas_bisni?.harga)}
            </p>
          </div>
          </Link>
        </div>
      </div>
  );
}
