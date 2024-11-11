import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { kelasBisnis } from "./constant/data";
import { icon, kelasBisnisPic } from "../../../constants";
import { Link, useNavigate } from "react-router-dom";
import PaginationDetaile from "../../global-component/pagination/pagination-detaile/PaginationDetaile";
import KelasBisnisCard from "../../global-component/card/kelas-bisnis-card/KelasBisnisCard";
import { api } from "../../../api/api";

import FilterDataKelas from "./filter-data-kelas/FilterDataKelas";
import ButtonBlack500 from "../../global-component/button/button-black500/ButtonBlack500";
import { HiFilter } from "react-icons/hi";
import { debounce } from "lodash";
import { useMediaQuery } from "@chakra-ui/react";

function MainSection({ search, setSearch }) {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const [kategoriFilter, setKategoriFilter] = useState([]);
  const [levelFilter, setLevelFilter] = useState([]);
  const [hargaFilter, setHargaFilter] = useState([]);
  const [dataClass, setDataClass] = useState([]);

  const [kategoriUrl, setKategoriUrl] = useState(
    new URLSearchParams(new URL(window.location.href).search)
      .get("kategori")
      ?.split(",")
  );
  const [levelUrl, setLevelUrl] = useState(
    new URLSearchParams(new URL(window.location.href).search)
      .get("level")
      ?.split(",")
  );
  const [hargaUrl, setHargaUrl] = useState(
    new URLSearchParams(new URL(window.location.href).search)
      .get("harga")
      ?.split(",")
  );

  useEffect(() => {
    console.log({ kategoriUrl, levelUrl, hargaUrl });
  }, [kategoriUrl, levelUrl, hargaUrl]);

  const [toggleFilter, setToggleFilter] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [page, setPage] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 9;
  const timeoutRef = useRef(null);
  const [filterData, setFilterData] = useState(false);

  const navigate = useNavigate();

  const fetchAllFilter = useMemo(async () => {
    try {
      //kategori
      const responseKategori = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/kategori`
      );
      const dataResponseKategori = responseKategori.data.data;
      const currentUrlKategori = window.location.href;
      const urlKategori = new URL(currentUrlKategori);
      const searchParamsKategori = new URLSearchParams(urlKategori.search);
      const newKategori = dataResponseKategori.map((el) => ({
        ...el,
        bool: false,
      }));

      let kategoriValue = searchParamsKategori
        .get("kategori")
        ?.toString()
        .split(",");
      console.log({ kategoriValue });
      if (kategoriValue && kategoriValue.length > 0) {
        const oldKategori = newKategori?.map((kategori) => ({
          ...kategori,
          bool: kategoriValue.includes(kategori.nama),
        }));
        console.log({ oldKategori });
        setKategoriFilter(oldKategori);
      } else setKategoriFilter(newKategori);

      //level
      const responseLevel = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/level`
      );
      const dataResponseLevel = responseLevel.data.data;
      const currentUrlLevel = window.location.href;
      const urlLevel = new URL(currentUrlLevel);
      const searchParamsLevel = new URLSearchParams(urlLevel.search);
      const newLevel = dataResponseLevel.map((el) => ({ ...el, bool: false }));

      let levelValue = searchParamsLevel.get("level")?.toString().split(",");
      if (levelValue && levelValue.length > 0) {
        const oldLevel = newLevel?.map((level) => ({
          ...level,
          bool: levelValue.includes(level.nama),
        }));
        setLevelFilter(oldLevel);
      } else setLevelFilter(newLevel);

      // harga
      const responseHarga = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/HargaFilter`
      );
      const dataResponseHarga = responseHarga.data.data;

      const currentUrlHarga = window.location.href;
      const urlHarga = new URL(currentUrlHarga);
      const searchParamsHarga = new URLSearchParams(urlHarga.search);
      const newHarga = dataResponseHarga.map((el) => ({ ...el, bool: false }));

      let hargaValue = searchParamsHarga.get("harga")?.toString().split(",");
      if (hargaValue && hargaValue.length > 0) {
        console.log({ hargaValue });
        const oldHarga = newHarga?.map((harga) => ({
          ...harga,
          bool: hargaValue.includes(harga.harga_max.toString()),
        }));
        console.log({ oldHarga });
        setHargaFilter(oldHarga);
      } else setHargaFilter(newHarga);

      setKategoriUrl(kategoriValue);
      setLevelUrl(levelValue);
      setHargaUrl(hargaValue);
      setFilterData(true);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchKelasBisnis = useMemo(async () => {
    if (isLargerThan768) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(async () => {
        try {
          const currentUrl = window.location.href;
          const url = new URL(currentUrl);
          const searchParams = new URLSearchParams(url.search);
          let pageValue = searchParams.get("page");

          let kategoriValue = searchParams
            .get("kategori")
            ?.toString()
            .split(",");
          console.log({ kategoriValue });
          let levelValue = searchParams.get("level")?.toString().split(",");
          let hargaValue = searchParams.get("harga")?.toString().split(",");
          let searchValue = searchParams.get("search")?.toString();

          console.log({ searchValue });

          let kategoriId = [];
          let levelId = [];
          let hargaId = [];

          const oldKategori = kategoriFilter?.map((kategori) => ({
            ...kategori,
            bool: kategoriValue?.includes(kategori.nama),
          }));
          console.log({ oldKategori });
          setKategoriFilter(oldKategori);
          kategoriId = oldKategori.filter((el) => el.bool).map((el) => el.id);

          const oldLevel = levelFilter?.map((level) => ({
            ...level,
            bool: levelValue?.includes(level.nama),
          }));
          console.log({ oldLevel });
          setLevelFilter(oldLevel);
          levelId = oldLevel.filter((el) => el.bool).map((el) => el.id);

          const oldHarga = hargaFilter?.map((harga) => ({
            ...harga,
            bool: hargaValue?.includes(harga.harga_max.toString()),
          }));
          console.log({ hargaValue });
          setHargaFilter(oldHarga);
          hargaId = oldHarga.filter((el) => el.bool).map((el) => el.id);

          const hargaData = hargaFilter.filter((el) => el.id === hargaId[0]);

          console.log({ pageValue });

          if (pageValue && Number(pageValue) === 1) {
            setPage(Number(pageValue) - 1);
            setCurrentPage(Number(pageValue) - 1);
          } else if (pageValue && Number(pageValue) > 1) return;
          else {
            setPage(0);
            setCurrentPage(0);
          }

          if (searchValue && searchValue.length > 0) {
            setSearch(searchValue);
          }
          console.log({
            kategori: kategoriId,
            level: levelId,
            harga: hargaId,
            search: searchValue,
          });
          const response = await api.post(
            `${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/data`,
            {
              kategori: kategoriId,
              level: levelId,
              harga: hargaId,
              search: searchValue,
            }
          );
          setDataClass(response.data.dataKelas);
        } catch (error) {
          console.log(error);
        }
      }, 2000);
    }
  }, [kategoriUrl, levelUrl, hargaUrl, search, window.location.href]);

  const firstRender = useMemo(async () => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const searchParams = new URLSearchParams(url.search);
    let pageValue = searchParams.get("page");

    let kategoriValue = searchParams.get("kategori")?.toString().split(",");
    console.log({ kategoriValue });
    let levelValue = searchParams.get("level")?.toString().split(",");
    let hargaValue = searchParams.get("harga")?.toString().split(",");

    if (pageValue && Number(pageValue) < 2) return;

    try {
      let kategoriId = [];
      let levelId = [];
      let hargaId = [];

      const oldKategori = kategoriFilter?.map((kategori) => ({
        ...kategori,
        bool: kategoriValue.includes(kategori.nama),
      }));
      console.log({ oldKategori });
      setKategoriFilter(oldKategori);
      kategoriId = oldKategori.filter((el) => el.bool).map((el) => el.id);

      const oldLevel = levelFilter?.map((level) => ({
        ...level,
        bool: levelValue.includes(level.nama),
      }));
      console.log({ oldLevel });
      setLevelFilter(oldLevel);
      levelId = oldLevel.filter((el) => el.bool).map((el) => el.id);

      const oldHarga = hargaFilter?.map((harga) => ({
        ...harga,
        bool: hargaValue.includes(harga.harga_max.toString()),
      }));
      console.log({ hargaValue });
      setHargaFilter(oldHarga);
      hargaId = oldHarga.filter((el) => el.bool).map((el) => el.id);

      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/data`,
        {
          kategori: kategoriId,
          level: levelId,
          harga: hargaId,
          search,
        }
      );
      setDataClass(response.data.dataKelas);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    console.log({ isLargerThan768 });
  }, [isLargerThan768]);

  const fetchFirstKelasMobile = useMemo(async () => {
    if (isLargerThan768) return;
    console.log("coba", isLargerThan768);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(async () => {
      try {
        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        const searchParams = new URLSearchParams(url.search);
        let pageValue = searchParams.get("page");
        // const searchValue = searchParams.get("search");
        // console.log({ search });
        const kategoriId = kategoriFilter
          .filter((el) => el.bool)
          .map((el) => el.id);
        const levelId = levelFilter.filter((el) => el.bool).map((el) => el.id);
        const hargaId = hargaFilter.filter((el) => el.bool).map((el) => el.id);

        // const hargaData = hargaFilter.filter((el) => el.id === hargaId[0]);
        console.log({ kategoriFilter, levelFilter, hargaFilter });
        console.log({
          kategori: kategoriId,
          level: levelId,
          harga: hargaId,
          search,
        });

        const response = await api.post(
          `${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/data`,
          {
            kategori: kategoriId,
            level: levelId,
            harga: hargaId,
            search: "",
          }
        );
        setDataClass(response.data.dataKelas);
        console.log({ pageValue });
        if (pageValue) {
          setPage(Number(pageValue) - 1);
          setCurrentPage(Number(pageValue) - 1);
        }
      } catch (error) {
        console.log(error);
      }
    }, 2000);
  }, [filterData]);

  const fetchDataKelasButton = async (word) => {
    if (isLargerThan768) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(async () => {
      console.log({ word });
      try {
        if (word === "reset") {
          const response = await api.post(
            `${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/data`,
            {
              kategori: [],
              level: [],
              harga: [],
              search: "",
            }
          );
          setDataClass(response.data.dataKelas);

          setPage(0);
          setCurrentPage(0);
        } else {
          const currentUrl = window.location.href;
          const url = new URL(currentUrl);
          const searchParams = new URLSearchParams(url.search);
          let pageValue = searchParams.get("page");

          const kategoriId = kategoriFilter
            .filter((el) => el.bool)
            .map((el) => el.id);
          const levelId = levelFilter
            .filter((el) => el.bool)
            .map((el) => el.id);
          const hargaId = hargaFilter
            .filter((el) => el.bool)
            .map((el) => el.id);
          const hargaData = hargaFilter.filter((el) => el.id === hargaId[0]);
          console.log({
            kategori: kategoriId,
            level: levelId,
            harga: hargaId,
            search,
          });

          const response = await api.post(
            `${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/data`,
            {
              kategori: kategoriId,
              level: levelId,
              harga: hargaId,
              search,
            }
          );
          setDataClass(response.data.dataKelas);
          console.log({ pageValue });
          if (pageValue) {
            setPage(Number(pageValue) - 1);
            setCurrentPage(Number(pageValue) - 1);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }, 2000);
  };

  const handlePageClick = (event) => {
    setPage(event.selected);
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const searchParams = new URLSearchParams(url.search);
    let pageValue = searchParams.get("page");
    let kategoriValue = searchParams.get("kategori")?.toString().split(",");
    let levelValue = searchParams.get("level")?.toString().split(",");
    let hargaValue = searchParams.get("harga")?.toString().split(",");

    navigate(
      `?${new URLSearchParams({
        page: Number(event.selected) + 1,
        kategori: kategoriValue || "",
        level: levelValue || "",
        harga: hargaValue || "",
      })}`
    );
  };

  const [renderCount, setRenderCount] = useState(0);
  useEffect(() => {
    console.log({ kategoriFilter });
  }, [kategoriFilter]);

  const fetchPage = useMemo(() => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const searchParams = new URLSearchParams(url.search);
    let pageValue = searchParams.get("page");

    console.log({ pageValue });
    let getPage;
    if (pageValue && Number(pageValue) > 1) {
      getPage = Number(pageValue) - 1;
      setPage(Number(pageValue) - 1);
      console.log("sini");
    } else {
      getPage = 0;
      setPage(0);
      console.log("jangan sini");
    }

    setCurrentPage(getPage);

    const newOffset = (getPage * itemsPerPage) % dataClass.length;
    const endOffset = newOffset + itemsPerPage;

    setCurrentItems(dataClass.slice(newOffset, endOffset));
    console.log({ pageCount: Math.ceil(dataClass.length / itemsPerPage) });
    setPageCount(Math.ceil(dataClass.length / itemsPerPage));
  }, [dataClass]);

  useEffect(() => {
    const currentUrl = window.location.href;

    const url = new URL(currentUrl);
    const path = url.pathname;

    if (path.includes("/kelas-bisnis")) {
      const searchParams = new URLSearchParams(url.search);
      let pageValue = searchParams.get("page");

      let kategoriValue = searchParams
        .getAll("kategori")
        ?.toString()
        .split(",");
      let levelValue = searchParams.getAll("level")?.toString().split(",");
      let hargaValue = searchParams.getAll("harga")?.toString().split(",");

      const getPage = Number(page);
      setCurrentPage(getPage);
      const newOffset = (getPage * itemsPerPage) % dataClass.length;
      const endOffset = newOffset + itemsPerPage;

      setCurrentItems(dataClass.slice(newOffset, endOffset));
      console.log({ pageCount2: Math.ceil(dataClass.length / itemsPerPage) });
      setPageCount(Math.ceil(dataClass.length / itemsPerPage));
    } else {
      console.log("Path tidak sesuai dengan /layanan/kelas-bisnis");
    }
  }, [page]);

  useEffect(() => {
    console.log({ currentItems });
  }, [currentItems]);

  useEffect(() => {
    window.scrollTo(0, 500);
  }, [toggleFilter]);

  return (
    <div
      className={`${
        toggleFilter ? "  " : ""
      } w-full px-[5px] md:px-[100px] 2xl:p-0 2xl:max-w-[1080px] flex  justify-center items-start gap-[52px] mt-[160px]`}
    >
      <FilterDataKelas
        setToggleFilter={setToggleFilter}
        toggleFilter={toggleFilter}
        kategori={kategoriFilter}
        setKategori={setKategoriFilter}
        setLevel={setLevelFilter}
        setPage={setPage}
        setHarga={setHargaFilter}
        level={levelFilter}
        harga={hargaFilter}
        setHargaUrl={setHargaUrl}
        setKategoriUrl={setKategoriUrl}
        setLevelUrl={setLevelUrl}
        fetchDataKelasButton={fetchDataKelasButton}
        kategoriFilter={kategoriFilter}
        hargaFilter={hargaFilter}
        levelFilter={levelFilter}
        setSearch={setSearch}
      />

      <div className="w-full flex flex-col items-center gap-[52px] ">
        <div className="w-full flex flex-col items-center gap-[32px] h-[4200px] lg:h-[2372px]  xl:h-[1472px]">
          <button
            onClick={() => setToggleFilter((prev) => !prev)}
            className="sticky top-[20px] flex md:hidden px-[36px] py-[12px]  justify-center items-center text-whiteSmoke500 bg-black500 rounded-[10px]"
          >
            <HiFilter />
            <p className="text-[16px] leading-[24px] font-medium">Filter</p>
          </button>
          <div className="   w-full   flex  items-center justify-end">
            <p>({dataClass.length}) Kelas Ditemukan</p>
          </div>
          <div className="grid grid-cols-1  lg:grid-cols-2  xl:grid-cols-3  gap-[24px] ">
            {currentItems?.map((el, index) => {
              const dataRating = el.kelas_ratings;
              const getSum = dataRating.reduce(
                (acc, obj) => acc + obj.nilai,
                0
              );
              const getAvarage = Number(getSum / dataRating.length).toFixed(1);
              return (
                <KelasBisnisCard
                  el={el}
                  index={index}
                  key={index}
                  star={isNaN(getAvarage) ? Number(0) : getAvarage}
                />
              );
            })}
          </div>
        </div>

        <div className="w-full ">
          <PaginationDetaile
            handlePageClick={handlePageClick}
            pageCount={pageCount || 1}
            currentPage={currentPage}
            dataFound={kelasBisnis}
            currentItems={currentItems}
            marginBot={"mb-[160px]"}
          />
        </div>
      </div>
    </div>
  );
}

export default MainSection;
