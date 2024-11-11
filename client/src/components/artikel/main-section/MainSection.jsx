import React, { useEffect, useRef, useState } from "react";
import { newsPic } from "../../../constants";
import NewsCard from "../../global-component/card/news-card/NewsCard";
import PaginationStandart from "../../global-component/pagination/pagination-standart/PaginationStandart";
import { api } from "../../../api/api";
import { Link, useNavigate, useParams } from "react-router-dom";

function MainSection() {
  const navigate = useNavigate();

  const itemsPerPage = 9;

  const { kategori, page } = useParams();

  const [onKategori, setOnKategori] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(0);

  const [onHover, setOnHover] = useState("");
  const [dataArtikel, setDataArtikel] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [tmpDataKategori, setTmpDataKategori] = useState([]);

  const fetchKategori = async () => {
    try {
      const response = await api.get(
        `${process.env.REACT_APP_API_BASE_URL}/artikel/navbar`
      );
      setTmpDataKategori(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchArtikelByKategori = async () => {
    setOnKategori(kategori);
    setCurrentPage(page - 1);
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/artikel/kategori`,
        {
          kategori: kategori,
        }
      );
      setDataArtikel(response.data.data);
      const newOffset = ((page - 1) * itemsPerPage) % response.data.data.length;
      const endOffset = newOffset + itemsPerPage;
      setCurrentItems(response.data.data.slice(newOffset, endOffset));
      setPageCount(Math.ceil(response.data.data.length / itemsPerPage));
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageClick = (event) => {
    if (kategori) navigate(`/artikel/${event.selected + 1}/${kategori}`);
    else navigate(`/artikel/${event.selected + 1}`);
  };

  const changePage = () => {
    const newOffset = ((page - 1) * itemsPerPage) % dataArtikel.length;
    const endOffset = newOffset + itemsPerPage;
    setCurrentItems(dataArtikel.slice(newOffset, endOffset));
    setPageCount(Math.ceil(dataArtikel.length / itemsPerPage));
    setCurrentPage(page - 1);
  };

  useEffect(() => {
    fetchKategori();
  }, []);

  useEffect(() => {
    fetchArtikelByKategori();
  }, [kategori]);

  useEffect(() => {
    if (dataArtikel.length > 0) changePage();
  }, [page]);

  return (
    <div className="mt-[160px] w-full max-w-[1080px] flex flex-col  justify-center items-center">
      <nav className="flex w-full md:w-full justify-start items-center overflow-scroll scrollbar-hide px-[5px] md:px-0">
        <ul className="flex gap-[16px]">
          {tmpDataKategori?.map((el, index) => (
            <li key={index} className="flex justify-center items-center">
              <Link
                to={`/artikel/1/${el.nama_kategori}`}
                className={`${
                  onKategori === el.nama_kategori
                    ? "bg-black500 text-whiteSmoke500 border-black500"
                    : "bg-whiteSmoke500 text-black500 border-black100"
                } px-[24px] xl:px-[48px] py-[8px] xl:py-[16px] rounded-[10px] border-[1px]   `}
              >
                <p className="text-[16px] font-medium leading-[24px]">
                  {el.nama_kategori}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="xl:h-[1636px] flex justify-center items-start mt-[52px] my-[52px] ">
        <div className="grid grid-cols-1  md:grid-cols-2  xl:grid-cols-3 gap-[24px]  ">
          {currentItems?.map((el, index) => (
            <NewsCard
              key={index}
              onHover={onHover}
              setOnHover={setOnHover}
              index={el.id}
              news={el}
              path={"artikel"}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1080px] flex justify-center items-center">
        <PaginationStandart
          handlePageClick={handlePageClick}
          pageCount={pageCount}
          marginBot={"mb-[160px]"}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default MainSection;
