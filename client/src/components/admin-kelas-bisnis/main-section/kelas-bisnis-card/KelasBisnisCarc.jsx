import { icon } from "../../../../constants";
import { Link } from "react-router-dom";

function KelasBisnisCard({ el, index, star, isTambahKelasBaru }) {
  let starsArr = new Array(Math.floor(Number(star) * 2)).fill("half");
  starsArr =
    star - Math.floor(Number(star)) > 0 && star - Math.floor(Number(star)) < 0.5
      ? [...starsArr, "half"]
      : [...starsArr];

  return (
    <Link
      to={`/admin/kelas-bisnis/${
        isTambahKelasBaru ? "create" : "edit/" + el.id
      }`}
      key={index}
      className="max-w-[400px] md:max-w-[200px] lg:max-w-[256px] aspect-5/2 md:aspect-9/16 flex md:flex-col items-center justify-start overflow-hidden rounded-[10px] bg-whiteSmoke500 shadow-customSm"
    >
      <div className="w-1/3 md:w-full h-full md:h-2/5 flex justify-center items-center">
        <img
          src={isTambahKelasBaru ? icon.iconAdd : `${el.images_link}`}
          loading="lazy"
          alt="main"
          className={`md:flex ${
            isTambahKelasBaru
              ? "object-contain w-1/2 h-1/2"
              : "object-cover w-full h-full"
          }`}
        />
      </div>
      <div className="w-2/3 md:w-full h-full md:h-3/5 px-4 py-2 md:py-0 flex flex-col items-start">
        <div className="w-full h-1/4 text-sm lg:text-lg py-0 md:my-2 lg:mt-4 lg:mb-0 flex items-center">
          <h1 className="w-full line-clamp-1 md:line-clamp-2 font-bold">
            {isTambahKelasBaru
              ? "Tambah Kelas Baru"
              : el.nama
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ") ?? "no data"}
          </h1>
        </div>
        <div className="w-full h-1/4 flex justify-start items-center">
          <div className="w-fit grid grid-cols-2 md:flex md:flex-col lg:grid lg:grid-cols-2 gap-x-2 lg:gap-x-10 lg:gap-y-2 ">
            <div className="w-max flex items-center gap-1">
              <img
                src={icon.bookOpenSold}
                alt="bok"
                className="w-[16px] h-[16px]"
              />
              <p className="text-xs lg:text-sm font-light leading-[20px] shrink-0">
                {isTambahKelasBaru ? "Materi" : el.tipe || "Materi Eksklusif"}
              </p>
            </div>
            <div className="w-max flex items-center gap-1 ">
              <img src={icon.signal} alt="bok" className="w-[16px] h-[16px]" />
              <p className="text-xs lg:text-sm font-light leading-[20px] shrink-0">
                {isTambahKelasBaru ? "Pemula" : el.kelas_level.nama}
              </p>
            </div>
            <div className="w-max flex items-center gap-1 ">
              <img
                src={icon.userCircle}
                alt="bok"
                className="w-[16px] h-[16px]"
              />
              <p className="text-xs lg:text-sm font-light leading-[20px] shrink-0">
                {isTambahKelasBaru ? 0 : el.kelas_regists.length} Pendaftar
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-start items-center gap-[8px] md:mt-2 lg:mt-0 lg:mb-2">
          <div className="rating rating-xs md:rating-sm rating-half gap-0">
            {starsArr.length !== 0 ? (
              starsArr.map((star, index) =>
                index % 2 === 0 ? (
                  <input
                    type="radio"
                    key={star + index}
                    className="h-1 bg-yellow-500 mask mask-star-2 mask-half-1"
                  />
                ) : (
                  <input
                    type="radio"
                    key={star + index}
                    className="bg-yellow-500 mask mask-star-2 mask-half-2"
                  />
                )
              )
            ) : (
              <>
                <input
                  type="radio"
                  className="bg-slate-200 mask mask-star-2 mask-half-1"
                />
                <input
                  type="radio"
                  className="bg-slate-200 mask mask-star-2 mask-half-2"
                />
              </>
            )}
          </div>
          <p className="text-[14px] font-light leading-[20px] mt-1">
            {star ?? 0}
          </p>
        </div>
        <div className="w-full h-1/4 flex flex-col items-start">
          {!isTambahKelasBaru && true && (
            <div className="w-full flex justify-start gap-[2px]">
              <p className="text-[10px] sm:text-xs lg:text-sm xl:text-base font-light line-through">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(el.harga)}
              </p>
              <p className="text-[10px] sm:text-xs lg:text-sm xl:text-base font-medium text-[#BA0000]">
                {0}%
              </p>
            </div>
          )}
          {!isTambahKelasBaru && (
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-indigoDye500">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(el.harga - (el.harga * 0) / 100)}
            </p>
          )}
          {isTambahKelasBaru && (
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-indigoDye500">
              Tentukan Harga
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default KelasBisnisCard;
