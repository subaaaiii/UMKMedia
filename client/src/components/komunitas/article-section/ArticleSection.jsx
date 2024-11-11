import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { newsPic } from "../../../constants";
import NewsCard from "../../global-component/card/news-card/NewsCard";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonBlack500 from "../../global-component/button/button-black500/ButtonBlack500";
// import { dataNews } from "../../../constants/data";
import { api } from "../../../api/api";

function ArticleSection() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  const fetchArtikel = async () => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/artikel/menarik`,
        {
          kategori: "semua",
          limit: 3,
        }
      );
      setArticles(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArtikel();
    // console.log(articles);
  }, []);
  // useEffect(() => {
  //   console.log(articles);
  // },[articles]);

  // const [dataNesws, setDataNews] = useState([
  //   {
  //     title: "3 Cara Mengembangkan Bisnis di TikTok Shop",
  //     DATE: "November 2023",
  //     deskripsi:
  //       "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
  //     pic: newsPic.rectangleNews1,
  //   },
  //   {
  //     title: "12 Tren Pemasaran Paling Efektif di 2023",
  //     DATE: "November 2023",
  //     deskripsi:
  //       "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
  //     pic: newsPic.rectangleNews2,
  //   },
  //   {
  //     title: "10 Cara Agar Bisnis Kamu Muncul di Pencarian",
  //     DATE: "November 2023",
  //     deskripsi:
  //       "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
  //     pic: newsPic.rectangleNews3,
  //   },
  // ]);

  const [onHover, setOnHover] = useState("");
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" pb-20 pt-[60px] lg:pt-[160px] max-w-screen-2xl w-full flex flex-col items-center gap-[52px] bg-whiteSmoke500 z-10">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex flex-col gap-[8px] lg:gap-[16px]"
      >
        <h1 className="text-[22px] lg:text-[40px] font-bold leading-[32px] lg:leading-[60px] w-[358px] lg:w-[564px] text-center">
          Temukan Artikel Menarik dari Komunitas
        </h1>
      </div>
      <div className="w-screen xl:w-fit flex  flex-wrap justify-center overflow-x-scroll xl:overflow-visible gap-y-[52px] gap-x-[24px]">
        {articles.map((article, index) => (
          <NewsCard
            key={index}
            news={article}
            onHover={onHover}
            setOnHover={setOnHover}
            index={index}
            path={"artikel"}
          />
        ))}
      </div>
      {/* <button className="flex bg-black500 hover:bg-whiteSmoke800 px-[64px] py-[16px] justify-center items-center rounded-[10px] w-[260px]">
        <p className="shrink-0 text-whiteSmoke500 text-[16px] font-medium leading-[24px]">
          
        </p>
      </button> */}
      <div onClick={() => navigate("/artikel/1/Semua")}>
        <ButtonBlack500
          TEXT_BUTTON={"Lihat Semua Artikel"}
          WIDTH={"w-[260px]"}
        />
      </div>
    </div>
  );
}

export default ArticleSection;
