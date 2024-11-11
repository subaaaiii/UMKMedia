import React from "react";
import { useNavigate } from "react-router-dom";

function NewsCard({ news, onHover, setOnHover, index, path }) {
  const navigate = useNavigate();
  const formattedDate = news.tanggal
    ? new Intl.DateTimeFormat("in-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(news.tanggal))
    : "Invalid Date";

  const navigateToDetail = (title, data, kategori) => {
    localStorage.setItem("artikel", JSON.stringify(data));
    navigate(`/detail-artikel/${kategori}/${index}/${title}`);
  };

  return (
    <div
      key={index}
      onMouseEnter={() => setOnHover(index)}
      onMouseLeave={() => setOnHover("")}
      onClick={() =>
        navigateToDetail(news.judul, news, news.Kategori.nama_kategori)
      }
      className="relative w-[344px] h-[304px] md:h-[524px] shrink-0 rounded-[10px] cursor-pointer shadow-customSm overflow-hidden "
    >
      <div
        className={`${
          onHover === index ? "bg-black bg-opacity-50" : "bg-black bg-opacity-0"
        } absolute top-0 left-0 w-full h-full rounded-[10px] z-20`}
      ></div>
      <img
        loading="lazy"
        src={`${process.env.REACT_APP_SERVER_URL}${path}/${news.images}`}
        alt="news"
        className={` relative object-cover h-full w-full`}
      />
      <div className="absolute bottom-0 w-[344px] h-[244px] rounded-b-[10px] z-30 overflow-hidden">
        <div
          className={`${
            onHover === index ? "translate-y-5" : "translate-y-[100px]"
          } absolute   w-full bg-black400 p-[20px]   duration-300 z-40`}
        >
          <div className="flex flex-col gap-[12px]">
            <p className="text-[14px] font-medium leading-[20px] text-whiteSmoke600">
              {formattedDate}
            </p>
            <p className="w-[304px] h-[64px] text-[22px] font-bold leading-[32px] mb-[16px] text-whiteSmoke500 line-clamp-2  ">
              {news.judul}
            </p>
          </div>

          <p
            className={`${
              onHover === index ? "opacity-100" : "opacity-0"
            } text-[16px] font-light leading-[24px] text-whiteSmoke600 line-clamp-3`}
          >
            {news.deskripsi}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
