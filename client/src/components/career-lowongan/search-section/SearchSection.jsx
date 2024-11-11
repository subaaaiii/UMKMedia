import React, { useState } from "react";
import { images } from "../../../constants";
import { Link } from 'react-router-dom';

function SearchSection({ onSearch }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <div className="flex bg-black500 w-full  w-full ">
      <div className="relative flex  w-full justify-center md:justify-end">
        <img
          src={images.geometricShapeArtikelDesktop}
          alt=""
          className="hidden md:block "
        />
        <img
          src={images.geometricShapeArtikelMobile}
          alt=""
          className="block md:hidden"
        />

        <div className="justify-center flex flex-col absolute w-full left-0 w-fit md:ml-[100px]  z-10">
        <p className="max-w-[564px] text-[14px] font-light md:leading-[100px] lg:leading-[100px] md:text-left" style={{ color:'#888'}}>
        <Link
        to="/career"
        style={{
          textDecoration: 'none',
          color: isHovered ? 'white' : '#888',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Karir
      </Link> &nbsp; &gt; <span style={{ color: 'white', marginLeft:'5px' }}>  Semua Lowongan</span>
          </p>
          <div className="flex flex-col lg:my-0 md:p-0 md:h-full py-[110px] w-full h-[420px]">
              <h1 className="flex justify-center md:justify-start items-center text-center md:text-start text-[24px] md:text-[48px] font-bold leading-[36px] md:leading-[72px] text-whiteSmoke500 left-[100px] md:max-w-[572px] md:mb-[10px] ">
                Semua Lowongan
              </h1>
              <p className="items-center text-center md:text-start font-heebo md:max-w-[564px] w-full md:text-[18px] text-[12px] md:mb-[40px] md:my-0 leading-[20px] md:leading-[28px] text-whiteSmoke600 font-light my-[20px]">
                Temukan beragam pilihan karir yang paing sesuai dengan minat, <br />
                bakat, dan passion kamu
              </p>
              <div className="flex flex-col md:mx-0 mx-[70px] sm:mx-[70px] md:flex-row md:items-start md:justify-start items-center justify-center lg:text-[16px] text-[14px] relative" style={{ color: '#919192' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-7 w-6 absolute top-1/2 transform -translate-y-1/2 "
                  style={{ left: '8px' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6M3 9a9 9 0 1 1 18 0 9 9 0 0 1-18 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Cari lowongan yang kamu inginkan"
                  className="lg:w-[556px] md:w-[500px] w-full h-14 rounded-xl pl-12"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onKeyPress={handleKeyPress}
                  style={{ color: 'black' }}
                />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;