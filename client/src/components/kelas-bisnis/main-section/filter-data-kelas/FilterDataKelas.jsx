import React, { useMemo, useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { HiX } from "react-icons/hi";
import ButtonWhiteSmoke500 from "../../../global-component/button/button-whitesmoke500/ButtonWhiteSmoke500";
import ButtonBlack500 from "../../../global-component/button/button-black500/ButtonBlack500";

function FilterDataKelas({
  kategori,
  setKategori,
  // handleKategori,
  level,
  setLevel,
  setPage,
  setHarga,
  // handleLevel,
  harga,
  toggleFilter,
  setToggleFilter,
  setHargaUrl,
  setLevelUrl,
  setKategoriUrl,
  fetchDataKelasButton,
  kategoriFilter,
  hargaFilter,
  levelFilter,
  setSearch,
}) {
  const navigate = useNavigate();

  // const fetchKategori = useMemo(() => {
  //   setKategoriFilter(kategori);
  // }, [kategori]);
  // checkFilter({ kategor: 2 });

  const handleChangeKategori = (id) => {
    const newKategori = kategori.map((el) => {
      if (el.id === id) {
        return { ...el, bool: !el.bool };
      }
      return el;
    });
    // console.log(newKategori);
    const forUrl = newKategori
      .filter((el) => el.bool === true)
      .map((el) => el.nama);
    // console.log(forUrl);
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const searchParams = new URLSearchParams(url.search);
    let pageValue = searchParams.get("page");

    let kategoriValue = searchParams.get("kategori")?.toString().split(",");
    const levelValue = searchParams.get("level")?.toString().split(",");
    const hargaValue = searchParams.get("harga")?.toString().split(",");
    const searchValue = searchParams.get("search")?.toString();

    navigate(
      `?${new URLSearchParams({
        page: 1,
        kategori: forUrl,
        level: levelValue || "",
        harga: hargaValue || "",
        search: searchValue || "",
      })}`
    );
    setKategoriUrl(kategoriValue);
    // console.log(kategoriValue);
    setKategori(newKategori);
  };

  const handleChangeLevel = (id) => {
    const newLevel = level.map((el) => {
      if (el.id === id) {
        return { ...el, bool: !el.bool };
      }
      return el;
    });
    const forUrl = newLevel
      .filter((el) => el.bool === true)
      .map((el) => el.nama);
    // console.log(forUrl);s
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const searchParams = new URLSearchParams(url.search);
    let pageValue = searchParams.get("page");
    let kategoriValue = searchParams.get("kategori")?.toString().split(",");
    let hargaValue = searchParams.get("harga")?.toString().split(",");
    let levelValue = searchParams.get("level")?.toString().split(",");
    const searchValue = searchParams.get("search")?.toString();

    navigate(
      `?${new URLSearchParams({
        page: 1,
        kategori: kategoriValue || "",
        level: forUrl,
        harga: hargaValue || "",
        search: searchValue || "",
      })}`
    );
    // console.log({ newLevel, forUrl });
    setLevelUrl(levelValue);
    setLevel(newLevel);
  };

  const handleChangeHarga = (id) => {
    const newHarga = harga.map((el) => {
      if (el.id === id) {
        return { ...el, bool: !el.bool };
      }
      return el;
    });
    const forUrl = newHarga
      .filter((el) => el.bool === true)
      .map((el) => el.harga_max);
    // console.log(forUrl);
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const searchParams = new URLSearchParams(url.search);
    let pageValue = searchParams.get("page");
    let kategoriValue = searchParams.get("kategori")?.toString().split(",");
    let levelValue = searchParams.get("level")?.toString().split(",");
    let hargaValue = searchParams.get("harga")?.toString().split(",");
    const searchValue = searchParams.get("search")?.toString();

    navigate(
      `?${new URLSearchParams({
        page: 1,
        kategori: kategoriValue || "",
        level: levelValue || "",
        harga: forUrl,
        search: searchValue || "",
      })}`
    );
    setHargaUrl(hargaValue);
    setHarga(newHarga);
  };

  const resetFilterButton = () => {
    setHargaUrl(null);
    setKategori(null);
    setLevelUrl(null);
    setSearch("");

    const newKategori = kategoriFilter.map((obj) => ({ ...obj, bool: false }));
    setKategori(newKategori);
    const newHarga = hargaFilter.map((obj) => ({ ...obj, bool: false }));
    setHarga(newHarga);
    const newLevel = levelFilter.map((obj) => ({ ...obj, bool: false }));
    setLevel(newLevel);

    navigate("/kelas-bisnis");
    fetchDataKelasButton("reset");
  };

  return (
    <>
      <div
        className={` ${
          toggleFilter ? "flex " : "hidden md:flex"
        } fixed z-50 bg-whiteSmoke500 left-0 top-0 md:left-auto md:top-auto h-screen w-screen md:w-auto md:h-full md:static   flex-col gap-[32px]`}
      >
        <div
          className={`${
            toggleFilter ? "scrollbar-hide  md:mb-0" : ""
          } flex flex-col rounded-[10px] h-screen md:h-auto overflow-scroll md:overflow-visible md:shadow-customSm `}
        >
          <div className="px-[16px] py-[20px] md:px-0 md:py-0 flex  justify-center items-center">
            <h1 className="text-[22px] font-medium leading-[32px] mt-[24px]">Filter</h1>
            <HiX
              onClick={() => setToggleFilter((prev) => !prev)}
              className="block md:hidden w-[24px] h-[24px]"
            />
          </div>
          <div className="p-[24px] w-full md:w-[280px] ">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="text-[18px] md:text-[22px] font-medium leading-[28px] md:leading-[32px]"
                    >
                      Kategori
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={0}>
                  <ul className="space-y-[16px] mb-[24px]">
                    {kategoriFilter?.map((el, index) => (
                      <li
                        key={index}
                        className="gap-[12px] flex justify-start items-center"
                      >
                        <input
                          id={el.nama}
                          type="checkbox"
                          checked={!!el.bool}
                          onChange={() => handleChangeKategori(el.id)}
                        />
                        <label
                          htmlFor={el.nama}
                          className="text-[16px] font-light leading-[24px]"
                        >
                          {el.nama}
                        </label>
                      </li>
                    ))}
                  </ul>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="p-[24px] w-full md:w-[280px] ">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="text-[18px] md:text-[22px] font-medium leading-[28px] md:leading-[32px]"
                    >
                      Level
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={0}>
                  <ul className="space-y-[16px] mb-[24px] ">
                    {level.map((el, index) => (
                      <li
                        key={index}
                        className="gap-[12px] flex justify-start items-center"
                      >
                        <input
                          id={el.nama}
                          type="checkbox"
                          checked={!!el.bool}
                          onChange={() => handleChangeLevel(el.id)}
                        />
                        <label
                          htmlFor={el.nama}
                          className="text-[16px] font-light leading-[24px]"
                        >
                          {el.nama}
                        </label>
                      </li>
                    ))}
                  </ul>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="p-[24px] w-full md:w-[280px] ">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="text-[18px] md:text-[22px] font-medium leading-[28px] md:leading-[32px]"
                    >
                      Harga
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={0}>
                  <ul className="space-y-[16px] mb-[24px]   ">
                    {harga.map((el, index) => (
                      <li
                        key={index}
                        className="gap-[12px] flex justify-start items-center"
                      >
                        <input
                          id={el.harga_max}
                          checked={!!el.bool}
                          onChange={() => handleChangeHarga(el.id)}
                          type="checkbox"
                        />
                        <label
                          htmlFor={el.harga_max}
                          className="text-[16px] font-light leading-[24px]"
                        >
                          {el.harga_min === 0 ? (
                            <p className="w-[190px]">Gratis</p>
                          ) : (
                            <p className="w-[190px]">
                              Rp {el.harga_min?.toLocaleString("id-ID")} - Rp{" "}
                              {el.harga_max?.toLocaleString("id-ID")}
                            </p>
                          )}
                        </label>
                      </li>
                    ))}
                  </ul>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div
            className={`${
              toggleFilter ? "flex md:hidden" : "hidden"
            } items-center z-50  bottom-0 right-0 w-screen gap-[16px] bg-whiteSmoke500 shadow-customSm px-[16px] py-[20px]`}
          >
            <div className="w-full" onClick={() => resetFilterButton()}>
              <ButtonWhiteSmoke500
                TEXT_BUTTON={"Reset"}
                WIDTH={"w-full border-black border-[1px]"}
              />
            </div>

            <div className="w-full" onClick={() => fetchDataKelasButton()}>
              <ButtonBlack500
                TEXT_BUTTON={"Terapkan Filter"}
                WIDTH={"w-full "}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterDataKelas;
