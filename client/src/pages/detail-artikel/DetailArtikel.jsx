import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavigasiArtikel from "../../components/detail-artikel/navigasi-artikel/NavigasiArtikel";
import HeadArtikel from "../../components/detail-artikel/head-artikel/HeadArtikel";
import ShareArtikel from "../../components/detail-artikel/share-artikel/ShareArtikel";
import MainImages from "../../components/detail-artikel/main-images/MainImages";
import ContentArtikel from "../../components/detail-artikel/content-artikel/ContentArtikel";
import { api } from "../../api/api";
import { useState } from "react";

function DetailArtikel() {
  const { id } = useParams();
  const [artikel, setArtikel] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    api
      .get(`${process.env.REACT_APP_API_BASE_URL}/artikel/${id}`)
      .then((res) => {
        setArtikel(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center shrink-0 mb-[60px] md:mb-[160px]">
      <NavigasiArtikel />
      <HeadArtikel
        judul={artikel.judul}
        tanggal={artikel.tanggal}
        penerbit={artikel.penerbit}
      />
      <ShareArtikel />
      <MainImages imageLink={artikel.images_link} />
      <ContentArtikel>{artikel.deskripsi}</ContentArtikel>
      <ShareArtikel />
    </div>
  );
}

export default DetailArtikel;
